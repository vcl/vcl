# [VCL](https://github.com/vcl/doc) typography

Styling for basic typographical elements.

## Features

## Usage

### Headings

Essential structuring of content with heading elements.

[headings example](/demo/example-headings.html)

### Anchors

Links may be combined with icons using the icogram component
like the example below which indicates an external link.

[anchors example](/demo/example-anchors.html)

### Essential

Feel free to use text tags like `b` or `i` with the following semantics:
`b` is meant to highlight words or phrases without conveying additional
importance while `i` is mostly for voice, terms you are referring to, etc.

[essentials example](/demo/example-essentials.html)

### Abbreviations

Stylized implementation of HTML's `abbr` element for abbreviations and
acronyms to show the expanded version on hover.
Abbreviations with a `title` attribute have a light dotted bottom border
and a help cursor on hover, providing additional context on hover.

[abbreviations example](/demo/example-abbreviations.html)

Add the `initialism` class to an acronym for a slightly smaller
font size and a transformation to capitals.

### Small Caps

[small-caps example](/demo/example-small-caps.html)

### Blockquote

A blockquote spanning over multiple lines.

[blockquote example](/demo/example-blockquote.html)

### Miscellaneous

[miscellaneous example](/demo/example-miscellaneous.html)

### Subscripts and Superscripts

Superscripted and subscripted text can for example be used for footnotes or
chemical formulas. The same classes can be used for all other text classes as
they inherit color and font sizing

[sub-up example](/demo/example-sub-up.html)

### Pre-formatted Text

Pre-formatted text using the `pre` element is laid out as typed in the source
code i. e. white spaces inside this element are displayed as typed.

[pre example](/demo/example-pre.html)

### Preformatted Code

[code example](/demo/example-code.html)

## Classes

- `content-link`: A link which can carry an vcl-icogram.

## Modifiers

- `disabled`: To disabled links.
- `secondary-text-color`: The secondary text color.

## Variables

### Font Settings

- `--typography-font-family`
- `--typography-font-family-serif`
- `--typography-font-family-monospace`
- `--typography-font-size`
- `--typography-line-height`

### Modular Scale Variants

- `--typography-mod-scale-1`
- `--typography-mod-scale-2`
- `--typography-mod-scale-3`
- `--typography-mod-scale-4`
- `--typography-mod-scale-5`
- `--typography-mod-scale-6`

### Colors and Decorations

- `--typography-text-color`
- `--typography-link-color`
- `--typography-link-hover-color`
- `--typography-link-text-decoration`
- `--typography-heading-color`
- `--typography-disabled-color`
- `--typography-mark-color`
- `--typography-mark-bg-color`
- `--typography-code-border-color`
- `--typography-code-bg-color`
- `--typography-selected-text-bg-color`
- `--typography-selected-text-color`
- `--typography-blockquote-border-color`

## Demo

[example.html](/demo/example.html) on GH-pages.
