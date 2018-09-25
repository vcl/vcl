# [VCL](https://github.com/vcl/doc) data-list

Tabular data browser, selection list and navigation menu.

## Features

A versatile browser for tabular data where the actual layout
of a single item is more flexible as with a normal table.
It can be easily made responsive due to the layout flexibility.
It can have an optional header and footer.
Items of the list can visually suggest their selectability.

## Usage

As property editor with header and footer. The edit button should only be shown
on hover in a real application.

[basic example](/demo/example-basic.html)

As data browser with simple but space efficient key/ value list.

[browser example 1](/demo/example-browser-1.html)

As data browser with image and complex layout.

[browser example 2](/demo/example-browser-2.html)

## Classes

- `vclDataList`
- `vclDataListHeader`
- `vclDataListBody`
- `vclDataListItem`
- `vclDataListFooter`

## Modifiers

### For `vclDataList`

- `vclDivider`: Show a vertical divider (border) between items.
- `vclItemHoverHighlight`: Highlight a item when hovered.
- `vclItemSelectability`: Suggest through styling that the item is selectable.
- `vclNoBorder`: No top/ bottom borders.

### For `vclDataListItem`

- `vclSelected`

## Variables

- `--data-list-bg-color`
- `--data-list-header-bg-color`
- `--data-list-footer-bg-color`
- `--data-list-border-color`
- `--data-list-item-separator-border-color`
- `--data-list-item-hover-color`
- `--data-list-item-bg-hover-color`
- `--data-list-item-selected-color`
- `--data-list-item-bg-selected-color`

## Demo

[example.html](/demo/example.html) on GH-pages.