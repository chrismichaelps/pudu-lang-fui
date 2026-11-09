---
type: module
path: "@root/tools/Mutate.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [Mutate]
---

# Mutate

## Purpose

Mutation testing over the source tree.

## Interface

### Signatures

```pudu
// no exported declarations
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Apply one operator change at a time and run the checks and suites
2. a mutant that passes survives.

## Negative Logic (Prohibited Paths)

- ❌ Restores every file after each mutant.

## Edge Cases

- A baseline failure stops the run.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Which layers?
  **A:** `--pure` covers Domain, Utils, and Cli/Model. _Rationale:_ these hold the logic; components are data. _Rejected:_ mutating style text.

## Referenced by

[[architecture/TESTING]] · [[tools/_MOC]]
