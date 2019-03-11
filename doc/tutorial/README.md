# [VCL](https://vcl.github.io/) tutorial

Short tutorials showing how to create VCL builds based on the collection of
[core modules](../../modules),
how to style a web page with it and how to run a single component demo.


## Tutorials

- [vcl preprocessor cli](preprocessor-cli/README.md)
- [webpack](webpack/README.md)


## Styling a Web Page with the VCL

At this point, you should already have a functional page. If you open the index.html, while the file vcl.css
is in the same directory, you should see an example blog-page.

![picture alt](https://cdn.jsdelivr.net/gh/vcl/vcl/doc/tutorial/screenshot.png)

Explanation of the `index.html` file:
First, we include our compiled version of VCL using:

```html
<link rel="stylesheet" href="vcl.css">
```
The top-level elements have the classes `vclViewport` and `vclApp`.
The application's viewport represents the whole screen of the device and
the class provides a background color for it.
The app area (`vclApp`) defines the application area which is mainly used
to define a max-width for the content area.
Using the CSS class `vclGridRow` we define a new row of our layout.
Using the CSS class `vclGridSpan-3` we define that the element will take 3/15 of the width of the `vclContentArea`.
This kind of classes is typical for fluid-grid CSS frameworks. The layout grid module has a total of 15 columns.
The horizontal navigation menu on the top of the page is built using the `vclNavigation` class:

```html
<nav class="vclNavigation">
```

Similarly the navigation bar on the left but with the modifier class `vclVertical`:

```html
<nav id="nav" class="vclNavigation vclVertical">
```

The search input is more complex and actually a mashup of multiple VCL components:

```html
<div class="vclInputGroupEmb">
  <span class="vclPrepended">
    <div class="vclIcon fa fa-search"></div>
  </span>
  <input class="vclInput vclNoBorder vclPrepItem vclAppItem searchInput" placeholder="Search Posts" type="text">
  <button class="vclButton vclTransparent vclSquare vclAppended">
     <div class="vclIcogram">
       <div class="vclIcon fa fa-times-circle" aria-hidden="true" aria-label="Clear" role="img"></div>
     </div>
  </button>
</div>
```

In the same manner, all VCL styles are used.
You can find out more on the available modules, their classes and
purpose in the [module browser](https://vcl.github.io/).
