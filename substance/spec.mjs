// Parses the Substance graph spec -- the hand-written input both the emitter and the renderer
// start from. Node declarations and wires, nothing about layout: lib/layout.mjs works positions
// out from the wires.
//
//   graph rough_metal
//
//   noise   perlin_noise        scale=6 disorder=0.35
//   soft    blur_hq_grayscale
//   base    uniform             colorswitch=false
//   warp    transformation
//   mix     blend
//   out     output
//
//   noise -> soft.Source
//   soft  -> mix.source
//   base  -> mix.destination
//   base  -> warp
//   warp  -> mix.opacity
//   mix   -> out
//
// A line holding "->" is a wire, anything else with content is a node. No section headers, no
// indentation rules, "#" comments to end of line.
//
// Pins may be left off either end of a wire. The source side defaults to the node's only output
// and is required where there is more than one -- 119 of the 501 library nodes have several.
// The target side defaults to the primary input, which every library node that takes an input
// has exactly one of.

const IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_]*$/

// Every compositing node carries these on top of whatever its definition declares, instance
// nodes included -- they are not in a library graph's <paraminputs> but they are settable.
const BASE_PARAMETERS = {
  $outputsize: 'int2',
  $format: 'sbs::compositing::format',
  $pixelsize: 'float2',
  $pixelratio: 'sbs::compositing::pixelratio',
  $tiling: 'sbs::compositing::tiling',
  $randomseed: 'int',
}

const ARITY = {
  bool: 1, int: 1, float: 1, string: 1,
  int2: 2, int3: 3, int4: 4,
  float2: 2, float3: 3, float4: 4,
  ColorRGB: 3, ColorRGBA: 4,
}

// A graph's own inputs and outputs are named by annotations rather than parameters, and the
// catalogue says which nodes have them: only the four bridges do. Nothing is hardcoded here --
// asking the catalogue means a Designer that adds an annotation gets it for free, and a spec
// that sets identifier on a blend is told blend has none.
const annotationType = (entry, id) => (entry.def.annotations ?? []).find(a => a.id === id)?.type
const annotationIds = entry => (entry.def.annotations ?? []).map(a => a.id)

