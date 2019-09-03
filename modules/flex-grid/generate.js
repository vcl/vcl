#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { BREAKPOINTS, queryAll }  = require('../breakpoints/breakpoints');

const FLEX_CELLS = 12;
const FLEX_CELLS_ARRAY = Array.from(new Array(FLEX_CELLS)).map((_, i) => i + 1);

const TPL_FLEX_ROOT = (suffix) => 
`  .vclFlex${suffix}
    flex: 1 1 0
  .vclFlexAuto${suffix}
    flex: 0 0 auto
`;

const TPL_FLEX_ROOT_CELL = (cell, suffix, per) => 
`  ${`.vclFlex-${cell}${suffix}`}
    flex: 0 0 ${per}%
`;

const TPL_FLEX_CNT = (cls, suffix, prop) => 
`  .${cls}
    & > .vclFlex${suffix}
      max-${prop}: 100%
    & > .vclFlexAuto${suffix}
      ${prop}: auto
      max-${prop}: 100%
`;


const TPL_FLEX_CELL = (cell, suffix, per, prop) => 
`    & ${`.vclFlex-${cell}${suffix}`}
      max-${prop}: ${per}%
`;

const TPL_FLEX_OFFSET = (cell, suffix, per) => 
`  ${`.vclOffset-${cell}${suffix}`}
    margin-left: ${per}%
`

const TPL_FLEX_GUTTER = (i) => 
`.vclGridGutterX-${i}
  margin-left: -var(--space-${i})
  & > *
    padding-left: var(--space-${i})
.vclGridGutterY-${i}
  margin-top: -var(--space-${i})
  & > *
    padding-top: var(--space-${i})
.vclGridGutter-${i}
  margin-left: -var(--space-${i})
  margin-top: -var(--space-${i})
  & > *
    padding-left: var(--space-${i})
    padding-top: var(--space-${i})
`

const TPL_FLEX = (suffix) => {
  let result = TPL_FLEX_ROOT(suffix);
  // Skip breakpoint aware classes for vertical flexes
  result += FLEX_CELLS_ARRAY.map(cell => {
    const per = Math.round(Math.floor((cell / FLEX_CELLS) * 10000))  / 100
    let s = TPL_FLEX_ROOT_CELL(cell, suffix, per);
    s += TPL_FLEX_OFFSET(cell, suffix, per);
    return s;
  }).join('');

  result += TPL_FLEX_CNT('vclHor', suffix, 'width');

  // Skip breakpoint aware classes for vertical flexes
  result += FLEX_CELLS_ARRAY.map(cell => {
    const per = Math.round(Math.floor((cell / FLEX_CELLS) * 10000))  / 100
    let s = TPL_FLEX_CELL(cell, suffix, per, 'width');
    return s;
  }).join('');

  if (suffix === '') {
    result += TPL_FLEX_CNT('vclVer', suffix, 'height');
    // Skip breakpoint aware classes for vertical flexes
    result += FLEX_CELLS_ARRAY.map(cell => {
      const per = Math.round(Math.floor((cell / FLEX_CELLS) * 10000))  / 100
      let s = TPL_FLEX_CELL(cell, suffix, per, 'height');
      return s;
    }).join('');
  }

  return result;
}

// Move root style 2 space to the left
let style = `${TPL_FLEX('').split('\n').map(s => s.substr(2)).join('\n')}
`;

style += BREAKPOINTS.map(bp => `${bp.queryFrom || bp.query}
${TPL_FLEX(bp.suffix)}
`).join('');

for (i = 0; i <= 5; i++) {
  style += TPL_FLEX_GUTTER(i);
}

const outFile = path.resolve(__dirname, 'flex-grid.generated.sss');
fs.writeFileSync(outFile, style);
