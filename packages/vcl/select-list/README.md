# [VCL](https://github.com/vcl/doc) select-list

A select-list menu consisting of a list of items which can be selected.

## Features

- Selectable item.
- Disabled, selected, selectable, highlighted states.
- Group header.
- Separator.
- Item label and optional sub-label.
- Item with prepended or appended icon.

The highlighted state takes precedence over the selected state because
only one item can be highlighted (for caret based navigation for example)
and even if an item is selected at the same time, this needs to be visible.

## Usage

The main purpose is selection of an item from a given list
of items. From an ARIA point of view this can be a _menu_
or a _listbox_. Both variants are visually identical.

The example below has ARIA attributes denoting it as menu.

[menu example](/demo/example-menu.html)

The example below is a select-list with _listbox_ semantics.
In this example, multiple items are already selected.
Also sub-labels or items are used.

[listbox example](/demo/example-listbox.html)

The example below is the same as the previous one but with icons decorating each
item.

[icon example](/demo/example-icon.html)

## Classes

- `select-list`
- `select-list-item`
- `select-list-item-label`
- `select-list-item-sub-label`
- `select-list-item-group-header`
- `select-list-item-group-header-label`
- `separator`

## Modifiers

### For `select-list-item`

- `selected`: To visualize items that are currently selected.
- `disabled`: To disabled items (make them unavailable for selection).
- `highlighted`: To mark the caret position for keyboard based navigation.

## Variables

- `$select-list-border-color`
- `$select-list-bg-color`
- `$select-list-item-color`
- `$select-list-item-sub-label-color`
- `$select-list-item-bg-hover-color`
- `$select-list-item-hover-color`
- `$select-list-item-sub-label-hover-color`
- `$select-list-selected-item-bg-color`
- `$select-list-selected-item-color`
- `$select-list-highlighted-item-bg-color`
- `$select-list-highlighted-item-color`
- `$select-list-disabled-item-bg-color`
- `$select-list-disabled-item-color`
- `$select-list-separator-item-border-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
