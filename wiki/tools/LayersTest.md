---
type: module
path: "@root/tools/LayersTest.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [LayersTest]
---

# LayersTest

## Purpose

Proves the gate refuses upward edges, cycles, impurity, and strangers.

## Interface

### Signatures

```pudu
// no exported declarations
```

### Linkage

- **Requires:** [[tools/Layers/Catalog]] · [[tools/Layers/Graph]]

## Algorithm

1. Run the analyzer over small graphs and compare the report.

## Negative Logic (Prohibited Paths)

- ❌ Nothing beyond the grammar page.

## Edge Cases

- None.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why under tools?
  **A:** It tests a tool beside it. _Rationale:_ `test/` holds the package's suites. _Rejected:_ moving it.

## Referenced by

[[tools/_MOC]]
