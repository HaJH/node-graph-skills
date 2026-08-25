// node substance/build.mjs <spec file> [--py <path>] [--html <path>]
//
// Reads a spec, reports anything wrong with it, and writes both halves: the Designer payload
// and the page that draws the same network.

import fs from 'node:fs'
import path from 'node:path'

import * as catalogue from './catalogue.generated.mjs'
import { parseSpec, SpecError } from './spec.mjs'
import { emitPython } from './emit.mjs'
import { draw } from './draw.mjs'
import { findProject } from './project.mjs'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node substance/build.mjs <spec file> [--py <path>] [--html <path>]')
  process.exit(2)
}

let spec
try {
  spec = parseSpec(fs.readFileSync(input, 'utf8'), catalogue)
} catch (error) {
  if (!(error instanceof SpecError)) throw error
  console.error(`${input}:`)
  for (const problem of error.problems) console.error(`  line ${problem.line}: ${problem.message}`)
  process.exit(1)
}

const base = path.join(path.dirname(input), path.basename(input, path.extname(input)))
const pythonAt = arg('py') ?? base + '.py'
const htmlAt = arg('html') ?? base + '.html'

// A spec sitting inside a library gets the library's own guidance on the page: where the .sbs
// goes, what alias other graphs will reference it by, and the one setup step no script can do.
const project = findProject(input)

fs.writeFileSync(pythonAt, emitPython(spec))
fs.writeFileSync(htmlAt, draw(spec, project))

console.log(`${spec.nodes.length} nodes, ${spec.wires.length} wires`)
console.log('payload:', pythonAt)
console.log('  paste it into Designer: Windows > Python Editor, with the target graph open')
console.log('page   :', htmlAt, '-', (fs.statSync(htmlAt).size / 1024).toFixed(0) + ' KB')
if (project) {
  console.log('library:', project.root)
  console.log('  ', project.alias
    ? `save the graph as ${project.alias.name}://${spec.name ?? 'this_graph'}.sbs`
    : `${path.basename(project.file)} declares no alias -- references will be stored as paths`)
}
