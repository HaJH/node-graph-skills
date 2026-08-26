"""Read the graph Designer has open and write the spec that rebuilds it.

Windows > Python Editor, paste, Run.

This is the way back for a graph nobody wrote a spec for -- one built by hand, or one somebody
refined inside Designer after a build. Dump it and it joins the system: reviewable in git,
rebuildable by `build.mjs`, and nameable as a node by the next spec.

It carries its own copy of the reading half of tools/roundtrip.py rather than importing it. The
Python Editor runs one pasted file and has no import path, so a tool meant to be pasted has to be
whole. roundtrip.py is the record of the round-trip gate; this is the live tool.

Two things the spec deliberately does not carry, and the run says so when it drops one:

  - a parameter driven by a function rather than a constant. The spec has no function graphs in
    it, so the value would be a lie.
  - a base parameter ($outputsize and the rest) left on inherit. Only one explicitly set --
    Absolute -- means anything, and inheritance is what a graph does by default.
"""

OUT = ""        # "" writes <graph>.spec beside the package. Set a full path to put it elsewhere.
LANG = ""       # the lang line to write, e.g. "ko". "" leaves it out.

import os

import sd
from sd.api.sdproperty import SDPropertyCategory, SDPropertyInheritanceMethod


def safe(fn, default=None):
    """Every getter here can raise or come back None, and one bad node must not lose the rest."""
    try:
        value = fn()
    except Exception:
        return default
    return default if value is None else value


# -- values ------------------------------------------------------------------------------

# How many components each value class carries. Same table the round-trip gate uses, and for the
# same reason: sdbasetypes structs index but do not measure.
ARITY = {
    'SDValueBool2': 2, 'SDValueBool3': 3, 'SDValueBool4': 4,
    'SDValueInt2': 2, 'SDValueInt3': 3, 'SDValueInt4': 4,
    'SDValueFloat2': 2, 'SDValueFloat3': 3, 'SDValueFloat4': 4,
    'SDValueDouble2': 2, 'SDValueDouble3': 3, 'SDValueDouble4': 4,
    'SDValueColorRGB': 3, 'SDValueColorRGBA': 4,
}


def literal(value):
    """An SDValue as the spec would write it, or None when the spec cannot say it."""
    class_name = safe(lambda: value.getClassName(), '')

    if class_name == 'SDValueEnum':
        # The value knows its own id, so the spec can say substract rather than 2.
        return safe(lambda: value.getValueId(), None)
    if class_name == 'SDValueBool':
        return 'true' if value.get() else 'false'
    if class_name == 'SDValueString':
        # A spec string is quoted, so a quote inside one has to go.
        return '"%s"' % str(value.get()).replace('"', "'")

    raw = safe(lambda: value.get(), None)
    if raw is None:
        return None
    if isinstance(raw, (int, float)):
        return number(raw)

    # A struct supports __getitem__ but NOT len(), so how many components it has has to be known
    # rather than asked. Getting this wrong drops every float2, float4 and colour silently.
    arity = ARITY.get(class_name)
    if arity is None:
        return None
    try:
        return '[' + ','.join(number(raw[i]) for i in range(arity)) + ']'
    except Exception:
        return None


def number(n):
    if isinstance(n, int):
        return str(n)
    text = ('%.6f' % n).rstrip('0').rstrip('.')
    return text if text not in ('', '-') else '0'


def same(a, b):
    """Compare on components, never on text. ColorRGBA(0,0,0,1) and float4(0,0,0,1) are the same
    value and different strings, and comparing text calls every such parameter edited."""
    if a is None or b is None:
        return a is b
    x = safe(lambda: a.get(), None)
    y = safe(lambda: b.get(), None)
    if x is None or y is None:
        return False
    if isinstance(x, (int, float, bool)) or isinstance(y, (int, float, bool)):
        return x == y

    # Same trap as writing one: a struct indexes but does not measure, so len() raises here and
    # every multi-component value reads as different from its default. That puts maskrectangle
    # on every blend and three untouched levels on every levels node.
    #
    # The count comes off the class, and either class will do -- ColorRGBA and float4 overlap,
    # which is the reason this compares components rather than text in the first place.
    count = ARITY.get(safe(lambda: a.getClassName(), '')) or ARITY.get(safe(lambda: b.getClassName(), ''))
    if count is None:
        return False
    try:
        return all(x[i] == y[i] for i in range(count))
    except Exception:
        return False


# -- reading -----------------------------------------------------------------------------

def definition_of(node):
    return safe(lambda: node.getDefinition(), None)


