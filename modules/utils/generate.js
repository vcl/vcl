#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { BREAKPOINTS, queryAll } = require('../breakpoints/breakpoints');

const TPL_HIDE = (query, suffix) => 
`${query}
  .vclHide${suffix}
    display: none !important
`;

const TPL_SPACE_CONTENT = (idx, suffix) => 
`  .vclP-${idx}${suffix}
    padding: var(--space-${idx}) var(--space-${idx})
  .vclPL-${idx}${suffix}
    padding-left: var(--space-${idx})
  .vclPR-${idx}${suffix}
    padding-right: var(--space-${idx})
  .vclPT-${idx}${suffix}
    padding-top: var(--space-${idx})
  .vclPB-${idx}${suffix}
    padding-bottom: var(--space-${idx})
  .vclPX-${idx}${suffix}
    padding-left: var(--space-${idx})
    padding-right: var(--space-${idx})
  .vclPY-${idx}${suffix}
    padding-top: var(--space-${idx})
    padding-bottom: var(--space-${idx})
  .vclM-${idx}${suffix}
    margin: var(--space-${idx}) var(--space-${idx})
  .vclML-${idx}${suffix}
    margin-left: var(--space-${idx})
  .vclMR-${idx}${suffix}
    margin-right: var(--space-${idx})
  .vclMT-${idx}${suffix}
    margin-top: var(--space-${idx})
  .vclMB-${idx}${suffix}
    margin-bottom: var(--space-${idx})
  .vclMX-${idx}${suffix}
    margin-left: var(--space-${idx})
    margin-right: var(--space-${idx})
  .vclMY-${idx}${suffix}
    margin-top: var(--space-${idx})
    margin-bottom: var(--space-${idx})
`;

const TPL_SPACE = (query, suffix) => {
  let s = 
`${query}
  .vclM-auto${suffix}
    margin: auto
  .vclML-auto${suffix}
    margin-left: auto
  .vclMR-auto${suffix}
    margin-right: auto
  .vclMT-auto${suffix}
    margin-top: auto
  .vclMB-auto${suffix}
    margin-bottom: auto
  .vclMX-auto${suffix}
    margin-left: auto
    margin-right: auto
  .vclMY-auto${suffix}
    margin-top: auto
    margin-bottom: auto
`;
  for(let i = 0; i <=5; i++ ) {
    s += TPL_SPACE_CONTENT(i, suffix);
  }
  return s;
}

const TPL_GUTTER = (i) => 
`.vclGutterX-${i}
  margin-left: -var(--space-${i})
  & > *
    margin-left: var(--space-${i})
.vclGutterY-${i}
  margin-top: -var(--space-${i})
  & > *
    margin-top: var(--space-${i})
.vclGutter-${i}
  margin-left: -var(--space-${i})
  margin-top: -var(--space-${i})
  & > *
    margin-left: var(--space-${i})
    margin-top: var(--space-${i})
`

let style = '';
style += TPL_SPACE(queryAll, '');
// Disable breakpoint aware spacing
// style += BREAKPOINTS.map(bp => TPL_SPACE(bp.query, bp.suffix)).join('');
style += TPL_HIDE(queryAll, '');

style += BREAKPOINTS.map(bp => {
  let s = TPL_HIDE(bp.query, bp.suffix);
  if (bp.queryTo) {
    s += TPL_HIDE(bp.queryTo, '-to' + bp.suffix);
  }
  if (bp.queryFrom) {
    s += TPL_HIDE(bp.queryFrom, '-from'+ bp.suffix);
  }
  return s;
}).join('');

for (i = 0; i <= 5; i++) {
  style += TPL_GUTTER(i);
}

const outFile = path.resolve(__dirname, 'utils.generated.sss');
fs.writeFileSync(outFile, style);
