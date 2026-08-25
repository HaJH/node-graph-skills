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

An atomic node takes a definition id; a library node does not. `SDGraph.newInstanceNode` takes an
`SDResource`, so the emitter has to produce an object, not a string, and the only routes to one are

```python
package  = packageMgr.loadUserPackage(r'...\resources\packages\perlin_noise.sbs')
resource = package.findResourceFromUrl('pkg:///perlin_noise')     # or getChildrenResources(True)
node     = graph.newInstanceNode(resource)
```

or `SDPackage.getDependencies()` on the open package, when the node is already referenced there.
Whether `loadUserPackage` against the install directory is safe to lean on — and what the url
actually looks like, since the one resource seen so far came back as
`pkg:///Substance_graph?dependency=1579702555` — is what the round-trip gate has to answer.

Worked example shipped with Designer: `resources/python/samples/sample_sbs_graph.py`.

## A catalogue already exists — do not re-extract

`~/.claude/skills/procedural-texture-advisor/` holds two tables pulled out of the same install,
with the scripts that made them:

| File | What |
|---|---|
| `node-index.txt` | 24 atomic filter types, 28 Library-panel names, 779 library node names |
| `io-index.txt` | 779 rows: every library node's image inputs and outputs, each tagged colour / gray / either, **and the `.sbs` package it lives in** |
| `tools/generate-node-index.sh` | regenerates the first from `resources/packages` and `resources/tooltips` |
| `tools/generate-io-index.py` | regenerates the second by parsing the shipped `.sbs` packages |

That covers leg C for this domain, and more of it than it looked. `io-index.txt` is four columns,
not three — `name`, `inputs`, `outputs`, **`package`** — and that fourth column is the `.sbs`
filename the node lives in, already disambiguated: `perlin_noise` resolves to
`noise_perlin_noise`, not to any of `noise_perlin_noise_v2`, `perlin_noise_1`, `perlin_noise_2`
or `perlin_noise_zoom`. All 779 names are unique, so it is a complete 1:1 node → package map.

That is the hard half of what `newInstanceNode` needs, and it already exists. Only the last hop is
open — whether `loadUserPackage(<package>.sbs)` plus `findResourceFromUrl('pkg:///<name>')`
resolves, and what the url actually looks like.

The other thing the emitter needed was the atomic node ids the API uses (`sbs::compositing::blend`
form). `dump-catalog.py` answered that outright — see below.

Useful facts already settled by those tables: library nodes split into colour and grayscale
variants with no consistent rule about which one the bare name is, and a package filename is not a
node name (`blend_switch.sbs` contains `switch` and `multi_switch`, and no `blend_switch`).

## Catalogue sources

`SDDefinition` carries a node's id, label and properties;
`SDProperty` carries id, label, type, and `isConnectable` / `isVariadic` / `isPrimary`
/ `isReadOnly` / `isFunctionOnly` plus a default value. `SDValueSerializer.sToString` renders a
value as text. `SDArray` is iterable and has `__len__`.

Four places definitions can come from. `tools/dump-catalog.py` read all four against Designer
15.1.0 with an empty new document open, and the run settled which is worth keeping:

| Source | Came back with |
|---|---|
| `SDGraph.getNodeDefinitions()` | 29, all `sbs::compositing` |
| `getModuleMgr().getModules()` | 37 modules; `sbs::compositing` holds the **same 29**, `sbs::function` 85, `sbs::fxmap` 4, the other 34 are MDL and irrelevant here |
| `getSDGraphDefinitionMgr().getGraphDefinitions()` | 0 — empty, and stayed empty |
| `getPackageMgr().getPackages()` | 1, the open document itself |

So it is one source, not four: the open graph and the `sbs::compositing` module return an
identical id list, and the emitter can read either.

**Library nodes are in none of them.** `perlin_noise` and the rest ship as `.sbs` files under
`resources/packages/` — 511 at the top level, 541 counting subdirectories — and they are not
definitions at all. They are graph resources inside those files, and nothing enumerates them until
their package is loaded. `getPackages()` lists only what is open. Placing a library node makes its
package a dependency of the open one, which is the lever `tools/dump-graph.py` pulls: build a
network by hand, read it back, and the resource url an instance node points at comes out with it.

## The atomic set — settled

