# [VCL](https://vcl.github.io/) breakpoints

Descriptive breakpoints for responsive adaptation of components.

## Features

The following ranges of viewport widths are defined:

- up to 575px: extra small (mobile phone form factor)
- 576 to 991px: medium (tablets and narrow screen computers)
- 992x to 1199px: large screens
- 1200px to 1399px: extra large screens
- greater than 1400px: hi-res screens

## Usage

Warning: Try to prevent responsive components as much as you can,
[see why](https://vcl.github.io/#responsive-css-via-media-queries).

```css
@media (max-width: @bp-xs-max); /* mobile phone styles */
```

## Variables

- `$breakpoints` - Breakpoints take the following form:
  ```
  $breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
  );
```
