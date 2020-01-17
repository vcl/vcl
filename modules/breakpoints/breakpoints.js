const TPL_WRAP = (content) => 
`
${content}
`;

const TPL_BP_VAR = (name, type, value, unit) => 
`$bp-${name}-${type}: ${value}${unit} !default;
`;

const BREAKPOINTS = [
  {
    name: 'xs',
    suffix: '-xs',
    min:  0,
    max:  599,
    unit: 'px',
  }, 
  {
    name: 'sm',
    suffix: '-sm',
    min:  600,
    max: 1023,
    unit: 'px',
  },
  {
    name: 'md',
    suffix: '-md',
    min:  1024,
    max: 1439,
    unit: 'px',
  },
  {
    name: 'lg',
    suffix: '-lg',
    min:  1440,
    max: 1919,
    unit: 'px',
  },
  {
    name: 'xl',
    suffix: '-xl',
    min:  1920,
    max: undefined,
    unit: 'px',
  }
];

const style = TPL_WRAP(BREAKPOINTS.map(({name, min, max, unit}) => {
    if (typeof max === 'number') {
      return TPL_BP_VAR(name, 'min', min, unit) + TPL_BP_VAR(name, 'max', max, unit);
    }
    return TPL_BP_VAR(name, 'min', min, unit);
}).join(''));

module.exports.style = style;

module.exports.queryAll = `@media (min-width: 0)`;

module.exports.BREAKPOINTS = BREAKPOINTS.map(bp => {

  let query;
  let queryFrom;
  let queryTo;

  if (typeof bp.max === 'number') {
    query = `@media (min-width: $bp-${bp.name}-min) and (max-width: $bp-${bp.name}-max)`;
    queryFrom = `@media (min-width: $bp-${bp.name}-min)`;
    queryTo = `@media (max-width: $bp-${bp.name}-max)`;
  } else {
    query = `@media (min-width: $bp-${bp.name}-min)`;
    queryFrom = `@media (min-width: $bp-${bp.name}-min)`;
    queryTo = undefined;
  }
  return {
    ...bp,
    query,
    queryFrom,
    queryTo
  };
});