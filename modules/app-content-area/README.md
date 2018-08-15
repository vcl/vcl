# [VCL](https://github.com/vcl/vcl/doc) app-content-area

The area which houses the main content.

## Features

The content area is usually the area between header and footer or in the ARIA
taxonomy, the area having the _main_ role.
This module introduces a corresponding class which can be used to set the
background color of this area.

Secondly there are helper classes to set the primary or secondary
content background color on any component.
A secondary background color can be used to make a component or content
appear less important.

## Usage

A simple content area:

[basic example](/demo/example.html)

## Classes

- `vclContentArea`
- `vclContentAreaBgColor`: Set the background color to the same color as the content area.

## Modifiers

### For `vclContentArea`

- `vclTransparent`: Make the background color transparent.

### For `vclContentBgColor`

- `vclSecondary`: Set the background color to the secondary content
  background color.

## Variables

- `--content-area-primary-bg-color`
- `--content-area-secondary-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
