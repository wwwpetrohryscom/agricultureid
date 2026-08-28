/**
 * Advisory report on the climate, drought and water layer. Offline, never blocking.
 *
 * The numbers worth watching are the two kinds of absence: the claims this
 * layer will not make because they need something no source here carries, and
 * the element it discarded because its values could not be explained.
 */
import {
  CLIMATE_EVIDENCE_CLASSES,
  CLIMATE_EVIDENCE_LABEL,
  DROUGHT_CATEGORIES,
  DROUGHT_CATEGORY_LABEL,
  CATEGORY_IS_DROUGHT,
  WATER_METRIC_KIND,
} from '../types/climate-water';
import {
  ABSENT_CLIMATE_CLAIMS,
  CLIMATE_CONTRACTS,
  RESERVED_EVIDENCE_CLASSES,
} from '../lib/climate/contracts';
import {
  allClimateObservations,
  byEvidenceClass,
  climateSnapshot,
  countriesWithWaterData,
  currentDroughtAssessment,
  statesWithNormals,
} from '../lib/climate/registry';

const OBS = allClimateObservations();
const AS_OF = '2026-08-27';

console.log('\nClimate, drought and agricultural water report\n');
console.log(`  Values:                ${OBS.length.toLocaleString('en')}`);
console.log(`  Datasets:              ${CLIMATE_CONTRACTS.length}`);
console.log(`  States with normals:   ${statesWithNormals().length}`);
console.log(`  Countries with water:  ${countriesWithWaterData().length}`);

console.log('\n  What kind of statement each value is');
for (const c of CLIMATE_EVIDENCE_CLASSES) {
  const n = byEvidenceClass().get(c) ?? 0;
  const res = RESERVED_EVIDENCE_CLASSES.find((r) => r.evidenceClass === c);
  console.log(
    `    ${c.padEnd(20)}${n ? n.toLocaleString('en').padStart(8) : '        '}  ${CLIMATE_EVIDENCE_LABEL[c]}`,
  );
  if (res) console.log(`      not held: ${res.why}`);
}

console.log('\n  Datasets, and what each is entitled to say');
for (const c of CLIMATE_CONTRACTS) {
  const n = OBS.filter((o) => o.sourceDatasetId === c.datasetId).length;
  console.log(`\n    ${c.datasetId}  (${n.toLocaleString('en')} values)`);
  console.log(`      about:      ${c.geographyNote}`);
  console.log(`      units:      ${c.units.join(', ')}`);
  for (const l of c.limitations) console.log(`      limit:      ${l}`);
}

console.log('\n  Who produced each water figure');
{
  const m = new Map<string, number>();
  for (const o of OBS) {
    if (o.spatialBasis !== 'country') continue;
    const k = `${o.sourceFlag} — ${o.sourceFlagMeaning}`;
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  for (const [k, v] of [...m].sort((a, b) => b[1] - a[1]))
    console.log(`    ${String(v).padStart(6)}  ${k}`);
  const official = OBS.filter(
    (o) => o.evidenceClass === 'reported-statistic',
  ).length;
  const total = OBS.filter((o) => o.spatialBasis === 'country').length;
  console.log(
    `\n    ${((official / total) * 100).toFixed(0)}% of the water figures are a country's own official statistic.`,
  );
}

console.log('\n  Irrigation: capacity and use are different numbers');
for (const [metric, kind] of Object.entries(WATER_METRIC_KIND)) {
  const rows = OBS.filter((o) => o.metric === metric);
  console.log(
    `    ${metric.padEnd(36)} ${kind.padEnd(9)} ${String(rows.length).padStart(5)} values`,
  );
}

console.log('\n  Drought, as assessed for the week containing ' + AS_OF);
{
  const rows = statesWithNormals()
    .map((s) => ({ s, a: currentDroughtAssessment(s, AS_OF) }))
    .filter((x) => x.a)
    .map(({ s, a }) => ({
      s,
      inDrought: DROUGHT_CATEGORIES.filter(
        (c) => CATEGORY_IS_DROUGHT[c],
      ).reduce((t, c) => t + (a!.shares[c] ?? 0), 0),
      d0: a!.shares.D0 ?? 0,
    }))
    .sort((a, b) => b.inDrought - a.inDrought);
  console.log('    Worst ten states by share of area in D1 or worse:');
  for (const r of rows.slice(0, 10))
    console.log(
      `      ${r.s}  ${r.inDrought.toFixed(1).padStart(5)}% in drought   ${r.d0.toFixed(1).padStart(5)}% abnormally dry (not drought)`,
    );
  const anyD0 = rows.reduce((t, r) => t + r.d0, 0) / rows.length;
  console.log(
    `\n    Counting D0 as drought would add ${anyD0.toFixed(1)} points to the average state.`,
  );
}

console.log('\n  Discarded, with the evidence');
{
  const n = climateSnapshot('ncei-us-climate-normals');
  for (const d of (n.discardedElements ?? []) as {
    element: string;
    documentedAs: string;
    why: string;
    valuesDiscarded: number;
  }[]) {
    console.log(
      `    ${d.element} — ${d.valuesDiscarded.toLocaleString('en')} values`,
    );
    console.log(`      documented as: ${d.documentedAs}`);
    console.log(`      ${d.why}`);
  }
}

console.log('\n  What this layer will not say');
for (const a of ABSENT_CLIMATE_CLAIMS) {
  console.log(`\n    ${a.label}`);
  console.log(`      ${a.why}`);
}
console.log(
  '\n  Every one of those is a step from exposure to impact, and every one needs\n' +
    '  something no dataset here carries.\n',
);
console.log(
  '  Drought categories: ' +
    DROUGHT_CATEGORIES.map(
      (c) =>
        `${c}=${DROUGHT_CATEGORY_LABEL[c]}${CATEGORY_IS_DROUGHT[c] ? '' : ' (not drought)'}`,
    ).join('; ') +
    '\n',
);
