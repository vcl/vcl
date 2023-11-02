# [VCL](https://vcl.github.io/) progress-bar

Show the progress of an operation.

## Features

The progress is reflected as horizontal bar which is shown within a container.
There are two overlaying bars to represent a primary and an optional secondary
progress. In _indeterminate_ mode, an animation is shown to indicate an
ongoing process whose progress cannot be determined.

## Usage

[basic example](/demo/example.html)

## Classes

- `progress-bar`
- `progress`

## Modifiers

### For `progress-bar`

- `indeterminate`: Show an animation indicating that the progress cannot
  be determined.
- `transparent`: Transparent background

### For `progress`

- `primary`
- `secondary`

## Variables

- `$progress-bar-progress-label-color`
- `$progress-bar-container-bg-color`
- `$progress-bar-primary-progress-bg-color`
- `$progress-bar-secondary-progress-bg-color`
