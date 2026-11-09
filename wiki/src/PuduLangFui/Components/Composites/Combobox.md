---
type: module
path: "@root/src/PuduLangFui/Components/Composites/Combobox.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.Combobox]
---

# PuduLangFui.Components.Composites.Combobox

## Purpose

A field with suggestions.

## Interface

### Signatures

```pudu
export fn combobox(name: Str, suggestions: &Array[Str], hint: Str = "") -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Constants/WidgetScripts]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A field filters a list in a popover placed under it; arrow keys walk the list and Enter picks.

## Negative Logic (Prohibited Paths)

- ❌ Do not filter with a script.

## Edge Cases

- With nothing matching, the empty message shows.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Datalist?
  **A:** Yes. _Rationale:_ filtering and keyboard for free. _Rejected:_ a scripted listbox.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
