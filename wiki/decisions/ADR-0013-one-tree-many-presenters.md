---
type: decision
status: Accepted
tags: [adr]
---

# ADR-0013: One tree, many presenters

## Context

Every component answers an `H.Node`, so the library renders only as HTML. Pudu is gaining a phone
target through a language-owned view stream. One component library should serve both targets, and
an `H.Node` carries no meaning a phone can use: it holds elements and inline declarations, not the
role a control plays.

## Decision

Components gain a tree form. `Button.buttonTree(props)` answers a [[domain/Tree|tree]]
(`PuduLangFui.Core.Tree.Tree`), so each component has one implementation that answers what it means.
The `H.Node` function stays beside it as a one-line web view of that tree, for example
`button(props) = Tree.web(&buttonTree(props))`. Nothing breaks: existing callers keep compiling, and
the HTML is identical by construction. Retiring the `H.Node` names is a later decision, once every
component has a tree form.

A tree holds what it means: a role (action, text, heading, group, field, switch, choice, image, link,
region, divider, meter), its part (the slot), its facts (the data values such as variant and size), its flags, and its
children in order (words, nested trees, or markup). It also holds a web dress: the element and
attributes the HTML presenter writes, in the order they were set.

The tree implements `Std.Html.Build`'s building trait and the library's styling trait, so every
existing chain call keeps its meaning, and `html()` is the HTML presenter. A project's own HTML still
mixes in through `holds` and `holding`.

A native presenter maps the same tree onto platform controls. It ignores the web dress and styles each
tree from typed theme tokens keyed by role, part and facts.

Components move one at a time. Each gains a tree form, and its `H.Node` function becomes a view of it.
The catalog's rendered HTML must stay byte for byte the same at every step.

This extends [[decisions/ADR-0001-open-nodes-and-props]]: props in and the open chain stay; the
`H.Node` functions become views of the tree form.

## Rationale

The slot and data scheme the looks already style by is the meaning a phone needs. Recording it once
serves both presenters, and keeping the dress keeps the web output exact. Implementing the existing
building trait means component bodies barely change.

## Alternatives

- Keep `H.Node` and add a second, native function per component. Two implementations to keep equal.
- Translate CSS to native styles. Inline declarations have no meaning on a phone.
- A client runtime on phones. A second language and a hydration cost, rejected as in
  [[decisions/ADR-0003-platform-interaction]].
- Changing every component's result type at once: 49 files call Button alone, and the language has no
  conversion from a tree to an element.

## Validation

- A catalog snapshot test renders every catalog entry and compares it with the snapshot taken before
  the change. Any byte difference fails the step.
- The native presenter's evidence is a screen of migrated components on a phone simulator, once a
  Pudu release ships the mobile view.

## Referenced by

[[decisions/_MOC]] · [[decisions/ADR-0001-open-nodes-and-props]] · [[domain/Tree]] · [[src/PuduLangFui/Core/Tree]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[handoffs/2026-11-14-one-tree]] · [[architecture/SPECIFICATION]] · [[CHANGELOG]]
