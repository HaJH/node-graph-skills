// node comfyui/tools/dump-object-info.mjs [--url http://127.0.0.1:8188] [--out harvest/comfyui]
//
// Saves what a running ComfyUI says about itself: /object_info, every node it can run with its
// inputs, outputs and widget options, and /system_stats, which carries the version those
// definitions belong to. Everything else in this domain is generated from these two files, so
// this is the one step that needs a server up.
//
// Read-only: two GETs. Nothing is queued and nothing on the server changes.
//
// The dump is not committed. It lists every model file and input image on the machine as combo
// options -- checkpoint names, and the file names of a project's reference art -- and it is
// 2.4 MB of tooltips besides. harvest/ is ignored for that reason; the generated tables are what
// gets committed.

import fs from 'node:fs'
import path from 'node:path'

function arg (name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const url = arg('url', 'http://127.0.0.1:8188').replace(/\/$/, '')
const out = arg('out', 'harvest/comfyui')

async function get (route) {
  let response
  try {
    response = await fetch(url + route)
  } catch (error) {
    console.error(`no ComfyUI answering at ${url} (${error.cause?.code ?? error.message})`)
    console.error('start the server first, or pass --url')
    process.exit(1)
  }
  if (!response.ok) {
    console.error(`${url}${route} answered ${response.status}`)
    process.exit(1)
  }
  return response.json()
}

const stats = await get('/system_stats')
const info = await get('/object_info')

fs.mkdirSync(out, { recursive: true })
fs.writeFileSync(path.join(out, 'system_stats.json'), JSON.stringify(stats, null, 1))
fs.writeFileSync(path.join(out, 'object_info.json'), JSON.stringify(info))

const modules = {}
for (const def of Object.values(info)) {
  const module = def.python_module ?? '?'
  const key = module.startsWith('custom_nodes.') ? module : module.split('.')[0]
  modules[key] = (modules[key] ?? 0) + 1
}

console.log(`ComfyUI ${stats.system?.comfyui_version}, frontend ${stats.system?.required_frontend_version}`)
console.log(`${Object.keys(info).length} nodes -> ${path.join(out, 'object_info.json')}`)
for (const [module, count] of Object.entries(modules).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(5)}  ${module}`)
}
