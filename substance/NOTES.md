# Substance 3D Designer — what is verified

Read against an installed Designer at `C:\Program Files\Adobe\Adobe Substance 3D Designer`.
Every path below is relative to that install directory.

## The way back in

**Python, not the clipboard.** Designer has no equivalent of Unreal's T3D: copying nodes does not
put a readable network on the clipboard. The only text the clipboard carries is a parameter preset
in `SBSPRS` form, which is values for one node, not a network.

Two routes exist instead, and this repo takes the first:

| Route | Cost |
|---|---|
| `sd` Python API into the open graph | node uids, package GUIDs and dependency entries are Designer's problem |
| `.sbs` XML assembled by hand | every uid, `fileUID`, `versionUID` and dependency entry is ours, and the result is always a new package rather than a merge |

The API creates and wires nodes directly:

```python
node = graph.newNode('sbs::compositing::blend')
node.setPosition(float2(x, y))
node.setInputPropertyValueFromId('outputcolor', SDValueColorRGBA.sNew(ColorRGBA(...)))
src.newPropertyConnectionFromId('unique_filter_output', node, 'source')
```

`app.getUIMgr().getCurrentGraph()` returns the graph the user is looking at, so a payload lands in
the open graph rather than in a new package.

Worked example shipped with Designer: `resources/python/samples/sample_sbs_graph.py`.

## A catalogue already exists — do not re-extract

`~/.claude/skills/procedural-texture-advisor/` holds two tables pulled out of the same install,
with the scripts that made them:

| File | What |
|---|---|
| `node-index.txt` | 24 atomic filter types, 28 Library-panel names, 779 library node names |
| `io-index.txt` | every library node's image inputs and outputs, each tagged colour / gray / either |
| `tools/generate-node-index.sh` | regenerates the first from `resources/packages` and `resources/tooltips` |
| `tools/generate-io-index.py` | regenerates the second by parsing the shipped `.sbs` packages |

That covers leg C for this domain. What the emitter still needs and those tables do not carry is
the mapping from a library node name to the identifier `newInstanceNode` wants, and the atomic
node ids the API uses (`sbs::compositing::blend` form) — `dump-catalog.py` is what answers both.

Useful facts already settled by those tables: the atomic set is 24 `compFilter` types plus the
input/output bridges and `svg`; library nodes split into colour and grayscale variants with no
consistent rule about which one the bare name is; and a package filename is not a node name
(`blend_switch.sbs` contains `switch` and `multi_switch`, and no `blend_switch`).

## Catalogue sources

`SDDefinition` carries a node's id, label and properties;
`SDProperty` carries id, label, type, and `isConnectable` / `isVariadic` / `isPrimary`
/ `isReadOnly` / `isFunctionOnly` plus a default value. `SDValueSerializer.sToString` renders a
value as text. `SDArray` is iterable and has `__len__`.

Four places definitions can come from, dumped together by `tools/dump-catalog.py` because which one
carries the library nodes is not yet settled:

- `SDGraph.getNodeDefinitions()` — what the open graph can create
- `SDApplication.getModuleMgr().getModules()` → `SDModule.getDefinitions()`
- `SDApplication.getSDGraphDefinitionMgr().getGraphDefinitions()`
- `SDApplication.getPackageMgr().getPackages()` → `SDPackage.getChildrenResources(True)`

Library nodes themselves ship as 513 `.sbs` packages under `resources/packages/`.

## The format, if it is ever needed

`resources/documentation/sbs_reference.md` — 732 lines, the whole `.sbs` DTD, in the box. Node
networks live under `graph/compNodes/compNode`, each with a `uid`, a `connections` list keyed by
`entry` + `connRef`, and a `compImplementation` that is one of `compFilter` (atomic),
`compInstance` (another graph, by path), `compInputBridge` or `compOutputBridge`.

## Running a script

Designer's Python Editor: `Windows > Python Editor`, paste, Run. `sd.getContext()` is the entry
point. Plugins can also be dropped in `sdplugins` / `sduserplugins`, which the round-trip does not
need.

## What is not covered

`v1` draws Substance compositing graphs only. Function graphs (Pixel Processor, Value Processor,
dynamic parameters) and FX-Map graphs are both nested graphs with their own node sets and
connection rules, and the spec schema has no nesting in it.

## No renderer exists

There is no web renderer for `.sbs`. [Materia](https://github.com/Metric/Materia) is the only open
source alternative to Designer and it is a pre-alpha C# desktop application, not something to
render a page with. The SVG renderer in `lib/` is therefore ours to write.

A Designer node is a square tile showing its own rendered texture, which a static page cannot
reproduce without cooking the texture. Nodes are drawn Unreal-style instead — header bar, named
pins, curved wires — with Designer's own type colours on the pins and wires.
