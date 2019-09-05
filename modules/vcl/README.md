# [VCL](https://vcl.github.io/) - @vcl/vcl

The `@vcl/vcl` package installs all modules that are part of the vcl and provides different entry points for imports.

## Installation

```sh
npm install @vcl/vcl --save
npm install @vcl/preprocessor --save-dev
```

## 

The package's default import includes the components that 80% of all reasonable complex web apps need.

An icon font is _not_ included to leave this choice open.
You can use any icon font or multiple ones.
There are integration modules for:

- Font Awesome
- Material Design Icons

which include the related CSS in the VCL build. This is not a requirement, however.

```scss
@import "@vcl/vcl"
// @import "@vcl/font-awesome"
// @import "@vcl/material-design-icons"
```

Use the following import to add the whole vcl, including all icon fonts.
```scss
@import "@vcl/vcl/complete" 
```

Use the following import for a collection of core modules

```scss
@import "@vcl/vcl/core"
// Additional vcl modules
...
```

List of core modules:

- theme
- app-area
- app-content-area
- app-footer
- app-header
- breakpoints
- button
- button-group
- checkbox
- container
- divider
- drawer
- dropdown
- embedded-input-button
- fieldset
- flex-grid
- form
- form-control-label
- icogram
- icon
- input
- logo
- loose-button-group
- radio-button
- responsive-image
- scrollbar
- select
- size-modulation
- toolbar
- typography
- utils