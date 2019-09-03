import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const IGNORE_DIRS = ['node_modules'];
// Folders to migrate
const WORK_DIRS = ['./src'];
// File extenstion to migrate
const WORK_EXT_REGEX = /\.(sss|html|md)$/g;

function work(root: string, filter: RegExp, callback: (filepath: string, value: string) => string){
  const files = readdirSync(root);

  for (let i=0; i < files.length; i++) {
      const filename = files[i];
      const filepath = join(root, filename);
      const stat = lstatSync(filepath);

      if (IGNORE_DIRS.some(ign => filename.includes(ign)) ) {
        continue;
      }

      if (stat.isDirectory()) {
        work(filepath, filter, callback); // recursive
      } else if (filter.test(filepath)) {
        const content = readFileSync(filepath, 'utf8');
        const result = callback(filepath, content);
        if (typeof result === 'string') {
          writeFileSync(filepath, result);
        }
      }
  }
}

WORK_DIRS.forEach(p => {
  work(p, WORK_EXT_REGEX, (filepath, content) => {
    let s = content;
    s = transformFlexLayout(filepath, s);
    s = migrate06(filepath, s);
    return s;
  });
});


function migrate06(filepath: string, content: string) {
  return content.replace(new RegExp('vclLabel', 'g'), 'vclBadge')
                .replace(new RegExp('vclBadge', 'g'), 'vclBadge vclRounded') // Warning. Not repeatable
                .replace(new RegExp('vclDisplayNone', 'g'), 'vclHide')
                .replace(new RegExp('vclNoPadding', 'g'), 'vclP-0')
                .replace(new RegExp('vclNoMargin', 'g'), 'vclM-0')
                ;
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
                .replace(new RegExp('vclLayoutCenterCenter', 'g'), 'vclCenter')
                .replace(new RegExp('vclLayoutCenter', 'g'), 'vclCenter')
                .replace(new RegExp('vclLayoutEnd', 'g'), 'vclEnd')
                .replace(new RegExp('vclLayoutHidden', 'g'), 'vclHide')
                ;
}


// experimental regex transformation: camel-case to kebab-case
const camelCaseTransformationMap: {
  [key: string]: {
    transformations: {[key: string]: string},
    warnings: string[]
  }
} = {};

const VCL_CAMEL_CASE_REG_EX = /vcl([A-Z](?:[a-z]|\d|\-)*)([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?([A-Z](?:[a-z]|\d|\-)*)?/g;
function transformVCLCamelCase(filepath: string, content: string) {
  return content.replace(VCL_CAMEL_CASE_REG_EX, (match, ...args) => {
    const matches: string[] = args.splice(0, 7).filter(s => !!s);
    const result = matches.map(s => s.toLowerCase()).join('-').trim();
    camelCaseTransformationMap[filepath] = { transformations: {}, warnings: [] };
    camelCaseTransformationMap[filepath].transformations[match] = result;
    return result;
  });
}

Object.keys(camelCaseTransformationMap).forEach(key => {
  console.log(`# ${key}`);
  Object.keys(camelCaseTransformationMap[key]).forEach(key2 => {
    console.log(`${key2.padEnd(35)} =>     ${camelCaseTransformationMap[key][key2]}`);
  });
  console.log(``);
});