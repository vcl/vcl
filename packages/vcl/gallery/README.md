# [VCL](https://vcl.github.io/) gallery

Image gallery.

## Features

Allows directionally browse in a list of images.
The current image is shown at its native size with two button controls
for forward and backward navigation.
A transparent pane covering the clear diameter of the image can be used as
active area for user interaction. The pane is splitted vertically in the middle
to allow for controls corresponding to the buttons.
An optional thumbnail bar allows to visualize the current window within within
the whole gallery.
The inline styles are only added for display purposes and are not needed in the ng-vcl - only the seperator between body and thumbnails needs to be added manually.

## Usage

With single item and thumbnail bar.

[thumbnails example](/demo/example-thumbnails.html)

## Classes

- `gallery`
- `gallery-body-norow`
- `gallery-body-row`
- `gallery-header`
- `gallery-content`
- `gallery-prev-button`
- `gallery-next-button`
- `gallery-prev-pane`
- `gallery-next-pane`
- `gallery-images-container`
- `gallery-image`
- `gallery-footer`
- `gallery-thumbnails-host`
- `gallery-thumbs`
- `gallery-thumbs-container`
- `gallery-thumb-wrapper`
- `gallery-thumb`

## Modifiers

### For `gallery-thumb-wrapper`

- `selected`

## Variables

- `$gallery-bg-color`
- `$gallery-header-color`
- `$gallery-header-bg-color`
- `$gallery-footer-color`
- `$gallery-footer-bg-color`
- `$gallery-initial-buttons-opacity`
- `$gallery-thumbnail-selected-border-color`
- `$gallery-thumbnail-hover-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
