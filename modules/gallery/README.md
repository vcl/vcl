# [VCL](https://github.com/vcl/doc) gallery

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

## Usage

With single item and thumbnail bar.

[thumbnails example](/demo/example-thumbnails.html)

The currently visible page of the gallery can show a batch of items:

[batched example](/demo/example-batched.html)

## Classes

- `vclGallery`
- `vclGalleryHeader`
- `vclGalleryContent`
- `vclGalleryPrevButton`
- `vclGalleryNextButton`
- `vclGalleryPrevPane`
- `vclGalleryNextPane`
- `vclGalleryImage`
- `vclGalleryFooter`
- `vclGalleryThumbs`
- `vclGalleryThumbWrapper`
- `vclGalleryThumb`

## Modifiers

### For `vclGalleryThumbWrapper`

- `vclSelected`

## Variables

- `--gallery-bg-color`
- `--gallery-header-color`
- `--gallery-header-bg-color`
- `--gallery-footer-color`
- `--gallery-footer-bg-color`
- `--gallery-initial-buttons-opacity`
- `--gallery-thumbnail-selected-border-color`
- `--gallery-thumbnail-hover-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
