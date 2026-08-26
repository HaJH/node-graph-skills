---
name: substance-graph
description: Draw an Adobe Substance 3D Designer compositing graph as a real node graph on the web instead of describing it in terminal text. Use whenever explaining a Substance material or node network of three or more connected nodes - noise into blur into blend, warps, slope blur, tile samplers, height-to-normal chains, channel packing - or when the user asks to see a Substance graph, wants a node setup "as a picture", or asks which pins a node has and how they wire up. Also emits a Python script that builds the same network inside Designer, so the reader gets a picture and the real nodes. Not for single-node answers, parameter-value questions, or advice on how to author a material - for that use procedural-texture-advisor. Function graphs (Pixel Processor, Value Processor) and FX-Maps are out of scope.
---

# Substance graph on the web

Terminal text is a poor medium for a node network: pin-by-pin prose is slow to read and easy to
get wrong, and Substance nodes have pins like `Source`, `Blur_HQ` and `inputNodeOutput` that
nobody guesses right. This skill turns a compact spec into a drawn graph on one self-contained
page, with the Python that builds the same network inside Designer sitting under it.

## When to reach for it

Use it when describing a Substance compositing network of **three or more connected nodes**.
Skip it for a single node, a parameter value, or a conceptual answer with no wiring.

**`procedural-texture-advisor` is the other Substance skill and they do different jobs.** That
one is advice — how to author a tileable material, what a node is for, whether a node exists,
graph cost, export settings. This one draws a specific network and hands over something runnable.
Reaching for both in one answer is normal: work out *what* to build with the advisor, then draw
*that* with this.

## Workflow

1. Write a spec to a `.spec` file — the scratchpad directory is the right home.
2. `node <plugin>/substance/build.mjs <spec>` — the plugin root is two levels up from this file.
   It writes `<spec>.html` and `<spec>.py` beside the spec.
3. Publish the HTML with the Artifact tool and give the user the link.

The build fails loudly, with line numbers, on an unknown node, a pin the node does not have, a
parameter that does not exist, or a value of the wrong type — so a clean build means the graph is
structurally sound. Every problem is reported at once rather than one per run.

**This skill is written in English; the page you build is not.** Put a `lang` line in the spec
naming the language the user is speaking, and the page's own prose -- legend, notes, payload
heading, the Copy button, the library guidance -- comes out in it. `--lang <code>` overrides for
a one-off.

```
graph rough_metal
lang ko
```

`substance/strings.mjs` holds the languages; today that is `en` and `ko`. An unknown code is a
build error listing the ones that exist, never a silent fall back to English. Adding one means
adding a key with every field filled -- the test refuses a partial translation, because half a
translated page reads worse than an untranslated one.

**Only the page's own voice is translated.** Node names, pin ids, parameter names and usages stay
as Designer spells them in every language: they are what the reader types into Designer, and a
translated `unique_filter_output` would be a lie.

## Spec format

```
graph rough_metal

# nodes: <name> <type> [parameter=value ...]
noise   perlin_noise        scale=6 disorder=0.35
soft    blur_hq_grayscale
base    uniform             colorswitch=false
warp    transformation
mix     blend
out     output

# wires: <from>[.pin] -> <to>[.pin]
noise -> soft.Source
soft  -> mix.source
base  -> mix.destination
base  -> warp
warp  -> mix.opacity
mix   -> out
```

A line holding `->` is a wire, anything else with content is a node, `#` comments to end of line.
No section headers and no indentation rules. `graph <name>` is optional and titles the page.

- **The first word is your name for the node**, the second is the Substance node. Names are yours
  to pick and only have to be unique within the spec.
- **Pins may be left off either end of a wire.** The source side defaults to the node's only
  output. The target side defaults to the primary input. Where a node has more than one output —
  119 library nodes do, `flood_fill` and the `PBR_render` family among them — the build tells you
  the names and asks you to pick.
