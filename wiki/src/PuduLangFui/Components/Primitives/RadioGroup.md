---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/RadioGroup.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.79
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.RadioGroup]
---

# PuduLangFui.Components.Primitives.RadioGroup

## Purpose

One choice among several.

## Interface

### Signatures

```pudu
export fn group(caption: Str) -> H.Node

export fn radio(name: Str, value: Str, checked: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `role=radiogroup` wrapper over native radios sharing a name
2. arrow keys come from the platform.

## Negative Logic (Prohibited Paths)

- ❌ Do not implement roving focus.

## Edge Cases

- No initial selection is allowed.

## Depth

DEPTH 0.79 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who handles arrow keys?
  **A:** The browser. _Rationale:_ native radios already do. _Rejected:_ a behavior script.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Primitives/_MOC]]
