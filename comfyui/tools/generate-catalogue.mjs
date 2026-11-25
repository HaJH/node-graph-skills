// node comfyui/tools/generate-catalogue.mjs --comfyui <dir> [--pack <folder> ...] [--harvest <dir>]
//
// Turns the harvest from dump-object-info.mjs into the tables a build reads:
//
//   comfyui/catalogue.generated.mjs        the nodes ComfyUI itself ships
//   comfyui/packs/<folder>.generated.mjs   one file per custom node pack, named by its folder
//
// --comfyui is the ComfyUI checkout (the folder holding main.py). It is read for one thing: the
// commit each table came from -- ComfyUI's own, and each pack's under custom_nodes/<folder> --
// because a node's inputs belong to a version and a table that does not say which is a guess.
//
// A pack is in only when asked for with --pack, by the folder name a requirements list installs
// it under. Whatever else happens to be installed on the machine stays out. A run without --pack
// regenerates the packs already in comfyui/packs/, so the set only changes when somebody says so.
//
// What is dropped, and why:
// - tooltips and descriptions -- most of the 2.4 MB, and nothing a spec line needs
// - comfy_api_nodes -- the paid cloud nodes and their helpers. They run on a remote service
//   behind an account, not on the machine the workflow is built for
// - the values of a combo that lists files -- installed models, input images. They are this
//   machine's, they change whenever a file is added, and an input folder holds a project's
//   reference art by name. Such an input keeps its type and is marked files: true; a build
//   takes any string for it
// - hidden inputs (PROMPT, UNIQUE_ID, ...), which neither format carries

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const DOMAIN = path.resolve(HERE, '..')
const PACKS = path.join(DOMAIN, 'packs')

const args = process.argv.slice(2)
const values = name => args.flatMap((a, i) => (a === '--' + name && args[i + 1] ? [args[i + 1]] : []))
const comfyui = values('comfyui')[0]
const harvest = values('harvest')[0] ?? 'harvest/comfyui'
if (!comfyui || !fs.existsSync(path.join(comfyui, 'main.py'))) {
  console.error('usage: node comfyui/tools/generate-catalogue.mjs --comfyui <ComfyUI checkout> [--pack <folder> ...]')
  console.error('  --comfyui is the folder holding main.py; it is read for commits')
  process.exit(2)
}

const info = JSON.parse(fs.readFileSync(path.join(harvest, 'object_info.json'), 'utf8'))
const stats = JSON.parse(fs.readFileSync(path.join(harvest, 'system_stats.json'), 'utf8'))

const existing = fs.existsSync(PACKS)
  ? fs.readdirSync(PACKS).filter(f => f.endsWith('.generated.mjs')).map(f => f.replace(/\.generated\.mjs$/, ''))
  : []
const packs = [...new Set([...existing, ...values('pack')])]

// --- git, read rather than run: a detached checkout's HEAD is the sha itself ---------------

function gitDir (dir) {
  const dotgit = path.join(dir, '.git')
  if (!fs.existsSync(dotgit)) return null
  if (fs.statSync(dotgit).isDirectory()) return dotgit
  const pointer = fs.readFileSync(dotgit, 'utf8').match(/gitdir:\s*(.+)/)?.[1]?.trim()
  return pointer ? path.resolve(dir, pointer) : null
}

function commitOf (dir) {
  const git = gitDir(dir)
  if (!git) return null
  const head = fs.readFileSync(path.join(git, 'HEAD'), 'utf8').trim()
  if (/^[0-9a-f]{40}$/.test(head)) return head
  const ref = head.match(/^ref:\s*(.+)$/)?.[1]
  if (!ref) return null
  const loose = path.join(git, ref)
  if (fs.existsSync(loose)) return fs.readFileSync(loose, 'utf8').trim()
  const packed = path.join(git, 'packed-refs')
  if (!fs.existsSync(packed)) return null
  return fs.readFileSync(packed, 'utf8').split('\n').find(l => l.endsWith(' ' + ref))?.split(' ')[0] ?? null
}