- **Values are bare literals**: `6`, `2.5`, `false`, `[0,0,0,1]`, `"text"`. The catalogue knows
  each parameter's type, so `scale=6` becomes an int and `disorder=0.35` a float; getting it the
  wrong way round is an error rather than a surprise inside Designer.
- **A dropdown parameter takes its value by name**: `blendingmode=substract`, `$tiling=no_tiling`,
  `$format=hdr_high_precision`. Get it wrong and the build lists the values that exist -- worth
  leaning on, because Designer spells the mode between `add` and `multiply` **`substract`**. The
  integer is still accepted, since a graph read back out of Designer only knows the number.
- **Base parameters work on every node**: `$outputsize`, `$format`, `$pixelsize`, `$pixelratio`,
  `$tiling`, `$randomseed`. They are not in a library node's own parameter list but they are
  settable on one.

## Naming a graph output

An `output` node stands for one of the graph's outputs, and what names it is an annotation rather
than a parameter. **The node's spec name becomes its identifier**, so `height output` arrives in
Designer called `height` instead of `output_1`. The same holds for the three input bridges.

```
height     output   usage=height
basecolor  output   usage=baseColor:RGBA:sRGB label="Base Color"
mask       output   identifier=opacity_mask usage=opacity group=Masks
```

- `usage=` is what an export preset and a material slot match on. Write the name alone and the
  components default to `RGBA` with the colour space left unset; write `name:components:colourspace`
  to set all three. **The colour space is deliberately not guessed** -- nothing shipped with
  Designer says what an unset one should be, and calling a height map sRGB would be worse than
  saying nothing. Repeat `usage=` for a second usage on the same output.
- `identifier=`, `label=`, `description=` and `group=` are the other annotations worth setting.
  They only apply to `output` and the three `input_*` bridges; anywhere else the build says so.
- Two outputs may not claim the same identifier, and the build refuses the spec if they do.

## Exposing a parameter

What turns a graph from a network into something another person can use without opening it.

```
graph panel_base
param amount float default=0.1 min=0 max=1 label="Scratch amount" group="Wear" editor=slider
param flip   bool  default=false label_true="Yes" label_false="No"

preset "Rough"  amount=0.8 flip=true
preset "Smooth" amount=0.05

scratch scratches_generator spline_width=@amount
noise   anisotropic_noise_v2 rotate=@flip
```

**It is two things, and only the first is visible.** `param` makes a property on the graph with a
default and the annotations that decide how it is drawn. Nothing inside reads it until a node
parameter is written `@name`, which puts that parameter under a one-node function graph holding a
getter -- `get_float1` for a float, `get_bool` for a bool -- whose `__constant__` names the input.
That is what Designer builds when a person exposes a parameter by hand; it was read back off a
graph where they had.

- **Types**: `float` `float2` `float3` `float4` `int` `int2` `int3` `int4` `bool` `string`.
- **Settings**: `default` in the parameter's own type, then `label`, `description`, `group`,
  `editor`, `visible_if`, `userdata` as text; `min`, `max`, `step` in the parameter's type on a
  `float` or an `int`; `clamp` and `randomizable` as true/false; `label_true` and `label_false`
  on a `bool`.
- **Both ends have to agree on the type.** A float getter cannot drive an int parameter, and
  Designer would take the wiring and quietly compute something else, so the build refuses it.
- **`min`/`max` on a vector is refused rather than guessed** -- whether Designer wants one number
  or one per component was not read off a live graph.
- An enum parameter cannot be bound yet, for the same reason.

`preset` is a named set of values for those parameters -- how somebody picks "Rough" instead of
learning what six numbers do. It can only name parameters the graph exposes.

Both are cleared and rebuilt with the graph, so a re-run converges rather than stacking a second
copy.

## Node names

