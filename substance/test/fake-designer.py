"""Run tools/graph-to-spec.py against a graph that is not there.

    python substance/test/fake-designer.py <fixture.json> <out.spec>

The dump tool can only run inside Designer, which makes every mistake in it cost a round trip
through a person. This stands up just enough of the sd API for it to run offline: the fixture
describes a graph the way Designer would present one, the tool reads it believing it is real, and
the spec it writes can then be handed to the parser.

What it does not simulate is the part Designer alone can answer -- whether these getters return
what this pretends they return. That was settled by the round-trip gate and by the probes under
tools/; this checks the tool's own reasoning, not the API's behaviour.
"""

import json
import os
import sys
import types


class Struct:
    """A multi-component value. Every sdbasetypes struct supports len() and indexing."""

    def __init__(self, components):
        self._components = list(components)

    def __len__(self):
        return len(self._components)

    def __getitem__(self, index):
        return self._components[index]


class Value:
    def __init__(self, spec):
        self._class = spec['class']
        self._components = spec.get('components', [])
        self._valueId = spec.get('valueId')
        self._usages = [Usage(u) for u in spec.get('usages', [])] if spec.get('usages') else None

    def getClassName(self):
        return self._class

    def getValueId(self):
        return self._valueId

    def get(self):
        if self._usages is not None:
            return [UsageValue(u) for u in self._usages]
        if len(self._components) == 1:
            return self._components[0]
        return Struct(self._components)


class Usage:
    def __init__(self, spec):
        self._name = spec.get('name', '')
        self._components = spec.get('components', '')
        self._colorSpace = spec.get('colorSpace', '')

    def getName(self):
        return self._name

    def getComponents(self):
        return self._components

    def getColorSpace(self):
        return self._colorSpace


class UsageValue:
    def __init__(self, usage):
        self._usage = usage

    def get(self):
        return self._usage


class Property:
    def __init__(self, spec):
        self._id = spec['id']
        self._connectable = spec.get('connectable', False)
        self._primary = spec.get('primary', False)
        self._default = Value(spec['default']) if spec.get('default') else None

    def getId(self):
        return self._id

    def isConnectable(self):
        return self._connectable

    def isPrimary(self):
        return self._primary

    def getDefaultValue(self):
        return self._default


class Definition:
    def __init__(self, spec):
        self._id = spec['definitionId']
        self._properties = {
            'Input': [Property(p) for p in spec.get('inputs', [])],
            'Output': [Property(p) for p in spec.get('outputs', [])],
            'Annotation': [],
        }

    def getId(self):
        return self._id

    def getProperties(self, category):
        return self._properties[category]


class Resource:
    def __init__(self, identifier):
        self._identifier = identifier

    def getIdentifier(self):
        return self._identifier


class Connection:
    def __init__(self, node, prop):
        self._node = node
        self._prop = prop

    def getInputPropertyNode(self):
        return self._node

    def getInputProperty(self):
        return self._prop


class Node:
    def __init__(self, spec):
        self._uid = spec['uid']
        self._definition = Definition(spec)
        self._resource = Resource(spec['resource']) if spec.get('resource') else None
        self._values = {k: Value(v) for k, v in (spec.get('values') or {}).items()}
        self._annotations = {k: Value(v) for k, v in (spec.get('annotations') or {}).items()}
        self._absolute = set(spec.get('absolute') or [])
        self._wires = spec.get('wires') or []
        self._connections = {}

    def getIdentifier(self):
        return self._uid

    def getDefinition(self):
        return self._definition

    def getReferencedResource(self):
        return self._resource

    def getPropertyValue(self, prop):
        return self._values.get(prop.getId())

    def getPropertyGraph(self, prop):
        return None

    def getInputPropertyInheritanceMethodFromId(self, pid):
        return 'Absolute' if pid in self._absolute else 'RelativeToParent'

    def getAnnotationPropertyValueFromId(self, pid):
        return self._annotations.get(pid)

    def getPropertyConnections(self, prop):
        return self._connections.get(prop.getId(), [])


class Package:
    def __init__(self, path):
        self._path = path

    def getFilePath(self):
        return self._path


class Graph:
    def __init__(self, spec, nodes):
        self._identifier = spec['identifier']
        self._package = Package(spec.get('packagePath', ''))
        self._nodes = nodes
        self._annotations = {k: Value(v) for k, v in (spec.get('annotations') or {}).items()}

    def getIdentifier(self):
        return self._identifier

    def getPackage(self):
        return self._package

    def getNodes(self):
        return self._nodes

    def getAnnotationPropertyValueFromId(self, pid):
        return self._annotations.get(pid)


def install_fake_sd(graph):
    """The tool imports sd and one module from sd.api. Both are stood up here, and the property
    category names match what the tool passes around."""
    category = types.SimpleNamespace(Input='Input', Output='Output', Annotation='Annotation')
    inheritance = types.SimpleNamespace(
        Absolute='Absolute', RelativeToInput='RelativeToInput', RelativeToParent='RelativeToParent')

    sdproperty = types.ModuleType('sd.api.sdproperty')
    sdproperty.SDPropertyCategory = category
    sdproperty.SDPropertyInheritanceMethod = inheritance

    sd = types.ModuleType('sd')
    sd.getContext = lambda: types.SimpleNamespace(
        getSDApplication=lambda: types.SimpleNamespace(
            getUIMgr=lambda: types.SimpleNamespace(getCurrentGraph=lambda: graph)))

    api = types.ModuleType('sd.api')
    sys.modules['sd'] = sd
    sys.modules['sd.api'] = api
    sys.modules['sd.api.sdproperty'] = sdproperty


def build(fixture):
    nodes = [Node(spec) for spec in fixture['nodes']]
    by_uid = {node.getIdentifier(): node for node in nodes}
    for spec, node in zip(fixture['nodes'], nodes):
        for wire in spec.get('wires') or []:
            target = by_uid[wire['to']]
            prop = next(p for p in target.getDefinition().getProperties('Input')
                        if p.getId() == wire['toProperty'])
            node._connections.setdefault(wire['fromProperty'], []).append(Connection(target, prop))
    return Graph(fixture['graph'], nodes)


def main():
    fixture_path, out_path = sys.argv[1], sys.argv[2]
    with open(fixture_path, encoding='utf-8') as handle:
        fixture = json.load(handle)

    install_fake_sd(build(fixture))

    here = os.path.dirname(os.path.abspath(__file__))
    tool = os.path.join(here, '..', 'tools', 'graph-to-spec.py')
    with open(tool, encoding='utf-8') as handle:
        source = handle.read()

    # OUT is a module constant the tool reads, so it is set before the source runs.
    source = source.replace('OUT = ""', 'OUT = ' + json.dumps(out_path), 1)
    exec(compile(source, tool, 'exec'), {'__name__': '__main__'})


main()
