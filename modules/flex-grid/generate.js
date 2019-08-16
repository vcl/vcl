#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { BREAKPOINTS, queryAll }  = require('../breakpoints/breakpoints');

const FLEX_CELLS = 12;
const FLEX_CELLS_ARRAY = Array.from(new Array(FLEX_CELLS)).map((_, i) => i + 1);

const TPL_FLEX_BASE = (cls, suffix, prop) => 
`  .${cls}
    & > .vclFlex${suffix}
      flex: 1 1 0
      max-${prop}: 100%
    & > .vclFlexAuto${suffix}
      flex: 0 0 auto
      ${prop}: auto
      max-${prop}: 100%
`;


const TPL_FLEX_CELL = (cell, suffix, per, prop) => 
`    & ${`.vclFlex-${cell}${suffix}`}
      flex: 0 0 ${per}%
      max-${prop}: ${per}%
`;

const TPL_FLEX_OFFSET = (cell, suffix, per) => 
`    & ${`.vclOffset-${cell}${suffix}`}
      margin-left: ${per}%
`

const TPL_FLEX_GUTTER = (i) => 
`.vclGutter-x-${i}
  margin-left: -var(--space-${i})
  & > *
    padding-left: var(--space-${i})
.vclGutter-y-${i}
  margin-top: -var(--space-${i})
  & > *
    padding-top: var(--space-${i})
.vclGutter-${i}
  margin-left: -var(--space-${i})
  margin-top: -var(--space-${i})
  & > *
    padding-left: var(--space-${i})
    padding-top: var(--space-${i})
`

const TPL_FLEX = (suffix, horizontal) => {
  const cls = horizontal ? 'vclHor' : 'vclVer';
  const prop = horizontal ? 'width' : 'height';
  let result = TPL_FLEX_BASE(cls, suffix, prop);

  // Skip breakpoint aware classes for vertical flexes
  result += FLEX_CELLS_ARRAY.map(cell => {
    const per = Math.round(Math.floor((cell / FLEX_CELLS) * 10000))  / 100
    let s = TPL_FLEX_CELL(cell, suffix, per, prop);
    if (horizontal) {
      s += TPL_FLEX_OFFSET(cell, suffix, per);
    }
    return s;
  }).join('');

  return result;
}

const TPL_GRID = (query, suffix, horizontal) => 
`${query}
${TPL_FLEX(suffix, horizontal)}
`;

let style = TPL_GRID(queryAll, '', true) +
            TPL_GRID(queryAll, '', false);

style += BREAKPOINTS.map(bp => TPL_GRID(bp.queryFrom || bp.query, bp.suffix, true)).join('');

for (i = 0; i <= 5; i++) {
  style += TPL_FLEX_GUTTER(i);
}

const outFile = path.resolve(__dirname, 'flex-grid.generated.sss');
fs.writeFileSync(outFile, style);
