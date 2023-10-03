# Visual Component Library

**Modular** and **extensible** CSS for the era of component-based
Web application development.

- Browse **[vcl.github.io](https://vcl.github.io/)** for the docs and demos.
- Check **[the presentation](https://vcl.github.io/presentation/index.html)**
introducing the VCL.

## Status

The current **2.x.x** release is stable and used in production. It adheres to
[semver](http://semver.org/).

## Features

- Designed to style [Web Components](http://webcomponents.org/).
- JS framework agnostic ‒ use it with Angular, React and the like.
- For ambitious mobile and desktop applications.
- Theming through components which can inherit from each other.
- [Default theme](https://github.com/vcl/vcl/packages/vcl/theme)
  for core modules with ~500 variables.
- Extensible through custom components or just project local styles.
- Integrates seamlessly with any sass based build process.
- As lightweight as you want it to be.
- Quick rendering through simple, low specificity selectors.
- Maintainable & readable code with unabstracted, obvious naming conventions.
- Relative units like `em` (Elements) are used wherever feasible.
- Powered by sass [sass](https://sass-lang.com/)
  and [npm](https://www.npmjs.org/) eco systems.
- Mostly independent of HTML structure and element names.
- Embrace flex.
- [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) markup for improved accessibility.

## Getting Started

### Example Project

See [the tutorial](https://github.com/vcl/vcl/tree/master/doc/tutorial) for
how to use VCL components in a Web project and how to make it part of its
build process.

### Run a Component's Demos

```sh
git clone https://github.com/vcl/vcl.git
npm install
npm run demo [component name] -- watch
e.g.
npm run demo button -- watch
```

### Missing a Component?

If you are a developer, see below how to create a component or extend one.
We are willed to add new features and improvements.

Otherwise [create an issue](https://vcl.github.io/issues).

### Development

See [DEVELOPMENT.md](DEVELOPMENT.md)
for the mechanics and philosophy behind VCL modules.
