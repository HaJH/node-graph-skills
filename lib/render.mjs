// Draws a laid-out graph as SVG. Domain-agnostic: everything that varies between tools comes in
// through the theme and through the node shapes the caller builds.
//
// A node is a header bar with the node's name and type, then a row per pin, input pins down the
// left edge and output pins down the right. That is not what Designer draws -- its nodes are
// square tiles showing their own cooked texture, which a static page cannot reproduce -- but a
// named pin is the thing prose is worst at and a picture is best at, so pins win.

import { layout } from './layout.mjs'

const escape = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

const round = n => Math.round(n * 100) / 100

/**
 * @param nodes [{name, type, kind, inputs:[{id,type}], outputs:[{id,type}], values:[{id,text}]}]
 * @param wires [{from, fromPin, to, toPin}]
 */
export function render (nodes, wires, theme) {
  const m = theme.metrics

  // No text metrics without a browser, so widths are estimated per character. Erring wide costs
  // some empty space; erring narrow overlaps an input label with an output one, which happens
  // for real -- every atomic node outputs "unique_filter_output", and on the output bridge that
  // sits on the same row as "inputNodeOutput".
  const textWidth = (text, perChar) => String(text).length * perChar
  const PIN = 5.0      // 9.5px sans
  const MONO = 5.4     // 9px monospace
  const TITLE = 6.4    // 11px semibold sans

  const sizeOf = name => {
    const node = nodes.find(n => n.name === name)
    const rows = Math.max(node.inputs.length, node.outputs.length) + node.values.length
    const gutter = m.pinRadius + 6

    let content = Math.max(
      textWidth(node.name, TITLE),
      textWidth(node.type, MONO),
      ...node.values.map(v => textWidth(`${v.id} = ${v.text}`, MONO)),
    )
    for (let i = 0; i < Math.max(node.inputs.length, node.outputs.length); i++) {
      const left = node.inputs[i] ? textWidth(node.inputs[i].id, PIN) + gutter : 0
      const right = node.outputs[i] ? textWidth(node.outputs[i].id, PIN) + gutter : 0
      content = Math.max(content, left + right + (left && right ? 14 : 0))
    }

    return {
      width: Math.max(m.nodeWidth, Math.ceil(content) + m.padding * 2),
      height: m.headerHeight + rows * m.pinRow + m.padding,
    }
  }

  const placed = layout(nodes, wires, {
    direction: theme.direction,
    gapMajor: m.gapMajor,
    gapMinor: m.gapMinor,
    sizeOf,
  })

  const anchors = new Map() // "node.pin" -> {x, y}
  const body = []

  for (const node of nodes) {
    const at = placed.positions.get(node.name)
    const size = placed.sizes.get(node.name)
    body.push(drawNode(node, at, size, theme, anchors))
  }

  const wireLayer = wires.map(w => drawWire(w, nodes, anchors, theme)).join('\n')

  const pad = 28
  const width = placed.width + pad * 2
  const height = placed.height + pad * 2

  return {
    width,
    height,
    svg: [
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${round(width)} ${round(height)}"`,
      `     width="${round(width)}" height="${round(height)}" font-family="${theme.font}">`,
      `<rect width="100%" height="100%" fill="${theme.canvas}"/>`,
      `<g transform="translate(${pad}, ${pad})">`,
      wireLayer,
      body.join('\n'),
      '</g>',
      '</svg>',
    ].join('\n'),
  }
}

function drawNode (node, at, size, theme, anchors) {
  const m = theme.metrics
  const x = round(at.x)
  const y = round(at.y)
  const parts = []

  parts.push(`<g>`)
  parts.push(`<rect x="${x}" y="${y}" width="${size.width}" height="${round(size.height)}" rx="${m.corner}" fill="${theme.nodeBody}" stroke="${theme.nodeEdge}"/>`)
  parts.push(`<path d="M${x} ${y + m.corner} a${m.corner} ${m.corner} 0 0 1 ${m.corner} -${m.corner} h${size.width - m.corner * 2} a${m.corner} ${m.corner} 0 0 1 ${m.corner} ${m.corner} v${m.headerHeight - m.corner} h-${size.width} Z" fill="${theme.kinds[node.kind] ?? theme.panel}"/>`)
  parts.push(`<line x1="${x}" y1="${y + m.headerHeight}" x2="${x + size.width}" y2="${y + m.headerHeight}" stroke="${theme.headerEdge}"/>`)

  parts.push(`<text x="${x + m.padding}" y="${y + 13}" fill="${theme.text}" font-size="11" font-weight="600">${escape(node.name)}</text>`)
  parts.push(`<text x="${x + m.padding}" y="${y + 25}" fill="${theme.textDim}" font-size="9" font-family="${theme.monospace}">${escape(node.type)}</text>`)

  const rowY = i => y + m.headerHeight + m.pinRow * i + m.pinRow / 2 + 1

  node.inputs.forEach((pin, i) => {
    const cy = rowY(i)
    anchors.set(`${node.name}.${pin.id}`, { x, y: cy })
    parts.push(`<circle cx="${x}" cy="${round(cy)}" r="${m.pinRadius}" fill="${theme.types[pin.type] ?? theme.textDim}" stroke="${theme.canvas}"/>`)
    parts.push(`<text x="${x + m.pinRadius + 6}" y="${round(cy + 3)}" fill="${theme.text}" font-size="9.5">${escape(pin.id)}</text>`)
  })

  node.outputs.forEach((pin, i) => {
    const cy = rowY(i)
    const px = x + size.width
    anchors.set(`${node.name}.${pin.id}`, { x: px, y: cy })
    parts.push(`<circle cx="${px}" cy="${round(cy)}" r="${m.pinRadius}" fill="${theme.types[pin.type] ?? theme.textDim}" stroke="${theme.canvas}"/>`)
    parts.push(`<text x="${px - m.pinRadius - 6}" y="${round(cy + 3)}" fill="${theme.text}" font-size="9.5" text-anchor="end">${escape(pin.id)}</text>`)
  })

  const valueTop = Math.max(node.inputs.length, node.outputs.length)
  node.values.forEach((value, i) => {
    const ty = rowY(valueTop + i) + 3
    parts.push(`<text x="${x + m.padding}" y="${round(ty)}" fill="${theme.accent}" font-size="9" font-family="${theme.monospace}">${escape(value.id)} = ${escape(value.text)}</text>`)
  })

  parts.push('</g>')
  return parts.join('\n')
}

function drawWire (wire, nodes, anchors, theme) {
  const from = anchors.get(`${wire.from}.${wire.fromPin}`)
  const to = anchors.get(`${wire.to}.${wire.toPin}`)
  if (!from || !to) return ''

  const source = nodes.find(n => n.name === wire.from)
  const pin = source?.outputs.find(p => p.id === wire.fromPin)
  const colour = theme.types[pin?.type] ?? theme.textDim

  // Pull the control points out horizontally by the gap, so a wire leaves and enters level with
  // its pin instead of cutting a diagonal across the node it starts on.
  const reach = Math.max(30, Math.abs(to.x - from.x) * 0.45)
  const d = `M${round(from.x)} ${round(from.y)} C${round(from.x + reach)} ${round(from.y)}, ${round(to.x - reach)} ${round(to.y)}, ${round(to.x)} ${round(to.y)}`
  return `<path d="${d}" fill="none" stroke="${colour}" stroke-width="1.6" stroke-opacity="0.85"/>`
}
