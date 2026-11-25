// node comfyui/test/run.mjs
//
// Offline, no install. gate-workflow.json and gate-workflow.api.json are ground truth: the
// frontend saved the first and exported the second from a workflow that cleared the round-trip
// gate (see NOTES.md). Everything that writes a format is checked against what the frontend
// itself wrote, not against what this code thinks it should write.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import os from 'node:os'

import { NODES, COMFYUI, PACKS_LOADED } from '../catalogue.mjs'
import { readUi, writeUi } from '../ui.mjs'
import { writeApi } from '../api.mjs'
import { parseSpec, formatSpec, SpecError, parseValue } from '../spec.mjs'
import { placeUi } from '../place.mjs'
import { draw } from '../draw.mjs'
import { describe } from '../describe.mjs'
import { LANGUAGES } from '../strings.mjs'
import { inputAt, hasControl, defaultControl } from '../defs.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const DOMAIN = path.resolve(HERE, '..')
const ROOT = path.resolve(DOMAIN, '..')
const failures = []

function check (name, fn) {
  try {
    const problems = fn() ?? []
    if (problems.length) failures.push({ name, problems })
    console.log((problems.length ? 'FAIL  ' : 'ok    ') + name)
    for (const p of problems) console.log('        ' + p)
  } catch (error) {
    failures.push({ name, problems: [error.message] })
    console.log('FAIL  ' + name + '\n        ' + String(error.stack ?? error.message).split('\n').slice(0, 6).join('\n        '))
  }
}

const load = file => JSON.parse(fs.readFileSync(path.join(HERE, file), 'utf8'))
const gate = load('gate-workflow.json')
const gateApi = load('gate-workflow.api.json')
const read = () => readUi(gate, NODES)

// Problems a spec produces, or [] when it parses.
function problemsOf (text) {
  try { parseSpec(text, NODES); return [] } catch (error) {
    if (!(error instanceof SpecError)) throw error
    return error.problems.map(p => p.message)
  }
}

function expectProblem (text, pattern) {
  const found = problemsOf(text)
  return found.some(p => pattern.test(p)) ? [] : [`expected a problem matching ${pattern}, got ${found.length ? found.join(' | ') : 'none'}`]
}

// The graph with controls written out in full, so a mode left at its default compares equal to
// one spelled out.
function canonical (graph) {
  return {
    nodes: graph.nodes.map(n => {
      const def = NODES[n.type]
      const controls = {}
      for (const path of Object.keys(n.values)) {
        const input = inputAt(def, path, n.values)
        if (input && hasControl(input)) controls[path] = n.controls[path] ?? defaultControl(input)
      }
      const values = Object.fromEntries(Object.entries(n.values).sort(([a], [b]) => a.localeCompare(b)))
      return { name: n.name, type: n.type, title: n.title, values, controls, collapsed: !!n.collapsed, color: n.color ?? null }
    }),
    wires: graph.wires.map(w => [w.from, w.slot, w.to, w.input]).sort(),
    groups: graph.groups.map(g => [g.title, g.color ?? null, [...g.members].sort()]),
  }
}

function sameGraph (a, b, labelA, labelB) {
  const ca = canonical(a)
  const cb = canonical(b)
  const problems = []
  for (const n of ca.nodes) {
    const m = cb.nodes.find(x => x.name === n.name)
    if (!m) { problems.push(`${n.name} is in ${labelA} only`); continue }
    if (JSON.stringify(n) !== JSON.stringify(m)) problems.push(`${n.name}: ${labelA} ${JSON.stringify(n)} vs ${labelB} ${JSON.stringify(m)}`)
  }
  for (const m of cb.nodes) if (!ca.nodes.some(n => n.name === m.name)) problems.push(`${m.name} is in ${labelB} only`)
  if (JSON.stringify(ca.wires) !== JSON.stringify(cb.wires)) problems.push(`wires differ: ${JSON.stringify(ca.wires)} vs ${JSON.stringify(cb.wires)}`)
  if (JSON.stringify(ca.groups) !== JSON.stringify(cb.groups)) problems.push(`groups differ: ${JSON.stringify(ca.groups)} vs ${JSON.stringify(cb.groups)}`)
  return problems
}

// --- the catalogue ---------------------------------------------------------------------------

