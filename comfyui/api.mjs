// The API format: what /prompt takes and what a run script sends.
//
//   { "<node name>": { inputs: {...}, class_type, _meta: { title } } }
//
// Keyed by the spec's node names rather than numbers -- the backend takes any string, and a run
// script that sets `stage_2_sampler.seed` says what it changes where `17.seed` does not. A wired
// input is [source name, output index], an unwired socket is absent, every widget is present.

import { expandInputs, isWidget, defaultValue } from './defs.mjs'

export function writeApi (graph, catalogue) {
  const api = {}
  for (const node of graph.nodes) {
    const def = catalogue[node.type]
    const here = graph.wires.filter(w => w.to === node.name)
    const wired = new Set(here.map(w => w.input))
    const inputs = {}
    for (const { path, input } of expandInputs(def, node.values, wired)) {
      const wire = here.find(w => w.input === path)
      if (wire) inputs[path] = [wire.from, wire.slot]
      else if (isWidget(input)) inputs[path] = path in node.values ? node.values[path] : defaultValue(input)
    }
    // An untitled node gets its display name in English. The frontend writes it in the user's
    // locale; the backend reads neither, and a file should not depend on who built it.
    api[node.name] = { inputs, class_type: node.type, _meta: { title: node.title ?? def.display } }
  }
  return api
}
