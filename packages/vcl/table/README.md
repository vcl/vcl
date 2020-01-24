# [VCL](https://vcl.github.io/) table

Display tabular data.

## Features

The following basic aspects of table formatting are supported
through modifiers and other classes:

_Cell and column highlighting_

Single cells and columns can be highlighted by using the `cell-highlight`
class on each `td`in the respective column or on single cells only.

_Column width_

The column width can be defined in the table header using one of the layout
spans `span-5p` - `span-100p` from the corresponding module.

_Column sortability_

Sortable columns are defined with the `sortable-col` class on the
respective `th`s.
This class gives the whole header a pointer cursor on hover to indicate an
action.
The application must register an appropriate event handler to change the
sort order for the whole `th` accordingly.
Also an icon which indicates sortability should be used as shown in the
second column.
The currently active sort order is indicated by a respective icon and the
classes `sort-asc` or `sort-desc` on the `th` element.

_Row and cell selectability_

Rows can be styled to suggest their selectability (single or multiple) using the
`row-selectability` modifier which makes rows show a pointer cursor on
hover.

_Row and cell selection_

Individual cells and thus rows can be visually selected using the
`selected` class.

_Row hover highlighting_

If a table row should be highlighted on hover, the `row-hover-highlight`
modifier class can be used. This hovering's intention is just for the sake
of readability and should not indicate an action.

_Disabled rows_

Rows can be visually disabled with the `disabled` modifier.

_Alternating row color_

Optionally an alternating row color can be defined by using the modifier
`alt-row-color`.

_Border configuration_

The row borders are removed with `no-border`.

_Padding style_

If the default cell padding is too extensive, `condensed` makes it more
compact.

_Borders style_

By default, only horizontal borders are shown. For vertical borders,
use the `vertical-border` modifier.

_Text alignment_

Left alignment is default, for centered text use class `align-centered`
and for right aligned text `align-right` on `td`s.

_Vertical alignment_

Top alignment is default, for vertically centered content use class
`v-align-middle` and for bottom aligned content `v-align-bottom`
on a `table` or `td`s.

_Pagination_

The pagination component can be combined with the table.

_Layout_

The `auto` layout mode is used by default. For tables with toolbars however,
the `fixed` class must be used to enable the fixed table layout mode.

_Truncation_

In conjunction with the fixed layout mode, the modifier `no-wrap` can
be used to truncate all cell content which would span more than one line and
show an ellipsis to indicate truncated content instead.

Individual cells can also be truncated using the general
`no-wrap` and `overflow-ellipsis` modifiers from the utils module.

_Wrapping behavior_

To allow breaking words of textual cell content apart, use the modifier
`break-words`. This works best in combination with the fixed layout mode.

## Usage

[basic example](/demo/example.html)

With only examples it is impossible to show all possible permutation of
modifiers.

## Classes

- `table`

## Modifiers

### Table

- `cell-highlight`
- `row-selectability`
- `row-hover-highlight`
- `no-border`
- `condensed`
- `alt-row-color`
- `align-centered`
- `align-right`
- `v-align-middle`
- `v-align-bottom`
- `no-wrap`

### Row

- `no-wrap` (from utils)
- `overflow-ellipsis` (from utils)
- `selected`
- `disabled`

### Cell

- `sortable-col`
- `sort-asc`
- `sort-desc`
- `selected`
- `no-wrap` (from utils)
- `overflow-ellipsis` (from utils)
- `disabled`

## Variables

- `$table-color`
- `$table-disabled-color`
- `$table-border-color`
- `$table-bg-color`
- `$table-header-bg-color`
- `$table-header-color`
- `$table-header-button-hover-color`
- `$table-footer-bg-color`
- `$table-footer-color`
- `$table-alt-bg-color`
- `$table-highlight-bg-color`
- `$table-highlight-hover-bg-color`
- `$table-row-selected-color`
- `$table-row-selected-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
