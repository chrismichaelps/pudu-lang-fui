---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/AspectRatio.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.AspectRatio]
---

# PuduLangFui.Components.Primitives.AspectRatio

## Purpose

Holds content at a width-to-height ratio.

## Interface

### Signatures

```pudu
export fn aspectRatio(ratio: Str) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Inline `aspect-ratio`.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- Children fill the frame.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Keep this at all given native CSS?
  **A:** Yes, it names the intent and makes media fill. _Rationale:_ one call. _Rejected:_ leaving it to each project.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
