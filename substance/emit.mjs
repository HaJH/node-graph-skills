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
import { SD_TYPE_CLASS } from './spec.mjs'

// Designer's canvas steps in multiples of 32 and a node tile is about 96 across, so this reads
// at the same density as a hand-built graph.
const LAYOUT = { direction: 'LR', nodeWidth: 96, nodeHeight: 96, gapMajor: 96, gapMinor: 48 }

const quote = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'"

const number = n => (Number.isInteger(n) ? n.toFixed(1) : String(n))

// The sdbasetypes struct behind each multi-component value class.
const STRUCTS = {
  SDValueInt2: 'int2', SDValueInt3: 'int3', SDValueInt4: 'int4',
  SDValueFloat2: 'float2', SDValueFloat3: 'float3', SDValueFloat4: 'float4',
  SDValueColorRGB: 'ColorRGB', SDValueColorRGBA: 'ColorRGBA',
}

function valueExpression (value) {
  if (value.class === 'SDValueEnum') {
    return `SDValueEnum.sFromValue(${quote(value.typeId)}, ${value.components[0]})`
  }
  if (value.class === 'SDValueBool') return `SDValueBool.sNew(${value.components[0] ? 'True' : 'False'})`
  if (value.class === 'SDValueString') return `SDValueString.sNew(${quote(value.components[0])})`
  if (value.class === 'SDValueInt') return `SDValueInt.sNew(${value.components[0]})`
  if (value.class === 'SDValueFloat') return `SDValueFloat.sNew(${number(value.components[0])})`

  const struct = STRUCTS[value.class]
  if (!struct) throw new Error(`${value.class} is not something the emitter can write yet`)
  const isInt = struct.startsWith('int')
  const args = value.components.map(c => (isInt ? String(c) : number(c))).join(', ')
  return `${value.class}.sNew(${struct}(${args}))`
}

