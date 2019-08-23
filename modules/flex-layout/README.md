# [VCL](https://vcl.github.io/) flex-layout (deprecated)

Flexbox based layout system.

## Features

A declarative layout system built on top of CSS Flexbox.
Features in CSS Flexbox are exposed as classes that can be put on
any element.

Based on that, a twelve-column grid is provided.

## Usage

Flexbox based layout primitives that can solve almost all layout challenges.

[basic example](/demo/example-basic.html)

The flex layout also features a layout grid which works just like a classical
float based grid. A grid row is built from a `vclLayoutGridRow` containing
an arbitrary number of `vclLayoutGridCell`s. The cells can be sized using
the column classed `vclLayout1 .. vclLayout11` or the sizing spans from
the layout-spans module.

[grid basic example](/demo/example-grid-basic.html)

The grid also supports nesting of rows.

[grid nested example](/demo/example-grid-nested.html)

Note that a `vclLayoutGridRow` must be enclosed in a block container.

A special feature is a grid row which allows to wrap grid cells based on
their width maintaining the gutters. The total width of all cells can be
greater than 100%, they wrap at multiples of 100%.
The `vclLayoutWrappingRow` modifier is used to enable this.

[wrapping example](/demo/example-grid-wrapping.html)

## Classes

### Flex Layout

- `vclLayoutHorizontal`
- `vclLayoutVertical`
- `vclLayoutInline`
- `vclLayoutReverse`
- `vclLayoutWrap`
- `vclLayoutWrapReverse`
- `vclLayoutFlex`
- `vclLayoutAuto`
- `vclLayoutNone`
- `vclLayout1`
- `vclLayout2`
- `vclLayout3`
- `vclLayout4`
- `vclLayout5`
- `vclLayout6`
- `vclLayout7`
- `vclLayout8`
- `vclLayout9`
- `vclLayout10`
- `vclLayout11`
- `vclLayout12`
- `vclLayoutCenter`
- `vclLayoutCenterCenter`
- `vclLayoutStartJustified`
- `vclLayoutCenterJustified`
- `vclLayoutEndJustified`
- `vclLayoutJustified`
- `vclLayoutAroundJustified`
- `vclLayoutSelfStart`
- `vclLayoutSelfCenter`
- `vclLayoutSelfEnd`
- `vclLayoutSelfStretch`

### Flex Grid Layout

- `vclLayoutGridRow`
- `vclLayoutGridCell`
- `vclLayoutWrapContainer`

### Fixed Positioning

- `vclLayoutFixedTop`
- `vclLayoutFixedRight`
- `vclLayoutFixedBottom`
- `vclLayoutFixedLeft`
- `vclLayoutFullBleed`

### Other

- `vclLayoutInvisible`
- `vclLayoutHidden`
- `vclLayoutRelative`
- `vclLayoutFit`

## Modifiers

### For `vclLayoutGridRow`

- `vclLayoutWrappingRow`: Make the row a non-nestable one that can
accommodate cells of more than 100% width in total and wrap those accordingly.

## Attributes

### Flex Layout DEPRECATED

- `layout`
- `horizontal`
- `vertical`
- `inline`
- `reverse`
- `wrap`
- `wrap-reverse`
- `flex`
- `auto`
- `none`
- `one`
- `two`
- `three`
- `four`
- `five`
- `six`
- `seven`
- `eight`
- `nine`
- `ten`
- `eleven`
- `twelve`
- `start-justified`
- `center-justified`
- `end-justified`
- `justified`
- `around-justified`
- `self-start`
- `self-center`
- `self-end`
- `self-stretch`

## Variables

- `--flex-layout-half-gutter-width`: The half width of the gutter between
grid cells.

## Demo

[example.html](/demo/example.html) on GH-pages.
