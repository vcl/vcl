# [VCL](https://vcl.github.io/) flex-grid

Responsive flexbox based grid

## Features

A responsive, declarative layout system built on top of CSS Flexbox.
Features in CSS Flexbox are exposed as classes that can be put on any element.

## Usage

Flexbox based layout primitives that can solve almost all layout challenges.


[basic example](/demo/example-basic.html)

The size of a grid is determined by its content. You can add the `vclFlex` class to let the cell take all the available space. All `vclFlex` cells distribute the space equally.
Additionally a twelve cell grid is provided. It allows to distribute space for each cell.

[size example](/demo/example-size.html)

Offsets allow set a horizontal offset to a cell.

[size example](/demo/example-offset.html)

The flex layout includes five sets of predefined classes for building responsive layouts. 
Customize the size of your columns on extra small, small, medium, large, or extra large devices how you see fit.

For layouts that are the same from the smallest of devices to the largest, use the .vFlex# and .vFlex#-bp` classes. Specify a numbered class from 1 to 12 when you need a particularly sized column and optionally a breakpoint. Otherwise stick to .vclFlex.

[responsive example](/demo/example-responsive.html)

Use `vclGutter-#` classes to space out cells. 
Warning: Gutters apply negative margins to the container element and positive paddings to the chilrden. Take this into account when you are adding other padding/margins or classes that add spacing.

[gutter example](/demo/example-gutter.html)

## Classes

### Flex Layout

- `vclHor`
- `vclVer`
- `vclFlex`
- `vclSelfStart`
- `vclSelfCenter`
- `vclSelfEnd`
- `vclSelfStretch`
- `vclFlex-[bp]`
- `vclFlex-[1-12]-[bp]`
- `vclOffset-[1-12]-[bp]`
- `vclGutter-[0-5]`
## Modifiers
- `vclStart`
- `vclEnd`
- `vclCenter`
- `vclJustifyStart`
- `vclJustifyCenter`
- `vclJustifyEnd`
- `vclJustifyBetween`
- `vclJustifyAround`
- `vclInline`
- `vclReverse`
- `vclWrapReverse`


## Demo

[example.html](/demo/example.html) on GH-pages.
