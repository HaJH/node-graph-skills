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

### Channel vocabulary

Candidate set, extracted from Designer's own PBR material definition — the `Input` properties of
`alg::materials::designer::pbr` in
`resources/documentation/pythonapi/.../mdl_alg_materials_designer_pbr.rst.txt`, 29 of them.
The map-carrying subset:

```
baseColor  normal  roughness  metallic  height  ambientOcclusion  opacity
specular  specularLevel  glossiness  emissiveColor  scattering
anisotropyLevel  anisotropyAngle  coatColor  coatNormal  coatRoughness
coatSpecularLevel  coatWeight  absorptionColor  refractionColor
```

The rest of the 29 are scalars and settings rather than channels: `heightScale`, `tiling`,
`scalarZeroValue`, `emissiveIntensity`, `refractionIOR`, `coatInheritNormal`, `absorption`,
`refraction`, `diffuse`.

**This is a candidate, not a settled table.** An MDL material's input names are the channels a
Substance material feeds, which is strong evidence, but they are not proven to be the same
strings as Designer's own usage list — `emissiveColor` against `emissive` is exactly where the
two could differ. One look at the usage dropdown, or one usage set by hand and read back, settles
it. Until then nothing is enforced against it.

## What has to change

In dependency order. Nothing here is started.

1. **Regenerate the catalogue from the install's own API documentation.**
   `sbs_compositing.rst.txt` carries all 29 definitions with their annotations, and every enum's
   value ids and labels. That makes `blendingmode=multiply` writable, removes the hardcoded
   annotation table, and drops the need to run `dump-catalog.py` inside Designer. Everything
   below sits on the catalogue, so it goes first.
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

- Whether the emitted `identifier` and `usages` actually land in Designer. The syntax is
  Designer's own, from its documentation and its shipped sample, but it has not been run.
- Whether the channel vocabulary above matches Designer's usage list.
- Where a project's manifest lives and how a build finds it.
- Whether `.sbsar` publishing belongs in this repo or in the project's own CI.
