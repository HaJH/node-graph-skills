// node substance/test/run.mjs
//
// Two things worth guarding. The catalogue is 545 KB of generated table that nothing else
// checks, and the spec parser is what stands between a typo and a confusing Designer error.
//
// gate-graph.json is the network that cleared the round-trip gate, read straight out of
// Designer 15.1.0 by tools/roundtrip.py. It is ground truth: every pin id, package and
// parameter in it came from a graph that was built by hand, emitted, and rebuilt intact.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import * as catalogue from '../catalogue.generated.mjs'
import { parseSpec, SpecError } from '../spec.mjs'
import { emitPython } from '../emit.mjs'
import { draw } from '../draw.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const failures = []

function check (name, fn) {
  try {
    const problems = fn() ?? []
    if (problems.length) failures.push({ name, problems })
    console.log((problems.length ? 'FAIL  ' : 'ok    ') + name)
    for (const p of problems) console.log('        ' + p)
  } catch (error) {
    failures.push({ name, problems: [error.message] })
    console.log('FAIL  ' + name + '\n        ' + error.message.split('\n').join('\n        '))
  }
}

const BASE_PARAMETERS = ['$outputsize', '$format', '$pixelsize', '$pixelratio', '$tiling', '$randomseed']

const entryFor = node => node.referencedResource
  ? { kind: 'library', name: node.referencedResource.identifier, def: catalogue.LIBRARY[node.referencedResource.identifier] }
  : (n => ({ kind: 'atomic', name: n, def: catalogue.ATOMIC[n] }))(node.definitionId.replace(/^sbs::compositing::/, ''))

check('the catalogue describes the graph that cleared the gate', () => {
  const dump = JSON.parse(fs.readFileSync(path.join(HERE, 'gate-graph.json'), 'utf8')).graph
  const byUid = new Map(dump.nodes.map(n => [n.uid, n]))
  const problems = []

  for (const node of dump.nodes) {
    const { kind, name, def } = entryFor(node)
    if (!def) { problems.push(`${kind} "${name}" is not in the catalogue`); continue }

    if (kind === 'library') {
      const actual = node.referencedResource.packageFilePath.split('/').pop().replace(/\.sbs$/, '')
      if (def.package !== actual) problems.push(`${name}: catalogue says ${def.package}, Designer loaded ${actual}`)
    }

    for (const wire of node.connections) {
      if (!def.outputs.some(o => o.id === wire.fromProperty)) {
        problems.push(`${name}: used output "${wire.fromProperty}", catalogue has ${def.outputs.map(o => o.id).join(', ') || '(none)'}`)
      }
      const target = entryFor(byUid.get(wire.toNode))
      if (target.def && !target.def.inputs.some(p => p.id === wire.toProperty)) {
        problems.push(`${target.name}: used input "${wire.toProperty}", catalogue has ${target.def.inputs.map(p => p.id).join(', ') || '(none)'}`)
      }
    }

    for (const entry of node.values) {
      if (BASE_PARAMETERS.includes(entry.id)) continue
      if (!(def.parameters || []).some(p => p.id === entry.id)) {
        problems.push(`${name}: set parameter "${entry.id}", not in the catalogue`)
      }
    }
  }
  return problems
})

check('every atomic node has exactly one output called unique_filter_output', () => {
  const problems = []
  for (const [name, def] of Object.entries(catalogue.ATOMIC)) {
    if (def.outputs.length !== 1 || def.outputs[0].id !== 'unique_filter_output') {
      problems.push(`${name}: ${def.outputs.map(o => o.id).join(', ')}`)
    }
  }
  return problems
})

check('every library node that takes an input has exactly one primary', () => {
  const problems = []
  for (const [name, def] of Object.entries(catalogue.LIBRARY)) {
    if (!def.inputs.length) continue
    const primary = def.inputs.filter(p => p.primary).length
    if (primary !== 1) problems.push(`${name}: ${primary} primary inputs of ${def.inputs.length}`)
  }
  return problems
})

