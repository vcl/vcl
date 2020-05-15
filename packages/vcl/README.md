# [VCL](https://vcl.github.io/) - @vcl/vcl

The `@vcl/vcl` package contains all modules that are part of the vcl and provides different entry points for imports.

## Installation

```sh
npm install @vcl/vcl --save
```

## Usage

The package's default import includes the components that 80% of all reasonable complex web apps need.
An icon font is _not_ included to leave this choice open.

```scss
@import "@vcl/vcl";
```

Use the following import for a collection of core modules

```scss
@import "@vcl/vcl/core"
// Additional vcl modules
...
```

List of core modules:

- theme
- app
- breakpoints
- button
- button-group
- checkbox
- container
- divider
- drawer
- fieldset
- flex-grid
- form
- icogram
- icon
- input
- logo
- loose-button-group
- radio-button
- responsive-image
- scrollbar
- select
- select-list
- size-modulation
- toolbar
- typography
- utils