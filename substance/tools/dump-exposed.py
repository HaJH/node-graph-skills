"""What Designer actually makes when you expose a parameter.

    Expose one by hand first: pick any node, right-click a parameter, Expose. Then
    Windows > Python Editor, paste, Run, with that graph open.

An exposed parameter is two things at once and only one of them is obvious. The obvious half is
an input property on the graph -- `SDResource.newProperty(id, type, Input)` -- carrying a default
and some annotations. The other half is that nothing inside the graph reads it: the node
parameter that follows it has been put under a **function graph**, and that graph holds a getter
whose `__constant__` names the input.

This reads both halves off a graph where a person did it, because guessing the annotation ids
went badly once already: a graph's own annotations turned out to be `author_url`,
`show_in_library` and `physical_size` where the file format says `authorURL`, `hideInLibrary` and
`physicalSize`, and one of those is inverted.

Nothing is written and nothing is changed.
"""

import sd
from sd.api.sdproperty import SDPropertyCategory
from sd.api.sdvalueserializer import SDValueSerializer


def safe(fn, default=None):
    try:
        value = fn()
    except Exception as error:
        return '<%s>' % error.__class__.__name__ if default == '<>' else default
    return default if value is None else value


def show(value):
    if value is None:
        return '(unset)'
    return safe(lambda: SDValueSerializer.sToString(value), '<unreadable>')


def type_of(prop):
    types = safe(lambda: prop.getTypes(), [])
    return safe(lambda: types[0].getId(), '?') if len(types) else '?'


def main():
    app = sd.getContext().getSDApplication()
    graph = app.getUIMgr().getCurrentGraph()
    if graph is None:
        print('open a compositing graph first')
        return

    print('graph:', safe(lambda: graph.getIdentifier(), '?'))
    print('')

    inputs = safe(lambda: graph.getProperties(SDPropertyCategory.Input), []) or []
    print('=== the graph has %d input properties ===' % len(inputs))
    for prop in inputs:
        pid = safe(lambda: prop.getId(), '?')
        print('')
        print('  %s : %s' % (pid, type_of(prop)))
        print('     value    %s' % show(safe(lambda: graph.getPropertyValue(prop), None)))
        print('     default  %s' % show(safe(lambda: prop.getDefaultValue(), None)))
        print('     label    %r' % safe(lambda: prop.getLabel(), ''))

        annotations = safe(lambda: graph.getPropertyAnnotations(prop), []) or []
        print('     %d annotations' % len(annotations))
        for annotation in annotations:
            aid = safe(lambda: annotation.getId(), '?')
            value = safe(lambda: graph.getPropertyAnnotationValueFromId(prop, aid), None)
            print('        %-18s %-22s %s' % (aid, type_of(annotation), show(value)))

    print('')
    print('=== node parameters driven by a function ===')
    found = 0
    for node in safe(lambda: graph.getNodes(), []) or []:
        definition = safe(lambda: node.getDefinition(), None)
        if definition is None:
            continue
        label = safe(lambda: definition.getId(), '?')
        resource = safe(lambda: node.getReferencedResource(), None)
        if resource is not None:
            label = safe(lambda: resource.getIdentifier(), label)

        for prop in safe(lambda: definition.getProperties(SDPropertyCategory.Input), []) or []:
            function = safe(lambda: node.getPropertyGraph(prop), None)
            if function is None:
                continue
            found += 1
            pid = safe(lambda: prop.getId(), '?')
            print('')
            print('  %s.%s is driven by a %s' % (label, pid, safe(lambda: function.getClassName(), '?')))
            print('     graph type id: %r' % safe(lambda: function.getDefinition().getId(), ''))

            for inner in safe(lambda: function.getNodes(), []) or []:
                inner_def = safe(lambda: inner.getDefinition(), None)
                inner_id = safe(lambda: inner_def.getId(), '?')
                bits = []
                for inner_prop in safe(lambda: inner_def.getProperties(SDPropertyCategory.Input), []) or []:
                    ipid = safe(lambda: inner_prop.getId(), '?')
                    ivalue = safe(lambda: inner.getPropertyValue(inner_prop), None)
                    if ivalue is not None:
                        bits.append('%s=%s' % (ipid, show(ivalue)))
                print('     node %-34s %s' % (inner_id, ' '.join(bits)))

    if not found:
        print('  none. Expose a parameter by hand first -- right-click it on a node, Expose --')
        print('  then run this again, so there is something to read.')


main()
