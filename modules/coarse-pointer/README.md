# [VCL](https://vcl.github.io/) coarse-pointer

Optimizations for coarse pointing devices such as touch based input devices.

## Features

Optimizations:

- Prevent automatic text size adjustments.
- Disable tap highlighting on some webkit/ blink based browsers.

## Usage

This demonstrates the optional [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim)
feature of the [VCL preprocessor](https://github.com/vcl/preprocessor).
In this case, a small JS snipped adds a `vclHoverSupport` prefix container
wrapping the first button, if the devices supports hovering.
If so, the button's background color will be bright green when hovered.
If not, the button will have no hover effect. This is desired behavior
especially on mobile devices to prevent buttons keeping their hover effect
after they have been activated once (many mobile platforms maintain `:hover`
as if it were `:focus`). The VCL's button component prevents this by using
the `@media (hover: none)` media feature media query as can be seen with the
second button. Because not all browsers support this, the hover shim can be used
to emulate this. The detection of the hover support in this example is a simple
list user agent names found on touch devices.

**Note:** The demo currently does not run withing the demo browser, therefore,
the cdynamic parts of the code are shown below.

```html
<script>
  setTimeout(addClass, 100);

  function addClass() {
    // logic copied from mq4-hover-shim.js
    supportsTrueHover = !/Opera Mini|Android|IEMobile|Windows (Phone|CE)|(XBL|Zune)WP7/.test(
      navigator.userAgent
    );
    const prefixContainer = document.getElementById(
      'prefixContainer'
    );
    const detectionResultTag = document.getElementById(
      'detectionResult'
    );

    if (supportsTrueHover) {
      prefixContainer.className = 'vclHoverSupport';
    }
    detectionResultTag.innerHTML = supportsTrueHover
      ? 'Your device supports hovering'
      : 'Your Device does not support hovering';
  }
</script>

<style>
.vclHoverSupport .vclButton:hover {
  background-color: #0f0;
  color: #FFFFFF;
}
</style>
```

[mq4 hover shim example](/demo/example.html)

## Classes

## Modifiers

## Variables

## Demo

[example.html](/demo/example.html) on GH-pages.
