# [VCL](https://vcl.github.io/) breakpoints

Descriptive breakpoints for responsive adaptation of components.

## Features

The following ranges of viewport widths are defined:

- up to 599px: extra small (mobile phone form factor)
- 600 to 1023px: medium (tablets and narrow screen computers)
- 1024px to 1439px: medium (tablets and narrow screen computers)
- 1440px to 1919px: large screens
- greater than 1920px: hi-res screens

## Usage

Warning: Try to prevent responsive components as much as you can,
[see why](https://vcl.github.io/#responsive-css-via-media-queries).

```css
@media (max-width: @bp-xs-max)
  /* mobile phone styles */
```

## Classes

## Modifiers

## Media

### Generic

Display widths:

-  `$bp-xs-min`: 0px
-  `$bp-xs-max`: 599px
-  `$bp-sm-min`: 600px
-  `$bp-sm-max`: 1023px
-  `$bp-md-min`: 1024px
-  `$bp-md-max`: 1439px
-  `$bp-lg-min`: 1440px
-  `$bp-lg-max`: 1919px
-  `$bp-xl-min`: 1920px

## Demo

[example.html](/demo/example.html) on GH-pages.