**29 built-in filters and 501 library nodes, generated from an installed Designer.**
`substance/catalogue.generated.mjs` is produced by `substance/tools/generate-catalogue.mjs`, so
every pin name, pin type and package is Designer's own rather than a guess.

Built-in filters go by their short name: `blend`, `levels`, `blur`, `warp`, `directionalwarp`,
`transformation`, `normal`, `curve`, `gradient`, `distance`, `uniform`, `shuffle`, `emboss`,
`hsl`, `grayscaleconversion`, `text`, `svg`, `bitmap`, `fxmaps`, `passthrough` (the Dot),
`output`, and the three input bridges `input_color` / `input_grayscale` / `input_value`.

Library nodes go by their graph identifier — `perlin_noise`, `clouds_2`, `blur_hq`,
`blur_hq_grayscale`, `slope_blur`, `tile_sampler`, `shape`, `histogram_scan`, `flood_fill`,
`safe_transform`, `curvature_smooth_v2`, `make_it_tile_patch`. Grep the catalogue when unsure;
each entry lists its pins and their types verbatim.

**Grep rather than remember.** Designer replaces library nodes between versions and the
replacement sometimes takes a new name: the node called Curvature Smooth is `curvature_smooth_v2`
and the plain `curvature_smooth` is a retired graph the Library no longer offers, so it is not in
the catalogue at all. A name that feels obvious is worth one check before it goes in a spec.

**Colour and grayscale variants are separate nodes**, and the bare name is usually the colour
one: `blur_hq` takes colour, `blur_hq_grayscale` takes grayscale. Picking the wrong one is the
most common way a spec ends up wiring a colour texture into a grayscale pin.

**A node name is not a package name.** `blend_switch.sbs` contains `switch` and `multi_switch`
and no `blend_switch`. Always name the node, never the file.

## What the page shows

Header bar with your name and the Substance node, then a row per pin with its id, inputs down the
left and outputs down the right, values listed under them, and curved wires coloured by what they
carry. Designer draws a node as a square tile showing its own cooked texture, which a static page
cannot reproduce — so this shows pin names instead, which is the part prose is worst at anyway.

The Python payload sits under the graph with a **Copy** button. An artifact is framed
cross-origin without `clipboard-write` delegated, so `navigator.clipboard` rejects there;
`document.execCommand('copy')` is gated on the click's user activation rather than on a
permission, so the button tries that first -- synchronously, because awaiting the clipboard
promise ahead of it would spend the activation -- and the async API second. Whichever runs, the
payload is left selected, so a browser that refuses both still leaves the reader one Ctrl+C away.

## A spec inside a library

A spec on its own is a network someone pastes. A spec inside a **library** -- a folder of
Substance assets with a committed `.sbsprj` next to them -- is one asset among many, and the
page says so: where the `.sbs` goes, what alias other graphs will name it by, and the one setup
step no script can take.

The build walks up from the spec looking for a `.sbsprj`, so nothing has to be passed:

```
node <plugin>/substance/build.mjs Resources/Substance/specs/materials/rough_metal.spec
  ...
  library: F:\...\Resources\Substance
     save the graph as hb://rough_metal.sbs
```

**Why `.sbsprj` and not a manifest of our own:** Designer stores a reference from one package to
another as an alias URL, not a path -- 2018 of the install's 2021 dependencies are written
`sbs://something.sbs` and 3 are a plain path. The alias is what makes a reference survive a
different checkout, and `.sbsprj` is where an alias is declared, so the build reads it rather
than repeating it. `.sbsprj` also declares the **watched paths** that put a folder's graphs in
Designer's Library panel.

**Inside a library the payload builds a package instead of pasting into the open graph.** It
opens (or creates) `<alias folder>/<package>.sbs`, finds the graph by identifier, **empties it**
and rebuilds, then saves. So running a spec again converges on the spec instead of leaving a
second copy, which is what makes a graph something you can edit rather than only make once.
No graph has to be open when it runs.

