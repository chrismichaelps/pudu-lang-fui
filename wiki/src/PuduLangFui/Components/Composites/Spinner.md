---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Spinner.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Spinner]
---

# PuduLangFui.Components.Composites.Spinner

## Purpose

An indeterminate activity indicator.

## Interface

### Signatures

```pudu
export fn spinner(caption: Str = "Loading") -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. The spinner glyph, rotated by a keyframe, with `role=status`.

## Negative Logic (Prohibited Paths)

- ❌ Do not leave it without a name.

## Edge Cases

- Label defaults to "Loading".

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Name by default?
  **A:** "Loading", overridable. _Rationale:_ an unnamed status says nothing. _Rejected:_ required label.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
