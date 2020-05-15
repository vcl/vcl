# [VCL](https://github.com/vcl/doc) input

Standard HTML form input controls.

## Features

Styling of input and textarea HTML form controls.

## Usage

### Sizing

Text input controls take 100% width by default.
The occupied width can also be limited by placing input elements in
a container with the desired size. Layout grid containers are perfectly
suited for this purpose.

### Basic Input

Text inputs can be created with an HTML `input` element or from a `div`
element with the `input` class and additional attributes for accessibility.

[basic example](/demo/example-basic.html)

### Validation

The validation state of an input can be visualized by the standard modifiers
`error`, `warning` and `success`.

[input-group example](/demo/example-input-group.html)

### Validation

The validation state of an input can be visualized by the standard modifiers
`error`, `warning` and `success`.

[validation-state example](/demo/example-validation-state.html)

## Classes

- `input`

## Modifiers

- `focused`: Alternative to `:focus` pseudo class.
- `disabled`: Visual disabled state, should be combined with `disabled` property.
- `readonly`: Visual read only state, should be combined with `readonly` property.

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
