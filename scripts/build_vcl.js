// sass --style=compressed --no-source-map ./packages/vcl/index.scss ./packages/vcl/dist/index.css

const path = require('path');
const fs = require('fs');
const sass = require('sass');

const pkgFolder = path.resolve(process.cwd(), 'packages/vcl');
const distFolder = path.resolve(pkgFolder, 'dist');
const vclDefaultIn = path.resolve(pkgFolder, 'index.scss');
const vclDefaultOut = path.resolve(distFolder, 'index.css');
const vclCoreIn = path.resolve(pkgFolder, 'core.scss');
const vclCoreOut = path.resolve(distFolder, 'core.css');

if (!fs.existsSync(distFolder)){
  fs.mkdirSync(distFolder);
}

function build({ source, target }) {
  return new Promise((resolve, reject) => {
    sass.render({
      file: source,
      sourceMap: false,
      outFile: target,
      outputStyle: 'compressed',
      importer: (url, prev, done) => {
        if (url[0] === '~') {
          url = path.resolve(process.cwd(), 'node_modules', url.substr(1));
        }
        return { file: url };
      }
    }, function(error, result) {
      if(!error){
        fs.writeFileSync(target, result.css);
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
}

(async function() {
  try {
    let result;
    console.log('Building ' + vclDefaultIn);
    await build({
      source: vclDefaultIn,
      target: vclDefaultOut,
    });
    console.log('Created ' + vclDefaultOut);

    console.log('Building ' + vclCoreIn);
    await build({
      source: vclCoreIn,
      target: vclCoreOut,
    });
    console.log('Created ' + vclCoreOut);
  } catch (err) {
    console.error(err)
  }
})()
