// node substance/describe.mjs <node> [<node> ...] [--spec <spec file>]
//
// What a node has, in the shape a spec line needs: its pins and what they carry, which input is
// the primary, its parameters and their types, and the value ids an enum takes. The catalogue
// is a 261 KB generated table and "grep it" was the advice; it does not grep -- every library
// node has an output called output, and the node keys sit inside a JSON literal. This is the
// lookup instead.
//
// --spec resolves the library the spec sits in, so a graph the project owns is described the
// same way as one Designer ships.

import { fileURLToPath } from 'node:url'

import * as shipped from './catalogue.generated.mjs'
import { BASE_PARAMETERS } from './spec.mjs'

const KIND = { atomic: 'built-in filter', library: 'library node', project: 'this project' }
const CARRIES = { color: 'colour', gray: 'grayscale', either: 'either', value: 'value' }

const isEnum = type => type.includes('::')

function pins (list) {
  if (!list.length) return 'none'
  return list
    .map(p => p.id + (p.primary ? '*' : '') + (p.type ? ':' + (CARRIES[p.type] ?? p.type) : ''))
    .join(', ')
}

// The catalogue writes an atomic default as the text Designer printed for it --
// SDValueInt2(int2(8,8)), SDValueEnum("sbs::compositing::format",0). A reader wants [8,8] and
// the enum's value id, so what can be reduced is, and what cannot is shown as it came.
function showDefault (catalogue, type, text) {
  if (!text) return ''
  if (isEnum(type)) {
    const n = Number(/,(-?\d+)\)$/.exec(text)?.[1])
    const named = catalogue.ENUMS?.[type]?.find(v => v.value === n)?.id
    return named ?? text
  }
  const inner = text.slice(text.indexOf('(') + 1, -1)
  const struct = /^\w+\((.*)\)$/.exec(inner)
  if (!struct) return inner
  return struct[1].includes(',') ? '[' + struct[1] + ']' : struct[1]
}

function parameters (catalogue, entry) {
  const own = (entry.parameters ?? []).filter(p => !p.id.startsWith('$'))
  if (!own.length) return ['  parameters  none']
  const width = Math.max(...own.map(p => p.id.length))
  const lines = ['  parameters']
  for (const p of own) {
    const choices = isEnum(p.type) ? (catalogue.ENUMS?.[p.type] ?? []).map(v => v.id) : null
    const shown = choices ? `enum: ${choices.join(', ')}` : p.type
    const fallback = showDefault(catalogue, p.type, p.default)
    lines.push(`    ${p.id.padEnd(width)}  ${shown}${fallback ? `  (default ${fallback})` : ''}`)
  }
  return lines
}

function describeOne (catalogue, name) {
  const atomic = catalogue.ATOMIC[name]
  const library = catalogue.LIBRARY[name]
  const entry = atomic ?? library
  if (!entry) {
    const near = [...Object.keys(catalogue.ATOMIC), ...Object.keys(catalogue.LIBRARY)]
      .filter(key => key.includes(name) || name.includes(key))
      .sort()
    throw new Error(`there is no node called "${name}"` +
      (near.length ? ` -- there is ${near.slice(0, 12).join(', ')}${near.length > 12 ? ', ...' : ''}` : ''))
  }
  const kind = atomic ? 'atomic' : (library.kind ?? 'library')
  const where = atomic
    ? entry.id
    : `${entry.package}.sbs` + (entry.category ? ` (${entry.category})` : '') + (entry.label ? ` "${entry.label}"` : '')

  const lines = [
    `${name} -- ${KIND[kind]} -- ${where}`,
    `  inputs      ${pins(entry.inputs)}${entry.inputs.some(p => p.primary) ? '   (* is the primary, the default target of a wire)' : ''}`,
    `  outputs     ${pins(entry.outputs)}${entry.outputs.length > 1 ? '   (more than one, so a wire has to say which)' : ''}`,
    ...parameters(catalogue, entry),
  ]
  // The bridges are named by annotations, and usage= is the spec's shorthand for one usages entry.
  const annotations = (entry.annotations ?? []).map(a => a.id)
  if (annotations.length) {
    lines.push(`  annotations ${annotations.join(', ')}` + (annotations.includes('usages') ? '   (write usage=<name>)' : ''))
  }
  lines.push(`  base        ${Object.keys(BASE_PARAMETERS).join(', ')}   (settable on every node)`)
  return lines.join('\n')
}

export function describe (catalogue, names) {
  return names.map(name => describeOne(catalogue, name)).join('\n\n')
}

// -- command line -----------------------------------------------------------------------------

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2)
  const at = args.indexOf('--spec')
  const specPath = at !== -1 ? args[at + 1] : null
  const names = args.filter((a, i) => at === -1 || (i !== at && i !== at + 1))
  if (!names.length) {
    console.error('usage: node substance/describe.mjs <node> [<node> ...] [--spec <spec file>]')
    process.exit(2)
  }

  let catalogue = shipped
  if (specPath) {
    const { resolve } = await import('./resolve.mjs')
    const resolved = resolve(specPath, shipped)
    for (const warning of resolved.warnings) console.error('warning:', warning)
    if (resolved.problems.length) {
      for (const problem of resolved.problems) console.error(problem)
      process.exit(1)
    }
    catalogue = resolved.catalogue
  }

  try {
    console.log(describe(catalogue, names))
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}
