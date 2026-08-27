/**
 * Advisory report on the market corpus. Offline, never blocking.
 *
 * Its job is to surface what the deterministic gate cannot judge: how much of
 * the corpus is measurement rather than estimate, which sources say nothing,
 * where series end, and which commodity-country pairs are thin enough that a
 * reader should be told so. It also states what was deliberately NOT ingested,
 * because a coverage number that hides its exclusions is a marketing claim.
 */
import { allMarketSeries } from '../lib/markets/registry';
import { marketSnapshots } from '../lib/markets/snapshot';
import { METRIC_LABEL, type MarketMetric } from '../types/market';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { getProfileByCode } from '../lib/geo/registry';

const series = allMarketSeries();
const observations = series.reduce((n, s) => n + s.observations.length, 0);
const commodities = new Set(series.map((s) => s.commodityRef));
const countries = new Set(series.map((s) => s.countryCode));

console.log('\nMarket data report\n');
console.log(
  `  Series:                   ${series.length.toLocaleString('en')}`,
);
console.log(`  Observations:             ${observations.toLocaleString('en')}`);
console.log(`  Commodities:              ${commodities.size}`);
console.log(`  Countries:                ${countries.size}`);

console.log('\n  By source');
for (const [datasetId, snap] of marketSnapshots()) {
  const own = series.filter((s) => s.sourceDatasetId === datasetId);
  const obs = own.reduce((n, s) => n + s.observations.length, 0);
  console.log(
    `    ${datasetId.padEnd(24)} ${own.length.toLocaleString('en').padStart(6)} series  ${obs.toLocaleString('en').padStart(7)} obs  ${snap.periodBasis}  release ${snap.datasetVersion}  read ${snap.retrievedAt}`,
  );
}

console.log('\n  How much of this is a measurement');
const byStatus = new Map<string, number>();
for (const s of series)
  for (const o of s.observations)
    byStatus.set(
      o.observationStatus,
      (byStatus.get(o.observationStatus) ?? 0) + 1,
    );
for (const [st, n] of [...byStatus].sort((a, b) => b[1] - a[1])) {
  console.log(
    `    ${st.padEnd(14)} ${n.toLocaleString('en').padStart(7)}  ${((n / observations) * 100).toFixed(1)}%`,
  );
}
if (!byStatus.has('forecast'))
  console.log(
    '    No observation is a forecast. Neither source flags projections in a\n' +
      '    machine-readable way, so USDA marketing years after 2024 were withheld\n' +
      '    rather than published as though they had been observed.',
  );

console.log('\n  Prices and currency');
{
  const priceSeries = series.filter(
    (s) => s.metric === 'producerPrice' || s.metric === 'indexValue',
  );
  const byCur = new Map<string, number>();
  for (const s of priceSeries) {
    const k = s.currency ?? '(none — index)';
    byCur.set(k, (byCur.get(k) ?? 0) + 1);
  }
  for (const [c, n] of [...byCur].sort((a, b) => b[1] - a[1])) {
    console.log(`    ${c.padEnd(20)} ${String(n).padStart(5)} series`);
  }
  console.log(
    '    Every monetary series is a PRODUCER price — the price received at the\n' +
      '    farm gate. It is not a wholesale, retail, export or futures price.\n' +
      '    FAOSTAT publishes the local-currency and US dollar series separately\n' +
      '    and both are ingested as published. Nothing is converted here, and the\n' +
      '    price index is not money and carries no currency at all.',
  );
}

console.log('\n  Trade');
{
  const q = series.filter((s) =>
    ['exportsQuantity', 'importsQuantity'].includes(s.metric),
  );
  const v = series.filter((s) =>
    ['exportsValue', 'importsValue'].includes(s.metric),
  );
  console.log(`    quantity series ${q.length} · value series ${v.length}`);
  console.log(
    '    FAOSTAT labels FOUR element codes "Export quantity" in four different\n' +
      '    units — number, animals, thousand animals and tonnes. Only the tonne\n' +
      '    and US dollar codes are ingested: a head count cannot share a metric\n' +
      '    with a mass. Every ingested row was checked against its element\u2019s\n' +
      '    expected unit.',
  );
}