def type_name(node):
    """What the spec calls this node. An atomic definition by its short id, an instance by the
    identifier of the graph it points at -- which is what a spec names either way."""
    resource = safe(lambda: node.getReferencedResource(), None)
    if resource is not None:
        return safe(lambda: resource.getIdentifier(), None), True
    definition = definition_of(node)
    ident = safe(lambda: definition.getId(), '')
    return ident.replace('sbs::compositing::', ''), False


def read_parameters(node, dropped):
    """Input values worth writing: set, not inherited, not driven by a function, and different
    from what the definition says they would be."""
    out = []
    definition = definition_of(node)
    if definition is None:
        return out

    for prop in safe(lambda: definition.getProperties(SDPropertyCategory.Input), []) or []:
        if safe(lambda: prop.isConnectable(), False):
            continue
        pid = safe(lambda: prop.getId(), '')

        if safe(lambda: node.getPropertyGraph(prop), None) is not None:
            dropped.append('%s.%s is driven by a function' % (name_hint(node), pid))
            continue

        if pid.startswith('$'):
            method = safe(lambda: node.getInputPropertyInheritanceMethodFromId(pid), None)
            if method != SDPropertyInheritanceMethod.Absolute:
                continue

        value = safe(lambda: node.getPropertyValue(prop), None)
        if value is None:
            continue
        if not pid.startswith('$') and same(value, safe(lambda: prop.getDefaultValue(), None)):
            continue

        written = literal(value)
        if written is None:
            dropped.append('%s.%s is a %s the spec cannot write'
                           % (name_hint(node), pid, safe(lambda: value.getClassName(), '?')))
            continue
        out.append('%s=%s' % (pid, written))
    return out


def read_bridge(node, dropped):
    """An output or input node is named and tagged by annotations, and those are the whole point
    of it -- the identifier is the graph's output name, the usage is what an export preset and a
    material slot match on."""
    lines = []
    identifier = safe(lambda: node.getAnnotationPropertyValueFromId('identifier'), None)
    identifier = safe(lambda: identifier.get(), '') if identifier is not None else ''

    # An annotation nobody set reads back as the definition's own. Designer's description for an
    # output node is a paragraph of help text, and writing that into every spec is noise that
    # looks like content.
    definition = definition_of(node)
    inherited = {
        'description': safe(lambda: definition.getDescription(), ''),
        'label': safe(lambda: definition.getLabel(), ''),
    }
    for key in ('label', 'description', 'group'):
        value = safe(lambda: node.getAnnotationPropertyValueFromId(key), None)
        text = safe(lambda: value.get(), '') if value is not None else ''
        if text and text != inherited.get(key, ''):
            lines.append('%s="%s"' % (key, text))

    usages = safe(lambda: node.getAnnotationPropertyValueFromId('usages'), None)
    for entry in (safe(lambda: usages.get(), []) or []) if usages is not None else []:
        usage = safe(lambda: entry.get(), None)
        if usage is None:
            continue
        parts = [safe(lambda: usage.getName(), ''),
                 safe(lambda: usage.getComponents(), ''),
                 safe(lambda: usage.getColorSpace(), '')]
        while len(parts) > 1 and not parts[-1]:
            parts.pop()
        # RGBA is what the spec assumes, so writing it makes a dumped spec differ from the hand
        # written one that means the same thing.
        if parts[1:] == ['RGBA']:
            parts.pop()
        if parts[0]:
            lines.append('usage=' + ':'.join(parts))
    return identifier, lines


def name_hint(node):
    kind, _ = type_name(node)
    return kind or 'node'


def read_describe(graph):
    """The graph's own annotations. category is what files it in the Library panel."""
    out = []
    for key in ('category', 'label', 'description'):
        value = safe(lambda: graph.getAnnotationPropertyValueFromId(key), None)
        text = safe(lambda: value.get(), '') if value is not None else ''
        if text:
            out.append('%s %s' % (key, text if key == 'category' else '"%s"' % text))
    return out


def read_wires(nodes, names):
    """Read from output pins only. SDConnection names its two ends relative to the pin queried
    from, so reading from inputs and trusting the names inverts every wire."""
    wires = []
    for node in nodes:
        definition = definition_of(node)
        outputs = safe(lambda: definition.getProperties(SDPropertyCategory.Output), []) or []
        for prop in outputs:
            for connection in safe(lambda: node.getPropertyConnections(prop), []) or []:
                far_node = safe(lambda: connection.getInputPropertyNode(), None)
                far_prop = safe(lambda: connection.getInputProperty(), None)
                if far_node is None or far_prop is None:
                    continue
                target = names.get(safe(lambda: far_node.getIdentifier(), None))
                if target is None:
                    continue
                wires.append((
                    names[safe(lambda: node.getIdentifier(), None)],
                    safe(lambda: prop.getId(), ''),
                    len(outputs) > 1,
                    target,
                    safe(lambda: far_prop.getId(), ''),
                    far_node,
                ))
    return wires


