// Layout for a graph whose nodes sit in titled groups -- ComfyUI groups, Houdini network boxes,
// Nuke backdrops. A group is a rectangle, and in every one of those tools membership is
// geometric: whatever lies inside the rectangle is in the group. So a layout that ignores groups
// and draws each rectangle round its members afterwards is wrong, not just untidy -- a stranger
// that lands inside the box joins the group the next time the tool reads the file.
//
// Two passes of the ordinary layered layout. Each group is laid out on its own from the wires
// inside it, then stands in the outer layout as one block the size of its rectangle, alongside
// the nodes that belong to no group. Blocks are placed apart by the usual gaps, so no rectangle
// can take in a node that is not its own.
//
// A node belongs to at most one group. Nested groups are not handled.

import { layout } from './layout.mjs'

const BLOCK = '\u0000group:'

/**
 * @param nodes   [{name}]                 declaration order is kept as the tie-breaker
 * @param wires   [{from, to}]
 * @param groups  [{title, members:[name]}]
 * @param options layout() options, plus groupPadding and groupTitle (the band the title sits in)
 * @returns layout()'s result, plus groups: [{title, x, y, width, height}]
 */
export function layoutClusters (nodes, wires, groups, options = {}) {
  const pad = options.groupPadding ?? 12
  const band = options.groupTitle ?? 28
  const groupOf = new Map()
  groups.forEach((group, i) => group.members.forEach(name => groupOf.set(name, i)))

  const inner = groups.map((group, i) => {
    const members = nodes.filter(n => groupOf.get(n.name) === i)
    const inside = wires.filter(w => groupOf.get(w.from) === i && groupOf.get(w.to) === i)
    const placed = layout(members, inside, options)
    return { placed, width: placed.width + pad * 2, height: placed.height + pad * 2 + band }
  })

  const blockOf = name => (groupOf.has(name) ? BLOCK + groupOf.get(name) : name)
  const items = []
  const seen = new Set()
  for (const node of nodes) {
    const key = blockOf(node.name)
    if (!seen.has(key)) { seen.add(key); items.push({ name: key }) }
  }
  const outerWires = wires
    .map(w => ({ from: blockOf(w.from), to: blockOf(w.to) }))
    .filter(w => w.from !== w.to)

  const sizeOf = options.sizeOf
  const outer = layout(items, outerWires, {
    ...options,
    sizeOf: key => {
      if (!key.startsWith(BLOCK)) return sizeOf(key)
      const block = inner[Number(key.slice(BLOCK.length))]
      return { width: block.width, height: block.height }
    },
  })

  const positions = new Map()
  const sizes = new Map()
  const rects = []
  for (const item of items) {
    const at = outer.positions.get(item.name)
    if (!item.name.startsWith(BLOCK)) {
      positions.set(item.name, at)
      sizes.set(item.name, outer.sizes.get(item.name))
      continue
    }
    const i = Number(item.name.slice(BLOCK.length))
    const block = inner[i]
    for (const [name, p] of block.placed.positions) {
      positions.set(name, { x: at.x + pad + p.x, y: at.y + band + pad + p.y })
      sizes.set(name, block.placed.sizes.get(name))
    }
    rects[i] = { title: groups[i].title, x: at.x, y: at.y, width: block.width, height: block.height }
  }

  return { positions, sizes, width: outer.width, height: outer.height, groups: rects }
}
