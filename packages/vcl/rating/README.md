# [VCL](https://vcl.github.io/) rating

Rating.

## Features

Can visualize the current average rating and take ratings as input by
click on a discrete rating item.
The rating items are `icon`s with proper ARIA attributes.
As an input control, it supports a read read-only mode.

## Usage

Basic.

[basic example](/demo/example-basic.html)

Highlighted items to visualize the covered range of a rating when hovered
with a pointer. In this example, the third item is hovered.

[highlight example](/demo/example-highlight.html)

Disabled (read-only).

[disabled example](/demo/example-disabled.html)

## Classes

- `rating`
- `rating-item`

## Modifiers

- `disabled`
- `rating-item-highlighted`: For rating items to visualize the range of
  a rating affordance on hover.

## Variables

- `$rating-item-color`
- `$rating-item-disabled-color`
- `$rating-item-highlighted-color`
