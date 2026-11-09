---
type: module
path: "@root/src/PuduLangFui/Blocks/Pricing.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Blocks.Pricing]
---

# PuduLangFui.Blocks.Pricing

## Purpose

Plans side by side.

## Interface

### Signatures

```pudu
export type Plan = { name: Str, price: Str, features: Array[Str], target: Str, featured: Bool }

export fn plan(name: Str, price: Str, features: Array[Str], target: Str, featured: Bool = false) -> Plan

export fn pricing(plans: Array[Plan]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Badge]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A grid of cards from plan records.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- The grid wraps.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Highlight a plan?
  **A:** A record flag. _Rationale:_ data decides. _Rejected:_ position-based.

## Referenced by

[[src/PuduLangFui/Blocks/_MOC]] · [[src/PuduLangFui/Catalog/Catalog]]
