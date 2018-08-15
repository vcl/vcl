# [VCL](https://github.com/vcl/vcl/doc) drawer

Sliding sidebar.

## Features

Sliding drawer panel and main panel. In closed state,
only the main area is visible.

Visibility of the drawer is explicitly controlled via modifiers, no
implicit media-query magic.

The slide in/ out of the drawer is animated.

## Usage

In this example, the drawer is closed and only the main panel is visible.

[closed example](/demo/example-closed.html)

In this example, the drawer panel is open via the `vclOpen` modifier
and the inline style `left: 0;` on the `vclDrawerMainPanel`.
This rule makes the main panel appear below the drawer panel.
This is intended for narrow viewports.

[narrow example](/demo/example-narrow.html)

For wide viewports, the drawer can be shown next to the main panel just
by removing the rule as in the example below.

[wide example](/demo/example-wide.html)

There are no modifier classes for this as it requires highly dynamic control
and should better handled programmatically  in the web component.

The drawer panel can also be laid out to the right of the main panel
using the `vclDrawerRight` modifier.

## Classes

- `vclDrawer`
- `vclDrawerDrawerPanel`
- `vclDrawerMainPanel`
- `vclDrawerMainPanelContent`
- `vclDrawerMainPanelCover`

## Modifiers

- `vclOpen`: To open the panel.
- `vclClose`: Must be toggled with `vclClose` to play animations properly.
- `vclDrawerRight`: To lay-out the panel to the right of the main panel.

## Variables

- `--drawer-drawer-panel-color`
- `--drawer-drawer-panel-bg-color`
- `--drawer-drawer-panel-width`
- `--drawer-main-panel-cover-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
