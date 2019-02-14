const fs = require('fs');
const mkdirp = require('mkdirp');
const vcl = require('@vcl/preprocessor');

const pack = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
mkdirp('build', (errr) => {
    if (errr) console.log(errr);
    const indexHTML = fs.readFileSync(__dirname + '/index.html', 'utf8');
    const title = pack.name ? 'Demo of: ' + pack.name : 'VCL Demo Page';
    const finalContent = indexHTML.split('<%- title %>').join(title);
    fs.writeFileSync('build/index.html', finalContent);
    vcl.compileFile('./index.sss', 'build/index.css', {
        url: false
    });
});

vcl.compileFile('./index.sss', 'build/index.css', {
    watch: true,
    url: false
});
