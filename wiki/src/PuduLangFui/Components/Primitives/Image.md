---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Image.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.Image]
---

# PuduLangFui.Components.Primitives.Image

## Purpose

A framed picture.

## Interface

### Signatures

```pudu
export fn image(source: Str, description: Str, ratio: Str = "auto") -> H.Node

export fn caption() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A frame at the given ratio with a placeholder tone, holding a lazily loaded picture that covers it.

## Negative Logic (Prohibited Paths)

- ❌ Do not omit the description.

## Edge Cases

- A picture that fails to load leaves the placeholder tone at the same size.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Reuse aspect ratio?
  **A:** No. _Rationale:_ the frame also owns the placeholder, corners and caption. _Rejected:_ composing two parts for every picture.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
