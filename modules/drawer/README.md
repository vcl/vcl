# [VCL](https://vcl.github.io/) drawer

Sliding drawer.

## Features

Sliding drawer and main panel. In closed state, only the main area is visible.

Visibility of the drawer is controlled via modifiers. The margin of the content must be set programmatically
according to the width of the drawer.

The slide in/ out of the drawer is animated.

## Usage

In this example, the drawer panel is open via the `vclDrawerOpen` modifier
and the inline style `margin-left: 256px;` on the `vclDrawerContent`.

[wide example](/demo/example-side.html)

This rule makes the main panel appear below the drawer panel.
This is intended for narrow viewports.

[side example](/demo/example-over.html)

In this example, the drawer is closed and only the main panel is visible.

[closed example](/demo/example-closed.html)

The drawer panel can also be laid out to the right of the main panel
using the `vclDrawerRight` modifier.

## Classes

- `vclDrawerContainer`
- `vclDrawer`
- `vclDrawerOpen`
- `vclDrawerContent`
- `vclDrawerBackdrop`
- `vclDrawerBackdropVisible`

## Modifiers

- `vclDrawerOpen`: To open the panel.
- `vclDrawerBackdropVisible`: Must be toggled for backdrop animation
- `vclDrawerRight`: Drawer is rendered on the right side

## Variables

- `--drawer-color`
- `--drawer-bg-color`
- `--drawer-content-bg-color`


## Demo

[example.html](/demo/example.html) on GH-pages.


