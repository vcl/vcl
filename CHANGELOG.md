# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.2](https://github.com/vcl/vcl/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2020-07-17)


### Bug Fixes

* **select:** fix disabled state ([2d1b8f6](https://github.com/vcl/vcl/commit/2d1b8f627319a962ed56df5c5e91bd5513802fca))





# [2.0.0-beta.1](https://github.com/vcl/vcl/compare/v2.0.0-alpha.6...v2.0.0-beta.1) (2020-07-16)


### Bug Fixes

* fixes and optimizations ([10b8786](https://github.com/vcl/vcl/commit/10b8786806fed4f36985b99b1fa3f6ff746dbd54))
* fixes and optimizations ([af4a6f9](https://github.com/vcl/vcl/commit/af4a6f96af201954912312506bded0d4f88a4004))
* misc fixes ([6823694](https://github.com/vcl/vcl/commit/6823694c330c8fb255728a4ac2f903e321e8fc7f))
* **docs:** fix docs ([545b682](https://github.com/vcl/vcl/commit/545b6827f04c0d577a4d14b48053e9cce4bde498))
* **input:** add bg color to input-field ([21fad87](https://github.com/vcl/vcl/commit/21fad8777935aae57d90ba62099c1cacb085e567))





# [2.0.0-alpha.6](https://github.com/vcl/vcl/compare/v2.0.0-alpha.5...v2.0.0-alpha.6) (2020-06-18)

**Note:** Version bump only for package vcl-monorepo





# [2.0.0-alpha.5](https://github.com/vcl/vcl/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2020-06-17)


### Code Refactoring

* **layer:** remove layer box background color ([24e4598](https://github.com/vcl/vcl/commit/24e4598bad46f451caf07596b6b5585a9790ef0e))


### BREAKING CHANGES

* **layer:** Layer box background color is removed and should be set within content





# [2.0.0-alpha.4](https://github.com/vcl/vcl/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2020-06-09)

**Note:** Version bump only for package vcl-monorepo





# [2.0.0-alpha.3](https://github.com/vcl/vcl/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2020-06-05)


### Bug Fixes

* misc fixes ([033caec](https://github.com/vcl/vcl/commit/033caec805f92c4474ecea9c8b49506760b18a1f))
* misc fixes ([4367cd7](https://github.com/vcl/vcl/commit/4367cd76f0602d996ee77715553b7c52f512f493))





# [2.0.0-alpha.2](https://github.com/vcl/vcl/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2020-05-20)

**Note:** Version bump only for package vcl-monorepo





# [2.0.0-alpha.1](https://github.com/vcl/vcl/compare/v1.1.2...v2.0.0-alpha.1) (2020-05-15)


### Bug Fixes

* fix module priorities ([1aca49b](https://github.com/vcl/vcl/commit/1aca49bba514354bbe7e831b6af3805024b2bce3))
* misc fixes ([e1f3882](https://github.com/vcl/vcl/commit/e1f38824a91296f98ef7df5aba5bbbde448935dd))
* **select:** fix disabled state ([4843bb1](https://github.com/vcl/vcl/commit/4843bb1851abf92643f578837e821fb607e34052))


### Code Refactoring

* Refactoring of checkbox, radio-button, input, select, token-input and form ([d637193](https://github.com/vcl/vcl/commit/d637193d67167ee271b4494df009fe9658d63efe))
* **dropdown:** remove dropdown module ([e2a7e5f](https://github.com/vcl/vcl/commit/e2a7e5fc8835274deb27cce0af36ea3c8a6713a9))
* **embedded-input-button:** rename embedded-input-button to embedded-input-group ([8c9291c](https://github.com/vcl/vcl/commit/8c9291c9d04787e2b5baa3c86a6a5d677a41b85a))
* **embedded-input-group:** remove embedded-input-group ([3c5295f](https://github.com/vcl/vcl/commit/3c5295fd8eb6cae096512db8e5ccff5ac8b1f8a0))
* **tooltip:** remove absolute positioning ([2dc6b03](https://github.com/vcl/vcl/commit/2dc6b03ee21625961ad14945b5a1accf7cd815b6))
* merge app-* modules into single app module ([a33841a](https://github.com/vcl/vcl/commit/a33841a84a10634f489e046facc4a04ec9e2c6dd))


### BREAKING CHANGES

* Checkbox, radio-button, input, select, token-input and form controls are refactored.
Check control docs for more information.
* **embedded-input-group:** Removed embedded-input-group. Will be integrated in input.
* **tooltip:** Removed absolute positioning.
* **dropdown:** Removed dropdown module. Use select-list instead.
* **embedded-input-button:** embedded-input-button module was renamed to embedded-input-button. .input-group-emb
class was renamed to .embedded-input-group
* All app-* modules are merged into app the module. Remove app-* related imports and
replace with app.





## [1.1.2](https://github.com/vcl/vcl/compare/v1.1.1...v1.1.2) (2020-04-08)


### Bug Fixes

* minor fixes ([c17c74a](https://github.com/vcl/vcl/commit/c17c74a047c1446b5bf87768753f6d02f3d202aa))





## [1.1.1](https://github.com/vcl/vcl/compare/v1.1.0...v1.1.1) (2020-04-08)


### Bug Fixes

* **data-list:** minor fix ([7100da9](https://github.com/vcl/vcl/commit/7100da90bd148649e18db31cb6d825410278b55c))


### Features

* **select-list:** add select-list control ([5b394da](https://github.com/vcl/vcl/commit/5b394da0832b203434b88743c5b6b42596fb1f4c))





# [1.1.0](https://github.com/vcl/vcl/compare/v1.0.0...v1.1.0) (2020-04-08)


### Features

* **select-list:** add select-list control ([7b8207f](https://github.com/vcl/vcl/commit/7b8207f7a099d847100d26aa87a5f2eebd517139))





# [1.0.0](https://github.com/vcl/vcl/compare/v1.0.0-beta.5...v1.0.0) (2020-02-11)


### Bug Fixes

* **run-demo:** replace html-imports ([91135d0](https://github.com/vcl/vcl/commit/91135d0b910ca3998619d37518dad525231239ce))
* **theme:** fix gray-dark-4 and gray-light 6 colors ([00720be](https://github.com/vcl/vcl/commit/00720beef739856511dd2ef694bc7341f8f07cf0))





# [1.0.0-beta.5](https://github.com/vcl/vcl/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2020-01-24)

**Note:** Version bump only for package vcl-monorepo





# [1.0.0-beta.4](https://github.com/vcl/vcl/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2020-01-24)


### Bug Fixes

* **app:** add modules ([22e28a8](https://github.com/vcl/vcl/commit/22e28a85b1b507290459355b4fe5ec32ce050cfb))





# [1.0.0-beta.3](https://github.com/vcl/vcl/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-01-24)


### Features

* **app:** add kitchen sink for app modules ([df7c78b](https://github.com/vcl/vcl/commit/df7c78b09996ecbae9548d5bd11b70055ce768cb))





# [1.0.0-beta.2](https://github.com/vcl/vcl/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-01-24)

**Note:** Version bump only for package vcl-monorepo





# [1.0.0-beta.1](https://github.com/vcl/vcl/compare/v1.0.0-alpha.9...v1.0.0-beta.1) (2020-01-24)


### Code Refactoring

* migrate to sass ([490b7e5](https://github.com/vcl/vcl/commit/490b7e549d7445d27c8832d00560436e35f71511))


### BREAKING CHANGES

* VCL was migrated to sass. Check docs for further information.





# [0.7.0-alpha.3](https://github.com/vcl/vcl/compare/v0.7.0-alpha.0...v0.7.0-alpha.3) (2020-01-08)


### Bug Fixes

* **utils:** fix class names ([0417665](https://github.com/vcl/vcl/commit/04176651cd054c773c2d9cdd6250c2a82e29022f))





# [0.7.0-alpha.0](https://github.com/vcl/vcl/compare/v0.6.2...v0.7.0-alpha.0) (2019-11-21)


### Code Refactoring

* migrate vcl to kebab-case ([6f39268](https://github.com/vcl/vcl/commit/6f39268fe95b3f48d44da527e7e283e97eca04cd))


### BREAKING CHANGES

* All class names are now in kebab-case without any (vcl)prefix by default.





## [0.6.3](https://github.com/vcl/vcl/compare/v0.6.2...v0.6.3) (2019-11-18)

**Note:** Version bump only for package vcl-monorepo





## [0.6.2](https://github.com/vcl/vcl/compare/v0.6.1...v0.6.2) (2019-09-05)

**Note:** Version bump only for package vcl-monorepo





## [0.6.1](https://github.com/vcl/vcl/compare/v0.6.0...v0.6.1) (2019-09-05)


### Bug Fixes

* **button:** fix selected hover bg color ([5a22a03](https://github.com/vcl/vcl/commit/5a22a03))





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
