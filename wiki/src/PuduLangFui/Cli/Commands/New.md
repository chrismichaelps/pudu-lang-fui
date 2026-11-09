---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/New.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.New]
---

# PuduLangFui.Cli.Commands.New

## Purpose

Scaffolds a new component owned by the project.

## Interface

### Signatures

```pudu
export fn isKebab(name: Str) -> Bool

export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Model/Scaffold]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. Fill the template at the requested layer
2. a table maps the layer word to its folder
3. regenerate the catalog.

## Negative Logic (Prohibited Paths)

- ❌ Do not overwrite.

## Edge Cases

- Names must be kebab case.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Layer default?
  **A:** Primitive. _Rationale:_ most new parts are leaves. _Rejected:_ required flag.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
