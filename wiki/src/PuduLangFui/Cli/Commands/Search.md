---
type: module
path: "@root/src/PuduLangFui/Cli/Commands/Search.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Commands.Search]
---

# PuduLangFui.Cli.Commands.Search

## Purpose

Lists and searches items.

## Interface

### Signatures

```pudu
export fn encoded(item: &Item.Item) -> Json.Json

export fn run(context: &Context.Context) -> Outcome.Outcome
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Commands/Context]] · [[src/PuduLangFui/Cli/Model/Invocation]] · [[src/PuduLangFui/Cli/Model/Item]] · [[src/PuduLangFui/Cli/Model/Outcome]] · [[src/PuduLangFui/Constants/Cli]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. Filter by query over name and description
2. apply offset and limit.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- `list` is an alias.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Fuzzy?
  **A:** Substring. _Rationale:_ predictable. _Rejected:_ ranking.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Build]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/_MOC]] · [[src/PuduLangFui/Cli/Dispatch/Router]]
