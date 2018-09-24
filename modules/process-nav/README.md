# [VCL](https://github.com/vcl/doc) process-nav

Navigate within a process consisting of steps.

## Features

The process navigation can be used for step-by-step user guidance.
The supported steps are: disabled, current and completed.
The user may be allowed to jump into arbitrary steps or can be restricted to
only use certain steps by disabling others.

The width of a step is automatically laid out according to the
width of its label. The whole component containing all steps always occupies
100% width.

The component has responsive features in that the step labels are cut with
an ellipsis if there is not enough room to show it.

For narrow viewports, a specialization of the
[toolbar component](https://github.com/vcl/toolbar)
component is used.

## Usage

Basic.

[normal example](/demo/example-normal.html)

For narrow viewports, a sensible option is to show only the current
item along with directional navigation controls. For this, the `vclToolbar` is
used.

[narrow example](/demo/example-narrow.html)

## Classes

- `vclProcessNav`

## Modifiers

- `vclProcessNavArrows`: Items appear as arrows.

## Variables

- `--process-nav-arrow-border-width`
- `--process-nav-arrow-border-color`
- `--process-nav-item-bg-color`
- `--process-nav-item-color`
- `--process-nav-item-hover-color`
- `--process-nav-disabled-bg-color`
- `--process-nav-disabled-color`
- `--process-nav-selected-item-color`
- `--process-nav-selected-item-bg-color`
- `--process-nav-completed-item-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
