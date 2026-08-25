// spec -> a Python script the user pastes into Designer's Python Editor.
//
// Everything the payload does was proved by the round-trip gate (see NOTES.md):
// atomic nodes come from newNode with a definition id, library nodes from newInstanceNode with
// an SDResource matched by identifier inside a loaded package, values are built as SDValue
// objects because there is no sFromString, and wires are made from the source node's output.
//
// The payload adds to whatever graph is open rather than making its own, which is the point --
// a spec is something to drop into work in progress. It offsets itself clear of anything
// already there so nothing lands on top of existing nodes.

import { layout } from '../lib/layout.mjs'

// Designer's canvas steps in multiples of 32 and a node tile is about 96 across, so this reads
// at the same density as a hand-built graph.
const LAYOUT = { direction: 'LR', nodeWidth: 96, nodeHeight: 96, gapMajor: 96, gapMinor: 48 }

const quote = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"

const number = n => (Number.isInteger(n) ? n.toFixed(1) : String(n))

function valueExpression (value) {
  if (value.class === 'SDValueEnum') {
    return `SDValueEnum.sFromValue(${quote(value.typeId)}, ${value.components[0]})`
  }
  if (value.class === 'SDValueBool') return `SDValueBool.sNew(${value.components[0] ? 'True' : 'False'})`
  if (value.class === 'SDValueString') return `SDValueString.sNew(${quote(value.components[0])})`
  if (value.class === 'SDValueInt') return `SDValueInt.sNew(${value.components[0]})`
  if (value.class === 'SDValueFloat') return `SDValueFloat.sNew(${number(value.components[0])})`

  const struct = {
    SDValueInt2: 'int2', SDValueInt3: 'int3', SDValueInt4: 'int4',
    SDValueFloat2: 'float2', SDValueFloat3: 'float3', SDValueFloat4: 'float4',
    SDValueColorRGB: 'ColorRGB', SDValueColorRGBA: 'ColorRGBA',
  }[value.class]
  if (!struct) throw new Error(`${value.class} is not something the emitter can write yet`)
  const isInt = struct.startsWith('int')
  const args = value.components.map(c => (isInt ? String(c) : number(c))).join(', ')
  return `${value.class}.sNew(${struct}(${args}))`
}

function imports (spec, target = null) {
  const classes = new Set()
  const structs = new Set(['float2']) // setPosition always needs it
  for (const node of spec.nodes) {
    for (const { value } of node.annotations) classes.add(value.class)
    for (const { value } of node.values) {
      classes.add(value.class)
      const struct = {
        SDValueInt2: 'int2', SDValueInt3: 'int3', SDValueInt4: 'int4',
        SDValueFloat2: 'float2', SDValueFloat3: 'float3', SDValueFloat4: 'float4',
        SDValueColorRGB: 'ColorRGB', SDValueColorRGBA: 'ColorRGBA',
      }[value.class]
      if (struct) structs.add(struct)
    }
  }
  const lines = ['import os', '', 'import sd', `from sd.api.sdbasetypes import ${[...structs].sort().join(', ')}`]
  lines.push('from sd.api.sdapplication import SDApplicationPath')
  // Only the package mode creates a graph, and only it needs the class that makes one.
  if (target) {
    lines.push('from sd.api.sbs.sdsbscompgraph import SDSBSCompGraph')
    if (Object.keys(target.describe ?? {}).length && !classes.has('SDValueString')) {
      lines.push('from sd.api.sdvaluestring import SDValueString')
    }
  }
  for (const c of [...classes].sort()) lines.push(`from sd.api.${c.toLowerCase()} import ${c}`)
  // A usage is an array value of a type with no SDValue class of its own, so these four come in
  // together or not at all. Shape taken from Designer's own sample_sbs_graph.py.
  if (spec.nodes.some(node => node.usages.length)) {
    lines.push('from sd.api.sdvaluearray import SDValueArray')
    lines.push('from sd.api.sdtypeusage import SDTypeUsage')
    lines.push('from sd.api.sdusage import SDUsage')
    lines.push('from sd.api.sdvalueusage import SDValueUsage')
  }
  return lines.join('\n')
}

const FREE_OFFSET = `

def free_offset(graph):
    """Drop the new network clear of whatever is already in the graph."""
    lowest = None
    for node in graph.getNodes():
        position = node.getPosition()
        lowest = position.y if lowest is None else max(lowest, position.y)
    return 0.0 if lowest is None else lowest + 192.0
`

