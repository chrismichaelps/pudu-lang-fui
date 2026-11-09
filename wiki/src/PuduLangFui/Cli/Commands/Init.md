---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Init.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Init]
---

# PuduLangFui.Cli.Commands.Init

## Purpose

Sets a project up.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Config]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Model/Scaffold]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Refuse without a manifest or if already initialized without `--force`
2. write config, theme, and catalog
3. honor `--preset` and `--root`.

## Negative Logic (Prohibited Paths)

- ❌ Do not overwrite without `--force`.

## Edge Cases

- `create` is an alias.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Add components during init?
  **A:** Items after the command are added next. _Rationale:_ one step to start. _Rejected:_ a separate call always.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
