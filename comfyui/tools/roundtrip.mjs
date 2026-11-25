// The ComfyUI round-trip gate. Node, no install; reads the harvest from dump-object-info.mjs.
//
//   node comfyui/tools/roundtrip.mjs out <workflow.json>
//       reads a workflow the frontend saved into a neutral graph -- node types, widget values by
//       input name, wires by input name -- and writes it back out twice from that graph alone:
//       <workflow>.rebuilt.json (UI format, to load in the frontend) and
//       <workflow>.rebuilt.api.json (API format, what /prompt takes)
//
//   node comfyui/tools/roundtrip.mjs compare <a> <b>
//       two UI files: do they describe the same graph?
//       two API files: do they ask for the same work? An API file with numeric keys is read
//       against the UI file beside it (x.api.json -> x.json), so the frontend's own export and
//       ours compare node for node even though the frontend keys by id and we key by name.
//
//   node comfyui/tools/roundtrip.mjs queue <workflow.api.json> [--url http://127.0.0.1:8188]
//       sends it to /prompt and waits for it to finish. This one changes the server's state --
//       it runs the workflow -- so it is the user's to run.
//
// Gate procedure: load a sample in the frontend and save it (s0), export it as API (s0.api);
// `out` it; compare the rebuilt API against s0.api; load the rebuilt UI file in the frontend and
// save it (s1), export it (s1.api); compare s1 against s0 and s1.api against s0.api; queue the
// rebuilt API. Every comparison clean and the queue finishing is a pass.
//
// Positions, sizes, collapsed flags and group rectangles are carried through untouched. They
// are cosmetic and the gate is about the format; where nodes go is the emitter's problem.

import fs from 'node:fs'
import path from 'node:path'

const DEFS = 'harvest/comfyui/object_info.json'

function arg (name, fallback) {
  const i = process.argv.indexOf('--' + name)
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback
}

const loadJson = file => JSON.parse(fs.readFileSync(file, 'utf8'))

// --- definitions ---------------------------------------------------------------------------

const WIDGET_TYPES = new Set(['INT', 'FLOAT', 'STRING', 'BOOLEAN', 'COMBO', 'COMFY_DYNAMICCOMBO_V3'])

const typeOf = spec => Array.isArray(spec[0]) ? 'COMBO' : spec[0]
const optsOf = spec => spec[1] ?? {}

function isWidget (spec) {
  const opts = optsOf(spec)
  return WIDGET_TYPES.has(typeOf(spec)) && !opts.forceInput
}

function topSpec (def, name) {
  return def.input?.required?.[name] ?? def.input?.optional?.[name] ?? null
}

function isOptional (def, name) {
  return !def.input?.required?.[name] && !!def.input?.optional?.[name]
}

// A dotted name is a path into a V3 dynamic input: `images.image0` is the first slot of the
// autogrow `images`, `size_mode.width` an input the dynamic combo `size_mode` shows when its
// value selects it. The backend keys its inputs by exactly these paths (comfy_api finalize_prefix).
function resolveSpec (def, name, values) {
  const parts = name.split('.')
  let spec = topSpec(def, parts[0])
  let at = parts[0]
  for (const part of parts.slice(1)) {
    if (!spec) return null
    const type = typeOf(spec)
    const opts = optsOf(spec)
    if (type === 'COMFY_AUTOGROW_V3') {
      const template = opts.template
      const ok = template.names ? template.names.includes(part)
        : part.startsWith(template.prefix) && /^\d+$/.test(part.slice(template.prefix.length))
      if (!ok) return null
      const io = template.input.required ?? template.input.optional
      spec = Object.values(io)[0]
    } else if (type === 'COMFY_DYNAMICCOMBO_V3') {
      const chosen = values?.[at]
      const options = chosen != null ? opts.options.filter(o => o.key === chosen) : opts.options
      spec = null
      for (const option of options) {
        const found = option.inputs.required?.[part] ?? option.inputs.optional?.[part]
        if (found) { spec = found; break }
      }
    } else {
      return null
    }
    at += '.' + part
  }
  return spec
}

