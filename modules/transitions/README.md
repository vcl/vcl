# [VCL](https://github.com/vcl/doc) transitions

**DEPRECATED** because JS driven animations should be used.
Diverse transitions.

## Features

There are only very basic transitions supported by this module and we
do not seek to add much more. That's because CSS transitions and animations
should not be used whenever it is feasible to use the upcoming
JavaScript API based
[Web animation standard](http://w3c.github.io/web-animations/).

## Classes

### Helpers

- `vclAnimContainer`
- `vclNoTransitions`

### Transitions

#### Opacity based

Fade-in and not out effect.

- `vclFade`

#### Translation based

Slide and fade in and out from location.

- `vclTranslation`
- `vclTranslation-center`
- `vclTranslation-top`
- `vclTranslation-bottom`
- `vclTranslation-left`
- `vclTranslation-right`

## Modifiers

- `vclShow`: Play the transition when added and in reverse when removed.

## Variables

## Demo

[example.html](/demo/example.html) on GH-pages.
