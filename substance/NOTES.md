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

That covers leg C for this domain. `io-index.txt` is four columns, not three — `name`, `inputs`,
`outputs`, **`package`** — and the pin names in it are the real API pin ids, confirmed against a
live graph: `perlin_noise` and `clouds_2` both report their output pin as `output`, which is what
the table says.

**Its `package` column is not usable, though.** It resolves `perlin_noise` to
`noise_perlin_noise` and `clouds_2` to `noise_clouds_2`, and Designer actually instantiates
`noise_perlin_noise_v2` and `noise_clouds_2_v2`. See "Which package a library node comes from"
below for the rule that does hold.

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

## Instance nodes — settled

Read off a live graph with two library nodes placed by hand.

- **Every library node shares one definition id, `sbs::compositing::sbscompgraph_instance`.**
  It is a 30th compositing definition and it is not in the catalogue's 29, because `newNode`
  cannot create it. A library node has no identity of its own at the definition level.
- Identity is entirely in `getReferencedResource()`: `identifier` (`perlin_noise`) plus the
  package's `getFilePath()`. `getDefinition().getLabel()` gives the display name
  (`Perlin noise`).
- **The resource url is not a key.** It comes back as `pkg:///perlin_noise?dependency=1579705510`
  and that number is a per-package dependency uid in the same space as node uids. Match on
  `identifier` inside `getChildrenResources(True)`, not on a stored url.
- **A library node's output pin is `output`, not `unique_filter_output`.** That name is atomic
  filters only. Library pin ids are per-node.
- **`io-index.txt`'s pin names are the API pin ids, capitalisation and all.** Confirmed on the
  one node placed specifically to break the assumption: `blur_hq_grayscale` reads back with
  input `Source` and output `Blur_HQ`, against a table row of
  `blur_hq_grayscale | Source:gray | Blur_HQ | blur_hq`. All four fields agree, package column
  included — that column is only wrong where a hidden duplicate of the graph exists elsewhere.
- Colour and grayscale variants are **separate graph identifiers inside one package**:
  `blur_hq.sbs` declares both `blur_hq` and `blur_hq_grayscale`, and the bare name is the
  colour one.
- Placing one library node loads more than one package: `noise_perlin_noise_v2.sbs` pulled in
  `functions.sbs` (200 resources) as a transitive dependency.

## Which package a library node comes from

A graph identifier is not unique across the shipped packages — `clouds_2` is declared by
`clouds_2.sbs`, `noise_clouds_2.sbs` and `noise_clouds_2_v2.sbs`. What separates them is
**`<hideInLibrary v="1"/>`** on the graph's own attributes. The Library panel offers the one
graph that does not carry it, and that is the one `newInstanceNode` has to be pointed at.

The rule predicts every live data point: hand-placing Perlin Noise, Clouds 2 and Blur HQ
Grayscale loaded `noise_perlin_noise_v2.sbs`, `noise_clouds_2_v2.sbs` and `blur_hq.sbs`, which
are exactly the non-hidden candidates. `tools/generate-catalogue.mjs` applies it across the
install — Designer does not have to be running:

| | |
|---|---|
| 812 | graph ids across 541 `.sbs` files |
| 501 | exactly one visible package — resolvable, and what the catalogue ships |
| 310 | none visible — retired or internal, correctly not in the Library |
| 1 | more than one visible — `clamp`, declared by both `clamp.sbs` and `glow.sbs` |

**Read the whole attributes block, not a fixed window.** `<attributes>` carries an `<icon>` with
a base64 PNG in it, so it runs to 10–11 KB, and `hideInLibrary` sits after that blob. Scanning a
4 KB window finds the label and misses the flag, which silently promotes hidden legacy graphs to
visible — `shape.sbs` ("Shape (Legacy)") and `flood_fill.sbs` both read as visible that way and
turn what is actually a clean resolution into a false ambiguity.

`_v2` is a symptom, not the rule. Some `_v2` packages also rename the graph
(`anisotropic_noise` → `anisotropic_noise_v2`, `moisture_noise` → `moisture_noise_1`), which is
why the old name resolving to nothing visible is the correct answer rather than a miss.

## Values do not round-trip as text

`SDValueSerializer` has `sToString` and **no `sFromString`**. A serialised value is write-only.
Two consequences:

- A dump has to record the `SDValue` subclass name plus components pulled out of `.get()`, and
  rebuild dispatches on the class name to `sNew(struct(*components))`. `SDValueEnum` is the one
  exception — `sFromValue(typeId, int)`. Every `sdbasetypes` struct supports `__getitem__`, so
  components come out by index.
- Comparing a value against its default has to compare components, not text.
  `SDValueColorRGBA(ColorRGBA(0,0,0,1))` and `SDValueFloat4(float4(0,0,0,1))` are the same value
  and different strings, and a text comparison reports every such parameter as edited.

A definition's default is also not the value a placed node has: `$outputsize` defaults to
`int2(8,8)` on the definition and reads `int2(0,0)` on every placed node.

## Connections name their ends relative to the query

`getPropertyConnections` populates from both the output side and the input side, and both passes
return the same complete set of wires — 8 and 8 on the test network. But `SDConnection`'s two
accessors are relative to the pin queried from, not to dataflow role:

