---
type: module
path: "@root/src/PuduLangFui/Components/Composites/InputOtp.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Components.Composites.InputOtp]
---

# PuduLangFui.Components.Composites.InputOtp

## Purpose

A one-time code entry.

## Interface

### Signatures

```pudu
export fn inputOtp(name: Str, length: Int = 6) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. One `input` with `autocomplete=one-time-code`
2. a repeating background draws the cells and `letter-spacing` aligns digits.

## Negative Logic (Prohibited Paths)

- ❌ Do not split into one input per digit.

## Edge Cases

- Paste and autofill work because it is one field.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** One input or many?
  **A:** One. _Rationale:_ paste, autofill, and assistive software treat it as a single value. _Rejected:_ per-digit inputs with focus scripts.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Components/Composites/_MOC]]
