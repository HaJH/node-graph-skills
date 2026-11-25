// The UI format: what the frontend saves and loads, and what Ctrl+V on its canvas opens as a new
// workflow. Read into the neutral graph, and written back out of it.
//
// The graph is what both directions agree on:
//   nodes  [{name, type, title, values: {path: value}, controls: {path: mode}, collapsed, color, bgcolor}]
//   wires  [{from, slot, to, input}]      slot is the output index, input the input path
//   groups [{title, color, members: [name]}]
//
// Every rule here was settled by the round-trip gate; NOTES.md has the evidence.

import crypto from 'node:crypto'

import { expandInputs, inputAt, isWidget, hasControl, defaultControl, defaultValue, uploadWidget } from './defs.mjs'

export const RESERVED = new Set(['graph', 'lang', 'group'])

// --- names ----------------------------------------------------------------------------------

const snake = type => type
  .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
  .toLowerCase()
  .replace(/[^\p{L}\p{N}_]+/gu, '_')

// Three words of a title at most: "Foregrounds (BL -> TR -> TL over black)" is foregrounds_bl_tr.
// A name is typed in every wire that touches the node.
const slug = text => text.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean).slice(0, 3).join('_')

/** A spec name for every node: its title where it has one, its type otherwise, numbered on repeats. */
export function nameNodes (nodes) {
  const used = new Map()
  return nodes.map(node => {
    let base = (node.title && slug(node.title)) || snake(node.type)
    if (/^\p{N}/u.test(base)) base = 'n_' + base
    if (RESERVED.has(base)) base += '_node'
    const count = (used.get(base) ?? 0) + 1
    used.set(base, count)
    return count === 1 ? base : `${base}_${count}`
  })
}

// --- reading --------------------------------------------------------------------------------

/** @returns {graph, problems, nameOfId} */
export function readUi (workflow, catalogue) {
  const problems = []
  if (workflow.definitions?.subgraphs?.length) {
    problems.push(`the workflow holds ${workflow.definitions.subgraphs.length} subgraph(s); a spec has no nesting -- unpack them in ComfyUI first`)
  }
  const nodesIn = [...(workflow.nodes ?? [])].sort((a, b) => a.id - b.id)
  const linkById = new Map((workflow.links ?? []).map(l => Array.isArray(l) ? [l[0], l] : [l.id, [l.id, l.origin_id, l.origin_slot, l.target_id, l.target_slot, l.type]]))
  const names = nameNodes(nodesIn)
  const nameOfId = new Map(nodesIn.map((n, i) => [n.id, names[i]]))

  const nodes = nodesIn.map((ui, index) => {
    const name = names[index]
    const node = {
      name,
      type: ui.type,
      title: ui.title ?? null,
      values: {},
      controls: {},
      collapsed: !!ui.flags?.collapsed,
      color: ui.color ?? null,
      bgcolor: ui.bgcolor ?? null,
      cosmetic: { pos: ui.pos, size: ui.size },
    }
    const def = catalogue[ui.type]
    if (!def) {
      problems.push(`${name}: ${ui.type} is not in the catalogue -- a frontend-only node (Note, Reroute, the old PrimitiveNode) is out of scope, and a custom node pack needs its catalogue generated first`)
      return node
    }
    if ((ui.mode ?? 0) !== 0) {
      problems.push(`${name}: muted or bypassed (mode ${ui.mode}) -- a spec has no off switch; enable it or delete it in ComfyUI first`)
    }

    const stored = Array.isArray(ui.widgets_values) ? ui.widgets_values : null
    const named = ui.widgets_values_named ?? (ui.widgets_values && !Array.isArray(ui.widgets_values) ? ui.widgets_values : null)
    let k = 0
    for (const entry of (ui.inputs ?? []).filter(i => i.widget)) {
      const input = inputAt(def, entry.name, node.values)
      if (!input) {
        // The upload button an image input grows is a widget the backend never sees.
        k++
        continue
      }
      node.values[entry.name] = stored ? stored[k++] : named?.[entry.name]
      if (hasControl(input)) node.controls[entry.name] = stored ? stored[k++] : named?.control_after_generate
    }
    if (stored && k !== stored.length) {
      problems.push(`${name}: read ${k} of its ${stored.length} widget values -- this ${ui.type} does not have the widgets the catalogue says it has. Regenerate the catalogue against the ComfyUI that saved the file`)
    }
    return node
  })

  const wires = []
  nodesIn.forEach((ui, index) => {
    for (const entry of ui.inputs ?? []) {
      if (entry.link == null) continue
      const link = linkById.get(entry.link)
      if (!link) { problems.push(`${names[index]}.${entry.name}: link ${entry.link} is missing from the links table`); continue }
      const [, fromId, slot] = link
      if (!nameOfId.has(fromId)) { problems.push(`${names[index]}.${entry.name}: wired from node ${fromId}, which is not in the workflow`); continue }
      wires.push({ from: nameOfId.get(fromId), slot, to: names[index], input: entry.name })
      // A widget with a wire on it is dead: the wire wins in both formats, and the value it kept
      // is whatever it held before it was wired.
      delete nodes[index].values[entry.name]
      delete nodes[index].controls[entry.name]
    }
  })

  // Membership is geometric in the frontend: a group holds whatever lies inside its rectangle.
  const groups = (workflow.groups ?? []).map(group => {
    const [x, y, w, h] = group.bounding
    const members = nodes.filter(n => {
      const [nx, ny] = n.cosmetic.pos ?? [NaN, NaN]
      return nx >= x && ny >= y && nx <= x + w && ny <= y + h
    }).map(n => n.name)
    return { title: group.title, color: group.color ?? null, members, cosmetic: { bounding: group.bounding } }
  })
  const claimed = new Map()
  for (const group of groups) {
    for (const member of group.members) {
      if (claimed.has(member)) problems.push(`${member} is inside both "${claimed.get(member)}" and "${group.title}" -- nested groups are out of scope`)
      claimed.set(member, group.title)
    }
  }

  return { graph: { nodes, wires, groups }, problems, nameOfId }
}

