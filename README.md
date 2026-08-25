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

Early. Nothing builds yet.

**Substance has cleared the round-trip gate** — a ten-node network went out of Designer 15.1.0,
back into an empty graph and out again, matching on every node, position, value and wire.

Since then: a generated catalogue of 29 atomic and 501 library nodes, the spec format and its
parser, and the emitter.

```
node substance/build.mjs rough_metal.spec    # -> rough_metal.py, paste into the Python Editor
node substance/test/run.mjs                  # 6 checks, against the graph that cleared the gate
```

Still to write: the SVG renderer and the page shell, and the skill itself. What is known about
Designer is in [`substance/NOTES.md`](substance/NOTES.md).

## Licence

MIT — see [LICENSE](LICENSE).
