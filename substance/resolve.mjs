// What a spec resolves to before anything is built or checked.
//
// Two commands need the same four answers -- which library the spec is in, what the catalogue is
// once the library's own graphs are in it, what the output convention is and whether it bites,
// and which .sbs the spec owns. build.mjs writes a payload from them; verify.mjs cooks that .sbs
// and reads it back. Working the answers out twice is how the two commands start disagreeing
// about what a spec means.

import path from 'node:path'

import { findProject, projectNodes, mergeCatalogue, projectOutputs, mergeOutputs } from './project.mjs'
import { OUTPUTS } from './outputs.generated.mjs'

// Problems stop the caller; warnings are worth saying and not worth stopping for.
export function resolve (specPath, shipped) {
  const problems = []
  const warnings = []
  const project = findProject(specPath)

  if (!project) {
    // Outside a library the shipped vocabulary still catches a misspelled usage, but an output
    // with no usage and an identifier of the spec's own choosing are nobody's problem: a network
    // pasted into whatever graph is open has nothing downstream to be consistent with.
    return { project: null, catalogue: shipped, convention: { outputs: OUTPUTS, strict: false }, problems, warnings }
  }

  const nodes = projectNodes(project)
  warnings.push(...nodes.problems)
  let catalogue = shipped
  try {
    catalogue = mergeCatalogue(shipped, nodes.nodes)
  } catch (error) {
    problems.push(`${project.file}: ${error.message}`)
  }
  project.nodeCount = Object.keys(nodes.nodes).length

  // A vocabulary file that does not parse is not a reason to fall back to the shipped list --
  // that would enforce something other than what the library declared, which is worse than
  // stopping.
  const own = projectOutputs(project)
  for (const problem of own.problems) problems.push(`${project.root}: ${problem}`)
  project.outputCount = Object.keys(own.outputs).length

  return {
    project,
    catalogue,
    convention: { outputs: mergeOutputs(OUTPUTS, own.outputs), strict: true },
    problems,
    warnings,
  }
}

// The graph and package a spec owns, or null for a spec that owns nothing and is only a network
// to drop into whatever is open. A library with no alias declared owns nothing either -- there
// is nowhere for the .sbs to go.
export function targetFor (spec, project, specPath) {
  if (!project?.alias?.path) return null
  const fallback = path.basename(specPath, path.extname(specPath))
  const packageName = spec.package ?? spec.name ?? fallback
  return {
    graph: spec.name ?? fallback,
    packageName,
    packagePath: path.join(project.alias.path, packageName + '.sbs'),
    describe: { ...spec.describe },
  }
}
