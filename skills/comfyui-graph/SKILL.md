---
name: comfyui-graph
description: Draw a ComfyUI workflow as a real node graph on the web instead of describing it in terminal text, and emit the workflow JSON that loads into ComfyUI. Use whenever explaining or building a ComfyUI / Stable Diffusion workflow of three or more connected nodes - checkpoint into CLIP Text Encode into KSampler, img2img, LoRA, ControlNet, IP-Adapter, upscaling, inpainting - or when the user asks to see a ComfyUI workflow, wants a node setup "as a picture", asks which inputs a ComfyUI node has, or needs a workflow file to open in ComfyUI or queue through its API. Also reads a workflow saved from ComfyUI back into a spec. Not for single-node answers or advice on models, prompts and sampler settings - for that use comfyui-advisor.
---

# ComfyUI workflow on the web

Terminal text is a poor medium for a node network, and a ComfyUI workflow is worse than most:
`latent_image`, `clip_vision`, `images.image0` and `size_mode.width` are pins nobody guesses
right, and a hand-written workflow JSON gets the widget order wrong without saying so. This skill
turns a compact spec into a drawn graph on one self-contained page, plus the two files ComfyUI
takes -- the workflow the window opens, and the prompt its API runs.

## When to reach for it

Use it for a ComfyUI network of **three or more connected nodes**. Skip it for a single node, a
parameter value, or an answer with no wiring.

**`comfyui-advisor` is the other ComfyUI skill and they do different jobs.** That one is advice:
which model, what prompt, what sampler and CFG, why an image came out wrong. This one draws a
specific network and hands over something that loads. Using both in one answer is normal: work out
*what* to build with the advisor, then draw *that* with this.

## Workflow

1. Write a spec to a `.spec` file -- the scratchpad for a one-off; **in a project, beside the
   workflows it owns**, since the build writes its files next to the spec. Unsure of a node or an
   input? `node <plugin>/comfyui/describe.mjs <Node>` first -- see "Node names".
2. `node <plugin>/comfyui/build.mjs <spec>` -- the plugin root is two levels up from this file. It
   writes three files beside the spec:
   - `<spec>.json` -- the workflow in the UI format, what ComfyUI's window opens
   - `<spec>.api.json` -- the same workflow in the API format, what `/prompt` takes
   - `<spec>.html` -- the page, with the workflow under a **Copy** button
3. Publish the HTML with the Artifact tool and give the user the link. The page is the graph and
   the workflow; it has no place for prose, so why the workflow is built the way it is -- the
   denoise, the model -- goes in your reply.
4. To put it in ComfyUI: **Copy on the page, then Ctrl+V on the ComfyUI canvas.** A pasted workflow
   opens as a new tab and leaves the open one alone. Dropping `<spec>.json` on the window does the
   same.

The build needs nothing installed and no ComfyUI running. It fails loudly, with line numbers and
every problem at once, on an unknown node, an input the node does not have, a value of the wrong
type or outside its range, a combo value that is not one of its options, a required socket with
no wire, a wire between types that do not connect, and a loop -- so a clean build is a workflow
the server will accept.

**This skill is written in English; the page you build is not.** Put a `lang` line in the spec
naming the language the user is speaking (`en`, `ko`) and the page's own prose comes out in it.
Node types, input names and values stay as ComfyUI spells them in every language. `--lang <code>`
overrides for a one-off.

## Spec format

```spec
graph shield_icon
lang en

ckpt     CheckpointLoaderSimple  ckpt_name=sd_xl_base_1.0.safetensors
pos      CLIPTextEncode          text="a bronze shield on black, game icon"
neg      CLIPTextEncode          text="text, watermark, frame"
latent   EmptyLatentImage        width=1024 height=1024
sampler  KSampler                seed=1234 $control.seed=fixed steps=30 cfg=6 sampler_name=dpmpp_2m scheduler=karras
decode   VAEDecode
save     SaveImage               filename_prefix=icons/shield

ckpt    -> sampler.model
ckpt    -> pos
ckpt    -> neg
pos     -> sampler.positive
neg     -> sampler.negative
latent  -> sampler
sampler -> decode
ckpt    -> decode
decode  -> save

group "Prompt" pos neg $color="#3f789e"
```

