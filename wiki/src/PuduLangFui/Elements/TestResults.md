---
type: module
path: "@root/src/PuduLangFui/Elements/TestResults.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.63
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Elements.TestResults]
---

# PuduLangFui.Elements.TestResults

## Purpose

A test run with suites and failures.

## Interface

### Signatures

```pudu
export type Outcome = Passed | Failed | Skipped

export type Suite =

export fn suite(name: Str, outcome: Outcome, failures: Array[Str] = []) -> Suite

export fn testResults(suites: Array[Suite]) -> H.Node

export fn style() -> Css.Block
```

### Linkage

- **Requires:** [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Core/Styling]] · [[src/PuduLangFui/Domain/Css]]

## Algorithm

1. A count of what ran opens to a step per suite, with failures under the suite.

## Negative Logic (Prohibited Paths)

- ❌ Do not branch on the outcome.

## Edge Cases

- A suite with no failures shows no list.

## Depth

DEPTH 0.63 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Totals computed here?
  **A:** Yes, from the suites. _Rationale:_ one source. _Rejected:_ a caller-supplied total.

## Referenced by

[[src/PuduLangFui/Catalog/Catalog]] · [[src/PuduLangFui/Elements/_MOC]]