const PACKAGE = `

def open_package(app, package_path):
    """The package this spec owns. Reuse it if Designer already has it open, load it if it is
    on disk, otherwise make a new one."""
    package_mgr = app.getPackageMgr()
    existing = package_mgr.getUserPackageFromFilePath(package_path)
    if existing is not None:
        return existing
    if os.path.isfile(package_path):
        return package_mgr.loadUserPackage(package_path)
    directory = os.path.dirname(package_path)
    if directory and not os.path.isdir(directory):
        os.makedirs(directory)
    return package_mgr.newUserPackage()


def target_graph(package, identifier):
    """The graph this spec builds. Found or created, not yet emptied.

    Emptied rather than deleted and remade: another package that instances this graph points at
    the resource, and replacing the resource would break that reference. Replacing its contents
    keeps every dependant working.

    Returns the graph and whether it already existed."""
    for resource in package.getChildrenResources(True):
        if resource.getIdentifier() != identifier:
            continue
        if getattr(resource, 'getNodes', None) is None:
            continue
        return resource, True

    graph = SDSBSCompGraph.sNew(package)
    graph.setIdentifier(identifier)
    return graph, False


def clear_graph(graph):
    """Empty the graph, rather than deleting and remaking it.

    Another package that instances this graph points at the resource. Replacing the resource
    would break that reference; replacing its contents keeps every dependant working."""
    for node in list(graph.getNodes()):
        graph.deleteNode(node)
`

const FIND_RESOURCE = `

def resources_dir(app):
    """Where the shipped .sbs packages live. Asking the application beats hardcoding an install
    path, but which of these the answer points at is not worth guessing -- try them in turn."""
    resources = app.getPath(SDApplicationPath.DefaultResourcesDir)
    install = app.getPath(SDApplicationPath.InstallationDir)
    return [
        os.path.join(resources, 'packages'),
        resources,
        os.path.join(install, 'resources', 'packages'),
    ]


def find_resource(app, package_name, identifier, explicit_path=None):
    """Library nodes are graphs inside .sbs packages and no definition manager lists them.
    Match on identifier, never on the resource url -- its ?dependency=NNNN is a per-session uid.

    explicit_path is set for a graph the project itself owns: it sits in the project's alias
    folder rather than the install. This script is regenerated per machine, so an absolute
    path here is written fresh each build rather than committed."""
    package_mgr = app.getPackageMgr()
    filename = package_name + '.sbs'

    for package in package_mgr.getPackages():
        path = (package.getFilePath() or '').replace('\\\\', '/')
        if path.endswith('/' + filename):
            for resource in package.getChildrenResources(True):
                if resource.getIdentifier() == identifier:
                    return resource

    search = ([explicit_path] if explicit_path else [])
    search += [os.path.join(directory, filename) for directory in resources_dir(app)]
    for candidate in search:
        if not os.path.isfile(candidate):
            continue
        package = package_mgr.loadUserPackage(candidate)
        for resource in package.getChildrenResources(True):
            if resource.getIdentifier() == identifier:
                return resource

    raise RuntimeError('cannot find {0} in {1}.sbs'.format(identifier, package_name))
`

