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

function imports (spec) {
  const classes = new Set()
  const structs = new Set(['float2']) // setPosition always needs it
  for (const node of spec.nodes) {
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
  for (const c of [...classes].sort()) lines.push(`from sd.api.${c.toLowerCase()} import ${c}`)
  return lines.join('\n')
}

const PREAMBLE = `

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


def find_resource(app, package_name, identifier):
    """Library nodes are graphs inside .sbs packages and no definition manager lists them.
    Match on identifier, never on the resource url -- its ?dependency=NNNN is a per-session uid."""
    package_mgr = app.getPackageMgr()
    filename = package_name + '.sbs'

    for package in package_mgr.getPackages():
        path = (package.getFilePath() or '').replace('\\\\', '/')
        if path.endswith('/' + filename):
            for resource in package.getChildrenResources(True):
                if resource.getIdentifier() == identifier:
                    return resource

    for directory in resources_dir(app):
        candidate = os.path.join(directory, filename)
        if not os.path.isfile(candidate):
            continue
        package = package_mgr.loadUserPackage(candidate)
        for resource in package.getChildrenResources(True):
            if resource.getIdentifier() == identifier:
                return resource

    raise RuntimeError('cannot find {0} in {1}.sbs'.format(identifier, package_name))


def free_offset(graph):
    """Drop the new network clear of whatever is already in the graph."""
    lowest = None
    for node in graph.getNodes():
        position = node.getPosition()
        lowest = position.y if lowest is None else max(lowest, position.y)
    return 0.0 if lowest is None else lowest + 192.0
`

export function emitPython (spec) {
  const { positions } = layout(spec.nodes, spec.wires, LAYOUT)

  const lines = []
  lines.push('# Generated from a node-graph spec' + (spec.name ? ` -- ${spec.name}` : '') + '.')
  lines.push('#')
  lines.push('# Open the graph you want these nodes in, then: Windows > Python Editor, paste, Run.')
  lines.push('# Nodes are added below anything already in the graph; nothing existing is touched.')
  lines.push('')
  lines.push(imports(spec))
  lines.push(PREAMBLE)
  lines.push('')
  lines.push('def main():')
  lines.push('    app = sd.getContext().getSDApplication()')
  lines.push('    graph = app.getUIMgr().getCurrentGraph()')
  lines.push('    if graph is None:')
  lines.push("        print('open a compositing graph first')")
  lines.push('        return')
  lines.push('')
  lines.push('    offset = free_offset(graph)')
  lines.push('    nodes = {}')
  lines.push('')

  for (const node of spec.nodes) {
    const variable = `nodes[${quote(node.name)}]`
    lines.push(`    # ${node.name} -- ${node.type}`)
    if (node.kind === 'library') {
      lines.push(`    ${variable} = graph.newInstanceNode(find_resource(app, ${quote(node.def.package)}, ${quote(node.type)}))`)
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
    lines.push('')
  }

  for (const wire of spec.wires) {
    lines.push(`    nodes[${quote(wire.from)}].newPropertyConnectionFromId(${quote(wire.fromPin)}, nodes[${quote(wire.to)}], ${quote(wire.toPin)})`)
  }

  lines.push('')
  lines.push(`    print('added {0} nodes and {1} wires'.format(${spec.nodes.length}, ${spec.wires.length}))`)
  lines.push('')
  lines.push('')
  lines.push('main()')
  lines.push('')
  return lines.join('\n')
}
