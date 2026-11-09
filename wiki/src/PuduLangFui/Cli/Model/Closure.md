---
type: module
path: "@root/src/PuduLangFui/Cli/Model/Closure.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.98
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Cli.Model.Closure]
---

# PuduLangFui.Cli.Model.Closure

## Purpose

Everything an item needs, dependencies first.

## Interface

### Signatures

```pudu
export fn find(items: &Array[Item.Item], name: Str) -> Option[Item.Item]

export fn closure(items: &Array[Item.Item], names: &Array[Str]) -> Result[Array[Item.Item], Array[Str]]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Model/Item]]

## Algorithm

1. Depth-first walk with a visited set, appending each item after its dependencies.

## Negative Logic (Prohibited Paths)

- ❌ Do not loop on a cycle.

## Edge Cases

- An unknown name answers `Err`.

## Depth

DEPTH 0.98 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Order?
  **A:** Dependencies first. _Rationale:_ partial failures leave a compiling tree. _Rejected:_ arbitrary order.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Add]] · [[src/PuduLangFui/Cli/Commands/Diff]] · [[src/PuduLangFui/Cli/Commands/Docs]] · [[src/PuduLangFui/Cli/Commands/View]] · [[src/PuduLangFui/Cli/Model/_MOC]]