Emptied rather than deleted and remade, because another package instancing this graph points at
the resource. Replacing the contents keeps every dependant working. **Anything changed by hand
in that graph is replaced** -- the page says so.

`package <name>` picks which `.sbs`, defaulting to the graph's own name. A package holds many
graphs and Adobe's own do -- `blur_hq.sbs` holds `blur_hq` and `blur_hq_grayscale`.

```
graph panel_base
package HBNoises
category HB/Bases
label "Panel Base"
```

The graph itself takes ten described values, all optional: `category`, `label`, `description`,
`author`, `author_url`, `tags`, `userdata` (strings), `show_in_library`, `outputs_computation`
(true/false) and `physical_size` (three numbers). Their ids came off a live graph, and three are
not what the `.sbs` format calls them -- `author_url`, `show_in_library` and `physical_size`.

**`category` is what puts a graph in the Library panel's tree.** Without one Designer still
indexes the graph -- search finds it -- but there is nowhere for it to sit, so it looks missing.
Slash separated for nesting.

**A category of your own will not appear in the panel's tree.** The tree is a fixed set of queries
compiled into Designer, sub-entries included, so only a string it already asks for files a graph
somewhere visible -- confirmed both ways: `PBR Materials/Metal` shows, a made-up one does not.
`catalogue.generated.mjs` carries `CATEGORIES`, the sixteen the install's own packages use, and
the build says so when a spec sets something outside them or nothing at all.

Setting one is optional and there is no default. The graph is indexed and searchable either way;
a spec names it regardless, so the library's
graphs land under one heading; a spec can override. `label` and `description` are the other two
worth setting, and they are what a person browsing reads.

Outside a library nothing changes: the payload is still a network to paste into whatever is open,
nothing is saved, and it offsets itself clear of what is already there.

**The library's own graphs are node names.** Every `.sbs` under the alias folder is scanned with
the same parser that reads Designer's install, so a graph the team saved there is named in a spec
exactly the way `perlin_noise` is -- nothing to register, nothing to import, the folder is the
registry. The build says how many are available:

```
  library: F:\...\Resources\Substance
     1 of its graphs are usable as node names
```

They draw in their own colour with their own legend entry, because "which of these did we write"
is worth being able to see. **A project graph may not share a name with one Designer ships** --
the build refuses it rather than shadowing, since a spec that reads one way and builds another is
worse than a rename.

**Registering the project is the human step.** The `sd` API exposes nothing for aliases, so no
payload can do it: `Edit > Preferences > Projects`, add the `.sbsprj`, restart. The page says so
whenever it finds a library.

## Getting a graph that has no spec into the system

`substance/tools/graph-to-spec.py`, pasted into the Python Editor, reads the graph Designer has
open and writes the spec that rebuilds it. That is the way in for a graph built by hand, or one
somebody refined inside Designer after a build -- dump it and it becomes reviewable, rebuildable
and nameable by the next spec.

It writes into the library's `specs/` folder when it can find one by walking up from the package,
and beside the package otherwise. Set `LANG` at the top of the file to put a `lang` line in.

**Two things it will not carry, and it says which when it drops one:**

- a parameter driven by a function rather than a constant, since the spec has no function graphs
  in it and the value would be a lie
- a base parameter left on inherit. Only one set to `Absolute` means anything, and a definition's
  default is not the value a placed node has -- `$outputsize` reads `int2(0,0)` on every node
  against a default of `int2(8,8)`, so "differs from the default" is not the test. Inheritance is.

Node names are the graph's own where it has them -- an output is named by its identifier -- and
the node type otherwise, numbered where it repeats. Rename them; they are yours.

## How it goes back into Designer

**Python, not the clipboard.** Designer has no equivalent of Unreal's T3D — copying nodes puts
nothing readable on the clipboard. The payload is a script for `Windows > Python Editor`.