check('the catalogue says which ComfyUI it came from, and every pack its commit', () => {
  const problems = []
  if (!COMFYUI.version || !/^[0-9a-f]{40}$/.test(COMFYUI.commit ?? '')) problems.push(`ComfyUI is ${JSON.stringify(COMFYUI)}`)
  for (const pack of PACKS_LOADED) if (!/^[0-9a-f]{40}$/.test(pack.commit ?? '')) problems.push(`${pack.name} has no commit`)
  if (!PACKS_LOADED.some(p => p.name === 'ComfyUI_IPAdapter_plus')) problems.push('the IP-Adapter pack the gate used is missing')
  return problems
})

check('the catalogue knows every node the gate workflow used, with the pins it used', () => {
  const problems = []
  for (const node of gate.nodes) {
    const def = NODES[node.type]
    if (!def) { problems.push(`${node.type} is not in the catalogue`); continue }
    for (const [i, out] of (node.outputs ?? []).entries()) {
      if (def.outputs[i]?.name !== out.name || def.outputs[i]?.type !== out.type) problems.push(`${node.type} output ${i}: catalogue ${JSON.stringify(def.outputs[i])}, frontend ${out.name} ${out.type}`)
    }
  }
  return problems
})

check('no machine file names are in a committed table', () => {
  // A combo that lists files keeps its type and loses its values: they are one machine's models
  // and a project's reference art by name. An extension in a value is the tell.
  const FILE = /\.(safetensors|ckpt|pt|pth|bin|gguf|png|jpe?g|webp)$/i
  const problems = []
  for (const [name, def] of Object.entries(NODES)) {
    const walk = input => {
      if (input.files && input.options) problems.push(`${name}.${input.name} is a file list and kept its values`)
      for (const v of input.type === 'COMBO' ? input.options ?? [] : []) if (typeof v === 'string' && FILE.test(v)) problems.push(`${name}.${input.name} offers ${v}`)
      if (typeof input.default === 'string' && FILE.test(input.default)) problems.push(`${name}.${input.name} defaults to ${input.default}`)
      if (input.template) walk(input.template.input)
      if (input.type === 'COMFY_DYNAMICCOMBO_V3') for (const o of input.options) o.inputs.forEach(walk)
    }
    def.inputs.forEach(walk)
  }
  return problems.slice(0, 10)
})

// --- the UI format, against the frontend's own file ---------------------------------------------

check('the gate workflow reads with no problems', () => {
  const { graph, problems } = read()
  const counts = `${graph.nodes.length} nodes, ${graph.wires.length} wires, ${graph.groups.length} groups`
  return [...problems, ...(counts === '21 nodes, 26 wires, 4 groups' ? [] : [counts])]
})

check('a UI file written from the graph alone has the inputs and widget values the frontend saved', () => {
  const { graph } = read()
  const written = writeUi(graph, NODES)
  const problems = []
  gate.nodes.slice().sort((a, b) => a.id - b.id).forEach((saved, i) => {
    const ours = written.nodes[i]
    const shape = n => JSON.stringify((n.inputs ?? []).map(x => [x.name, x.type, !!x.widget, x.shape ?? null, x.link != null]))
    if (shape(saved) !== shape(ours)) problems.push(`${saved.type} inputs: frontend ${shape(saved)} vs ours ${shape(ours)}`)
    // A widget with a wire keeps a stale value in the frontend's file; ours writes the default.
    const savedValues = JSON.stringify(saved.widgets_values ?? [])
    const ourValues = JSON.stringify(ours.widgets_values)
    const wiredWidget = (saved.inputs ?? []).some(x => x.widget && x.link != null)
    if (!wiredWidget && savedValues !== ourValues) problems.push(`${saved.type} widgets_values: frontend ${savedValues} vs ours ${ourValues}`)
  })
  return problems
})