check('the spec parser resolves the gate network', () => {
  const spec = parseSpec(`
graph round_trip_gate

noise    perlin_noise        $format=1
soft     blur_hq_grayscale
base     uniform             colorswitch=false
warp     transformation
mix      blend
norm     normal              input2alpha=false
out      output

noise -> soft.Source
soft  -> mix.source
base  -> mix.destination
base  -> warp                 # primary input, pin left off
warp  -> mix.opacity
mix   -> norm
norm  -> out                  # single input, pin left off
`, catalogue)

  const wires = spec.wires.map(w => `${w.from}.${w.fromPin}->${w.to}.${w.toPin}`)
  const expected = [
    'noise.output->soft.Source',
    'soft.Blur_HQ->mix.source',
    'base.unique_filter_output->mix.destination',
    'base.unique_filter_output->warp.input1',
    'warp.unique_filter_output->mix.opacity',
    'mix.unique_filter_output->norm.input1',
    'norm.unique_filter_output->out.inputNodeOutput',
  ]
  const problems = expected.filter(w => !wires.includes(w)).map(w => 'missing wire ' + w)
  if (spec.nodes.length !== 7) problems.push(`${spec.nodes.length} nodes, expected 7`)
  const enumValue = spec.nodes.find(n => n.name === 'noise').values[0]
  if (enumValue?.value.class !== 'SDValueEnum') problems.push('$format did not become an SDValueEnum')
  return problems
})

check('the spec parser reports every problem at once', () => {
  const cases = [
    ['scale is int and takes whole numbers', 'noise perlin_noise scale=2.5'],
    ['has no parameter "wobble"', 'noise perlin_noise wobble=3'],
    ['is declared twice', 'mix blend\nmix levels'],
    ['has no input "sauce"', 'a blend\nb blend\na -> b.sauce'],
    ['so say which', 'ff flood_fill\nm blend\nff -> m.source'],
    ['is not a declared node', 'a blend\na -> ghost'],
    ['there is no node called "perlin_nose"', 'a perlin_nose'],
  ]
  const problems = []
  for (const [needle, source] of cases) {
    try {
      parseSpec(source, catalogue)
      problems.push(`"${needle}" was not reported -- the spec parsed clean`)
    } catch (error) {
      if (!(error instanceof SpecError)) throw error
      if (!error.message.includes(needle)) problems.push(`expected "${needle}", got: ${error.message.replace(/\n/g, ' | ')}`)
    }
  }
  return problems
})

