# [VCL](https://vcl.github.io/) flex-layout (deprecated)

*deprecated* - Use [flex-grid](#flex-grid) instead.

## Features

A declarative layout system built on top of CSS Flexbox.
Features in CSS Flexbox are exposed as classes that can be put on
any element.

Based on that, a twelve-column grid is provided.

## Usage

Flexbox based layout primitives that can solve almost all layout challenges.

[basic example](/demo/example-basic.html)

The flex layout also features a layout grid which works just like a classical
float based grid. A grid row is built from a `layout-grid-row` containing
an arbitrary number of `layout-grid-cell`s. The cells can be sized using
the column classed `layout1 .. layout11` or the sizing from
the utils module.

[grid basic example](/demo/example-grid-basic.html)

The grid also supports nesting of rows.

[grid nested example](/demo/example-grid-nested.html)

Note that a `layout-grid-row` must be enclosed in a block container.

A special feature is a grid row which allows to wrap grid cells based on
their width maintaining the gutters. The total width of all cells can be
greater than 100%, they wrap at multiples of 100%.
The `layout-wrapping-row` modifier is used to enable this.

[wrapping example](/demo/example-grid-wrapping.html)

## Classes

### Flex Layout

- `layout-horizontal`
- `layout-vertical`
- `layout-inline`
- `layout-reverse`
- `layout-wrap`
- `layout-wrap-reverse`
- `layout-flex`
- `layout-auto`
- `layout-none`
- `layout1`
- `layout2`
- `layout3`
- `layout4`
- `layout5`
- `layout6`
- `layout7`
- `layout8`
- `layout9`
- `layout10`
- `layout11`
- `layout12`
- `layout-center`
- `layout-center-center`
- `layout-start-justified`
- `layout-center-justified`
- `layout-end-justified`
- `layout-justified`
- `layout-around-justified`
- `layout-self-start`
- `layout-self-center`
- `layout-self-end`
- `layout-self-stretch`

### Flex Grid Layout

- `layout-grid-row`
- `layout-grid-cell`
- `layout-wrap-container`

### Fixed Positioning

- `layout-fixed-top`
- `layout-fixed-right`
- `layout-fixed-bottom`
- `layout-fixed-left`
- `layout-full-bleed`

### Other

- `layout-invisible`
- `layout-hidden`
- `layout-relative`
- `layout-fit`

## Modifiers

### For `layout-grid-row`

- `layout-wrapping-row`: Make the row a non-nestable one that can
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