function imports (spec, target = null) {
  const classes = new Set()
  // A parameter's default and its annotations are values like any other, and a binding writes a
  // string, so both decide what has to be imported.
  if (exposes(spec)) classes.add('SDValueString')
  for (const param of spec.params ?? []) {
    for (const { value } of [{ value: param.value }, ...param.annotations]) {
      if (!value) continue
      classes.add(value.class)
      const struct = STRUCTS[value.class]
      if (struct) structs.add(struct)
    }
  }
  const structs = new Set(['float2']) // setPosition always needs it
  for (const described of Object.values(target?.describe ?? {})) {
    const value = described.type === 'string' ? { class: 'SDValueString' } : described.value
    classes.add(value.class)
    const struct = STRUCTS[value.class]
    if (struct) structs.add(struct)
  }
  for (const node of spec.nodes) {
    for (const { value } of node.annotations) classes.add(value.class)
    for (const { value } of node.values) {
      classes.add(value.class)
      const struct = STRUCTS[value.class]
      if (struct) structs.add(struct)
    }
  }
  const lines = ['import os', '', 'import sd', `from sd.api.sdbasetypes import ${[...structs].sort().join(', ')}`]
  lines.push('from sd.api.sdapplication import SDApplicationPath')
  // Only the package mode creates a graph, and only it needs the class that makes one.
  if (target) lines.push('from sd.api.sbs.sdsbscompgraph import SDSBSCompGraph')
  // clear_graph reaches for the graph's input properties, and expose/bind both name the category.
  if (target || exposes(spec)) lines.push('from sd.api.sdproperty import SDPropertyCategory')
  for (const type of new Set((spec.params ?? []).map(p => SD_TYPE_CLASS[p.type]))) {
    lines.push(`from sd.api.${type.toLowerCase()} import ${type}`)
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


def instances_in_view(app, identifier):
    """Open graph views showing a graph that instances this one.

    An instance node holds the interface of the graph it points at, and a rebuild deletes
    the output bridges and makes them again underneath it. That alone is survivable: the
    package holding the instance is open on every build, because the consumer often lives
    in the same .sbs as the graph being built. What is not survivable is a **view** being
    open on that consumer.

    Which is what the four observations say. Building with another graph in view: fine.
    With the target itself in view: fine. With the graph that instances it in view:
    down, selected or not.

    Returns a list of graph identifiers."""
    showing = []
    try:
        ui = app.getUIMgr()
        for index in range(ui.getGraphViewIDCount()):
            graph = ui.getGraphFromGraphViewID(ui.getGraphViewIDAt(index))
            if graph is None or graph.getIdentifier() == identifier:
                continue
            for node in graph.getNodes():
                referenced = node.getReferencedResource()
                if referenced is not None and referenced.getIdentifier() == identifier:
                    showing.append(graph.getIdentifier())
                    break
    except Exception:
        pass
    return showing


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


def clear_graph(graph, keep_inputs):
    """Empty the graph, rather than deleting and remaking it.

    Another package that instances this graph points at the resource. Replacing the resource
    would break that reference; replacing its contents keeps every dependant working.

    Order matters and so does restraint. A preset holds values for the graph's inputs, so it
    goes before them. An input the spec still declares is left alone and rewritten in place
    rather than deleted and remade -- the editor is likely to be showing a widget for it, and
    pulling that out from under a running Designer is not something a rebuild should do.
    Only inputs the spec has dropped are removed."""
    for preset in list(graph.getPresets()):
        graph.deletePreset(preset.getLabel())

    for node in list(graph.getNodes()):
        graph.deleteNode(node)

    # The six base parameters are not ours: they are the only graph inputs whose id starts
    # with a $, and the only ones carrying no annotations.
    for prop in list(graph.getProperties(SDPropertyCategory.Input)):
        identifier = prop.getId()
        if not identifier.startswith('$') and identifier not in keep_inputs:
            graph.deleteProperty(prop)
`

const EXPOSE = `

def expose(graph, identifier, sd_type, value, annotations):
    """One parameter the graph offers to whoever uses it.

    Reused where it is already there, so a re-run of the same spec deletes nothing and the
    editor keeps the widget it is drawing.

    The property is the visible half. It drives nothing on its own -- a node parameter only
    follows it once bind() has put that parameter under a function graph."""
    prop = graph.getPropertyFromId(identifier, SDPropertyCategory.Input)
    if prop is None:
        prop = graph.newProperty(identifier, sd_type, SDPropertyCategory.Input)
    if value is not None:
        graph.setPropertyValue(prop, value)
    for key, annotation in annotations:
        graph.setPropertyAnnotationValueFromId(prop, key, annotation)


def bind(node, property_id, getter_id, input_id):
    """Make a node parameter follow a graph input.

    The parameter goes under a function graph holding exactly one node, a getter, whose
    __constant__ names the input to read. That is what Designer builds when a person exposes a
    parameter by hand, read back off a graph where they had."""
    prop = node.getPropertyFromId(property_id, SDPropertyCategory.Input)
    if prop is None:
        raise RuntimeError('no parameter {0} to bind'.format(property_id))

    # 'SDSBSFunctionGraph', the class name -- not 'sbs::function', which is the module the getter
    # nodes live in and which newPropertyGraph answers with None. Shape taken from Designer's own
    # sample_sbs_parameter_function.py.
    function = node.newPropertyGraph(prop, 'SDSBSFunctionGraph')
    if function is None:
        raise RuntimeError('{0} will not take a function graph'.format(property_id))

    getter = function.newNode(getter_id)
    getter.setInputPropertyValueFromId('__constant__', SDValueString.sNew(input_id))
    function.setOutputNode(getter, True)
`

const TRACE = `

# Built with --trace. Every step writes a line to this file and flushes, so if Designer goes
# down the last line names the call that did not return -- a crash takes the console with it,
# not a flushed file. Tracing the payload itself rather than a stand-in, because a probe that
# drifts from the real thing measures the wrong graph.
TRACE_LOG = os.path.join(os.path.expanduser('~'), 'substance-build-trace.txt')
_trace = open(TRACE_LOG, 'w', encoding='utf-8')


def step(message):
    _trace.write(message + '
')
    _trace.flush()
    os.fsync(_trace.fileno())
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
// A spec exposes something if it declares a parameter or binds one. Either way the payload needs
// the helpers and SDPropertyCategory; a payload that does neither should not carry them.
const exposes = spec => (spec.params?.length ?? 0) > 0 || spec.nodes.some(n => n.bindings?.length)

// Presets are values for exposed parameters, so a spec with presets always has parameters too.
const hasPresets = spec => (spec.presets?.length ?? 0) > 0

export function emitPython (spec, target = null, { trace = false } = {}) {
  const say = trace ? (message) => `    step(${quote(message)})` : () => null
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
  if (trace) lines.push(TRACE)
  lines.push(FIND_RESOURCE)
  lines.push(target ? PACKAGE : FREE_OFFSET)
  if (exposes(spec)) lines.push(EXPOSE)
  lines.push('')
  lines.push('def main():')
  lines.push('    app = sd.getContext().getSDApplication()')
  if (target) {
    // Before anything is opened or created. An instance of this graph selected in a graph view
    // means the parameter panel is drawing this graph's exposed parameters through that node,
    // and rebuilding underneath it takes Designer down. Reproduced with the graph itself open in
    // no view at all, so the selected instance is the whole condition.
    lines.push(say('instances_of'))
    lines.push(`    watching = instances_in_view(app, ${quote(target.graph)})`)
    lines.push('    if watching:')
    lines.push("        print('refusing to build: a graph view is open on ' + ', '.join(watching) + ',')")
    lines.push("        print('which instances this graph. An instance holds the interface of what it')")
    lines.push("        print('points at, and rebuilding replaces that under an open view, which takes')")
    lines.push("        print('Designer down. Switch that tab to another graph, or close it, and run')")
    lines.push("        print('again. Nothing has been changed.')")
    lines.push('        return')
    lines.push('')
    lines.push(`    package_path = ${quote(target.packagePath)}`)
    lines.push(say('open_package'))
    lines.push('    package = open_package(app, package_path)')
    lines.push(say('target_graph'))
    lines.push(`    graph, existed = target_graph(package, ${quote(target.graph)})`)
    // Described before it is emptied: an annotation id the API does not have raises here, and a
    // graph that has not been cleared yet is a graph nothing has been done to.
    for (const [id, described] of Object.entries(target.describe ?? {})) {
      const value = described.type === 'string'
        ? { class: 'SDValueString', components: [described.text] }
        : described.value
      lines.push(`    graph.setAnnotationPropertyValueFromId(${quote(id)}, ${valueExpression(value)})`)
    }
    lines.push(say('clear_graph'))
    lines.push(`    clear_graph(graph, ${JSON.stringify((spec.params ?? []).map(p => p.id))})`)
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

  // Before the nodes: a binding names an input, and the input has to be there to be named.
  for (const param of spec.params ?? []) {
    const annotations = param.annotations
      .map(a => `(${quote(a.id)}, ${valueExpression(a.value)})`)
      .join(', ')
    lines.push(`    # ${param.id} -- ${param.type}, exposed`)
    lines.push(say('expose ' + param.id))
    lines.push(`    expose(graph, ${quote(param.id)}, ${SD_TYPE_CLASS[param.type]}.sNew(),`)
    lines.push(`           ${param.value ? valueExpression(param.value) : 'None'},`)
    lines.push(`           [${annotations}])`)
  }
  for (const preset of spec.presets ?? []) {
    lines.push(say('newPreset ' + preset.label))
    lines.push(`    preset = graph.newPreset(${quote(preset.label)})`)
    for (const { id, value } of preset.inputs) {
      lines.push(`    preset.addInput(${quote(id)}, ${valueExpression(value)})`)
    }
  }
  if (spec.params?.length || hasPresets(spec)) lines.push('')

  for (const node of spec.nodes) {
    const variable = `nodes[${quote(node.name)}]`
    lines.push(`    # ${node.name} -- ${node.type}`)
    lines.push(say('node ' + node.name + ' -- ' + node.type))
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
    // A bound parameter holds no constant: it follows the graph input instead.
    for (const binding of node.bindings ?? []) {
      lines.push(say('bind ' + node.name + '.' + binding.id + ' -> ' + binding.param))
      lines.push(`    bind(${variable}, ${quote(binding.id)}, ${quote(binding.getter)}, ${quote(binding.param)})`)
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

  lines.push(say('wires'))
  for (const wire of spec.wires) {
    lines.push(`    nodes[${quote(wire.from)}].newPropertyConnectionFromId(${quote(wire.fromPin)}, nodes[${quote(wire.to)}], ${quote(wire.toPin)})`)
  }

  lines.push('')
  if (target) {
    lines.push(say('savePackageAs'))
    lines.push('    app.getPackageMgr().savePackageAs(package, package_path)')
    lines.push(say('done'))
    lines.push(`    print('{0} {1} in {2} -- ${spec.nodes.length} nodes, ${spec.wires.length} wires'.format(`)
    lines.push(`        'rebuilt' if existed else 'created', ${quote(target.graph)}, os.path.basename(package_path)))`)
  } else {
    lines.push(`    print('added {0} nodes and {1} wires'.format(${spec.nodes.length}, ${spec.wires.length}))`)
  }
  lines.push('')
  lines.push('')
  lines.push('main()')
  lines.push('')
  // say() gives null when tracing is off, and a null must not become a blank line.
  return lines.filter(line => line !== null).join('\n')
}
