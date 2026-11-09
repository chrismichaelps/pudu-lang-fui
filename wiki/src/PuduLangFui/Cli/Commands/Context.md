---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Context.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Context]
---

# PuduLangFui.Cli.Commands.Context

## Purpose

What every command receives, and how an item name finds its registry.

## Interface

### Signatures

```pudu
export type Context = { directory: Str, invocation: Invocation.Invocation }

export fn locate(context: &Context, name: Str, project: Option[Project.Project]) -> Result[(Registry.Registry, Str), Str]

export fn defaultLoaded(context: &Context) -> Result[Registry.Registry, Str]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Cli/Workspace/Registry]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. A bare name uses the default registry
2. `@namespace/item` looks the namespace up in the project's table.

## Negative Logic (Prohibited Paths)

- ❌ Do not read a registry outside the configured directories.

## Edge Cases

- A namespaced name outside a set-up project answers `Err`.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Where does `--from` apply?
  **A:** To the default registry only. _Rationale:_ a namespace already says where. _Rejected:_ overriding both.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Apply]] · [[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Cli/Commands/Icons]] · [[src/PuduLangFui/Cli/Commands/Info]] · [[src/PuduLangFui/Cli/Commands/Init]] · [[src/PuduLangFui/Cli/Commands/New]] · [[src/PuduLangFui/Cli/Commands/Preset]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Commands/View]] · [[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
