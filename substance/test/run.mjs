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
import { findProject, projectNodes, mergeCatalogue } from '../project.mjs'
import { LANGUAGES } from '../strings.mjs'
import os from 'node:os'

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
  // A botched edit to a template literal leaks its own source into the page, which renders as
  // plain text and looks like nothing is wrong. One shipped that way before this check existed.
  for (const fragment of ['${', "')}", '`}']) {
    if (html.includes(fragment)) problems.push(`a template fragment leaked into the page: ${fragment}`)
  }

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
  // The first fenced block starting with "graph" is not necessarily the example -- short
  // snippets illustrate single lines too. The example is the one that wires something up.
  const block = [...skill.matchAll(/```\n(graph [\s\S]*?)```/g)].map(m => m[1]).find(b => b.includes('->'))
  if (!block) return ['SKILL.md has no spec example to check']

  const problems = []
  let spec
  try {
    spec = parseSpec(block, catalogue)
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

check('the shipped example builds, and is worth shipping', () => {
  // gate-graph is ten nodes chosen to break the emitter. This one is chosen to be read: a real
  // material, four outputs, one wear mask driving basecolor and roughness both. It is the graph
  // anyone judges the skill by, so it gets the same treatment as the gate network.
  const source = fs.readFileSync(path.join(HERE, '..', 'example', 'worn_painted_metal.spec'), 'utf8')

  let spec
  try {
    spec = parseSpec(source, catalogue)
  } catch (error) {
    return ['the example does not parse: ' + error.message]
  }

  const problems = []
  if (spec.nodes.length < 15) problems.push(`the example is down to ${spec.nodes.length} nodes -- it is meant to be a large one`)

  // Multi-output nodes are where a spec author trips, so the example has to keep exercising them.
  if (!spec.nodes.some(n => n.def.outputs.length > 1)) {
    problems.push('the example no longer uses a node with more than one output')
  }

  const python = emitPython(spec)
  const html = draw(spec)
  const wires = (html.match(/stroke-width="1\.6"/g) || []).length
  if (wires !== spec.wires.length) problems.push(`${wires} wires drawn for ${spec.wires.length}`)

  const boxes = [...html.matchAll(/<rect x="([\d.]+)" y="([\d.]+)" width="([\d.]+)" height="([\d.]+)" rx=/g)]
    .map(m => ({ x: +m[1], y: +m[2], w: +m[3], h: +m[4] }))
  for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i]; const b = boxes[j]
      if (a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h) {
        problems.push(`node boxes overlap at ${a.x},${a.y} and ${b.x},${b.y}`)
      }
    }
  }
  if (!python.includes('newInstanceNode')) problems.push('the example places no library node')
  return problems
})

check('an output node is named and carries its usage', () => {
  // Without this a pasted output lands as output_1 with no usage, which is what a graph is
  // useless for: no export preset, no material slot, nothing downstream can find it.
  const spec = parseSpec([
    'graph t',
    'noise  perlin_noise',
    'h      output  usage=height',
    'c      output  identifier=basecolor usage=baseColor:RGBA:sRGB label="Base Color"',
    'noise -> h',
    'noise -> c',
  ].join('\n'), catalogue)

  const problems = []
  const python = emitPython(spec)

  // The name written in the spec is the identifier unless the spec overrides it.
  if (!python.includes("setAnnotationPropertyValueFromId('identifier', SDValueString.sNew('h'))")) {
    problems.push('the output is not named after the node')
  }
  if (!python.includes("SDValueString.sNew('basecolor')")) problems.push('an explicit identifier is ignored')
  if (!python.includes("SDUsage.sNew('height', 'RGBA', '')")) problems.push('a bare usage does not default its components')
  if (!python.includes("SDUsage.sNew('baseColor', 'RGBA', 'sRGB')")) problems.push('a three-part usage is not carried')
  if (!python.includes('from sd.api.sdusage import SDUsage')) problems.push('the usage imports are missing')
  if (!draw(spec).includes('usage')) problems.push('the page does not show the usage')

  const rejects = source => {
    try { parseSpec(source, catalogue); return null } catch (error) { return error.message }
  }
  if (!rejects('graph t\na blend usage=height')) problems.push('usage is accepted on a node that has no such thing')
  if (!rejects('graph t\na output identifier=x\nb output identifier=x')) {
    problems.push('two graph outputs are allowed the same identifier')
  }
  return problems
})

