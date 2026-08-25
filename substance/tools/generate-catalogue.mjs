// Generates substance/catalogue.generated.mjs -- the table the emitter resolves node names against.
//
//   node substance/tools/generate-catalogue.mjs [--catalog <sd-catalog.json>] [--out <path>]
//
// Two sources, because Designer splits the node set two ways and neither half knows about the
// other (see NOTES.md, "Catalogue sources"):
//
//   atomic   29 compositing definitions, read from sd-catalog.json, which tools/dump-catalog.py
//            writes out of a running Designer. They are not in any .sbs.
//   library  the graphs declared by the .sbs packages in the install, read here directly.
//            No API enumerates them.
//
// Library entries carry pins only, not parameters. There are 544 of them and their parameter
// lists run to tens of entries each, which would make this file megabytes for something the
// emitter does not need -- setInputPropertyValueFromId takes an id and Designer validates it.
// The 29 atomic definitions carry their full parameter list, because it is cheap and they are
// what most specs are made of.

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const PACKAGES = 'C:/Program Files/Adobe/Adobe Substance 3D Designer/resources/packages'

function arg (name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const CATALOG = arg('catalog', path.join(os.homedir(), 'node-graph-harvest', 'sd-catalog.json'))
const OUT = arg('out', path.join('substance', 'catalogue.generated.mjs'))

// Substance Type Codes, from resources/documentation/sbs_reference.md. Only the texture ones
// get a name -- anything else is a value pin and cannot take an image wire.
const TEXTURE_TYPES = { 1: 'color', 2: 'gray', 3: 'either' }

// A graph output's <channels> uses the same codes, and colour is encoded by leaving it out:
// across the whole install the value 1 never appears, while 825 outputs omit it. blur_hq
// settles it -- the colour variant omits <channels>, the grayscale one carries 2.
const DEFAULT_OUTPUT_TYPE = 'color'

// -- atomic half -------------------------------------------------------------------------

function readAtomic (catalogPath) {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'))
  const definitions = catalog.currentGraph?.nodeDefinitions
  if (!definitions?.length) {
    throw new Error(`${catalogPath} holds no currentGraph.nodeDefinitions -- rerun dump-catalog.py with a compositing graph open`)
  }
  const out = {}
  for (const definition of definitions) {
    const name = definition.id.replace(/^sbs::compositing::/, '')
    out[name] = {
      id: definition.id,
      label: definition.label,
      inputs: definition.inputs.filter(p => p.connectable).map(p => ({
        id: p.id,
        primary: !!p.primary,
        variadic: !!p.variadic,
      })),
      outputs: definition.outputs.map(p => ({ id: p.id })),
      parameters: definition.inputs.filter(p => !p.connectable).map(p => ({
        id: p.id,
        type: p.type,
        default: p.default,
      })),
    }
  }
  return out
}

// -- library half ------------------------------------------------------------------------

// A graph's own <attributes> sits between its <identifier> and the first of these, so cutting
// the window there keeps a child node's attributes out of the match.
const BODY_START = /<paraminputs>|<graphOutputs>|<compNodes>|<baseParameterOverrides>|<options>/

function between (text, open, close) {
  const start = text.indexOf(open)
  if (start === -1) return ''
  const end = text.indexOf(close, start)
  return text.slice(start, end === -1 ? undefined : end)
}

function attr (text, name) {
  return (text.match(new RegExp('<' + name + ' v="([^"]*)"')) || [])[1]
}

function readGraph (body, pkg) {
  const head = body.slice(0, (body.search(BODY_START) + 1 || body.length + 1) - 1)

  const params = between(body, '<paraminputs>', '</paraminputs>')
  const inputs = []
  const primaryUid = attr(body, 'primaryInput')
  for (const m of params.matchAll(/<paraminput>([\s\S]*?)<\/paraminput>/g)) {
    const type = TEXTURE_TYPES[attr(m[1], 'type')]
    if (!type) continue // a parameter, not an image input
    inputs.push({ id: attr(m[1], 'identifier'), type, primary: attr(m[1], 'uid') === primaryUid })
  }

  const outputs = []
  for (const m of between(body, '<graphOutputs>', '</graphOutputs>').matchAll(/<graphoutput>([\s\S]*?)<\/graphoutput>/g)) {
    const channels = attr(m[1], 'channels')
    outputs.push({
      id: attr(m[1], 'identifier'),
      type: channels === undefined ? DEFAULT_OUTPUT_TYPE : (TEXTURE_TYPES[channels] ?? 'value'),
    })
  }

  return {
    package: pkg,
    label: attr(head, 'label') ?? null,
    hidden: /<hideInLibrary v="1"\/>/.test(head),
    inputs,
    outputs,
  }
}

function walk (dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p, out)
    else if (entry.name.endsWith('.sbs')) out.push(p)
  }
  return out
}

