// node substance/verify.mjs <spec file> [--designer <install dir>]
//
// Does the .sbs on disk still say what the spec says?
//
// Everything between a spec and a package goes through a person: the payload is pasted into
// Designer's Python Editor and Designer writes the file. Nothing checked the far side of that.
// A graph edited by hand after a build, an output renamed in the editor, a parameter dropped --
// the spec and the asset drift and the first symptom is a texture with the wrong filename in the
// engine, weeks later.
//
// The check is Adobe's own tools read backwards. `sbscooker` publishes the .sbs to a .sbsar and
// `sbsrender info` prints the interface that archive exposes -- graph name, exposed parameters,
// output identifiers with their usages, preset labels. That is the same set a spec declares, so
// the two are comparable, and it runs headless in seconds with no Designer.
//
// This stops at the interface on purpose. Resolution, bit depth, image format, which maps go to
// which content folder -- that is bake policy, it belongs to the project whose game it is, and it
// changes for reasons this repo has no view of. What belongs here is the half that is about
// whether the asset matches its source.

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

import * as catalogue from './catalogue.generated.mjs'
import { parseSpec, SpecError } from './spec.mjs'
import { resolve, targetFor } from './resolve.mjs'
import { readInterfaces, isExposedParameter } from './sbsar.mjs'

const DEFAULT_INSTALL = 'C:/Program Files/Adobe/Adobe Substance 3D Designer'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node substance/verify.mjs <spec file> [--designer <install dir>]')
  process.exit(2)
}

const install = arg('designer') ?? process.env.SUBSTANCE_DESIGNER_DIR ?? DEFAULT_INSTALL
const cooker = path.join(install, 'sbscooker.exe')
const render = path.join(install, 'sbsrender.exe')
for (const [what, where] of [['sbscooker', cooker], ['sbsrender', render]]) {
  if (!fs.existsSync(where)) {
    console.error(`no ${what} at ${where}`)
    console.error('pass --designer <install dir>, or set SUBSTANCE_DESIGNER_DIR')
    process.exit(2)
  }
}

// -- what the spec says ---------------------------------------------------------------------

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

const target = targetFor(spec, project, input)
if (!target) {
  console.error(`${input} owns no package, so there is nothing on disk to check against.`)
  console.error('A spec outside a library is a network to paste, not an asset.')
  process.exit(2)
}
if (!fs.existsSync(target.packagePath)) {
  console.error(`${target.packagePath} is not there yet.`)
  console.error(`Run the payload from build.mjs in Designer first -- that is what writes it.`)
  process.exit(1)
}

// An output's identifier is the vocabulary's, so this is the same pair sbsrender prints.
const expectedOutputs = spec.nodes
  .filter(node => node.type === 'output')
  .map(node => ({
    identifier: node.annotations.find(a => a.id === 'identifier')?.value.components[0] ?? node.name,
    usage: node.usages[0]?.name ?? '',
  }))
const expectedParams = (spec.params ?? []).map(p => p.id)
const expectedPresets = (spec.presets ?? []).map(p => p.label)

// -- what the package says ------------------------------------------------------------------

// The cooker does not read the .sbsprj, and only resolves Adobe's own sbs:// by itself. A
// library's alias has to be handed over or every hb:// reference in the package fails to
// resolve -- and this repo is the one place that already knows the mapping.
const aliasArgs = (project?.aliases ?? [])
  .filter(a => a.path)
  .flatMap(a => ['--alias', `${a.name}://${a.path.replace(/\\/g, '/')}`])

const scratch = fs.mkdtempSync(path.join(os.tmpdir(), 'sbsverify-'))
let info
try {
  const cooked = spawnSync(cooker, ['--inputs', target.packagePath, '--output-path', scratch, ...aliasArgs],
    { encoding: 'utf8' })
  if (cooked.status !== 0) {
    console.error(`sbscooker could not publish ${path.basename(target.packagePath)}:`)
    console.error(cooked.stderr || cooked.stdout)
    process.exit(1)
  }
  const archive = path.join(scratch, target.packageName + '.sbsar')
  if (!fs.existsSync(archive)) {
    console.error(`sbscooker wrote no ${target.packageName}.sbsar`)
    process.exit(1)
  }
  const read = spawnSync(render, ['info', archive], { encoding: 'utf8' })
  if (read.status !== 0) {
    console.error('sbsrender info failed:')
    console.error(read.stderr || read.stdout)
    process.exit(1)
  }
  info = read.stdout
} finally {
  fs.rmSync(scratch, { recursive: true, force: true })
}

// A package holds several graphs; only the one this spec owns is being checked.
const all = readInterfaces(info)
const actual = all.find(g => g.graph === target.graph)
const differences = []

if (!actual) {
  console.error(`${path.basename(target.packagePath)} holds no graph called ${target.graph}.`)
  console.error(`It holds: ${all.map(g => g.graph).join(', ') || '(nothing)'}`)
  process.exit(1)
}

const actualParams = actual.inputs.filter(isExposedParameter).map(i => i.id)

const compare = (what, wanted, got) => {
  for (const missing of wanted.filter(x => !got.includes(x))) {
    differences.push(`the spec declares ${what} ${missing}, the package has none`)
  }
  for (const extra of got.filter(x => !wanted.includes(x))) {
    differences.push(`the package has ${what} ${extra}, the spec declares none`)
  }
}

compare('a parameter', expectedParams, actualParams)
compare('a preset', expectedPresets, actual.presets)

for (const wanted of expectedOutputs) {
  const got = actual.outputs.find(o => o.identifier === wanted.identifier)
  if (!got) {
    differences.push(`the spec declares an output "${wanted.identifier}", the package has ${actual.outputs.map(o => o.identifier).join(', ') || 'none'}`)
    continue
  }
  if (got.usage !== wanted.usage) {
    differences.push(`output "${wanted.identifier}" is tagged ${got.usage || '(nothing)'} in the package, ${wanted.usage} in the spec`)
  }
}
for (const got of actual.outputs.filter(o => !expectedOutputs.some(w => w.identifier === o.identifier))) {
  differences.push(`the package has an output "${got.identifier}", the spec declares none`)
}

// -- the verdict ------------------------------------------------------------------------------

console.log(`${input}`)
console.log(`  against ${target.packagePath}`)
console.log(`  ${target.graph}: ${actual.outputs.length} outputs, ${actualParams.length} exposed parameters, ${actual.presets.length} presets`)

if (!differences.length) {
  console.log('  the package matches the spec')
  // Types are not compared. sbsrender reports a bool parameter as INTEGER1, the same as an int,
  // so the archive cannot tell the two apart and a comparison would report a difference that is
  // not one. Names are exact either way, and a name is what everything downstream matches on.
  process.exit(0)
}

console.log('')
for (const difference of differences) console.log('  ' + difference)
console.log('')
console.log(`${differences.length} difference${differences.length > 1 ? 's' : ''}. Either the graph was edited in Designer --`)
console.log('dump it back with tools/graph-to-spec.py -- or the spec has moved on and the payload')
console.log('has not been run since.')
process.exit(1)
