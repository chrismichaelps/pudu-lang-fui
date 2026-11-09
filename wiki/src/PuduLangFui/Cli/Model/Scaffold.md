---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Scaffold.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.96
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Scaffold]
---

# PuduLangFui.Cli.Model.Scaffold

## Purpose

Fills templates for the theme, the catalog, and a new component.

## Interface

### Signatures

```pudu
export fn theme(root: Str, preset: Str) -> Str

export fn camel(name: Str) -> Str

export fn component(root: Str, moduleName: Str, name: Str) -> Str

export fn catalog(root: Str, modules: &Array[(Str, Str)]) -> Str
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Templates]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. Replace placeholders in the template lines
2. the catalog lists each owned module.

## Negative Logic (Prohibited Paths)

- ❌ Do not read files.

## Edge Cases

- An empty catalog is a valid module.

## Depth

DEPTH 0.96 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Regenerate the catalog?
  **A:** After every add. _Rationale:_ it is derived. _Rejected:_ asking users to edit it.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Model/_MOC]] · [[src/PuduLangFui/Cli/Workspace/Project]]
