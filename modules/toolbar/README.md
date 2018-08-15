# [VCL](https://github.com/vcl/doc) toolbar

Horizontal bar which can contain navigation elements,
buttons, form controls etc.

## Features

Multiple levels can be visualized with the modifiers `vclLeveln`
where `n` is the level number. The first level (n = 1) is the default and does
not require a modifier.

## Usage

### Website or App Main Toolbar

A toolbar with logo, controls and a navigation menu
as typically found as main application toolbar.
To manifest its hierarchy level visually,  it is enlarged by 10%.

[main toolbar example](/demo/example-main.html)

### Input

A variant with an embedded input.

[input example](/demo/example-input.html)

### Second Level

Second level toolbar with textual title in the middle.

[secondary example](/demo/example-secondary.html)


## Classes

- `vclToolbar`
- `vclToolbarTitle`

## Modifiers

- `vclSecondary`: Make is appear less important.
- `vclTransparent`: Make the background color transparent.

## Variables

- `--toolbar-l1-bg-color`
- `--toolbar-l2-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