function hasControl (spec) {
  const control = optsOf(spec).control_after_generate
  return control === true || typeof control === 'string'
}

function defaultControl (spec) {
  const control = optsOf(spec).control_after_generate
  return typeof control === 'string' ? control : 'randomize'
}

function defaultValue (spec) {
  const opts = optsOf(spec)
  if ('default' in opts) return opts.default
  if (Array.isArray(spec[0])) return spec[0][0]
  if (typeOf(spec) === 'COMBO') return opts.options?.[0]
  if (typeOf(spec) === 'COMFY_DYNAMICCOMBO_V3') return opts.options?.[0]?.key
  return { INT: 0, FLOAT: 0, STRING: '', BOOLEAN: false }[typeOf(spec)]
}

// Every input a node shows, in the backend's order, with V3 dynamic inputs expanded the way the
// frontend expands them: an autogrow shows its wired slots and one empty one after them, a
// dynamic combo shows the inputs its current value selects.
function expandInputs (def, values, wiredNames) {
  const out = []
  const order = [...(def.input_order?.required ?? []), ...(def.input_order?.optional ?? [])]
  const walk = (name, spec, optional) => {
    const type = typeOf(spec)
    const opts = optsOf(spec)
    if (type === 'COMFY_AUTOGROW_V3') {
      const t = opts.template
      const names = t.names ?? Array.from({ length: t.max }, (_, i) => t.prefix + i)
      let wired = 0
      names.forEach((n, i) => { if (wiredNames.has(`${name}.${n}`)) wired = i + 1 })
      const count = Math.min(names.length, Math.max(wired + 1, t.min ?? 0))
      const io = t.input.required ?? t.input.optional
      const inner = Object.values(io)[0]
      for (let i = 0; i < count; i++) walk(`${name}.${names[i]}`, inner, optional || i >= (t.min ?? 0))
      return
    }
    out.push({ name, spec, optional })
    if (type === 'COMFY_DYNAMICCOMBO_V3') {
      const chosen = values[name] ?? defaultValue(spec)
      const option = opts.options.find(o => o.key === chosen)
      if (!option) return
      for (const [n, s] of Object.entries(option.inputs.required ?? {})) walk(`${name}.${n}`, s, optional)
      for (const [n, s] of Object.entries(option.inputs.optional ?? {})) walk(`${name}.${n}`, s, true)
    }
  }
  for (const name of order) walk(name, topSpec(def, name), isOptional(def, name))
  return out
}

// --- names ---------------------------------------------------------------------------------

const snake = type => type
  .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
  .toLowerCase()

const slug = text => text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_+|_+$/g, '')

function nameNodes (nodes) {
  const used = new Map()
  return nodes.map(node => {
    let base = (node.title && slug(node.title)) || snake(node.type)
    if (/^\d/.test(base)) base = 'n_' + base
    const count = (used.get(base) ?? 0) + 1
    used.set(base, count)
    return count === 1 ? base : `${base}_${count}`
  })
}

// --- UI format -> graph --------------------------------------------------------------------

