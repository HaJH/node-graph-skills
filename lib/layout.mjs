// Layered layout for a node graph. Shared by every domain: the emitter needs positions to put
// nodes at inside the tool, the renderer needs the same ones so a drawn page and a pasted graph
// agree.
//
// Longest-path layering, then barycentre ordering sweeps to pull connected nodes level with each
// other. Not a full Sugiyama -- no dummy nodes, so a wire that spans several layers just passes
// behind whatever is in between. Node graphs in these tools are shallow and wide enough that the
// difference rarely shows.
//
// Flow direction is a parameter rather than a constant because it is a domain property: Substance
// and Unreal materials read left to right, Houdini SOP and Nuke top to bottom.

const DEFAULTS = {
  direction: 'LR',
  nodeWidth: 160,
  nodeHeight: 96,
  gapMajor: 96, // along the flow
  gapMinor: 48, // across it
  sweeps: 4,
}

/**
 * @param nodes  [{name}]           declaration order is the tie-breaker, so it is kept
 * @param wires  [{from, to}]       node names
 */
export function layout (nodes, wires, options = {}) {
  const o = { ...DEFAULTS, ...options }
  const names = nodes.map(n => n.name)
  const index = new Map(names.map((n, i) => [n, i]))

  const outgoing = new Map(names.map(n => [n, []]))
  const incoming = new Map(names.map(n => [n, []]))
  for (const wire of wires) {
    if (!index.has(wire.from) || !index.has(wire.to) || wire.from === wire.to) continue
    outgoing.get(wire.from).push(wire.to)
    incoming.get(wire.to).push(wire.from)
  }

  const depth = assignLayers(names, incoming)
  const layers = []
  for (const name of names) {
    const d = depth.get(name)
    ;(layers[d] ??= []).push(name)
  }
  for (let i = 0; i < layers.length; i++) layers[i] ??= []

  order(layers, incoming, outgoing, index, o.sweeps)

  // Nodes are the same size in a tool that draws square tiles, and different sizes on a page
  // where every pin is named, so size is a callback rather than a constant.
  const sizeOf = o.sizeOf ?? (() => ({ width: o.nodeWidth, height: o.nodeHeight }))
  const size = new Map(names.map(n => [n, sizeOf(n)]))
  const alongOf = n => (o.direction === 'LR' ? size.get(n).width : size.get(n).height)
  const acrossOf = n => (o.direction === 'LR' ? size.get(n).height : size.get(n).width)

  // Each layer starts past the widest node in the layer before it.
  const layerStart = []
  let along = 0
  for (const layer of layers) {
    layerStart.push(along)
    along += Math.max(0, ...layer.map(alongOf)) + o.gapMajor
  }
  const alongTotal = Math.max(0, along - o.gapMajor)

  const extentOf = layer => layer.reduce((sum, n) => sum + acrossOf(n), 0) +
    Math.max(0, layer.length - 1) * o.gapMinor
  const acrossTotal = Math.max(0, ...layers.map(extentOf))

  const positions = new Map()
  layers.forEach((layer, depthIndex) => {
    // Centre each layer against the widest one so the graph reads as a spine, not a staircase.
    let across = (acrossTotal - extentOf(layer)) / 2
    for (const name of layer) {
      const a = layerStart[depthIndex]
      positions.set(name, o.direction === 'LR' ? { x: a, y: across } : { x: across, y: a })
      across += acrossOf(name) + o.gapMinor
    }
  })

  return {
    positions,
    sizes: size,
    layers,
    width: o.direction === 'LR' ? alongTotal : acrossTotal,
    height: o.direction === 'LR' ? acrossTotal : alongTotal,
  }
}

// Longest path from any source. Cycles cannot happen in a compositing graph, but a malformed
// spec is not the layout's problem to diagnose -- it just has to terminate.
function assignLayers (names, incoming) {
  const depth = new Map(names.map(n => [n, 0]))
  for (let pass = 0; pass < names.length; pass++) {
    let moved = false
    for (const name of names) {
      for (const from of incoming.get(name)) {
        const candidate = depth.get(from) + 1
        if (candidate > depth.get(name)) { depth.set(name, candidate); moved = true }
      }
    }
    if (!moved) break
  }
  return depth
}

function order (layers, incoming, outgoing, declared, sweeps) {
  const rank = new Map()
  const reindex = () => {
    for (const layer of layers) layer.forEach((name, i) => rank.set(name, i))
  }
  reindex()

  const barycentre = (name, neighbours) => {
    const known = neighbours.get(name).map(n => rank.get(n)).filter(r => r !== undefined)
    return known.length ? known.reduce((a, b) => a + b, 0) / known.length : null
  }

  for (let sweep = 0; sweep < sweeps; sweep++) {
    const downward = sweep % 2 === 0
    const sequence = downward ? layers : [...layers].reverse()
    for (const layer of sequence) {
      const neighbours = downward ? incoming : outgoing
      const keyed = layer.map(name => ({
        name,
        key: barycentre(name, neighbours),
        fallback: declared.get(name),
      }))
      keyed.sort((a, b) => {
        if (a.key === null && b.key === null) return a.fallback - b.fallback
        if (a.key === null) return 1
        if (b.key === null) return -1
        return a.key - b.key || a.fallback - b.fallback
      })
      layer.splice(0, layer.length, ...keyed.map(k => k.name))
    }
    reindex()
  }
}