check('the emitter reproduces the graph that cleared the gate', () => {
  // Turn the fixture back into a spec, emit from it, and require every wire the real graph had
  // to come out with the same pin ids and the same packages.
  const dump = JSON.parse(fs.readFileSync(path.join(HERE, 'gate-graph.json'), 'utf8')).graph
  const nameFor = new Map(dump.nodes.map((n, i) => [n.uid, 'n' + i]))

  const declarations = dump.nodes.map(n => `${nameFor.get(n.uid)} ${entryFor(n).name}`)
  const wireLines = dump.nodes.flatMap(n => n.connections.map(w =>
    `${nameFor.get(n.uid)}.${w.fromProperty} -> ${nameFor.get(w.toNode)}.${w.toProperty}`))

  const spec = parseSpec([...declarations, '', ...wireLines].join('\n'), catalogue)
  const python = emitPython(spec)
  const problems = []

  for (const line of wireLines) {
    const [source, target] = line.split(' -> ')
    const [fromNode, fromPin] = source.split('.')
    const [toNode, toPin] = target.split('.')
    const call = `nodes['${fromNode}'].newPropertyConnectionFromId('${fromPin}', nodes['${toNode}'], '${toPin}')`
    if (!python.includes(call)) problems.push('payload is missing ' + call)
  }

  for (const node of dump.nodes) {
    const entry = entryFor(node)
    const name = nameFor.get(node.uid)
    const call = entry.kind === 'library'
      ? `nodes['${name}'] = graph.newInstanceNode(find_resource(app, '${entry.def.package}', '${entry.name}'))`
      : `nodes['${name}'] = graph.newNode('${entry.def.id}')`
    if (!python.includes(call)) problems.push('payload is missing ' + call)
  }

  if (!/setPosition\(float2\(/.test(python)) problems.push('no node was positioned')
  if (python !== emitPython(parseSpec([...declarations, '', ...wireLines].join('\n'), catalogue))) {
    problems.push('emitting the same spec twice gave different output')
  }
  return problems
})

check('the page draws every node and wire, and stands on its own', () => {
  const dump = JSON.parse(fs.readFileSync(path.join(HERE, 'gate-graph.json'), 'utf8')).graph
  const nameFor = new Map(dump.nodes.map((n, i) => [n.uid, 'n' + i]))
  const spec = parseSpec([
    ...dump.nodes.map(n => `${nameFor.get(n.uid)} ${entryFor(n).name}`),
    '',
    ...dump.nodes.flatMap(n => n.connections.map(w =>
      `${nameFor.get(n.uid)}.${w.fromProperty} -> ${nameFor.get(w.toNode)}.${w.toProperty}`)),
  ].join('\n'), catalogue)

  const html = draw(spec)
  const problems = []

  const boxes = [...html.matchAll(/<rect x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)" rx=/g)]
    .map(m => ({ x: +m[1], y: +m[2], w: +m[3], h: +m[4] }))
  if (boxes.length !== spec.nodes.length) problems.push(`${boxes.length} node boxes for ${spec.nodes.length} nodes`)

  const wireCount = (html.match(/stroke-width="1\.6"/g) || []).length
  if (wireCount !== spec.wires.length) problems.push(`${wireCount} wires drawn for ${spec.wires.length}`)

  const pinCount = (html.match(/<circle /g) || []).length
  const expectedPins = spec.nodes.reduce((n, x) => n + x.def.inputs.length + x.def.outputs.length, 0)
  if (pinCount !== expectedPins) problems.push(`${pinCount} pins drawn for ${expectedPins}`)

  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i]; const b = boxes[j]
      if (a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h) {
        problems.push(`node boxes overlap at ${a.x},${a.y} and ${b.x},${b.y}`)
      }
    }
  }

  if (/NaN|undefined/.test(html)) problems.push('the page contains NaN or undefined')

  // Inline script is fine -- the select button needs a few lines. Fetching anything is not:
  // the artifact CSP blocks external hosts, and a page has to open offline besides. The SVG
  // namespace is an identifier rather than a request, so it is the one allowed URL.
  if (/<script[^>]*\ssrc=/.test(html)) problems.push('the page loads script from elsewhere')
  const external = (html.match(/https?:\/\/[^"' )]+/g) || []).filter(u => u !== 'http://www.w3.org/2000/svg')
  if (external.length) problems.push('the page reaches outside itself: ' + external.join(', '))

  if (!html.includes('newPropertyConnectionFromId')) problems.push('the page carries no Designer payload')

  return problems
})

check('the spec in SKILL.md is one that builds', () => {
  // Documentation drifts the moment nothing checks it, and this example is the first thing
  // anyone copies.
  const skill = fs.readFileSync(path.join(HERE, '..', '..', 'skills', 'substance-graph', 'SKILL.md'), 'utf8')
  const block = skill.match(/```\n(graph [\s\S]*?)```/)
  if (!block) return ['SKILL.md has no spec example to check']

  const problems = []
  let spec
  try {
    spec = parseSpec(block[1], catalogue)
  } catch (error) {
    return ['the documented spec does not parse:\n' + error.message]
  }
  if (!spec.nodes.length || !spec.wires.length) problems.push('the documented spec is empty')
  try {
    emitPython(spec)
    draw(spec)
  } catch (error) {
    problems.push('the documented spec parses but does not build: ' + error.message)
  }

  // Every node name the prose lists as usable has to actually be in the catalogue.
  const listed = [...skill.matchAll(/`([a-z][a-z0-9_]{2,})`/g)].map(m => m[1])
  const known = new Set([...Object.keys(catalogue.ATOMIC), ...Object.keys(catalogue.LIBRARY)])
  const nodeish = listed.filter(n => known.has(n))
  if (nodeish.length < 20) problems.push(`only ${nodeish.length} of the names in SKILL.md resolve -- expected the node lists`)
  return problems
})

console.log('')
if (failures.length) {
  console.log(`${failures.length} failing check${failures.length > 1 ? 's' : ''}`)
  process.exitCode = 1
} else {
  console.log('all checks pass')
}
