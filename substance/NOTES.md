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
| `dump-catalog.py` | reads the four definition sources — done, see above. No longer needed to build the catalogue |
| `dump-usages.mjs` | reports the usages and output identifiers Designer's own templates declare |
| `dump-graph-annotations.py` | lists what annotations a compositing graph itself carries |
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

## The spec

`spec.mjs` parses it. Node declarations and wires, nothing about layout — `lib/layout.mjs` works
positions out from the wires.

```
graph rough_metal

noise   perlin_noise        scale=6 disorder=0.35
soft    blur_hq_grayscale
base    uniform             colorswitch=false
mix     blend
out     output

noise -> soft.Source
soft  -> mix.source
base  -> mix.destination
mix   -> out
```

A line holding `->` is a wire, anything else with content is a node, `#` comments to end of line.
No section headers and no indentation rules, so nothing has to be kept in sync.

Pins may be left off either end of a wire. The source side defaults to the node's only output and
is **required** where there is more than one — 119 of the 501 library nodes have several. The
target side defaults to the primary input; every library node that takes an input has exactly one,
and `output` falls back to being the only input rather than the primary one, which it is not.

Values are written as bare literals — `6`, `2.5`, `false`, `[0,0,0,1]`, `"text"` — and the
catalogue's declared type decides the `SDValue` class. That is why the catalogue carries library
parameter types: `scale=6` on `perlin_noise` is an `int`, and nothing about the literal says so.
A type containing `::` is an enum and is written by **value id** -- `blendingmode=substract`, not
`blendingmode=2` -- because nothing about the integer says which mode it is and Designer's own
spelling is not guessable. The integer still parses, since a graph read back out of Designer only
knows the number.

Every problem in a spec is reported at once, with line numbers and the pins or parameters that do
exist, rather than one per run.

## The emitter

`emit.mjs` turns a parsed spec into a Python script to paste into the Python Editor.
`build.mjs` is the command line around it:

```
node substance/build.mjs rough_metal.spec
```

Everything the payload does was proved by the gate, and three details in it are there for
reasons that are not obvious from the code:

- **The install path is asked for, not hardcoded.** `SDApplicationPath.DefaultResourcesDir` and
  `InstallationDir` come off `SDApplication.getPath`. Which one the shipped packages sit under
  is not worth a probe round trip, so the payload tries the plausible joins and takes the first
  that exists.
- **A package already open is reused before anything is loaded.** Matching on the filename
  suffix of `getFilePath()` avoids a second copy of a package the user already has open.
- **The payload adds to the open graph rather than making its own**, which is the point of a
  spec — something to drop into work in progress. It reads the lowest `y` in the graph and
  offsets itself below that, so nothing lands on top of existing nodes.

Positions come from `lib/layout.mjs`, shared with the renderer so a drawn page and a pasted
graph agree. Longest-path layering, then barycentre sweeps; no dummy nodes, so a wire spanning
several layers passes behind whatever is between. Flow direction is a parameter — Substance
reads left to right, Houdini SOP and Nuke top to bottom.

## Tests

`node substance/test/run.mjs`. The three that carry the most weight all lean on
`test/gate-graph.json` — the network that cleared the gate, read straight out of Designer:

- every pin id, package and parameter in it still resolves against the generated catalogue.
  That is the only thing standing between a bad regeneration and a 545 KB table nobody reads.
- turning it back into a spec and emitting produces a payload whose creation and connection
  calls match it exactly. The emitter is checked against a graph known to work, not against
  its own idea of one.
- drawing that spec produces a page with every node and wire in it, no overlapping node boxes,
  and nothing fetched from outside.

A fourth checks that the spec example in `SKILL.md` parses, builds, and names nodes that are
really in the catalogue. Documentation drifts the moment nothing checks it, and that example is
the first thing anyone copies — it is how `curvature_smooth` got into a draft of that file when
the node the Library actually offers is `curvature_smooth_v2`.

Three more guard what a reader actually meets: the `SKILL.md` example parses and builds, the
worked example under `example/` still draws without overlaps and still uses a multi-output node,
and the payload button still tries both clipboard routes in the order that works.

## Done, and proved in Designer

The payload has been run: `added 10 nodes and 9 wires`. That closes the three things the offline
checks could not reach — `getPath` finding the install, `loadUserPackage` against the read-only
install directory, and `free_offset`.

## The worked example

