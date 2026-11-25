// Where each node goes in the frontend, and how big it is. Same layout as the page (lib/), fed
// the frontend's own sizes rather than the page's, so the two arrange a graph the same way
// without one's node sizes overlapping the other's.
//
// Sizes follow what the frontend saved for the gate workflow: a slot row is 20 units, a widget
// row 24, a multiline text box needs about 160, a node with widgets has 14 more at the bottom
// and one without 6 -- KSampler comes out at 270 x 262, exactly what the frontend wrote. A
// node's title bar sits above its position, 30 units tall, so layout counts it in the height.
// Collapsed nodes are a title bar and nothing else.

import { layoutClusters } from '../lib/clusters.mjs'
import { layout } from '../lib/layout.mjs'

import { expandInputs, isWidget, hasControl, uploadWidget } from './defs.mjs'

const TITLE = 30
const SLOT = 20
const WIDGET = 24
const MULTILINE = 160
const PREVIEW = 220 // an image input shows the image under its widgets once one is chosen

export function uiSize (node, def, wired) {
  const shown = expandInputs(def, node.values, wired)
  const sockets = shown.filter(s => !isWidget(s.input)).length
  const widgets = shown.filter(s => isWidget(s.input))
  const multiline = widgets.filter(s => s.input.type === 'STRING' && s.input.multiline).length
  const rows = widgets.length - multiline +
    widgets.filter(s => hasControl(s.input)).length +
    widgets.filter(s => uploadWidget(s.input)).length
  const preview = widgets.some(s => uploadWidget(s.input)) ? PREVIEW : 0

  const label = node.title ?? def.display ?? node.type
  const width = Math.min(520, Math.max(multiline ? 400 : 270, label.length * 8 + 50))
  const height = Math.max(SLOT, Math.max(sockets, def.outputs.length) * SLOT) +
    rows * WIDGET + (multiline ? Math.max(MULTILINE, multiline * 70) : 0) + preview +
    (widgets.length ? 14 : 6)
  return { width, height }
}

/** @returns {positions, sizes, groups, view} for ui.mjs writeUi */
export function placeUi (graph, catalogue) {
  const sizes = new Map()
  for (const node of graph.nodes) {
    const wired = new Set(graph.wires.filter(w => w.to === node.name).map(w => w.input))
    sizes.set(node.name, uiSize(node, catalogue[node.type], wired))
  }
  const collapsed = new Set(graph.nodes.filter(n => n.collapsed).map(n => n.name))
  const footprint = name => {
    const size = sizes.get(name)
    return collapsed.has(name)
      ? { width: Math.min(size.width, 240), height: TITLE }
      : { width: size.width, height: size.height + TITLE }
  }

  const options = { direction: 'LR', gapMajor: 80, gapMinor: 40, sizeOf: footprint, groupPadding: 16, groupTitle: 46 }
  const nodes = graph.nodes.map(n => ({ name: n.name }))
  const wires = graph.wires.map(w => ({ from: w.from, to: w.to }))
  const placed = graph.groups.length
    ? layoutClusters(nodes, wires, graph.groups, options)
    : layout(nodes, wires, options)

  // The layout places a node's whole footprint; the frontend's position is below the title bar.
  const MARGIN = 40
  const positions = new Map()
  for (const [name, at] of placed.positions) positions.set(name, { x: at.x + MARGIN, y: at.y + MARGIN + TITLE })
  const groups = (placed.groups ?? []).map(r => ({ x: r.x + MARGIN, y: r.y + MARGIN, width: r.width, height: r.height }))

  // Open on the whole graph, the way the gate workflow was saved: fit into a 1600 x 900 view.
  const scale = Math.min(1, 1600 / (placed.width + MARGIN * 2), 900 / (placed.height + MARGIN * 2))
  const view = { scale: Math.round(scale * 100) / 100, offset: [0, 0] }

  return { positions, sizes, groups, view }
}
