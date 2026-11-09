---
type: module
path: "@root/src/PuduLangFui/Elements/Context.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.Context]
---

# PuduLangFui.Elements.Context

## Purpose

How much of the context window a conversation has used.

## Interface

### Signatures

```pudu
export fn context(used: Int, limit: Int) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/HoverCard]] · [[src/PuduLangFui/Components/Primitives/Progress]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A short reading opens to a meter on hover.

## Negative Logic (Prohibited Paths)

- ❌ Do not divide by a zero limit.

## Edge Cases

- A zero limit shows an empty bar.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Percentage or tokens?
  **A:** Both. _Rationale:_ one for the eye, one for detail. _Rejected:_ only one.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
