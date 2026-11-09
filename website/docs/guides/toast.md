---
title: Toast
description: Every option of the toast region and its programmatic interface.
---

# Toast

Render a region once, then show toasts from the server or from the page.

```pudu
Toast.toaster(Toast.props().position(Toast.TopCenter).rich().closable()).holding([
  Toast.toast("saved", Toast.notice().kind(Toast.Success)).holding([
    Toast.content().holding([Toast.message().says("Saved"), Toast.description().says("Friday at 5:57 PM")])
  ])
])
```

From the page:

```js
fuiToast("Event created", { description: "Friday at 5:57 PM" });
fuiToast.success("Saved");
fuiToast.error("It did not work");
fuiToast.loading("Syncing");
fuiToast("Undone", { action: { label: "Redo", onClick: redo }, cancel: { label: "Dismiss" } });
fuiToast.promise(save(), { loading: "Saving", success: "Saved", error: "Failed" });
fuiToast.dismiss(id);
fuiToast.custom("<strong>Markup you trust</strong>");
```

## Region options

| Prop | Default | Effect |
| --- | --- | --- |
| `position` | `BottomEnd` | One of six places. |
| `expanded` | off | Keeps the stack fanned out. |
| `rich` | off | Colors toasts by kind. |
| `closable` | off | Shows a close control on every toast. |
| `inverted` | off | Draws toasts in the opposite mode. |
| `mode` | `System` | Forces light or dark. |
| `visible` | 3 | How many show at once. |
| `duration` | 4000 | Milliseconds before a toast closes. |
| `gap` | 14 | Pixels between expanded toasts. |
| `offset`, `mobileOffset` | 24px, 16px | Distance from the window's edge. |
| `hotkey` | Alt+T | Focuses and expands the region. |
| `swipes` | from position | Directions a toast can leave. |
| `caption` | Notifications | The name read by assistive software. |
| `toaster` | none | Names a region, so `toasterId` can target it. |

## Toast options

`id` (repeat it to update a toast), `description`, `icon`, `duration`, `position`, `richColors`,
`invert`, `closeButton`, `dismissible`, `action`, `cancel`, `onDismiss`, `onAutoClose`, `className`,
`toasterId`. `icon` and `custom` take markup, so pass them only what you wrote; `title` and
`description` are always text. `fuiToast.getHistory()` and `fuiToast.getToasts()` report what has been shown.

Hovering, pressing, or hiding the page pauses every timer. A toast leaves when swiped 45 pixels or
flicked, and movement against an allowed direction is dampened.
