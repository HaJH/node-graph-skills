// The ComfyUI graph spec: parsed into the neutral graph (see ui.mjs) and written back from one.
//
//   graph restyle
//   lang ko
//
//   ckpt     CheckpointLoaderSimple  ckpt_name=sd_xl_base_1.0.safetensors
//   pos      CLIPTextEncode          text="a bronze shield, black background"
//   neg      CLIPTextEncode          text="frame, text, watermark"
//   seed     PrimitiveInt            value=1234 $title="Seed"
//   sampler  KSampler                steps=30 cfg=6 sampler_name=dpmpp_2m scheduler=karras
//
//   ckpt -> pos
//   ckpt -> neg
//   ckpt -> sampler.model
//   pos  -> sampler.positive
//   neg  -> sampler.negative
//   seed -> sampler.seed
//
//   group "Prompt" pos neg $color=#3f789e
//
// `graph` titles the page and seeds the workflow's id -- a word, or a title in quotes. `lang` is
// the page's language.
//
// A statement is a line; a """ block is the one thing that carries it onto the next. A line with
// -> is a wire, one starting with graph, lang or group says so, anything else is a node. # starts
// a comment where a word could start, so $color=#3f789e is a colour and not a comment.
//
// A node line is <name> <Type> and then <input>=<value> for its widgets, by input path --
// size_mode.width for an input a dynamic combo adds. A word starting with $ is something only the
// frontend keeps: $title, $collapsed, $color, $bgcolor, and $control.<input> for the mode a seed
// widget changes by after each run. Input names never start with $, so the two cannot collide.
//
// Either end of a wire may leave its pin off. The source defaults to its only output, or to the
// one output whose type the target takes; the target to the one input that takes the source's
// type. An autogrow named without a slot -- `ref -> batch.images` -- takes its next free slot.

import { expandInputs, inputAt, isWidget, hasControl, defaultControl, defaultValue, checkValue, typesMatch,
  autogrowSlots, CONTROL_MODES, UNSUPPORTED, AUTOGROW } from './defs.mjs'
import { RESERVED, NAME } from './ui.mjs'
import { LANGUAGES } from './strings.mjs'


const ATTRIBUTES = ['$title', '$collapsed', '$color', '$bgcolor']

export class SpecError extends Error {
  constructor (problems) {
    super(problems.map(p => `line ${p.line}: ${p.message}`).join('\n'))
    this.problems = problems
  }
}

// --- reading the text into statements of tokens --------------------------------------------

function statements (text, problems) {
  const out = []
  let tokens = []
  let line = 1
  let startLine = 1
  let i = 0
  const n = text.length
  const end = () => {
    if (tokens.length) out.push({ line: startLine, tokens })
    tokens = []
  }
  while (i < n) {
    const c = text[i]
    if (c === '\n') { end(); line++; i++; continue }
    if (c === ' ' || c === '\t' || c === '\r') { i++; continue }
    if (c === '#') { while (i < n && text[i] !== '\n') i++; continue }

    if (!tokens.length) startLine = line
    let token = ''
    let depth = 0
    while (i < n) {
      const ch = text[i]
      if (text.startsWith('"""', i)) {
        const close = text.indexOf('"""', i + 3)
        if (close === -1) { problems.push({ line, message: 'a """ block is never closed' }); i = n; break }
        const block = text.slice(i, close + 3)
        line += (block.match(/\n/g) ?? []).length
        token += block
        i = close + 3
        continue
      }
      if (ch === '"') {
        let j = i + 1
        while (j < n && text[j] !== '"' && text[j] !== '\n') j += text[j] === '\\' ? 2 : 1
        if (text[j] !== '"') { problems.push({ line, message: 'a string is not closed on its line -- use """ for text over several lines' }); token += text.slice(i, j); i = j; break }
        token += text.slice(i, j + 1)
        i = j + 1
        continue
      }
      if (ch === '[' || ch === '{') depth++
      if (ch === ']' || ch === '}') depth--
      if (depth <= 0 && (ch === ' ' || ch === '\t' || ch === '\r' || ch === '\n')) break
      if (depth > 0 && ch === '\n') line++
      token += ch
      i++
    }
    tokens.push(token)
  }
  end()
  return out
}

const NUMBER = /^-?(\d+\.?\d*|\.\d+)([eE][-+]?\d+)?$/

