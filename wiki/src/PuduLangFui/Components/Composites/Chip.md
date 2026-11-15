---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Chip.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Chip]
---

# PuduLangFui.Components.Composites.Chip

## Purpose

A compact label that may be chosen or removed.

## Interface

### Signatures

```pudu
export fn chip() -> H.Node

export fn choice(name: Str, value: Str, chosen: Bool = false) -> H.Node

export fn remove(caption: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Components/Primitives/Icon]]

## Algorithm

1. A pill; a choice wraps a checkbox so the chip reads as pressed when checked; a remove button sits at its end.

## Negative Logic (Prohibited Paths)

- ❌ Do not use a chip for a status count.

## Edge Cases

- A removable chip keeps its label reachable before its button.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Fold into badge?
  **A:** No. _Rationale:_ a chip is acted on, a badge is read. _Rejected:_ badge variants.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
