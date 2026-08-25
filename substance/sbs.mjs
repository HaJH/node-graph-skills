// Reading a .sbs package: the graphs it declares, their pins and their parameters.
//
// Shared by two callers that need exactly the same answer. tools/generate-catalogue.mjs runs it
// over Designer's install to build the shipped catalogue; the build runs it over a project's own
// packages so a team graph resolves as a node name. One parser, so a graph a team wrote is
// described the same way as one Adobe shipped -- which is the point of a library that
// accumulates.
//
// No API enumerates library graphs, so this reads the XML. The format is in the install:
// resources/documentation/sbs_reference.md.

import fs from 'node:fs'
import path from 'node:path'

// Substance Type Codes, from resources/documentation/sbs_reference.md. Only the texture ones
// get a name -- anything else is a value pin and cannot take an image wire.
const TEXTURE_TYPES = { 1: 'color', 2: 'gray', 3: 'either' }

// The rest of the codes, named the way the API names the same types on an atomic definition,
// so the emitter reads one vocabulary rather than two. A library graph's dropdown parameters
// are plain ints here -- only atomic definitions carry real enum types.
const VALUE_TYPES = {
  4: 'bool',
  16: 'int', 32: 'int2', 64: 'int3', 128: 'int4',
  256: 'float', 512: 'float2', 1024: 'float3', 2048: 'float4',
  16384: 'string', 32768: 'string',
}

// A graph output's <channels> uses the same codes, and colour is encoded by leaving it out:
// across the whole install the value 1 never appears, while 825 outputs omit it. blur_hq
// settles it -- the colour variant omits <channels>, the grayscale one carries 2.
const DEFAULT_OUTPUT_TYPE = 'color'

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

// Attribute values are XML, so they carry entities: "Splines &amp; Paths" is one category, not
// a string with an &amp in it. Labels have them too, and a label is read by a person.
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" }

function decode (text) {
  return text === undefined ? text : text.replace(/&(#x?[0-9a-fA-F]+|[a-z]+);/g, (whole, body) => {
    if (body[0] === '#') {
      const code = body[1] === 'x' || body[1] === 'X'
        ? parseInt(body.slice(2), 16)
        : parseInt(body.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : whole
    }
    return ENTITIES[body] ?? whole
  })
}

function attr (text, name) {
  return decode((text.match(new RegExp('<' + name + ' v="([^"]*)"')) || [])[1])
}

function readGraph (body, pkg) {
  const head = body.slice(0, (body.search(BODY_START) + 1 || body.length + 1) - 1)

  const params = between(body, '<paraminputs>', '</paraminputs>')
  const inputs = []
  const parameters = []
  const primaryUid = attr(body, 'primaryInput')
  for (const m of params.matchAll(/<paraminput>([\s\S]*?)<\/paraminput>/g)) {
    const code = attr(m[1], 'type')
    const id = attr(m[1], 'identifier')
    if (TEXTURE_TYPES[code]) {
      inputs.push({ id, type: TEXTURE_TYPES[code], primary: attr(m[1], 'uid') === primaryUid })
    } else {
      parameters.push({ id, type: VALUE_TYPES[code] ?? 'code:' + code })
    }
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
    // Which shelf entry the Library panel files it under, when it files it at all.
    category: attr(head, 'category') ?? null,
    hidden: /<hideInLibrary v="1"\/>/.test(head),
    inputs,
    outputs,
    parameters,
  }
}

function walk (dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    // Designer writes autosaves into .autosave next to the package, and a checkout has .git.
    // Scanning those makes one graph look like it is declared by three packages, which reads as
    // an ambiguity the user has to resolve and is really just a backup.
    if (entry.isDirectory()) { if (!entry.name.startsWith('.')) walk(p, out) }
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

export { readGraph, walk, readLibrary as readPackages, TEXTURE_TYPES, VALUE_TYPES, DEFAULT_OUTPUT_TYPE }
