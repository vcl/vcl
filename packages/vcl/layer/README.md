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

Utilise the `fade-out-animation` with the `layer-cover` and `layer` to create a smooth entry and exit animation (_Available on Chrome 117_)

[Dynamic modal with entry and exit transition](/demo/example-with-transitions.html)

Utilise the `zoom-animation` to create *zoom in* and *zoom out* effect when the modals opens and exit (_Available on chrome 117_)

[Dynamic modal with Zoom in and zoom out animation](/demo/example-with-zoom-animation.html)

## Classes

- `layer-cover`
- `layer`
- `layer-box`

## Modifiers

- `layer-fill`: Makes the layer cover the whole viewport.
- `layer-stick-to-bottom`: Makes the layer stick to the bottom.
- `layer-gutter-padding`: Add a padding of half the gutter width.
- `fade-out-animation`: Creates a smooth fade in and out transition when the layer enter and exit the window.
- `zoom-animation`: Show a zoom in and zoom out animation effect when the layer enter and exit the window.

## Variables

- `$layer-cover-bg-color`
- `$layer-border-color`
- `$layer-cover-transition-duration`
- `$layer-transition-duration`
- `$layer-box-animation-durations`
