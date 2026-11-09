---
type: module
path: "@root/src/PuduLangFui/Components/Primitives/Textarea.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.74
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Components.Primitives.Textarea]
---

# PuduLangFui.Components.Primitives.Textarea

## Purpose

Multi-line text that grows with its content.

## Interface

### Signatures

```pudu
export fn textarea(name: Str, invalid: Bool = false) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A `textarea` using `field-sizing: content`.

## Negative Logic (Prohibited Paths)

- ❌ Do not render a value through an attribute
- ❌ it is the element's text.

## Edge Cases

- Browsers without field sizing fall back to a fixed height and manual resize.

## Depth

DEPTH 0.74 (DEEP). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Grow with a script?
  **A:** No, `field-sizing`. _Rationale:_ no script. _Rejected:_ a height-measuring behavior.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Primitives/_MOC]] · [[src/PuduLangFui/Elements/PromptInput]]
