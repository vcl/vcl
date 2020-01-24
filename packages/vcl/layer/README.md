# [VCL](https://vcl.github.io/) layer

Show content or dialogs on top of the current view.

## Features

Introduces the following concepts:

- Layer cover: the fix positioned background covering the viewport to indicate
  that the underlying content cannot be interacted with.
- Layer: The fixed positioned container of the layer box, used to lay out the
  layer box.
- Layer box: The relative positioned container holding the actual content of
  the layer.

By default the layer box is horizontally and vertically centered.

The layer box has a reasonable max width; it
extends to covers the whole viewport if its width
is smaller than `$sm-viewport`.

## Usage

Usually a layer is opened in context of the current view to show additional
information or allow for additional interactions.

A simple layer with a panel as its content.

[basic example](/demo/example.html)

## Classes

- `layer-cover`
- `layer`
- `layer-box`

## Modifiers

- `transparent`: Makes the layer's background transparent.
- `layer-fill`: Makes the layer cover the whole viewport.
- `layer-stick-to-bottom`: Makes the layer stick to the bottom.
- `layer-gutter-padding`: Add a padding of half the gutter width.

## Variables

- `$layer-color`
- `$layer-bg-color`
- `$layer-cover-bg-color`
- `$layer-border-color`
- `$layer-header-bg-color`
- `$layer-footer-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
