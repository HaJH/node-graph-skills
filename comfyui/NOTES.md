# ComfyUI -- what is verified, and how

Everything here was read off ComfyUI 0.46.2 with frontend 1.59.6 (ComfyUI commit `10cdd126`),
or run against it. Where a claim came from reading source rather than running it, it says so.

## The round-trip gate

**Cleared.** The sample is a real project workflow -- SDXL + IP-Adapter repainting an input image
in a reference style -- cut from 55 nodes to 21 by dropping 34 of its 36 identical reference
`LoadImage` nodes. What is left still holds every kind of thing the full workflow uses:

- a custom node pack (`IPAdapterAdvanced` and its loaders, from ComfyUI_IPAdapter_plus)
- V3 autogrow inputs (`BatchImagesNode` `images.image0..`, `BatchMasksNode`, `GLSLShader`)
- a V3 dynamic combo whose value adds inputs (`GLSLShader` `size_mode=custom` -> `size_mode.width`)
- widgets with a wire on them (`KSampler.seed` from a `PrimitiveInt`, `StringReplace.replace`)
- `control_after_generate` on two widgets, with different defaults
- a 20-line multiline string (the GLSL source), titles in two scripts, collapsed nodes, groups

Its strings were made neutral before it went through -- every image is `example.png`, titles
are generic -- so `test/gate-workflow.json` can be committed. Its structure is the project's.

Procedure, every step run by `tools/frontend.mjs` and `tools/roundtrip.mjs`:

1. the frontend loads the sample and serialises it: **s0**, the ground truth
2. the frontend's own `graphToPrompt` on s0: **s0.api**, what Export (API) writes
3. the probe reads s0 into a neutral graph and writes UI and API JSON **from the graph alone**
4. the probe's API against s0.api: same, all 99 lines
5. the frontend loads the probe's UI file and serialises it (**s1**) and exports it (**s1.api**)
6. s1 against s0, as graphs: same. s1.api against s0.api: same
7. `/prompt` with the probe's API file, keyed by node name rather than id: ran, `success`, 19 s

`tools/frontend.mjs` runs the frontend in a headless Edge with a throwaway profile rather than
asking a person to load, save and export by hand. It is a probe: nothing in a build needs it.

## The two formats

**UI format** (what Save writes, what the window loads), `version: 0.4`:

- `node.inputs` lists **sockets first, then widgets**, each group in the definition's
  `input_order` (required, then optional). `CLIPTextEncode` declares `text, clip` and saves
  `clip, text`. Every widget is also an input entry, with `widget: {name}`, so it can take a wire.
- `widgets_values` follows the widget entries in that order. A widget whose definition has
  `control_after_generate` is followed by one more value, the mode (`fixed`, `increment`,
  `decrement`, `randomize`). `control_after_generate: true` defaults to `randomize`; a string
  is the default itself -- `PrimitiveInt` ships `"fixed"`.
- `image_upload: true` on an input grows a second widget after it, `upload`, type
  `IMAGEUPLOAD`, value `"image"`. The backend never sees it.
- An optional socket carries `shape: 7`.
- A widget with a wire on it keeps its last value in `widgets_values`. Nothing reads it.
- `links` rows are `[id, from node, from slot, to node, to slot, type]`; the order of the rows
  carries nothing -- the frontend rewrites it.
- On serialise the frontend adds `localized_name` to every slot and `widgets_values_named`
  (name -> value, with the mode under the single key `control_after_generate`), renumbers
  `order` into execution order, drops an empty `widgets_values`, and sorts nodes by id. None of
  that is needed on the way in: the probe wrote none of it and the reload was identical.
- Group membership is geometric. A group is a titled rectangle; the frontend recomputes which
  nodes are inside it.

**API format** (what `/prompt` takes): `{ "<key>": { class_type, inputs, _meta: { title } } }`.
A wired input is `[source key, output index]`; an unwired socket is absent; every widget is
present by name. `upload` and the control modes are absent.

- **Keys do not have to be numbers.** The backend ran a prompt keyed `stage_2_sampler`,
  `save_icon`, `참조_a`, and reported outputs under those keys.
- `_meta.title` is a node's title, or, untitled, its display name **in the user's locale** --
  the frontend wrote `체크포인트 로드` under a Korean locale. The backend does not read it.

**V3 dynamic inputs use dotted names, in both formats.** The backend expands them in
`comfy_api/latest/_io.py` (`finalize_prefix` joins with `.`), read from source:

- an autogrow `images` with template prefix `image` is `images.image0`, `images.image1`, ...
  The frontend shows the wired slots plus one empty slot after them, never fewer than the
  template's `min`.
- a dynamic combo `size_mode` is a widget whose value picks an option; that option's inputs
  appear as `size_mode.width`, `size_mode.height`.

## What `/object_info` holds

1114 nodes on this install: 65 from `nodes`, 637 from `comfy_extras`, 374 from
`comfy_api_nodes` (the paid cloud nodes, each flagged `api_node`), 37 from
`custom_nodes.ComfyUI_IPAdapter_plus`, 1 from `custom_nodes.websocket_image_save` (an example
ComfyUI ships in its own `custom_nodes`). **A custom node's `python_module` is
`custom_nodes.<folder>`**, and the folder is the name a requirements list installs it under.

- A combo is written two ways: V1 `[[...values], opts]` and V3 `["COMBO", {options: [...]}]`.
  The UI format calls both `COMBO`.
- **Combo values include the machine's files.** `ckpt_name` lists the installed checkpoints,
  `LoadImage.image` lists the input folder -- a project's reference art by file name. The dump
  stays in `harvest/`, which is not committed, for that reason.
- Hidden inputs (`PROMPT`, `EXTRA_PNGINFO`, `UNIQUE_ID`, the API nodes' auth tokens) appear in
  neither format.

## Pin colours

The frontend's palettes are plain data in its bundle (`colorPaletteTheme-*.js`, `node_slot`):
`CLIP #FFD500`, `MODEL #B39DDB`, `IMAGE #64B5F6`, `LATENT #FF9CF9` and so on in the dark
palette. Unlike Designer's, these can be read rather than chosen.
