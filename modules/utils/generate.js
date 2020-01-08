#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { BREAKPOINTS, queryAll } = require('../breakpoints/breakpoints');

const TPL_HIDE = (query, suffix) => 
`${query}
  .hide${suffix}
    display: none !important
`;

const TPL_SPACE_CONTENT = (idx, suffix) => 
`  .p-${idx}${suffix}
    padding: var(--space-${idx}) var(--space-${idx})
  .pl-${idx}${suffix}
    padding-left: var(--space-${idx})
  .pr-${idx}${suffix}
    padding-right: var(--space-${idx})
  .pt-${idx}${suffix}
    padding-top: var(--space-${idx})
  .pb-${idx}${suffix}
    padding-bottom: var(--space-${idx})
  .px-${idx}${suffix}
    padding-left: var(--space-${idx})
    padding-right: var(--space-${idx})
  .py-${idx}${suffix}
    padding-top: var(--space-${idx})
    padding-bottom: var(--space-${idx})
  .m-${idx}${suffix}
    margin: var(--space-${idx}) var(--space-${idx})
  .ml-${idx}${suffix}
    margin-left: var(--space-${idx})
  .mr-${idx}${suffix}
    margin-right: var(--space-${idx})
  .mt-${idx}${suffix}
    margin-top: var(--space-${idx})
  .mb-${idx}${suffix}
    margin-bottom: var(--space-${idx})
  .mx-${idx}${suffix}
    margin-left: var(--space-${idx})
    margin-right: var(--space-${idx})
  .my-${idx}${suffix}
    margin-top: var(--space-${idx})
    margin-bottom: var(--space-${idx})
`;

const TPL_SPACE = (query, suffix) => {
  let s = 
`${query}
  .m-auto${suffix}
    margin: auto
  .ml-auto${suffix}
    margin-left: auto
  .mr-auto${suffix}
    margin-right: auto
  .mt-auto${suffix}
    margin-top: auto
  .mb-auto${suffix}
    margin-bottom: auto
  .mx-auto${suffix}
    margin-left: auto
    margin-right: auto
  .my-auto${suffix}
    margin-top: auto
    margin-bottom: auto
`;
  for(let i = 0; i <=5; i++ ) {
    s += TPL_SPACE_CONTENT(i, suffix);
  }
  return s;
}

const TPL_GUTTER = (i) => 
`.gutterx-${i}
  margin-left: -var(--space-${i})
  & > *
    margin-left: var(--space-${i})
.guttery-${i}
  margin-top: -var(--space-${i})
  & > *
    margin-top: var(--space-${i})
.gutter-${i}
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
