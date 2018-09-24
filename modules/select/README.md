# [VCL](https://github.com/vcl/doc) select

Select form control.

## Features

A replacement of the standard HTML select form control.
This component comprises only the input control, the _dropdown_ is a suitable
component for the drop-down that contains selectable items and
opens when the input is focused.

## Usage

The select is a specialization of the _embedded input group_
(which is itself made from an input and a button).
The basic version allows only to select values. Note that the
input is using the `readonly` property and the `vclReadonly`
class.

[basic example](/demo/example-basic.html)

With the `vclSelectEditable` modifier, the input also allows write access.
This is useful to add new entries or allowing the input of a
phrase for filtering the selectable items.

[editable example](/demo/example-editable.html)

## Classes

- `vclSelect`
- `vclSelectCurrentValue`

## Modifiers

- `vclSelectEditable`: Make the input writable for allow for free text input.

## Variables

## Demo

[example.html](/demo/example.html) on GH-pages.
