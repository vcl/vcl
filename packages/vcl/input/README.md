# [VCL](https://github.com/vcl/doc) input

Standard HTML form input controls.

## Features

- Styling of input and textarea HTML form controls.
- Embedded icons/ buttons
- State specific stylings
- Embedded label when used within `form-control-group`s
- Prepended/ appended buttons and icons via input-group

## Usage

Inputs must be wrapped in an input-field element. The input-field element is a container for the input containing stylings.

### Sizing

Input controls take 100% width by default.
The occupied width can also be limited by placing input elements in
a container with the desired size. Flex grid containers are perfectly
suited for this purpose.

### Basic Input

Text inputs can be created with an HTML `input` element wrapped in an element with the `input-field` class.
The construct also supports buttons embedded into the input.

[basic example](/demo/example-basic.html)

### Validation

The validation state of an input can be visualized with the modifiers
`error`, `warning` and `success`.

[validation-state example](/demo/example-validation-state.html)

### Form Control Group

Inputs inside a `form-control-group` allow the label to be embedded in the input-field via `embedded-input-field-label`.
Also allows to prepended/ appended buttons to the input.

[form-control-group example](/demo/example-form-control-group.html)

### Input Group

Input groups separate the siblings visually. An input group is formed by an `input-group` as wrapper
in which concatenated input fields, texts and buttons take place.

[input-group example](/demo/example-input-group.html)

## Classes

- `input-field`
- `input`
- `form-control-group`
- `embedded-input-field-label`: Embeds label in the input-field
- `input-group`
- `input-group-text`

## Modifiers for `input-field`

- `focused`: Alternative to `:focus` pseudo class.
- `disabled`: Visual disabled state, should be combined with `disabled` property.
- `readonly`: Visual read only state, should be combined with `readonly` property.
- `floating`: Lets the label float above the input.
- `static`: Disabled floating label.
- `auto-height`: For input fields that should not use the standard height, e.&nbsp;g. `textarea`.

## Variables

- `$input-height`
- `$input-line-height`
- `$input-padding-lr`: Left/ right padding
- `$input-padding-tb`: Top/ bottom padding
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
- `$label-offset-x`: Allows to offset the label in case higher/ narrower standard input dimensions are used
- `$label-offset-7`
