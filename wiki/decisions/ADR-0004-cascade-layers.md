---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0004: Cascade layers instead of class merging

## Decision

Every library rule sits in `@layer fui.*`. Any rule a project writes outside a layer wins, regardless
of specificity, so a project's class never has to fight a component's and no class-merging step
exists. `.classes` only appends.

## Alternatives

- `:where()` everywhere: loses to nothing but still ties with resets.
- Resolving conflicting classes at render time: needs knowledge of every class.

## Referenced by

[[decisions/_MOC]] · [[subsystems/Styling]]
