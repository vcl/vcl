# [VCL](https://vcl.github.io/) app-area

The background and layout of the app's viewport and app area.

## Features

Sets `@viewport { width: device-width; }`.

Introduces the following concept:

- The _app viewport_ which is the highest level content container
(in HTML this should be the _body_ tag) and defines its background color.

- The _app area_ which holds high level areas like header, content, footer,
sidebar etc. Layout-wise it defines the boundary for these elements relative
to the viewport.

The `vclLayoutWidth` utility class can be used to give containers the width of
the app area. This is useful if containers with a 100% spanning background
are needed and the actual content should be limited to the width of the layout.

## Usage

Viewport with centered app area which contains the main content area:

[basic example](/demo/example.html)

## Classes

- `vclViewport`: In HTML the _body_ tag.
- `vclViewportBg`: Utility to apply the background color of the viewport.
- `vclApp`: Main application area.
- `vclLayoutWidth`: Utility to apply the width of the app area.

## Modifiers

## Variables

- `--app-viewport-bg-color`
- `--app-area-bg-color`
- `--app-area-max-width`
- `--app-area-min-width`

## Demo

[example.html](/demo/example.html) on GH-pages.
