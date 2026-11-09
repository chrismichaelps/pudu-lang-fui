---
type: module
path: "@root/src/PuduLangFui/Core/Styling.pudu"
fidelity: Active
subsystem: "[[subsystems/Components]]"
grammar: "[[grammar/pudu]]"
depth_score: 0.64
depth_status: MEDIUM
depth_basis: computed from line counts, callers, and suite coverage
tags: [module, medium]
aliases: [PuduLangFui.Core.Styling]
---

# PuduLangFui.Core.Styling

## Purpose

The chain every component and project node shares for what `Std.Html.Build` appends rather than merges: classes, tokens, inline styles, and conditional attributes.

## Interface

### Signatures

```pudu
export trait Styling {
  fn classes(self: &Self, value: Str) -> Self

  fn token(self: &Self, name: Str, value: Str) -> Self

  fn css(self: &Self, property: Str, value: Str) -> Self

  fn slot(self: &Self, name: Str) -> Self

  fn atIf(self: &Self, condition: Bool, name: Str, value: Str) -> Self

  fn flagIf(self: &Self, condition: Bool, name: Str) -> Self

  fn anchors(self: &Self, id: Str) -> Self

  fn anchoredTo(self: &Self, id: Str) -> Self
}

impl Styling for H.Node

export fn part(name: Str) -> H.Node

export fn inline(name: Str) -> H.Node

export fn spelled[T](choice: T) -> Str

export fn picked[T, K](table: &Map[Str, T], kind: K, fallback: T) -> T
```

### Linkage

- **Requires:** [[src/PuduLangFui/Constants/Css]] · [[src/PuduLangFui/Utils/Spelling]]

## Algorithm

1. Find the named attribute in the node
2. when present join the new value to the old with the attribute's separator, otherwise append a new attribute.

## Negative Logic (Prohibited Paths)

- ❌ Do not remove a class the component set.
- ❌ Do not change attribute order beyond the merged value.

## Edge Cases

- Empty text adds nothing.

## Depth

DEPTH 0.64 (MEDIUM). Part of [[subsystems/Components]], under [[grammar/pudu]].

## Grill Log

- **Q:** Should `.classes` resolve conflicts between classes?
  **A:** No, it only appends. _Rationale:_ library rules sit in a cascade layer, so a project's class wins with no knowledge of what it overrides. _Rejected:_ a conflict table of known classes.

## Referenced by