function readLibrary (root) {
  const candidates = new Map() // graph identifier -> [entry]
  for (const file of walk(root)) {
    let text
    try { text = fs.readFileSync(file, 'utf8') } catch { continue }
    const pkg = path.relative(root, file).split(path.sep).join('/').replace(/\.sbs$/, '')
    // Exact <graph> only. <graphOutput> and <graphInput> carry pin identifiers, not graph names.
    const starts = [...text.matchAll(/<graph>\s*<identifier v="([^"]+)"\/>/g)]
    starts.forEach((m, i) => {
      const end = i + 1 < starts.length ? starts[i + 1].index : text.length
      const entry = readGraph(text.slice(m.index, end), pkg)
      if (!candidates.has(m[1])) candidates.set(m[1], [])
      candidates.get(m[1]).push(entry)
    })
  }
  return candidates
}

// -- emit --------------------------------------------------------------------------------

const atomic = readAtomic(CATALOG)
const candidates = readLibrary(PACKAGES)

const library = {}
const ambiguous = []
let retired = 0
for (const [name, entries] of candidates) {
  const visible = entries.filter(e => !e.hidden)
  if (visible.length === 0) { retired++; continue }
  if (visible.length > 1) { ambiguous.push(name); continue }
  const { hidden, ...entry } = visible[0]
  library[entry.package === undefined ? name : name] = entry
}

const sorted = obj => Object.fromEntries(Object.keys(obj).sort().map(k => [k, obj[k]]))

const header = `// GENERATED FILE -- do not edit by hand.
//
//   node substance/tools/generate-catalogue.mjs
//
// Read out of Adobe Substance 3D Designer ${JSON.parse(fs.readFileSync(CATALOG, 'utf8')).designerVersion}.
// ATOMIC comes from the API via tools/dump-catalog.py; LIBRARY from the shipped .sbs packages.
// Pin types are Substance Type Codes: color, gray, either. An output typed "value" is a
// number, not an image, and cannot take an image wire.
//
// ${Object.keys(atomic).length} atomic definitions, ${Object.keys(library).length} library nodes.
// ${retired} more graph ids are declared only by packages that hide them -- retired or internal,
// never offered by the Library. ${ambiguous.length === 1 ? 'One is' : ambiguous.length + ' are'} declared by more than one visible package and
// left out until something disambiguates ${ambiguous.length === 1 ? 'it' : 'them'}: ${ambiguous.sort().join(', ')}.
`

const body = `${header}
export const ATOMIC = ${JSON.stringify(sorted(atomic), null, 1)}

export const LIBRARY = ${JSON.stringify(sorted(library), null, 1)}
`

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, body)

console.log('atomic definitions :', Object.keys(atomic).length)
console.log('library nodes      :', Object.keys(library).length)
console.log('  retired/internal :', retired)
console.log('  ambiguous, left out:', ambiguous.length, ambiguous.length ? '(' + ambiguous.sort().join(', ') + ')' : '')
console.log('written:', OUT, '-', (fs.statSync(OUT).size / 1024).toFixed(0) + ' KB')
