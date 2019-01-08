# [VCL](https://vcl.github.io/) email

Basic HTML email styling.

## Features

Inspired by (https://github.com/mailgun/transactional-email-templates).

- Is responsive with two break points 640px and 1024px viewport width.
- Tries to address some of the infinite quirks of email clients.

## Usage

Make sure to include CSS resulting from this module **only for emails**.
Most likely you want to inline the generated CSS in the HTML code as this
provides the best compatibility.

The following invoice example shows how to use the classes
together with classes from other VCL modules.

[invoice example](/demo/example-invoice.html)

## Classes

- `vclEmailViewport`
- `vclEmailBody`
- `vclEmailFooter`

## Modifiers

## Variables

- `--email-viewport-color`
- `--email-viewport-bg-color`
- `--email-body-bg-color`
- `--email-body-border-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
