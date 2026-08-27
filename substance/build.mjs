// node substance/build.mjs <spec file> [--py <path>] [--html <path>] [--lang <code>] [--trace]
//
// Reads a spec, reports anything wrong with it, and writes both halves: the Designer payload
// and the page that draws the same network.

import fs from 'node:fs'
import path from 'node:path'

import * as catalogue from './catalogue.generated.mjs'
import { parseSpec, SpecError, OUTPUTS_FILE } from './spec.mjs'
import { emitPython } from './emit.mjs'
import { draw } from './draw.mjs'
import { resolve, targetFor } from './resolve.mjs'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node substance/build.mjs <spec file> [--py <path>] [--html <path>] [--lang <code>] [--trace]')
  process.exit(2)
}

// A spec inside a library gets the library's own guidance on the page, and the library's own
// graphs as node names: a graph saved into the alias folder is nameable by the next spec, and
// nothing has to be registered anywhere for it -- the folder is the registry.
const { project, catalogue: resolved, convention, problems, warnings } = resolve(input, catalogue)
for (const warning of warnings) console.error('warning:', warning)
if (problems.length) {
  for (const problem of problems) console.error(problem)
  process.exit(1)
}

let spec
try {
  spec = parseSpec(fs.readFileSync(input, 'utf8'), resolved, convention)
} catch (error) {
  if (!(error instanceof SpecError)) throw error
  console.error(`${input}:`)
  for (const problem of error.problems) console.error(`  line ${problem.line}: ${problem.message}`)
  process.exit(1)
}

const base = path.join(path.dirname(input), path.basename(input, path.extname(input)))
const pythonAt = arg('py') ?? base + '.py'
const htmlAt = arg('html') ?? base + '.html'

// Inside a library the payload builds into a package and saves it, so a re-run converges. On
// its own it stays a network to paste into whatever is open.
const target = targetFor(spec, project, input)

// --trace makes the payload log every step to a file and flush, for when Designer goes down
// without printing anything. Tracing the payload itself, not a stand-in: a probe that drifts
// from the real thing measures the wrong graph.
fs.writeFileSync(pythonAt, emitPython(spec, target, { trace: process.argv.includes('--trace') }))
fs.writeFileSync(htmlAt, draw(spec, { project, target, lang: arg('lang') ?? spec.lang ?? 'en' }))

console.log(`${spec.nodes.length} nodes, ${spec.wires.length} wires`)
console.log('payload:', pythonAt)
console.log('  ', target
  ? 'paste it into Designer: Windows > Python Editor. No graph has to be open -- it builds and saves the package itself'
  : 'paste it into Designer: Windows > Python Editor, with the target graph open')
console.log('page   :', htmlAt, '-', (fs.statSync(htmlAt).size / 1024).toFixed(0) + ' KB')
if (project) {
  console.log('library:', project.root)
  if (project.nodeCount) console.log('  ', `${project.nodeCount} of its graphs are usable as node names`)
  // Said out loud because the rule only bites here: outside a library the same spec builds.
  console.log('  ', project.outputCount
    ? `outputs must be tagged and named by the convention -- ${Object.keys(convention.outputs).length} usages, ${project.outputCount} of them from ${OUTPUTS_FILE}`
    : `outputs must be tagged and named by the convention -- ${Object.keys(convention.outputs).length} usages, none added (no ${OUTPUTS_FILE})`)
  // The Library panel's tree is a fixed set of queries compiled into Designer, so a category of
  // your own is metadata nothing displays. Saying so beats letting somebody wonder where their
  // graph went -- it is indexed and searchable either way.
  const category = target?.describe?.category?.text
  if (category && !catalogue.CATEGORIES.includes(category)) {
    console.log('  ', `"${category}" is not a category the Library panel lists, so the graph will only be found by search`)
    console.log('  ', `it lists: ${catalogue.CATEGORIES.join(', ')}`)
  } else if (target && !category) {
    console.log('  ', 'no category set, so the graph will only be found by search. Add one the panel lists to have it appear in the tree')
  }
  console.log('  ', target
    ? `builds ${target.graph} into ${project.alias.name}://${target.packageName}.sbs, and saves it`
    : `${path.basename(project.file)} declares no alias -- nothing to build into`)
}
