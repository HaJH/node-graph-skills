# CLAUDE.md

## What this repo is

One Claude Code plugin, `node-graph`, holding one skill per DCC / procedural tool. A skill turns a
compact spec into two things: a node graph rendered as a self-contained HTML page, and the payload
that puts the same network back into the tool it describes.

Sibling repo, same shape, different domain:
[`unreal-graph-skills`](https://github.com/HaJH/unreal-graph-skills) — Unreal material and Niagara,
T3D, blueprintue's renderer. That one is not touched from here.

```
spec  ->  emitter  ->  tool payload
      ->  layout   ->  SVG renderer  ->  one self-contained HTML file
```

## Language

- Answers and planning: Korean.
- Code, comments, commit messages, README, SKILL.md: English.

## Structure

```
lib/            layout + SVG renderer + page shell, shared by every domain
<domain>/       emit, catalogue, theme, flow -- one directory per tool
  tools/        scripts run inside the tool itself (catalogue dumps, probes)
skills/<name>/  SKILL.md, one per tool
```

A skill is named after its tool (`substance-graph`, later `blender-graph`, `houdini-graph`,
`comfyui-graph`). The plugin name is the umbrella and never appears in a skill name — a SKILL.md
description has to name the tool explicitly or the skill will not trigger.

## Rules

- **No vendored code.** The renderer is ours. A page is tens of KB, not hundreds.
- **Node 18+ is the only requirement.** Nothing installed, nothing fetched at build time.
- **Round-trip before renderer.** A domain earns its emitter only after a hand-built network of
  around ten nodes has gone out of the tool and back in intact. Until that passes, the domain
  directory holds probes and nothing else.
- **Catalogues are generated, never transcribed.** Node ids, pin ids, pin order and types come out
  of the installed tool via a script under `<domain>/tools/`, into a generated `.mjs` table.
- `lib/layout.mjs` is copied from `unreal-graph-skills`, deliberately. Flow direction is a theme
  parameter here (`LR`/`TB`) because Houdini SOP and Nuke read top to bottom.
- The tool is the user's to drive. Claude writes the scripts; running them and reporting what came
  back is the user's step.

## Scope boundary

Node graphs where something can be pulled out and put back into the tool it came from. Not general
dataflow editors — without a way back in, a skill is just a picture generator.
