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

The concept of a control group with `form-control-group` which groups an
input element together with a label so that they make up an atomic control.
For example a label and a checkbox if such a combination should behave
like a single control. The elements are aligned vertically.

### Inline Control Group

`form-inline-control-group` is the same as the previous class but
label and control are aligned horizontally.

## Usage

_Vertical_ form layout with stacked labels and controls.

[example](/demo/example-form.html)


## Classes

- `form`
- `form-control-group`
- `form-inline-control-group`
- `form-action-area`

## Modifiers

### For `form`

- `form-inline`: Lay out all elements in one line.
- `form-horizontal`: Two column form layout, for labels and controls.

## Variables

## Demo

[example.html](/demo/example.html) on GH-pages.
