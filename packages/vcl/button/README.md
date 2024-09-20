# [VCL](https://vcl.github.io/vcl/) button

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

A button can appear to be disabled through `disabled` class and/ or
`disabled` attribute.

The default and outline variant support a selected state via `selected` as well.

[selected example](/demo/example-selected.html)

If text exceeds the button's width, the text is cut off and does not break
into a new line. With the `overflow-ellipsis` modifier and
ellipsis is shown.

[overflow-label example](/demo/example-overflow-label.html)

The label of a button is generally build with an _icogram_,
by virtue of which it supports labels with prepended and appended icons.

[icon example](/demo/example-icon.html)

Button sizes can be changed with scaling modifiers from the
size-modulation component.

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

- `button`
- `button-dim`: Just the dimensions of a button.

## Modifiers

- `square`: Give button the same `min-width` as its height.

Contextual state:

- `selected`
- `active`
- `focused`

Pointer state:

- `hovered`
- `pressed`

Label overflow:

- `overflow-ellipsis`

Variants:

- `emphasized`: emphasized appearance for the main interaction.
- `transparent`: with transparent background and hover indication by color.
- `emphasized-transparent`: combo of previous two.
- `half-transparent`: transparent background but not on hover.
- `transparent-alt`: transparent for dark backgrounds.
- `danger`: prevent users from accidentally doing dangerous things.
- `suggestive`: suggest users to safely conduct an action.

Additional Modifiers:

- `outline`: the border is used as outline, transparent background.
- `circular`: Circular shape.

## Variables

See `--button-*` variables in the default theme.
