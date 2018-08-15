# [VCL](https://github.com/vcl/doc) tab-nav

List of navigation items arranged as tabs.

## Features

- Two style variants.
- Four orientations.
- Rich tab-labels.
- Justified tab alignment.

## Usage

The tab bar containing the tabs is built from a unordered list and the
`vclTabs` class. It contains n `vclTab`s.
The tab items can be made of anchor tags or just textual.
An anchor tag is only needed if users should be able to open
a tab in a different window by an URL.
Buttons can be embedded as shown in the example below to offer an additional
interaction.
A tab with only a button, for example to open new tabs like in the
example below contains just a button as tab content.
The selected tab `vclSelected` is visually highlighted and can
be disabled via `vclDisabled`.

[basic example](/demo/example-basic.html)

In terms of accessibility, the following example with proper ARIA
attributes is optimal.

[basic no links](/demo/example-basic-no-links.html)

Apart from buttons, tabs may also contain other components like a badge as
in the example above. To get proper margins, all elements within
a `vclTab` get the `vclTabLabel`.

Add the modifier class `vclTabStyleUni` for uni colored tabs.
This style is more suitable for showing tabs unobtrusively within
content textual for example.

[uni example](/demo/example-uni.html)

The class `vclTabbable` is used to create a wrapper for the tabs
and the content area.
The content area can be built from various components
such as a panel or the included classes `vclTabContent` and `vclTabPanel`.

By default tabs are laid out as shown above.
Different layouts are possible as shown below.

Modifier class `vclTabLeft`.

[left1 example](/demo/example-left.html)

[left2 example](/demo/example-uni-left.html)

Modifier class `vclTabRight`.

[right1 example](/demo/example-right.html)

[right2 example](/demo/example-uni-right.html)

Justified tabs can be achieved using the appropriate layout attributes.

[uni example](/demo/example-uni-justified.html)


## Classes

- `vclTabbable`: Wrapper of tab bar and tab content area.
- `vclTabs`: Tab bar.
- `vclTab`: Tab.
- `vclTabLabel`: Optional class for the label(s) inside the tab.
- `vclTabContent`: Optional content area.
- `vclTabPanel`: Optional inner content area.

## Modifiers

### For `vclTabbable`

- `vclTabsLeft`
- `vclTabsRight`
- `vclTabsBottom`
- `vclNoBorder`: remove any border from `vclTabContent` and `vclTabs`.

### For `vclTabs`

- `vclTabStyleUni`
- `vclTabNavJustified`

### For `vclTab`

- `vclSelected`
- `vclDisabled`

## Variables

### Normal Variant

- `--tab-nav-border-color`
- `--tab-nav-tab-bg-color`
- `--tab-nav-tab-bg-hover-color`
- `--tab-nav-tab-bg-selected-color`
- `--tab-nav-tab-bg-disabled-color`
- `--tab-nav-tab-border-selected-color`
- `--tab-nav-tab-disabled-color`
- `--tab-nav-tab-color`
- `--tab-nav-tab-selected-color`
- `--tab-nav-tab-hover-color`
- `--tab-nav-tab-button-label-color`
- `--tab-nav-tab-button-label-hover-color`
- `--tab-nav-tab-button-selected-label-color`

### Uni Variant

- `--tab-nav-tab-bg-color--uni`
- `--tab-nav-tab-bg-selected-color--uni`
- `--tab-nav-tab-bg-disabled-color--uni`
- `--tab-nav-tab-color--uni`
- `--tab-nav-tab-hover-color--uni`
- `--tab-nav-tab-color-selected--uni`
- `--tab-nav-tab-disabled-color--uni`

## Demo

[example.html](/demo/example.html) on GH-pages.
