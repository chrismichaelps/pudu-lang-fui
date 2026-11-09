---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Carousel.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Carousel]
---

# PuduLangFui.Components.Composites.Carousel

## Purpose

Content scrolling one slide at a time.

## Interface

### Signatures

```pudu
export fn carousel(id: Str, caption: Str, slides: Array[H.Node]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/WidgetScripts]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Slides sit on native scroll snap; two arrows move one view and disable themselves at either end.

## Negative Logic (Prohibited Paths)

- ❌ Do not move slides with a script.

## Edge Cases

- A single slide disables both arrows.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Autoplay?
  **A:** No. _Rationale:_ an accessibility hazard. _Rejected:_ a timed behavior.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
