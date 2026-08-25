# Dumps the node catalogue out of a running Substance 3D Designer.
#
# Run it from Designer:  Windows > Python Editor, paste this file, press Run.
# Open a Substance compositing graph first -- the richest source of definitions hangs off
# the graph itself, and the script says so in its summary when none is open.
#
# It writes ~/node-graph-harvest/sd-catalog.json and prints a summary to the console.
# Nothing in the open package is touched.
#
# Four sources are read rather than one, because which of them carries the library nodes
# (perlin_noise and the other 500-odd packages that ship with Designer) is exactly what
# this dump is meant to settle:
#
#   1. currentGraph.getNodeDefinitions()      -- what this graph can create
#   2. moduleMgr.getModules()                 -- every module the app has loaded
#   3. graphDefinitionMgr.getGraphDefinitions()
#   4. packageMgr.getPackages()               -- open packages and their resources

import json
import os
import traceback

import sd
from sd.api.sdproperty import SDPropertyCategory
from sd.api.sdvalueserializer import SDValueSerializer

OUT_DIR = os.path.join(os.path.expanduser("~"), "node-graph-harvest")
OUT_FILE = os.path.join(OUT_DIR, "sd-catalog.json")


def safe(fn, default=None):
    """Every getter here can raise or return None; a catalogue dump must not die on one node."""
    try:
        return fn()
    except Exception:
        return default


def type_id(sd_property):
    sd_type = safe(sd_property.getType)
    return safe(sd_type.getId) if sd_type else None


def default_value(sd_property):
    value = safe(sd_property.getDefaultValue)
    if value is None:
        return None
    return safe(lambda: SDValueSerializer.sToString(value))


def read_property(sd_property):
    return {
        "id": safe(sd_property.getId),
        "label": safe(sd_property.getLabel),
        "type": type_id(sd_property),
        "connectable": safe(sd_property.isConnectable),
        "variadic": safe(sd_property.isVariadic),
        "primary": safe(sd_property.isPrimary),
        "readOnly": safe(sd_property.isReadOnly),
        "functionOnly": safe(sd_property.isFunctionOnly),
        "default": default_value(sd_property),
    }


def read_properties(owner, category):
    properties = safe(lambda: owner.getProperties(category))
    if not properties:
        return []
    return [read_property(p) for p in properties]


def read_definition(definition):
    return {
        "id": safe(definition.getId),
        "label": safe(definition.getLabel),
        "description": safe(definition.getDescription),
        "inputs": read_properties(definition, SDPropertyCategory.Input),
        "outputs": read_properties(definition, SDPropertyCategory.Output),
        "annotations": read_properties(definition, SDPropertyCategory.Annotation),
    }


def read_definitions(definitions):
    if not definitions:
        return []
    return [read_definition(d) for d in definitions]


def dump_current_graph(app):
    ui_mgr = safe(app.getUIMgr)
    graph = safe(ui_mgr.getCurrentGraph) if ui_mgr else None
    if graph is None:
        return None
    return {
        "className": safe(graph.getClassName),
        "graphType": safe(graph.getGraphType),
        "identifier": safe(graph.getIdentifier),
        "nodeDefinitions": read_definitions(safe(graph.getNodeDefinitions)),
    }


def dump_modules(app):
    module_mgr = safe(app.getModuleMgr)
    modules = safe(module_mgr.getModules) if module_mgr else None
    if not modules:
        return []
    return [
        {
            "id": safe(m.getId),
            "definitions": read_definitions(safe(m.getDefinitions)),
        }
        for m in modules
    ]


def dump_graph_definitions(app):
    mgr = safe(app.getSDGraphDefinitionMgr)
    definitions = safe(mgr.getGraphDefinitions) if mgr else None
    if not definitions:
        return []
    # These come back as SDModule, so each one still has to be unwrapped a level.
    return [
        {
            "id": safe(d.getId),
            "definitions": read_definitions(safe(d.getDefinitions)),
        }
        for d in definitions
    ]


def dump_packages(app):
    package_mgr = safe(app.getPackageMgr)
    packages = safe(package_mgr.getPackages) if package_mgr else None
    if not packages:
        return []
    dumped = []
    for package in packages:
        resources = safe(lambda: package.getChildrenResources(True)) or []
        dumped.append({
            "filePath": safe(package.getFilePath),
            "resources": [
                {
                    "identifier": safe(r.getIdentifier),
                    "url": safe(r.getUrl),
                    "type": safe(lambda: r.getType().getId()),
                }
                for r in resources
            ],
        })
    return dumped


def summarise(catalogue):
    lines = []
    graph = catalogue["currentGraph"]
    if graph is None:
        lines.append("current graph : NONE OPEN -- reopen a compositing graph and run again")
    else:
        lines.append("current graph : {0} ({1}), {2} node definitions".format(
            graph["identifier"], graph["graphType"], len(graph["nodeDefinitions"])))
        prefixes = {}
        for definition in graph["nodeDefinitions"]:
            head = (definition["id"] or "?").rsplit("::", 1)[0]
            prefixes[head] = prefixes.get(head, 0) + 1
        for head in sorted(prefixes, key=lambda k: -prefixes[k]):
            lines.append("                {0:<40} {1}".format(head, prefixes[head]))

    lines.append("modules       : {0}".format(len(catalogue["modules"])))
    for module in catalogue["modules"]:
        lines.append("                {0:<40} {1}".format(module["id"], len(module["definitions"])))

    lines.append("graphDefs     : {0}".format(len(catalogue["graphDefinitions"])))
    lines.append("packages      : {0}".format(len(catalogue["packages"])))
    for package in catalogue["packages"][:20]:
        lines.append("                {0} ({1} resources)".format(
            package["filePath"], len(package["resources"])))
    return "\n".join(lines)


def main():
    context = sd.getContext()
    app = context.getSDApplication()

    catalogue = {
        "designerVersion": safe(app.getVersion),
        "currentGraph": dump_current_graph(app),
        "modules": dump_modules(app),
        "graphDefinitions": dump_graph_definitions(app),
        "packages": dump_packages(app),
    }

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT_FILE, "w", encoding="utf-8") as handle:
        json.dump(catalogue, handle, indent=1, ensure_ascii=False)

    print("Designer {0}".format(catalogue["designerVersion"]))
    print(summarise(catalogue))
    print("")
    print("written: {0}".format(OUT_FILE))


try:
    main()
except Exception:
    traceback.print_exc()