check('enums are written by name, and annotations come from the catalogue', () => {
  const problems = []

  // The reason this matters: nothing about the integer says which mode it is, and Designer
  // spells the one between add and multiply "substract".
  const spec = parseSpec('graph t\na blend blendingmode=substract\nb blend blendingmode=5', catalogue)
  const python = emitPython(spec)
  if (!python.includes("sFromValue('sbs::compositing::blendingmode', 2)")) problems.push('a named enum value is not resolved')
  if (!python.includes("sFromValue('sbs::compositing::blendingmode', 5)")) problems.push('a numeric enum value no longer works')
  if (!draw(spec).includes('substract')) problems.push('the page shows the number rather than the name')

  const rejects = source => {
    try { parseSpec(source, catalogue); return null } catch (error) { return error.message }
  }
  const wrong = rejects('graph t\na blend blendingmode=subtract')
  if (!wrong) problems.push('a misspelled enum value is accepted')
  else if (!wrong.includes('substract')) problems.push('a rejected enum value does not list the ones that exist')

  // Annotations are whatever the catalogue says the definition has -- no hardcoded list.
  const bridges = Object.entries(catalogue.ATOMIC).filter(([, d]) => d.annotations?.length).map(([n]) => n).sort()
  if (bridges.join() !== 'input_color,input_grayscale,input_value,output') {
    problems.push('the definitions carrying annotations are no longer the four bridges: ' + bridges.join(', '))
  }
  if (!catalogue.ATOMIC.output.annotations.some(a => a.id === 'usages')) problems.push('output lost its usages annotation')
  if (!rejects('graph t\na blend identifier=x')) problems.push('an annotation is accepted on a node that has none')

  // mipmaps is an int annotation, so it exercises the non-string path for free.
  if (!emitPython(parseSpec('graph t\no output mipmaps=3', catalogue)).includes("setAnnotationPropertyValueFromId('mipmaps', SDValueInt.sNew(3))")) {
    problems.push('a non-string annotation is not written')
  }
  return problems
})

