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

Substance is at the round-trip gate. `substance/tools/dump-catalog.py` has run: the 29 atomic
compositing nodes and their pins are settled, and it also showed that the 500-odd library nodes are
in none of the API's definition sources. `substance/tools/dump-graph.py` reads a hand-built network
back out, which is what has to survive a trip out and back before the emitter and renderer get
written. What is known about Designer so far is in [`substance/NOTES.md`](substance/NOTES.md).

## Licence

MIT — see [LICENSE](LICENSE).
