# [VCL](https://github.com/vcl/vcl/doc) table

Display tabular data.

## Features

The following basic aspects of table formatting are supported
through modifiers and other classes:

_Cell and column highlighting_

Single cells and columns can be highlighted by using the `vclCellHighlight`
class on each `td`in the respective column or on single cells only.

_Column width_

The column width can be defined in the table header using one of the layout
spans `vclSpan-5p` - `vclSpan-100p` from the corresponding module.

_Column sortability_

Sortable columns are defined with the `vclSortableCol` class on the
respective `th`s.
This class gives the whole header a pointer cursor on hover to indicate an
action.
The application must register an appropriate event handler to change the
sort order for the whole `th` accordingly.
Also an icon which indicates sortability should be used as shown in the
second column.
The currently active sort order is indicated by a respective icon and the
classes `vclSortAsc` or `vclSortDesc` on the `th` element.

_Row and cell selectability_

Rows can be styled to suggest their selectability (single or multiple) using the
`vclRowSelectability` modifier which makes rows show a pointer cursor on
hover.

_Row and cell selection_

Individual cells and thus rows can be visually selected using the
`vclSelected` class.

_Row hover highlighting_

If a table row should be highlighted on hover, the `vclRowHoverHighlight`
modifier class can be used. This hovering's intention is just for the sake
of readability and should not indicate an action.

_Disabled rows_

Rows can be visually disabled with the `vclDisabled` modifier.

_Alternating row color_

Optionally an alternating row color can be defined by using the modifier
`vclAltRowColor`.

_Border configuration_

The cell borders are removed with `vclNoBorder`.
The border style can be changed from solid to dotted by using the
`vclDottedBorder` modifier.

_Padding style_

If the default cell padding is too extensive, `vclCondensed` makes it more
compact.

_Borders style_

By default, only horizontal borders are shown. For vertical borders,
use the `vclVerticalBorder` modifier.

_Text alignment_

Left alignment is default, for centered text use class `vclAlignCentered`
and for right aligned text `vclAlignRight` on `td`s.

_Vertical alignment_

Top alignment is default, for vertically centered content use class
`vclVAlignMiddle` and for bottom aligned content `vclVAlignBottom`
on a `table` or `td`s.

_Pagination_

The pagination component can be combined with the table.

_Layout_

The `auto` layout mode is used by default. For tables with toolbars however,
the `vclFixed` class must be used to enable the fixed table layout mode.

_Truncation_

In conjunction with the fixed layout mode, the modifier `vclNoWrap` can
be used to truncate all cell content which would span more than one line and
show an ellipsis to indicate truncated content instead.

Individual cells can also be truncated using the general
`vclNoWrap` and `vclOverflowEllipsis` modifiers from the utils module.

_Wrapping behavior_

To allow breaking words of textual cell content apart, use the modifier
`vclBreakWords`. This works best in combination with the fixed layout mode.

## Usage

[basic example](/demo/example.html)

With only examples it is impossible to show all possible permutation of
modifiers.

## Classes

- `vclTable`

## Modifiers

### Table

- `vclCellHighlight`
- `vclRowSelectability`
- `vclRowHoverHighlight`
- `vclNoBorder`
- `vclCondensed`
- `vclAltRowColor`
- `vclAlignCentered`
- `vclAlignRight`
- `vclVAlignMiddle`
- `vclVAlignBottom`
- `vclNoWrap`

### Row

- `vclNoWrap` (from utils)
- `vclOverflowEllipsis` (from utils)
- `vclSelected`
- `vclDisabled`

### Cell

- `vclSortableCol`
- `vclSortAsc`
- `vclSortDesc`
- `vclSelected`
- `vclNoWrap` (from utils)
- `vclOverflowEllipsis` (from utils)
- `vclDisabled`

## Variables

- `--table-color`
- `--table-disabled-color`
- `--table-border-color`
- `--table-bg-color`
- `--table-header-bg-color`
- `--table-header-color`
- `--table-header-button-hover-color`
- `--table-footer-bg-color`
- `--table-footer-color`
- `--table-alt-bg-color`
- `--table-highlight-bg-color`
- `--table-highlight-hover-bg-color`
- `--table-row-selected-color`
- `--table-row-selected-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