check('a spec inside a library is told where the graph belongs', () => {
  // A one-off network needs no guidance. One that is part of a library needs to say where the
  // .sbs goes and what alias the next spec will name it by, or the library never compounds.
  const problems = []
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sbslib-'))
  try {
    fs.mkdirSync(path.join(root, 'packages'))
    fs.mkdirSync(path.join(root, 'specs'), { recursive: true })
    const aliasPath = 'file:///' + path.join(root, 'packages').split(path.sep).join('/')
    fs.writeFileSync(path.join(root, 'Team.sbsprj'),
      '<root><preferences><resources><urlaliases><size>1</size>' +
      `<_1 prefix="_"><path>${aliasPath}</path><name>team</name></_1>` +
      '</urlaliases></resources><library><watchedpaths><size>1</size>' +
      '<_1 prefix="_"><url>team://</url><isrecursive>true</isrecursive><isenabled>true</isenabled></_1>' +
      '</watchedpaths></library></preferences></root>')

    const specPath = path.join(root, 'specs', 'panel.spec')
    fs.writeFileSync(specPath, 'graph panel_base\nn perlin_noise\no output usage=height\nn -> o\n')

    const project = findProject(specPath)
    if (!project) return ['the .sbsprj above the spec was not found']
    if (project.root !== root) problems.push('the library root is wrong: ' + project.root)
    if (project.alias?.name !== 'team') problems.push('the alias was not read')
    if (!project.watchesAlias) problems.push('the watched path was not matched to the alias')

    const spec = parseSpec(fs.readFileSync(specPath, 'utf8'), catalogue)
    const target = {
      graph: 'panel_base',
      packageName: 'panel_base',
      packagePath: path.join(project.alias.path, 'panel_base.sbs'),
    }
    const page = draw(spec, { project, target })
    for (const wanted of ['Where this graph belongs', 'team://panel_base.sbs', 'packages/panel_base.sbs', 'Preferences']) {
      if (!page.includes(wanted)) problems.push(`the guide does not mention ${wanted}`)
    }
    // Re-running has to be described, because it destroys hand edits in that graph.
    if (!page.includes('empties')) problems.push('the guide does not say a re-run replaces the graph')
    // The one manual step has to be stated, since no payload can take it.
    if (!page.includes('Team.sbsprj')) problems.push('the guide does not name the project file to register')

    // A spec with no library above it gets no guidance, and must not gain an empty section.
    if (draw(spec).includes('Where this graph belongs')) problems.push('a one-off spec is given library guidance')
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
  return problems
})

check('the page speaks the reader language, and the graph does not', () => {
  const problems = []

  // Every language carries every field. A missing one would render as undefined on the page,
  // which is worse than not translating at all.
  const shape = (o, prefix = '') => Object.entries(o).flatMap(([k, v]) =>
    (v && typeof v === 'object' && !Array.isArray(v)) ? shape(v, prefix + k + '.') : [prefix + k])
  const reference = shape(LANGUAGES.en).sort().join()
  for (const [code, words] of Object.entries(LANGUAGES)) {
    if (shape(words).sort().join() !== reference) problems.push(`the ${code} strings do not match the en ones`)
  }

  const source = 'graph rough\nlang ko\nn perlin_noise scale=6\no output usage=height\nn -> o\n'
  const spec = parseSpec(source, catalogue)
  if (spec.lang !== 'ko') problems.push('the lang line was not read')

  const page = draw(spec)
  // Prose follows the reader...
  if (!page.includes('참고')) problems.push('the notes heading is not translated')
  if (!page.includes('복사')) problems.push('the copy button is not translated')
  if (page.includes('>Notes<')) problems.push('English prose is left on a Korean page')
  // ...and the graph does not. Designer's spelling is the same in any language.
  for (const kept of ['perlin_noise', 'unique_filter_output', 'scale', 'inputNodeOutput']) {
    if (!page.includes(kept)) problems.push(`${kept} was translated, and must not be`)
  }

  // --lang overrides the spec, and an unknown language is refused rather than falling back.
  if (!draw(spec, { lang: 'en' }).includes('>Notes<')) problems.push('--lang does not override the spec')
  try {
    draw(spec, { lang: 'zz' })
    problems.push('an unknown page language is accepted')
  } catch { /* expected */ }

  let refused = null
  try { parseSpec('graph t\nlang zz\nn perlin_noise', catalogue) } catch (error) { refused = error.message }
  if (!refused) problems.push('an unknown lang line is accepted')
  else if (!refused.includes('ko')) problems.push('a rejected language does not list the ones that exist')
  return problems
})

check('a graph the project owns is a node the next spec can name', () => {
  // This is the arrow that makes a library compound. Without it every material starts from
  // Designer's shipped nodes and nothing the team built is reachable by name.
  const problems = []
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'sbslib-'))
  try {
    const packages = path.join(root, 'packages')
    fs.mkdirSync(packages)
    fs.mkdirSync(path.join(root, 'specs'))
    fs.writeFileSync(path.join(root, 'Team.sbsprj'),
      '<root><preferences><resources><urlaliases><size>1</size>' +
      '<_1 prefix="_"><path>file:packages</path><name>team</name></_1>' +
      '</urlaliases></resources><library><watchedpaths><size>1</size>' +
      '<_1 prefix="_"><url>team://</url><isrecursive>true</isrecursive><isenabled>true</isenabled></_1>' +
      '</watchedpaths></library></preferences></root>')

    // A package whose filename is not its graph name, which is the case that catches a build
    // that assumed the two are the same. Adobe's own blur_hq.sbs holds two differently named
    // graphs, so this is the normal shape rather than an awkward one.
    fs.writeFileSync(path.join(packages, 'TeamNoises.sbs'),
      '<package><content><graph><identifier v="team_base"/><graphOutputs>' +
      '<graphoutput><identifier v="height"/><channels v="2"/></graphoutput>' +
      '<graphoutput><identifier v="colour"/></graphoutput>' +
      '</graphOutputs></graph></content></package>')

    // Designer drops autosaves in .autosave beside the package. Scanning those makes one graph
    // look like three packages declare it, and it gets dropped as ambiguous.
    fs.mkdirSync(path.join(packages, '.autosave'))
    fs.copyFileSync(path.join(packages, 'TeamNoises.sbs'), path.join(packages, '.autosave', 'TeamNoises.sbs'))

    const project = findProject(path.join(root, 'specs', 'x.spec'))
    if (!project) return ['the project was not found']
    // A relative alias is what Designer writes for a folder inside the project, so it has to work.
    if (project.alias?.path !== packages) problems.push('a relative alias did not resolve: ' + project.alias?.path)

    const { nodes, problems: found } = projectNodes(project)
    if (found.length) problems.push('scanning reported: ' + found.join('; '))
    if (!nodes.team_base) return [...problems, 'the project graph was not read']
    if (nodes.team_base.package !== 'TeamNoises') problems.push('the package name is wrong: ' + nodes.team_base.package)
    if (nodes.team_base.kind !== 'project') problems.push('the project graph is not marked as one')
    if (nodes.team_base.outputs.map(o => o.id + ':' + o.type).join() !== 'height:gray,colour:color') {
      problems.push('output pins or types are wrong: ' + JSON.stringify(nodes.team_base.outputs))
    }

    const merged = mergeCatalogue(catalogue, nodes)
    const spec = parseSpec('graph t\nb team_base\no output usage=height\nb.height -> o\n', merged)
    if (spec.nodes[0].kind !== 'project') problems.push('the spec did not resolve it as a project node')

    const python = emitPython(spec)
    // Found by path, because it is not in the install where the name search looks.
    if (!python.includes("'TeamNoises', 'team_base'")) problems.push('the payload does not instance the project graph')
    if (!python.includes('TeamNoises.sbs')) problems.push('the payload does not say where the package is')

    if (!draw(spec, { project }).includes(LANGUAGES.en.legend.project)) {
      problems.push('the page does not mark the project as a kind of node')
    }

    // Shadowing a shipped node would silently change what a spec means.
    let refused = null
    try { mergeCatalogue(catalogue, { blur_hq: nodes.team_base }) } catch (error) { refused = error.message }
    if (!refused) problems.push('a project graph is allowed to shadow one Designer ships')
    else if (!refused.includes('blur_hq')) problems.push('the clash message does not name the graph')
  } finally {
    fs.rmSync(root, { recursive: true, force: true })
  }
  return problems
})

