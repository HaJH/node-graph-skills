// The ComfyUI round-trip gate, kept runnable. It started as the probe the format was proved
// with; the reader and writers it proved now live in ui.mjs and api.mjs, and this drives them.
//
//   node comfyui/tools/roundtrip.mjs out <workflow.json>
//       reads a workflow the frontend saved into the neutral graph and writes it back out from
//       that graph alone: <workflow>.rebuilt.json (UI format) and <workflow>.rebuilt.api.json
//
//   node comfyui/tools/roundtrip.mjs compare <a> <b>
//       two UI files: do they describe the same graph?
//       two API files: do they ask for the same work? An API file keyed by number is read against
//       the UI file beside it (x.api.json -> x.json), so the frontend's own export and ours
//       compare node for node though one keys by id and the other by name.
//
//   node comfyui/tools/roundtrip.mjs queue <workflow.api.json> [--url http://127.0.0.1:8188]
//       sends it to /prompt and waits for it to finish. This runs the workflow on the server.
//
// The gate, as NOTES.md records it: the frontend saves a sample (s0) and exports it (s0.api,
// both with tools/frontend.mjs); `out` s0; compare the rebuilt API with s0.api; the frontend
// loads the rebuilt UI file, saves it (s1) and exports it (s1.api); compare s1 with s0 and s1.api
// with s0.api; queue the rebuilt API.
//
// Positions, sizes and group rectangles are carried through as they were read. The gate is
// about the format; where nodes go is place.mjs's business.

import fs from 'node:fs'
import path from 'node:path'

import { NODES } from '../catalogue.mjs'
import { readUi, writeUi } from '../ui.mjs'
import { writeApi } from '../api.mjs'
import { inputAt, hasControl, defaultControl } from '../defs.mjs'