check('an API file written from the graph asks for what the frontend\'s export asks for', () => {
  const { graph, nameOfId } = read()
  const ours = writeApi(graph, NODES)
  const problems = []
  for (const [id, node] of Object.entries(gateApi)) {
    const name = nameOfId.get(Number(id))
    const mine = ours[name]
    if (!mine) { problems.push(`${name} is missing`); continue }
    if (mine.class_type !== node.class_type) problems.push(`${name}: ${mine.class_type} vs ${node.class_type}`)
    const theirs = Object.fromEntries(Object.entries(node.inputs).map(([k, v]) =>
      [k, Array.isArray(v) && v.length === 2 && String(v[0]) in gateApi ? [nameOfId.get(Number(v[0])), v[1]] : v]))
    if (JSON.stringify(Object.entries(theirs).sort()) !== JSON.stringify(Object.entries(mine.inputs).sort())) {
      problems.push(`${name}: frontend ${JSON.stringify(theirs)} vs ours ${JSON.stringify(mine.inputs)}`)
    }
    // An untitled node's title is a display name in the exporter's locale; a titled one is the title.
    const titled = gate.nodes.find(n => n.id === Number(id)).title
    if (titled && mine._meta.title !== node._meta.title) problems.push(`${name}: title ${mine._meta.title} vs ${node._meta.title}`)
  }
  if (Object.keys(ours).length !== Object.keys(gateApi).length) problems.push(`${Object.keys(ours).length} nodes vs ${Object.keys(gateApi).length}`)
  return problems
})

check('API keys are node names, and every wire points at one', () => {
  const ours = writeApi(read().graph, NODES)
  const problems = []
  for (const [key, node] of Object.entries(ours)) {
    if (/^\d+$/.test(key)) problems.push(`${key} is a number`)
    for (const [input, v] of Object.entries(node.inputs)) {
      if (Array.isArray(v) && typeof v[1] === 'number' && typeof v[0] === 'string' && !(v[0] in ours)) problems.push(`${key}.${input} points at ${v[0]}`)
    }
  }
  return problems
})

// --- the spec ----------------------------------------------------------------------------------

check('graph -> spec -> graph is the same graph', () => {
  const { graph } = read()
  graph.name = 'gate'
  const text = formatSpec(graph, NODES)
  return sameGraph(graph, parseSpec(text, NODES), 'read', 'reparsed')
})

check('a spec built into a UI file reads back as the same graph, groups included', () => {
  // Group membership is geometric, so this is also the check that the layout keeps every node
  // that is not a member out of a group's rectangle.
  const { graph } = read()
  const reparsed = parseSpec(formatSpec(graph, NODES), NODES)
  const written = writeUi(reparsed, NODES, placeUi(reparsed, NODES))
  return sameGraph(reparsed, readUi(written, NODES).graph, 'spec', 'built')
})

check('the worked example builds, and is the gate workflow under other names', () => {
  const graph = parseSpec(fs.readFileSync(path.join(DOMAIN, 'example', 'ip_adapter_restyle.spec'), 'utf8'), NODES)
  const problems = []
  const types = g => g.nodes.map(n => n.type).sort().join(',')
  if (types(graph) !== types(read().graph)) problems.push('a different set of node types')
  if (graph.wires.length !== 26 || graph.groups.length !== 4) problems.push(`${graph.wires.length} wires, ${graph.groups.length} groups`)
  return problems
})

check('building twice writes the same bytes', () => {
  const graph = parseSpec(fs.readFileSync(path.join(DOMAIN, 'example', 'ip_adapter_restyle.spec'), 'utf8'), NODES)
  const once = JSON.stringify(writeUi(graph, NODES, placeUi(graph, NODES))) + JSON.stringify(writeApi(graph, NODES))
  const again = JSON.stringify(writeUi(graph, NODES, placeUi(graph, NODES))) + JSON.stringify(writeApi(graph, NODES))
  return once === again ? [] : ['the output changed between two builds of one spec']
})

check('a pin left off is found by type, and an autogrow named bare takes its next slot', () => {
  const graph = parseSpec([
    'ckpt CheckpointLoaderSimple ckpt_name=x.safetensors',
    'pos CLIPTextEncode text=a',
    'a LoadImage image=a.png',
    'b LoadImage image=b.png',
    'batch BatchImagesNode',
    'ckpt -> pos',
    'a.IMAGE -> batch.images',
    'b.IMAGE -> batch.images',
  ].join('\n'), NODES)
  const got = graph.wires.map(w => `${w.from}.${w.slot}->${w.to}.${w.input}`).join(' ')
  const want = 'ckpt.1->pos.clip a.0->batch.images.image0 b.0->batch.images.image1'
  return got === want ? [] : [`got ${got}`]
})

