# [VCL](https://github.com/vcl/vcl/doc) breadcrumb

A chain of navigation items represented as links.

## Features

## Usage

The items are made up of a label (`vclBreadcrumbNavItemLabel`) and
divider (`vclBreadcrumbNavDivider`). The label can be an anchor element
or just a `div` if it can't be selected. The divider is a `vclIcon`.

[basic example](/demo/example-basic.html)

Any icon can be used as divider:

[basic example](/demo/example-basic-alt.html)

## Classes

- `vclBreadcrumbNav`
- `vclBreadcrumbNavItemLabel`
- `vclBreadcrumbNavDivider`

## Modifiers

- `vclSelected`: To be used on the selected list item.

## Variables

- `--breadcrumb-divider-color`
- `--breadcrumb-label-color`
- `--breadcrumb-label-hover-color`
- `--breadcrumb-label-selected-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
