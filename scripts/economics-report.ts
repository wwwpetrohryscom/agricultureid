/**
 * Advisory report on the farm-economics layer. Offline, never blocking.
 *
 * The number to watch is not how many figures exist. It is how much of what a
 * reader wants to know is missing on purpose: no dataset here carries revenue,
 * so no margin, no net return and no break-even can be published, and pretending
 * otherwise would be the single most damaging thing this layer could do.
 */
import {
  EVIDENCE_TYPES,
  FARM_ECONOMIC_METRICS,
  INDEX_METRICS,
} from '../types/farm-economics';
import {
  ABSENT_METRICS,
  ECONOMICS_CONTRACTS,
  RESERVED_EVIDENCE_TYPES,
} from '../lib/economics/contracts';
import {
  allEconomicObservations,
  byEvidenceType,
  costsForCrop,
  cropsWithCosts,
  economicsJurisdictions,
} from '../lib/economics/registry';

const OBS = allEconomicObservations();

console.log('\nFarm economics report\n');
console.log(`  Figures:        ${OBS.length.toLocaleString('en')}`);
console.log(`  Datasets:       ${ECONOMICS_CONTRACTS.length}`);
console.log(
  `  Metrics:        ${new Set(OBS.map((o) => o.metric)).size} of ${FARM_ECONOMIC_METRICS.length} in the vocabulary`,
);

console.log('\n  What kind of number each figure is');
for (const t of EVIDENCE_TYPES) {
  const n = byEvidenceType().get(t) ?? 0;
  const reserved = RESERVED_EVIDENCE_TYPES.find((r) => r.evidenceType === t);
  console.log(
    `    ${t.padEnd(20)}${n ? n.toLocaleString('en').padStart(8) : '        '}  ${
      reserved ? reserved.why : ''
    }`,
  );
}

console.log('\n  Datasets, and what each one is entitled to say');
for (const c of ECONOMICS_CONTRACTS) {
  const n = OBS.filter((o) => o.sourceDatasetId === c.datasetId).length;
  console.log(`\n    ${c.datasetId}  (${n.toLocaleString('en')} figures)`);
  console.log(`      kind:       ${c.evidenceType}`);
  console.log(
    `      money:      ${c.isIndex ? 'none — this is an index, not an amount' : c.currencies.join(', ') + ', as published'}`,
  );
  console.log(`      geography:  ${c.geographyNote}`);
  for (const a of c.assumptions ?? []) console.log(`      assumes:    ${a}`);
}

console.log('\n  Crops with cost figures');
for (const crop of cropsWithCosts()) {
  const rows = costsForCrop(crop);
  const years = [...new Set(rows.map((r) => r.period))].sort();
  console.log(
    `    ${crop.padEnd(12)}${String(rows.length).padStart(4)} figures   ${years.join(', ')}`,
  );
}

console.log('\n  Geography');
{
  const J = economicsJurisdictions();
  const by = new Map<string, number>();
  for (const j of J) by.set(j.level, (by.get(j.level) ?? 0) + 1);
  for (const [k, v] of [...by].sort((a, b) => b[1] - a[1]))
    console.log(`    ${k.padEnd(14)}${String(v).padStart(4)}`);
  console.log(
    '\n    A union aggregate, a country and a region inside a country are three\n' +
      '    different things, and the source publishes all three in one column.',
  );
}

console.log('\n  What cannot be published, and why');
for (const a of ABSENT_METRICS) console.log(`    ${a.name.padEnd(18)}${a.why}`);

console.log('\n  Indices are not money');
console.log(
  `    ${INDEX_METRICS.join(', ')} carry a base year instead of a currency.\n` +
    '    They say how a price moved against that base. They do not say what\n' +
    '    anything cost, and they cannot be added to anything that does.\n',
);
