---
type: module
path: "@root/src/PuduLangFui/Theme/Audit/Contrast.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.65
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Theme.Audit.Contrast]
---

# PuduLangFui.Theme.Audit.Contrast

## Purpose

Audits every text-on-surface pairing of a palette in both modes.

## Interface

### Signatures

```pudu
export type Finding = { pairing: Str, mode: Str, ratio: Float64, required: Float64 }

export fn audit(palette: &Palette.Palette) -> Array[Finding]
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Accessibility]] · [[src/PuduLangFui/Domain/Color]] · [[src/PuduLangFui/Theme/Aspects/Palette]]

## Algorithm

1. For each named pairing and each mode, compute contrast
2. report those below 4.5 for text and 3 for borders of controls.

## Negative Logic (Prohibited Paths)

- ❌ Do not stop at the first finding.

## Edge Cases

- A passing palette answers nothing.

## Depth

DEPTH 0.65 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Audit at run time or in the suite?
  **A:** A pure function callable from either. _Rationale:_ a project's custom palette is audited by `fui doctor`. _Rejected:_ audit only the shipped presets.

## Referenced by

[[src/PuduLangFui/Cli/Commands/Doctor]] · [[src/PuduLangFui/Theme/Audit/_MOC]]
