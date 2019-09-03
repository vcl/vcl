# [VCL](https://vcl.github.io/) flex-grid

Responsive flexbox based grid

## Features

A responsive, declarative layout system built on top of CSS Flexbox.
Features in CSS Flexbox are exposed as classes that can be put on any element.

## Usage

Flexbox based layout primitives that can solve almost all layout challenges.
A flex container can render its content either horizontal with the container class `vclHor` or vertical with the container class `vclVer`.

[basic example](/demo/example-basic.html)

The size of a grid is determined by its content. You can add the `vclFlex` class to let the cell take the available space. Multiple `vclFlex` cells distribute the space equally.
Additionally a twelve cell grid is provided via the `vclFlex-1` to `vclFlex-12` classes. It allows to define the amount of space a cell uses.

e.g. `<div class="vclFlex-6">` takes half of the available space.

[size example](/demo/example-size.html)

Offsets allow set a horizontal offset to a cell.

[offset example](/demo/example-offset.html)

The flex layout includes classes for building responsive layouts.
Customize the size of your columns on extra small (`xs`), small (`sm`), medium (`md`), large (`lg`), or extra large (`xl`) devices how you see fit.

For layouts that are the same from the smallest of devices to the largest, use the  `.vclFlex-1` classes described before. 
For device specific layouts, add the breakpoint as a suffix.

e.g. `<div class="vclFlex-12 vclFlex-8-md">` has a size of 12 on `xs` and `sm` devices, but a size of 8 on `md`, `lg` and `xl` devices.

Check the breakpoints section for more details.

[responsive example](/demo/example-responsive.html)

Use `vclGridGutter-1` to `vclGridGutter-5` classes to space out grid cells. 
Warning: Gutters apply negative margins to the container element and positive paddings to the chilrden. Take this into account when you are setting background colors or adding other padding/margins.

[grid gutter example](/demo/example-grid-gutter.html)

There are several modifier classes to change the positioning of the cells

[positioning example](/demo/example-positioning.html)


## Classes

### Flex Layout

- `vclHor`
- `vclVer`
- `vclFlex`
- `vclSelfStart`
- `vclSelfCenter`
- `vclSelfEnd`
- `vclSelfStretch`
- `vclFlex-1` to `vclFlex-12`
- `vclFlex-1-bp` to `vclFlex-12-bp` where bp is a breakpoint
- `vclOffset-1-bp` to `vclOffset-12-bp` where bp is a breakpoint
- `vclGridGutter-1` to `vclGridGutter-5`
- `vclGridGutterX-1` to `vclGridGutterX-5`
- `vclGridGutterY-1` to `vclGridGutterY-5`
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
- `vclNoWrap`
- `vclWrapReverse`


## Demo

[example.html](/demo/example.html) on GH-pages.
