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

import { readPackages } from './sbs.mjs'
import { IDENTIFIER, OUTPUTS_FILE } from './spec.mjs'

const tag = (text, name) => text.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1]?.trim()

// Designer writes an alias two ways, and which one it picks is the whole portability question.
// Given an absolute path under the project file's own folder it rewrites it as `file:packages`
// -- relative, and relative to the .sbsprj. That is what makes a committed project file work on
// a checkout somewhere else, and it is Designer's own doing rather than a trick. An alias
// outside the project folder stays `file:///C:/...`, and `environment:NAME` also appears in
// these files; neither is resolved here.
function localPath (url, projectDir) {
  if (!url) return null
  if (url.startsWith('file:///')) return decodeURIComponent(url.slice('file:///'.length))
  if (url.startsWith('file:')) {
    const relative = decodeURIComponent(url.slice('file:'.length))
    if (!relative || relative.startsWith('/')) return null
    return path.resolve(projectDir, relative)
  }
  return null
}

function parseProjectFile (file) {
  const text = fs.readFileSync(file, 'utf8')
  const dir = path.dirname(file)

  const aliases = []
  const aliasBlock = text.match(/<urlaliases>([\s\S]*?)<\/urlaliases>/)?.[1] ?? ''
  for (const [, entry] of aliasBlock.matchAll(/<_\d+ prefix="_">([\s\S]*?)<\/_\d+>/g)) {
    const name = tag(entry, 'name')
    const url = tag(entry, 'path')
    if (name && url) aliases.push({ name, url, path: localPath(url, dir), relative: !url.startsWith('file:///') })
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


// The project's own graphs, in the shape the catalogue uses, so a spec names one exactly the way
// it names perlin_noise. This is what makes the library compound: a graph saved into the alias
// folder is a node the next spec can call, and nothing has to be registered anywhere for it --
// the folder is the registry.
//
// The same parser reads these and Designer's own 501, so a team graph is described no worse.
export function projectNodes (project) {
  const problems = []
  const nodes = {}
  if (!project?.alias?.path || !fs.existsSync(project.alias.path)) return { nodes, problems }

  for (const [name, entries] of readPackages(project.alias.path)) {
    // Same rule as the shipped catalogue: a graph the Library is told to hide is not offered.
    const visible = entries.filter(e => !e.hidden)
    if (!visible.length) continue
    if (visible.length > 1) {
      problems.push(`"${name}" is declared by more than one package here -- ${visible.map(e => e.package + '.sbs').join(', ')}`)
      continue
    }
    const { hidden, ...entry } = visible[0]
    nodes[name] = {
      ...entry,
      kind: 'project',
      alias: project.alias.name,
      packagePath: path.join(project.alias.path, entry.package + '.sbs'),
    }
  }
  return { nodes, problems }
}

// The library's own output vocabulary, layered over the generated one.
//
// A file of ours rather than a section of the .sbsprj, which is the one place this repo does
// invent a manifest -- and deliberately. Designer rewrites .sbsprj in its own format whenever it
// touches the project, so anything of ours living in there is a thing waiting to be deleted by
// an application that has no idea it was meant to be kept.
//
//   # one per line
//   mask                 -- allow this usage; the identifier is the usage lowercased
//   baseColor = T_BC     -- allow it, and call it this instead
//
// Extending is the point. The generated vocabulary is Adobe's metallic-roughness channels and
// has no mask, no curvature, no flow -- a library that needs one says so here once, rather than
// each spec quietly opting out of the check.
export function projectOutputs (project) {
  const outputs = {}
  const problems = []
  if (!project?.root) return { outputs, problems }

  const file = path.join(project.root, OUTPUTS_FILE)
  if (!fs.existsSync(file)) return { outputs, problems }

  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((raw, index) => {
    const line = raw.replace(/#.*$/, '').trim()
    if (!line) return
    const [usage, ...rest] = line.split('=').map(part => part.trim())
    const where = `${OUTPUTS_FILE} line ${index + 1}`
    if (rest.length > 1) {
      problems.push(`${where}: write "usage" or "usage = identifier", not ${rest.length + 1} parts`)
      return
    }
    const identifier = rest[0] ?? usage.toLowerCase()
    if (!IDENTIFIER.test(usage)) { problems.push(`${where}: "${usage}" is not a usable usage name`); return }
    if (!IDENTIFIER.test(identifier)) { problems.push(`${where}: "${identifier}" is not a usable identifier`); return }
    if (outputs[usage]) { problems.push(`${where}: ${usage} is already set, to ${outputs[usage]}`); return }
    outputs[usage] = identifier
  })
  return { outputs, problems }
}

// A usage the library renames keeps Adobe's spelling as the key -- sbsrender and the engine
// plugins match on that -- and only the identifier, the exported filename, moves.
export function mergeOutputs (shipped, projectOwn) {
  return { ...shipped, ...projectOwn }
}

// A project graph that shadows one Designer ships would silently change what a spec means, so it
// is refused rather than resolved. Renaming is cheap; a spec that reads one way and builds
// another is not.
export function mergeCatalogue (catalogue, projectNodesByName) {
  const clashes = Object.keys(projectNodesByName)
    .filter(name => catalogue.LIBRARY[name] || catalogue.ATOMIC[name])
  if (clashes.length) {
    throw new Error(
      `these graphs have the same name as one Designer ships, so a spec could not say which it meant: ${clashes.join(', ')}`)
  }
  return { ...catalogue, LIBRARY: { ...catalogue.LIBRARY, ...projectNodesByName } }
}
