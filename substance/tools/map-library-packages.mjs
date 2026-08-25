// Works out which .sbs package a library node name actually comes from.
//
//   node substance/tools/map-library-packages.mjs [--json <path>]
//
// Reads the shipped packages under the Designer install. Nothing is run, nothing is opened,
// Designer does not have to be running.
//
// A graph identifier is not unique across packages: clouds_2 is declared by clouds_2.sbs,
// noise_clouds_2.sbs and noise_clouds_2_v2.sbs. What separates them is <hideInLibrary v="1"/>
// on the graph's own attributes -- the Library panel offers the one graph that does not carry
// it, and that is the one newInstanceNode has to be pointed at. Verified against a live probe:
// placing Perlin Noise and Clouds 2 by hand loaded noise_perlin_noise_v2.sbs and
// noise_clouds_2_v2.sbs, which is what this rule predicts.
//
// Do not use the package column in procedural-texture-advisor/io-index.txt for this. It
// resolves clouds_2 to noise_clouds_2 and perlin_noise to noise_perlin_noise, both hidden.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'C:/Program Files/Adobe/Adobe Substance 3D Designer/resources/packages'

// A graph's own <attributes> sits between its <identifier> and the first of these, so cutting
// the window at whichever comes first keeps a child node's attributes out of the match.
const BODY_START = /<paraminputs>|<graphOutputs>|<compNodes>|<baseParameterOverrides>|<options>/

function walk (dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p, out)
    else if (entry.name.endsWith('.sbs')) out.push(p)
  }
  return out
}

function readGraphs (text, pkg) {
  const found = []
  // Exact <graph> only. <graphOutput> and <graphInput> carry pin identifiers, not graph names,
  // and a loose <graph[^>]*> match swallows them.
  for (const m of text.matchAll(/<graph>\s*<identifier v="([^"]+)"\/>/g)) {
    const head = text.slice(m.index, m.index + 4000)
    const cut = head.search(BODY_START)
    const window = cut === -1 ? head : head.slice(0, cut)
    found.push({
      id: m[1],
      package: pkg,
      label: (window.match(/<label v="([^"]*)"/) || [])[1] ?? null,
      hidden: /<hideInLibrary v="1"\/>/.test(window),
    })
  }
  return found
}

export function buildMap (root = ROOT) {
  const map = new Map()
  for (const file of walk(root)) {
    let text
    try { text = fs.readFileSync(file, 'utf8') } catch { continue }
    const pkg = path.relative(root, file).split(path.sep).join('/').replace(/\.sbs$/, '')
    for (const graph of readGraphs(text, pkg)) {
      if (!map.has(graph.id)) map.set(graph.id, [])
      map.get(graph.id).push(graph)
    }
  }
  return map
}

const map = buildMap()
const visible = id => (map.get(id) || []).filter(g => !g.hidden)

const resolved = [...map.keys()].filter(id => visible(id).length === 1)
const retired = [...map.keys()].filter(id => visible(id).length === 0)
const ambiguous = [...map.keys()].filter(id => visible(id).length > 1)

console.log('graph ids           :', map.size)
console.log('  one visible package:', resolved.length, '-- resolvable')
console.log('  none visible       :', retired.length, '-- retired or internal, not in the Library')
console.log('  more than one      :', ambiguous.length, '-- genuinely ambiguous, listed below')
for (const id of ambiguous.sort()) {
  console.log('    ' + id.padEnd(34) + visible(id).map(g => g.package).join(' , '))
}

const jsonFlag = process.argv.indexOf('--json')
if (jsonFlag !== -1 && process.argv[jsonFlag + 1]) {
  const out = {}
  for (const id of resolved) out[id] = visible(id)[0].package
  fs.writeFileSync(process.argv[jsonFlag + 1], JSON.stringify(out, null, 1))
  console.log('written:', process.argv[jsonFlag + 1])
}
