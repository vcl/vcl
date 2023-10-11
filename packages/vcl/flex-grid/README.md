# [VCL](https://vcl.github.io/) flex-grid

Responsive flexbox based grid and layout.

## Features

A responsive, declarative layout system built on top of CSS Flexbox.
Features in CSS Flexbox are exposed as classes that can be put on any element.

## Usage

Flexbox based layout primitives that can solve almost all layout challenges.
A flex container can render its content either horizontal with the container class `row` or vertical with the container class `col`.

[basic example](/demo/example-basic.html)

The size of a grid is determined by its content. You can add the `flex` class to let the cell take the available space. Multiple `flex` cells distribute the space equally.
Additionally a twelve cell grid is provided via the `flex-1` to `flex-12` classes. It allows to define the amount of space a cell uses.

e.g. `<div class="flex-6">` takes half of the available space.

[size example](/demo/example-size.html)

Offsets allow set a horizontal offset to a cell.

[offset example](/demo/example-offset.html)

The flex layout includes classes for building responsive layouts.
Customize the size of your columns on extra small (`xs`), small (`sm`), medium (`md`), large (`lg`), or extra large (`xl`) devices how you see fit.

For layouts that are the same from the smallest of devices to the largest, use the  `.flex-1` classes described before.
For device specific layouts, add the breakpoint as a suffix.

e.g. `<div class="flex-12 flex-8-md">` has a size of 12 on `xs` and `sm` devices, but a size of 8 on `md`, `lg` and `xl` devices.

Check the breakpoints section for more details.

[responsive example](/demo/example-responsive.html)

Use `grid-gutter-1` to `grid-gutter-5` classes to space out grid cells.
Warning: Gutters apply negative margins to the container element and positive paddings to the children. Take this into account when you are setting background colors or adding other padding/margins.

[grid gutter example](/demo/example-grid-gutter.html)

Use ```flex-span-{size}p``` and ```flex-span-{bp}-${size}p``` to acheive percentage based ratio size of
flex items.

[Percentage ratio of flex item](/demo/example-percentage-size.html)

There are several modifier classes to change the positioning of the cells

[positioning example](/demo/example-positioning.html)

## Classes

### Flex Layout

- `row`
- `col`
- `flex`
- `self-start`
- `self-center`
- `self-end`
- `self-stretch`
- `flex-1` to `flex-12`
- `flex-1-bp` to `flex-12-{bp}` where {bp} is a breakpoint
- `flex-span-5p` to `flex-span-100p`
- `flex-span-{bp}-5p` to `flex-span-{bp}-100p` where {bp} is a breakpoint
- `offset-1-bp` to `offset-12-{bp}` where {bp} is a breakpoint
- `grid-gutter-1` to `grid-gutter-5`
- `grid-gutterx-1` to `grid-gutterx-5`
- `grid-guttery-1` to `grid-guttery-5`

## Modifiers

- `align-items-start`
- `align-items-end`
- `align-items-center`
- `justify-content-start`
- `justify-content-center`
- `justify-content-end`
- `justify-content-between`
- `justify-content-around`
- `inline`
- `reverse`
- `flex-no-wrap`
- `flex-wrap-reverse`
