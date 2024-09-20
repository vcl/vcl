# [VCL](https://vcl.github.io/vcl/) drawer

Sliding drawer.

## Features

Sliding drawer and main panel. In closed state, only the main area is visible.

Visibility of the drawer is controlled via modifiers. The margin of the content must be set programmatically
according to the width of the drawer.

The slide in/ out of the drawer is animated.

## Usage

In this example, the drawer panel is open via the `drawer-open` modifier
and the inline style `margin-left: 256px;` on the `drawer-content`.

[wide example](/demo/example-side.html)

This rule makes the main panel appear below the drawer panel.
This is intended for narrow viewports.

[side example](/demo/example-over.html)

In this example, the drawer is closed and only the main panel is visible.

[closed example](/demo/example-closed.html)

The drawer panel can also be laid out to the right of the main panel
using the `drawer-right` modifier.

## Classes

- `drawer-container`
- `drawer`
- `drawer-content`
- `drawer-backdrop`

## Modifiers

- `drawer-open`: To open the panel.
- `drawer-backdrop-visible`: Must be toggled for backdrop animation
- `drawer-right`: Drawer is rendered on the right side
- `drawer-animations`: Enables drawer animations

## Variables

- `$drawer-color`
- `$drawer-bg-color`
- `$drawer-content-bg-color`
