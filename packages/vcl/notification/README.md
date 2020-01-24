# [VCL](https://vcl.github.io/) notification

Notification messages for events.

## Features

The notifications may have header, a body and a footer while
the latter both are optional. They can semantically colored through
modifiers.

## Usage

Nested lists are also possible as shown in the warning-example.
If no icon is needed, you can remove it and assign `p-0`
to `notification-content` to remove the space on the left.

Basic (no modifier).

[basic example](/demo/example-basic.html)

Info.

[info example](/demo/example-info.html)

Warning.

[warning example](/demo/example-warning.html)

Error.

[error example](/demo/example-error.html)

Success.

[success example](/demo/example-success.html)

## Classes

- `notification`
- `notification-icon-container`
- `notification-icon`
- `notification-header`
- `notification-content`
- `notification-footer`

## Modifiers

Semantic coloring:

- `success`
- `info`
- `warning`
- `error`

## Variables

- `$notification-border-radius`
- `$notification-color`
- `$notification-bg-color`
- `$notification-hf-color`
- `$notification-hf-bg-color`
- `$notification-success-color`
- `$notification-success-bg-color`
- `$notification-success-hf-color`
- `$notification-success-hf-bg-color`
- `$notification-info-color`
- `$notification-info-bg-color`
- `$notification-info-hf-color`
- `$notification-info-hf-bg-color`
- `$notification-warning-color`
- `$notification-warning-bg-color`
- `$notification-warning-hf-color`
- `$notification-warning-hf-bg-color`
- `$notification-error-color`
- `$notification-error-bg-color`
- `$notification-error-hf-color`
- `$notification-error-hf-bg-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