check('a """ block is text, verbatim, and an arrow inside quotes is not a wire', () => {
  const graph = parseSpec('s PrimitiveStringMultiline $title="A -> B" value="""\nline one\n  # not a comment\n"""\n', NODES)
  const problems = []
  if (graph.nodes[0].values.value !== 'line one\n  # not a comment\n') problems.push(JSON.stringify(graph.nodes[0].values.value))
  if (graph.nodes[0].title !== 'A -> B') problems.push(`title ${graph.nodes[0].title}`)
  if (graph.wires.length) problems.push('read a wire')
  if (parseValue('#3f789e').value !== '#3f789e') problems.push('a colour is a comment')
  return problems
})

check('the build refuses what would not run, and says why', () => {
  const base = 'ckpt CheckpointLoaderSimple ckpt_name=x.safetensors\nsampler KSampler\n'
  return [
    expectProblem('n KSamplr', /did you mean KSampler/),
    expectProblem('n KSampler stepz=3', /no widget stepz -- it has seed, steps/),
    expectProblem('n KSampler steps=2.5', /steps is an INT/),
    expectProblem('n KSampler steps=0', /below its min, 1/),
    expectProblem('n KSampler sampler_name=eulr', /not one of: euler/),
    expectProblem('n KSampler model=3', /socket; it takes a wire/),
    expectProblem(base, /sampler\.model \(MODEL\) is required and has no wire/),
    expectProblem(base + 'ckpt -> sampler.model\nckpt -> sampler.model', /already wired/),
    expectProblem('p PrimitiveInt value=1\nn KSampler seed=3\np -> n.seed', /a value .* and a wire/),
    // INT feeds seed and steps alike, and neither is a socket
    expectProblem('p PrimitiveInt value=1\nn KSampler\np -> n', /could mean .*seed.*steps/),
    expectProblem('g GLSLShader size_mode=from_input size_mode.width=4', /no widget size_mode\.width/),
    expectProblem('n KSampler $control.seed=sometimes', /one of fixed, increment, decrement, randomize/),
    expectProblem('n KSampler $control.steps=fixed', /no control after generate -- seed does/),
    expectProblem('n KSampler $label=x', /not something a node carries/),
    expectProblem('n KSampler\nn VAEDecode', /already declared/),
    expectProblem('group KSampler', /a group is group "<title>"/),
    expectProblem('n VAEDecode\ngroup "A" n\ngroup "B" n', /already in the group/),
    expectProblem('n VAEDecode\ngroup "A" m', /m is not a node/),
    expectProblem('c CheckpointLoaderSimple', /names a file and has no default/),
    expectProblem('s PrimitiveStringMultiline value="""\nopen', /never closed/),
    expectProblem('a ImageScale\nb ImageScale\na -> b.image\nb -> a.image', /loop/),
    expectProblem('lang kr\nn VAEDecode', /no "kr" page language -- there is en, ko/),
    expectProblem('graph two words', /a title in quotes/),
  ].flat()
})

check('one mistake is reported once', () => {
  const problems = []
  // A wire that cannot be resolved is the mistake; the sockets it would have filled are not a second one.
  const ambiguous = problemsOf('ckpt CheckpointLoaderSimple ckpt_name=x.safetensors\nlora LoraLoader lora_name=l.safetensors\nckpt -> lora')
  if (ambiguous.length !== 1) problems.push(`an ambiguous wire gave ${ambiguous.length} problems: ${ambiguous.join(' | ')}`)
  // A group whose member was refused for its own reason still has nodes in it.
  const grouped = problemsOf('n VAEDecode\nm VAEEncode\ngroup "A" n\ngroup "B" n m')
  if (grouped.some(p => /has no nodes/.test(p))) problems.push('a group with a refused member is said to be empty')
  // Every problem at once, the page language included.
  const all = problemsOf('lang kr\nn KSamplr')
  if (all.length !== 2) problems.push(`expected the language and the node together, got ${all.join(' | ')}`)
  return problems
})

check('a graph title may be quoted, and comes back quoted', () => {
  const graph = parseSpec('graph "IP-Adapter 리스타일"\nn PrimitiveInt\n', NODES)
  const problems = []
  if (graph.name !== 'IP-Adapter 리스타일') problems.push(`name is ${JSON.stringify(graph.name)}`)
  const again = parseSpec(formatSpec(graph, NODES), NODES)
  if (again.name !== graph.name) problems.push(`rewritten, it is ${JSON.stringify(again.name)}`)
  return problems
})

