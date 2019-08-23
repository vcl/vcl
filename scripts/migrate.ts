import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const IGNORE_DIRS = ['node_modules'];
const WORK_DIRS = ['../modules'];

function work(root: string, filter: RegExp, callback: (filepath: string, value: string) => string){
  var files = readdirSync(root);

  for(var i=0;i<files.length; i++){
      var filename = files[i];
      var filepath = join(root, filename);
      var stat = lstatSync(filepath);

      if (IGNORE_DIRS.some(ign => filename.includes(ign)) ) {
        continue;
      }

      if (stat.isDirectory()){
        work(filepath, filter, callback); //recurse
      }
      else if (filter.test(filepath)) {
        const content = readFileSync(filepath, 'utf8');
        const result = callback(filepath, content)
        if (typeof result === 'string') {
          writeFileSync(filepath, result);
        }
      };
  };
};

const map: {
  [key: string]: {
    transformations: {[key: string]: string},
    warnings: string[]
  }
} = {};

WORK_DIRS.forEach(p => {
  work(p, /\.(sss|html|md)$/, (filepath, content) => {
    let s = content;
    s = transformFlexLayout(filepath, s);
    // s = transformVCLCamelCase(filepath, s);
    return s;
  });
});


// experimental regex transformation
const VCL_CAMEL_CASE_REG_EX = /vcl([A-Z](?:[a-z]|\d|\-)*)([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?/g;
function transformVCLCamelCase(filepath: string, content: string) {
  return content.replace(VCL_CAMEL_CASE_REG_EX, (match, ...args) => {
    const matches: string[] = args.splice(0, 7).filter(s => !!s);
    const result = matches.map(s => s.toLowerCase()).join('-').trim();
    map[filepath] = { transformations: {}, warnings: [] };
    map[filepath].transformations[match] = result;
    return result;
  });
}

function transformFlexLayout(filepath: string, content: string) {
  return content.replace(new RegExp('vclLayoutHorizontal', 'g'), 'vclHor')
                .replace(new RegExp('vclLayoutVertical', 'g'), 'vclVer')
                .replace(new RegExp('vclLayoutFlex', 'g'), 'vclFlex')
                .replace(new RegExp('vclLayoutSelfStart', 'g'), 'vclSelfStart')
                .replace(new RegExp('vclLayoutSelfCenter', 'g'), 'vclSelfCenter')
                .replace(new RegExp('vclLayoutSelfEnd', 'g'), 'vclSelfEnd')
                .replace(new RegExp('vclLayoutSelfStretch', 'g'), 'vclSelfStretch')
                .replace(new RegExp('vclLayoutStartJustified', 'g'), 'vclJustifyStart')
                .replace(new RegExp('vclLayoutCenterJustified', 'g'), 'vclJustifyCenter')
                .replace(new RegExp('vclLayoutEndJustified', 'g'), 'vclJustifyEnd')
                .replace(new RegExp('vclLayoutAroundJustified', 'g'), 'vclJustifyAround')
                .replace(new RegExp('vclLayoutEvenlyJustified', 'g'), 'vclJustifyEvenly')
                .replace(new RegExp('vclLayoutJustified', 'g'), 'vclJustifyBetween')
                .replace(new RegExp('vclLayoutStart', 'g'), 'vclStart')
                .replace(new RegExp('vclLayoutCenter', 'g'), 'vclCenter')
                .replace(new RegExp('vclLayoutEnd', 'g'), 'vclEnd')
                ;
}


Object.keys(map).forEach(key => {
  console.log(`# ${key}`);
  Object.keys(map[key]).forEach(key2 => {
    console.log(`${key2.padEnd(35)} =>     ${map[key][key2]}`);
  });
  console.log(``);
});
