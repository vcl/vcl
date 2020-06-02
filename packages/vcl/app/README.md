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
The `layout-width` utility class can be used to give containers the width of
the app area. This is useful if containers with a 100% spanning background
are needed and the actual content should be limited to the width of the layout.

- The _header area_ is usually above the content area or in ARIA terms,
the area containing an element with _banner_ and _navigation_ role.
This module introduces a corresponding class which can be used to set colors
for this area.

- The _content area_ is usually the area between header and footer or in the ARIA
taxonomy, the area having the _main_ role.
This module introduces a corresponding class which can be used to set the
background color of this area.
Secondly there are helper classes to set the primary or secondary
content background color on any component.
A secondary background color can be used to make a component or content
appear less important.

- The _footer area_ is usually below the content area or in ARIA terms,
the area having the _contentinfo_ role.
This module introduces a corresponding class which can be used to set colors
for this area.

## Usage

Viewport with centered app area which contains the main content area:

[basic example](/demo/example.html)

## Classes

- `viewport`: In HTML the _body_ tag.
- `viewport-bg`: Utility to apply the background color of the viewport.
- `app`: Main application area.
- `layout-width`: Utility to apply the width of the app area.
- `content-area`
- `content-area-bg-color`: Set the background color to the same color as the content area.
- `application-header`
- `app-name`
- `application-footer`

## Modifiers

### For `content-area`

- `transparent`: Make the background color transparent.

### For `content-area-bg-color`

- `secondary`: Set the background color to the secondary content
  background color.

## Variables

- `$app-viewport-bg-color`
- `$app-area-bg-color`
- `$app-area-max-width`
- `$app-area-min-width`
- `$content-area-primary-bg-color`
- `$content-area-secondary-bg-color`
- `$app-header-color`
- `$app-header-bg-color`
- `$app-header-logo-max-width`
- `$app-footer-color`
- `$app-footer-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.


