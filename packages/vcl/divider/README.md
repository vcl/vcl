# [VCL](https://github.com/vcl/doc) divider

Horizontally or vertically aligned divider to segment content.

## Features

The divider may have a label to describe the following
content or the reason for the segmentation.
This label is typically an icogram but also other components such as
a button may be used. It's also possible to have multiple labels.

The divider can also be used in combination with an `h[1-6]` element
with the `divider-heading` class.

## Usage

The divider may carry an icogram and other components. Positioning of the
divider and its labels is done with the flex-layout module.

[basic examples](/demo/example-basic.html)

The HTML native horizontal rule (`hr` element) is basically the same
but very hard to tame in terms of styling.

[hr example](/demo/example-hr.html)

The divider can also be divide vertically.

[vertical examples](/demo/example-vertical.html)

The vertically aligned variant requires the height to be set explicitly on the
`divider` element.

## Classes

- `divider`
- `divider-heading`
- `divider-element`: Container class for elements of a divider like a
label.

## Modifiers

### For `divider`

- `divider-horizontal`: Required when a label is used and horizontally
  aligned.
- `divider-vertical`: Required when a label is used and vertically
  aligned.
- `divider-heading`: Required when the divider is also a heading.
Disables the text-transformation to uppercase.

### For `divider-element`

- `divider-begin-element`: Left bound element in horizontal layout.
- `divider-end-element`: Right bound element in horizontal layout.

## Variables

- `$divider-color`
- `$divider-border-color`
- `$divider-fill-color`
