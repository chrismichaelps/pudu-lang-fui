---
type: module
path: "@root/src/PuduLangFui/Theme/Looks/Gentle.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Looks.Gentle]
---

# PuduLangFui.Theme.Looks.Gentle

## Purpose

Every part's appearance in the gentle look: soft rounded controls on tinted fields, the default.

## Interface

### Signatures

```pudu
export const RULES: Array[(Str, Str, Str, Str)]
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Data only: one rule per line, as slot, selector, declarations, and any nested conditions
2. a page emits only rules whose slot it uses.

## Negative Logic (Prohibited Paths)

- ❌ Do not edit by hand
- ❌ regenerate the table so all looks stay in step.

## Edge Cases

- A rule with nested at-rules separates them with the condition separator; dark rules appear twice, once for a forced mode and once for the system preference.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why a data table rather than style functions?
  **A:** The looks hold about a thousand rules each. _Rationale:_ data costs nothing at run phase and a page keeps only what it renders. _Rejected:_ a style chain per look, which grows run time with every link.

## Referenced by

[[src/PuduLangFui/Theme/Build/Theme]] · [[src/PuduLangFui/Theme/Looks/Catalog]] · [[src/PuduLangFui/Theme/Looks/_MOC]]
