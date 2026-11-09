---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Add.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Add]
---

# PuduLangFui.Cli.Commands.Add

## Purpose

Copies items and their dependencies into the project.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Closure]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Model/Rewrite]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Cli/Workspace/Registry]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Resolve names, close over dependencies, rewrite each, write those absent or all with `--overwrite`, regenerate the catalog.

## Negative Logic (Prohibited Paths)

- ❌ Do not change a file on `--dry-run`.

## Edge Cases

- `@namespace/item` reads the named registry.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Partial failure?
  **A:** Resolve everything before writing anything. _Rationale:_ a misspelled name changes nothing. _Rejected:_ write as you go.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
