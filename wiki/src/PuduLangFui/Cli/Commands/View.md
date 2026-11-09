---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/View.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.View]
---

# PuduLangFui.Cli.Commands.View

## Purpose

Prints an item's source.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Closure]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Resolve and print.

## Negative Logic (Prohibited Paths)

- ❌ Do not write.

## Edge Cases

- Several items print in order.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Rewritten or upstream?
  **A:** Upstream. _Rationale:_ it is what the registry holds. _Rejected:_ rewritten preview.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
