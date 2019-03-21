# [VCL](https://vcl.github.io/) breakpoints

Descriptive breakpoints for responsive adaptation of components.

## Features

The following ranges of viewport widths are defined:

- up to 390px: small (mobile phone form factor)
- 391px to 1279px: medium (tablets and narrow screen computers)
- greater or equal 1280px: large or hi-res small screens
- greater than 1920px: large or hi-res small screens
- greater than 2560px: large or hi-res small screens
## Usage

Warning: Try to prevent responsive components as much as you can,
[see why](https://vcl.github.io/#responsive-css-via-media-queries).

```css
@media (--sm-viewport)
  /* narrow window styles */
```

## Classes

## Modifiers

## Media

### Generic

Display widths:

- `--sm-viewport` up to 390px
- `--md-viewport` between 391px and 1279px
- `--lg-viewport` from 1280px
- `--sl-viewport` from 1920px
- `--ul-viewport` from

### Real World

- `--up-to-smartphone-landscape`

## Demo

[example.html](/demo/example.html) on GH-pages.
