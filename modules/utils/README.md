# [VCL](https://vcl.github.io/) utils

Basic utility classes.

## Features

Utility classes for:

- Spacing
- Breakpoint aware visibility control
- Floated elements
- Box model manipulation
- Alignment of inline elements
- Text and word wrapping
- Scrollable containers
- Text selection by users

## Usage

### Spacing

[spacing example](/demo/example-spacing.html)

### Visibility

[visibility example](/demo/example-visibility.html)

### Inline Element Alignment

[inline-element-alignment example](/demo/example-inline-element-alignment.html)

### Scrollable Containers

[scrollable-containers example](/demo/example-scrollable-containers.html)

### Text and Word Wrapping

[text-and-word-wrapping example](/demo/example-text-and-word-wrapping.html)

## Classes

### Float Helpers

- `vclFloatLeft`
- `vclFloatRight`
- `vclFloatNone`
- `vclClearFix`
- `vclClear`

### Block Element alignment

- `vclCenterBlock`

### Border

- `vclNoBorder`

### Spacing

- `vcl[P|M][T|R|B|L|X|Y]-[0|1|2|3|4|5]`
 

- type
  - values: P (padding), M (margin)

- direction (optional. All if not provided)
  - values:
      R (right), B (bottom), L (left), X (left and right), Y (top and bottom), Auto (margin only)

- size
  - values 0 to 5 (from none to large)

Examples:

vclP-3, vclPX-1, vclM-3, vclMy-auto


### Alignment of inline Elements

- `vclAlignLeft`
- `vclAlignRight`
- `vclAlignCentered`
- `vclAlignJustified`

### Text and Word Wrapping

- `vclBreakWords`
- `vclNoWrap`
- `vclOverflowEllipsis`

### Breakpoint aware visibility control

- `vclOverflowHidden`
- `vclHide`
- `vclHide-bp`: where bp is a breakpoint
- `vclHide-from-bp`: where bp is a breakpoint
- `vclHide-to-bp` where bp is a breakpoint

### Scrollable Containers

- `vclScrollable`

Modifiers:

- `vclX`: scrollable only along x-axis
- `vclXOnHover`: scrollable only along x-axis when hovered
- `vclY`: scrollable only along y-axis
- `vclYOnHover`: scrollable only along y-axis when hovered

### Text Selection by Users

- `vclEnableUserSelect`
- `vclDisableUserSelect`

## Demo

[example.html](/demo/example.html) on GH-pages.
