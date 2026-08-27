// node substance/tools/generate-outputs.mjs [templates dir]
//
// The output vocabulary, generated rather than picked by hand.
//
// dump-usages.mjs reads all 27 shipped templates and the answer is a mess: 54 usages, base
// colour called four things, an identifier that ships with a typo (`speclar_level`), and
// material-model flags like `models.specular.has_fresnel` sitting alongside real texture
// channels. Nothing in that is adoptable.
//
// But the mess is between families, not inside one. The metallic-roughness templates agree with
// each other completely -- same usages, same identifiers, and the identifier is the usage
// lowercased every time. That is the family this repo targets, so that is the vocabulary, and
// reading it off the install keeps it under the "catalogues are generated, never transcribed"
// rule rather than being a list somebody typed and nobody rechecks.
//
// Two outputs are dropped, and why is worth knowing: `scatter` and `scatteringRedShift` are
// tagged on nodes Adobe left called `output` and `output_1`. That is the very failure this
// repo's `identifier` annotation exists to prevent, in a shipped file. An unnamed output tells
// us nothing about what its identifier should be, so it contributes nothing here.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.join(HERE, '..', 'outputs.generated.mjs')
const DEFAULT = 'C:/Program Files/Adobe/Adobe Substance 3D Designer/resources/templates'

// The family, by filename. Every metallic-roughness template, and nothing else.
const FAMILY = /metallic_roughness/

// Adobe's own unnamed outputs. An identifier the template author never set.
const UNNAMED = /^output(_\d+)?$/

const dir = process.argv[2] ?? DEFAULT
if (!fs.existsSync(dir)) {
  console.error(`no templates at ${dir}\nusage: node substance/tools/generate-outputs.mjs [templates dir]`)
  process.exit(1)
}

const attribute = (text, tag) => text.match(new RegExp(`<${tag} v="([^"]*)"`))?.[1]

const candidates = fs.readdirSync(dir).filter(f => f.endsWith('.sbs') && FAMILY.test(f)).sort()
const found = new Map()   // usage -> Set of identifiers
const dropped = []
// Named separately from the candidates: the mdl_ members of the family declare no tagged
// outputs at all, and citing a file that contributed nothing overstates where this came from.
const files = []

for (const file of candidates) {
  const source = fs.readFileSync(path.join(dir, file), 'utf8')
  for (const [, output] of source.matchAll(/<graphoutput>([\s\S]*?)<\/graphoutput>/g)) {
    const identifier = attribute(output, 'identifier')
    for (const [, usage] of output.matchAll(/<usage>([\s\S]*?)<\/usage>/g)) {
      const name = attribute(usage, 'name')
      if (!name || !identifier) continue
      if (!files.includes(file)) files.push(file)
      if (UNNAMED.test(identifier)) { dropped.push(`${name} (${identifier}, in ${file})`); continue }
      if (!found.has(name)) found.set(name, new Set())
      found.get(name).add(identifier)
    }
  }
}

// The claim this table rests on. If a future Designer breaks it the generator says so rather
// than picking one spelling and leaving the other to be discovered by whoever bakes a texture.
const disagreeing = [...found].filter(([usage, ids]) => ids.size > 1 || !ids.has(usage.toLowerCase()))
if (disagreeing.length) {
  console.error('the metallic-roughness templates no longer agree -- the vocabulary cannot be generated:')
  for (const [usage, ids] of disagreeing) console.error(`  ${usage}: ${[...ids].sort().join(', ')}`)
  process.exit(1)
}

const outputs = Object.fromEntries([...found.keys()].sort().map(usage => [usage, usage.toLowerCase()]))

const body = `// GENERATED FILE -- do not edit by hand.
//
//   node substance/tools/generate-outputs.mjs
//
// The usages a graph output may declare, and what each one is called.
//
// Read off Adobe Substance 3D Designer's own metallic-roughness templates -- ${files.join(', ')}
// -- which agree with each other on every entry. The other template families do not agree with
// these or with each other, so they are not here; see tools/generate-outputs.mjs.
//
// The key is the usage, which is Adobe's vocabulary: sbsrender selects outputs by it and
// Painter, Sampler and the engine plugins match on these exact strings. The value is the
// identifier, which is ours: nothing inside Substance matches on it, and it is what sbsrender
// writes as {outputNodeName} in the exported filename. A library may rename any of them in its
// own outputs.txt, and may add usages this list does not have.
//
// ${Object.keys(outputs).length} usages.${dropped.length ? `\n// ${dropped.length} more are tagged on outputs Adobe left unnamed, and are not usable: ${dropped.join('; ')}.` : ''}

export const OUTPUTS = ${JSON.stringify(outputs, null, 1)}
`

fs.writeFileSync(OUT, body)

console.log('templates read :', files.length, '--', files.join(', '))
console.log('usages         :', Object.keys(outputs).length)
if (dropped.length) console.log('dropped        :', dropped.join('; '))
console.log('written:', OUT)
