# How a project's assets accumulate

A skill that only ever pastes a fresh network into whatever is open produces work, not assets.
Run the same spec twice and you get two copies; edit the material and the spec that made it is
already a lie. Nothing compounds.

This is the shape that compounds instead. It is a decision record, not a description: most of it
is not built yet, and the table at the end says which parts are.

```
spec ──> payload ──> a named graph in a package        (replaced, not appended)
 ^                          │
 │                          ↓
 └──── dump ────── project catalogue <── scan the project's .sbs
                            │
                            │  the graph just built is now a node
                            │  the next spec can name, exactly like perlin_noise
                            ↓
                   sbscooker ──> .sbsar ──> sbsrender ──> texture maps
                                                          (no Designer, CI-able)
```

The third arrow is the one that makes a library mature. A graph the team authored has to become a
node other specs can name; until then every material starts from Designer's shipped nodes and
nothing the team learned is carried forward.

## What can and cannot be automated

Read off the install, not assumed:

| | |
|---|---|
| `sbscooker.exe`, `sbsrender.exe` | shipped — publishing `.sbs` to `.sbsar` and baking maps run headless |
| editing a graph | **only inside Designer.** `sbsmutator` is Automation Toolkit and is not in this install, so the `sd` Python API is the one way in, and a payload someone pastes stays the delivery mechanism |

So the loop is half CI-able. Authoring is a human at Designer; publishing and baking are not.

## Decisions

**The spec is the source; `.sbs` is output.** Specs are committed and reviewed, a build is
reproducible, and git carries the history of why a material changed. The cost is that hand-tuning
inside Designer is lost on the next build — which is paid for by the `dump` direction: an
existing hand-built graph, or one somebody refined in Designer, is read back out into a spec and
rejoins the system. `tools/roundtrip.py` already dumps a graph to json and the round-trip gate
proved it lossless, so this is a reshaping of code that exists rather than new ground.

**Re-running a spec replaces the whole graph.** Find the graph by identifier inside the package,
empty it, rebuild. The result always matches the spec, which is the only version anyone can
reason about. Graphs that instance it keep working, because an instance references the graph by
identifier and not by node. The rule this creates: if you tuned something in Designer, `dump`
before you rebuild.

**The naming convention is enforced by the build, not documented and hoped for.** It sits in a
data file next to the catalogue, and an output whose name is outside the vocabulary, or which
carries no usage, fails the build with a line number — the same treatment an unknown node or a
misspelled pin already gets. A project can extend the vocabulary; it cannot quietly ignore it.
Documentation nobody checks rots: this repo already had `curvature_smooth` in a SKILL.md example
for a node the Library does not offer, and only a test caught it.

## The convention

Why it earns enforcement, from `sbsrender render --help`:

- `--output-name` defaults to `{inputName}_{inputGraphUrl}_{outputNodeName}`, and
  `{outputNodeName}` **is the output's identifier**. The name in the spec is the name of the
  file that lands in the engine's content folder.
- `--input-graph-output-usage <name>` selects outputs by usage. Tag usages correctly and a bake
  step addresses channels by meaning rather than by parsing filenames.

So the identifier and the usage are not cosmetic metadata. They are the interface between the
material and everything downstream of it.

### The vocabulary, and why it has to be ours

`node substance/tools/dump-usages.mjs` reads every graph template Designer ships -- they are
plain `.sbs` files under `resources/templates` -- and reports the usage each output declares.
**54 usages across 27 templates**, and the answer is not a table to inherit:

- Base colour is called four things: `baseColor`, `diffuseColor`, `DiffuseColor`, `diffuse`.
- **30 of the 54** have an identifier that is not simply the usage lowercased. `ambientOcclusion`
  is written out as `ambientocclusion` in one template and `occlusion` in another; `height`
  appears as both `height` and `displacement`.
- `specularLevel` ships with the identifier **`speclar_level`** -- a typo, in the box, in a
  shipped template.
- **Every one of the 54 leaves the colour space unset.** Not one template writes `sRGB`.

So there is no coherent Adobe convention to adopt, which is the argument for defining ours. Two
halves, and they are not the same decision:

| | What it is | Whose vocabulary |
|---|---|---|
| **usage** | the semantic tag | **Adobe's.** `sbsrender --input-graph-output-usage` selects by it, and Painter, Sampler and the engine plugins match on these exact strings. Renaming it to something engine-flavoured throws all of that away. Pick from what the tools recognise -- the metallic-roughness set is the one to pick from -- rather than inventing strings |
| **identifier** | the name, and `{outputNodeName}` in the exported filename | **ours.** Nothing inside Substance matches on it, so this is where a project's naming lands, whatever the engine's import rules want |

Colour space: the emitter leaves it empty, which is what all 27 templates do. The
`name:components:colourspace` form stays available, but writing a colour space is departing from
what Designer itself does, not conforming to it.

### A Designer template is not needed

- A graph built from a spec has its outputs **created by the build**, identifier and usage
  included. A template contributes nothing to that path, which is the path the architecture is
  built around.
- A template would put the convention in a second place the build cannot check. That is the
  failure mode already rejected under "enforced, not documented and hoped for" -- and it is not
  hypothetical, since Adobe's own templates disagree with each other and ship a typo.
- The stock templates cannot stand in as ours either, for the same reason.
- The one path a template would help is an artist starting a graph by hand and never running a
  spec. That is covered, later and with rework, by `dump` bringing the graph into the system and
  the build then judging it. If that path stops being the exception, revisit this.

## What has to change

In dependency order.

1. ~~**Regenerate the catalogue from the install's own API documentation.**~~ **Done.**
   `generate-catalogue.mjs` reads `sbs_compositing.rst.txt`, so the whole catalogue is generated
   offline and carries annotations and 15 enum types besides. Verified by regenerating and
   diffing against the table that came out of a running Designer: identical. `blendingmode=substract`
   is writable and the hardcoded annotation list is gone.
2. **A project catalogue.** Scan a project's `.sbs` files with the same parser that reads the
   install, and merge the result with the shipped catalogue. A team graph becomes a node name.
   This is the arrow that makes the library compound, and it replaces the `use <path>` declaration
   sketched earlier — a spec should name a node, not a file path.
3. **A build target that is a named graph in a package**, replacing the current "append to
   whatever is open". `SDSBSCompGraph.sNew(package)` plus `SDResource.setIdentifier`, and on a
   re-run, find and empty rather than create.
4. **`dump`: graph to spec.** Reshape `tools/roundtrip.py`'s dump leg to emit a spec instead of
   json, so hand-built and hand-tuned graphs can enter the system.
5. **Exposed parameters and presets.** `input_value` bridges typed and defaulted, and
   `graph.newPreset` / `preset.addInput`. This is what turns a graph from a network into
   something another person can use without opening it.
6. **The convention, enforced**, once its vocabulary is confirmed.
7. **Publish and bake**, if it belongs here at all: `sbscooker` and `sbsrender` wrapped so a
   project can go from specs to texture maps without Designer.

## Not settled

- Where a project's manifest lives and how a build finds it.
- Whether `.sbsar` publishing belongs in this repo or in the project's own CI.