/** A value as written. Returns {value} or {error}. */
export function parseValue (raw) {
  if (raw.startsWith('"""')) {
    if (!raw.endsWith('"""') || raw.length < 6) return { error: 'a """ block is not closed' }
    let body = raw.slice(3, -3)
    if (body.startsWith('\r\n')) body = body.slice(2)
    else if (body.startsWith('\n')) body = body.slice(1)
    return { value: body.replace(/\r\n/g, '\n') }
  }
  if (raw.startsWith('"') || raw.startsWith('[') || raw.startsWith('{')) {
    try { return { value: JSON.parse(raw) } } catch { return { error: `${raw} does not parse` } }
  }
  if (raw === 'true') return { value: true }
  if (raw === 'false') return { value: false }
  if (NUMBER.test(raw)) return { value: Number(raw) }
  if (raw === '') return { error: 'no value after =' }
  return { value: raw, bare: true }
}

const unquoted = token => token.replace(/"""[\s\S]*?"""/g, '').replace(/"(?:[^"\\]|\\.)*"/g, '')

const splitAttribute = token => {
  const at = token.indexOf('=')
  return at === -1 ? null : [token.slice(0, at), token.slice(at + 1)]
}

// --- parsing ---------------------------------------------------------------------------------

function distance (a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, j) => j)
  for (let i = 1; i <= a.length; i++) {
    let previous = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const kept = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1))
      previous = kept
    }
  }
  return row[b.length]
}

// Names that contain what was typed, or are a typo or two away from it -- KSamplr is KSampler.
export function suggest (catalogue, wanted) {
  const w = wanted.toLowerCase()
  const near = Math.max(2, Math.floor(w.length / 5))
  return Object.entries(catalogue)
    .filter(([name, def]) => name.toLowerCase().includes(w) || (def.display ?? '').toLowerCase().includes(w) ||
      distance(name.toLowerCase(), w) <= near)
    .map(([name]) => name)
    .slice(0, 12)
}

