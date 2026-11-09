---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0008: Folders are dependency layers

## Decision

Every folder is a layer with a rank in [[tools/Layers/Catalog]]. A module imports only what its folder
is allowed to, and pure folders may not import effectful standard modules. The gate reports refused
edges and cycles and runs in CI. Components are split into `Primitives`, `Composites`, and `Patterns`
so that dependencies between them point one way.

## Validation

`pudu run tools/Layers.pudu` passes with no refused imports and no cycles.

## Referenced by

[[CHANGELOG]] · [[architecture/LANGUAGE]] · [[decisions/_MOC]]
