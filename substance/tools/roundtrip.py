# The Substance round-trip gate, both legs in one file.
#
# Run it from Designer:  Windows > Python Editor, paste this file, set MODE, press Run.
#
#   MODE = "dump"     reads the open graph to ~/node-graph-harvest/sd-graph.json
#   MODE = "rebuild"  builds that file into the open graph, then reads the result back
#                     to ~/node-graph-harvest/sd-graph-rebuilt.json so the two can be diffed
#
# Gate procedure: build a network by hand, run "dump" on it, open a NEW empty compositing
# graph, run "rebuild" there. The two json files have to describe the same network.
#
# One file rather than two because the value codec and the resource lookup are needed by
# both legs, and Designer's Python Editor runs a single pasted file with no import path.
#
# Values are recorded as class name plus components, never as text. SDValueSerializer has
# sToString but no sFromString, so a serialised string is write-only and cannot rebuild
# anything -- the string form also reports ColorRGBA(0,0,0,1) and float4(0,0,0,1) as
# different when they are the same value.

import importlib
import json
import os
import traceback

import sd
import sd.api.sdbasetypes as sdbasetypes
from sd.api.sdproperty import SDPropertyCategory

MODE = "dump"

OUT_DIR = os.path.join(os.path.expanduser("~"), "node-graph-harvest")
DUMP_FILE = os.path.join(OUT_DIR, "sd-graph.json")
REBUILT_FILE = os.path.join(OUT_DIR, "sd-graph-rebuilt.json")

# SDValue subclass -> the sdbasetypes struct its sNew takes, or None when sNew takes a scalar.
# Every struct here supports __getitem__, so components come out by index.
VALUE_TYPES = {
    "SDValueBool": None, "SDValueInt": None, "SDValueFloat": None,
    "SDValueDouble": None, "SDValueString": None,
    "SDValueBool2": "bool2", "SDValueBool3": "bool3", "SDValueBool4": "bool4",
    "SDValueInt2": "int2", "SDValueInt3": "int3", "SDValueInt4": "int4",
    "SDValueFloat2": "float2", "SDValueFloat3": "float3", "SDValueFloat4": "float4",
    "SDValueDouble2": "double2", "SDValueDouble3": "double3", "SDValueDouble4": "double4",
    "SDValueColorRGB": "ColorRGB", "SDValueColorRGBA": "ColorRGBA",
}

ARITY = {"bool2": 2, "bool3": 3, "bool4": 4, "int2": 2, "int3": 3, "int4": 4,
         "float2": 2, "float3": 3, "float4": 4, "double2": 2, "double3": 3, "double4": 4,
         "ColorRGB": 3, "ColorRGBA": 4}


def safe(fn, default=None):
    """Every getter here can raise or return None; neither leg may die on one node."""
    try:
        return fn()
    except Exception:
        return default


def sd_value_class(class_name):
    """SDValueInt2 lives in sd.api.sdvalueint2 -- the module is the class name lowercased."""
    module = importlib.import_module("sd.api." + class_name.lower())
    return getattr(module, class_name)


# -- value codec ------------------------------------------------------------------------

def encode_value(value):
    if value is None:
        return None
    class_name = safe(value.getClassName)
    if class_name == "SDValueEnum":
        return {
            "class": class_name,
            "typeId": safe(lambda: value.getType().getId()),
            "components": [safe(value.get)],
        }
    if class_name not in VALUE_TYPES:
        return {"class": class_name, "unsupported": True}
    raw = safe(value.get)
    if raw is None:
        return {"class": class_name, "unsupported": True}
    struct = VALUE_TYPES[class_name]
    components = [raw] if struct is None else [raw[i] for i in range(ARITY[struct])]
    return {"class": class_name, "components": components}


def decode_value(encoded):
    if not encoded or encoded.get("unsupported"):
        return None
    class_name = encoded["class"]
    components = encoded["components"]
    if class_name == "SDValueEnum":
        value_class = sd_value_class("SDValueEnum")
        return value_class.sFromValue(encoded["typeId"], int(components[0]))
    value_class = sd_value_class(class_name)
    struct = VALUE_TYPES.get(class_name)
    if struct is None:
        return value_class.sNew(components[0])
    return value_class.sNew(getattr(sdbasetypes, struct)(*components))


def same_value(a, b):
    """Compare on components only. The class differs where float4 and ColorRGBA overlap."""
    if a is None or b is None:
        return a is b
    if a.get("unsupported") or b.get("unsupported"):
        return False
    return a.get("components") == b.get("components")


def show_value(encoded):
    if not encoded:
        return "?"
    if encoded.get("unsupported"):
        return encoded["class"] + "(unsupported)"
    return encoded["class"] + "(" + ",".join(str(c) for c in encoded["components"]) + ")"


