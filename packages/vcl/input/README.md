# [VCL](https://github.com/vcl/doc) input

Standard HTML form input controls.

## Features

- Styling of input and textarea HTML form controls.
- Embedded icons/buttons
- State specific stylings
- Embedded label when used within form-control-groups
- Attached buttons/icons via input-group

## Usage

Inputs must be wrapped in an input-field element. The input-field element is a container for the input containing stylings.

### Sizing

Input controls take 100% width by default.
The occupied width can also be limited by placing input elements in
a container with the desired size. Flex grid containers are perfectly
suited for this purpose.

### Basic Input

Text inputs can be created with an HTML `input` element wrapped in an element with the input-field class.

[basic example](/demo/example-basic.html)

### Validation

The validation state of an input can be visualized by the standard modifiers
`error`, `warning` and `success`.

[validation-state example](/demo/example-validation-state.html)

### Form Control Group

When using within a form-control-group, the label can be embedded in the input-field borders.

[form-control-group example](/demo/example-form-control-group.html)

### Input Group

An input group is formed by an input-group as wrapper for buttons, icograms and an input element.

[input-group example](/demo/example-input-group.html)

## Classes

- `input-field`
- `input`
- `embedded-input-field-label`: Embeds label in input-field borders
- `input-group`

## Modifiers for `input-field`

- `focused`: Alternative to `:focus` pseudo class.
- `disabled`: Visual disabled state, should be combined with `disabled` property.
- `readonly`: Visual read only state, should be combined with `readonly` property.
- `floating`: Lets the label float above the input.
- `static`: Disabled floating support.
- `auto-height`: For input fields that should not use the standard height, e.&nbsp;g. `textarea`.

## Variables

- `$input-height`
- `$input-line-height`
- `$input-textarea-line-height`
- `$input-outline-focus-color`
- `$input-color`
- `$input-text-placeholder-color`
- `$input-text-placeholder-font-style`
- `$input-border-width`
- `$input-border-color`
- `$input-border-radius`
- `$input-border-focus-color`
- `$input-bg-color`
- `$input-bg-focus-color`
- `$input-disabled-color`
- `$input-disabled-border-color`
- `$input-disabled-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
