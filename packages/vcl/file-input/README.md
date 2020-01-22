# [VCL](https://vcl.github.io/) file-input

File input for selecting one or multiple files via tap and drag-and-drop
gestures.

## Features

A dragged-over sensitive input control that is typically used in drag-and-drop
scenarios such as file upload inputs. At the same time it can be focused
and and the main action triggered with the same gestures like applicable to
 a button.

Modifiers for the following available states:
_dragndrop_, _busy_, _error_, _warning_, _success_, _focused_, _disabled_.

## Usage

[basic example](/demo/example-basic.html)

### Sizing

The same properties as for the the _input_ module apply. The difference is that
the default height is higher to serve as a proper drop target.

### Validation

The validation state of an file input can be visualized by the standard modifiers
`error`, `warning` and `success`.

[validation-state example](/demo/example-validation-state.html)

### Focused State

[focused-state example](/demo/example-focused-state.html)

### Disabled State

[disabled-state example](/demo/example-disabled-state.html)

### Drag-N-Drop State

[dragndrop-state example](/demo/example-dragndrop-state.html)

## Classes

- `file-input`

## Modifiers

- `focused`
- `disabled`
- `error`
- `warning`
- `success`
- `dragndrop`: When the input is hovered with a pointer dragging a file(s).
- `busy`: When an upload is in progress.

## Variables

- `--file-input-color`
- `--file-input-bg-color`
- `--file-input-border-width`
- `--file-input-border-color`
- `--file-input-border-radius`
- `--file-input-border-focus-color`
- `--file-input-bg-focus-color`
- `--file-input-disabled-color`
- `--file-input-disabled-border-color`
- `--file-input-disabled-bg-color`
- `--file-input-dragndrop-color`
- `--file-input-dragndrop-border-color`
- `--file-input-dragndrop-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