def is_primary(node, pin):
    definition = definition_of(node)
    for prop in safe(lambda: definition.getProperties(SDPropertyCategory.Input), []) or []:
        if safe(lambda: prop.getId(), '') == pin:
            return safe(lambda: prop.isPrimary(), False)
    return False


def unique_names(nodes):
    """Spec names, in two passes.

    A bridge is named by the graph input or output it stands for, which is the name a person
    already thinks in. It has to claim that name before anything else does: in a graph with a
    normal filter and an output called normal, one pass in node order lets the filter take it and
    the output ends up as output_1, which is the name the dump exists to get rid of."""
    names, taken = {}, set()
    bridges = ('output', 'input_color', 'input_grayscale', 'input_value')

    for node in nodes:
        kind, _ = type_name(node)
        if kind not in bridges:
            continue
        identifier, _ = read_bridge(node, [])
        if identifier and identifier not in taken:
            taken.add(identifier)
            names[safe(lambda: node.getIdentifier(), None)] = identifier

    rest = [node for node in nodes if safe(lambda: node.getIdentifier(), None) not in names]
    counts = {}
    for node in rest:
        kind, _ = type_name(node)
        counts[kind] = counts.get(kind, 0) + 1

    seen = {}
    for node in rest:
        kind, _ = type_name(node)
        seen[kind] = seen.get(kind, 0) + 1
        chosen = kind if counts[kind] == 1 else '%s_%d' % (kind, seen[kind])
        while chosen in taken:
            chosen = chosen + '_'
        taken.add(chosen)
        names[safe(lambda: node.getIdentifier(), None)] = chosen
    return names


# -- writing -----------------------------------------------------------------------------

def default_destination(package_path, identifier):
    """Where a spec belongs, given where the package sits.

    A library keeps its packages under an alias folder and its specs beside it, so walking up
    from the package for a specs/ directory lands the dump where the rest of them live rather
    than in with the assets. Falls back to next to the package."""
    if not package_path:
        return ''
    directory = os.path.dirname(package_path)
    for _ in range(3):
        parent = os.path.dirname(directory)
        if not parent or parent == directory:
            break
        specs = os.path.join(parent, 'specs')
        if os.path.isdir(specs):
            materials = os.path.join(specs, 'materials')
            return os.path.join(materials if os.path.isdir(materials) else specs, identifier + '.spec')
        directory = parent
    return os.path.join(os.path.dirname(package_path), identifier + '.spec')


def main():
    app = sd.getContext().getSDApplication()
    graph = app.getUIMgr().getCurrentGraph()
    if graph is None:
        print('open a compositing graph first')
        return

    identifier = safe(lambda: graph.getIdentifier(), 'graph')
    package = safe(lambda: graph.getPackage(), None)
    package_path = safe(lambda: package.getFilePath(), '') if package is not None else ''
    package_name = os.path.splitext(os.path.basename(package_path))[0] if package_path else ''

    nodes = list(safe(lambda: graph.getNodes(), []) or [])
    names = unique_names(nodes)
    dropped = []

    lines = ['graph %s' % identifier]
    if package_name and package_name != identifier:
        lines.append('package %s' % package_name)
    if LANG:
        lines.append('lang %s' % LANG)
    lines.extend(read_describe(graph))
    lines.append('')

    for node in nodes:
        kind, _ = type_name(node)
        if not kind:
            dropped.append('a node whose type could not be read was left out')
            continue
        parts = [names[safe(lambda: node.getIdentifier(), None)], kind]
        _, annotations = read_bridge(node, dropped)
        parts.extend(annotations)
        parts.extend(read_parameters(node, dropped))
        lines.append(' '.join(parts))

    lines.append('')
    for source, pin, many_outputs, target, target_pin, far_node in read_wires(nodes, names):
        left = '%s.%s' % (source, pin) if many_outputs else source
        right = target if is_primary(far_node, target_pin) else '%s.%s' % (target, target_pin)
        lines.append('%s -> %s' % (left, right))

    text = '\n'.join(lines) + '\n'
    print(text)

    destination = OUT or default_destination(package_path, identifier)
    if destination:
        with open(destination, 'w', encoding='utf-8', newline='\n') as handle:
            handle.write(text)
        print('written: ' + os.path.normpath(destination))
    else:
        print('the graph has no package on disk, so nothing was written -- copy the spec above')

    if dropped:
        print('')
        print('%d thing(s) the spec does not carry:' % len(dropped))
        for note in dropped:
            print('   ' + note)


main()
