// Runs the ComfyUI frontend's own code on a workflow, in a headless Edge, so the gate does not
// need a person at the window. Probe only: nothing in a build depends on a browser.
//
//   node comfyui/tools/frontend.mjs save <workflow.json> <out.json>
//       loads the workflow and writes what the frontend serialises -- what Save writes
//   node comfyui/tools/frontend.mjs api <workflow.json> <out.api.json>
//       loads the workflow and writes what graphToPrompt makes -- what Export (API) writes
//   node comfyui/tools/frontend.mjs eval "<expression>"
//       evaluates an expression in the loaded page, for finding out how the frontend works
//
// --url (default http://127.0.0.1:8188), --edge <msedge.exe>.
//
// A separate browser profile in a temp folder, so the user's own window and its open tabs are
// never touched. Loading a workflow is client-side; nothing is saved to the server.
//
// Needs Node 22 for the global WebSocket.

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'

function arg (name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const URL_ = arg('url', 'http://127.0.0.1:8188').replace(/\/$/, '')
const EDGE = arg('edge', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe')
const PORT = 9300 + Math.floor(Math.random() * 500)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

async function launch () {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'comfy-frontend-'))
  const edge = spawn(EDGE, [
    '--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check', '--window-size=1600,1000', 'about:blank',
  ], { stdio: 'ignore' })
  const close = () => {
    edge.kill()
    try { fs.rmSync(profile, { recursive: true, force: true }) } catch {}
  }
  for (let i = 0; i < 50; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()
      const page = targets.find(t => t.type === 'page')
      if (page) return { ws: page.webSocketDebuggerUrl, close }
    } catch {}
    await sleep(200)
  }
  close()
  throw new Error('headless Edge did not come up')
}

function connect (wsUrl) {
  const ws = new WebSocket(wsUrl)
  let next = 1
  const pending = new Map()
  const logs = []
  ws.onmessage = event => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id)
      pending.delete(message.id)
      if (message.error) reject(new Error(message.error.message))
      else resolve(message.result)
    } else if (message.method === 'Runtime.consoleAPICalled') {
      const text = message.params.args.map(a => a.value ?? a.description ?? '').join(' ')
      logs.push(`${message.params.type}: ${text}`)
    } else if (message.method === 'Runtime.exceptionThrown') {
      logs.push(`exception: ${message.params.exceptionDetails.exception?.description ?? message.params.exceptionDetails.text}`)
    }
  }
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = next++
    pending.set(id, { resolve, reject })
    ws.send(JSON.stringify({ id, method, params }))
  })
  return new Promise((resolve, reject) => {
    ws.onopen = () => resolve({ send, logs, close: () => ws.close() })
    ws.onerror = reject
  })
}

async function evaluate (cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description ?? result.exceptionDetails.text)
  }
  return result.result.value
}

async function openApp () {
  const browser = await launch()
  const cdp = await connect(browser.ws)
  await cdp.send('Runtime.enable')
  await cdp.send('Page.enable')
  await cdp.send('Page.navigate', { url: URL_ })
  // The app is ready once the node definitions are registered, not when the page has loaded.
  for (let i = 0; i < 150; i++) {
    const ready = await evaluate(cdp, `!!(window.app && window.app.graph && window.LiteGraph && window.LiteGraph.registered_node_types && window.LiteGraph.registered_node_types.KSampler)`).catch(() => false)
    if (ready) return { cdp, close: () => { cdp.close(); browser.close() } }
    await sleep(200)
  }
  const logs = cdp.logs.slice(-20).join('\n')
  cdp.close()
  browser.close()
  throw new Error('the frontend did not finish loading in 30 s\n' + logs)
}

async function load (cdp, file) {
  const workflow = fs.readFileSync(file, 'utf8')
  return evaluate(cdp, `(async () => {
    await window.app.loadGraphData(${workflow}, true, true, null)
    const nodes = window.app.graph.nodes
    return { nodes: nodes.length, errors: nodes.filter(n => n.has_errors).map(n => n.id + ' ' + n.type) }
  })()`)
}

const [command, a, b] = process.argv.slice(2)
if (!['save', 'api', 'eval'].includes(command) || !a || (command !== 'eval' && !b)) {
  console.error('usage: node comfyui/tools/frontend.mjs save|api <workflow.json> <out> | eval "<expression>"')
  process.exit(2)
}

const app = await openApp()
try {
  if (command === 'eval') {
    console.log(JSON.stringify(await evaluate(app.cdp, a), null, 2))
  } else {
    const loaded = await load(app.cdp, a)
    console.log(`loaded ${loaded.nodes} nodes${loaded.errors.length ? ', with errors on ' + loaded.errors.join(', ') : ''}`)
    const out = command === 'save'
      ? await evaluate(app.cdp, 'window.app.graph.serialize()')
      : await evaluate(app.cdp, '(async () => (await window.app.graphToPrompt()).output)()')
    fs.writeFileSync(b, JSON.stringify(out, null, 2))
    console.log(`-> ${b}`)
  }
  const noisy = app.cdp.logs.filter(l => /^(error|warning|exception)/.test(l))
  for (const line of noisy.slice(0, 15)) console.log('  page', line.slice(0, 300))
} finally {
  app.close()
}