// Two ways a payload can land, and which one is right is not a preference.
//
//   target given  -- the spec owns a graph in a package. The graph is emptied and rebuilt, so
//                    running the spec twice converges instead of stacking two copies, and the
//                    package is saved. This is what lets an asset be edited rather than only
//                    made once.
//   no target     -- the spec is a network to drop into whatever is open. Nothing is saved and
//                    nothing existing is touched; it offsets itself clear of what is there.
//
// A spec inside a library gets the first, because a library is the thing being accumulated.
export function emitPython (spec, target = null) {
  const { positions } = layout(spec.nodes, spec.wires, LAYOUT)
  const graphName = spec.name ?? 'this_graph'

  const lines = []
  lines.push('# Generated from a node-graph spec' + (spec.name ? ` -- ${spec.name}` : '') + '.')
  lines.push('#')
  if (target) {
    lines.push(`# Builds the graph "${target.graph}" in ${target.packageName}.sbs and saves it.`)
    lines.push('# Run it again after editing the spec: the graph is emptied and rebuilt, so it')
    lines.push('# converges rather than gaining a second copy. Anything you changed by hand in')
    lines.push('# that graph is replaced -- dump it back to a spec first if you want to keep it.')
    lines.push('# Nothing else in the package is touched.')
  } else {
    lines.push('# Open the graph you want these nodes in, then: Windows > Python Editor, paste, Run.')
    lines.push('# Nodes are added below anything already in the graph; nothing existing is touched.')
  }
  lines.push('')
  lines.push(imports(spec, target))
  lines.push(FIND_RESOURCE)
  lines.push(target ? PACKAGE : FREE_OFFSET)
  lines.push('')
  lines.push('def main():')
  lines.push('    app = sd.getContext().getSDApplication()')
  if (target) {
    lines.push(`    package_path = ${quote(target.packagePath)}`)
    lines.push('    package = open_package(app, package_path)')
    lines.push(`    graph, existed = target_graph(package, ${quote(target.graph)})`)
    // Described before it is emptied: an annotation id the API does not have raises here, and a
    // graph that has not been cleared yet is a graph nothing has been done to.
    for (const [id, text] of Object.entries(target.describe ?? {})) {
      lines.push(`    graph.setAnnotationPropertyValueFromId(${quote(id)}, SDValueString.sNew(${quote(text)}))`)
    }
    lines.push('    clear_graph(graph)')
    lines.push('    offset = 0.0')
  } else {
    lines.push('    graph = app.getUIMgr().getCurrentGraph()')
    lines.push('    if graph is None:')
    lines.push("        print('open a compositing graph first')")
    lines.push('        return')
    lines.push('')
    lines.push('    offset = free_offset(graph)')
  }
  lines.push('    nodes = {}')
  lines.push('')

  for (const node of spec.nodes) {
    const variable = `nodes[${quote(node.name)}]`
    lines.push(`    # ${node.name} -- ${node.type}`)
    if (node.kind !== 'atomic') {
      // A graph the project owns is found by path; one Designer ships is found by name in the
      // install. Same call either way -- only where to look differs.
      const where = node.def.packagePath ? `, ${quote(node.def.packagePath)}` : ''
      lines.push(`    ${variable} = graph.newInstanceNode(find_resource(app, ${quote(node.def.package)}, ${quote(node.type)}${where}))`)
    } else {
      lines.push(`    ${variable} = graph.newNode(${quote(node.def.id)})`)
    }
    const p = positions.get(node.name)
    lines.push(`    ${variable}.setPosition(float2(${number(p.x)}, offset + ${number(p.y)}))`)
    // Values before wires: uniform's colorswitch decides whether its output is colour or
    // grayscale, and a wire into the wrong type is refused.
    for (const { id, value } of node.values) {
      lines.push(`    ${variable}.setInputPropertyValueFromId(${quote(id)}, ${valueExpression(value)})`)
    }
    // What a graph input or output is called, and what it carries, are annotations rather than
    // input properties. Without them an output pastes as output_1 with no usage on it, and no
    // export preset can pick it up.
    for (const { id, value } of node.annotations) {
      lines.push(`    ${variable}.setAnnotationPropertyValueFromId(${quote(id)}, ${valueExpression(value)})`)
    }
    if (node.usages.length) {
      lines.push('    usages = SDValueArray.sNew(SDTypeUsage.sNew(), 0)')
      for (const usage of node.usages) {
        lines.push(`    usages.pushBack(SDValueUsage.sNew(SDUsage.sNew(${quote(usage.name)}, ${quote(usage.components)}, ${quote(usage.colorSpace)})))`)
      }
      lines.push(`    ${variable}.setAnnotationPropertyValueFromId('usages', usages)`)
    }
    lines.push('')
  }

  for (const wire of spec.wires) {
    lines.push(`    nodes[${quote(wire.from)}].newPropertyConnectionFromId(${quote(wire.fromPin)}, nodes[${quote(wire.to)}], ${quote(wire.toPin)})`)
  }

  lines.push('')
  if (target) {
    lines.push('    app.getPackageMgr().savePackageAs(package, package_path)')
    lines.push(`    print('{0} {1} in {2} -- ${spec.nodes.length} nodes, ${spec.wires.length} wires'.format(`)
    lines.push(`        'rebuilt' if existed else 'created', ${quote(target.graph)}, os.path.basename(package_path)))`)
  } else {
    lines.push(`    print('added {0} nodes and {1} wires'.format(${spec.nodes.length}, ${spec.wires.length}))`)
  }
  lines.push('')
  lines.push('')
  lines.push('main()')
  lines.push('')
  return lines.join('\n')
}
