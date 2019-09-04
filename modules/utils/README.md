# [VCL](https://vcl.github.io/) utils

Basic utility classes.

## Features

Utility classes for:

- Spacing
- Breakpoint aware visibility control
- Sizing
- Gutter
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

### Sizing

[sizing example](/demo/example-sizing.html)

### Gutter

[gutter example](/demo/example-gutter.html)

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

### Sizing

Percentage based spans which can be used in many cases to set the
width and height of a container.

- `vclW-5p`
- `vclW-10p`
- `vclW-15p`
- `vclW-20p`
- `vclW-25p`
- `vclW-30p`
- `vclW-33p`
- `vclW-35p`
- `vclW-40p`
- `vclW-45p`
- `vclW-50p`
- `vclW-55p`
- `vclW-60p`
- `vclW-65p`
- `vclW-70p`
- `vclW-75p`
- `vclW-80p`
- `vclW-85p`
- `vclW-90p`
- `vclW-95p`
- `vclW-100p`
- `vclW-auto`
- `vclW-gca`: Golden cut a
- `vclW-gcb`: Golden cut b
- `vclMaxW-100p`: max-width: 100%
- `vclH-5p`
- `vclH-10p`
- `vclH-15p`
- `vclH-20p`
- `vclH-25p`
- `vclH-30p`
- `vclH-33p`
- `vclH-35p`
- `vclH-40p`
- `vclH-45p`
- `vclH-50p`
- `vclH-55p`
- `vclH-60p`
- `vclH-65p`
- `vclH-70p`
- `vclH-75p`
- `vclH-80p`
- `vclH-85p`
- `vclH-90p`
- `vclH-95p`
- `vclH-100p`
- `vclH-auto`
- `vclMaxH-100p`: max-height: 100%

### Gutter

- `vclGutter[X|Y]-[0|1|2|3|4|5]

- direction (optional. All if not provided)
  - values:
      X (left and right), Y (top and bottom)
- size
  - values 0 to 5 (from none to large)

Examples:

vclGutter-3, vclGutterX-1, vclGutterY-5

### Spacing

- `vcl[P|M][T|R|B|L|X|Y]-[0|1|2|3|4|5]`

- type
  - values: P (padding), M (margin)

- direction (optional. All if not provided)
  - values:
      R (right), B (bottom), L (left), X (left and right), Y (top and bottom)

- size
  - values 0 to 5 (from none to large), Auto (margin only)

Examples:

vclP-3, vclPX-1, vclM-3, vclMY-auto


### Alignment of inline Elements

- `vclAlignLeft`
- `vclAlignRight`
- `vclAlignCentered`
- `vclAlignJustified`

### Text and Word Wrapping

- `vclBreakWords`
- `vclNoWrap`
- `vclOverflowEllipsis`

### Visibility control

- `vclOverflowHidden`
- `vclOverflowAuto`
- `vclVisibilityHidden` 
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

- `vclUserSelectText`
- `vclUserSelectNone`

## Demo

[example.html](/demo/example.html) on GH-pages.