| Queried from | `getOutputProperty()` | `getInputProperty()` |
|---|---|---|
| an output pin | the queried pin (source) | the far pin (destination) |
| an input pin | the queried pin (**destination**) | the far pin (**source**) |

So reading from output pins is the direction whose names match dataflow. Reading from input pins
and trusting the names inverts every wire.

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

Passed on Designer 15.1.0 — see below. `tools/` holds the probes it was run with.

| Script | Does |
|---|---|
| `dump-catalog.py` | reads the four definition sources — done, see above |
| `generate-catalogue.mjs` | writes `catalogue.generated.mjs` from that dump plus the shipped `.sbs` packages, offline |
| `roundtrip.py` | both legs. `MODE = "dump"` reads the open graph to `sd-graph.json`; `MODE = "rebuild"` builds that file into a new empty graph and reads the result back to `sd-graph-rebuilt.json` |

One file for both legs because the value codec and the resource lookup are needed by each, and
the Python Editor runs a single pasted file with no import path.

Procedure: build a network by hand, run `"dump"`, open a **new empty** compositing graph, run
`"rebuild"` there. The gate passes when the two json files describe the same network. `rebuild`
refuses to run on a graph that already holds nodes.

The network has to contain, in about ten nodes: two library nodes **that take image inputs**, a
`blend` with all three of `source` / `destination` / `opacity` wired, a parameter moved off its
default, and an `output`.

```
perlin_noise ─── blur_hq ─┐                clouds_2 ─── levels ─── Dot
                          ├─ blend ── normal ── output
   uniform (grayscale) ───┤  (opacity)
       transformation ────┘
```

## The gate passed

Ten nodes, eight wires, three instance nodes — `perlin_noise`, `clouds_2` and
`blur_hq_grayscale`, the last carrying an image input — a `blend` with `source` / `destination` /
`opacity` all wired, three parameters off their defaults, and an `output` bridge. Dumped,
rebuilt into a new empty graph, dumped again. The two files match on every node, position,
value, wire and loaded package.

What that settled on top of the sections above:

- **`newNode('sbs::compositing::output')` works.** An output bridge is created like any other
  node; no graph output has to be declared first. Its `getDefinition().getLabel()` on a created
  node is the empty string, where the catalogue reports `Input` — one more reason not to name
  anything off a label.
- **Positions are exact.** `1189.3333740234375` came back bit for bit, so the canvas does not
  snap and a float is the right thing to store.
- Node uids are reassigned on create and carry no meaning across a round trip. Identity for any
  comparison has to be built from what a node *is* — definition or resource identifier plus
  position.

Not yet proven: whether `loadUserPackage` was actually exercised. If the rebuild ran in the
session that built the network, the three library packages were already loaded and
`find_resource` matched them in `getPackages()` without ever calling it. A shipped payload
script meets a Designer that has none of them open, so this wants one clean run after a restart.

## Next — decided, not yet built

Order: **spec schema, then the emitter, then the renderer.** The emitter goes first because the
gate left a ready-made answer key behind. `~/node-graph-harvest/sd-graph.json` is the ten-node
network; writing that same network as a spec, emitting a payload, running it and dumping again
should reproduce that file. The renderer has no such automatic check.

The catalogue is **regenerated from the installed Designer**, inside `substance/tools/`, rather
than copied from `procedural-texture-advisor` or read out of it at build time. That keeps this
repo standing on its own and follows the "catalogues are generated, never transcribed" rule.
`generate-catalogue.mjs` does it and `catalogue.generated.mjs` is the result — 261 KB, committed,
because the skill has to work without anyone running a generator.

## What the catalogue holds

`ATOMIC` keyed by short name (`blend`), `LIBRARY` keyed by graph identifier (`blur_hq_grayscale`).

Image inputs are in `<paraminputs>` after all, alongside the parameters — the DTD calls it "list
of parameters **and compositing inputs**". What separates them is the type code, and
`<isConnectable v="1"/>` marks the same set:

| Code | Meaning |
|---|---|
| 1 | colour texture |
| 2 | grayscale texture |
| 3 | either |
| 16 / 256 / 512 / 1024 / 2048 | int1, float1, float2, float3, float4 — parameters, not pins |

`<primaryInput>` on the graph holds the uid of the primary image input, which is the same idea as
`isPrimary` on an atomic definition.

Outputs are `<graphoutput>`, and their `<channels>` uses those same codes with one twist:
**colour is encoded by absence.** The value `1` never appears anywhere in the install, 988
outputs carry `2` and 825 carry nothing. `blur_hq.sbs` settles it — the colour variant omits
`<channels>`, the grayscale one carries `2`.

Some library graphs have **value outputs** rather than image ones — `min_max` returns floats,
`value_get_size` a float2. The catalogue types those `value`; they cannot take an image wire.

Library entries carry pins only, no parameters. 501 nodes with their full parameter lists would
run to megabytes for something the emitter does not need, since
`setInputPropertyValueFromId` takes an id and Designer validates it. The 29 atomic definitions do
carry their parameters, defaults included — cheap, and they are what most specs are made of.

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
