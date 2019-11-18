# [VCL](https://github.com/vcl/doc) dropdown

A dropdown menu consisting of a list of items which can be selected.

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

The example below is a dropdown with _listbox_ semantics.
In this example, multiple items are already selected.
Also sub-labels or items are used.

[listbox example](/demo/example-listbox.html)

The example below is the same as the previous one but with icons decorating each
item.

[icon example](/demo/example-icon.html)

## Classes

- `dropdown`
- `dropdown-item`
- `dropdown-item-label`
- `dropdown-item-sub-label`
- `dropdown-item-group-header`
- `dropdown-item-group-header-label`
- `separator`

## Modifiers

### For `dropdown-item`

- `selected`: To visualize items that are currently selected.
- `disabled`: To disabled items (make them unavailable for selection).
- `highlighted`: To mark the caret position for keyboard based navigation.

## Variables

- `--dropdown-border-color`
- `--dropdown-bg-color`
- `--dropdown-item-color`
- `--dropdown-item-sub-label-color`
- `--dropdown-item-bg-hover-color`
- `--dropdown-item-hover-color`
- `--dropdown-item-sub-label-hover-color`
- `--dropdown-selected-item-bg-color`
- `--dropdown-selected-item-color`
- `--dropdown-highlighted-item-bg-color`
- `--dropdown-highlighted-item-color`
- `--dropdown-disabled-item-bg-color`
- `--dropdown-disabled-item-color`
- `--dropdown-separator-item-border-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
