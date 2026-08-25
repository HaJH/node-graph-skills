// node substance/build.mjs <spec file> [--py <path>]
//
// Reads a spec, reports anything wrong with it, and writes the Designer payload.
// The rendered page is not wired up yet -- that is the renderer's half.

import fs from 'node:fs'
import path from 'node:path'

import * as catalogue from './catalogue.generated.mjs'
import { parseSpec, SpecError } from './spec.mjs'
import { emitPython } from './emit.mjs'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node substance/build.mjs <spec file> [--py <path>]')
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
const target = arg('py') ?? base + '.py'
fs.writeFileSync(target, emitPython(spec))

console.log(`${spec.nodes.length} nodes, ${spec.wires.length} wires`)
console.log('payload:', target)
console.log('  paste it into Designer: Windows > Python Editor, with the target graph open')
