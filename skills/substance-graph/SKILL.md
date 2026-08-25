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

**This skill is written in English; the page you build is not.** The graph title comes from the
spec's `graph` line and is an identifier, but if you add prose anywhere, write it in the language
the user is speaking. Node names, pin ids and parameter names stay as Designer spells them.

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
- **Base parameters work on every node**: `$outputsize`, `$format`, `$pixelsize`, `$pixelratio`,
  `$tiling`, `$randomseed`. They are not in a library node's own parameter list but they are
  settable on one.

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

## How it goes back into Designer

**Python, not the clipboard.** Designer has no equivalent of Unreal's T3D — copying nodes puts
nothing readable on the clipboard. The payload is a script for `Windows > Python Editor`.

It **adds to whatever graph is open** rather than making its own, and offsets itself below
anything already there, so it is safe to drop into work in progress. Library nodes load their
`.sbs` package from the install if it is not already open, so nothing has to be set up first.

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
| `substance/theme.mjs` | colours and metrics |
| `substance/catalogue.generated.mjs` | 29 built-in and 501 library nodes, with pins and types |
| `substance/tools/generate-catalogue.mjs` | regenerates that from an installed Designer |
| `substance/tools/dump-catalog.py` | reads the built-in definitions out of a running Designer |
| `substance/tools/roundtrip.py` | reads a graph out of Designer and builds one back in |
| `substance/example/worn_painted_metal.spec` | the worked example -- 21 nodes, four outputs, one wear mask driving basecolor and roughness |
| `substance/test/run.mjs` | checks the catalogue, parser, emitter, page and this file against a graph that made the trip for real |
| `substance/NOTES.md` | what is verified about Designer, and how |
| `lib/` | `layout.mjs`, `render.mjs`, `page.mjs` — shared with the other domains |

**Regenerating the catalogue:** run `tools/dump-catalog.py` inside Designer with a compositing
graph open, then `node substance/tools/generate-catalogue.mjs`. Do that when moving to a new
Designer version; library packages get replaced between releases and the node a name resolves to
can change with them.
