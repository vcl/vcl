# [VCL](https://github.com/vcl/doc) form

Basic form layout variants and arrangement of form elements with labels.

## Features

### Layouts

The following three basic form layouts available:

- vertical (default) ‒ stacked labels and controls,
- horizontal ‒ two column form layout, for labels and controls,
- inline ‒ lay out all elements in one line.

They cover most use-cases. For special cases, they can be
combined with the grid system and mixed with each other.

### Control Group

The concept of a control group with `vclInputControlGroup` which groups an
input element together with a label so that they make up an atomic control.
For example a label and a checkbox if such a combination should behave
like a single control. The elements are aligned vertically.

### Inline Control Group

`vclInputInlineControlGroup` is the same as the previous class but
label and control are aligned horizontally.

## Usage

_Vertical_ form layout with stacked labels and controls.

[vertical example](/demo/example-vertical.html)

The _horizontal_ layout uses two columns, one for labels, one for controls.
Left-aligned labels in separate column. Controls and labels are in line.
In this example the loose button group is used to lay out the buttons.
The layout columns can be divided with the golden cut
(`vclGridSpan-gca`, `vclGridSpan-gcb`) from the grid layout component
or any other ratio.

[horizontal example](/demo/example-horizontal.html)

The _inline_ layout variant with right-aligned labels in line with controls.

[inline example](/demo/example-inline.html)

The `vclFormActionArea` wraps the usual buttons on the bottom of the form
and is optional.

## Classes

- `vclForm`
- `vclInputControlGroup`
- `vclInputInlineControlGroup`
- `vclFormActionArea`

## Modifiers

### For `vclForm`

- `vclFormInline`: Lay out all elements in one line.
- `vclFormHorizontal`: Two column form layout, for labels and controls.

## Variables

## Demo

[example.html](/demo/example.html) on GH-pages.
