# Guidelines for writing VCL Modules

Here are stipulations and guidelines about writing VCL modules.
This guide also describes the mechanics behind the VCL and thus is
also vital to understand how VCL modules work.

## Structure

Use the [vcl-list](https://github.com/vcl/vcl/modules/list) as a prototype.

## package.json

Have an `index.scss` file per module which is referenced in
the `package.json` in the `scss` property.

Have the following custom fields in the `package.json` file:

- `scss` points to the entry CSS file of the module.
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

The categorization is used for the documentation generator
[doc-gen](https://github.com/vcl/vcl/tools/doc-gen) to generate a static documentation
including demos of your modules.

### Dependencies

Use the `@use ...` syntax on top of your file if your module has dependencies to another module.
Most modules need to use the `@vcl/theme`

```sss
@use "../theme"
@use "../button"

.my-module
  color: green
```

## Selectors, Class Naming and Units

Do’s:

- Class names in camelCased letters (why? because it’s easier to read and
  shorter than dashes).
- Have a single class name like `flip-switch` on the root element of the
  corresponding HTML.
- Use relative units like `em`, `rem` etc.
- Descendants names: Apply the same naming conventions; i. e.
  `descendant-name`.

Don’ts:

- No element ID based selectors.
- Avoid element name bound selectors;
  i. e. don’t do `div.header` or `h1.title`.
- Except in some cases, avoid the descendant selector based on element names;
  i. e. don’t use `.component h3`. Always introduce classes.
- Except in some very rare cases, avoid using `!important`.
- Don’t use vendor prefixes.

## Usable CSS Features

Use the [flex-grid layout attributes](https://github.com/vcl/vcl/modules/flex-grid)
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
1                          | material style inputs label
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
Always do this with modifiers like `secondary` for the secondary
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
- Create a `demo.css` in the module root for additional styling of the demo.
  Do not forget to import the module style in `index.sss` or `index.css`.

```sss
@use "../some-required-dep-for-the-demo"
@use "./index.scss"

.demoSpecificStuff {
  color: red
}
```

# Development

Clone the VCL's monorepo, enter the folder of the module you want to work on
and use the following npm scripts:

- `npm start` - starts a web server and opens the examples
  (browsersync enabled).
- `npm test` - tries to pre-process the sources.

# Theming

Themes like the [default theme](https://github.com/vcl/vcl/themes/theme) just
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

- [SUITCSS](https://github.com/suitcss) which is outdated.

# Contributing

PRs are welcome! Please understand that we will only accept modules and
changes which we think fit in the current VCL eco-system.
