// Finding the library a spec belongs to.
//
// A spec on its own is one graph somebody pastes and keeps. A spec inside a library is one
// asset among many, and then the reader needs to know where the .sbs goes, what alias other
// graphs will reference it by, and that the library has to be registered in Designer once
// before any of it resolves. None of that is guessable from the network, so it is read from
// the library's own .sbsprj -- Designer's project file, committed next to the specs.
//
// Why .sbsprj rather than a manifest of our own: Designer stores a reference from one package
// to another as an alias URL, not a path. Across the install 2018 dependencies are written
// sbs://something.sbs and 3 are a plain path. The alias is what makes a reference survive a
// different checkout location, and .sbsprj is where an alias is declared -- so the mapping
// lives there and this reads it rather than repeating it.
//
// The sd Python API exposes nothing for aliases, so registering the project in Designer is a
// step no payload can take. The page says so for that reason.

import fs from 'node:fs'
import path from 'node:path'

const tag = (text, name) => text.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1]?.trim()

// Designer writes an alias path as a file:// URL. It also uses an environment: URL elsewhere in
// the same file, and a project might yet be able to use a relative one -- so anything that is
// not file:// is passed through as written rather than resolved.
function localPath (url) {
  if (!url) return null
  if (!url.startsWith('file:///')) return null
  return decodeURIComponent(url.slice('file:///'.length))
}

function parseProjectFile (file) {
  const text = fs.readFileSync(file, 'utf8')

  const aliases = []
  const aliasBlock = text.match(/<urlaliases>([\s\S]*?)<\/urlaliases>/)?.[1] ?? ''
  for (const [, entry] of aliasBlock.matchAll(/<_\d+ prefix="_">([\s\S]*?)<\/_\d+>/g)) {
    const name = tag(entry, 'name')
    const url = tag(entry, 'path')
    if (name && url) aliases.push({ name, url, path: localPath(url) })
  }

  const watched = []
  const watchedBlock = text.match(/<watchedpaths>([\s\S]*?)<\/watchedpaths>/)?.[1] ?? ''
  for (const [, entry] of watchedBlock.matchAll(/<_\d+ prefix="_">([\s\S]*?)<\/_\d+>/g)) {
    const url = tag(entry, 'url')
    if (url) watched.push({ url, recursive: tag(entry, 'isrecursive') === 'true' })
  }

  return { file, aliases, watched }
}

// Walk up from the spec, the way a toolchain finds its own config. The nearest .sbsprj wins, so
// one repository can hold several libraries and each spec resolves against the one above it.
export function findProject (specPath) {
  let dir = path.resolve(path.dirname(specPath))
  for (;;) {
    const found = fs.readdirSync(dir, { withFileTypes: true })
      .filter(e => e.isFile() && e.name.toLowerCase().endsWith('.sbsprj'))
      // A file starting with _ is a scratch or a test, not the library's own.
      .filter(e => !e.name.startsWith('_'))
      .map(e => path.join(dir, e.name))
      .sort()

    if (found.length) {
      const project = parseProjectFile(found[0])
      project.root = dir
      project.name = path.basename(found[0], path.extname(found[0]))
      // The alias whose folder is inside the library is the one this spec's .sbs belongs under.
      project.alias = project.aliases.find(a => a.path && isInside(dir, a.path)) ?? project.aliases[0] ?? null
      project.watchesAlias = project.alias
        ? project.watched.some(w => w.url.startsWith(project.alias.name + '://'))
        : false
      return project
    }

    const parent = path.dirname(dir)
    if (parent === dir) return null
    dir = parent
  }
}

function isInside (root, candidate) {
  const rel = path.relative(path.resolve(root), path.resolve(candidate))
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel))
}
