// graph -> one self-contained HTML page.
//
// Pins come from the catalogue, so a drawn node shows every socket it has, not only the wired
// ones -- "which inputs does IPAdapterAdvanced take" is the question prose answers worst. A
// widget with no wire is listed as a value under the pins; a widget with a wire is drawn as the
// socket it has become.

import { render } from '../lib/render.mjs'
import { page } from '../lib/page.mjs'
import { expandInputs, isWidget, hasControl, defaultControl, defaultValue } from './defs.mjs'
import { theme } from './theme.mjs'
import { stringsFor } from './strings.mjs'
import { COMFYUI, PACKS_LOADED } from './catalogue.mjs'

const MAX_TEXT = 40

function showValue (value) {
  if (typeof value === 'string') {
    const lines = value.split('\n')
    let first = lines[0]
    if (first.length > MAX_TEXT) first = first.slice(0, MAX_TEXT - 1) + '…'
    return JSON.stringify(first) + (lines.length > 1 ? ` … ${lines.length} lines` : '')
  }
  const text = JSON.stringify(value)
  return text.length > MAX_TEXT ? text.slice(0, MAX_TEXT - 1) + '…' : text
}

// Output pins by name; a name a node repeats gets its index so each pin is one anchor.
function outputIds (def) {
  return def.outputs.map((o, i) => (def.outputs.filter(x => x.name === o.name).length > 1 ? `${o.name}#${i}` : o.name))
}

function shapeOf (node, graph, catalogue) {
  const def = catalogue[node.type]
  const wired = new Set(graph.wires.filter(w => w.to === node.name).map(w => w.input))
  const shown = expandInputs(def, node.values, wired)
  const values = []
  for (const { path, input } of shown) {
    if (!isWidget(input) || wired.has(path)) continue
    if (!(path in node.values) && !hasControl(input)) continue
    const value = showValue(path in node.values ? node.values[path] : defaultValue(input))
    const control = hasControl(input) ? ` · ${node.controls[path] ?? defaultControl(input)}` : ''
    values.push({ id: path, text: value + control })
  }
  const ids = outputIds(def)
  return {
    name: node.name,
    type: node.title ? `${node.type} — "${node.title}"` : node.type,
    kind: def.pack ? 'pack' : 'core',
    inputs: shown.filter(s => !isWidget(s.input) || wired.has(s.path)).map(s => ({ id: s.path, type: s.input.type })),
    outputs: def.outputs.map((o, i) => ({ id: ids[i], type: o.type })),
    values,
  }
}

function themeFor (types) {
  return { ...theme, types: Object.fromEntries(types.map(t => [t, theme.types[t] ?? theme.otherType])) }
}

function prepare (graph, catalogue) {
  const nodes = graph.nodes.map(n => shapeOf(n, graph, catalogue))
  const wires = graph.wires.map(w => {
    const def = catalogue[graph.nodes.find(n => n.name === w.from).type]
    return { from: w.from, fromPin: outputIds(def)[w.slot], to: w.to, toPin: w.input }
  })
  const groups = graph.groups.map(g => ({ title: g.title, colour: g.color ?? undefined, members: g.members }))
  const types = [...new Set(nodes.flatMap(n => [...n.inputs, ...n.outputs].map(p => p.type)))]
  return { nodes, wires, groups, types }
}

/** The graph alone, as SVG that stands on its own -- what the site's index previews. */
export function graphSvg (graph, catalogue) {
  const { nodes, wires, groups, types } = prepare(graph, catalogue)
  return render(nodes, wires, themeFor(types), { groups }).svg
}

export function draw (graph, catalogue, { lang = graph.lang ?? 'en', uiText }) {
  const words = stringsFor(lang)
  const { nodes, wires, groups, types } = prepare(graph, catalogue)
  const pageTheme = themeFor(types)
  const svg = render(nodes, wires, pageTheme, { groups }).svg

  const packNames = [...new Set(graph.nodes.map(n => catalogue[n.type].pack).filter(Boolean))]
  const packs = packNames.map(name => {
    const pack = PACKS_LOADED.find(p => p.name === name)
    return pack?.commit ? `${name} ${pack.commit.slice(0, 8)}` : name
  })

  // Palette order first, the types it leaves out after them.
  const ordered = [...Object.keys(theme.types).filter(t => types.includes(t)), ...types.filter(t => !(t in theme.types)).sort()]

  return page({
    title: graph.name ?? 'ComfyUI workflow',
    lang,
    subtitle: words.subtitle(graph.nodes.length, graph.wires.length, graph.groups.length) + words.catalogue(COMFYUI.version, packs),
    graph: svg,
    theme: pageTheme,
    words,
    payload: { heading: words.payloadHeading, subtitle: words.payloadSubtitle, text: uiText },
    legend: [
      ...ordered.map(t => ({ colour: pageTheme.types[t], label: t })),
      { colour: theme.kinds.core, label: words.legend.core, block: true },
      ...(packNames.length ? [{ colour: theme.kinds.pack, label: words.legend.pack(packNames), block: true }] : []),
    ],
    notes: words.notes,
  })
}

