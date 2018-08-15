# [VCL](https://github.com/vcl/vcl/doc) icon

Icon.

## Features

Can be used to display icons from the following sources:

- `img`-tag based media objects (bitmaps like `.png` or vectors like
  `.svg` can be used)
- CSS class based (for media objects embedded as
  `background-image` or glyphs from icon fonts),
- inline SVG, `use`-tag refs.

There is no size defined by the icon class. Sizing should be done by
the surrounding container, the inherited font-size or modifiers like
`vclIconSize1`.

## Usage

Based on an `img` tag using bitmap (PNG) and vector (SVG) in this example.

[img-tag based media objects example](/demo/example-img-tag.html)

Based on a background image. The size is defined by the container and the use
of `vclLayoutFit` on the div carrying the background image.

[background image based media objects example](/demo/example-background-image.html)

CSS class based (icon font).

[CSS class based with icon font example](/demo/example-icon-font.html)

Inline SVG based.

[inline-svg example](/demo/example-inline-svg.html)

## Classes

- `vclIcon`

## Modifiers

- `vclIconSize1`: Default size for non font-size controlled sizing ~24px.
- `vclIconSize2`: ~36px.
- `vclIconSize3`: ~48px.

## Variables

## Demo

[example.html](/demo/example.html) on GH-pages.