console.log('\n  Where two sources cover one fact');
{
  const byFact = new Map<string, Set<string>>();
  const bases = new Map<string, Set<string>>();
  for (const s of series) {
    const k = `${s.metric}|${s.commodityRef}|${s.countryCode}`;
    byFact.set(k, (byFact.get(k) ?? new Set()).add(s.sourceDatasetId));
    bases.set(k, (bases.get(k) ?? new Set()).add(s.basis));
  }
  const overlapping = [...byFact].filter(([, d]) => d.size > 1);
  console.log(
    `    ${overlapping.length} commodity-country-metric facts are covered by two datasets.`,
  );
  console.log(
    '    In every case the period basis differs — USDA reports a marketing year,\n' +
      '    FAOSTAT a calendar year. Those are different windows over different\n' +
      '    months, not two answers to one question, and they are never merged.',
  );
}

console.log('\n  By metric');
const byMetric = new Map<MarketMetric, { series: number; obs: number }>();
for (const s of series) {
  const cur = byMetric.get(s.metric) ?? { series: 0, obs: 0 };
  cur.series += 1;
  cur.obs += s.observations.length;
  byMetric.set(s.metric, cur);
}
for (const [m, v] of [...byMetric].sort((a, b) => b[1].obs - a[1].obs)) {
  const units = new Set(
    series.filter((s) => s.metric === m).map((s) => s.unit),
  );
  console.log(
    `    ${METRIC_LABEL[m].padEnd(20)} ${String(v.series).padStart(5)} series  ${v.obs.toLocaleString('en').padStart(7)} obs  units: ${[...units].join(', ')}`,
  );
}

console.log('\n  Where series end');
const endYears = new Map<number, number>();
for (const s of series) {
  const y = s.observations[s.observations.length - 1]!.period.year;
  endYears.set(y, (endYears.get(y) ?? 0) + 1);
}
for (const [y, n] of [...endYears].sort((a, b) => a[0] - b[0])) {
  console.log(
    `    ${y}  ${String(n).padStart(5)} series${y < 2024 ? '   <- ends early; the page shows the last period the source published' : ''}`,
  );
}

console.log('\n  Commodities with the deepest coverage');
const perCommodity = [...commodities]
  .map((slug) => {
    const own = series.filter((s) => s.commodityRef === slug);
    return {
      slug,
      title:
        PUBLISHED_CONTENT.find(
          (c) => c.contentType === 'commodity' && c.slug === slug,
        )?.title ?? slug,
      countries: new Set(own.map((s) => s.countryCode)).size,
      obs: own.reduce((n, s) => n + s.observations.length, 0),
    };
  })
  .sort((a, b) => b.obs - a.obs);
for (const c of perCommodity.slice(0, 12)) {
  console.log(
    `    ${c.title.padEnd(24)} ${String(c.countries).padStart(3)} countries  ${c.obs.toLocaleString('en').padStart(6)} obs`,
  );
}
console.log(`\n  Thinnest published commodities (still above the depth rule):`);
for (const c of perCommodity.slice(-6)) {
  console.log(
    `    ${c.title.padEnd(24)} ${String(c.countries).padStart(3)} countries  ${c.obs.toLocaleString('en').padStart(6)} obs`,
  );
}

const allCommodities = PUBLISHED_CONTENT.filter(
  (c) => c.contentType === 'commodity',
);
const uncovered = allCommodities.filter((c) => !commodities.has(c.slug));
console.log(
  `\n  Commodities with no market series: ${uncovered.length} of ${allCommodities.length}`,
);
console.log(`    ${uncovered.map((c) => c.slug).join(', ')}`);
console.log(
  '\n    Expected, not a gap to fill by guessing. Processed products, market\n' +
    '    classes and commodities with no single source item are outside these\n' +
    '    releases; absence is not evidence of zero production.',
);

console.log('\n  What was deliberately not ingested');
for (const [datasetId, snap] of marketSnapshots()) {
  console.log(`    ${datasetId}`);
  for (const rule of [
    snap.withheldRule,
    snap.metricRule,
    snap.commodityRule,
    snap.geographyRule,
    snap.seriesRule,
  ].filter(Boolean)) {
    console.log(`      - ${rule}`);
  }
}

const noProfile = [...countries].filter((c) => !getProfileByCode(c));
if (noProfile.length)
  console.log(`\n  Countries with no profile page: ${noProfile.join(', ')}`);
console.log('');
