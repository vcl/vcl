# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.6.0](https://github.com/vcl/vcl/compare/v0.5.4...v0.6.0) (2019-09-04)

### Important notes

- `@vcl/core-modules` module is replaced with `@vcl/vcl` module.
- `utils` will provide some additional tools for spacing, sizing, guttering and visibility.
- `label` was merged into `badge`.
- `flex-layout` is is deprecated. Use `flex-grid` instead.
- `layout-spans` is is deprecated. Use sizing `utils` instead.

### Bug Fixes

* **preprocessor:** allow combining vclRoot with file based imports ([df7c918](https://github.com/vcl/vcl/commit/df7c918))
* **preprocessor:** crash fix ([993028a](https://github.com/vcl/vcl/commit/993028a))
* **theme:** add missing dependency ([dfb84d7](https://github.com/vcl/vcl/commit/dfb84d7))
* **material-style-inputs:** fix label position ([33c985a](https://github.com/vcl/vcl/commit/33c985a))
* **spinner:** fix button height ([f87741a](https://github.com/vcl/vcl/commit/f87741a))

### Code Refactoring

* **badge:** integrate label into badge ([f490621](https://github.com/vcl/vcl/commit/f490621))
* **flex-layout:** deprecate flex-layout and remove from @vcl/vcl module collection ([f5493d0](https://github.com/vcl/vcl/commit/f5493d0))
* **vcl:** refactor @vcl/core-modules into @vcl/vcl ([bc2c9e6](https://github.com/vcl/vcl/commit/bc2c9e6))

### Features

* **breakpoints:** adapt materiel style breakpoints ([da8d526](https://github.com/vcl/vcl/commit/da8d526))
* **flex-grid:** add flex-grid module ([d7ab70e](https://github.com/vcl/vcl/commit/d7ab70e))
* **preprocessor:** add at-rules-variables plugin ([e3e09c4](https://github.com/vcl/vcl/commit/e3e09c4))
* **utils:** add layouting utils ([68a867d](https://github.com/vcl/vcl/commit/68a867d))
* **utils:** add sizing utils ([6528526](https://github.com/vcl/vcl/commit/6528526))
* **utils:** add spacing and breakpoint aware visibility control utils ([a0ba57a](https://github.com/vcl/vcl/commit/a0ba57a))
* **utils:** add gutters ([0a23f73](https://github.com/vcl/vcl/commit/0a23f73))
* **button:** add hover color for selected state ([118778a](https://github.com/vcl/vcl/commit/118778a))

### Code Refactoring

* **layout-spans:** layout-spans module is deprecated and removed from the @vcl/vcl modules ([1beac8e](https://github.com/vcl/vcl/commit/1beac8e))

### BREAKING CHANGES

* **flex-layout:** flex-layout was removed from @vcl/vcl. Import manually if used.
* **utils:** Removed vclNoPadding and vclNoMargin. Use spacing utils instead.
* **vcl:** @vcl/core-modules is replaced with @vcl/vcl
* **badge:** vclLabel was removed. To update, replace "vclLabel" with "vclBadge" and "vclBadge"
with "vclBadge vclRounded".
* **utils:** Replaced vclDisplayNone with vclHide
* **layout-spans:** layout-spans module is deprecated and removed from the @vcl/vcl modules. Use sizing modules instead.





## [0.5.4](https://github.com/vcl/vcl/compare/v0.5.3...v0.5.4) (2019-08-13)


### Bug Fixes

* fix doc page vertical nav ([7762809](https://github.com/vcl/vcl/commit/7762809))


### Features

* **drawer:** make animations optional ([7756c24](https://github.com/vcl/vcl/commit/7756c24))





## [0.5.3](https://github.com/vcl/vcl/compare/v0.5.1...v0.5.3) (2019-08-13)


### Bug Fixes

* **date-picker:** remove calendar bottom margin if used in date-picker ([20fe12e](https://github.com/vcl/vcl/commit/20fe12e))


### Features

* **form-control-label:** support additional hint types ([e55ae12](https://github.com/vcl/vcl/commit/e55ae12))
* **material-style-inputs:** add material style inputs ([43029de](https://github.com/vcl/vcl/commit/43029de))





## [0.5.2](https://github.com/vcl/vcl/compare/v0.5.1...v0.5.2) (2019-08-13)


### Bug Fixes

* **date-picker:** remove calendar bottom margin if used in date-picker ([20fe12e](https://github.com/vcl/vcl/commit/20fe12e))


### Features

* **form-control-label:** support additional hint types ([e55ae12](https://github.com/vcl/vcl/commit/e55ae12))
* **material-style-inputs:** add material style inputs ([43029de](https://github.com/vcl/vcl/commit/43029de))





## [0.5.1](https://github.com/vcl/vcl/compare/v0.5.0...v0.5.1) (2019-08-13)

**Note:** Version bump only for package @vcl/vcl

# [0.5.0](https://github.com/vcl/vcl/compare/v0.4.6...v0.5.0) (2019-08-13)


### Code Refactoring

* **drawer:** reimplement drawer ([5e8d8d1](https://github.com/vcl/vcl/commit/5e8d8d1))


### BREAKING CHANGES

* **drawer:** Full drawer reimplemention. Old drawer no longer supported.
