---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Build.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Build]
---

# PuduLangFui.Cli.Commands.Build

## Purpose

Writes the registry index.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Constants/Cli]]

## Algorithm

1. Read the registry and encode it as JSON.

## Negative Logic (Prohibited Paths)

- ❌ Do not include anything not read from a source file.

## Edge Cases

- `--output` sets the path.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Needed if the tree is the registry?
  **A:** For browsing without a checkout. _Rationale:_ an index is cheap. _Rejected:_ no index.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
