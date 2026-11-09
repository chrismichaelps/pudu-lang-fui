---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Collapsible.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.61
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Collapsible]
---

# PuduLangFui.Components.Primitives.Collapsible

## Purpose

Content a reader can open and close.

## Interface

### Signatures

```pudu
export fn collapsible(open: Bool = false) -> H.Node

export fn trigger() -> H.Node

export fn content() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Native `details` and `summary`
2. `::details-content` animates with `interpolate-size`.

## Negative Logic (Prohibited Paths)

- ❌ Do not toggle with a script.

## Edge Cases

- `open` renders it expanded.

## Depth

DEPTH 0.61 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Native?
  **A:** Yes. _Rationale:_ state, keyboard, and find-in-page for free. _Rejected:_ `aria-expanded` by script.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