A statement is a line. A line with `->` is a wire, one starting with `graph`, `lang` or `group`
says so, anything else is a node. `#` starts a comment where a word could start, so
`$color=#3f789e` is a colour, not a comment. Comments stay in the spec; the page does not show them.

**`graph` titles the page** and seeds the workflow's id, so a rebuild writes the same file. A word,
or a title in quotes: `graph "IP-Adapter 리스타일"`. Without one the spec's file name is used.
Give it a readable title when the page is going to be published.

**Nodes: `<name> <Type> [<input>=<value> ...]`.** The name is yours -- letters in any script,
digits and `_` -- and the type is ComfyUI's node type, not its display name: `CLIPTextEncode`, not
"CLIP Text Encode (Prompt)". The values are the node's widgets, by input name; leave one out and it
takes the node's default.

- **Values are literals**: `30`, `0.8`, `true`, `"two words"`. A word with no spaces needs no
  quotes -- `sampler_name=dpmpp_2m`, `ckpt_name=sd_xl_base_1.0.safetensors`. An INT given `2.5`, a
  STRING given a bare number, or a value past an input's min or max is refused.
- **A combo takes its value by name**, and a wrong one is answered with the values it does take.
- **A combo that names a file** -- a checkpoint, a LoRA, an input image -- takes any string. The
  files are the machine's, not the catalogue's, so the build cannot check them; one with no
  default has to be given. `LoadImage`'s upload button is written by the build; there is nothing
  to set for it.
- **Text over several lines** goes in a `"""` block, taken verbatim -- shader source, a long prompt:

  ```text
  shader  GLSLShader  size_mode=custom size_mode.width=1024 fragment_shader="""
  #version 300 es
  ...
  """
  ```

- **A dotted input is part of a V3 dynamic input.** A dynamic combo adds inputs depending on its
  value -- `size_mode=custom` adds `size_mode.width` and `size_mode.height`, and naming them under
  `size_mode=from_input` is refused. `describe.mjs` says what each option adds.

**A word starting with `$` is something only the window keeps**; the server never sees it.

| | |
|---|---|
| `$title="Stage 2 sampler"` | the title on the node's bar. It is part of the workflow, not of the page -- it shows in ComfyUI and is the node's `_meta.title` in the API file -- so write it in the language the workflow's users read, not the page's |
| `$control.seed=fixed` | what the widget does after each run: `fixed`, `increment`, `decrement`, `randomize`. Left out, it is the node's default -- `randomize` for KSampler's seed, `fixed` for `PrimitiveInt` |
| `$collapsed=true` | drawn as its title bar alone |
| `$color=` `$bgcolor=` | the node's colours, as ComfyUI stores them |

**Wires: `<from>[.<output>] -> <to>[.<input>]`.** Either pin may be left off when there is only
one way to read it: the source to its only output or the one output whose type the target takes,
the target to the one input that takes the source's type. `ckpt -> pos` is CLIP into `clip`;
`ckpt -> decode` is VAE into `vae`. Where there is more than one, the build lists them and asks.
An output is named by its name (`ckpt.CLIP`, `shader.IMAGE0`) or its index (`ckpt.1`).

- **A wire into a widget turns it into a socket**: `seed -> sampler.seed` feeds a `PrimitiveInt`
  into the seed. That widget can no longer take a value, and giving it both is refused.
- **An autogrow input takes slots as it is wired.** `BatchImagesNode` has `images.image0`,
  `images.image1`, ... -- wire `ref_a -> batch.images` and `ref_b -> batch.images` and they take
  `image0` and `image1`. A slot can be named outright too.

**Groups: `group "<title>" <node> ... [$color=]`.** A node is in one group at most. ComfyUI decides
membership by what lies inside a group's rectangle, and the layout keeps every other node outside
it, so a group survives being opened, saved and read back.

