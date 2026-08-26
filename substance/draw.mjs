// spec -> one self-contained HTML page.
//
// The spec carries node names and wires; the pins and their types come from the catalogue, so a
// drawn graph shows every pin the node actually has, not only the ones the spec wired up. That
// is most of the point -- "which pins does a Map Get need" is the question prose answers worst.

import path from 'node:path'

import { render } from '../lib/render.mjs'
import { page } from '../lib/page.mjs'
import { emitPython } from './emit.mjs'
import { theme } from './theme.mjs'
import { stringsFor } from './strings.mjs'

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
      // A bound parameter holds no constant, so showing @name is showing what it really is.
      ...(node.bindings ?? []).map(b => ({ id: b.id, text: '@' + b.param })),
      ...node.usages.map(u => ({ id: 'usage', text: showUsage(u) })),
      ...node.values.map(v => ({ id: v.id, text: showValue(v.value) })),
    ],
  }
}

const showUsage = usage =>
  usage.name + (usage.colorSpace ? ` (${usage.components}, ${usage.colorSpace})` : ` (${usage.components})`)

function showValue (value) {
  // An enum reads as its value id where the catalogue knows one. "blendingmode = substract"
  // tells a reader something; "blendingmode = 2" does not.
  if (value.class === 'SDValueEnum') return value.id ?? String(value.components[0])
  if (value.class === 'SDValueBool') return value.components[0] ? 'true' : 'false'
  if (value.class === 'SDValueString') return JSON.stringify(value.components[0])
  if (value.components.length === 1) return String(value.components[0])
  return '[' + value.components.join(', ') + ']'
}

// A spec on its own is a network to paste. A spec inside a library is one asset among many, and
// then where the .sbs goes and what other graphs will call it matter more than the picture does.
// The library's own .sbsprj is what knows those, so the page repeats them rather than leaving
// the reader to find the folder.
function guideFor (spec, project, words, target) {
  if (!project) return null
  const code = text => `<code>${escape(text)}</code>`
  const name = spec.name ?? 'this_graph'

  const rows = [
    [words.guideRows.library, code(project.root)],
    [words.guideRows.declaredBy, code(project.file.slice(project.root.length + 1))],
  ]
  if (target) {
    const folder = project.alias.path.slice(project.root.length + 1).split(path.sep).join('/')
    rows.push([words.guideRows.buildsInto, code(`${folder}/${target.packageName}.sbs`) + ' › ' + code(target.graph)])
    rows.push([words.guideRows.referencedAs, code(`${project.alias.name}://${target.packageName}.sbs`)])
  }
  rows.push([words.guideRows.outputs, spec.nodes.filter(n => n.type === 'output')
    .map(n => code(n.annotations.find(a => a.id === 'identifier')?.value.components[0] ?? n.name)).join(' ') || '&mdash;'])

  const registered = project.alias
    ? words.guideRegister(escape(project.name) + '.sbsprj', escape(project.alias.name), project.watchesAlias)
    : words.guideNoAlias(escape(project.name) + '.sbsprj')

  const todo = target ? [words.guideRebuild(escape(target.graph)), registered] : [registered]
  return { heading: words.guideHeading, blurb: words.guideBlurb, rows, todo }
}

const escape = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// What a person using this graph can set without opening it. Reading the annotations back out
// rather than keeping a parallel copy: they are what actually reaches Designer.
function interfaceFor (spec, words) {
  const annotation = (param, id) => param.annotations.find(a => a.id === id)?.value.components[0]
  const rows = (spec.params ?? []).map(param => {
    const bits = [`<code>${escape(param.type)}</code>`]
    if (param.value) bits.push('= <code>' + escape(showValue(param.value)) + '</code>')
    const min = annotation(param, 'min')
    const max = annotation(param, 'max')
    if (min !== undefined && max !== undefined) bits.push(`(${escape(String(min))}&thinsp;&ndash;&thinsp;${escape(String(max))})`)
    const group = annotation(param, 'group')
    if (group) bits.push('&middot; ' + escape(String(group)))
    return [annotation(param, 'label') || param.id, bits.join(' ')]
  })
  // A preset is part of the same interface: it is how somebody picks "Rough" instead of learning
  // what six numbers do.
  for (const preset of spec.presets ?? []) {
    rows.push([
      `${words.presetTerm} · ${preset.label}`,
      preset.inputs.map(i => `<code>${escape(i.id)}</code> = <code>${escape(showValue(i.value))}</code>`).join(', '),
    ])
  }
  return { heading: words.paramsHeading, blurb: words.paramsBlurb, rows }
}

export function draw (spec, options) {
  const { project = null, lang = spec.lang ?? 'en', target = null } = options ?? {}
  const words = stringsFor(lang)
  const nodes = spec.nodes.map(shapeOf)
  const graph = render(nodes, spec.wires, theme)

  const libraryCount = spec.nodes.filter(n => n.kind === 'library').length
  const subtitle = words.subtitle(spec.nodes.length, spec.wires.length) +
    (libraryCount ? words.subtitleSplit(libraryCount, spec.nodes.length - libraryCount) : '')

  return page({
    title: spec.name ?? 'Substance graph',
    subtitle,
    graph: graph.svg,
    theme,
    words,
    payload: {
      heading: words.payloadHeading,
      subtitle: words.payloadSubtitle,
      text: emitPython(spec, target),
    },
    params: interfaceFor(spec, words),
    guide: guideFor(spec, project, words, target),
    legend: [
      { colour: theme.types.color, label: words.legend.color },
      { colour: theme.types.gray, label: words.legend.gray },
      { colour: theme.types.either, label: words.legend.either },
      { colour: theme.types.value, label: words.legend.value },
      { colour: theme.kinds.atomic, label: words.legend.atomic, block: true },
      { colour: theme.kinds.library, label: words.legend.library, block: true },
      // Only shown when the graph uses one. On a spec built outside a library it would name a
      // kind the reader cannot have.
      ...(spec.nodes.some(n => n.kind === 'project')
        ? [{ colour: theme.kinds.project, label: words.legend.project, block: true }]
        : []),
    ],
    notes: words.notes,
  })
}
