---
type: module
path: "@root/src/PuduLangFui/Theme/Aspects/Motion.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.97
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [PuduLangFui.Theme.Aspects.Motion]
---

# PuduLangFui.Theme.Aspects.Motion

## Purpose

The motion aspect: durations and easings, and three moods.

## Interface

### Signatures

```pudu
export type Mood = Snappy | Calm | Still

export type Motion = {
  durationFast: Str,
  durationBase: Str,
  durationSlow: Str,
  easeStandard: Str,
  easeEnter: Str,
  easeExit: Str
} derives Tokens.Tokens

export fn of(mood: Mood) -> Motion
```

### Linkage

- **Requires:** [[src/PuduLangFui/Theme/Base/Tokens]]

## Algorithm

1. A mood picks the durations
2. the base layer zeroes them under reduced motion.

## Negative Logic (Prohibited Paths)

- ❌ Do not animate outside these tokens.

## Edge Cases

- `Still` answers zero durations.

## Depth

DEPTH 0.97 (DEEP). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Who honors reduced motion?
  **A:** The token layer, once. _Rationale:_ no component can forget. _Rejected:_ a media query per component.

## Referenced by

[[src/PuduLangFui/Theme/Aspects/_MOC]] · [[src/PuduLangFui/Theme/Build/Theme]]