function remoteOf (dir) {
  const git = gitDir(dir)
  const config = git && path.join(git, 'config')
  if (!config || !fs.existsSync(config)) return null
  return fs.readFileSync(config, 'utf8').match(/\[remote "origin"\][^[]*?url\s*=\s*(\S+)/)?.[1] ?? null
}

// --- normalising one input -----------------------------------------------------------------

const FILE_EXTENSION = /\.(safetensors|sft|ckpt|pt|pth|bin|gguf|onnx|pkl|engine|png|jpe?g|webp|gif|bmp|tiff?|exr|hdr|mp4|webm|mov|mkv|avi|wav|mp3|flac|ogg|m4a|opus|json|ya?ml|txt|csv|glb|gltf|fbx|obj|stl|usdz|ply|spz|splat|npz|npy)$/i
const UPLOADS = ['image_upload', 'video_upload', 'audio_upload', 'file_upload', 'image_folder', 'remote']

let fileCombos = 0

// Where the server lists files from. A value that names something in one of these is a file,
// whatever it looks like -- a dataset node lists input sub-folders, which have no extension.
// A slash alone proves nothing: FluxKontextMultiReferenceLatentMethod offers "uxo/uno".
const ROOTS = ['input', 'output', ...(fs.existsSync(path.join(comfyui, 'models'))
  ? fs.readdirSync(path.join(comfyui, 'models')).map(d => path.join('models', d))
  : [])].map(d => path.join(comfyui, d))

const isFileValue = v => typeof v === 'string' && (FILE_EXTENSION.test(v) || ROOTS.some(root => fs.existsSync(path.join(root, v))))

function isFileList (values, opts) {
  if (UPLOADS.some(key => opts[key])) return true
  // An empty list is a folder with nothing in it on this machine, never an enum.
  return values.length === 0 || values.some(isFileValue)
}

// Only what a spec line or a writer needs. Everything else in an input's options is how the
// frontend draws it.
const KEEP = ['default', 'min', 'max', 'step', 'round', 'multiline', 'control_after_generate',
  'forceInput', 'socketless', 'widgetType', 'display_name', ...UPLOADS]
const KEEP_TRUE = ['multiselect', 'advanced']

function normaliseInput (name, spec, optional) {
  const raw = spec?.[1] ?? {}
  const entry = { name }
  let type = spec[0]
  let options = null
  if (Array.isArray(type)) { options = type; type = 'COMBO' }
  else if (type === 'COMBO') options = raw.options ?? []
  entry.type = type
  if (optional) entry.optional = true

  for (const key of KEEP) if (key in raw) entry[key] = raw[key]
  for (const key of KEEP_TRUE) if (raw[key] === true) entry[key] = true

  if (options) {
    if (isFileList(options, raw)) {
      entry.files = true
      fileCombos++
      // A default naming a file is this machine's file too.
      if (isFileValue(entry.default)) delete entry.default
    } else {
      entry.options = options
    }
  }

  if (type === 'COMFY_AUTOGROW_V3') {
    // The first non-empty section holds the slot's input, as the backend reads it
    // (Autogrow._expand_schema_for_dynamic).
    const t = raw.template
    const section = ['required', 'optional'].find(s => Object.keys(t.input[s] ?? {}).length)
    const [innerName, innerSpec] = Object.entries(t.input[section])[0]
    entry.template = {
      ...(t.prefix != null ? { prefix: t.prefix } : {}),
      ...(t.names ? { names: t.names } : {}),
      min: t.min ?? 0,
      max: t.max ?? t.names?.length,
      input: normaliseInput(innerName, innerSpec, section === 'optional'),
    }
  }
  if (type === 'COMFY_DYNAMICCOMBO_V3') {
    entry.options = raw.options.map(option => ({
      key: option.key,
      inputs: normaliseInputs(option.inputs ?? {}, null),
    }))
  }
  if (type === 'COMFY_MATCHTYPE_V3' || type === 'COMFY_DYNAMICGROUP_V3') {
    // Not handled by a spec yet; kept whole so the build can say so by name.
    entry.raw = Object.fromEntries(Object.entries(raw).filter(([k]) => k !== 'tooltip'))
  }
  return entry
}

function normaliseInputs (input, order) {
  const out = []
  for (const section of ['required', 'optional']) {
    const names = order?.[section] ?? Object.keys(input[section] ?? {})
    for (const name of names) {
      const spec = input[section]?.[name]
      if (spec) out.push(normaliseInput(name, spec, section === 'optional'))
    }
  }
  return out
}

function normaliseNode (def) {
  const node = {
    display: def.display_name,
    category: def.category,
    inputs: normaliseInputs(def.input ?? {}, def.input_order),
    outputs: def.output.map((type, i) => {
      const out = { name: def.output_name?.[i] ?? type, type: Array.isArray(type) ? 'COMBO' : type }
      if (def.output_is_list?.[i]) out.list = true
      return out
    }),
  }
  if (def.output_node) node.output_node = true
  if (def.deprecated) node.deprecated = true
  if (def.experimental) node.experimental = true
  return node
}

// --- writing --------------------------------------------------------------------------------

function table (nodes) {
  const names = Object.keys(nodes).sort((a, b) => a.localeCompare(b))
  return '{\n' + names.map(n => `  ${JSON.stringify(n)}: ${JSON.stringify(nodes[n])},`).join('\n') + '\n}'
}

const HEADER = '// Generated by comfyui/tools/generate-catalogue.mjs from a running ComfyUI\'s /object_info.\n// Do not edit; regenerate.\n'

const coreNodes = {}
const packNodes = Object.fromEntries(packs.map(p => [p, {}]))
let apiDropped = 0
let otherPacks = new Set()

for (const [name, def] of Object.entries(info)) {
  const module = def.python_module ?? ''
  if (module.startsWith('comfy_api_nodes') || def.api_node) { apiDropped++; continue }
  if (module.startsWith('custom_nodes.')) {
    const folder = module.slice('custom_nodes.'.length).split('.')[0]
    if (folder in packNodes) packNodes[folder][name] = normaliseNode(def)
    else otherPacks.add(folder)
    continue
  }
  coreNodes[name] = normaliseNode(def)
}

const version = stats.system?.comfyui_version
const frontend = stats.system?.required_frontend_version
const coreCommit = commitOf(comfyui)

fs.writeFileSync(path.join(DOMAIN, 'catalogue.generated.mjs'),
  HEADER +
  `export const COMFYUI = ${JSON.stringify({ version, frontend, commit: coreCommit })}\n\n` +
  `export const NODES = ${table(coreNodes)}\n`)
console.log(`core: ${Object.keys(coreNodes).length} nodes, ComfyUI ${version} (${coreCommit?.slice(0, 8) ?? 'commit unknown'})`)

fs.mkdirSync(PACKS, { recursive: true })
for (const pack of packs) {
  const dir = path.join(comfyui, 'custom_nodes', pack)
  const count = Object.keys(packNodes[pack]).length
  if (!count) {
    console.error(`pack ${pack}: no nodes from custom_nodes.${pack} in the harvest -- is it installed and loaded?`)
    process.exitCode = 1
    continue
  }
  // A pack may not take a name ComfyUI already has: the server would let one replace the other
  // depending on load order, and a spec that reads one way and runs another is worse than a refusal.
  const clash = Object.keys(packNodes[pack]).filter(n => n in coreNodes)
  if (clash.length) {
    console.error(`pack ${pack}: ${clash.join(', ')} clash with ComfyUI's own nodes`)
    process.exitCode = 1
    continue
  }
  const meta = { name: pack, repo: remoteOf(dir), commit: commitOf(dir), comfyui: version }
  fs.writeFileSync(path.join(PACKS, `${pack}.generated.mjs`),
    HEADER + `export const PACK = ${JSON.stringify(meta)}\n\nexport const NODES = ${table(packNodes[pack])}\n`)
  console.log(`pack ${pack}: ${count} nodes (${meta.commit?.slice(0, 8) ?? 'commit unknown'})`)
}

console.log(`dropped: ${apiDropped} cloud API nodes; ${fileCombos} combos list files, so their values are not kept`)
if (otherPacks.size) console.log(`installed but not asked for: ${[...otherPacks].join(', ')} (add with --pack <folder>)`)
