// Generates substance/catalogue.generated.mjs -- the table the emitter resolves node names against.
//
//   node substance/tools/generate-catalogue.mjs [--docs <sbs_compositing.rst.txt>] [--out <path>]
//
// Two sources, because Designer splits the node set two ways and neither half knows about the
// other (see NOTES.md, "Catalogue sources"). Both are files in the install, so nothing here
// needs Designer to be running:
//
//   atomic   29 compositing definitions, read from the API reference Designer ships --
//            resources/documentation/pythonapi/.../sbs_compositing.rst.txt. It lists every
//            definition's Input, Output and Annotation properties with their flags, types and
//            defaults, and every enum type's value ids. They are not in any .sbs.
//   library  the graphs declared by the .sbs packages in the install, read here directly.
//            No API enumerates them.
//
// The atomic half used to come from tools/dump-catalog.py against a running Designer. The
// documentation carries strictly more -- annotations, and enum value ids, neither of which the
// dump collected -- and reading a file beats asking a person to run a script.
//
// Library entries carry each parameter's id and type but not its default, label or widget.
// The type is not optional: the emitter has to build an SDValue of the right class before it
// can call setInputPropertyValueFromId, and guessing from a spec literal cannot tell an int
// parameter from a float one. Ids and types alone are 153 KB across the whole install; the
// defaults and widgets behind them would be megabytes and nothing needs them.
//
// The 29 atomic definitions do carry their defaults, which is cheap at that count and lets the
// emitter skip writing a value that is already correct.

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

import { readPackages } from '../sbs.mjs'

const PACKAGES = 'C:/Program Files/Adobe/Adobe Substance 3D Designer/resources/packages'

function arg (name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const INSTALL = 'C:/Program Files/Adobe/Adobe Substance 3D Designer'
const DOCS = arg('docs', `${INSTALL}/resources/documentation/pythonapi/html/_sources/pythonapi/modules/sbs_compositing.rst.txt`)
const OUT = arg('out', path.join('substance', 'catalogue.generated.mjs'))

// The reference does not name the version it was generated for, and the header should say.
// Windows keeps it on the executable.
function designerVersion () {
  try {
    return execFileSync('powershell', ['-NoProfile', '-Command',
      `(Get-Item '${INSTALL.replace(/\//g, '\\')}\\Adobe Substance 3D Designer.exe').VersionInfo.ProductVersion`,
    ], { encoding: 'utf8' }).trim() || 'an unknown version'
  } catch {
    return 'an unknown version'
  }
}

// -- atomic half -------------------------------------------------------------------------

// The reference is regular enough to read line by line, and the indentation carries the
// nesting: three spaces for a definition's own fields, six for a property, nine for that
// property's label, twelve for one of its types. Matching on exact indentation is what keeps a
// property's Label from being read as the definition's.
const DEFINITION = /^\[\d+\/\d+\] '(sbs::compositing::[\w:]+)'$/
const DEF_LABEL = /^   \* Label: '(.*)'$/
const CATEGORY = /^   \* SDPropertyCategory = '(\w+)'$/
const PROPERTY = /^      \* '([^']+)'(?: = (.+?))?(?: \[([A-Z_, ]+)\])?$/
const PROPERTY_TYPE = /^            \* '([^']+)' \(SDType\w+\)$/
const ENUM_TYPE = /^   \* '([\w:]+)' \(SDTypeEnum\)$/
const ENUM_VALUE = /^      \* \w+ (\w+) = SDValue\w+\(\w+\((-?\d+)\)\)$/
const ENUM_LABEL = /^         \* Label: '(.*)'$/

function readApiDocs (docsPath) {
  const text = fs.readFileSync(docsPath, 'utf8')
  const split = text.search(/^Types:$/m)
  if (split === -1) throw new Error(`${docsPath} has no Types: section -- is this the compositing reference?`)

  const atomic = readDefinitions(text.slice(0, split).split(/\r?\n/))
  const enums = readEnums(text.slice(split).split(/\r?\n/))
  return { atomic, enums }
}

