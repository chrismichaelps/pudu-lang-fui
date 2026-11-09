---
title: Drawer
description: Dragging, stops, nesting, and a shrinking page.
---

# Drawer

```pudu
Drawer.wrapper().holding([page])

Drawer.trigger("goal", Button.props().variant(Button.Outline)).says("Open")
Drawer.drawer("goal", "Move goal", Drawer.props().snapPoints(["0.4", "0.8", "1"]).scalesBackground(), [
  Drawer.header().holding([Drawer.title().says("Move goal")]),
  Drawer.footer().holding([Drawer.close("goal", Button.props()).says("Done")])
])
```

| Prop | Default | Effect |
| --- | --- | --- |
| `direction` | `Bottom` | The edge it comes from. |
| `notDismissible` | dismissible | Closes only through its controls. |
| `notModal` | modal | Leaves the page usable; open it with `opensBeside`. |
| `nested` | off | The drawer behind shrinks back. |
| `handleOnly` | off | Drags only from the handle. |
| `withoutHandle` | handle | Removes the handle. |
| `preventCycle` | off | A tap on the handle does not change the stop. |
| `defaultOpen` | off | Opens with the page. |
| `scalesBackground` | off | Shrinks `Drawer.wrapper()`. |
| `keepsBodyColor` | colored | Leaves the page's background while scaled. |
| `snapPoints` | none | Fractions of the window, or lengths in `px`. |
| `activeSnap` | 0 | The stop it opens at. |
| `fadeFrom` | last stop | The stop from which the overlay fades. |
| `sequential` | off | One stop at a time, however fast. |
| `closeThreshold` | 0.25 | Fraction dragged before it closes. |
| `scrollLock` | 100 | Milliseconds after an inner scroll when dragging is refused. |
| `keepsPositionOverKeyboard` | repositions | Leaves it in place when the keyboard opens. |

The drawer emits `fui-drawer-open-change`, `-drag`, `-release`, `-close`, `-snap`, and `-animation-end`.
`fuiDrawer.snapTo(id, index)` and `fuiDrawer.close(id)` control it from a script. Mark an element
`data-no-drag` to exclude it from dragging.
