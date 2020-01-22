# [VCL](https://vcl.github.io/) form-control-label

Label to describe form controls.

## Features

- Basic label and multi line labels.
- Sub label.
- Indicator for required form fields.
- Hints for form controls.

Form control hints are typically used to provide assistance with input
validation.

## Usage

### Basic Usage

[basic example](/demo/example-basic.html)

### Advanced

Visual indication that the field must be filled in.

[label-required example](/demo/example-label-required.html)

The sub label is a secondary, more verbose label.

[label-sub example](/demo/example-label-sub.html)

The hint may be used to assist the user with his input while the field is filled in.

[hint example](/demo/example-hint.html)

## Classes

- `form-control-label`: The label
- `form-control-sub-label`: Additional, less prominent label
- `required-indicator`: Indicator for required fields, usually a single character
- `form-control-hint`: Assisting hint usually shown while field is filled in

## Modifiers

- `form-control-label-wrapping`: To be used if the label encloses the control.
- `disabled`: Disabled indication that label can be clicked.

## Variables

- `--form-control-sublabel-color`
- `--form-control-label-line-height`
- `--form-control-label-font-size`
- `--form-control-label-font-weight`
- `--form-control-label-color`
- `--form-control-label-required-hint-color`
- `--form-control-hint-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