function readDefinitions (lines) {
  const out = {}
  let entry = null
  let category = null
  let property = null

  const close = () => {
    if (!entry || !property) return
    // An input that can take a wire is a pin; one that cannot is a parameter. The distinction
    // is the whole reason a spec can tell "blend has no parameter source" from a typo.
    if (category === 'Input') {
      if (property.connectable) {
        entry.inputs.push({ id: property.id, primary: property.primary, variadic: property.variadic })
      } else {
        entry.parameters.push({ id: property.id, type: property.type, default: property.default })
      }
    } else if (category === 'Output') {
      entry.outputs.push({ id: property.id })
    } else if (category === 'Annotation') {
      entry.annotations.push({ id: property.id, type: property.type })
    }
    property = null
  }

  for (const line of lines) {
    const definition = DEFINITION.exec(line)
    if (definition) {
      close()
      const name = definition[1].replace(/^sbs::compositing::/, '')
      entry = { id: definition[1], label: '', inputs: [], outputs: [], parameters: [], annotations: [] }
      out[name] = entry
      category = null
      continue
    }
    if (!entry) continue

    const label = DEF_LABEL.exec(line)
    if (label && !category) { entry.label = label[1]; continue }

    const heading = CATEGORY.exec(line)
    if (heading) { close(); category = heading[1]; continue }

    const found = PROPERTY.exec(line)
    if (found) {
      close()
      const flags = (found[3] ?? '').split(',').map(f => f.trim())
      property = {
        id: found[1],
        default: found[2] ?? null,
        type: undefined,
        connectable: flags.includes('CONNECTABLE'),
        primary: flags.includes('PRIMARY'),
        variadic: flags.includes('VARIADIC'),
      }
      continue
    }

    // A property lists every type it accepts and the first is the real one: $format reads
    // 'sbs::compositing::format' then plain 'int', and the enum is what the emitter has to write.
    const type = PROPERTY_TYPE.exec(line)
    if (type && property && property.type === undefined) property.type = type[1]
  }
  close()
  return out
}

// Enum values are what makes blendingmode writable by name. The reference gives each an id and
// the int behind it, which is the pair SDValueEnum.sFromValueId and sFromValue want.
function readEnums (lines) {
  const out = {}
  let type = null
  let value = null
  for (const line of lines) {
    const heading = ENUM_TYPE.exec(line)
    if (heading) { type = heading[1]; out[type] = []; value = null; continue }
    if (!type) continue

    const found = ENUM_VALUE.exec(line)
    if (found) { value = { id: found[1], value: Number(found[2]), label: '' }; out[type].push(value); continue }

    const label = ENUM_LABEL.exec(line)
    if (label && value) { value.label = label[1]; value = null }
  }
  return out
}

// -- emit --------------------------------------------------------------------------------

const { atomic, enums } = readApiDocs(DOCS)
const candidates = readPackages(PACKAGES)

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

// The Library panel's tree is a fixed set of queries compiled into Designer -- a category of
// one's own is metadata nothing displays. What does show is a category string the shelf already
// asks for, and the only honest list of those is the set the install's own packages use, since
// every one of them demonstrably appears in the panel. Collected here rather than transcribed.
const categories = [...new Set([...candidates.values()].flat()
  .filter(entry => !entry.hidden && entry.category)
  // Adobe ships one with a trailing space, a duplicate of the same category without it.
  .map(entry => entry.category.trim()))].sort()

const header = `// GENERATED FILE -- do not edit by hand.
//
//   node substance/tools/generate-catalogue.mjs
//
// Read out of Adobe Substance 3D Designer ${designerVersion()}, offline.
// ATOMIC and ENUMS come from the API reference the install ships; LIBRARY from its .sbs packages.
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

// Enum parameters take a value id, not the integer behind it: blendingmode=multiply rather than
// blendingmode=5. The integer is here because SDValueEnum.sFromValue wants it.
export const ENUMS = ${JSON.stringify(sorted(enums), null, 1)}

// Category strings the Library panel is known to display, because the install's own packages use
// them and those appear in its tree. A category outside this set is still valid metadata; it
// just has no shelf entry to be listed under.
export const CATEGORIES = ${JSON.stringify(categories, null, 1)}
`

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, body)

console.log('atomic definitions :', Object.keys(atomic).length)
console.log('shelf categories   :', categories.length)
console.log('enum types         :', Object.keys(enums).length, '--', Object.values(enums).reduce((n, v) => n + v.length, 0), 'values')
console.log('library nodes      :', Object.keys(library).length)
console.log('  retired/internal :', retired)
console.log('  ambiguous, left out:', ambiguous.length, ambiguous.length ? '(' + ambiguous.sort().join(', ') + ')' : '')
console.log('written:', OUT, '-', (fs.statSync(OUT).size / 1024).toFixed(0) + ' KB')
