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

Blender Geometry Nodes, Houdini and ComfyUI are the next domains.

## Status

**`substance-graph` works end to end**, and every step of it has been run inside Designer rather
than only tested. A spec builds a named graph into a package and a re-run converges on it; a
graph with no spec dumps back out into one; a graph the project owns is a node the next spec can
name; and a graph can expose parameters and presets so somebody else can use it without opening
it.

Where that is going, what is left, and the reasoning behind each decision are in
[`LIBRARY.md`](LIBRARY.md).

```
node substance/build.mjs substance/example/worn_painted_metal.spec
node substance/test/run.mjs                  # checked against the graph that made the trip
```

`substance/example/worn_painted_metal.spec` is the worked example: chipped paint over brushed
steel in 21 nodes, height into normal into curvature into a wear mask that drives basecolor and
roughness both.

Where this is going -- a project whose assets accumulate rather than being regenerated from
scratch each time, and the naming convention that makes them portable to an engine -- is in
[`LIBRARY.md`](LIBRARY.md).

The catalogue of 29 built-in and 501 library nodes is generated from an installed Designer, so
every pin name and type is the tool's own. What is known about Designer, and how each piece of it
was verified, is in [`substance/NOTES.md`](substance/NOTES.md).

Blender Geometry Nodes, Houdini and ComfyUI are next, each starting at its own round-trip gate.

## Licence

MIT — see [LICENSE](LICENSE).
