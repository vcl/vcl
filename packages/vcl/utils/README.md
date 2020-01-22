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

*note*: Use `overflow-auto` to avoid leaking background colors

[gutter example](/demo/example-gutter.html)

### Inline Element Alignment

[inline-element-alignment example](/demo/example-inline-element-alignment.html)

### Scrollable Containers

[scrollable-containers example](/demo/example-scrollable-containers.html)

### Text and Word Wrapping

[text-and-word-wrapping example](/demo/example-text-and-word-wrapping.html)

## Classes

### Float Helpers

- `float-left`
- `float-right`
- `float-none`
- `clear-fix`
- `clear`

### Block Element alignment

- `center-block`

### Border

- `no-border`

### Sizing

Percentage based spans which can be used in many cases to set the
width and height of a container.

- `w-5p`
- `w-10p`
- `w-15p`
- `w-20p`
- `w-25p`
- `w-30p`
- `w-33p`
- `w-35p`
- `w-40p`
- `w-45p`
- `w-50p`
- `w-55p`
- `w-60p`
- `w-65p`
- `w-70p`
- `w-75p`
- `w-80p`
- `w-85p`
- `w-90p`
- `w-95p`
- `w-100p`
- `w-auto`
- `w-gca`: Golden cut a
- `w-gcb`: Golden cut b
- `max-w-100p`: max-width: 100%
- `h-5p`
- `h-10p`
- `h-15p`
- `h-20p`
- `h-25p`
- `h-30p`
- `h-33p`
- `h-35p`
- `h-40p`
- `h-45p`
- `h-50p`
- `h-55p`
- `h-60p`
- `h-65p`
- `h-70p`
- `h-75p`
- `h-80p`
- `h-85p`
- `h-90p`
- `h-95p`
- `h-100p`
- `h-auto`
- `max-h-100p`: max-height: 100%

### Gutter

- `gutter[X|Y]-[0|1|2|3|4|5]

- direction (optional. All if not provided)
  - values:
      X (left and right), Y (top and bottom)
- size
  - values 0 to 5 (from none to large)

Examples:

gutter-3, gutter-x-1, gutter-y-5

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

p-3, p-x-1, m-3, m-y-auto


### Alignment of inline Elements

- `align-left`
- `align-right`
- `align-centered`
- `align-justified`

### Text and Word Wrapping

- `break-words`
- `no-wrap`
- `overflow-ellipsis`

### Visibility control

- `overflow-hidden`
- `overflow-auto`
- `visibility-hidden` 
- `hide`
- `hide-bp`: where bp is a breakpoint
- `hide-from-bp`: where bp is a breakpoint
- `hide-to-bp` where bp is a breakpoint

### Scrollable Containers

- `scrollable`

Modifiers:

- `x`: scrollable only along x-axis
- `x-on-hover`: scrollable only along x-axis when hovered
- `y`: scrollable only along y-axis
- `y-on-hover`: scrollable only along y-axis when hovered

### Text Selection by Users

- `user-select-text`
- `user-select-none`

## Demo

[example.html](/demo/example.html) on GH-pages.
