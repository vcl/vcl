# Visual Component Library

[![Join the chat at https://gitter.im/vcl](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vcl?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

**Modular** and **extensible** CSS for the era of component-based
Web application development.

- Browse **[vcl.github.io](https://vcl.github.io/)** for the docs and demos
 of all modules in the VCL org’s repos.
- Check **[the presentation](http://vcl.github.io/presentation/index.html)**
introducing the VCL.

## Status

The current modules are released in the **0.4.x version series** and adhere to
[semver](http://semver.org/).
All modules with version level `>= 0.1.0` are ready for production use.

## Features

- Designed to style [Web Components](http://webcomponents.org/).
- JS framework agnostic ‒ use it with Angular, React and the like.
- For ambitious mobile and desktop applications.
- Theming through modules which can inherit from each other.
- Collection of [core modules](https://github.com/vcl/vcl//modules/core-modules)
  to handle the bulk of styling needs.
- [Default theme](https://github.com/vcl/vcl/themes/default-theme)
  for core modules with ~500 variables.
- Extensible through custom modules or just project local styles.
- Integrates seamlessly with a gulp based build process.
- As lightweight as you want ‒ include only what you need.
- Quick rendering through simple, low specificity selectors.
- Maintainable & readable code with unabstracted, obvious naming conventions.
- Relative units like `em` (Elements) are used wherever feasible.
- Powered by the [postcss](http://postcss.org)
  and [npm](https://www.npmjs.org/) eco systems.
- CSS level 4 features like the
  [color-function](http://dev.w3.org/csswg/css-color/#modifying-colors).
- Browsers compatibility is delegated to
  [Autoprefixer](https://github.com/postcss/autoprefixer).
- Future CSS features via [CSSNext](http://cssnext.io/).
  [Autoprefixer](https://github.com/postcss/autoprefixer).
- Mostly independent of HTML structure and element names.
- Generation of interactive documentations like [vcl.github.io](https://vcl.github.io/) only for modules **you** use.
- Embrace flex, no more float.

## Getting Started

### Example Project

See [the tutorial](https://github.com/vcl/vcl/tree/master/doc/tutorial) for
how to use VCL modules in a Web project and how to make it part of its
build process.

### Run a Module's Demos

    $ git clone https://github.com/vcl/vcl.git
    $ cd vcl/modules/button
    $ npm install
    $ npm start

### Missing a Module?

If you are a developer, see below how to create one.
We are willed to add new modules to the VCL org's range of modules
if they fit.
Otherwise [create an issue](https://vcl.github.io//issues).

### Development

See [DEVELOPMENT.md](DEVELOPMENT.md)
for the mechanics and philosophy behind VCL modules.
