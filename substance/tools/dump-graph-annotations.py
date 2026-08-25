"""What annotations does a compositing graph itself carry?

Windows > Python Editor, open the graph you want read, paste, Run.

Why this exists: a graph with no `category` is indexed by the Library panel -- search finds it --
but has no place in the tree, so it looks missing. The category is a graph attribute, not a node
one, and the API reference Designer ships documents node definitions only. SDGraph extends
SDResource, which has setAnnotationPropertyValueFromId, so the annotations are there; this says
what they are called.

The .sbs format reference (resources/documentation/sbs_reference.md) lists a graph's attributes
as category, label, author, tags, description, usertags and physicalSize. For an output node the
format names and the API ids turned out to be the same words. This checks whether that holds
here too, rather than assuming it twice.
"""

import sd
from sd.api.sdproperty import SDPropertyCategory
from sd.api.sdvalueserializer import SDValueSerializer


def main():
    app = sd.getContext().getSDApplication()
    graph = app.getUIMgr().getCurrentGraph()
    if graph is None:
        print('open a compositing graph first')
        return

    print('graph      :', graph.getIdentifier())
    print('class      :', graph.getClassName())
    print('package    :', graph.getPackage().getFilePath())
    print('')

    annotations = graph.getProperties(SDPropertyCategory.Annotation)
    print('%d annotation properties' % len(annotations))
    for prop in annotations:
        types = prop.getTypes()
        type_name = types[0].getId() if len(types) else '?'
        value = graph.getPropertyValue(prop)
        text = SDValueSerializer.sToString(value) if value is not None else '(unset)'
        print('   %-16s %-28s %s' % (prop.getId(), type_name, text))

    # Inputs and outputs of the graph itself, for comparison -- these are the bridge nodes' own
    # annotations seen from the graph's side.
    for category, label in ((SDPropertyCategory.Input, 'input'), (SDPropertyCategory.Output, 'output')):
        props = graph.getProperties(category)
        print('')
        print('%d %s properties: %s' % (len(props), label, ', '.join(p.getId() for p in props)))


main()
