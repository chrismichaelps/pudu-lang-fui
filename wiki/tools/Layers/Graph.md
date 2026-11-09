---
type: module
path: "@root/tools/Layers/Graph.pudu"
fidelity: Active
subsystem: "[[subsystems/Distribution]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.82
depth_status: DEEP
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, deep]
aliases: [Layers.Graph]
---

# Layers.Graph

## Purpose

Imports, cycles, depth, and violations of a module graph.

## Interface

### Signatures

```pudu
export type Unit = { name: Str, imports: Array[Str] }

export type Violation = { from: Str, target: Str, reason: Str }

export type Report = {
  units: Int,
  edges: Int,
  violations: Array[Violation],
  cycles: Array[Array[Str]],
  depths: Array[(Str, Int)]
}

export fn parse(source: Str) -> Option[Unit]

export fn analyze(units: &Array[Unit], judge: fn(Str, Str, &Set[Str]) -> Option[Str]) -> Report

export fn render(report: &Report) -> Array[Str]

export fn passed(report: &Report) -> Bool
```

### Linkage

- **Requires:** (none)

## Algorithm

1. Parse headers, build the graph, compute reachability, report mutually reachable sets as cycles and longest paths as depth.

## Negative Logic (Prohibited Paths)

- ❌ Only reads module headers.

## Edge Cases

- Comments cannot hide or invent an import.

## Depth

DEPTH 0.82 (DEEP). Part of [[subsystems/Distribution]], under [[grammar/pudu]].

## Grill Log

- **Q:** Why cycle detection when folders are ranked?
  **A:** A folder may import within itself, so ranks alone do not rule out cycles. _Rationale:_ belt and braces at no cost. _Rejected:_ forbidding same-folder imports.

## Referenced by

[[tools/Layers]] · [[tools/Layers/_MOC]] · [[tools/LayersTest]]
