---
type: domain
tags: [domain]
aliases: [Tree]
---

# Tree

- **Definition:** The value a component's tree form answers: a record of what the component means,
  built once per call and read by every presenter. Implemented as `PuduLangFui.Core.Tree.Tree`.
- **Role:** The kind of control or content the tree is, one of action, text, heading, group, field,
  switch, choice, image, link, region, divider, meter, or range (an adjustable value).
- **Part:** The [[domain/Slot]] name of the tree, set by `slot`.
- **Facts:** The data values of the tree, such as [[domain/Variant]] and size, as name and value pairs
  set by `data`.
- **Flags:** Named states of the tree, such as disabled, checked, or required.
- **Children:** An ordered list of words, nested trees, or markup, in the order they were added.
- **Web dress:** The element and attributes the HTML presenter writes, kept in the order they were set.
  Only the HTML presenter reads it.
- **Presenter:** A function that reads a tree and draws it. The HTML presenter is `html()`. A native
  presenter, to come, maps the same tree onto platform controls and styles each tree from typed theme
  tokens keyed by role, part and facts.
- **Not:** A copy of the HTML document, and not a platform view hierarchy. A presenter never reads CSS
  from the tree.

See [[decisions/ADR-0013-one-tree-many-presenters]] and the props it keeps, [[domain/Props]].

## Referenced by

[[decisions/ADR-0013-one-tree-many-presenters]] · [[domain/_MOC]] · [[src/PuduLangFui/Core/Tree]]
