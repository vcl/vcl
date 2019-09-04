# [VCL](https://vcl.github.io/) modules

A collection of [VCL modules](https://github.com/vcl).

The default import includes the components that 80% of all reasonable complex Web apps need.

An icon font is _not_ included to leave this choice open.
You can use any icon font or multiple ones.
There are integration modules for:

- Font Awesome
- Material Design Icons

Which include the related CSS in the VCL build. This is not a requirement, however.

```scss
@import "@vcl/vcl"
// @import "@vcl/font-awesome"
// @import "@vcl/material-design-icons"
```

There are other imports
```scss
// Imports the whole vcl, including all icon fonts
@import "@vcl/vcl/complete" 
```

```scss
// Imports modules considered "core"
@import "@vcl/vcl/core"
// Additional vcl modules
@import "@vcl/token"
```

List of core modules:

- normalize.css
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