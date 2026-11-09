---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Breadcrumb.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Breadcrumb]
---

# PuduLangFui.Components.Composites.Breadcrumb

## Purpose

Where a page sits in a hierarchy.

## Interface

### Signatures

```pudu
export type Crumb = { caption: Str, target: Str }

export fn crumb(caption: Str, target: Str) -> Crumb

export fn breadcrumb(trail: &Array[Crumb]) -> H.Node

export fn ellipsis() -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. An `ol` in a `nav` with separators hidden from assistive software
2. the last item is `aria-current=page`.

## Negative Logic (Prohibited Paths)

- ❌ Do not link the current page.

## Edge Cases

- A single item renders no separator.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Automatic separators?
  **A:** Yes. _Rationale:_ they are always between items. _Rejected:_ a separator part.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
