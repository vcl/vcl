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
  try {
    const result = sass.compile(source, {
      style: "compressed",
      loadPaths: [path.resolve(process.cwd(), 'node_modules'), pkgFolder],
      // Dart Sass does not support custom importer in compile API
    });
    fs.writeFileSync(target, result.css);
    return result;
  } catch (error) {
    throw error;
  }
}

(async function() {
  try {
    console.log('Building ' + vclDefaultIn);
    build({
      source: vclDefaultIn,
      target: vclDefaultOut,
    });
    console.log('Created ' + vclDefaultOut);

    console.log('Building ' + vclCoreIn);
    build({
      source: vclCoreIn,
      target: vclCoreOut,
    });
    console.log('Created ' + vclCoreOut);
  } catch (err) {
    console.error(err)
  }
})()
