---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Docs.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.99
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Docs]
---

# PuduLangFui.Cli.Commands.Docs

## Purpose

Prints an item's reference.

## Interface

### Signatures

```pudu
export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Commands/Search]] · [[src/PuduLangFui/Cli/Model/Closure]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Outcome]]

## Algorithm

1. Description, install command, dependencies, and exported lines.

## Negative Logic (Prohibited Paths)

- ❌ Do not reach the network.

## Edge Cases

- `--json` for tooling.

## Depth

DEPTH 0.99 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Generated from where?
  **A:** The source. _Rationale:_ always current. _Rejected:_ separate docs files.

## Referenced by

[[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
