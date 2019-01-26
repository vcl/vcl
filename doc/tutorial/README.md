# [VCL](https://vcl.github.io/) tutorial

A short tutorial showing how to create VCL builds based on the collection of
[core modules](https://github.com/vcl/vcl/modules/core-modules),
how to style a web page with it and how to run a single component demo.

## How to build a set of VCL Modules

0.  You will need a current version of node.JS and npm installed
    because all VCL modules are managed through npm.

1.  Clone the doc repo from Github and navigate to the `tutorial` directory.

    `$ git clone https://github.com/vcl/vcl.git && cd vcl/doc/tutorial`

2.  As you can see the folder contains several files and a folder:
  * `package.json` for this tutorial listing all required VCL and other NPM modules.
  * `index.html` is an example website, you can use later.
  * `index.sss` is the index file which just includes other modules and files using `@import`.
  * `vcl-custom.sss` is a file where one can add custom rules or override VCL rules.
  * `vcl-var-override.sss` is a file where variables of VCL modules can be re-defined before they are compiled.

3.  Open a terminal and execute `npm install` from the `tutorial` folder.
    After that a folder `node_modules` is created which contains all VCL modules specified in the `package.json`.

4.  Install the vcl-preprocessor command line tool:

    `npm install -g vcl-preprocessor`

5.  From the tutorial folder run the VCL preprocessor to create a VCL build:

    `vcl-preprocessor index.sss vcl.css`

    You should see "✔ Succesfully compiled input to vcl.css" in the terminal if everything is fine.

6. Open the `index.html` to see the results. You can also run `npm start` to open it in your default browser.


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

## How to run a Component's Demo

You might want to know what a component might look like.
Therefore you can build a component demo.
In this tutorial d a demo for the vcl-gallery component is opened.

0.  Switch to the directory of the component, you want to build.
    For this example switch to:
    `./tutorial/node_modules/vcl-gallery`

1.  Now install the sub-packages needed for building a demo. Since these are
   `devDependencies` they are not automatically downloaded in sub-folders.
    To run the demo, run:

    `npm install`

2.  After installing the required packages, run from vcl-gallery, run:

    `npm start`

If it was successful, you should now have a folder build in vcl-gallery.
You can now access the demo on [localhost](http://localhost:8077/example.html).
