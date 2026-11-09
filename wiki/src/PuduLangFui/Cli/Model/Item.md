---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Item.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Item]
---

# PuduLangFui.Cli.Model.Item

## Purpose

One addable thing, read from its source file.

## Interface

### Signatures

```pudu
export type Kind = Component | Element | PageBlock

export type Item = { name: Str, kind: Kind, layer: Str, moduleName: Str, path: Str, description: Str, dependencies: Array[Str] }

export fn descriptionOf(source: Str) -> Str

export fn dependenciesOf(source: Str, packageRoot: Str) -> Array[Str]

export fn read(layer: Str, stem: Str, path: Str, packageRoot: Str, source: Str) -> Item
```

### Linkage

- **Requires:** [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. The name is the file's kebab name, the description is the header anchor's intent, the dependencies are its imports of sibling items, and a table maps the folder to the kind.

## Negative Logic (Prohibited Paths)

- ❌ Do not trust comments as imports
- ❌ only lines beginning `import`.

## Edge Cases

- A file with no header has an empty description.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** A manifest per item?
  **A:** None; the file is the truth. _Rationale:_ nothing can drift. _Rejected:_ a metadata file.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Model/Closure]] · [[src/PuduLangFui/Cli/Model/_MOC]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Cli/Workspace/Registry]]