# -- reading ----------------------------------------------------------------------------

def read_position(node):
    position = safe(node.getPosition)
    if position is None:
        return None
    return {"x": safe(lambda: position.x), "y": safe(lambda: position.y)}


def read_resource(node):
    """Only instance nodes carry one. identifier + packageFilePath is what rebuild needs;
    the url's ?dependency=NNNN is a per-package uid and is recorded for reference only."""
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
    """Input property values that differ from the definition default, plus a note on any
    property driven by a function graph, whose value is not a constant to copy."""
    properties = safe(lambda: node.getProperties(SDPropertyCategory.Input)) or []
    values = []
    for sd_property in properties:
        property_id = safe(sd_property.getId)
        if safe(lambda: node.getPropertyGraph(sd_property)) is not None:
            values.append({"id": property_id, "functionDriven": True})
            continue
        current = encode_value(safe(lambda: node.getPropertyValue(sd_property)))
        default = encode_value(safe(sd_property.getDefaultValue))
        if current is None or same_value(current, default):
            continue
        values.append({"id": property_id, "value": current})
    return values


def read_connections(node):
    """Read from the output side only. getOutputProperty is always the pin queried from and
    getInputProperty the pin at the far end, so the input-side pass returns the same wires
    with the two roles swapped -- correct, but the wrong way round for rebuilding."""
    properties = safe(lambda: node.getProperties(SDPropertyCategory.Output)) or []
    rows = []
    for sd_property in properties:
        connections = safe(lambda: node.getPropertyConnections(sd_property)) or []
        for connection in connections:
            far_node = safe(connection.getInputPropertyNode)
            rows.append({
                "fromProperty": safe(sd_property.getId),
                "toNode": safe(far_node.getIdentifier) if far_node else None,
                "toProperty": safe(lambda: connection.getInputProperty().getId()),
            })
    return rows


def read_node(node):
    definition = safe(node.getDefinition)
    return {
        "uid": safe(node.getIdentifier),
        "definitionId": safe(definition.getId) if definition else None,
        "definitionLabel": safe(definition.getLabel) if definition else None,
        "position": read_position(node),
        "referencedResource": read_resource(node),
        "values": read_values(node),
        "connections": read_connections(node),
    }


def read_graph(app):
    ui_mgr = safe(app.getUIMgr)
    graph = safe(ui_mgr.getCurrentGraph) if ui_mgr else None
    if graph is None:
        return None
    nodes = safe(graph.getNodes) or []
    return {
        "className": safe(graph.getClassName),
        "identifier": safe(graph.getIdentifier),
        "nodes": [read_node(n) for n in nodes],
    }


def read_packages(app):
    package_mgr = safe(app.getPackageMgr)
    packages = safe(package_mgr.getPackages) if package_mgr else None
    return [
        {
            "filePath": safe(p.getFilePath),
            "resourceCount": len(safe(lambda: p.getChildrenResources(True)) or []),
        }
        for p in packages or []
    ]


# -- writing ----------------------------------------------------------------------------

def find_resource(app, package_file_path, identifier):
    """A library node's package is loaded already if the node was placed by hand; on a fresh
    graph it has to be loaded from the install directory. Matching on identifier rather than
    url because the url carries a per-session dependency uid."""
    package_mgr = app.getPackageMgr()
    wanted = (package_file_path or "").replace("\\", "/").lower()
    package = None
    for candidate in safe(package_mgr.getPackages) or []:
        if (safe(candidate.getFilePath) or "").replace("\\", "/").lower() == wanted:
            package = candidate
            break
    if package is None:
        package = package_mgr.loadUserPackage(package_file_path)
    for resource in safe(lambda: package.getChildrenResources(True)) or []:
        if safe(resource.getIdentifier) == identifier:
            return resource
    return None


