# [VCL](https://vcl.github.io/) panel

Container element to group and highlight content.

## Features

A panel consisting a body, header and footer.
All elements are optional.
The panel body may for example hold textual content, tables, dividers etc.

There are two variants, a dialog variant optimized for modal dialogs
and a card variant with a card like visual appearance.

## Usage

The content of the body can be wrapped in a panel content (`vclPanelContent`)
which adds padding.

[basic example](/demo/example-basic.html)

A Panel with text and a table as content.

[table example](/demo/example-table.html)

Dialog variant.

[panel example](/demo/example-dialog.html)

Card variant.

[card example](/demo/example-card.html)

## Classes

- `vclPanel`
- `vclPanelHeader`
- `vclPanelHeading`
- `vclPanelTitle`
- `vclPanelBody`
- `vclPanelContent`
- `vclPanelFooter`

## Modifiers

- `vclPanelCard`
- `vclPanelDialog`

Semantic coloring:

- `vclDanger`

## Variables

- `--panel-bg-color`
- `--panel-hf-line-height`
- `--panel-border-color`
- `--panel-header-color`
- `--panel-header-bg-color`
- `--panel-footer-color`
- `--panel-footer-bg-color`
- `--panel-border-radius--card`

## Demo

[example.html](/demo/example.html) on GH-pages.