// A usage is a name plus the components it covers plus a colour space, and a bridge can carry
// several. Components default to RGBA; the colour space is deliberately left empty rather than
// guessed, because nothing shipped with Designer says what an unset one should be and calling a
// height map sRGB would be worse than saying nothing. Write name:components:colourspace to set
// all three.
function parseUsage (text) {
  const t = text.trim().replace(/^["']|["']$/g, '')
  const parts = t.split(':')
  if (parts.length > 3 || parts.some(part => part === '')) return null
  if (!IDENTIFIER.test(parts[0])) return null
  return { name: parts[0], components: parts[1] ?? 'RGBA', colorSpace: parts[2] ?? '' }
}

const isEnum = type => type.includes('::')

import { LANGUAGES } from './strings.mjs'

export class SpecError extends Error {
  constructor (problems) {
    super(problems.map(p => `line ${p.line}: ${p.message}`).join('\n'))
    this.name = 'SpecError'
    this.problems = problems
  }
}

function stripComment (line) {
  // No escaping to worry about: a "#" inside a quoted string is the only false positive, and
  // spec strings are node parameter text, not prose.
  let quote = null
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (quote) { if (c === quote) quote = null } else if (c === '"' || c === "'") quote = c
    else if (c === '#') return line.slice(0, i)
  }
  return line
}

// -- literals ----------------------------------------------------------------------------

function parseLiteral (text) {
  const t = text.trim()
  if (t === 'true') return { kind: 'bool', values: [true] }
  if (t === 'false') return { kind: 'bool', values: [false] }
  if ((t.startsWith('"') && t.endsWith('"') && t.length > 1) ||
      (t.startsWith("'") && t.endsWith("'") && t.length > 1)) {
    return { kind: 'string', values: [t.slice(1, -1)] }
  }
  if (t.startsWith('[') && t.endsWith(']')) {
    const parts = t.slice(1, -1).split(',').map(s => s.trim()).filter(s => s !== '')
    const numbers = parts.map(Number)
    if (numbers.some(Number.isNaN)) return null
    return { kind: 'number', values: numbers }
  }
  const n = Number(t)
  if (t !== '' && !Number.isNaN(n)) return { kind: 'number', values: [n] }
  return null
}

// An enum parameter takes a value id -- blendingmode=multiply -- because nothing about the
// integer says which mode it is, and Designer's own spelling is not guessable: the value between
// add and multiply is "substract". The integer still works, since a graph read back out of
// Designer only knows the number.
function resolveEnum (catalogue, type, raw, id) {
  const choices = catalogue.ENUMS?.[type] ?? []
  const text = raw.trim().replace(/^["']|["']$/g, '')

  const named = choices.find(c => c.id === text)
  if (named) return { value: { class: 'SDValueEnum', typeId: type, components: [named.value], id: named.id } }

  const literal = parseLiteral(text)
  if (literal?.kind === 'number' && Number.isInteger(literal.values[0])) {
    const known = choices.find(c => c.value === literal.values[0])
    return { value: { class: 'SDValueEnum', typeId: type, components: literal.values, id: known?.id } }
  }
  return {
    error: choices.length
      ? `${id} is ${type} and takes one of ${choices.map(c => c.id).join(', ')}`
      : `${id} is the enum ${type} and takes a whole number`,
  }
}

function coerce (literal, type, id) {
  if (literal === null) return { error: `${id}: cannot read the value` }

  if (isEnum(type)) {
    if (literal.kind !== 'number' || literal.values.length !== 1 || !Number.isInteger(literal.values[0])) {
      return { error: `${id} is the enum ${type} and takes a whole number` }
    }
    return { value: { class: 'SDValueEnum', typeId: type, components: literal.values } }
  }

  const arity = ARITY[type]
  if (arity === undefined) return { error: `${id} has the type ${type}, which the emitter cannot write yet` }

  if (type === 'bool') {
    if (literal.kind !== 'bool') return { error: `${id} is a bool and takes true or false` }
    return { value: { class: 'SDValueBool', components: literal.values } }
  }
  if (type === 'string') {
    if (literal.kind !== 'string') return { error: `${id} is a string and takes a quoted value` }
    return { value: { class: 'SDValueString', components: literal.values } }
  }
  if (literal.kind !== 'number') return { error: `${id} is ${type} and takes numbers` }
  if (literal.values.length !== arity) {
    return { error: `${id} is ${type} and takes ${arity} number${arity > 1 ? 's' : ''}, got ${literal.values.length}` }
  }
  if (type.startsWith('int') && literal.values.some(v => !Number.isInteger(v))) {
    return { error: `${id} is ${type} and takes whole numbers` }
  }

  const suffix = arity === 1 ? '' : String(arity)
  const className = type === 'ColorRGB' || type === 'ColorRGBA'
    ? 'SDValue' + type
    : 'SDValue' + (type.startsWith('int') ? 'Int' : 'Float') + suffix
  return { value: { class: className, components: literal.values } }
}

// -- node and wire lines -----------------------------------------------------------------

function splitParameters (rest) {
  // Split on whitespace, but never inside [ ] or a quoted string.
  const out = []
  let depth = 0
  let quote = null
  let current = ''
  for (const c of rest) {
    if (quote) { current += c; if (c === quote) quote = null; continue }
    if (c === '"' || c === "'") { quote = c; current += c; continue }
    if (c === '[') depth++
    if (c === ']') depth--
    if (/\s/.test(c) && depth === 0) {
      if (current) out.push(current)
      current = ''
      continue
    }
    current += c
  }
  if (current) out.push(current)
  return out
}

function definitionFor (catalogue, type) {
  if (catalogue.ATOMIC[type]) return { kind: 'atomic', def: catalogue.ATOMIC[type] }
  // A project's own graph resolves like any other library node; only its kind differs, so a
  // reader of the page can see which graphs the team wrote.
  if (catalogue.LIBRARY[type]) return { kind: catalogue.LIBRARY[type].kind ?? 'library', def: catalogue.LIBRARY[type] }
  return null
}

function parameterType (entry, id) {
  if (id.startsWith('$')) return BASE_PARAMETERS[id]
  const found = (entry.def.parameters || []).find(p => p.id === id)
  return found?.type
}

// -- the parser --------------------------------------------------------------------------

export function parseSpec (text, catalogue) {
  const problems = []
  const nodes = new Map()
  const wires = []
  let name = null
  let lang = null

  const lines = text.split(/\r?\n/)
  lines.forEach((raw, i) => {
    const line = stripComment(raw).trim()
    if (!line) return
    const at = i + 1

    // The page's own prose is written in the reader's language, and the spec is where that is
    // declared -- so a spec written for a team keeps its language whoever builds it.
    if (/^lang\s/.test(line)) {
      const value = line.slice(4).trim()
      if (!LANGUAGES[value]) {
        problems.push({ line: at, message: `there is no "${value}" page language -- there is ${Object.keys(LANGUAGES).join(', ')}` })
      } else if (lang) problems.push({ line: at, message: 'the language is already set' })
      else lang = value
      return
    }

    if (/^graph\s/.test(line)) {
      const value = line.slice(5).trim()
      if (!IDENTIFIER.test(value)) problems.push({ line: at, message: `"${value}" is not a usable graph name` })
      else if (name) problems.push({ line: at, message: 'the graph is already named' })
      else name = value
      return
    }

    if (line.includes('->')) {
      const sides = line.split('->')
      if (sides.length !== 2) {
        problems.push({ line: at, message: 'a wire has exactly one "->"' })
        return
      }
      const [from, to] = sides.map(s => s.trim())
      const split = side => {
        const dot = side.indexOf('.')
        return dot === -1 ? [side, null] : [side.slice(0, dot), side.slice(dot + 1)]
      }
      const [fromNode, fromPin] = split(from)
      const [toNode, toPin] = split(to)
      if (!fromNode || !toNode) {
        problems.push({ line: at, message: 'a wire needs a node on each side' })
        return
      }
      wires.push({ line: at, from: fromNode, fromPin, to: toNode, toPin })
      return
    }

    const parts = splitParameters(line)
    const [nodeName, type, ...rest] = parts
    if (!type) {
      problems.push({ line: at, message: `"${nodeName}" has no node type` })
      return
    }
    if (!IDENTIFIER.test(nodeName)) {
      problems.push({ line: at, message: `"${nodeName}" is not a usable node name` })
      return
    }
    if (nodes.has(nodeName)) {
      problems.push({ line: at, message: `"${nodeName}" is declared twice` })
      return
    }
    const entry = definitionFor(catalogue, type)
    if (!entry) {
      problems.push({ line: at, message: `there is no node called "${type}"` })
      return
    }

    const values = []
    const annotations = []
    const usages = []
    for (const token of rest) {
      const eq = token.indexOf('=')
      if (eq === -1) {
        problems.push({ line: at, message: `"${token}" is not a parameter -- write it as name=value` })
        continue
      }
      const id = token.slice(0, eq)
      const raw = token.slice(eq + 1)

      // "usage" is spec shorthand for one entry in the "usages" annotation array.
      if (id === 'usage') {
        if (!annotationIds(entry).includes('usages')) {
          problems.push({ line: at, message: `${type} carries no usages -- only an output or input node does` })
          continue
        }
        const usage = parseUsage(raw)
        if (!usage) problems.push({ line: at, message: `"${raw}" is not a usage -- write a name, or name:components:colourspace` })
        else usages.push(usage)
        continue
      }

      const annotation = annotationType(entry, id)
      if (annotation) {
        if (annotation === 'string') {
          const literal = parseLiteral(raw)
          const text = literal?.kind === 'string' ? literal.values[0] : raw
          if (id === 'identifier' && !IDENTIFIER.test(text)) {
            problems.push({ line: at, message: `"${text}" is not a usable identifier` })
            continue
          }
          annotations.push({ id, value: { class: 'SDValueString', components: [text] } })
          continue
        }
        const { value, error } = coerce(parseLiteral(raw), annotation, id)
        if (error) problems.push({ line: at, message: error })
        else annotations.push({ id, value })
        continue
      }

      const declared = parameterType(entry, id)
      if (!declared) {
        const known = [...(entry.def.parameters || []).map(p => p.id), ...annotationIds(entry), ...Object.keys(BASE_PARAMETERS)]
        problems.push({ line: at, message: `${type} has no parameter "${id}"${known.length ? ` -- it has ${known.join(', ')}` : ''}` })
        continue
      }
      const { value, error } = isEnum(declared)
        ? resolveEnum(catalogue, declared, raw, id)
        : coerce(parseLiteral(raw), declared, id)
      if (error) problems.push({ line: at, message: error })
      else values.push({ id, value })
    }

    // The name written in the spec is already a good graph output name, so it becomes the
    // identifier unless the spec says otherwise. Nothing to write, and no output_1.
    if (annotationIds(entry).includes('identifier') && !annotations.some(a => a.id === 'identifier')) {
      annotations.unshift({ id: 'identifier', value: { class: 'SDValueString', components: [nodeName] } })
    }

    nodes.set(nodeName, { name: nodeName, type, kind: entry.kind, def: entry.def, values, annotations, usages, line: at })
  })

  const seen = new Map()
  for (const node of nodes.values()) {
    const identifier = node.annotations.find(a => a.id === 'identifier')?.value.components[0]
    if (!identifier) continue
    if (seen.has(identifier)) {
      problems.push({ line: node.line, message: `two nodes both name a graph input or output "${identifier}" -- ${seen.get(identifier)} has it already` })
    } else seen.set(identifier, node.name)
  }

  resolvePins(nodes, wires, problems)

  if (problems.length) throw new SpecError(problems.sort((a, b) => a.line - b.line))
  return { name, lang, nodes: [...nodes.values()], wires }
}

function resolvePins (nodes, wires, problems) {
  for (const wire of wires) {
    const source = nodes.get(wire.from)
    const target = nodes.get(wire.to)
    if (!source) problems.push({ line: wire.line, message: `"${wire.from}" is not a declared node` })
    if (!target) problems.push({ line: wire.line, message: `"${wire.to}" is not a declared node` })
    if (!source || !target) continue

    const outputs = source.def.outputs
    if (wire.fromPin === null) {
      if (outputs.length === 1) wire.fromPin = outputs[0].id
      else {
        problems.push({
          line: wire.line,
          message: `${wire.from} has ${outputs.length} outputs, so say which -- ${outputs.map(o => o.id).join(', ')}`,
        })
      }
    } else if (!outputs.some(o => o.id === wire.fromPin)) {
      problems.push({
        line: wire.line,
        message: `${source.type} has no output "${wire.fromPin}" -- it has ${outputs.map(o => o.id).join(', ')}`,
      })
    }

    const inputs = target.def.inputs
    if (wire.toPin === null) {
      const primary = inputs.find(p => p.primary)
      if (primary) wire.toPin = primary.id
      else if (inputs.length === 1) wire.toPin = inputs[0].id
      else {
        problems.push({
          line: wire.line,
          message: inputs.length
            ? `${wire.to} has no primary input, so say which -- ${inputs.map(p => p.id).join(', ')}`
            : `${target.type} takes no image input`,
        })
      }
    } else if (!inputs.some(p => p.id === wire.toPin)) {
      problems.push({
        line: wire.line,
        message: inputs.length
          ? `${target.type} has no input "${wire.toPin}" -- it has ${inputs.map(p => p.id).join(', ')}`
          : `${target.type} takes no image input`,
      })
    }
  }
}