function readUi (workflow, defs) {
  const problems = []
  const linkById = new Map(workflow.links.map(l => [l[0], l]))
  const names = nameNodes(workflow.nodes)
  const nameOfId = new Map(workflow.nodes.map((n, i) => [n.id, names[i]]))

  const nodes = workflow.nodes.map((node, index) => {
    const name = names[index]
    const def = defs[node.type]
    const record = {
      name,
      type: node.type,
      title: node.title ?? null,
      mode: node.mode ?? 0,
      values: {},
      controls: {},
      cosmetic: { pos: node.pos, size: node.size, flags: node.flags ?? {}, color: node.color, bgcolor: node.bgcolor },
    }
    if (!def) {
      problems.push(`${name}: ${node.type} is not a node the server knows -- frontend-only nodes are out of scope`)
      return record
    }
    if (record.mode !== 0) problems.push(`${name}: mode ${record.mode} (muted or bypassed) is not handled by the probe`)

    const wv = Array.isArray(node.widgets_values) ? node.widgets_values : []
    let k = 0
    for (const input of (node.inputs ?? []).filter(i => i.widget)) {
      const spec = resolveSpec(def, input.name, record.values)
      if (!spec) {
        // The upload button LoadImage grows from image_upload is a widget the backend never sees.
        record.uiOnly = { ...(record.uiOnly ?? {}), [input.name]: wv[k++] }
        continue
      }
      record.values[input.name] = wv[k++]
      if (hasControl(spec)) record.controls[input.name] = wv[k++]
    }
    if (k !== wv.length) problems.push(`${name}: read ${k} of ${wv.length} widget values -- the widget order is not what the probe thinks`)

    const named = node.widgets_values_named
    if (named) {
      for (const [key, value] of Object.entries(named)) {
        if (key === 'control_after_generate') {
          const controls = Object.values(record.controls)
          if (controls.length !== 1 || controls[0] !== value) problems.push(`${name}: named control ${value} vs positional ${controls.join(',')}`)
        } else if (key in record.values) {
          if (JSON.stringify(record.values[key]) !== JSON.stringify(value)) problems.push(`${name}.${key}: named ${JSON.stringify(value)} vs positional ${JSON.stringify(record.values[key])}`)
        } else if (!(key in (record.uiOnly ?? {}))) {
          problems.push(`${name}: named value ${key} has no widget input`)
        }
      }
    }
    return record
  })

  const wires = []
  workflow.nodes.forEach((node, index) => {
    for (const input of node.inputs ?? []) {
      if (input.link == null) continue
      const link = linkById.get(input.link)
      if (!link) { problems.push(`${names[index]}.${input.name}: link ${input.link} is not in the links table`); continue }
      const [, fromId, slot] = link
      const from = workflow.nodes.find(n => n.id === fromId)
      wires.push({ from: nameOfId.get(fromId), slot, out: from?.outputs?.[slot]?.name, to: names[index], in: input.name })
      // A widget with a wire on it is dead: the wire wins, in the UI and in the API. Its stored
      // value is whatever the widget held before it was wired, and nothing reads it.
      const record = nodes[index]
      delete record.values[input.name]
      delete record.controls[input.name]
    }
  })

  const groups = (workflow.groups ?? []).map(group => {
    const [x, y, w, h] = group.bounding
    const members = nodes.filter(n => {
      const [nx, ny] = n.cosmetic.pos
      return nx >= x && ny >= y && nx <= x + w && ny <= y + h
    }).map(n => n.name)
    return { title: group.title, color: group.color, bounding: group.bounding, members }
  })

  return { nodes, wires, groups, problems, nameOfId, extra: workflow.extra }
}

// --- graph -> UI format --------------------------------------------------------------------

