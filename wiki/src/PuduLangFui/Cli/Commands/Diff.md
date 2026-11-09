---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Diff.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Diff]
---

# PuduLangFui.Cli.Commands.Diff

## Purpose

Shows how owned files differ from upstream.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Closure]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Cli/Model/Rewrite]] · [[src/PuduLangFui/Cli/Workspace/Project]] · [[src/PuduLangFui/Cli/Workspace/Registry]]

## Algorithm

1. Rewrite upstream, compare, and print a unified diff.

## Negative Logic (Prohibited Paths)

- ❌ Do not change a file.

## Edge Cases

- With no name, lists which owned items differ.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Exit status when different?
  **A:** Zero. _Rationale:_ a difference is expected ownership, not failure. _Rejected:_ non-zero.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
