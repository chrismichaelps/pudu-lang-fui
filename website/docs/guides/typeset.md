---
title: Typeset
description: Rendered documents from three controls.
---

# Typeset

`Typeset` styles any rendered document: articles, documentation, or streamed replies. Three controls
set the rhythm, and everything else derives from them.

```pudu
Typeset.typeset(Typeset.props().size("1rem").leading("1.75").flow("1.5em")).raw(markup)
```

| Control | Sets |
| --- | --- |
| `size` | The base size. |
| `leading` | The line height. |
| `flow` | The gap between blocks. |