/** @returns the neutral graph, with {name, lang} and a line on everything */
export function parseSpec (text, catalogue) {
  const problems = []
  const fail = (line, message) => problems.push({ line, message })
  const graph = { name: null, lang: null, nodes: [], wires: [], groups: [] }
  const byName = new Map()
  const rawWires = []
  const rawGroups = []

  for (const { line, tokens } of statements(text, problems)) {
    const head = tokens[0]
    if (head === 'graph') {
      // The page's title, and the seed of the workflow's id. A word, or a title in quotes.
      const title = tokens.length === 2 ? parseValue(tokens[1]) : null
      if (!title || typeof title.value !== 'string' || !title.value.trim()) { fail(line, 'graph takes one word, or a title in quotes: graph "Restyle with IP-Adapter"'); continue }
      graph.name = title.value
      continue
    }
    if (head === 'lang') {
      if (tokens.length !== 2) { fail(line, 'lang takes one code'); continue }
      if (!LANGUAGES[tokens[1]]) { fail(line, `there is no "${tokens[1]}" page language -- there is ${Object.keys(LANGUAGES).join(', ')}`); continue }
      graph.lang = tokens[1]
      continue
    }
    if (head === 'group') { rawGroups.push({ line, tokens }); continue }
    // An arrow inside quotes is text -- $title="BL -> TR" is a node's title, not a wire.
    if (tokens.some(t => unquoted(t).includes('->'))) { rawWires.push({ line, text: tokens.join(' ') }); continue }

    // a node
    const [name, type, ...rest] = tokens
    if (!NAME.test(name)) { fail(line, `${name} is not a usable node name -- letters, digits and _ only, not starting with a digit`); continue }
    if (RESERVED.has(name)) { fail(line, `${name} is a keyword; name the node something else`); continue }
    if (byName.has(name)) { fail(line, `${name} is already declared on line ${byName.get(name).line}`); continue }
    if (!type) { fail(line, `${name} has no node type`); continue }
    const def = catalogue[type]
    const node = { name, type, title: null, values: {}, controls: {}, collapsed: false, color: null, bgcolor: null, line }
    byName.set(name, node)
    graph.nodes.push(node)
    if (!def) {
      const near = suggest(catalogue, type)
      fail(line, `${type} is not a node in the catalogue${near.length ? ` -- did you mean ${near.join(', ')}?` : ''}`)
      continue
    }
    const unsupported = def.inputs.filter(i => UNSUPPORTED.has(i.type))
    if (unsupported.length) {
      fail(line, `${type} has ${unsupported.map(i => `${i.name} (${i.type})`).join(', ')}, which a spec cannot express yet`)
      continue
    }

    const given = []
    for (const token of rest) {
      const pair = splitAttribute(token)
      if (!pair) { fail(line, `${token} is not <input>=<value>`); continue }
      const [key, raw] = pair
      const parsed = parseValue(raw)
      if (parsed.error) { fail(line, `${key}: ${parsed.error}`); continue }
      if (key.startsWith('$control.')) {
        given.push({ control: key.slice('$control.'.length), value: parsed.value })
      } else if (key.startsWith('$')) {
        if (!ATTRIBUTES.includes(key)) { fail(line, `${key} is not something a node carries -- ${[...ATTRIBUTES, '$control.<input>'].join(', ')}`); continue }
        if (key === '$collapsed') {
          if (typeof parsed.value !== 'boolean') fail(line, '$collapsed is true or false')
          else node.collapsed = parsed.value
        } else if (typeof parsed.value !== 'string') {
          fail(line, `${key} is text`)
        } else {
          node[key.slice(1)] = parsed.value
        }
      } else {
        if (key in node.values || given.some(g => g.path === key)) { fail(line, `${key} is given twice`); continue }
        given.push({ path: key, value: parsed.value, bare: parsed.bare })
      }
    }

    // Parents before children: size_mode decides whether size_mode.width exists.
    const values = given.filter(g => g.path).sort((a, b) => a.path.split('.').length - b.path.split('.').length)
    for (const g of values) {
      const input = inputAt(def, g.path, node.values)
      if (!input) {
        const shown = expandInputs(def, node.values, new Set()).filter(s => isWidget(s.input)).map(s => s.path)
        fail(line, `${type} has no widget ${g.path}${shown.length ? ` -- it has ${shown.join(', ')}` : ' -- it has no widgets'}`)
        continue
      }
      if (!isWidget(input)) { fail(line, `${g.path} is a ${input.type} socket; it takes a wire, not a value`); continue }
      let value = g.value
      // A combo value that reads as a number -- "4" -- is still the option's name.
      if (input.type === 'COMBO' && typeof value === 'number' && input.options?.includes(String(value))) value = String(value)
      const problem = checkValue(input, value, g.path)
      if (problem) { fail(line, problem); continue }
      node.values[g.path] = value
    }
    for (const g of given.filter(g => g.control)) {
      const input = inputAt(def, g.control, node.values)
      if (!input || !hasControl(input)) {
        const withControl = def.inputs.filter(hasControl).map(i => i.name)
        fail(line, `${g.control} has no control after generate${withControl.length ? ` -- ${withControl.join(', ')} ${withControl.length === 1 ? 'does' : 'do'}` : ''}`)
        continue
      }
      if (!CONTROL_MODES.includes(g.value)) { fail(line, `$control.${g.control} is one of ${CONTROL_MODES.join(', ')}`); continue }
      node.controls[g.control] = g.value
    }
  }

  // --- wires ---
  const wiredTo = new Map() // "node.input" -> line
  for (const { line, text: wireText } of rawWires) {
    const sides = wireText.split('->').map(s => s.trim())
    if (sides.length !== 2 || !sides[0] || !sides[1] || /\s/.test(sides[0]) || /\s/.test(sides[1])) {
      fail(line, 'a wire is <from>[.<output>] -> <to>[.<input>]')
      continue
    }
    const [fromName, ...outParts] = sides[0].split('.')
    const [toName, ...inParts] = sides[1].split('.')
    const from = byName.get(fromName)
    const to = byName.get(toName)
    if (!from) { fail(line, `${fromName} is not a node in this spec`); continue }
    if (!to) { fail(line, `${toName} is not a node in this spec`); continue }
    if (from === to) { fail(line, `${fromName} cannot feed itself`); continue }
    const fromDef = catalogue[from.type]
    const toDef = catalogue[to.type]
    if (!fromDef || !toDef) continue // already reported

    const outName = outParts.join('.') || null
    let inPath = inParts.join('.') || null
    const outputs = fromDef.outputs
    const outputList = outputs.map((o, i) => `${o.name} (${o.type})`).join(', ')
    if (!outputs.length) { fail(line, `${from.type} has no outputs`); continue }

    // the source output, if named
    let slot = null
    if (outName != null) {
      slot = /^\d+$/.test(outName) ? Number(outName) : outputs.findIndex(o => o.name === outName)
      if (slot < 0 || slot >= outputs.length) { fail(line, `${from.type} has no output ${outName} -- it has ${outputList}`); continue }
      if (outputs.filter(o => o.name === outName).length > 1) { fail(line, `${from.type} has more than one output called ${outName}; name it by index`); continue }
    }

    const taken = path => wiredTo.has(`${toName}.${path}`)
    const candidatesFor = type => {
      const shown = expandInputs(toDef, to.values, new Set())
      const out = []
      for (const s of shown) {
        if (!typesMatch(type, s.input.type) || taken(s.path)) continue
        out.push(s)
      }
      // an autogrow takes a further slot even when the shown ones are full
      for (const input of toDef.inputs.filter(i => i.type === AUTOGROW && typesMatch(type, i.template.input.type))) {
        const free = autogrowSlots(toDef, input.name).find(p => !taken(p))
        if (free && !out.some(s => s.path === free)) out.push({ path: free, input: input.template.input })
      }
      return out
    }

    // resolve the target
    if (inPath != null) {
      const slots = autogrowSlots(toDef, inPath)
      if (slots) {
        const free = slots.find(p => !taken(p))
        if (!free) { fail(line, `${toName}.${inPath} has no free slot left`); continue }
        inPath = free
      }
      const input = inputAt(toDef, inPath, to.values)
      if (!input) {
        const names = expandInputs(toDef, to.values, new Set()).map(s => s.path)
        fail(line, `${to.type} has no input ${inPath} -- it has ${names.join(', ')}`)
        continue
      }
      if (slot == null) {
        const matching = outputs.map((o, i) => i).filter(i => typesMatch(outputs[i].type, input.type))
        if (outputs.length === 1) slot = 0
        else if (matching.length === 1) slot = matching[0]
        else { fail(line, `${from.type} has ${outputs.length} outputs; say which: ${outputList}`); continue }
      }
      if (!typesMatch(outputs[slot].type, input.type)) {
        fail(line, `${fromName}.${outputs[slot].name} carries ${outputs[slot].type}; ${toName}.${inPath} takes ${input.type}`)
        continue
      }
    } else {
      const slotsToTry = slot != null ? [slot] : outputs.map((o, i) => i)
      const found = []
      for (const s of slotsToTry) {
        const all = candidatesFor(outputs[s].type)
        const sockets = all.filter(c => !isWidget(c.input))
        const pick = sockets.length ? sockets : all
        for (const c of pick) found.push({ slot: s, path: c.path, socket: !isWidget(c.input) })
      }
      const sockets = found.filter(f => f.socket)
      const choice = sockets.length === 1 ? sockets[0] : (!sockets.length && found.length === 1 ? found[0] : null)
      if (!choice) {
        fail(line, found.length
          ? `${fromName} -> ${toName} could mean ${found.map(f => `${outputs[f.slot].name} -> ${f.path}`).join(', ')}; name the pins`
          : `nothing on ${toName} takes what ${fromName} gives (${slotsToTry.map(s => outputs[s].type).join(', ')})`)
        continue
      }
      slot = choice.slot
      inPath = choice.path
    }

    const key = `${toName}.${inPath}`
    if (wiredTo.has(key)) { fail(line, `${key} is already wired on line ${wiredTo.get(key)}`); continue }
    if (inPath in to.values) { fail(line, `${key} has a value on line ${to.line} and a wire here -- the wire would win; drop one`); continue }
    wiredTo.set(key, line)
    graph.wires.push({ from: fromName, slot, to: toName, input: inPath, line })
  }

  // A node a wire failed to reach is not also told its sockets are empty: that is the same
  // mistake reported twice, and the wire's own message is the one that says how to fix it.
  const reached = new Set(graph.wires.map(w => w.line))
  const brokenTargets = new Set(rawWires.filter(w => !reached.has(w.line)).map(w => w.text.split('->')[1]?.trim().split('.')[0]))

  // --- every required socket has a wire ---
  for (const node of graph.nodes) {
    const def = catalogue[node.type]
    if (!def) continue
    const wired = new Set(graph.wires.filter(w => w.to === node.name).map(w => w.input))
    for (const { path, input, optional } of expandInputs(def, node.values, wired)) {
      if (isWidget(input)) {
        if (input.files && !('default' in input) && !(path in node.values) && !wired.has(path)) {
          fail(node.line, `${node.name}.${path} names a file and has no default; give it one`)
        }
        continue
      }
      if (!optional && !wired.has(path) && !brokenTargets.has(node.name)) {
        fail(node.line, `${node.name}.${path} (${input.type}) is required and has no wire`)
      }
    }
  }

  // --- no cycles: the server refuses to run one ---
  const next = new Map(graph.nodes.map(n => [n.name, []]))
  for (const w of graph.wires) next.get(w.from).push(w.to)
  const state = new Map()
  const visit = (name, trail) => {
    if (state.get(name) === 2) return null
    if (state.get(name) === 1) return [...trail.slice(trail.indexOf(name)), name]
    state.set(name, 1)
    for (const to of next.get(name)) {
      const cycle = visit(to, [...trail, name])
      if (cycle) return cycle
    }
    state.set(name, 2)
    return null
  }
  for (const node of graph.nodes) {
    const cycle = visit(node.name, [])
    if (cycle) { fail(node.line, `the wires make a loop: ${cycle.join(' -> ')}`); break }
  }

  // --- groups ---
  const inGroup = new Map()
  for (const { line, tokens } of rawGroups) {
    const [, rawTitle, ...rest] = tokens
    const title = rawTitle ? parseValue(rawTitle) : { error: 'no title' }
    if (title.error || typeof title.value !== 'string' || title.bare) { fail(line, 'a group is group "<title>" <node> ...'); continue }
    const group = { title: title.value, color: null, members: [], line }
    for (const token of rest) {
      if (token.startsWith('$')) {
        const pair = splitAttribute(token)
        if (!pair || pair[0] !== '$color') { fail(line, `${token}: a group carries $color and nothing else`); continue }
        group.color = parseValue(pair[1]).value
        continue
      }
      if (!byName.has(token)) { fail(line, `${token} is not a node in this spec`); continue }
      if (inGroup.has(token)) { fail(line, `${token} is already in the group on line ${inGroup.get(token)}`); continue }
      inGroup.set(token, line)
      group.members.push(token)
    }
    if (!rest.some(t => !t.startsWith('$'))) fail(line, `group "${group.title}" has no nodes in it`)
    graph.groups.push(group)
  }

  if (problems.length) throw new SpecError(problems.sort((a, b) => a.line - b.line))
  return graph
}