function writeUi (graph, defs) {
  const idOf = new Map(graph.nodes.map((n, i) => [n.name, i + 1]))
  const links = []
  const outLinks = new Map() // "name:slot" -> [link ids]

  const nodes = graph.nodes.map((node, index) => {
    const def = defs[node.type]
    const wiredHere = graph.wires.filter(w => w.to === node.name)
    const wiredNames = new Set(wiredHere.map(w => w.in))
    const expanded = expandInputs(def, node.values, wiredNames)

    const linkFor = name => {
      const wire = wiredHere.find(w => w.in === name)
      if (!wire) return null
      const id = links.length + 1
      const fromDef = defs[graph.nodes.find(n => n.name === wire.from).type]
      links.push([id, idOf.get(wire.from), wire.slot, index + 1, null, fromDef.output[wire.slot]])
      const key = `${wire.from}:${wire.slot}`
      outLinks.set(key, [...(outLinks.get(key) ?? []), id])
      return id
    }

    const sockets = expanded.filter(i => !isWidget(i.spec))
    const widgets = expanded.filter(i => isWidget(i.spec))
    const inputs = []
    for (const i of sockets) {
      const entry = { name: i.name, type: typeOf(i.spec), link: linkFor(i.name) }
      if (i.optional) entry.shape = 7
      inputs.push(entry)
    }
    const widgetsValues = []
    for (const i of widgets) {
      inputs.push({ name: i.name, type: typeOf(i.spec), widget: { name: i.name }, link: linkFor(i.name) })
      widgetsValues.push(i.name in node.values ? node.values[i.name] : defaultValue(i.spec))
      if (hasControl(i.spec)) widgetsValues.push(node.controls[i.name] ?? defaultControl(i.spec))
      if (optsOf(i.spec).image_upload) {
        inputs.push({ name: 'upload', type: 'IMAGEUPLOAD', widget: { name: 'upload' }, link: null })
        widgetsValues.push('image')
      }
    }
    // the target slot is the input's index, known only once the list is built
    for (const link of links) {
      if (link[3] === index + 1 && link[4] === null) {
        link[4] = inputs.findIndex(i => i.link === link[0])
      }
    }

    const record = {
      id: index + 1,
      type: node.type,
      pos: node.cosmetic.pos,
      size: node.cosmetic.size,
      flags: node.cosmetic.flags ?? {},
      order: index,
      mode: node.mode,
      inputs,
      outputs: def.output.map((type, slot) => ({ name: def.output_name[slot], type, links: null })),
      properties: { 'Node name for S&R': node.type },
      widgets_values: widgetsValues,
    }
    if (node.title != null) record.title = node.title
    if (node.cosmetic.color) record.color = node.cosmetic.color
    if (node.cosmetic.bgcolor) record.bgcolor = node.cosmetic.bgcolor
    return record
  })

  nodes.forEach((record, index) => {
    record.outputs.forEach((output, slot) => {
      const ids = outLinks.get(`${graph.nodes[index].name}:${slot}`)
      if (ids) output.links = ids
    })
  })

  return {
    id: '00000000-0000-4000-8000-000000000002',
    revision: 0,
    last_node_id: nodes.length,
    last_link_id: links.length,
    nodes,
    links,
    groups: graph.groups.map((g, i) => ({ id: i + 1, title: g.title, bounding: g.bounding, color: g.color, flags: {} })),
    config: {},
    extra: graph.extra ?? { ds: { scale: 1, offset: [0, 0] } },
    version: 0.4,
  }
}

// --- graph -> API format -------------------------------------------------------------------

function writeApi (graph, defs) {
  const api = {}
  for (const node of graph.nodes) {
    const def = defs[node.type]
    const wiredHere = graph.wires.filter(w => w.to === node.name)
    const wiredNames = new Set(wiredHere.map(w => w.in))
    const inputs = {}
    for (const i of expandInputs(def, node.values, wiredNames)) {
      const wire = wiredHere.find(w => w.in === i.name)
      if (wire) inputs[i.name] = [wire.from, wire.slot]
      else if (isWidget(i.spec)) inputs[i.name] = i.name in node.values ? node.values[i.name] : defaultValue(i.spec)
    }
    api[node.name] = { inputs, class_type: node.type, _meta: { title: node.title ?? def.display_name } }
  }
  return api
}

// --- comparing -----------------------------------------------------------------------------

function graphLines (graph) {
  const lines = []
  for (const n of graph.nodes) {
    const flags = n.cosmetic.flags?.collapsed ? ' collapsed' : ''
    lines.push(`node ${n.name} ${n.type} title=${JSON.stringify(n.title)} mode=${n.mode}${flags}`)
    for (const [k, v] of Object.entries(n.values)) {
      lines.push(`  ${n.name}.${k} = ${JSON.stringify(v)}${k in n.controls ? ` control=${n.controls[k]}` : ''}`)
    }
  }
  for (const w of graph.wires) lines.push(`wire ${w.from}.${w.slot}(${w.out}) -> ${w.to}.${w.in}`)
  for (const g of graph.groups) lines.push(`group ${JSON.stringify(g.title)} ${g.color} [${[...g.members].sort().join(' ')}]`)
  return lines
}

