// node substance/tools/dump-usages.mjs [templates dir]
//
// What usages and output identifiers does Designer itself ship? Every graph template under
// resources/templates is a .sbs, and each declares its outputs with an identifier and a usage.
// Reading them settles the vocabulary without a probe, and settles it better than a probe would:
// this is what Adobe's own material workflows write into a file, not what a dropdown offers.
//
// The answer is not the tidy table it looks like it should be -- see LIBRARY.md. Base colour is
// called four things across the templates and one identifier ships with a typo. Run this before
// arguing about a naming convention.

import fs from 'node:fs'
import path from 'node:path'

const DEFAULT = 'C:/Program Files/Adobe/Adobe Substance 3D Designer/resources/templates'

const dir = process.argv[2] ?? DEFAULT
if (!fs.existsSync(dir)) {
  console.error(`no templates at ${dir}\nusage: node substance/tools/dump-usages.mjs [templates dir]`)
  process.exit(1)
}

const attribute = (text, tag) => text.match(new RegExp(`<${tag} v="([^"]*)"`))?.[1]

const usages = new Map()

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.sbs'))) {
  const source = fs.readFileSync(path.join(dir, file), 'utf8')
  for (const [, output] of source.matchAll(/<graphoutput>([\s\S]*?)<\/graphoutput>/g)) {
    const identifier = attribute(output, 'identifier')
    for (const [, usage] of output.matchAll(/<usage>([\s\S]*?)<\/usage>/g)) {
      const name = attribute(usage, 'name')
      if (!name) continue
      const record = usages.get(name) ?? { identifiers: new Set(), components: new Set(), colorSpaces: new Set(), files: new Set() }
      if (identifier) record.identifiers.add(identifier)
      record.components.add(attribute(usage, 'components') ?? '-')
      record.colorSpaces.add(attribute(usage, 'colorSpace') ?? '(unset)')
      record.files.add(file)
      usages.set(name, record)
    }
  }
}

const list = ([...usages].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase())))
const show = set => [...set].sort().join(',')

console.log(['usage', 'identifiers', 'components', 'colourSpace'].join('\t'))
for (const [name, r] of list) {
  console.log([name, show(r.identifiers), show(r.components), show(r.colorSpaces)].join('\t'))
}

const colourSpaces = new Set(list.flatMap(([, r]) => [...r.colorSpaces]))
const inconsistent = list.filter(([name, r]) => r.identifiers.size > 1 || !r.identifiers.has(name.toLowerCase()))

console.log('')
console.log(`${list.length} usages across ${fs.readdirSync(dir).filter(f => f.endsWith('.sbs')).length} templates`)
console.log(`colour spaces seen: ${show(colourSpaces)}`)
console.log(`${inconsistent.length} usages whose identifier is not simply the usage lowercased`)