function arg (name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const loadJson = file => JSON.parse(fs.readFileSync(file, 'utf8'))

function graphLines (graph) {
  const lines = []
  for (const n of graph.nodes) {
    lines.push(`node ${n.name} ${n.type} title=${JSON.stringify(n.title)}${n.collapsed ? ' collapsed' : ''}`)
    const def = NODES[n.type]
    for (const [k, v] of Object.entries(n.values).sort(([a], [b]) => a.localeCompare(b))) {
      const input = def && inputAt(def, k, n.values)
      const control = input && hasControl(input) ? ` control=${n.controls[k] ?? defaultControl(input)}` : ''
      lines.push(`  ${n.name}.${k} = ${JSON.stringify(v)}${control}`)
    }
  }
  for (const w of graph.wires) lines.push(`wire ${w.from}.${w.slot} -> ${w.to}.${w.input}`)
  for (const g of graph.groups) lines.push(`group ${JSON.stringify(g.title)} ${g.color} [${[...g.members].sort().join(' ')}]`)
  return lines
}

// _meta.title is kept apart. The backend never reads it, and on an untitled node the frontend
// fills it with the display name in the user's language -- "체크포인트 로드" under a Korean
// locale -- so it says which locale exported the file, not what the workflow does.
function apiLines (api, nameOf = k => k) {
  const lines = []
  for (const [key, node] of Object.entries(api)) {
    lines.push(`node ${nameOf(key)} ${node.class_type}`)
    lines.push(`  title ${nameOf(key)} ${JSON.stringify(node._meta?.title)}`)
    for (const [k, v] of Object.entries(node.inputs)) {
      const link = Array.isArray(v) && v.length === 2 && typeof v[1] === 'number' && String(v[0]) in api
      lines.push(`  ${nameOf(key)}.${k} ${link ? `<- ${nameOf(String(v[0]))}.${v[1]}` : JSON.stringify(v)}`)
    }
  }
  return lines
}

const isNote = line => line.startsWith('  title ')

function diff (a, b, labelA, labelB) {
  const sa = new Set(a)
  const sb = new Set(b)
  const onlyA = a.filter(l => !sb.has(l))
  const onlyB = b.filter(l => !sa.has(l))
  const notes = [...onlyA, ...onlyB].filter(isNote).length
  for (const l of onlyA) console.log(`${isNote(l) ? '  note' : '-'} ${labelA}: ${l.trim()}`)
  for (const l of onlyB) console.log(`${isNote(l) ? '  note' : '+'} ${labelB}: ${l.trim()}`)
  const real = onlyA.length + onlyB.length - notes
  console.log(real
    ? `${real} differences`
    : `same: ${a.length} lines${notes ? ` (${notes} title notes, which the backend does not read)` : ''}`)
  return real === 0
}

const isApi = json => !Array.isArray(json.nodes) && Object.values(json).every(v => v && typeof v === 'object' && 'class_type' in v)

function apiLinesFor (file) {
  const api = loadJson(file)
  if (!Object.keys(api).every(k => /^\d+(:\d+)*$/.test(k))) return apiLines(api)
  const ui = file.replace(/\.api\.json$/, '.json')
  if (ui === file || !fs.existsSync(ui)) {
    console.error(`${file} keys nodes by id; put the UI file it was exported from beside it as ${path.basename(ui)}`)
    process.exit(1)
  }
  const { nameOfId } = readUi(loadJson(ui), NODES)
  return apiLines(api, k => nameOfId.get(Number(k)) ?? `?${k}`)
}

function read (file) {
  const { graph, problems } = readUi(loadJson(file), NODES)
  for (const p of problems) console.log(`problem in ${path.basename(file)}: ${p}`)
  return { graph, problems }
}

async function queue (file) {
  const url = arg('url', 'http://127.0.0.1:8188').replace(/\/$/, '')
  const response = await fetch(url + '/prompt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: loadJson(file), client_id: 'node-graph-roundtrip' }),
  })
  const body = await response.json()
  if (!response.ok) {
    console.log(`refused (${response.status}):`)
    console.log(JSON.stringify(body, null, 2))
    process.exit(1)
  }
  console.log(`queued ${body.prompt_id}`)
  const started = Date.now()
  for (;;) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const entry = (await (await fetch(`${url}/history/${body.prompt_id}`)).json())[body.prompt_id]
    if (entry?.status?.completed || entry?.status?.status_str === 'error') {
      console.log(`status: ${entry.status.status_str} after ${((Date.now() - started) / 1000).toFixed(0)} s`)
      for (const [node, out] of Object.entries(entry.outputs ?? {})) {
        for (const image of out.images ?? []) console.log(`  ${node}: ${image.subfolder}/${image.filename} (${image.type})`)
      }
      if (entry.status.status_str === 'error') {
        for (const m of entry.status.messages ?? []) if (m[0] === 'execution_error') console.log(JSON.stringify(m[1], null, 2))
        process.exit(1)
      }
      return
    }
    if (Date.now() - started > 600000) { console.log('still running after 10 minutes; check the server'); process.exit(1) }
  }
}

const [command, a, b] = process.argv.slice(2)

if (command === 'queue' && a) {
  await queue(a)
} else if (command === 'out' && a) {
  const { graph, problems } = read(a)
  const base = a.replace(/\.json$/, '')
  fs.writeFileSync(base + '.rebuilt.json', JSON.stringify(writeUi(graph, NODES), null, 2))
  fs.writeFileSync(base + '.rebuilt.api.json', JSON.stringify(writeApi(graph, NODES), null, 2))
  console.log(`${graph.nodes.length} nodes, ${graph.wires.length} wires, ${graph.groups.length} groups`)
  console.log(`-> ${base}.rebuilt.json, ${base}.rebuilt.api.json`)
  process.exit(problems.length ? 1 : 0)
} else if (command === 'compare' && a && b) {
  const ja = loadJson(a)
  const jb = loadJson(b)
  let same
  if (isApi(ja) && isApi(jb)) {
    same = diff(apiLinesFor(a), apiLinesFor(b), path.basename(a), path.basename(b))
  } else if (!isApi(ja) && !isApi(jb)) {
    const ra = read(a)
    const rb = read(b)
    same = diff(graphLines(ra.graph), graphLines(rb.graph), path.basename(a), path.basename(b)) &&
      !ra.problems.length && !rb.problems.length
  } else {
    console.error('compare two UI files or two API files, not one of each')
    process.exit(2)
  }
  process.exit(same ? 0 : 1)
} else {
  console.error('usage: node comfyui/tools/roundtrip.mjs out <workflow.json> | compare <a> <b> | queue <workflow.api.json>')
  process.exit(2)
}
