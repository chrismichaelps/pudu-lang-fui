---
type: module
path: "@root/src/PuduLangFui/Utils/Paint.pudu"
fidelity: Active
subsystem: "[[subsystems/Styling]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.62
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Utils.Paint]
---

# PuduLangFui.Utils.Paint

## Purpose

Source text as colored markup, computed without a browser.

## Interface

### Signatures

```pudu
export fn escaped(text: Str) -> Str

export fn paint(language: Str, text: Str) -> Str

export fn knows(language: Str) -> Bool
```

### Linkage

- **Requires:** (none)

## Algorithm

1. A language selects its scanner from a table
2. the scanner names the kind of each token starting at a position
3. each token becomes a span with one class per kind.

## Negative Logic (Prohibited Paths)

- ❌ Do not decide meaning here; painting only chooses colors.

## Edge Cases

- A language with no scanner comes back escaped and uncolored.

## Depth

DEPTH 0.62 (MEDIUM). Part of [[subsystems/Styling]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why paint at build time rather than in the browser?
  **A:** The page arrives colored. _Rationale:_ no script to fetch or run. _Rejected:_ a client highlighter.

## Referenced by

[[src/PuduLangFui/Utils/_MOC]]
