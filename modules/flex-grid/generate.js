#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { BREAKPOINTS, queryAll }  = require('../breakpoints/breakpoints');

const FLEX_CELLS = 12;
const FLEX_CELLS_ARRAY = Array.from(new Array(FLEX_CELLS)).map((_, i) => i + 1);

const TPL_FLEX_ROOT = (suffix) => 
`  .flex${suffix}
    flex: 1 1 0px
  .flex-auto${suffix}
    flex: 0 0 auto
`;

const TPL_FLEX_ROOT_CELL = (cell, suffix, per) => 
`  ${`.flex-${cell}${suffix}`}
    flex: 0 0 ${per}%
`;

const TPL_FLEX_CNT = (cls, suffix, prop) => 
`  .${cls}
    & > .flex${suffix}
      max-${prop}: 100%
    & > .flex-auto${suffix}
      ${prop}: auto
      max-${prop}: 100%
`;


const TPL_FLEX_CELL = (cell, suffix, per, prop) => 
`    & ${`.flex-${cell}${suffix}`}
      max-${prop}: ${per}%
`;

const TPL_FLEX_OFFSET = (cell, suffix, per) => 
`  ${`.offset-${cell}${suffix}`}
    margin-left: ${per}%
`

const TPL_FLEX_GUTTER = (i) => 
`.grid-gutterx-${i}
  margin-left: -var(--space-${i})
  & > *
    padding-left: var(--space-${i})
.grid-guttery-${i}
  margin-top: -var(--space-${i})
  & > *
    padding-top: var(--space-${i})
.grid-gutter-${i}
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

  result += TPL_FLEX_CNT('row', suffix, 'width');

  // Skip breakpoint aware classes for vertical flexes
  result += FLEX_CELLS_ARRAY.map(cell => {
    const per = Math.round(Math.floor((cell / FLEX_CELLS) * 10000))  / 100
    let s = TPL_FLEX_CELL(cell, suffix, per, 'width');
    return s;
  }).join('');

  if (suffix === '') {
    result += TPL_FLEX_CNT('col', suffix, 'height');
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
