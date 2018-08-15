# [VCL](https://github.com/vcl/vcl/doc) breakpoints

Descriptive breakpoints for responsive adaptation of components.

## Features

The following ranges of viewport widths are defined:

- up to 390px: small (mobile phone form factor)
- 390px to 1280px: medium (tablets and narrow screen computers)
- greater than 1280px: large (low- and hi-res large screens)

## Usage

Warning: Try to prevent responsive components as much as you can,
[see why](https://github.com/vcl/vcl/doc#responsive-css-via-media-queries).

```css
@media (--sm-viewport)
  /* narrow window styles */
```

## Classes

## Modifiers

## Media

### Generic

- `--sm-viewport`
- `--md-viewport`
- `--lg-viewport`

### Real World

- `--up-to-smartphone-landscape`

## Demo

[example.html](/demo/example.html) on GH-pages.