def build_graph(app, graph, dumped, report):
    created = {}
    for node in dumped["nodes"]:
        resource_info = node["referencedResource"]
        if resource_info:
            resource = find_resource(app, resource_info["packageFilePath"], resource_info["identifier"])
            if resource is None:
                report.append("  MISSING resource {0} in {1}".format(
                    resource_info["identifier"], resource_info["packageFilePath"]))
                continue
            new_node = safe(lambda: graph.newInstanceNode(resource))
        else:
            new_node = safe(lambda: graph.newNode(node["definitionId"]))
        if new_node is None:
            report.append("  FAILED to create {0}".format(node["definitionId"]))
            continue
        created[node["uid"]] = new_node

        position = node["position"]
        if position:
            safe(lambda: new_node.setPosition(sdbasetypes.float2(position["x"], position["y"])))

        # Values before wires: uniform's colorswitch decides whether its output is colour or
        # grayscale, and a wire into the wrong type is refused.
        for entry in node["values"]:
            if entry.get("functionDriven"):
                report.append("  SKIPPED function-driven {0}.{1}".format(node["uid"], entry["id"]))
                continue
            value = decode_value(entry["value"])
            if value is None:
                report.append("  SKIPPED unsupported {0}.{1} ({2})".format(
                    node["uid"], entry["id"], entry["value"].get("class")))
                continue
            if safe(lambda: new_node.setInputPropertyValueFromId(entry["id"], value), "failed") == "failed":
                report.append("  FAILED to set {0}.{1}".format(node["uid"], entry["id"]))

    wired = 0
    for node in dumped["nodes"]:
        source = created.get(node["uid"])
        if source is None:
            continue
        for wire in node["connections"]:
            target = created.get(wire["toNode"])
            if target is None:
                report.append("  DANGLING wire to {0}".format(wire["toNode"]))
                continue
            made = safe(lambda: source.newPropertyConnectionFromId(
                wire["fromProperty"], target, wire["toProperty"]))
            if made is None:
                report.append("  FAILED wire {0}.{1} -> {2}.{3}".format(
                    node["uid"], wire["fromProperty"], wire["toNode"], wire["toProperty"]))
            else:
                wired += 1
    return len(created), wired


# -- reporting --------------------------------------------------------------------------

def summarise(graph, packages):
    lines = []
    if graph is None:
        lines.append("graph : NONE OPEN -- open a compositing graph and run again")
        return lines
    lines.append("graph : {0} ({1}), {2} nodes".format(
        graph["identifier"], graph["className"], len(graph["nodes"])))
    lines.append("wires : {0}".format(sum(len(n["connections"]) for n in graph["nodes"])))
    lines.append("instance nodes : {0}".format(
        len([n for n in graph["nodes"] if n["referencedResource"]])))
    lines.append("")
    for node in graph["nodes"]:
        resource = node["referencedResource"]
        what = resource["identifier"] if resource else node["definitionId"]
        position = node["position"] or {"x": "?", "y": "?"}
        lines.append("  {0:<12} {1:<46} @ {2},{3}".format(
            (node["uid"] or "?")[:12], (what or "?")[:46], position["x"], position["y"]))
        for entry in node["values"]:
            lines.append("      = {0} {1}".format(
                entry["id"],
                "(function-driven)" if entry.get("functionDriven") else show_value(entry["value"])))
        for wire in node["connections"]:
            lines.append("      {0} -> {1}.{2}".format(
                wire["fromProperty"], wire["toNode"], wire["toProperty"]))
    lines.append("")
    lines.append("packages : {0}".format(len(packages)))
    for package in packages:
        lines.append("  {0}  ({1} resources)".format(
            package["filePath"] or "<unsaved>", package["resourceCount"]))
    return lines


def write(path, payload):
    os.makedirs(OUT_DIR, exist_ok=True)
    with open(path, "w", encoding="utf-8") as handle:
        json.dump(payload, handle, indent=1, ensure_ascii=False)


def main():
    app = sd.getContext().getSDApplication()
    print("Designer {0}  MODE={1}".format(safe(app.getVersion), MODE))

    if MODE == "dump":
        graph = read_graph(app)
        packages = read_packages(app)
        write(DUMP_FILE, {"graph": graph, "packages": packages})
        print("\n".join(summarise(graph, packages)))
        print("")
        print("written: {0}".format(DUMP_FILE))
        return

    if MODE != "rebuild":
        print('MODE must be "dump" or "rebuild"')
        return

    with open(DUMP_FILE, "r", encoding="utf-8") as handle:
        dumped = json.load(handle)["graph"]
    if dumped is None:
        print("{0} holds no graph -- run MODE=\"dump\" first".format(DUMP_FILE))
        return

    ui_mgr = safe(app.getUIMgr)
    graph = safe(ui_mgr.getCurrentGraph) if ui_mgr else None
    if graph is None:
        print("no graph open -- open a new empty compositing graph and run again")
        return
    existing = len(safe(graph.getNodes) or [])
    if existing:
        print("the open graph already holds {0} nodes -- open a NEW empty graph".format(existing))
        return

    report = []
    made, wired = build_graph(app, graph, dumped, report)
    print("rebuilt {0} of {1} nodes, {2} of {3} wires".format(
        made, len(dumped["nodes"]), wired,
        sum(len(n["connections"]) for n in dumped["nodes"])))
    if report:
        print("problems:")
        print("\n".join(report))
    else:
        print("no problems reported")

    rebuilt = read_graph(app)
    packages = read_packages(app)
    write(REBUILT_FILE, {"graph": rebuilt, "packages": packages})
    print("")
    print("\n".join(summarise(rebuilt, packages)))
    print("")
    print("written: {0}".format(REBUILT_FILE))


try:
    main()
except Exception:
    traceback.print_exc()
