/**
 * Advisory report on the border-requirement layer. Offline, never blocking.
 *
 * The number worth watching here is not how many requirements exist. It is how
 * many conditions the official systems resolve that this corpus does not —
 * because that number is the honest measure of how much a reader still has to
 * do, and a layer that made it smaller by guessing would be worse, not better.
 */
import {
  CERTIFICATE_INSTRUMENT,
  RESERVED_CERTIFICATE_TYPES,
  TRADE_DIRECTIONS,
  TRADE_SUBJECT_TYPES,
} from '../types/trade-requirement';
import {
  TRADE_REQUIREMENTS,
  jurisdictionsWithRequirements,
  unresolvedConditionCount,
} from '../lib/trade/registry';

console.log('\nAgricultural border requirement report\n');
console.log(`  Requirements:             ${TRADE_REQUIREMENTS.length}`);
console.log(
  `  Jurisdictions:            ${jurisdictionsWithRequirements().length}`,
);
console.log(
  `  Conditions left to the official systems: ${unresolvedConditionCount()}`,
);

console.log('\n  What form the records take');
console.log(
  `    directory  ${String(TRADE_REQUIREMENTS.filter((r) => r.nature === 'directory').length).padStart(3)}  a pointer at the system that decides, with the conditions it resolves`,
);
console.log(
  `    stated     ${String(TRADE_REQUIREMENTS.filter((r) => r.nature === 'stated').length).padStart(3)}  an unconditional requirement, carrying the text that makes it so`,
);
console.log(
  '\n    Every record is a directory record, and that is the finding rather than\n' +
    '    a shortfall. BICON, AIRS and PExD are decision trees because the answer\n' +
    '    depends on the commodity, the origin, the pest status of the production\n' +
    '    area, the end use and the treatment. None of the conditions examined\n' +
    '    was unconditional, so none was stated as though it were.',
);

console.log('\n  By jurisdiction');
for (const j of jurisdictionsWithRequirements()) {
  const dirs = j.requirements.map((r) => r.direction).join(', ');
  console.log(
    `    ${j.name.padEnd(22)} ${String(j.requirements.length).padStart(2)}  ${dirs}`,
  );
  for (const r of j.requirements)
    console.log(
      `      ${r.unresolvedConditions.length} unresolved conditions · ${r.registryIds.join(', ') || 'guidance'}`,
    );
}

console.log('\n  By direction and subject');
for (const d of TRADE_DIRECTIONS)
  console.log(
    `    ${d.padEnd(8)} ${String(TRADE_REQUIREMENTS.filter((r) => r.direction === d).length).padStart(3)}`,
  );
for (const s of TRADE_SUBJECT_TYPES)
  console.log(
    `    ${s.padEnd(16)} ${String(TRADE_REQUIREMENTS.filter((r) => r.subjectTypes.includes(s)).length).padStart(3)}`,
  );

console.log('\n  Documents, and the instruments behind them');
const used = new Set(
  TRADE_REQUIREMENTS.map((r) => r.certificateType).filter(Boolean),
);
for (const [type, def] of Object.entries(CERTIFICATE_INSTRUMENT))
  console.log(
    `    ${def.label.padEnd(42)} ${used.has(type as never) ? 'in use' : 'reserved'}\n      ${def.instrument}`,
  );
for (const r of RESERVED_CERTIFICATE_TYPES)
  console.log(`    reserved — ${r.certificateType}\n      ${r.why}`);

console.log('\n  What this layer deliberately does not do');
console.log(
  '    commodity expansion  "Plants for planting" is not every crop in this\n' +
    '                         corpus, and no record turns a category into species.\n' +
    '    treatment procedure  Where a treatment is required, the layer records\n' +
    '                         that and where the protocol is published. It does\n' +
    '                         not publish rates, doses or schedules.\n' +
    '    country pairs        A rule that depends on origin AND commodity AND end\n' +
    '                         use is not a fact about a pair of countries.',
);

console.log('\n  Systems examined and how');
console.log(
  '    Australia’s BICON refuses automated clients with HTTP 403 and was\n' +
    '    verified in a real browser instead. That is a fact about how it is\n' +
    '    protected, not about whether it exists — the same distinction the\n' +
    '    freshness layer draws between a blocked retrieval and a missing register.\n' +
    '    The United States’ PExD landing page is public and its requirement search\n' +
    '    requires a logon, so it is recorded as restricted and nothing behind it\n' +
    '    is reproduced.',
);
console.log('');