check('a spec in a library builds into its package, and a re-run converges', () => {
  // The difference between an asset and a thing you made once. Appending meant running a spec
  // twice gave two copies, so a graph could never be edited -- only remade.
  const problems = []
  const spec = parseSpec('graph panel_base\npackage TeamNoises\nn perlin_noise\no output usage=height\nn -> o\n', catalogue)
  if (spec.package !== 'TeamNoises') problems.push('the package line was not read')

  const target = { graph: 'panel_base', packageName: 'TeamNoises', packagePath: 'C:/lib/packages/TeamNoises.sbs' }
  const built = emitPython(spec, target)

  for (const wanted of ['open_package', 'target_graph', 'savePackageAs', 'TeamNoises.sbs', "'panel_base'"]) {
    if (!built.includes(wanted)) problems.push(`the package payload is missing ${wanted}`)
  }
  // Emptied, not deleted: a package that instances this graph points at the resource.
  if (!built.includes('deleteNode')) problems.push('the payload does not empty the graph it rebuilds')
  if (built.includes('SDSBSCompGraph.sNew') === false) problems.push('the payload cannot create the graph')
  if (!built.includes('from sd.api.sbs.sdsbscompgraph import SDSBSCompGraph')) problems.push('the graph class is not imported')
  if (built.includes('free_offset')) problems.push('the package payload still offsets itself, which only makes sense when appending')

  // A graph with no category is indexed by the Library panel but has no place in its tree, so
  // it only turns up in search. Described before it is emptied: a wrong annotation id raises
  // then, and a graph that has not been cleared yet is a graph nothing has happened to.
  const described = emitPython(spec, {
    ...target,
    describe: {
      category: { type: 'string', text: 'HB/Bases' },
      label: { type: 'string', text: 'Panel Base' },
      show_in_library: { type: 'bool', value: { class: 'SDValueBool', components: [true] } },
      physical_size: { type: 'float3', value: { class: 'SDValueFloat3', components: [10, 10, 0] } },
    },
  })
  const at = fragment => described.indexOf(fragment)
  if (at("setAnnotationPropertyValueFromId('category'") === -1) problems.push('the graph category is not set')
  if (at("SDValueString.sNew('Panel Base')") === -1) problems.push('the graph label is not set')
  // The call site, not the def -- the helper is defined above main() either way.
  const clearsAt = described.indexOf('    clear_graph(graph)')
  if (clearsAt !== -1 && at("setAnnotationPropertyValueFromId('category'") > clearsAt) {
    problems.push('the graph is emptied before it is described, so a bad annotation id destroys it first')
  }
  // The ids and their types came off a live graph, and three of them are not what the file
  // format calls them: author_url, show_in_library, physical_size. So a typed one is worth
  // checking, not just the strings.
  if (!described.includes('SDValueFloat3.sNew(float3(10.0, 10.0, 0.0))')) problems.push('a typed graph annotation is not written')
  for (const needed of ['from sd.api.sdvaluestring import SDValueString', 'from sd.api.sdvaluebool import SDValueBool', 'float3']) {
    if (!described.includes(needed)) problems.push(`the graph description is missing the import for ${needed}`)
  }

  // Outside a library nothing is saved and nothing existing is touched.
  const loose = emitPython(spec)
  if (!loose.includes('free_offset')) problems.push('the loose payload no longer offsets itself')
  for (const absent of ['savePackageAs', 'deleteNode', 'newUserPackage']) {
    if (loose.includes(absent)) problems.push(`a loose payload must not ${absent}`)
  }
  if (!loose.includes('getCurrentGraph')) problems.push('the loose payload no longer targets the open graph')
  return problems
})

