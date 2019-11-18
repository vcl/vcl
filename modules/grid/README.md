# [VCL](https://vcl.github.io/) grid

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
A container with the class `grid-row` opens it and
is filled with column spans like `grid-span-3` (three grid units)
or alternatively percentage based ones like `grid-span-25p` (a quarter).
See the example for the whole variety.

Nesting is only supported through percentage based spans as shown
in the demo.

## Usage

[basic example](/demo/example.html)

## Classes

- `grid-row`
- `grid-span-1..15`: Column unit based grid spans.
- `grid-span-5p, 10p, 15p ... 100p`: Percentage based grid spans.
- `grid-span-gca`: Golden cut a.
- `grid-span-gcb`: Golden cut b.
- `gutter-margin`: margin at half gutter width, applicable to any element.
- `gutter-margin-t-b`: Top/ bottom margin at half gutter width, applicable
   to any element.
- `gutter-margin-l-r`: Left/ right margin at half gutter width, applicable
   to any element.

## Modifiers

- `grid-span-centered`: Vertically center a grid column if it is the only
  column.

## Variables

- `--grid-half-gutter-width`

## Demo

[example.html](/demo/example.html) on GH-pages.