[[src/PuduLangFui/Blocks/Dashboard]] · [[src/PuduLangFui/Blocks/Login]] · [[src/PuduLangFui/Blocks/Pricing]] · [[src/PuduLangFui/Blocks/Settings]] · [[src/PuduLangFui/Blocks/Signup]] · [[src/PuduLangFui/Components/Composites/AlertDialog]] · [[src/PuduLangFui/Components/Composites/Attachment]] · [[src/PuduLangFui/Components/Composites/Breadcrumb]] · [[src/PuduLangFui/Components/Composites/Calendar]] · [[src/PuduLangFui/Components/Composites/Carousel]] · [[src/PuduLangFui/Components/Composites/CodeBlock]] · [[src/PuduLangFui/Components/Composites/Combobox]] · [[src/PuduLangFui/Components/Composites/ContextMenu]] · [[src/PuduLangFui/Components/Composites/Dialog]] · [[src/PuduLangFui/Components/Composites/Drawer]] · [[src/PuduLangFui/Components/Composites/DropdownMenu]] · [[src/PuduLangFui/Components/Composites/Field]] · [[src/PuduLangFui/Components/Composites/InputGroup]] · [[src/PuduLangFui/Components/Composites/InputOtp]] · [[src/PuduLangFui/Components/Composites/Message]] · [[src/PuduLangFui/Components/Composites/MessageScroller]] · [[src/PuduLangFui/Components/Composites/NavigationMenu]] · [[src/PuduLangFui/Components/Composites/Pagination]] · [[src/PuduLangFui/Components/Composites/Select]] · [[src/PuduLangFui/Components/Composites/Sheet]] · [[src/PuduLangFui/Components/Composites/Spinner]] · [[src/PuduLangFui/Components/Composites/Toast]] · [[src/PuduLangFui/Components/Composites/ToggleGroup]] · [[src/PuduLangFui/Components/Composites/Trace]] · [[src/PuduLangFui/Components/Patterns/Chart]] · [[src/PuduLangFui/Components/Patterns/Command]] · [[src/PuduLangFui/Components/Patterns/DataTable]] · [[src/PuduLangFui/Components/Patterns/DatePicker]] · [[src/PuduLangFui/Components/Patterns/Form]] · [[src/PuduLangFui/Components/Patterns/Menubar]] · [[src/PuduLangFui/Components/Patterns/Questionnaire]] · [[src/PuduLangFui/Components/Patterns/Sidebar]] · [[src/PuduLangFui/Components/Primitives/Accordion]] · [[src/PuduLangFui/Components/Primitives/Alert]] · [[src/PuduLangFui/Components/Primitives/AspectRatio]] · [[src/PuduLangFui/Components/Primitives/Avatar]] · [[src/PuduLangFui/Components/Primitives/Badge]] · [[src/PuduLangFui/Components/Primitives/Bubble]] · [[src/PuduLangFui/Components/Primitives/Button]] · [[src/PuduLangFui/Components/Primitives/ButtonGroup]] · [[src/PuduLangFui/Components/Primitives/Card]] · [[src/PuduLangFui/Components/Primitives/Checkbox]] · [[src/PuduLangFui/Components/Primitives/Collapsible]] · [[src/PuduLangFui/Components/Primitives/Direction]] · [[src/PuduLangFui/Components/Primitives/Effects]] · [[src/PuduLangFui/Components/Primitives/Empty]] · [[src/PuduLangFui/Components/Primitives/HoverCard]] · [[src/PuduLangFui/Components/Primitives/Icon]] · [[src/PuduLangFui/Components/Primitives/Input]] · [[src/PuduLangFui/Components/Primitives/Item]] · [[src/PuduLangFui/Components/Primitives/Kbd]] · [[src/PuduLangFui/Components/Primitives/Label]] · [[src/PuduLangFui/Components/Primitives/Marker]] · [[src/PuduLangFui/Components/Primitives/NativeSelect]] · [[src/PuduLangFui/Components/Primitives/Popover]] · [[src/PuduLangFui/Components/Primitives/Progress]] · [[src/PuduLangFui/Components/Primitives/RadioGroup]] · [[src/PuduLangFui/Components/Primitives/Resizable]] · [[src/PuduLangFui/Components/Primitives/ScrollArea]] · [[src/PuduLangFui/Components/Primitives/Separator]] · [[src/PuduLangFui/Components/Primitives/Skeleton]] · [[src/PuduLangFui/Components/Primitives/Slider]] · [[src/PuduLangFui/Components/Primitives/Switch]] · [[src/PuduLangFui/Components/Primitives/Table]] · [[src/PuduLangFui/Components/Primitives/Tabs]] · [[src/PuduLangFui/Components/Primitives/Textarea]] · [[src/PuduLangFui/Components/Primitives/Toggle]] · [[src/PuduLangFui/Components/Primitives/Tooltip]] · [[src/PuduLangFui/Components/Primitives/Typeset]] · [[src/PuduLangFui/Components/Primitives/Typography]] · [[src/PuduLangFui/Core/_MOC]] · [[src/PuduLangFui/Elements/ChainOfThought]] · [[src/PuduLangFui/Elements/Chat]] · [[src/PuduLangFui/Elements/Checkpoint]] · [[src/PuduLangFui/Elements/Confirmation]] · [[src/PuduLangFui/Elements/Context]] · [[src/PuduLangFui/Elements/FileTree]] · [[src/PuduLangFui/Elements/InlineCitation]] · [[src/PuduLangFui/Elements/ModelSelector]] · [[src/PuduLangFui/Elements/Plan]] · [[src/PuduLangFui/Elements/PromptInput]] · [[src/PuduLangFui/Elements/Queue]] · [[src/PuduLangFui/Elements/Reasoning]] · [[src/PuduLangFui/Elements/Sources]] · [[src/PuduLangFui/Elements/StackTrace]] · [[src/PuduLangFui/Elements/Subagent]] · [[src/PuduLangFui/Elements/Suggestion]] · [[src/PuduLangFui/Elements/Task]] · [[src/PuduLangFui/Elements/Terminal]] · [[src/PuduLangFui/Elements/TestResults]] · [[src/PuduLangFui/Elements/Tool]] · [[src/PuduLangFui/Elements/Turn]]
