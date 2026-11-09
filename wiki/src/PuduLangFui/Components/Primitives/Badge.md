---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Badge.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Badge]
---

# PuduLangFui.Components.Primitives.Badge

## Purpose

A small label in seven treatments.

## Interface

### Signatures

```pudu
export type Variant = Primary | Secondary | Outline | Ghost | Link | Destructive | Success | Warning | Info

export fn badge(variant: Variant) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A span with the slot and the variant attribute.

## Negative Logic (Prohibited Paths)

- ❌ Do not use a badge as the only carrier of an error.

## Edge Cases

- Holds an icon or text.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should status colors be variants?
  **A:** Yes: success, warning, and info alongside the reference four. _Rationale:_ status is common and belongs in tokens. _Rejected:_ project-defined only.

## Referenced by

[[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/TestResults]]