`comfyui/example/ip_adapter_restyle.spec` is the worked example: SDXL img2img steered by IP-Adapter,
two reference sheets batched and flattened by a GLSL shader, four groups -- every kind of thing
above in 21 nodes.

## Node names

**702 ComfyUI nodes and the custom node packs under `comfyui/packs/`, generated from a running
ComfyUI's `/object_info`** -- every input name, type, default, range and option is the server's.
The ComfyUI version and commit, and each pack's commit, are in the generated files and printed by
every build.

**Look a node up rather than remember it.** `node <plugin>/comfyui/describe.mjs <Node> [...]`
prints what a spec line needs -- sockets with their types, widgets with type, default, range or
options, what a dynamic combo adds, outputs:

```text
KSampler -- "KSampler" -- ComfyUI 0.46.2 -- model/sampling
  sockets   model MODEL, positive CONDITIONING, negative CONDITIONING, latent_image LATENT
  widgets
    seed          INT  (default 0, 0..18446744073709552000, control randomize)
    steps         INT  (default 20, 1..10000)
    ...
  outputs   LATENT LATENT
```

A name that is not a node is answered with the node types and display names that contain it, so
`describe.mjs sampler` lists `KSampler`, `KSamplerAdvanced`, `SamplerCustom` and the rest. The
build does the same for a typo -- `KSamplr` is answered with `KSampler`.

**What is not in the catalogue**: the paid cloud API nodes (`comfy_api_nodes`), which run on a
remote service behind an account; frontend-only nodes such as Note, Reroute and the old
PrimitiveNode, which the server does not know; and any custom node pack nobody has generated.

## Custom node packs

A pack is one generated file, `comfyui/packs/<folder>.generated.mjs`, named by the folder it is
installed under in `custom_nodes/`. Its nodes are nameable the moment the file exists, and draw in
their own colour so a reader can see what needs installing.

To add one, with ComfyUI running and the pack installed:

```text
node <plugin>/comfyui/tools/dump-object-info.mjs                       # two GETs, read-only
node <plugin>/comfyui/tools/generate-catalogue.mjs --comfyui <ComfyUI checkout> --pack <folder>
```

`--comfyui` is the folder holding `main.py`, read for the commits. A run without `--pack`
regenerates ComfyUI's own table and the packs already there -- **do that when the ComfyUI or pack
commit a project pins changes**, since node inputs change between versions. A pack that would
redefine one of ComfyUI's own nodes is refused.

## Going back into ComfyUI

**The UI file** (`<spec>.json`) is what the window opens and what the Copy button carries. Every
node gets a position from the same layout the page uses, at sizes taken from what the frontend
itself saves, and the view opens on the whole graph. The layout reads left to right in columns: a
node with no inputs -- every loader -- sits in the first column, and each other node one column
past the furthest node that feeds it.

**The API file** (`<spec>.api.json`) is for anything that queues the workflow without the window:
`POST /prompt` with `{"prompt": <the file>}`. **It is keyed by node name, not number** --
`stage_2_sampler`, `save`, so a script that changes `sampler.seed` says what it changes. The server
takes any string as a key. An untitled node's `_meta.title` is its English display name; ComfyUI
writes it in the user's locale, and the server reads neither.

**The same spec writes the same bytes** -- stable ids, LF line endings -- so a hash over the three
files holds until the spec changes.

## Getting a workflow that has no spec into the system

`node <plugin>/comfyui/tools/graph-to-spec.mjs <workflow.json> [--lang <code>]` reads a workflow
saved from the ComfyUI window and writes the spec that rebuilds it, beside the workflow. That is
the way in for a workflow built on the canvas, and the way back for one somebody changed there
after a build: save it in ComfyUI, run this, rebuild.

- **It will not replace a spec that exists without `--force`.** A spec carries comments; this writes
  none, so a refreshed spec loses them.
- **Node names come back as the spec had them.** A build keeps each node's name in its
  `properties` (`node-graph name`), which ComfyUI saves untouched, so the API keys a script uses
  survive an edit in the window. A node added on the canvas is named from its title, three words
  of it at most, or its type, numbered where one repeats -- and so is a pasted copy of a built one.
