const vcl = require('vcl-preprocessor');
const path = require('path');
const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const options = loaderUtils.getOptions(this) || {};
  options.root = options.root || path.dirname(this.resourcePath);
  try {
    const source = vcl(content, options).toString();
    this.callback(null, source);
  } catch(ex) {
    this.callback(new Error(ex));
  }
}
