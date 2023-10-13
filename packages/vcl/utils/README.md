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
- `w-{bp}-{per}p` Where bp is the breakpoint and per is the percentage For responsive width on sm, md, xl, xxl
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

- `gutter[x|y]-[0|1|2|3|4|5]`

- direction (optional. All if not provided)
  - values:
      x (left and right), y (top and bottom)
- size
  - values 0 to 5 (from none to large)

Examples:

`gutter-3`, `gutterx-1`, `guttery-5`

### Spacing

- `[p|m][r|e|b|l|x|y]-[0|1|2|3|4|5]`

  - type
    - values: p (padding), m (margin)

  - direction (optional. All if not provided)
    - values:
        r (right), b (bottom), l (left), x (left and right), y (top and bottom)

  - size
    - values 0 to 5 (from none to large), auto (margin only)

  Examples:

  `p-3`, `px-1`, `m-3`, `my-auto`

- `mb-form-control` Bottom margin used in form controls

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
