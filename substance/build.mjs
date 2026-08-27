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
import { findProject, projectNodes, mergeCatalogue, projectOutputs, mergeOutputs } from './project.mjs'
import { OUTPUTS } from './outputs.generated.mjs'

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
const project = findProject(input)
let resolved = catalogue
// Outside a library the shipped vocabulary still catches a misspelled usage; inside one it also
// decides output identifiers and is a refusal. See parseSpec.
let convention = { outputs: OUTPUTS, strict: false }
if (project) {
  const { nodes, problems } = projectNodes(project)
  for (const problem of problems) console.error('warning:', problem)
  try {
    resolved = mergeCatalogue(catalogue, nodes)
  } catch (error) {
    console.error(`${project.file}: ${error.message}`)
    process.exit(1)
  }
  project.nodeCount = Object.keys(nodes).length

  // A vocabulary file that does not parse is not a reason to fall back to the shipped list --
  // that would enforce something other than what the library declared, which is worse than
  // stopping.
  const own = projectOutputs(project)
  if (own.problems.length) {
    for (const problem of own.problems) console.error(`${project.root}: ${problem}`)
    process.exit(1)
  }
  project.outputCount = Object.keys(own.outputs).length
  convention = { outputs: mergeOutputs(OUTPUTS, own.outputs), strict: true }
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
const target = project?.alias?.path
  ? {
      graph: spec.name ?? path.basename(input, path.extname(input)),
      packageName: spec.package ?? spec.name ?? path.basename(input, path.extname(input)),
      packagePath: '',
    }
  : null
if (target) {
  target.packagePath = path.join(project.alias.path, target.packageName + '.sbs')
  target.describe = { ...spec.describe }
}

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
