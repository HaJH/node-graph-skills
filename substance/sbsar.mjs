// Reading the interface out of what `sbsrender info` prints.
//
// A cooked .sbsar is the only offline view of what a package actually exposes, and this is the
// only text form of it. Kept apart from verify.mjs so the parsing can be checked against real
// output without running anything -- test/sbsar-info.txt is what the tool printed for the live
// library, ground truth the same way gate-graph.json is.
//
//   GRAPH-URL pkg://panel_base
//     INPUT $outputsize INTEGER2
//     INPUT position IMAGE
//     INPUT columns INTEGER1
//     OUTPUT height height
//     OUTPUT output
//     PRESET 타이트
//
// Two things the shape does not say out loud. An OUTPUT line carries the identifier and then the
// usage, and the usage half is simply absent on an output nobody tagged -- which is most of
// Designer's own library nodes. And a bool parameter is reported INTEGER1, indistinguishable
// from an int: the archive interface has no bool, so nothing downstream of here can compare
// parameter types without inventing a difference.

// Base parameters are on every graph and are not the spec's; an IMAGE input is an input bridge
// rather than a parameter.
export const isExposedParameter = input => !input.id.startsWith('$') && input.type !== 'IMAGE'

// Every graph in the archive, in the order printed.
export function readInterfaces (text) {
  const graphs = []
  let current = null
  for (const line of text.split('\n')) {
    const header = /^GRAPH-URL pkg:\/\/(.+?)\s*$/.exec(line)
    if (header) {
      current = { graph: header[1], inputs: [], outputs: [], presets: [] }
      graphs.push(current)
      continue
    }
    if (!current) continue
    // A preset label is a person's text and can hold spaces -- "Base Colour", or the two Korean
    // ones in the live library. An identifier and a usage cannot, so only this one takes the
    // rest of the line.
    const preset = /^\s+PRESET\s+(.+?)\s*$/.exec(line)
    if (preset) { current.presets.push(preset[1]); continue }

    const entry = /^\s+(INPUT|OUTPUT)\s+(\S+)(?:\s+(\S*))?\s*$/.exec(line)
    if (!entry) continue
    const [, kind, first, second] = entry
    if (kind === 'INPUT') current.inputs.push({ id: first, type: second ?? '' })
    else current.outputs.push({ identifier: first, usage: second ?? '' })
  }
  return graphs
}

export const interfaceOf = (text, graph) => readInterfaces(text).find(g => g.graph === graph) ?? null
