'use strict';

var path = require('path');
var vcl = require('../index');

var opts = {
  root: __dirname,
  vclRoot: path.resolve(__dirname, '../../../modules')
};

describe('vcl', () => {
  it('should be a function', () => {
    expect(typeof vcl).toBe('function');
  });

  it('should throw if there is no css input', async () => {
    return expect(vcl()).rejects.toBeInstanceOf(Error);
  });
});

describe('vcl object', function() {

  it('should return valid css', async function() {
    var result = await vcl('body\n  color: blue');
    expect(typeof result.css).toBe('string');
    expect(result.css).toMatchSnapshot();

  });

  it('should return valid css without any options set', async function() {
    let result = await vcl('body\n  color: rgba(#ccc, .5)');
    expect(result.css).toMatchSnapshot();
  });

  it('should include local css files', async function() {
    const result = await vcl(`@import "./fixtures/test-import.css"\na\n  color: green`, opts);
    expect(typeof result.css).toBe('string');
    expect(result.css).toMatchSnapshot();
  });

  it('should include local sss files', async function() {
    const result = await vcl(`@import "./fixtures/test-import.css"\na\n  color: green`, opts);
    expect(typeof result.css).toBe('string');
    expect(result.css).toMatchSnapshot();
  });

  it('should include npm imports', async function() {
    const result = await vcl('@import "@vcl/theme"\na\n  color: green', opts);
    expect(typeof result.css).toBe('string');
    expect(result.css.length).toBeGreaterThan(100);
  });


  it('should not remove the comment', async function() {
    const result = await vcl('/* will not be removed */\nbody\n  color: blue\n', opts);
    expect(typeof result.css).toBe('string');
    expect(result.css).toMatchSnapshot();
  });

  it('should remove the comment', async function() {
    const result = await vcl(
`/* will be removed */
body
  color: blue
`, {
      ...opts,
      optimize: true
    });
    expect(typeof result.css).toBe('string');
    expect(result.css).toMatchSnapshot();
  });

  it('should override the theme var', async function() {
    const result = await vcl(
`@import "@vcl/theme"
body
  color: blue
@import "./fixtures/custom-theme.sss"
`, {
      ...opts,
      optimize: true
    });

    expect(typeof result.css).toBe('string');
    expect(result.css).toContain('.body{background-color:#d9534f}body{color:#00f}');
  });

  it('should contain source maps', async function() {
    var result = await vcl('body\n  color: blue', {
      ...opts,
      sourceMap: true
    });
    expect(result.css).toMatchSnapshot();
  });

  describe('vcl entrypoints', function() {

    it('should include recommended modules', async function() {
      const result = await vcl('@import "@vcl/vcl"\na\n  color: green', opts);
      expect(result.css).toContain('.vclButton');
      expect(result.css).toContain('.vclRating');
      expect(result.css).toContain('.vclGallery');
      expect(result.css).not.toContain('[class*=" fa-"]:before'); // fa module
    });

    it('should include only core modules', async function() {
      const result = await vcl('@import "@vcl/vcl/core"\na\n  color: green', opts);
      expect(result.css).toContain('.vclButton');
      expect(result.css).not.toContain('.vclRating');
      expect(result.css).not.toContain('.vclGallery');
      expect(result.css).not.toContain('[class*=" fa-"]:before'); // fa module
    });

    it('should include all modules', async function() {
      const result = await vcl('@import "@vcl/vcl/complete"\na\n  color: green', opts);
      expect(result.css).toContain('.vclButton');
      expect(result.css).toContain('.vclRating');
      expect(result.css).toContain('[class*=" fa-"]:before'); // fa module
    });
  });
});
