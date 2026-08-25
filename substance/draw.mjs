// spec -> one self-contained HTML page.
//
// The spec carries node names and wires; the pins and their types come from the catalogue, so a
// drawn graph shows every pin the node actually has, not only the ones the spec wired up. That
// is most of the point -- "which pins does a Map Get need" is the question prose answers worst.

import { render } from '../lib/render.mjs'
import { page } from '../lib/page.mjs'
import { emitPython } from './emit.mjs'
import { theme } from './theme.mjs'

const ATOMIC_PIN_TYPE = 'either' // atomic filters take whatever the graph is carrying

function shapeOf (node) {
  const inputs = node.def.inputs.map(p => ({
    id: p.id,
    type: node.kind === 'library' ? p.type : ATOMIC_PIN_TYPE,
  }))
  const outputs = node.def.outputs.map(p => ({
    id: p.id,
    type: node.kind === 'library' ? p.type : ATOMIC_PIN_TYPE,
  }))
  return {
    name: node.name,
    type: node.type,
    kind: node.kind,
    inputs,
    outputs,
    // Annotations sit in the same list as parameter values. On an output node they are the
    // whole point of the node -- what the graph output is called and what it carries -- so a
    // page that hid them would leave out the part a reader is looking for.
    values: [
      ...node.annotations.map(a => ({ id: a.id, text: showValue(a.value) })),
      ...node.usages.map(u => ({ id: 'usage', text: showUsage(u) })),
      ...node.values.map(v => ({ id: v.id, text: showValue(v.value) })),
    ],
  }
}

const showUsage = usage =>
  usage.name + (usage.colorSpace ? ` (${usage.components}, ${usage.colorSpace})` : ` (${usage.components})`)

function showValue (value) {
  if (value.class === 'SDValueBool') return value.components[0] ? 'true' : 'false'
  if (value.class === 'SDValueString') return JSON.stringify(value.components[0])
  if (value.components.length === 1) return String(value.components[0])
  return '[' + value.components.join(', ') + ']'
}

export function draw (spec) {
  const nodes = spec.nodes.map(shapeOf)
  const graph = render(nodes, spec.wires, theme)

  const libraryCount = spec.nodes.filter(n => n.kind === 'library').length
  const subtitle = `${spec.nodes.length} nodes, ${spec.wires.length} wires` +
    (libraryCount ? ` — ${libraryCount} from the library, ${spec.nodes.length - libraryCount} built in` : '')

  return page({
    title: spec.name ?? 'Substance graph',
    subtitle,
    graph: graph.svg,
    theme,
    payload: {
      heading: 'The same network, for Designer',
      subtitle: 'Open the graph you want it in, then Windows › Python Editor, paste, Run.',
      text: emitPython(spec),
    },
    legend: [
      { colour: theme.types.color, label: 'colour' },
      { colour: theme.types.gray, label: 'grayscale' },
      { colour: theme.types.either, label: 'either' },
      { colour: theme.types.value, label: 'value' },
      { colour: theme.kinds.atomic, label: 'built-in filter', block: true },
      { colour: theme.kinds.library, label: 'library node', block: true },
    ],
    notes: [
      'Pin colours are this page&rsquo;s, not Designer&rsquo;s — the canvas palette lives in the ' +
      'application binary, not in any readable resource. They separate what a pin carries: a ' +
      'colour texture, a grayscale one, either, or a plain number.',
      'Built-in filters accept whichever of colour or grayscale the graph is already carrying, ' +
      'so their pins are drawn as <code>either</code> rather than guessed at.',
    ],
  })
}