29 definitions, `sbs::compositing::<id>`: 24 filters, `passthrough` (the Dot), and four bridges
(`input_color`, `input_grayscale`, `input_value`, `output`). The 24 agrees with the 24
`compFilter` types already in `node-index.txt`.

- **Every output pin is `unique_filter_output`.** One output, one name, no exceptions —
  including on `output`, where it is not connectable.
- **The output bridge's input pin is `inputNodeOutput`**, and it is that node's only property.
  Every other node carries six base parameters: `$outputsize`, `$format`, `$pixelsize`,
  `$pixelratio`, `$tiling`, `$randomseed`.
- **Labels are not names.** `sbs::compositing::output` is labelled `Input`, same as the three
  input bridges. Drive naming off the id.
- Connectable inputs, `*` marking `isPrimary`:

  | Node | Inputs | Node | Inputs |
  |---|---|---|---|
  | `blend` | `source`, `destination*`, `opacity` | `emboss` | `input1*`, `inputgradient` |
  | `distance` | `mask*`, `source` | `warp` | `input1*`, `inputgradient` |
  | `dyngradient` | `input1*`, `input2` | `directionalwarp` | `input1*`, `inputintensity` |
  | `shuffle` | `input1*`, `input2` | `fxmaps` | `background*`, `inputpattern` |
  | `text`, `svg` | `background*` | `passthrough` | `input*` |
  | `valueprocessor`, `pixelprocessor` | `input` | `output` | `inputNodeOutput` |
  | `uniform`, `bitmap`, the three input bridges | none | everything else | `input1*` |

- Three inputs are variadic, and only three: `fxmaps.inputpattern`, `valueprocessor.input`,
  `pixelprocessor.input`.
- `passthrough` types its pins `bool` rather than `SDTypeTexture` — a Dot takes whatever is
  wired into it, so pin type cannot be read off the definition for that one node.

`sbs::function` (85) and `sbs::fxmap` (4 — Quadrant, Switch, Iterate, Dot) enumerate the same
way when those graphs come into scope. They are out of `v1`.

## The format, if it is ever needed

`resources/documentation/sbs_reference.md` — 732 lines, the whole `.sbs` DTD, in the box. Node
networks live under `graph/compNodes/compNode`, each with a `uid`, a `connections` list keyed by
`entry` + `connRef`, and a `compImplementation` that is one of `compFilter` (atomic),
`compInstance` (another graph, by path), `compInputBridge` or `compOutputBridge`.

## Running a script

Designer's Python Editor: `Windows > Python Editor`, paste, Run. `sd.getContext()` is the entry
point. Plugins can also be dropped in `sdplugins` / `sduserplugins`, which the round-trip does not
need.

## The round-trip gate

`tools/` holds the two halves of the "out" leg and nothing else until the gate passes.

| Script | Reads | Writes |
|---|---|---|
| `dump-catalog.py` | the four definition sources | `~/node-graph-harvest/sd-catalog.json` — done, see above |
| `dump-graph.py` | the open graph's nodes, wires, positions, non-default values | `~/node-graph-harvest/sd-graph.json` |

The network the gate is measured against is hand-built in Designer and has to contain, in about
ten nodes: at least two library nodes (an instance node is the one thing the catalogue cannot
describe), a `blend` with all three of `source` / `destination` / `opacity` wired, a node with a
parameter moved off its default, and an `output`. Anything less does not exercise the parts that
are still guesses.

A concrete network that covers all four, and nothing in it is exotic:

```
perlin_noise ─┐                     clouds_2 ─── levels ─── Dot
              ├─ blend ── normal ── output
              │  (opacity from a grayscale uniform)
transformation ┘
```

Open questions `dump-graph.py` is pointed at:

- what an instance node reports as its `definitionId`, and whether the resource `url`
  (`pkg:///name?dependency=NNNN` form) is stable or per-session. If the dependency number is
  per-session, `findResourceFromUrl` cannot be fed a stored string and `getChildrenResources`
  plus an identifier match is the only route.
- whether `getPropertyConnections` populates from the output side, the input side, or both
- whether a `float2` position round-trips exactly
- what a library node's pin ids are. `io-index.txt` has the pin *names*, but whether those are
  the ids `newPropertyConnectionFromId` takes is an assumption until an instance node is read
  back.

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
