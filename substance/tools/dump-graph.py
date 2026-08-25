# Reads the open Substance compositing graph back out as JSON -- the "out" leg of the round trip.
#
# Run it from Designer:  Windows > Python Editor, paste this file, press Run.
# Build a network by hand first, then run this on it. Nothing in the graph is touched.
#
# It writes ~/node-graph-harvest/sd-graph.json and prints a summary.
#
# Two things this is meant to settle, which dump-catalog.py could not:
#
#   1. How an instance node (perlin_noise and the other 500-odd library packages) names the
#      resource it points at. No definition manager enumerates those -- they only exist once
#      their package is a dependency of the open one, which placing a node makes true.
#   2. Whether connections read back the same either way round, so the rebuild leg can pick
#      whichever direction is cheaper.
#
# Connections are recorded from BOTH ends on purpose: iterating a node's output properties
# should give the downstream side, iterating its inputs the upstream side. Which of the two
# the API actually populates is what the connectionsByOutput / connectionsByInput counts in
# the summary report. Trust neither until they agree.

import json
import os
import traceback

import sd
from sd.api.sdproperty import SDPropertyCategory
from sd.api.sdvalueserializer import SDValueSerializer

OUT_DIR = os.path.join(os.path.expanduser("~"), "node-graph-harvest")
OUT_FILE = os.path.join(OUT_DIR, "sd-graph.json")


def safe(fn, default=None):
    """Every getter here can raise or return None; a dump must not die on one node."""
    try:
        return fn()
    except Exception:
        return default


def as_text(value):
    if value is None:
        return None
    return safe(lambda: SDValueSerializer.sToString(value))


def read_position(node):
    position = safe(node.getPosition)
    if position is None:
        return None
    return {"x": safe(lambda: position.x), "y": safe(lambda: position.y)}


def read_resource(node):
    """Only instance nodes carry one. This is the identifier the rebuild leg has to reproduce."""
    resource = safe(node.getReferencedResource)
    if resource is None:
        return None
    package = safe(resource.getPackage)
    return {
        "identifier": safe(resource.getIdentifier),
        "url": safe(resource.getUrl),
        "type": safe(lambda: resource.getType().getId()),
        "packageFilePath": safe(package.getFilePath) if package else None,
    }


def read_values(node):
    """Input property values, skipping the ones left at their default."""
    properties = safe(lambda: node.getProperties(SDPropertyCategory.Input)) or []
    values = []
    for sd_property in properties:
        current = as_text(safe(lambda: node.getPropertyValue(sd_property)))
        default = as_text(safe(sd_property.getDefaultValue))
        if current is None or current == default:
            continue
        values.append({
            "id": safe(sd_property.getId),
            "type": safe(lambda: sd_property.getType().getId()),
            "value": current,
            "default": default,
        })
    return values


def read_connections(node, category):
    """One row per connection seen from this end. Both ends of every wire get named."""
    properties = safe(lambda: node.getProperties(category)) or []
    rows = []
    for sd_property in properties:
        connections = safe(lambda: node.getPropertyConnections(sd_property)) or []
        for connection in connections:
            in_node = safe(connection.getInputPropertyNode)
            out_node = safe(connection.getOutputPropertyNode)
            rows.append({
                "seenFrom": safe(sd_property.getId),
                "inputNode": safe(in_node.getIdentifier) if in_node else None,
                "inputProperty": safe(lambda: connection.getInputProperty().getId()),
                "outputNode": safe(out_node.getIdentifier) if out_node else None,
                "outputProperty": safe(lambda: connection.getOutputProperty().getId()),
            })
    return rows


def read_node(node):
    definition = safe(node.getDefinition)
    return {
        "uid": safe(node.getIdentifier),
        "className": safe(node.getClassName),
        "definitionId": safe(definition.getId) if definition else None,
        "definitionLabel": safe(definition.getLabel) if definition else None,
        "position": read_position(node),
        "referencedResource": read_resource(node),
        "values": read_values(node),
        "connectionsByOutput": read_connections(node, SDPropertyCategory.Output),
        "connectionsByInput": read_connections(node, SDPropertyCategory.Input),
    }


def dump_packages(app):
    """After a library node is placed its package is a dependency, so this list grows."""
    package_mgr = safe(app.getPackageMgr)
    packages = safe(package_mgr.getPackages) if package_mgr else None
    dumped = []
    for package in packages or []:
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


def summarise(dump):
    lines = []
    graph = dump["graph"]
    if graph is None:
        lines.append("graph : NONE OPEN -- open a compositing graph and run again")
        return "\n".join(lines)

    lines.append("graph : {0} ({1}), {2} nodes".format(
        graph["identifier"], graph["className"], len(graph["nodes"])))

    by_output = sum(len(n["connectionsByOutput"]) for n in graph["nodes"])
    by_input = sum(len(n["connectionsByInput"]) for n in graph["nodes"])
    lines.append("wires : {0} seen from outputs, {1} seen from inputs".format(by_output, by_input))

    instances = [n for n in graph["nodes"] if n["referencedResource"]]
    lines.append("instance nodes : {0} of {1}".format(len(instances), len(graph["nodes"])))

    lines.append("")
    for node in graph["nodes"]:
        resource = node["referencedResource"]
        what = resource["url"] if resource else node["definitionId"]
        position = node["position"] or {"x": "?", "y": "?"}
        lines.append("  {0:<12} {1:<52} @ {2},{3}  {4} values".format(
            (node["uid"] or "?")[:12], (what or "?")[:52],
            position["x"], position["y"], len(node["values"])))
        for wire in node["connectionsByOutput"]:
            lines.append("      {0} -> {1}.{2}".format(
                wire["seenFrom"], wire["inputNode"], wire["inputProperty"]))

    lines.append("")
    lines.append("packages : {0}".format(len(dump["packages"])))
    for package in dump["packages"]:
        lines.append("  {0}  ({1} resources)".format(
            package["filePath"] or "<unsaved>", len(package["resources"])))
    return "\n".join(lines)


def main():
    context = sd.getContext()
    app = context.getSDApplication()

    ui_mgr = safe(app.getUIMgr)
    graph = safe(ui_mgr.getCurrentGraph) if ui_mgr else None

    dumped_graph = None
    if graph is not None:
        nodes = safe(graph.getNodes) or []
        dumped_graph = {
            "className": safe(graph.getClassName),
            "identifier": safe(graph.getIdentifier),
            "url": safe(graph.getUrl),
            "nodes": [read_node(n) for n in nodes],
        }

    dump = {
        "designerVersion": safe(app.getVersion),
        "graph": dumped_graph,
        "packages": dump_packages(app),
    }

    os.makedirs(OUT_DIR, exist_ok=True)
    with open(OUT_FILE, "w", encoding="utf-8") as handle:
        json.dump(dump, handle, indent=1, ensure_ascii=False)

    print("Designer {0}".format(dump["designerVersion"]))
    print(summarise(dump))
    print("")
    print("written: {0}".format(OUT_FILE))


try:
    main()
except Exception:
    traceback.print_exc()
