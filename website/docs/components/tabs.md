---
title: Tabs
description: Panels switched by labelled choices.
---

# Tabs

Panels switched by labelled choices.

<div class="fui-preview"><a href="../previews/tabs.html">Open the Tabs preview</a></div>

## Installation

```bash
fui add tabs
```

## Usage

```pudu
let panel = |heading: Str, body: Str, note: Str| Card.card().holding([Card.header().holding([Card.title().says(heading), Card.description().says(body)]), Card.content().css("font-size", "var(--fui-text-sm)").css("color", "var(--fui-muted-foreground)").says(note)])

column("24rem", [Tabs.tabs("report", "overview", [
  Tabs.tab("overview", "Overview", panel("Overview", "View your key metrics and recent project activity. Track progress across all your active projects.", "You have 12 active projects and 3 pending tasks.")),
  Tabs.tab("analytics", "Analytics", panel("Analytics", "Track performance and user engagement metrics.", "Page views are up 25% compared to last month.")),
  Tabs.tab("reports", "Reports", panel("Reports", "Generate and download your detailed reports.", "You have 5 reports ready and available to export.")),
  Tabs.tab("settings", "Settings", panel("Settings", "Manage your account preferences and options.", "Configure notifications, security, and themes."))
], Tabs.Pill)])
```

## API

```pudu
/// How the row of choices is drawn.
export type Variant = Pill | Line

/// One choice and its panel.
export type Tab = { value: Str, caption: Str, panel: H.Node }

/// A choice and its panel.
export fn tab(value: Str, caption: Str, panel: H.Node) -> Tab

/// Panels switched by choices; `selected` is the value shown first.
export fn tabs(name: Str, selected: Str, items: Array[Tab], variant: Variant) -> H.Node

/// The styles of tabs, with one rule per position that shows a panel.
export fn style() -> Css.Block
```
