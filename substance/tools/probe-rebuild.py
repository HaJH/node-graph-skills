"""Which call takes Designer down when a graph is rebuilt.

    Open the graph that crashes on a second build, then Windows > Python Editor, paste, Run.

A native crash prints nothing: the Python Editor's output goes with the process. So this writes a
line to a file and flushes after every step, and the last line in that file names the call that
did not return. Send that file back.

It only clears -- it does not rebuild -- so the graph is left empty. That is fine on a graph a
spec rebuilds anyway, and it is the whole point: the clearing half is what is under suspicion.

    LOG is where the file goes.
"""

import os

LOG = os.path.join(os.path.expanduser('~'), 'substance-rebuild-probe.txt')

import sd
from sd.api.sdproperty import SDPropertyCategory

handle = open(LOG, 'w', encoding='utf-8')


def step(message):
    handle.write(message + '\n')
    handle.flush()
    os.fsync(handle.fileno())


def main():
    step('start')
    app = sd.getContext().getSDApplication()
    graph = app.getUIMgr().getCurrentGraph()
    if graph is None:
        step('no graph open -- open the one that crashes')
        return

    step('graph: ' + str(graph.getIdentifier()))

    presets = list(graph.getPresets())
    step('presets: %d' % len(presets))
    for preset in presets:
        label = preset.getLabel()
        step('  about to delete preset %r' % label)
        graph.deletePreset(label)
        step('  deleted preset %r' % label)

    nodes = list(graph.getNodes())
    step('nodes: %d' % len(nodes))
    for node in nodes:
        definition = node.getDefinition()
        name = definition.getId() if definition is not None else '?'
        step('  about to delete node %s' % name)
        graph.deleteNode(node)
        step('  deleted node %s' % name)

    props = list(graph.getProperties(SDPropertyCategory.Input))
    step('input properties: %d' % len(props))
    for prop in props:
        identifier = prop.getId()
        if identifier.startswith('$'):
            step('  skipping base parameter %s' % identifier)
            continue
        step('  about to delete property %s' % identifier)
        graph.deleteProperty(prop)
        step('  deleted property %s' % identifier)

    step('finished without crashing -- the clearing half is not the cause')


try:
    main()
except Exception as error:
    step('raised: %s: %s' % (error.__class__.__name__, error))
finally:
    handle.close()

print('probe log: ' + LOG)