// _meta.title is kept apart. The backend never reads it, and on a node with no title of its own
// the frontend fills it with the display name in the user's language -- "체크포인트 로드" under a
// Korean locale -- so it says which locale exported the file, not what the workflow does.
function apiLines (api, nameOf = k => k) {
  const lines = []
  for (const [key, node] of Object.entries(api)) {
    lines.push(`node ${nameOf(key)} ${node.class_type}`)
    lines.push(`  title ${nameOf(key)} ${JSON.stringify(node._meta?.title)}`)
    for (const [k, v] of Object.entries(node.inputs)) {
      const shown = Array.isArray(v) && v.length === 2 && typeof v[1] === 'number' && (typeof v[0] === 'string') && v[0] in api
        ? `<- ${nameOf(v[0])}.${v[1]}`
        : JSON.stringify(v)
      lines.push(`  ${nameOf(key)}.${k} ${shown}`)
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

function apiLinesFor (file, defs) {
  const api = loadJson(file)
  const numeric = Object.keys(api).every(k => /^\d+(:\d+)*$/.test(k))
  if (!numeric) return apiLines(api)
  const ui = file.replace(/\.api\.json$/, '.json')
  if (ui === file || !fs.existsSync(ui)) {
    console.error(`${file} keys nodes by id; put the UI file it was exported from beside it as ${path.basename(ui)}`)
    process.exit(1)
  }
  const { nameOfId } = readUi(loadJson(ui), defs)
  return apiLines(api, k => nameOfId.get(Number(k)) ?? `?${k}`)
}

// --- queue ---------------------------------------------------------------------------------

async function queue (file) {
  const url = arg('url', 'http://127.0.0.1:8188').replace(/\/$/, '')
  const prompt = loadJson(file)
  const response = await fetch(url + '/prompt', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, client_id: 'node-graph-roundtrip' }),
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
    const history = await (await fetch(`${url}/history/${body.prompt_id}`)).json()
    const entry = history[body.prompt_id]
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

// --- main ----------------------------------------------------------------------------------

const [command, a, b] = process.argv.slice(2)
const defsFile = arg('defs', DEFS)

if (command === 'queue' && a) {
  await queue(a)
} else if ((command === 'out' && a) || (command === 'compare' && a && b)) {
  if (!fs.existsSync(defsFile)) {
    console.error(`no definitions at ${defsFile} -- run comfyui/tools/dump-object-info.mjs first`)
    process.exit(1)
  }
  const defs = loadJson(defsFile)

  if (command === 'out') {
    const graph = readUi(loadJson(a), defs)
    for (const p of graph.problems) console.log('problem:', p)
    const base = a.replace(/\.json$/, '')
    fs.writeFileSync(base + '.rebuilt.json', JSON.stringify(writeUi(graph, defs), null, 2))
    fs.writeFileSync(base + '.rebuilt.api.json', JSON.stringify(writeApi(graph, defs), null, 2))
    fs.writeFileSync(base + '.graph.txt', graphLines(graph).join('\n') + '\n')
    console.log(`${graph.nodes.length} nodes, ${graph.wires.length} wires, ${graph.groups.length} groups`)
    console.log(`-> ${base}.rebuilt.json, ${base}.rebuilt.api.json, ${base}.graph.txt`)
    process.exit(graph.problems.length ? 1 : 0)
  }

  const ja = loadJson(a)
  const jb = loadJson(b)
  let same
  if (isApi(ja) && isApi(jb)) {
    same = diff(apiLinesFor(a, defs), apiLinesFor(b, defs), path.basename(a), path.basename(b))
  } else if (!isApi(ja) && !isApi(jb)) {
    const ga = readUi(ja, defs)
    const gb = readUi(jb, defs)
    for (const p of ga.problems) console.log(`problem in ${path.basename(a)}:`, p)
    for (const p of gb.problems) console.log(`problem in ${path.basename(b)}:`, p)
    same = diff(graphLines(ga), graphLines(gb), path.basename(a), path.basename(b)) && !ga.problems.length && !gb.problems.length
  } else {
    console.error('compare two UI files or two API files, not one of each')
    process.exit(2)
  }
  process.exit(same ? 0 : 1)
} else {
  console.error('usage: node comfyui/tools/roundtrip.mjs out <workflow.json> | compare <a> <b> | queue <workflow.api.json>')
  process.exit(2)
}
