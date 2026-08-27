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

export const IDENTIFIER = /^[A-Za-z_][A-Za-z0-9_]*$/

// Every compositing node carries these on top of whatever its definition declares, instance
// nodes included -- they are not in a library graph's <paraminputs> but they are settable.
export const BASE_PARAMETERS = {
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

// What a compositing graph itself carries, as opposed to a node. Read out of a live graph by
// tools/dump-graph-annotations.py -- there is no offline source for these, the way
// sbs_compositing.rst.txt is the source for node definitions.
//
// The format reference calls three of them something else: authorURL, hideInLibrary and
// physicalSize. The API says author_url, show_in_library and physical_size, and show_in_library
// is the inverse of the file's flag. So the two vocabularies agree less than they did for output
// nodes, which is why this was probed rather than assumed.
//
// identifier is left out on purpose -- the graph line already names the graph, and two ways to
// set it is one too many. icon is an SDTypeTexture and out of reach of a spec literal.
const GRAPH_ANNOTATIONS = {
  category: 'string',
  label: 'string',
  description: 'string',
  author: 'string',
  author_url: 'string',
  tags: 'string',
  userdata: 'string',
  show_in_library: 'bool',
  outputs_computation: 'bool',
  physical_size: 'float3',
}

const DESCRIBE_LINE = new RegExp('^(' + Object.keys(GRAPH_ANNOTATIONS).join('|') + ')(?:\\s+(.*))?$')

// An exposed parameter is a property on the graph, and what a person can say about it was read
// off a graph where three were exposed by hand -- see NOTES, "Exposing a parameter". The
// annotation set depends on the type: min/max/step/clamp on a number, label_true/label_false on
// a bool, the rest on everything.
//
// The getter is the other half. Nothing inside the graph reads the parameter until a node
// parameter goes under a one-node function graph holding one of these, and which one is decided
// by the type -- get_integer1 for a scalar int, not get_integer.
const EXPOSED_TYPES = {
  float: 'sbs::function::get_float1',
  float2: 'sbs::function::get_float2',
  float3: 'sbs::function::get_float3',
  float4: 'sbs::function::get_float4',
  int: 'sbs::function::get_integer1',
  int2: 'sbs::function::get_integer2',
  int3: 'sbs::function::get_integer3',
  int4: 'sbs::function::get_integer4',
  bool: 'sbs::function::get_bool',
  string: 'sbs::function::get_string',
}

export const SD_TYPE_CLASS = {
  float: 'SDTypeFloat', float2: 'SDTypeFloat2', float3: 'SDTypeFloat3', float4: 'SDTypeFloat4',
  int: 'SDTypeInt', int2: 'SDTypeInt2', int3: 'SDTypeInt3', int4: 'SDTypeInt4',
  bool: 'SDTypeBool', string: 'SDTypeString',
}

// A range setting is in the parameter's own type; the rest are fixed. Which is which is decided
// by the key, never by comparing the two types -- a label on a string parameter is not a range
// because both happen to spell "string".
const EXPOSED_ANNOTATIONS = {
  label: 'string', description: 'string', group: 'string', userdata: 'string',
  visible_if: 'string', editor: 'string',
  label_true: 'string', label_false: 'string',
  clamp: 'bool', randomizable: 'bool',
  min: null, max: null, step: null,
}
const RANGE = new Set(['min', 'max', 'step'])

const isEnum = type => type.includes('::')

import { LANGUAGES } from './strings.mjs'
import { OUTPUTS } from './outputs.generated.mjs'

// The library's own half of the output vocabulary. Named here rather than in project.mjs, which
// is what reads it: the parser is what refuses a spec for being outside the vocabulary, so the
// parser is what has to be able to say where the vocabulary is widened. project.mjs imports it
// back the other way, which keeps the dependency pointing one direction.
export const OUTPUTS_FILE = 'outputs.txt'

export class SpecError extends Error {
  constructor (problems) {
    super(problems.map(p => `line ${p.line}: ${p.message}`).join('\n'))
    this.name = 'SpecError'
    this.problems = problems
  }
}

// A wire is a line with "->" outside any quoted value. A label is free text and an arrow is a
// thing people write in one; reading it off the raw line turned such a node into two wire
// endpoints nothing had declared, and the errors named the wrong problem.
function isWire (line) {
  let quote = null
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (quote) { if (c === quote) quote = null } else if (c === '"' || c === "'") quote = c
    else if (c === '-' && line[i + 1] === '>') return true
  }
  return false
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

// -- exposed parameters -------------------------------------------------------------------

// A `param` line is one parameter the graph offers to whoever uses it:
//
//   param scratch_amount float default=0.3 min=0 max=1 label="Scratch amount" group="Wear"
//
// It carries more shape than any other line -- a type that picks both an SDType class and a
// getter, a default in that type, and an annotation set that depends on the type. The other half
// is a node parameter written @scratch_amount, which the emitter puts under a one-node function
// graph; see resolveReferences below.

const NUMERIC = new Set(['float', 'float2', 'float3', 'float4', 'int', 'int2', 'int3', 'int4'])
const SCALAR = new Set(['float', 'int'])

function readParam (rest, line, params, problems) {
  const parts = splitParameters(rest)
  const [id, type, ...settings] = parts
  const fail = message => problems.push({ line, message })

  if (!id) return fail('param needs a name and a type')
  if (!IDENTIFIER.test(id)) return fail(`"${id}" is not a usable parameter name`)
  if (params.has(id)) return fail(`the parameter "${id}" is already declared`)
  if (!type) return fail(`param ${id} needs a type -- one of ${Object.keys(EXPOSED_TYPES).join(', ')}`)
  if (!EXPOSED_TYPES[type]) {
    return fail(`"${type}" is not a type a parameter can have -- it is one of ${Object.keys(EXPOSED_TYPES).join(', ')}`)
  }

  const param = { id, type, getter: EXPOSED_TYPES[type], value: null, annotations: [] }

  for (const setting of settings) {
    const eq = setting.indexOf('=')
    if (eq === -1) {
      fail(`"${setting}" is not a setting -- write it as name=value`)
      continue
    }
    const key = setting.slice(0, eq)
    const raw = setting.slice(eq + 1)

    if (key === 'default') {
      const { value, error } = coerce(parseLiteral(raw), type, `${id} default`)
      if (error) fail(error)
      else param.value = value
      continue
    }

    if (!(key in EXPOSED_ANNOTATIONS)) {
      fail(`${id} has no setting "${key}" -- it takes default, ${Object.keys(EXPOSED_ANNOTATIONS).join(', ')}`)
      continue
    }

    // min, max and step are in the parameter's own type. Designer reports them as ints on an int
    // parameter, so they are not floats that happen to hold whole numbers.
    const range = RANGE.has(key)
    if (range && !NUMERIC.has(type)) {
      fail(`${key} only means something on a number, and ${id} is ${type}`)
      continue
    }
    if (range && !SCALAR.has(type)) {
      // A vector's min/max was not read off a live graph, so the spec does not pretend to know
      // whether it is one number or one per component.
      fail(`${key} on a ${type} is untested, so the spec will not write it -- set it in Designer`)
      continue
    }
    const declared = range ? type : EXPOSED_ANNOTATIONS[key]
    if ((key === 'label_true' || key === 'label_false') && type !== 'bool') {
      fail(`${key} only means something on a bool, and ${id} is ${type}`)
      continue
    }

    // A string setting takes bare text as readily as quoted -- editor=slider reads better than
    // editor="slider", and the graph's own category line already works that way.
    if (declared === 'string') {
      const literal = parseLiteral(raw)
      const text = literal?.kind === 'string' ? literal.values[0] : raw
      param.annotations.push({ id: key, value: { class: 'SDValueString', components: [text] } })
      continue
    }

    const { value, error } = coerce(parseLiteral(raw), declared, `${id} ${key}`)
    if (error) fail(error)
    else param.annotations.push({ id: key, value })
  }

  // Designer writes both when a person exposes a parameter, and they are not free text: the
  // identifier is how a getter names it and the type is how the interface draws it.
  param.annotations.unshift({ id: 'type', value: { class: 'SDValueString', components: [type] } })
  param.annotations.unshift({ id: 'identifier', value: { class: 'SDValueString', components: [id] } })

  params.set(id, param)
}

// -- the parser --------------------------------------------------------------------------

// The output convention, and how much of it is a refusal.
//
// Three rules, and they do not all apply in the same places:
//
//   always  -- a usage that is written has to be one the vocabulary has. A typo costs nothing
//              to catch here and is expensive to find in a bake, and the check has no opinion
//              about anything the spec did not already say.
//   strict  -- an output must carry a usage, and its identifier must be the one the vocabulary
//              gives for that usage.
//
// strict is on inside a library and off outside one, because that is where the difference is
// real: `sbsrender --output-name` defaults to `{outputNodeName}`, so inside a library an
// identifier is the filename that lands in the engine's content folder and the specs around it
// are a set somebody reads. A one-off network pasted into whatever graph is open has nothing
// downstream of it to be consistent with.
export function parseSpec (text, catalogue, { outputs = OUTPUTS, strict = false } = {}) {
  const problems = []
  const nodes = new Map()
  const wires = []
  let name = null
  let lang = null
  let pkg = null
  const describe = {}
  const params = new Map()
  const presets = []

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

    // Which .sbs the graph is built into. Optional, because one graph per package is the
    // common case -- but a package holds many graphs and Adobe's own do, so a spec has to be
    // able to say. blur_hq.sbs holds blur_hq and blur_hq_grayscale.
    // preset "<label>" <param>=<value> ...
    if (/^preset(\s|$)/.test(line)) {
      presets.push({ line: at, rest: line.slice(6) })
      return
    }

    // param <id> <type> [default=... label="..." min=... ...]
    if (/^param(\s|$)/.test(line)) {
      readParam(line.slice(5), at, params, problems)
      return
    }

    const described = DESCRIBE_LINE.exec(line)
    if (described) {
      const [, key, raw] = described
      const type = GRAPH_ANNOTATIONS[key]
      if (describe[key]) {
        problems.push({ line: at, message: `the ${key} is already set` })
      } else if (!(raw ?? '').trim()) {
        problems.push({ line: at, message: `${key} needs a value` })
      } else if (type === 'string') {
        describe[key] = { type, text: raw.trim().replace(/^["']|["']$/g, '') }
      } else {
        const { value, error } = coerce(parseLiteral(raw), type, key)
        if (error) problems.push({ line: at, message: error })
        else describe[key] = { type, value }
      }
      return
    }

    if (/^package\s/.test(line)) {
      const value = line.slice(7).trim()
      if (!IDENTIFIER.test(value)) problems.push({ line: at, message: `"${value}" is not a usable package name` })
      else if (pkg) problems.push({ line: at, message: 'the package is already named' })
      else pkg = value
      return
    }

    if (/^graph\s/.test(line)) {
      const value = line.slice(5).trim()
      if (!IDENTIFIER.test(value)) problems.push({ line: at, message: `"${value}" is not a usable graph name` })
      else if (name) problems.push({ line: at, message: 'the graph is already named' })
      else name = value
      return
    }

    if (isWire(line)) {
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
    const bindings = []
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

      // @name makes this parameter follow an exposed one instead of holding a constant. The
      // parameter it names may be declared further down, so it is checked after the whole spec
      // has been read.
      if (raw.startsWith('@')) {
        bindings.push({ id, param: raw.slice(1), line: at })
        continue
      }

      const declared = parameterType(entry, id)
      if (!declared) {
        // An atomic definition already carries the base parameters, a library one does not, so
        // the two lists overlap for half the catalogue. Listing $outputsize twice in the message
        // that is meant to help reads as a bug in the thing doing the telling.
        const known = [...new Set([
          ...(entry.def.parameters || []).map(p => p.id),
          ...annotationIds(entry),
          ...Object.keys(BASE_PARAMETERS),
        ])]
        problems.push({ line: at, message: `${type} has no parameter "${id}"${known.length ? ` -- it has ${known.join(', ')}` : ''}` })
        continue
      }
      const { value, error } = isEnum(declared)
        ? resolveEnum(catalogue, declared, raw, id)
        : coerce(parseLiteral(raw), declared, id)
      if (error) problems.push({ line: at, message: error })
      else values.push({ id, value })
    }

    // A usage that is written has to be a real one, wherever this spec lives. Everything after
    // this depends on it: an unknown usage has no identifier to give and nothing downstream can
    // select on it.
    const unknown = usages.filter(u => !(u.name in outputs))
    for (const u of unknown) {
      problems.push({ line: at, message: `"${u.name}" is not a usage the vocabulary has -- it has ${Object.keys(outputs).sort().join(', ')}` })
    }

    // An output's identifier is decided by its usage, not by the node's spec name. The name is a
    // local handle for wiring; the identifier is the graph's public one, and it is what
    // sbsrender writes into the exported filename -- so `o output usage=height` arriving as a
    // file called `o` would be nobody's intent. Input bridges keep the node name, since nothing
    // exports them and there is no vocabulary for what they carry.
    const named = outputs[usages.find(u => u.name in outputs)?.name]
    const explicit = annotations.find(a => a.id === 'identifier')?.value.components[0]
    if (type === 'output' && named) {
      if (strict && explicit && explicit !== named) {
        problems.push({ line: at, message: `an output tagged ${usages[0].name} is called "${named}" here, not "${explicit}" -- rename it in ${OUTPUTS_FILE}, or drop the identifier and take the one it has` })
      }
      if (!explicit) annotations.unshift({ id: 'identifier', value: { class: 'SDValueString', components: [named] } })
    } else if (annotationIds(entry).includes('identifier') && !explicit) {
      // The name written in the spec is already a good name for a graph input, so it becomes the
      // identifier unless the spec says otherwise. Nothing to write, and no output_1.
      annotations.unshift({ id: 'identifier', value: { class: 'SDValueString', components: [nodeName] } })
    }

    // Inside a library an untagged output is the one thing nothing downstream can recover from:
    // no export preset selects it, no bake step addresses it, and the graph beside it that did
    // tag its outputs now disagrees with this one for no stated reason.
    if (strict && type === 'output' && !usages.length) {
      problems.push({ line: at, message: `"${nodeName}" is a graph output and carries no usage -- add one of ${Object.keys(outputs).sort().join(', ')}, or add yours to ${OUTPUTS_FILE}` })
    }

    nodes.set(nodeName, { name: nodeName, type, kind: entry.kind, def: entry.def, values, annotations, usages, bindings, line: at })
  })

  const seen = new Map()
  for (const node of nodes.values()) {
    const identifier = node.annotations.find(a => a.id === 'identifier')?.value.components[0]
    if (!identifier) continue
    if (seen.has(identifier)) {
      problems.push({ line: node.line, message: `two nodes both name a graph input or output "${identifier}" -- ${seen.get(identifier)} has it already` })
    } else seen.set(identifier, node.name)
  }

  const resolvedPresets = resolvePresets(presets, params, problems)
  resolveBindings(nodes, params, problems)
  resolvePins(nodes, wires, problems)

  if (problems.length) throw new SpecError(problems.sort((a, b) => a.line - b.line))
  return { name, lang, package: pkg, describe, params: [...params.values()], presets: resolvedPresets, nodes: [...nodes.values()], wires }
}

// A preset is a named set of values for the parameters the graph exposes -- the thing that lets
// somebody pick "Rough" instead of learning what six numbers do. It can only name parameters the
// graph actually has, so a typo is caught here rather than showing up as a preset that changes
// nothing.
function resolvePresets (presets, params, problems) {
  const out = []
  for (const { line, rest } of presets) {
    const parts = splitParameters(rest)
    const [rawLabel, ...settings] = parts
    const label = (rawLabel ?? '').replace(/^["']|["']$/g, '')
    if (!label) {
      problems.push({ line, message: 'preset needs a name -- preset "Rough" amount=0.8' })
      continue
    }
    if (out.some(p => p.label === label)) {
      problems.push({ line, message: `the preset "${label}" is already declared` })
      continue
    }
    const inputs = []
    for (const setting of settings) {
      const eq = setting.indexOf('=')
      if (eq === -1) {
        problems.push({ line, message: `"${setting}" is not a value -- write it as parameter=value` })
        continue
      }
      const id = setting.slice(0, eq)
      const param = params.get(id)
      if (!param) {
        const known = [...params.keys()]
        problems.push({
          line,
          message: known.length
            ? `"${id}" is not a parameter this graph exposes -- it exposes ${known.join(', ')}`
            : `"${id}" is not a parameter this graph exposes, and it exposes none`,
        })
        continue
      }
      const { value, error } = coerce(parseLiteral(setting.slice(eq + 1)), param.type, `${label}: ${id}`)
      if (error) problems.push({ line, message: error })
      else inputs.push({ id, value })
    }
    if (!inputs.length && settings.length === 0) {
      problems.push({ line, message: `the preset "${label}" sets nothing` })
      continue
    }
    out.push({ label, inputs })
  }
  return out
}

// A node parameter written @name follows an exposed parameter. Both ends have to agree on the
// type: the getter that reads a float cannot drive an int, and Designer would take the wiring
// without complaint and compute something else.
function resolveBindings (nodes, params, problems) {
  for (const node of nodes.values()) {
    for (const binding of node.bindings) {
      const param = params.get(binding.param)
      if (!param) {
        const known = [...params.keys()]
        problems.push({
          line: binding.line,
          message: known.length
            ? `"${binding.param}" is not a parameter this graph exposes -- it exposes ${known.join(', ')}`
            : `"${binding.param}" is not a parameter this graph exposes, and it exposes none. Declare one with a param line`,
        })
        continue
      }
      const declared = parameterType({ def: node.def }, binding.id)
      if (!declared) {
        problems.push({ line: binding.line, message: `${node.type} has no parameter "${binding.id}"` })
        continue
      }
      if (isEnum(declared)) {
        problems.push({
          line: binding.line,
          message: `${binding.id} is the enum ${declared}, and driving one from an exposed parameter is untested -- set it in Designer`,
        })
        continue
      }
      if (declared !== param.type) {
        problems.push({
          line: binding.line,
          message: `${binding.id} is ${declared} but "${param.id}" is ${param.type}`,
        })
        continue
      }
      binding.getter = param.getter
    }
  }
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