// --- the page and the tools ---------------------------------------------------------------------

check('the page draws every node, puts the UI file under Copy, and speaks the spec\'s language', () => {
  const graph = parseSpec(fs.readFileSync(path.join(DOMAIN, 'example', 'ip_adapter_restyle.spec'), 'utf8'), NODES)
  const uiText = JSON.stringify(writeUi(graph, NODES, placeUi(graph, NODES)), null, 2) + '\n'
  const problems = []
  for (const lang of Object.keys(LANGUAGES)) {
    const html = draw(graph, NODES, { lang, uiText })
    for (const node of graph.nodes) if (!html.includes(`>${node.name}</text>`)) problems.push(`${lang}: ${node.name} is not drawn`)
    const escaped = uiText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    if (!html.includes(escaped)) problems.push(`${lang}: the payload is not the UI file`)
    if (!html.includes(`<html lang="${lang}">`)) problems.push(`${lang}: the page is not marked ${lang}`)
    if (!html.includes(LANGUAGES[lang].payloadHeading)) problems.push(`${lang}: the payload heading is not in ${lang}`)
    if (!html.includes('Style references')) problems.push(`${lang}: a group title is not drawn`)
  }
  return problems
})

check('every page language has every field', () => {
  const problems = []
  const shape = o => Object.entries(o).map(([k, v]) => [k, typeof v, v && typeof v === 'object' && !Array.isArray(v) ? shape(v) : Array.isArray(v) ? v.length : null])
  const reference = JSON.stringify(shape(LANGUAGES.en))
  for (const [lang, words] of Object.entries(LANGUAGES)) if (JSON.stringify(shape(words)) !== reference) problems.push(`${lang} does not have the fields en has`)
  return problems
})

check('describe answers what a spec line needs, and turns a wrong name into candidates', () => {
  const problems = []
  const ks = describe('KSampler')
  for (const bit of ['model MODEL', 'seed', 'control randomize', 'sampler_name', 'LATENT']) if (!ks.includes(bit)) problems.push(`KSampler: no "${bit}"`)
  if (!describe('sampler').includes('KSamplerAdvanced')) problems.push('"sampler" did not suggest KSamplerAdvanced')
  if (!describe('LoadImage').includes('a file name')) problems.push('LoadImage does not say its image is a file name')
  return problems
})

check('graph-to-spec turns the gate workflow into a spec that builds', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'comfyui-test-'))
  try {
    const wf = path.join(dir, 'gate.json')
    fs.copyFileSync(path.join(HERE, 'gate-workflow.json'), wf)
    const run = spawnSync(process.execPath, [path.join(DOMAIN, 'tools', 'graph-to-spec.mjs'), wf, '--lang', 'ko'], { encoding: 'utf8' })
    if (run.status !== 0) return [run.stderr || run.stdout]
    const graph = parseSpec(fs.readFileSync(path.join(dir, 'gate.spec'), 'utf8'), NODES)
    const problems = sameGraph(read().graph, graph, 'workflow', 'spec')
    if (graph.lang !== 'ko') problems.push('the lang line is missing')
    const again = spawnSync(process.execPath, [path.join(DOMAIN, 'tools', 'graph-to-spec.mjs'), wf], { encoding: 'utf8' })
    if (again.status === 0) problems.push('it replaced an existing spec without --force')
    return problems
  } finally {
    fs.rmSync(dir, { recursive: true, force: true })
  }
})

check('every spec in SKILL.md parses', () => {
  const skill = fs.readFileSync(path.join(ROOT, 'skills', 'comfyui-graph', 'SKILL.md'), 'utf8')
  const blocks = [...skill.matchAll(/```spec\n([\s\S]*?)```/g)].map(m => m[1])
  if (!blocks.length) return ['SKILL.md has no ```spec blocks to check']
  return blocks.flatMap((text, i) => problemsOf(text).map(p => `block ${i + 1}: ${p}`))
})

console.log('')
if (failures.length) {
  console.log(`${failures.length} failing check${failures.length > 1 ? 's' : ''}`)
  process.exitCode = 1
} else {
  console.log('all checks pass')
}
