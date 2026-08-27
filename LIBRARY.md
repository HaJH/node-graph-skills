# How a project's assets accumulate

A skill that only ever pastes a fresh network into whatever is open produces work, not assets.
Run the same spec twice and you get two copies; edit the material and the spec that made it is
already a lie. Nothing compounds.

This is the shape that compounds instead. It is a decision record as much as a description:
every step under "What has to change" is now built, and that list says how each was settled.

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

So there is no coherent Adobe convention to adopt **across the templates**. There is one inside a
family, though, and that is what the vocabulary is generated from: the four metallic-roughness
templates agree on all 22 of their usages and name every one of them as the usage lowercased.
Every disagreement above is between families -- `diffuseColor` is specular-glossiness, and
`speclar_level` is a typo in a template this repo does not target. See
`substance/tools/generate-outputs.mjs`, which refuses to write a table if that ever stops holding
rather than picking a spelling.

Two halves, and they are not the same decision:

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

## Where a library lives

The root is **the folder holding the library**, not the game project's top directory --
`<Project>/Resources/Substance` is exactly the shape. A build finds it by walking up from the spec
it was given, so one repository can hold several libraries and each spec resolves against its own.

**Designer already has the file that describes one, so do not invent another.** `.sbsprj` is its
project file, and the one it writes for itself
(`%LOCALAPPDATA%/Adobe/Adobe Substance 3D Designer/<version>/default_project.sbsprj`) carries the
two things a shared library needs:

```xml
<resources><urlaliases>
  <_4><path>file:///.../resources/packages</path><name>sbs</name></_4>
</urlaliases></resources>

<library><watchedpaths>
  <_2><url>sbs://</url><isrecursive>true</isrecursive><isenabled>true</isenabled></_2>
</watchedpaths></library>
```

- **An alias is how one package references another.** Across the whole install, 2018 dependencies
  are written `sbs://functions.sbs` and only 3 are a plain path. A team that declares
  `mylib -> <Project>/Resources/Substance` gets `mylib://panel_base.sbs` in every `.sbs` that
  instances it, which resolves on any machine. Without an alias the reference is a path, and a
  path is a different string on every checkout.
- **A watched path is how a graph reaches the Library panel.** `sbs://` is watched recursively,
  which is why Designer's own 501 nodes appear there. Add the library root and the team's graphs
  appear beside them, which is the same "it became a node" event the project catalogue produces
  for a spec -- one for the person browsing, one for the build.

So the split is: **`.sbsprj`, committed, holds what Designer has to know** -- the alias and the
watched path. Anything our build needs and Designer does not (which spec directory to read, where
to write the project catalogue) is ours, and it should read the alias out of the `.sbsprj` rather
than repeat it, so the mapping is declared once.

The Python API has no alias management -- `sd` exposes none -- so the `.sbsprj` is made and
edited through Designer's preferences, never by a payload. The one in use was made there and
registered there; a hand-written one has not been tried, and the skill says to make it in
Designer for that reason.

**`outputs.txt` is the one file of ours beside it, and the reason is that last sentence.**
Designer rewrites the `.sbsprj` in its own format whenever it touches the project, so anything of
ours living in there is waiting to be deleted by an application that has no idea it was meant to
be kept. The alias is read out of the `.sbsprj` because Designer owns it; the output vocabulary
is a file of ours because Designer does not know it exists.

**Settled, by Designer itself.** Registering a project whose alias points inside the project's
own folder makes Designer rewrite the path as `file:packages` -- relative to the `.sbsprj`. The
same file comes back with `<dependencies><path_storage_methods>` set to `relative` both ways. A
committed project file is portable as written.

## What has to change

In dependency order.

1. ~~**Regenerate the catalogue from the install's own API documentation.**~~ **Done.**
   `generate-catalogue.mjs` reads `sbs_compositing.rst.txt`, so the whole catalogue is generated
   offline and carries annotations and 15 enum types besides. Verified by regenerating and
   diffing against the table that came out of a running Designer: identical. `blendingmode=substract`
   is writable and the hardcoded annotation list is gone.
2. ~~**A project catalogue.**~~ **Done.** `sbs.mjs` is the one `.sbs` parser, shared by the
   catalogue generator and the build, so a graph the team wrote is described exactly as one Adobe
   shipped. Every package under the alias folder is scanned and merged, and a spec names a team
   graph the way it names `perlin_noise`. A name that clashes with a shipped node is refused
   rather than shadowed. Scan a project's `.sbs` files with the same parser that reads the
   install, and merge the result with the shipped catalogue. A team graph becomes a node name.
   This is the arrow that makes the library compound, and it replaces the `use <path>` declaration
   sketched earlier — a spec should name a node, not a file path.
3. ~~**A build target that is a named graph in a package.**~~ **Done.** Inside a library the
   payload opens or creates the package, finds the graph by identifier, empties it and rebuilds,
   then saves. A re-run converges. Emptied rather than remade so dependants keep resolving.
   Outside a library it still appends to whatever is open.
