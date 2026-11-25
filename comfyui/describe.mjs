// node comfyui/describe.mjs <Node> [<Node> ...]
//
// What a spec line needs and nothing else: a node's sockets with what they carry, its widgets
// with their type, default and range or the values a combo takes, and its outputs. The catalogue
// file itself is one long line per node; this is the way in.
//
// An unknown name is answered with the node types and display names that contain it, which is
// how "sampler" turns into KSampler, KSamplerAdvanced, SamplerCustom and the rest.

import { fileURLToPath } from 'node:url'

import { NODES, COMFYUI } from './catalogue.mjs'
import { isWidget, hasControl, defaultControl, AUTOGROW, DYNAMIC_COMBO } from './defs.mjs'

const MAX_OPTIONS = 14

function widgetText (input) {
  const bits = [input.type]
  if (input.type === 'COMBO') {
    if (input.files) bits.push('-- a file name, any string')
    else {
      const shown = input.options.slice(0, MAX_OPTIONS).join(', ')
      bits.push(`: ${shown}${input.options.length > MAX_OPTIONS ? `, ... (${input.options.length})` : ''}`)
    }
  }
  if (input.type === DYNAMIC_COMBO) {
    bits.push(': ' + input.options.map(o => o.inputs.length ? `${o.key} (adds ${o.inputs.map(i => `${input.name}.${i.name}`).join(', ')})` : o.key).join(', '))
  }
  const extra = []
  if ('default' in input) extra.push(`default ${JSON.stringify(input.default).slice(0, 40)}`)
  if ('min' in input || 'max' in input) extra.push(`${input.min ?? ''}..${input.max ?? ''}`)
  if (input.multiline) extra.push('multiline')
  if (hasControl(input)) extra.push(`control ${defaultControl(input)}`)
  if (input.optional) extra.push('optional')
  return bits.join(' ') + (extra.length ? `  (${extra.join(', ')})` : '')
}

function socketText (input) {
  if (input.type === AUTOGROW) {
    const t = input.template
    const first = t.names?.[0] ?? `${t.prefix}0`
    return `${input.name}.${first}.. ${t.input.type} (autogrow ${t.min}..${t.max})`
  }
  return `${input.name} ${input.type}${input.optional ? '?' : ''}`
}

export function describe (name) {
  const def = NODES[name]
  if (!def) {
    const w = name.toLowerCase()
    const near = Object.entries(NODES)
      .filter(([n, d]) => n.toLowerCase().includes(w) || (d.display ?? '').toLowerCase().includes(w))
      .map(([n]) => n)
    return near.length
      ? `${name} is not a node. Containing it: ${near.slice(0, 40).join(', ')}${near.length > 40 ? `, ... (${near.length})` : ''}`
      : `${name} is not a node, and no node name or display name contains it`
  }
  const lines = [`${name} -- "${def.display}" -- ${def.pack ?? `ComfyUI ${COMFYUI.version}`} -- ${def.category}` +
    (def.deprecated ? ' -- deprecated' : '') + (def.experimental ? ' -- experimental' : '')]
  const sockets = def.inputs.filter(i => !isWidget(i))
  const widgets = def.inputs.filter(isWidget)
  lines.push(`  sockets   ${sockets.length ? sockets.map(socketText).join(', ') : '-'}   (? is optional)`)
  if (widgets.length) {
    const width = Math.max(...widgets.map(w => w.name.length))
    lines.push('  widgets')
    for (const w of widgets) lines.push(`    ${w.name.padEnd(width)}  ${widgetText(w)}`)
  }
  lines.push(`  outputs   ${def.outputs.length ? def.outputs.map(o => `${o.name} ${o.type}${o.list ? ' (list)' : ''}`).join(', ') : '-'}`)
  return lines.join('\n')
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const names = process.argv.slice(2)
  if (!names.length) {
    console.error('usage: node comfyui/describe.mjs <Node> [<Node> ...]')
    process.exit(2)
  }
  console.log(names.map(describe).join('\n\n'))
}
