---
type: module
path: "@root/tools/Fui.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 1.0
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [Fui]
---

# Fui

## Purpose

The generator's entry point.

## Interface

### Signatures

```pudu
// no exported declarations
```

### Linkage

- **Requires:** [[src/PuduLangFui/Cli/Dispatch/Router]]

## Algorithm

1. Pass the arguments and the working directory to the router, print its lines, and exit with its status.

## Negative Logic (Prohibited Paths)

- ❌ No logic here.

## Edge Cases

- None.

## Depth

DEPTH 1.0 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why so thin?
  **A:** Everything else is testable without a process. _Rationale:_ the router is a function. _Rejected:_ logic in main.

## Referenced by

[[tools/_MOC]]
