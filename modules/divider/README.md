# [VCL](https://github.com/vcl/doc) divider

Horizontally or vertically aligned divider to segment content.

## Features

The divider may have a label to describe the following
content or the reason for the segmentation.
This label is typically an icogram but also other components such as 
a button may be used. It's also possible to have multiple labels.

The divider can also be used in combination with an `h[1-6]` element
with the `vclDividerHeading` class.

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
`vclDivider` element.

## Classes

- `vclDivider`
- `vclDividerHeading`
- `vclDividerElement`: Container class for elements of a divider like a
label.

## Modifiers

### For `vclDivider`

- `vclDividerHorizontal`: Required when a label is used and horizontally
  aligned.
- `vclDividerVertical`: Required when a label is used and vertically
  aligned.
- `vclDividerHeading`: Required when the divider is also a heading.
Disables the text-transformation to uppercase.

### For `vclDividerElement`

 - `vclDividerBeginElement`: Left bound element in horizontal layout.
 - `vclDividerEndElement`: Right bound element in horizontal layout.

## Variables

- `--divider-color`
- `--divider-border-color`
- `--divider-fill-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