// --- writing --------------------------------------------------------------------------------

// A stable id per graph name, so rebuilding a spec writes the same file and a lock over it holds.
function workflowId (name) {
  const h = crypto.createHash('sha1').update('node-graph/comfyui/' + (name ?? '')).digest('hex')
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-8${h.slice(17, 20)}-${h.slice(20, 32)}`
}

/**
 * @param placement {positions: Map name -> {x, y}, sizes: Map name -> {width, height},
 *                   groups: [{x, y, width, height}], view} in the frontend's units.
 *                   Left out, the positions a read carried (node.cosmetic) are used.
 */
export function writeUi (graph, catalogue, placement = null) {
  const idOf = new Map(graph.nodes.map((n, i) => [n.name, i + 1]))
  const links = []
  const outLinks = new Map()

  const nodes = graph.nodes.map((node, index) => {
    const def = catalogue[node.type]
    const here = graph.wires.filter(w => w.to === node.name)
    const wired = new Set(here.map(w => w.input))
    const shown = expandInputs(def, node.values, wired)
    const pending = []

    const linkFor = path => {
      const wire = here.find(w => w.input === path)
      if (!wire) return null
      const id = links.length + 1
      const fromDef = catalogue[graph.nodes.find(n => n.name === wire.from).type]
      const row = [id, idOf.get(wire.from), wire.slot, index + 1, null, fromDef.outputs[wire.slot].type]
      links.push(row)
      pending.push(row)
      const key = `${wire.from}:${wire.slot}`
      outLinks.set(key, [...(outLinks.get(key) ?? []), id])
      return id
    }

    // Sockets first, then widgets, each in the definition's order: what the frontend saves.
    const inputs = []
    for (const { path, input, optional } of shown.filter(s => !isWidget(s.input))) {
      const entry = { name: path, type: input.type, link: linkFor(path) }
      if (optional) entry.shape = 7
      inputs.push(entry)
    }
    const widgetsValues = []
    for (const { path, input } of shown.filter(s => isWidget(s.input))) {
      inputs.push({ name: path, type: input.type, widget: { name: path }, link: linkFor(path) })
      widgetsValues.push(path in node.values ? node.values[path] : defaultValue(input))
      if (hasControl(input)) widgetsValues.push(node.controls[path] ?? defaultControl(input))
      const upload = uploadWidget(input)
      if (upload) {
        inputs.push({ name: upload.name, type: upload.type, widget: { name: upload.name }, link: null })
        widgetsValues.push(upload.value)
      }
    }
    for (const row of pending) row[4] = inputs.findIndex(i => i.link === row[0])

    const at = placement?.positions.get(node.name)
    const size = placement?.sizes.get(node.name)
    const record = {
      id: index + 1,
      type: node.type,
      pos: at ? [round(at.x), round(at.y)] : node.cosmetic?.pos ?? [0, 0],
      size: size ? [round(size.width), round(size.height)] : node.cosmetic?.size ?? [270, 100],
      flags: node.collapsed ? { collapsed: true } : {},
      order: index,
      mode: 0,
      inputs,
      outputs: def.outputs.map(o => ({ name: o.name, type: o.type, links: null })),
      properties: { 'Node name for S&R': node.type },
      widgets_values: widgetsValues,
    }
    if (node.title != null) record.title = node.title
    if (node.color) record.color = node.color
    if (node.bgcolor) record.bgcolor = node.bgcolor
    return record
  })

  nodes.forEach((record, index) => {
    record.outputs.forEach((output, slot) => {
      const ids = outLinks.get(`${graph.nodes[index].name}:${slot}`)
      if (ids) output.links = ids
    })
  })

  const groups = graph.groups.map((group, i) => {
    const rect = placement?.groups?.[i]
    const bounding = rect ? [rect.x, rect.y, rect.width, rect.height].map(round) : group.cosmetic?.bounding ?? [0, 0, 100, 100]
    const out = { id: i + 1, title: group.title, bounding, flags: {} }
    if (group.color) out.color = group.color
    return out
  })

  return {
    id: workflowId(graph.name),
    revision: 0,
    last_node_id: nodes.length,
    last_link_id: links.length,
    nodes,
    links,
    groups,
    config: {},
    extra: { ds: placement?.view ?? { scale: 1, offset: [0, 0] } },
    version: 0.4,
  }
}

const round = n => Math.round(n * 100) / 100
