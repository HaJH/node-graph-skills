# node-graph-skills

Describe a node graph in a few lines, get back a real graph on a web page — and the payload that
puts it back into the tool it came from.

A [Claude Code](https://claude.com/claude-code) plugin, one skill per tool. Terminal text is a poor
medium for a node network: pin-by-pin prose is slow to read and easy to get wrong.

Sibling repo for Unreal — material and Niagara, T3D, paste with `Ctrl+V`:
[`unreal-graph-skills`](https://github.com/HaJH/unreal-graph-skills).

| Skill | Draws | Goes back in as |
|---|---|---|
| `substance-graph` | Substance 3D Designer compositing graphs | a Python script run in Designer |

[![Worn painted metal rendered as a Substance node graph: a bevelled panel grid and anisotropic noise into a height blend, scratches carved in, the height into normal into curvature into one wear mask that drives basecolor and roughness](https://hajh.github.io/node-graph-skills/preview.svg)](https://hajh.github.io/node-graph-skills/worn_painted_metal.html)

<sub>**[Open the live graph →](https://hajh.github.io/node-graph-skills/)** — every pin named
and typed, values under the node that holds them, and the Python under the graph copies into
Designer's Python Editor. The still above is
[`substance/example/worn_painted_metal.spec`](substance/example/worn_painted_metal.spec),
rebuilt from source on every push.</sub>

```
graph rough_metal

noise   perlin_noise        scale=6 disorder=0.35
soft    blur_hq_grayscale
base    uniform             colorswitch=false
mix     blend
out     output              usage=height

noise -> soft.Source
soft  -> mix.source
base  -> mix.destination
mix   -> out
```

```
node substance/build.mjs rough_metal.spec
  5 nodes, 4 wires
```

Blender Geometry Nodes, Houdini and ComfyUI are next, each starting at its own round-trip gate.

## Status

**`substance-graph` works end to end**, and every step of it has been run inside Designer rather
than only tested. A spec builds a named graph into a package and a re-run converges on it; a
graph with no spec dumps back out into one; a graph the project owns is a node the next spec can
name; and a graph can expose parameters and presets so somebody else can use it without opening
it.

Both ends are checked. A graph output's name and usage are held to a vocabulary generated from
Designer's own templates, and `verify.mjs` publishes the `.sbs` a spec owns and reads its
interface back to say whether the two still agree -- the one place a person stands in the middle
and nothing was watching.

Where that is going, what is left, and the reasoning behind each decision are in
[`LIBRARY.md`](LIBRARY.md).

```
node substance/build.mjs substance/example/worn_painted_metal.spec
node substance/describe.mjs blend blur_hq_grayscale   # pins, parameters, enum values
node substance/test/run.mjs                  # checked against the graph that made the trip
node substance/verify.mjs <spec>             # needs the install; everything else does not
```

`substance/example/worn_painted_metal.spec` is the worked example: chipped paint over brushed
steel in 21 nodes, height into normal into curvature into a wear mask that drives basecolor and
roughness both.

The catalogue of 29 built-in and 501 library nodes is generated from an installed Designer, so
every pin name and type is the tool's own. What is known about Designer, and how each piece of it
was verified, is in [`substance/NOTES.md`](substance/NOTES.md).

## Install

Clone anywhere and point Claude Code at it:

```
git clone https://github.com/HaJH/node-graph-skills.git ~/.claude/skills/node-graph
```

A plugin under your skills directory auto-loads on the next session, as `node-graph@skills-dir`
— no marketplace, no install step. The skill is then `/node-graph:substance-graph`, and it
fires on its own when a Substance network of three or more connected nodes comes up.

To try it without installing, `claude --plugin-dir ./node-graph-skills`.

Node 18+ is the only requirement. Nothing is installed, nothing is fetched at build time.
`verify.mjs` alone needs an installed Designer, since it cooks.

## Licence

MIT — see [LICENSE](LICENSE).
