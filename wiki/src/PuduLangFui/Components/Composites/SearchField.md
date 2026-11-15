---
type: module
path: "@root/src/PuduLangFui/Components/Composites/SearchField.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.60
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.SearchField]
---

# PuduLangFui.Components.Composites.SearchField

## Purpose

A field for a query.

## Interface

### Signatures

```pudu
export fn field(name: Str, hint: Str, action: Str = "") -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]] · [[src/PuduLangFui/Components/Primitives/Icon]]

## Algorithm

1. A search form holding a leading glyph, a search input and a reset button shown only while the input has text.

## Negative Logic (Prohibited Paths)

- ❌ Do not nest it inside another form.

## Edge Cases

- An empty field hides its clear button without a script.

## Depth

DEPTH 0.60 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Clear by script?
  **A:** No, a reset button. _Rationale:_ the form already knows how to empty its field. _Rejected:_ a click handler.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
