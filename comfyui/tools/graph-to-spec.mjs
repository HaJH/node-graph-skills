// node comfyui/tools/graph-to-spec.mjs <workflow.json> [--out <spec>] [--name <graph>] [--lang <code>] [--force]
//
// A workflow saved from the ComfyUI window, back into the spec that builds it. The way in for a
// workflow made on the canvas, and the way back for one somebody changed there after a build:
// save it, run this, rebuild.
//
// It writes beside the workflow (<workflow>.spec) unless told otherwise, and will not replace a
// spec that exists without --force -- a spec carries comments, and this writes none.
//
// A node a build made comes back under the name the spec gave it, kept in its properties. One
// added on the canvas is named from its title, three words of it at most, or its type, numbered
// where one repeats. Rename those; they are yours.
//
// What it refuses, rather than writing a spec that builds something else: a node the catalogue
// does not know (a frontend-only Note or Reroute, or a pack nobody generated), a muted or
// bypassed node, a subgraph, and a node inside two groups.

import fs from 'node:fs'
import path from 'node:path'

import { NODES } from '../catalogue.mjs'
import { readUi } from '../ui.mjs'
import { formatSpec, parseSpec, SpecError } from '../spec.mjs'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node comfyui/tools/graph-to-spec.mjs <workflow.json> [--out <spec>] [--name <graph>] [--lang <code>] [--force]')
  process.exit(2)
}

const workflow = JSON.parse(fs.readFileSync(input, 'utf8'))
if (!Array.isArray(workflow.nodes)) {
  console.error(`${input} is not a workflow in the UI format -- an API file has no layout, groups or titles to read back`)
  process.exit(1)
}

const { graph, problems } = readUi(workflow, NODES)
if (problems.length) {
  console.error(`${input}:`)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}

const stem = path.basename(input, path.extname(input))
graph.name = arg('name') ?? stem
graph.lang = arg('lang')
const text = formatSpec(graph, NODES)

// Read back what was written: a spec this tool produced that does not build is its bug, and
// is better found here than by whoever runs the build next.
try {
  parseSpec(text, NODES)
} catch (error) {
  if (!(error instanceof SpecError)) throw error
  console.error('the spec written from this workflow does not parse -- a bug in graph-to-spec:')
  for (const p of error.problems) console.error(`  line ${p.line}: ${p.message}`)
  process.exit(1)
}

const out = arg('out') ?? path.join(path.dirname(input), stem + '.spec')
if (fs.existsSync(out) && !process.argv.includes('--force')) {
  console.error(`${out} exists; it may hold comments this would drop. Pass --force to replace it, or --out elsewhere`)
  process.exit(1)
}
fs.writeFileSync(out, text)
console.log(`${graph.nodes.length} nodes, ${graph.wires.length} wires, ${graph.groups.length} groups -> ${out}`)
