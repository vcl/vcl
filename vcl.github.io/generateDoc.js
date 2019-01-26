var docGenerator = require('./node_modules/@vcl/doc-gen/docgen.js');
// var docGenerator = require('../tools/doc-gen/docgen.js');

docGenerator.generateHtml({
  name: 'VCL Documentation',
  entryPackage: process.cwd() + '/package.json',
  outputFolder: './dist'
}).catch(ex => {
  console.error(ex);
});
