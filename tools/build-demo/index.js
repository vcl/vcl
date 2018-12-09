
const fs = require('fs');
const mkdirp = require('mkdirp');
const vcl = require('./node_modules/@vcl/preprocessor');

const pack = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
mkdirp('build', (errr) => {
  if (errr) console.log(errr);
  const indexHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');
  const title = pack.name ? 'Demo of: ' + pack.name : 'VCL Demo Page';
  const finalContent = indexHTML.split('<%- title %>').join(title);
  fs.writeFileSync('build/index.html', finalContent);
  const process = vcl.package('./package.json', { includeDevDependencies: true });
  process.then((result) => {
    fs.writeFileSync('build/index.css', result.css);
  }).catch((e) => {
    console.log(e);
  });
});

fs.watch('./index.styl', { encoding: 'buffer' }, (eventType, buffer) => {
  const process = vcl.package('./package.json', { includeDevDependencies: true });
  process.then((result) => {
    fs.writeFileSync('build/index.css', result.css);
  }).catch((e) => {
    console.log(e);
  });
});
