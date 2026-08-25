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

**Substance has cleared the round-trip gate.** A ten-node network — three library nodes, a fully
wired `blend`, edited parameters, an output bridge — went out of Designer 15.1.0 through
`substance/tools/roundtrip.py`, back into a new empty graph, and out again matching on every node,
position, value and wire. That unblocks the emitter and the renderer, neither of which is written
yet. What is known about Designer is in [`substance/NOTES.md`](substance/NOTES.md).

## Licence

MIT — see [LICENSE](LICENSE).