It **adds to whatever graph is open** rather than making its own, and offsets itself below
anything already there, so it is safe to drop into work in progress. Library nodes load their
`.sbs` package from the install if it is not already open, so nothing has to be set up first.

## Rebuilding while an instance is selected

**The payload refuses to build a graph while an instance of it is selected in a graph view**, and
says to click an empty part of that graph first. Selecting an instance makes the parameter panel
draw the instanced graph's exposed parameters through that node; rebuilding underneath it takes
Designer down. Reproduced with the graph itself open in no view at all, so the selected instance
is the whole condition.

The refusal comes before anything is opened or created, so a refused run changes nothing. There
is no API to clear a graph view's selection, so this is as far as a script can go.

## Known limits

- **Function graphs and FX-Maps are out of scope.** Pixel Processor, Value Processor, dynamic
  parameters and FX-Map graphs are nested graphs with their own node sets and connection rules,
  and the spec has no nesting in it. A `pixelprocessor` node can appear in a graph; what is
  inside it cannot.
- **A parameter driven by a function is not carried.** The spec sets constants only.
- **`clamp` is not in the catalogue.** Two visible packages declare a graph by that name and
  nothing yet says which the Library offers. It is the only one of 812 in that state.
- **Pin colours on the page are ours, not Designer's.** The canvas palette lives in the
  application binary, not in `style.qss` or any other readable resource. They separate what a
  pin carries — colour, grayscale, either, or a plain number. The page says so itself.
- **Built-in filters draw their pins as `either`**, because that is true: they take whichever of
  colour or grayscale the graph is already carrying.
- **Node positions on the page and in Designer come from the same layout**, so the two agree, but
  neither matches a hand-arranged graph. Rearranging after pasting is expected.
- **Library node parameters are typed, not defaulted.** The catalogue carries each parameter's id
  and type but not its default value, so the build cannot tell you that a value you set is the
  one it already had.

## Files

Paths are relative to the **plugin root** — two levels up from this file.

| | |
|---|---|
| `substance/build.mjs` | CLI: spec → page + payload |
| `substance/spec.mjs` | the spec parser and its error messages |
| `substance/emit.mjs` | spec → the Designer Python payload |
| `substance/draw.mjs` | spec → the page |
| `substance/project.mjs` | finds the library a spec sits in, reads its aliases, and turns its packages into node names |
| `substance/sbs.mjs` | reads a `.sbs` package -- shared by the catalogue generator and the build |
| `substance/theme.mjs` | colours and metrics |
| `substance/strings.mjs` | everything the page says in its own voice, per language |
| `substance/catalogue.generated.mjs` | 29 built-in and 501 library nodes, with pins and types |
| `substance/tools/generate-catalogue.mjs` | regenerates that from an installed Designer |
| `substance/tools/dump-catalog.py` | reads the built-in definitions out of a running Designer -- how the catalogue's source was settled, not needed to build it |
| `substance/tools/dump-usages.mjs` | reports the usages Designer's own graph templates declare |
| `substance/tools/graph-to-spec.py` | reads the open graph and writes the spec that rebuilds it |
| `substance/tools/roundtrip.py` | the round-trip gate, both legs -- the record of how this was proved |
| `substance/example/worn_painted_metal.spec` | the worked example -- 21 nodes, four outputs, one wear mask driving basecolor and roughness |
| `substance/test/fake-designer.py` | stands up enough of the `sd` API to run the dump tool offline |
| `substance/test/run.mjs` | checks the catalogue, parser, emitter, page and this file against a graph that made the trip for real |
| `substance/NOTES.md` | what is verified about Designer, and how |
| `lib/` | `layout.mjs`, `render.mjs`, `page.mjs` — shared with the other domains |

**Regenerating the catalogue:** `node substance/tools/generate-catalogue.mjs`. It reads the
install and nothing else -- Designer does not have to be running. Do that when moving to a new
Designer version; library packages get replaced between releases and the node a name resolves to
can change with them.
