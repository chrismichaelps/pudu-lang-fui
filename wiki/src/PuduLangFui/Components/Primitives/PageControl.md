---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/PageControl.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Primitives.PageControl]
---

# PuduLangFui.Components.Primitives.PageControl

## Purpose

Dots for the pages of a paged view.

## Interface

### Signatures

```pudu
export fn control(caption: Str) -> H.Node

export fn page(name: Str, index: Int, current: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. One radio per page drawn as a dot; the checked dot is the current page.

## Negative Logic (Prohibited Paths)

- ❌ Do not use it for more than about ten pages.

## Edge Cases

- Each dot is named by its page number for assistive software.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Use pagination?
  **A:** No. _Rationale:_ dots carry position only, with no links or numbers. _Rejected:_ a compact pagination variant.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
