# Guidelines for writing VCL Modules

Here are stipulations and guidelines about writing VCL modules.
This guide also describes the mechanics behind the VCL and thus is
also vital to understand how VCL modules work.

## Structure

Use the [vcl-list](https://github.com/vcl/vcl/modules/list) as a prototype.

## package.json

Have an `index.sss` or `index.css` file per module which is referenced in
the `package.json` in the `style` property.

Have the following custom fields in the `package.json` file:

- `style` points to the entry CSS file of the module.
- `vcl.categories` an array of categories. Example:

    {
      "title": "Icons",
      "priority": 140,
      "ItemPriority": 30
    }

  - `category.title` - The title of the category.
  - `category.priority` - The priority of the category.
     Determines the ordering of the menu item.
  - `category.ItemPriority`- Priority of the Item.
    Determines the display order within its category.
- `vcl.needs` Specifies what this module needs.
  (Most modules need a `theme` provider).
- `vcl.provides` What this module provides.
  Examples: `theme`, `theme-terms`, `button`.

The categorization is used for the documentation generator
[doc-gen](https://github.com/vcl/vcl/tools/doc-gen) to generate a static documentation
including demos of your modules.

### Soft Dependencies

Soft dependencies via `devDependencies` are used to specify the
dependencies of modules to run the demos.

### Needs & Provides

`vcl.needs` and `vcl.provides` are used for package ordering when using the
package compile feature of the
[vcl-preprocessor](https://github.com/vcl/vcl/tools/preprocessor) which is also used by
the documentation generator.
Packages which are needed by others are put before them while pre-processing.

#### Example

Package           | `needs`         | `provides`
---               | ---              | ---
vcl-button        | theme            | button
vcl-dropdown      | theme, button    |
vcl-default-theme |                  | theme

Results in the following order:

1. vcl-default-theme
2. vcl-button
3. vcl-dropdown

## CSS Syntax and Use

Use the
[indent-based CSS syntax](https://github.com/postcss/sugarss)
or plain CSS. Normal CSS files end with the `.css` suffix, sugar SS
white space files end with the `.sss` suffix.

## Selectors, Class Naming and Units

Do’s:

- `vcl` name space prefix for any class name.
- Class names in camelCased letters (why? because it’s easier to read and
  shorter than dashes).
- Have a single class name like `vclFlipSwitch` on the root element of the
  corresponding HTML.
- Use relative units like `em`, `rem` etc.
- Descendants names: Apply the same naming conventions; i. e.
  `vclDescendantName`.
- Except for some common Modifiers, use names such as:
  `vclComponentName[SubElementName]ModifierName`.
- To shorten this, you can abbreviate the component name and sub element
  name, e. g. `vclFSModifier`.

Don’ts:

- No element ID based selectors.
- Avoid element name bound selectors;
  i. e. don’t do `div.header` or `h1.title`.
- Except in some cases, avoid the descendant selector based on element names;
  i. e. don’t use `.vclComponent h3`. Always introduce classes.
- Except in some very rare cases, avoid using `!important`.
- Don’t use vendor prefixes.

## Variable Naming

[CSS4 variables](https://drafts.csswg.org/css-variables/) form the interface
of modules. The following naming rules should be applied:

    --component-name-[sub-element-name]-aspect[--variant]

The _aspect_ is the actual value influenced by this variable like
_bg-color_, _font-size_ etc.
The variant is only to be used if the component actually has a variant
like a _secondary_ or _danger_.

Example:

    --tab-nav-bg-color--uni

## Usable CSS Features

Use the [flexbox based layout attributes](https://github.com/vcl/vcl/modules/layout)
to realize complex layouts or flexbox based rules in the module itself.
Apart from that, try to stick to the browser compatibility statement below.

## Box-sizing

We do **not** `* { box-sizing: border-box; }` but of course anything that has
a border on the left/ right side and may have a width of 100% gets it.
For example the layout grid or input controls.

## Z-Indexes

There is a carefully tuned hierarchy of z-indexes as defined here:

Value or Range             | Component or reserved Range
---                        | ---
1                          | divider
1, 2, 3                    | gallery
1                          | input group
1, 2                       | process nav
1, 2                       | progress bar
5                          | popover
9                          | process nav
10                         | drawer
10                         | info-overlay
180, 199                   | zoom-index
200 … 299                  | dropdown
300 (backdrop), 401 … 498  | layer
250                        | loading-layer
499, 500                   | tooltip
600                        | nag

## Responsive CSS via Media Queries

Try to prevent them and let the app developer add them as needed!
We believe that HTML structures and CSS rules should be as simple as possible
to use and this requires them to have a deterministic behavior;
In most cases the “automagical” nature of implicit media
queries are awkward in many situations especially considering that
even the most anticipating ruleset will most likely not fit your very needs.
So we recommend to create explicit rules for every case a media query
dependent style change should apply.
Or when rendering on the client side (mostly with a single page
app architecture) create what we call an adaptive view. This
means to render a separate view (possibly from two templates) for each case.
So how to prevent them?

- A good way to do that is to create components which can be used
on wide and narrow screen devices without any adaptation.
- Offer an alternative layout (with demo) for narrow viewports. This alternative
may be a mashup of different components.
- Offer a modifier to enable the responsive behavior.

## Variants and Visual Hierarchy

Sometimes it’s useful to have two or more variants of a component, often
this is to convey a visual hierarchy like with headings (`h1` - `h6` elements).
Always do this with modifiers like `vclSecondary` for the secondary
level variant. The primary variant always goes without modifier.

## HTML Demo Snippets

- Have a folder `demo` containing a file `example.html` and optionally more
  demos in other files.
- Include multiple demos using HTML imports `<link rel="import"...`
  in `example.html`.
- Demo file must be HTML fragments without head and body elements.
- Have at least one example with proper
  [WAI-ARIA](http://www.w3.org/WAI/intro/aria) plumbing.
- You can neglect semantic HTML due to that.
- Use inline CSS via the `style` attribute for rules that are only
  required for the demo and not intended to be applies by the user.

# Development

Clone the VCL's monorepo, enter the folder of the module you want to work on
and use the following npm scripts:

* `npm start` - starts a web server and opens the examples
  (browsersync enabled).
* `npm test` - tries to pre-process the sources.

# Theming

Themes like the [default theme](https://github.com/vcl/vcl/themes/default-theme) just
define variables which are expected to be set by the modules in scope of it.
A theme can be for a single module or a collection of modules.
In order to create a new theme it may be sensible to just extend/ override
the default theme as done in the
[bw theme](https://github.com/vcl/vcl/themes/bw-theme)

# Browser Compatibility

Compatibility differs on module level and is delegated to
[Autoprefixer](https://github.com/postcss/autoprefixer).

In general, at least the following should be supported and tested:

- Reasonably recent Firefox builds,
- Internet Explorer 11 and up,
- Reasonably recent Webkit/ Blink engines and derivatives.
- Plus their mobile variants.

# Related Tools

A similar and partly compatible approach is pursued by:

- [atomify-css](https://github.com/atomify/atomify-css) which is abandoned,
- [SUITCSS](https://github.com/suitcss) which is outdated.

# Contributing

PRs are welcome! Please understand that we will only accept modules and
changes which we think fit in the current VCL eco-system.
