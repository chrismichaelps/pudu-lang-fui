---
type: module
path: "@root/tools/Layers.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [Layers]
---

# Layers

## Purpose

Judges the source tree against the layer catalog.

## Interface

### Signatures

```pudu
// no exported declarations
```

### Linkage

- **Requires:** [[tools/Layers/Catalog]] · [[tools/Layers/Graph]]

## Algorithm

1. Walk the sources, parse their headers, judge every import, print the report.

## Negative Logic (Prohibited Paths)

- ❌ Never writes.

## Edge Cases

- An unreadable module fails the gate.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why a tool rather than a suite?
  **A:** CI and contributors run it directly and read its depth report. _Rationale:_ the report is useful alone. _Rejected:_ a test only.

## Referenced by

[[tools/_MOC]]