// --- writing a spec ----------------------------------------------------------------------------

const BARE = /^[^\s"#=$\[\]{}][^\s"=\[\]{}]*$/

export function formatValue (value) {
  if (typeof value === 'string') {
    if (value.includes('\n') && !value.includes('"""')) return `"""\n${value}"""`
    if (BARE.test(value) && !value.includes('->') && parseValue(value).bare) return value
    return JSON.stringify(value)
  }
  return JSON.stringify(value)
}

/** The spec text that parses back into the graph. */
export function formatSpec (graph, catalogue) {
  const lines = []
  if (graph.name) lines.push(`graph ${formatValue(graph.name)}`)
  if (graph.lang) lines.push(`lang ${graph.lang}`)
  if (lines.length) lines.push('')

  const rows = graph.nodes.map(node => {
    const def = catalogue[node.type]
    const parts = []
    if (node.title != null) parts.push(`$title=${JSON.stringify(node.title)}`)
    const blocks = []
    const wired = new Set(graph.wires.filter(w => w.to === node.name).map(w => w.input))
    for (const { path, input } of expandInputs(def, node.values, wired)) {
      if (!(path in node.values)) continue
      const text = `${path}=${formatValue(node.values[path])}`
      if (text.includes('\n')) blocks.push(text)
      else parts.push(text)
    }
    for (const [path, mode] of Object.entries(node.controls)) {
      const input = inputAt(def, path, node.values)
      if (input && mode !== defaultControl(input)) parts.push(`$control.${path}=${mode}`)
    }
    if (node.collapsed) parts.push('$collapsed=true')
    if (node.color) parts.push(`$color=${formatValue(node.color)}`)
    if (node.bgcolor) parts.push(`$bgcolor=${formatValue(node.bgcolor)}`)
    return { name: node.name, type: node.type, rest: [...parts, ...blocks].join(' ') }
  })
  const nameWidth = Math.max(...rows.map(r => r.name.length))
  const typeWidth = Math.max(...rows.map(r => r.type.length))
  for (const r of rows) lines.push(`${r.name.padEnd(nameWidth)}  ${r.rest ? r.type.padEnd(typeWidth) + '  ' + r.rest : r.type}`.trimEnd())

  if (graph.wires.length) lines.push('')
  const fromWidth = Math.max(...graph.wires.map(w => sourceOf(w, graph, catalogue).length))
  for (const w of graph.wires) lines.push(`${sourceOf(w, graph, catalogue).padEnd(fromWidth)} -> ${w.to}.${w.input}`)

  if (graph.groups.length) lines.push('')
  for (const g of graph.groups) {
    lines.push(`group ${JSON.stringify(g.title)} ${g.members.join(' ')}${g.color ? ` $color=${formatValue(g.color)}` : ''}`)
  }
  return lines.join('\n') + '\n'
}

function sourceOf (wire, graph, catalogue) {
  const node = graph.nodes.find(n => n.name === wire.from)
  const outputs = catalogue[node.type].outputs
  if (outputs.length === 1) return wire.from
  const name = outputs[wire.slot].name
  return outputs.filter(o => o.name === name).length > 1 ? `${wire.from}.${wire.slot}` : `${wire.from}.${name}`
}