check('the shelf categories are read off the install, and entities are decoded', () => {
  // The Library panel's tree is a fixed set of queries compiled into Designer, so a category of
  // one's own is metadata nothing displays. The only defensible list of what it does show is the
  // set the install's own packages use, since every one of those appears in the panel.
  const problems = []
  const { CATEGORIES } = catalogue
  if (!Array.isArray(CATEGORIES) || CATEGORIES.length < 10) {
    return ['the catalogue carries no shelf categories']
  }
  for (const expected of ['Generator', 'Filter', 'Material Filter', 'PBR Materials/Metal']) {
    if (!CATEGORIES.includes(expected)) problems.push(`the shelf categories are missing ${expected}`)
  }
  // Adobe ships one with a trailing space, a duplicate of the same category without it.
  if (CATEGORIES.some(c => c !== c.trim())) problems.push('a category was not trimmed')
  if (new Set(CATEGORIES).size !== CATEGORIES.length) problems.push('the categories are not unique')

  // Attribute values are XML. "Splines &amp; Paths" is one category, not a string with an entity
  // in it, and the same decoding is what keeps a label readable.
  if (!CATEGORIES.includes('Splines & Paths')) problems.push('XML entities are not decoded in attributes')
  if (CATEGORIES.some(c => /&[a-z]+;/.test(c))) problems.push('an undecoded entity is left in a category')
  if (Object.values(catalogue.LIBRARY).some(e => e.label && /&[a-z]+;/.test(e.label))) {
    problems.push('an undecoded entity is left in a library label')
  }
  return problems
})

check('the payload button tries to copy, and leaves a fallback if it cannot', () => {
  // An artifact is framed cross-origin without clipboard-write delegated. execCommand is the
  // route that can survive that, so it has to be tried first and synchronously -- awaiting the
  // clipboard promise ahead of it spends the click's user activation. Whatever happens the
  // payload ends up selected, so Ctrl+C is always still there.
  const spec = parseSpec(fs.readFileSync(path.join(HERE, '..', 'example', 'worn_painted_metal.spec'), 'utf8'), catalogue)
  const html = draw(spec)
  const problems = []

  const execAt = html.indexOf("document.execCommand('copy')")
  const asyncAt = html.indexOf('navigator.clipboard.writeText')
  if (execAt < 0) problems.push('the button does not try execCommand')
  if (asyncAt < 0) problems.push('the button does not fall back to the clipboard API')
  if (execAt >= 0 && asyncAt >= 0 && execAt > asyncAt) {
    problems.push('the clipboard promise is awaited before execCommand, which spends the user activation')
  }
  if (!html.includes('selection.addRange(range)')) problems.push('the payload is not selected, so Ctrl+C has nothing to take')
  if (!html.includes('Ctrl+C')) problems.push('a reader whose browser refuses both is told nothing')
  return problems
})

console.log('')
if (failures.length) {
  console.log(`${failures.length} failing check${failures.length > 1 ? 's' : ''}`)
  process.exitCode = 1
} else {
  console.log('all checks pass')
}
