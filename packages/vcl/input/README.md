# [VCL](https://github.com/vcl/doc) input

Standard HTML form input controls.

## Features

Styling of all HTML form controls like input, textarea, select and
_custom_ input (made of div and styling) based input controls.

## Usage

### Sizing

Text input controls are set to be inline-blocks and take 100% width by default.
The occupied width can also be limited by placing input elements in
a container with the desired size. Layout grid containers are perfectly
suited for this purpose.
Secondly they can be sized using the percentage based spans from the
layout spans module.

### Basic Input

Text inputs can be created with an HTML `input` element or from a `div`
element with the `input` class and additional attributes for accessibility.

[text example](/demo/example-text.html)

### Placeholder

Custom an normal HTML inputs can have a placeholder.

[placeholder example](/demo/example-placeholder.html)

### Validation

The validation state of an input can be visualized by the standard modifiers
`error`, `warning` and `success`.

[validation-state example](/demo/example-validation-state.html)

### Focused State

[state-focused example](/demo/example-state-focused.html)

### Disabled State

[state-disabled example](/demo/example-state-disabled.html)

### Read only State

[state-readonly example](/demo/example-state-readonly.html)

### Multi Line Text Input

[textarea example](/demo/example-textarea.html)

### Radio Button

[radio example](/demo/example-radio.html)

### Check Box

[checkbox example](/demo/example-checkbox.html)

### File Selector

[file example](/demo/example-file.html)

### Standard Select Box

[select example](/demo/example-select.html)

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