- **It refuses rather than writing a spec that builds something else**: a node the catalogue does
  not know, a muted or bypassed node, a subgraph, a node inside two groups.
- A widget with a wire on it has no value in the spec -- the wire wins, so the value it kept in the
  file is dead.

**In a project that keeps its workflows as specs**, the spec is the source and the two JSON files
are output, committed beside it so a machine without this plugin can still run them. Edit the
spec and rebuild; or edit on the canvas, save, `graph-to-spec --force`, and rebuild -- either way
the spec is what a reviewer reads.

## What the page shows

A header bar with your name and the node type (and its title, where it has one), a row per pin --
sockets down the left, outputs down the right -- the widget values under them, and wires coloured
by what they carry. Pin colours are ComfyUI's own default dark palette; a type the palette leaves
out (`INT`, `STRING`, a pack's own types) is drawn in the grey-green ComfyUI draws its wire in.
Groups are drawn as their tinted rectangles. Every socket a node has is drawn, wired or not.

## Known limits

- **No subgraphs, no muted or bypassed nodes.** A spec has no nesting and no off switch.
- **Three V3 input kinds are refused by name**: `COMFY_MATCHTYPE_V3`, `COMFY_DYNAMICGROUP_V3` and
  `COMFY_DYNAMICSLOT_V3`. A node using one cannot be written yet.
- **The upload button is written for image inputs only.** `LoadImage` grows an `upload` widget,
  verified; the audio and video loaders' are not written.
- **Positions are the layout's, not a person's.** A workflow read back and rebuilt is re-arranged.
- **A long wire runs straight.** A loader in the first column feeding a node near the end -- an
  upscale model, a VAE -- crosses the whole graph behind the nodes between, and can line up with
  one of their pins. Follow it by colour, or check the wire list in the spec.
- **A wide graph scrolls sideways inside its frame** rather than shrinking to fit.
- **Group nesting is not handled.**
- **File names are not checked**, since the catalogue does not carry the machine's files.

## Files

Paths are relative to the **plugin root** -- two levels up from this file.

| | |
|---|---|
| `comfyui/build.mjs` | CLI: spec → UI file + API file + page |
| `comfyui/describe.mjs` | CLI: what a node has -- sockets, widgets, options, outputs |
| `comfyui/spec.mjs` | the spec parser and writer, and their error messages |
| `comfyui/ui.mjs` | the UI format, read into the graph and written from it |
| `comfyui/api.mjs` | the API format, written from the graph |
| `comfyui/defs.mjs` | what a node definition says about its inputs: widget order, dynamic inputs, defaults |
| `comfyui/place.mjs` | node positions and sizes in the window |
| `comfyui/draw.mjs` | graph → the page |
| `comfyui/catalogue.mjs` | ComfyUI's nodes plus every pack under `packs/` |
| `comfyui/catalogue.generated.mjs` | ComfyUI's own nodes, generated |
| `comfyui/packs/` | one generated file per custom node pack |
| `comfyui/theme.mjs` | colours, read out of the frontend's palette |
| `comfyui/strings.mjs` | everything the page says in its own voice, per language |
| `comfyui/tools/dump-object-info.mjs` | saves `/object_info` from a running ComfyUI -- read-only |
| `comfyui/tools/generate-catalogue.mjs` | turns that into the generated tables |
| `comfyui/tools/graph-to-spec.mjs` | a saved workflow → the spec that rebuilds it |
| `comfyui/tools/roundtrip.mjs` | the round-trip gate: read, rewrite, compare either format, queue |
| `comfyui/tools/frontend.mjs` | runs the frontend's own save and export in a headless Edge -- how the gate checks against ComfyUI rather than against itself |
| `comfyui/example/ip_adapter_restyle.spec` | the worked example |
| `comfyui/test/run.mjs` | checks everything against files the frontend itself wrote |
| `comfyui/NOTES.md` | what is verified about ComfyUI, and how |
| `lib/` | layout, group layout, renderer and page shell -- shared with the other domains |
