// node substance/build.mjs <spec file> [--py <path>] [--html <path>] [--lang <code>]
//
// Reads a spec, reports anything wrong with it, and writes both halves: the Designer payload
// and the page that draws the same network.

import fs from 'node:fs'
import path from 'node:path'

import * as catalogue from './catalogue.generated.mjs'
import { parseSpec, SpecError } from './spec.mjs'
import { emitPython } from './emit.mjs'
import { draw } from './draw.mjs'
import { findProject, projectNodes, mergeCatalogue } from './project.mjs'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node substance/build.mjs <spec file> [--py <path>] [--html <path>] [--lang <code>]')
  process.exit(2)
}

// A spec inside a library gets the library's own guidance on the page, and the library's own
// graphs as node names: a graph saved into the alias folder is nameable by the next spec, and
// nothing has to be registered anywhere for it -- the folder is the registry.
const project = findProject(input)
let resolved = catalogue
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
}

let spec
try {
  spec = parseSpec(fs.readFileSync(input, 'utf8'), resolved)
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
  // A graph with no category is indexed by the Library panel but has no place in its tree, so
  // it only turns up in search. Defaulting to the alias puts the library's graphs under one
  // heading, which is where somebody browsing expects to find them.
  target.describe = { category: project.alias.name, ...spec.describe }
}

fs.writeFileSync(pythonAt, emitPython(spec, target))
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
  console.log('  ', target
    ? `builds ${target.graph} into ${project.alias.name}://${target.packageName}.sbs, and saves it`
    : `${path.basename(project.file)} declares no alias -- nothing to build into`)
}