4. ~~**`dump`: graph to spec.**~~ **Done.** `tools/graph-to-spec.py` reads the open graph and
   writes the spec that rebuilds it, enums by value id and all. It drops a function-driven
   parameter and an inherited base parameter, and says which. `test/fake-designer.py` stands up
   enough of the `sd` API to run it against the gate network offline, so a mistake in it costs a
   test rather than a round trip through a person.
5. ~~**Exposed parameters and presets.**~~ **Done**, and not through `input_value` bridges as
   sketched here: a parameter is `graph.newProperty(id, type, Input)` plus a one-node function
   graph on each node parameter that follows it. `param` and `preset` lines, typed both ends, and
   both cleared with the graph so a re-run converges.
6. ~~**The convention, enforced.**~~ **Done**, and the vocabulary turned out to be generated
   rather than picked: `substance/outputs.generated.mjs` comes off Designer's metallic-roughness
   templates, which agree with each other on all 22 usages where the 27 templates together do
   not. A usage that is written has to be one of them, everywhere. Inside a library two more
   rules bite -- every output carries a usage, and its identifier is the vocabulary's -- because
   that is where an identifier becomes `{outputNodeName}` in an exported filename. A library
   widens the vocabulary in one place, `outputs.txt` beside the `.sbsprj`, and there is no
   per-spec opt-out.
7. **Publish and bake** — **split, and the half that belongs here is done.** `verify.mjs` cooks
   the `.sbs` a spec owns and reads it back with `sbsrender info`, then compares the graph name,
   exposed parameters, presets and output identifier/usage pairs against the spec. That closes
   the one gap a person stands in the middle of: the payload is pasted by hand and Designer
   writes the file, and until now nothing looked at the far side. The **bake** — resolution, bit
   depth, format, which map goes to which content folder — stays with the project, because it
   changes for reasons this repo has no view of. See "Not settled", which this settles.

## Picking this up again

Steps 1 to 6 are done, and step 7 as far as it belongs here. Each of 1 to 5 was proved inside
Designer, not just in tests; step 6 is offline by nature and is proved by the test suite and by
every spec in the live library still building under it; step 7's half was run against the live
library's real packages and found a real disagreement on its first run.

A refusal is now written to `sys.stderr`, which the Python Editor tags `[ERR]`, and raises a
`QMessageBox` parented to Designer's main window on top of that -- see "Saying no where it will
be seen" in NOTES. Both halves are in, and the box was raised from a pasted payload in Designer.

- **The roadmap and every decision behind it** are in this file.
- **What is known about Designer, and how each thing was learned**, is in
  [`substance/NOTES.md`](substance/NOTES.md) -- including five refuted crash hypotheses, kept
  because every one of them would have shipped as a fix if it had not been run.
- **How to use the skill** is in `skills/substance-graph/SKILL.md`.
- `node substance/test/run.mjs` -- 29 checks, all offline.
- `node substance/describe.mjs <node>` -- a node's pins, parameters and enum values, before
  writing a spec line.
- `node substance/build.mjs <spec>` -- add `--trace` when Designer goes down without printing.
- `node substance/verify.mjs <spec>` -- does the `.sbs` on disk still say what the spec says?
  Needs the install, since it cooks; everything else here does not.

**There is no live library any more, and that is deliberate.** Everything built in a project
folder while this was being developed -- a hand-made graph dumped to a spec, a reusable bevel
panel, a spec that instanced it, a copy of the worked example -- was scaffolding for proving the
tool, and it was removed once it had. A project's Substance folder starts empty except for its
`.sbsprj`; the first real spec is the project's to write.

Nothing in this repo depends on that folder existing. The 29 checks are offline and self
contained, and `substance/example/worn_painted_metal.spec` is the worked example that ships here.
`verify.mjs` is the one command that needs anything outside this repo, and what it needs is the
Designer install rather than any particular library.

A project's Substance folder should hold **no documentation of its own about how this works**.
That was tried and it rotted within one session: a README there restating the alias reasoning and
the naming convention went stale the moment the build started enforcing the convention, and
described as a hoped-for practice what had become a refusal. What belongs in a project is its
`.sbsprj`, its specs and its packages. How the tool works belongs here.

**The one workflow rule that is not obvious:** do not have a graph that instances the target open
in a tab when rebuilding it. The payload refuses in that case and names the graph to switch away
from.

## Settled: `.sbsar` publishing is split

The question was whether it belongs here or in the project's CI. It is both, along a line that
turned out to be sharp once the tools were actually run:

| | Whose | Why |
|---|---|---|
| **cook and read back** — is the asset still what the spec says? | **here** | `sbscooker` does not read the `.sbsprj`; it resolves Adobe's own `sbs://` and nothing else, so a library alias has to be passed as `--alias hb://<path>`. This repo is the only place that already knows that mapping, and the only place that knows what the spec claimed. |
| **bake** — resolution, bit depth, format, which map lands in which content folder | **the project** | None of it follows from the spec. It follows from the game, and it changes on the game's schedule. |

`sbsrender info` prints exactly the set a spec declares -- graph name, exposed parameters, output
identifier with its usage, preset labels -- which is what makes the first half a comparison
rather than a rewrite of Designer.

## Not settled

- Nothing at the moment.
