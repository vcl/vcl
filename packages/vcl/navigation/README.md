# [VCL](https://vcl.github.io/vcl/) navigation

Horizontally and vertically aligned multilevel navigation.

## Features

Allows to build a hierarchical navigation by supporting three levels in total,
which can be styled separately. The items are just icograms, so icons can be
prepended or appended.

The `navigation-heading` can be used to create a header grouping
a subset of the navigation items.

## Usage

The anchor tags used as content of the items are optional and should
be considered for SEO reasons.

Horizontal.

[horizontal example](/demo/example-horizontal.html)

Vertical.

[vertical example](/demo/example-vertical.html)

Vertical with opened levels.

[vertical-nested example](/demo/example-vertical-nested.html)

## Classes

- `navigation`
- `navigation-heading`
- `navigation-item`
- `navigation-item-label`

## Modifiers

### For `navigation-item`

- `disabled`

## Variables

- `$navigation-bg-color`
- `$navigation-color`
- `$navigation-heading-color`
- `$navigation-heading-bg-color`
- `$navigation-item-disabled-bg-color`
- `$navigation-item-disabled-color`
- `$navigation-item-1st-level-bg-color`
- `$navigation-item-1st-level-color`
- `$navigation-item-1st-level-hover-bg-color`
- `$navigation-item-1st-level-hover-color`
- `$navigation-item-1st-level-selected-bg-color`
- `$navigation-item-1st-level-selected-color`
- `$navigation-item-2nd-level-bg-color`
- `$navigation-item-2nd-level-color`
- `$navigation-item-2nd-level-hover-bg-color`
- `$navigation-item-2nd-level-hover-color`
- `$navigation-item-2nd-level-selected-bg-color`
- `$navigation-item-2nd-level-selected-color`
