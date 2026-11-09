---
type: module
path: "@root/src/PuduLangFui/Cli/Workspace/Project.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.95
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Workspace.Project]
---

# PuduLangFui.Cli.Workspace.Project

## Purpose

The project on disk: config, owned files, and the generated catalog.

## Interface

### Signatures

```pudu
export type Project = { directory: Str, config: Config.Config }

export fn load(directory: Str) -> Result[Project, Str]

export fn rootDirectory(project: &Project) -> Str

export fn writing(path: Str, text: Str) -> Result[(), Str]

export fn saveConfig(project: &Project) -> Result[(), Str]

export fn sources(directory: Str) -> Array[Str]

export fn owned(project: &Project) -> Array[Str]

export fn refreshCatalog(project: &Project) -> Result[(), Str]

export fn targetOf(project: &Project, item: &Item.Item) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Model/Config]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Scaffold]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Owned files are found by walking the project's root
2. the catalog is regenerated from them.

## Negative Logic (Prohibited Paths)

- ❌ Do not write outside the project's source root.

## Edge Cases

- An uninitialized project answers `Err` naming `init`.

## Depth

DEPTH 0.95 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Overwrite on add?
  **A:** Only with `--overwrite`. _Rationale:_ owned files hold the project's edits. _Rejected:_ always overwrite.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Info]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Cli/Workspace/_MOC]]
