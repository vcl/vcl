# [VCL](https://github.com/vcl/doc) nag

Overlay dialog which requires acknowledgement to go away.

## Features

This component is a specialization of the container component.

The z-index is the highest of all VCL components to make sure it
is shown even above a layer.

It can easily made modal by using `layout-full-bleed`.

For positioning it uses helpers such as `layout-fixed-bottom` from
the flex-layout module.

## Usage

[basic example](/demo/example.html)

## Classes

- `nag`

## Modifiers

## Variables

- `$nag-color`
- `$nag-bg-color`
