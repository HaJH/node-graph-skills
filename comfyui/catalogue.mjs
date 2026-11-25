// Every node a spec can name: ComfyUI's own, plus each custom node pack under packs/. A pack is
// a generated file per folder (see tools/generate-catalogue.mjs); dropping one in is all it
// takes to make its nodes nameable, and each node remembers which pack it came from so the page
// can say so.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { COMFYUI, NODES as CORE } from './catalogue.generated.mjs'

const PACKS = path.join(path.dirname(fileURLToPath(import.meta.url)), 'packs')

export { COMFYUI }

export const PACKS_LOADED = []
export const NODES = {}

for (const [name, def] of Object.entries(CORE)) NODES[name] = { ...def, pack: null }

const files = fs.existsSync(PACKS) ? fs.readdirSync(PACKS).filter(f => f.endsWith('.generated.mjs')).sort() : []
for (const file of files) {
  const { PACK, NODES: nodes } = await import(pathToFileURL(path.join(PACKS, file)).href)
  PACKS_LOADED.push(PACK)
  for (const [name, def] of Object.entries(nodes)) {
    // The generator refuses a clash with ComfyUI's own nodes; two packs claiming one name is
    // the case left, and the server would keep whichever loaded last.
    if (NODES[name]) throw new Error(`${name} is in both ${NODES[name].pack ?? 'ComfyUI'} and ${PACK.name}`)
    NODES[name] = { ...def, pack: PACK.name }
  }
}
