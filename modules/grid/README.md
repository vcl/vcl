# [VCL](https://github.com/vcl/doc) grid

Classical float based fluid grid system.

## Features

The grid system is used to create page layouts with inherent visual harmony
through  consistent vertical gaps – think newspaper.
It has 15 columns (grid units) with a percentage based division.
The subdivision spans are offered based on grid units and percentage.
The columns are separated by so-called gutters which are marginal columns
which should not contain any content unless the content spans multiple
columns.

A grid is usually used in the content area of the page but it can be used in
any other container.
A container with the class `vclGridRow` opens it and
is filled with column spans like `vclGridSpan-3` (three grid units)
or alternatively percentage based ones like `vclGridSpan-25p` (a quarter).
See the example for the whole variety.

Nesting is only supported through percentage based spans as shown
in the demo.

## Usage

[basic example](/demo/example.html)

## Classes

- `vclGridRow`
- `vclGridSpan-1..15`: Column unit based grid spans.
- `vclGridSpan-5p, 10p, 15p ... 100p`: Percentage based grid spans.
- `vclGridSpan-gca`: Golden cut a.
- `vclGridSpan-gcb`: Golden cut b.
- `vclGutterMargin`: margin at half gutter width, applicable to any element.
- `vclGutterMarginTB`: Top/ bottom margin at half gutter width, applicable
   to any element.
- `vclGutterMarginLR`: Left/ right margin at half gutter width, applicable
   to any element.

## Modifiers

- `vclGridSpanCentered`: Vertically center a grid column if it is the only
  column.

## Variables

- `--grid-half-gutter-width`

## Demo

[example.html](/demo/example.html) on GH-pages.
