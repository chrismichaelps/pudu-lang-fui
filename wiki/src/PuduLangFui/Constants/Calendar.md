---
type: module
path: "@root/src/PuduLangFui/Constants/Calendar.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.53
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Constants.Calendar]
---

# PuduLangFui.Constants.Calendar

## Purpose

Month and weekday names, month lengths, and the calendar arithmetic's epoch constants.

## Interface

### Signatures

```pudu
export const MONTHS: Array[Str]

export const WEEKDAYS: Array[Str]

export const MONTH_LENGTHS: Array[Int]

export const EPOCH_WEEKDAY: Int

export const EPOCH_OFFSET: Int
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Constants only.

## Negative Logic (Prohibited Paths)

- ❌ Do not compute these.

## Edge Cases

- None.

## Depth

DEPTH 0.53 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Localize names here?
  **A:** English defaults, with names passed in by a caller who needs others. _Rationale:_ no locale tables in the package. _Rejected:_ a bundled locale database.

## Referenced by

[[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Constants/_MOC]]
