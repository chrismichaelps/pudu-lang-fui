---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Rewrite.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.95
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Rewrite]
---

# PuduLangFui.Cli.Model.Rewrite

## Purpose

Turns a package's source into a project's source.

## Interface

### Signatures

```pudu
export fn rewrite(source: Str, packageRoot: Str, projectRoot: Str) -> Str

export fn folderOf(layer: Str) -> Str

export fn moduleOf(projectRoot: Str, layer: Str, stem: Str) -> Str
```

### Linkage

- **Requires:** (none)

## Algorithm

1. On `module` and `import` lines only, replace the package's component prefixes with the project's root.

## Negative Logic (Prohibited Paths)

- ❌ Do not touch strings or comments.
- ❌ Do not rewrite `Core`, `Domain`, or `Theme` imports.

## Edge Cases

- A registry with another root works the same way.

## Depth

DEPTH 0.95 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Which imports move?
  **A:** Only components, elements, and blocks. _Rationale:_ the rest is the dependency that keeps receiving fixes. _Rejected:_ copying the whole package.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Model/_MOC]]
