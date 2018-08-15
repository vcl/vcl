# [VCL](https://github.com/vcl/doc) button

The main control for triggering actions.

## Features

Two dimensional modifiers for variant and state.
Variants like: _emphasized_, _transparent_ etc.
States like: _disabled_, _pressed_, _hovered_, _selected_ etc.

## Usage

### Basic

Buttons can be created using the `button`, `a` and
`input` tags while the first is to be preferred.

[basic example](/demo/example-basic.html)

A button can appear to be disabled through `vclDisabled` class and/ or
`disabled` attribute.

The default variant support a selected state via `vclSelected` as well.

[selected example](/demo/example-selected.html)

If text exceeds the button's width, the text is cut off and does not break
into a new line. With the `vclOverflowEllipsis` modifier and
ellipsis is shown.

[overflow-label example](/demo/example-overflow-label.html)

The label of a button is generally build with an _icogram_,
by virtue of which it supports labels with prepended and appended icons.

[icon example](/demo/example-icon.html)

Button sizes can be changed with scaling modifiers from the
size-modulation module.

[size example](/demo/example-size.html)

### Variants

Multiple variants are supported through modifiers for the following cases:

- Emphasized button which can be used to indicate the primary action.
- Transparent/ half transparent/ alternative transparent variants.
- Semantically colored.
- Outline appearance.
- Round appearance.

[variants example](/demo/example-variants.html)

## Classes

- `vclButton`
- `vclButtonDim`: Just the dimensions of a button.

## Modifiers

- `vclSquare`: Give button the same `min-width` as its height.

Contextual state:

- `vclSelected`
- `vclActive`
- `vclFocused`

Pointer state:

- `vclHovered`
- `vclPressed`

Label overflow:

- `vclOverflowEllipsis`

Variants:

- `vclEmphasized`: emphasized appearance for the main interaction.
- `vclTransparent`: with transparent background and hover indication by color.
- `vclEmphasizedTransparent`: combo of previous two.
- `vclHalfTransparent`: transparent background but not on hover.
- `vclTransparentAlt`: transparent for dark backgrounds.
- `vclDanger`: prevent users from accidentally doing dangerous things.
- `vclSuggestive`: suggest users to safely conduct an action.

Additional Modifiers:

- `vclOutline`: the border is used as outline, transparent background.
- `vclCircular`: Circular shape.

## Variables

See `--button-*` variables in the default theme.

## Demo

[example.html](/demo/example.html) on GH-pages.