`example/worn_painted_metal.spec` — 21 nodes, 23 wires, nine of them library nodes. Chipped paint
over brushed steel, height first: a bevelled panel grid under anisotropic noise, scratches carved
in and slope-blurred, the height into `normal`, that normal into `curvature_smooth_v2`, the
curvature scanned by `histogram_scan` into one wear mask, and that single mask driving both the
basecolor blend and the roughness blend so the chips line up across the maps. Four `output`
bridges.

It exists because `gate-graph.json` is ten nodes picked to break the emitter, which is a different
job from being read. Writing this one found nothing broken — the build's one complaint was the
right one, that `height_blend` has two outputs and the wire had to say which.

Two gaps it did surface, neither blocking:

- A 21-node graph draws 3062 px wide. The frame scrolls, so nothing breaks, but the layout has no
  notion of a page width to fold against.

## Naming graph inputs and outputs -- settled, offline

A pasted `output` node arrives as `output_1` with no usage on it, which makes the graph useless
downstream: no export preset and no material slot can find it. The fix is annotations, not input
properties.

**The install documents every definition's annotations, and nothing had to be probed for this.**
`resources/documentation/pythonapi/html/_sources/pythonapi/modules/sbs_compositing.rst.txt`
lists all 29 compositing definitions with their Input, Output **and Annotation** properties.
`sbs::compositing::output` carries nine annotations:

| Id | Type |
|---|---|
| `identifier` | `string` -- the name, the thing that is otherwise `output_1` |
| `label`, `description`, `userdata`, `group`, `visible_if` | `string` |
| `usages` | `SDTypeArray<SDTypeUsage>` |
| `mipmaps`, `format` | `int` |

The three input bridges carry the same set minus `mipmaps` and `format`, so a graph input is
named exactly the same way.

Usages are an array value, and the shape comes from Designer's own
`resources/python/samples/sample_sbs_graph.py`:

```python
usages = SDValueArray.sNew(SDTypeUsage.sNew(), 0)
usages.pushBack(SDValueUsage.sNew(SDUsage.sNew('baseColor', 'RGBA', 'sRGB')))
node.setAnnotationPropertyValueFromId('usages', usages)
```

**Run in Designer, and it works**: the worked example's four outputs arrive called `height`,
`normal`, `basecolor` and `roughness` with their usages on them, instead of `output_1`. So the
annotation route is settled, not just documented.

`SDUsage.sNew(name, components, colorSpace)`. **No shipped file says what an unset colour space
should be** -- 541 packages carry no `<usages>` block at all, because filter graphs have no
material outputs to tag. So the emitter defaults components to `RGBA` and leaves the colour space
empty rather than inventing one; a spec that cares writes `name:components:colourspace`.

That file is now the catalogue's source for the atomic half -- see below.

## What a reusable asset needs, and what is missing

Everything below was read out of the shipped `sd` package source, offline. The API supports all
of it; the skill supports none of it, which is the honest answer to "can a team distribute and
reuse these".

| Wanted | API | In the skill |
|---|---|---|
| Name an output, tag its usage | annotations, above | **yes, now** |
| Another graph used as a node | `SDGraph.newInstanceNode(resource)` -- the same call library nodes already use | no: the catalogue holds shipped nodes only, so a spec cannot name your graph |
| A new graph to put in a package | `SDSBSCompGraph.sNew(package)`, then `SDResource.setIdentifier` | no: the payload appends to the open graph and never makes one |
| Exposed input parameters | an `input_value` bridge whose `identifier` annotation names it | partly: the bridge can be placed and named, but nothing types or defaults it |
| Graph input images | `input_color` / `input_grayscale`, named the same way | same |
| Presets | `graph.newPreset(label)`, `preset.addInput(identifier, value)` | no |
| Input and output order | `reorderGraphInput` / `reorderGraphOutput` | no |
| Published `.sbsar` | outside the API surface read so far | no |

`SDGraph` extends `SDResource`, not `SDNode`, so `newProperty` is not on it: a graph's inputs
come from bridge nodes, which is why naming a bridge is the whole mechanism.

## The catalogue's atomic half comes from the install's documentation

`resources/documentation/pythonapi/html/_sources/pythonapi/modules/sbs_compositing.rst.txt`
lists all 29 compositing definitions with their Input, Output and Annotation properties -- ids,
flags (`CONNECTABLE`, `PRIMARY`, `VARIADIC`, `FUNCTION_ONLY`, `READ_ONLY`), types and defaults --
and then every `SDTypeEnum` with its **value ids and the integers behind them**.

