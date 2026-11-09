---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Skeleton.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Skeleton]
---

# PuduLangFui.Components.Primitives.Skeleton

## Purpose

A placeholder while content loads.

## Interface

### Signatures

```pudu
export fn skeleton() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `div` pulsing through the motion tokens.

## Negative Logic (Prohibited Paths)

- ❌ Do not expose to assistive software.

## Edge Cases

- Size comes from `.css` or a class.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Pulse under reduced motion?
  **A:** No; the duration token is zero and the shape stays. _Rationale:_ handled once in the token layer. _Rejected:_ a local media query.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
