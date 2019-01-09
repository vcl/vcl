# [VCL](https://vcl.github.io/) loading-layer

Cover areas to indicate updates and temporarily prevent interaction on them.

## Features

A glass pane to cover a container which may be the whole viewport or
a specific area to indicate that interaction with the covered area is currently
not possible.
The layer can hold content which can be used to show a textual and/ or visual
state indication.

## Usage

The loading layer covers the next ancestor container which is
`position: absolute`. Alternatively,
the container can be classed as `vclLoadingLayerContainer` to denote it.

[basic example](/demo/example.html)

## Classes

- `vclLoadingLayerContainer`
- `vclLoadingLayer`
- `vclLoadingLayerContent`

## Modifiers

## Variables

- `--loading-layer-cover-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
