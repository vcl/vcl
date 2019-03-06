const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const vcl = require('@vcl/preprocessor');

const PCK = path.resolve(process.cwd(), './package.json');
const INDEX_SRC = path.resolve(__dirname, './index.html');
const INDEX_TRG = path.resolve(process.cwd(), './build/index.html');

const SSS_INDEX_SRC = path.resolve(process.cwd(), './index.sss');
const SSS_DEMO_SRC = path.resolve(process.cwd(), './demo.sss');

// Use demo.sss as primary source for demo but fallback to index.sss if it does not exist
const SSS_SRC = fs.existsSync(SSS_DEMO_SRC) ? SSS_DEMO_SRC : SSS_INDEX_SRC;
const SSS_TRG = path.resolve(process.cwd(), './build/index.css');

const pack = JSON.parse(fs.readFileSync(PCK, 'utf8'));

mkdirp('build', (errr) => {
    if (errr) console.log(errr);
    const indexHTML = fs.readFileSync(INDEX_SRC, 'utf8');
    const title = pack.name ? 'Demo of: ' + pack.name : 'VCL Demo Page';
    const finalContent = indexHTML.split('<%- title %>').join(title);
    fs.writeFileSync(INDEX_TRG, finalContent);
    vcl.compileFile(SSS_SRC, SSS_TRG, {
        url: false
    });
});

vcl.compileFile(SSS_SRC, SSS_TRG, {
    watch: true,
    url: false
});
