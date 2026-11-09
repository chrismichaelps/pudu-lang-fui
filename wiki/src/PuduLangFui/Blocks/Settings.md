---
type: module
path: "@root/src/PuduLangFui/Blocks/Settings.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Blocks.Settings]
---

# PuduLangFui.Blocks.Settings

## Purpose

A settings form in sections.

## Interface

### Signatures

```pudu
export fn settings(action: Str, displayName: Str, email: Str, notifications: Bool) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Components/Primitives/Switch]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. Field sets over a save button.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- None.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Tabs for sections?
  **A:** One page. _Rationale:_ scanning beats hidden panels. _Rejected:_ tabs.

## Referenced by

[[src/PuduLangFui/Blocks/_MOC]] · [[src/PuduLangFui/Catalog/Catalog]]
