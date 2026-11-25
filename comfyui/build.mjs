// node comfyui/build.mjs <spec> [--ui <path>] [--api <path>] [--html <path>] [--lang <code>]
//
// Reads a spec, reports everything wrong with it at once, and writes three files beside it:
//
//   <spec>.json      the UI format -- open it in ComfyUI, or paste it onto the canvas
//   <spec>.api.json  the API format -- what /prompt takes, keyed by node name
//   <spec>.html      the page that draws it, with the UI format under a Copy button
//
// Output is deterministic: the same spec writes the same bytes, LF line endings, so a lock that
// hashes the files holds until the spec changes.

import fs from 'node:fs'
import path from 'node:path'

import { NODES, COMFYUI, PACKS_LOADED } from './catalogue.mjs'
import { parseSpec, SpecError } from './spec.mjs'
import { writeUi } from './ui.mjs'
import { writeApi } from './api.mjs'
import { placeUi } from './place.mjs'
import { draw } from './draw.mjs'
import { LANGUAGES } from './strings.mjs'

function arg (name) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : null
}

const input = process.argv[2]
if (!input || input.startsWith('--')) {
  console.error('usage: node comfyui/build.mjs <spec> [--ui <path>] [--api <path>] [--html <path>] [--lang <code>]')
  process.exit(2)
}

let graph
try {
  graph = parseSpec(fs.readFileSync(input, 'utf8'), NODES)
} catch (error) {
  if (!(error instanceof SpecError)) throw error
  console.error(`${input}:`)
  for (const problem of error.problems) console.error(`  line ${problem.line}: ${problem.message}`)
  process.exit(1)
}
graph.name ??= path.basename(input, path.extname(input))

const lang = arg('lang') ?? graph.lang ?? 'en'
if (!LANGUAGES[lang]) {
  console.error(`${input}: there is no "${lang}" page language -- there is ${Object.keys(LANGUAGES).join(', ')}`)
  process.exit(1)
}

const base = path.join(path.dirname(input), path.basename(input, path.extname(input)))
const uiAt = arg('ui') ?? base + '.json'
const apiAt = arg('api') ?? base + '.api.json'
const htmlAt = arg('html') ?? base + '.html'

const json = value => JSON.stringify(value, null, 2) + '\n'
const uiText = json(writeUi(graph, NODES, placeUi(graph, NODES)))
fs.writeFileSync(uiAt, uiText)
fs.writeFileSync(apiAt, json(writeApi(graph, NODES)))
fs.writeFileSync(htmlAt, draw(graph, NODES, { lang, uiText }))

const packs = [...new Set(graph.nodes.map(n => NODES[n.type].pack).filter(Boolean))]
const count = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`
console.log(`${count(graph.nodes.length, 'node')}, ${count(graph.wires.length, 'wire')}, ${count(graph.groups.length, 'group')}`)
console.log('ui  :', uiAt, '  -- open it in ComfyUI, or paste it onto the canvas')
console.log('api :', apiAt, '  -- what /prompt takes, keyed by node name')
console.log('page:', htmlAt, '-', (fs.statSync(htmlAt).size / 1024).toFixed(0) + ' KB')
console.log(`catalogue: ComfyUI ${COMFYUI.version} (${COMFYUI.commit?.slice(0, 8) ?? '?'})` +
  packs.map(name => `, ${name} (${PACKS_LOADED.find(p => p.name === name)?.commit?.slice(0, 8) ?? '?'})`).join(''))
