import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const IGNORE_DIRS = ['node_modules'];
// Folders to migrate
const WORK_DIRS = ['../modules'];
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
    s = migrate06(filepath, s);
    return s;
  });
});


function migrate06(filepath: string, content: string) {
  return content.replace(/vclLabel/g, 'vclBadge')
                .replace(/vclBadge/g, 'vclBadge vclRounded') // Warning. Not repeatable
                .replace(/vclDisplayNone/g, 'vclHide')
                .replace(/vclNoPadding/g, 'vclP-0')
                .replace(/vclNoMargin/g, 'vclM-0')
                .replace(/vclLayoutHorizontal/g, 'vclHor')
                .replace(/vclLayoutVertical/g, 'vclVer')
                .replace(/vclLayoutFlex/g, 'vclFlex')
                .replace(/vclLayoutSelfStart/g, 'vclSelfStart')
                .replace(/vclLayoutSelfCenter/g, 'vclSelfCenter')
                .replace(/vclLayoutSelfEnd/g, 'vclSelfEnd')
                .replace(/vclLayoutSelfStretch/g, 'vclSelfStretch')
                .replace(/vclLayoutStartJustified/g, 'vclJustifyStart')
                .replace(/vclLayoutCenterJustified/g, 'vclJustifyCenter')
                .replace(/vclLayoutEndJustified/g, 'vclJustifyEnd')
                .replace(/vclLayoutAroundJustified/g, 'vclJustifyAround')
                .replace(/vclLayoutEvenlyJustified/g, 'vclJustifyEvenly')
                .replace(/vclLayoutJustified/g, 'vclJustifyBetween')
                .replace(/vclLayoutStart/g, 'vclStart')
                .replace(/vclLayoutCenterCenter/g, 'vclCenter')
                .replace(/vclLayoutCenter/g, 'vclCenter')
                .replace(/vclLayoutEnd/g, 'vclEnd')
                .replace(/vclLayoutHidden/g, 'vclHide')
                .replace(/vclSpan-([0-9]{1,3})p/g, (_, x) => `vclW-${x}p`)
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