`generate-catalogue.mjs` reads it instead of `dump-catalog.py`'s json, which means the whole
catalogue is now generated **offline**: nothing has to be run inside Designer to rebuild it.

**Proved equivalent, not assumed.** Regenerating from the documentation and comparing against the
committed table read out of a running Designer: `ATOMIC` identical, `LIBRARY` identical. The only
difference was a parameter with no default, which the dump wrote as `null` and the parser was
omitting. So the documentation reproduces the API exactly, and carries two things the dump never
collected:

- **Annotations**, which is how a graph input or output is named. Only the four bridges have any,
  so the parser no longer needs a hardcoded list of which nodes they apply to -- the catalogue
  says.
- **15 enum types, 72 values.** `blendingmode` runs `copy add substract multiply addsub max min
  switch divide overlay screen softlight` -- note `substract`, which is Adobe's spelling and the
  reason writing these by name matters.

`dump-catalog.py` is kept because it is the record of how the four definition sources were
compared, but nothing needs it to build.

## Designer writes a relative alias by itself

The open question about a committed `.sbsprj` -- that Designer writes alias paths as
`file:///F:/...`, which no other checkout can use -- answered itself. Registering a project whose
alias points inside the project's own folder makes Designer rewrite it:

```xml
<_1 prefix="_"><path>file:packages</path><name>hb</name></_1>
```

`file:packages`, relative to the `.sbsprj`. The same file also came back carrying
`<dependencies><path_storage_methods>` set to `relative` both ways. So a committed project file
is portable without a trick, and `project.mjs` resolves both forms.

## A graph needs a category or the Library panel hides it

Built into a package and saved, a graph turned up in the Library panel's **search** but not in
its **tree**, and the alias heading did not appear at all. The panel files a graph under its
`category` attribute, and a graph built by the payload had none -- so it was indexed with nowhere
to sit.

Adobe's own carry both: `3d_perlin_noise` is `category = Generator`, `label = 3D Perlin noise`;
`blur_hq` is `Filter` / `Blur HQ color`. The format reference lists a graph's attributes as
`category`, `label`, `author`, `tags`, `description`, `usertags`, `physicalSize`, and category is
"slash separated strings", which is how the tree nests.

`SDGraph` extends `SDResource`, which has `setAnnotationPropertyValueFromId`, so these are
settable the same way a node's are. **The annotation ids are taken from the format reference and
not yet confirmed against the API** -- for an output node the two used the same words, but that
is one data point. `tools/dump-graph-annotations.py` lists what a graph really carries.

Until it is confirmed, the payload sets the description **before it empties the graph**, so an id
the API does not have raises on a graph nothing has been done to yet.

## The Copy button

`lib/page.mjs`. Tries `document.execCommand('copy')` first and synchronously — awaiting
`navigator.clipboard.writeText` ahead of it would spend the click's user activation — then the
async API, and leaves the payload selected either way so Ctrl+C always still works.

**Verified on a top-level page**: clicking Copy and pasting back into the same page returns all
11546 characters of the payload.

**Not verified inside an artifact**: the button reports `Copied` there, which means `execCommand`
returned true, but whether the system clipboard actually received it is untested. The browser
automation available here keeps a clipboard that does not survive a navigation or a tab switch —
a copy proven to work on one page pastes empty on the next — so no cross-page check through it
means anything, in either direction. One human click in a published artifact followed by a paste
into Designer settles it.

## Next

Two open questions, both above: whether the artifact Copy button reaches the system clipboard,
and whether the emitted `identifier` and `usages` land as intended in Designer. Beyond that the
outstanding work is the reuse table above -- subgraphs, exposed parameters, presets. The remaining work in this repo is other domains — Blender
Geometry Nodes, Houdini, ComfyUI — each of which starts at its own round-trip gate.

Worth doing here eventually, none of it blocking:

- `clamp` is the one graph id of 812 with two visible packages (`clamp.sbs` and `glow.sbs`) and
  is left out of the catalogue until something disambiguates it.
- Function graphs and FX-Maps are still out of scope, and the spec has no nesting to hold them.
- Library parameter defaults are not carried, so the build cannot say that a value being set is
  the one the node already had.

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
