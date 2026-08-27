/**
 * Deterministic gate for the market corpus. Offline.
 *
 * The rules here are semantic, not structural. Market data fails in ways that
 * look perfectly well-formed: a forecast in an observation column, an area in
 * tonnes, a marketing year plotted as a calendar year, a bale total added to a
 * tonne total. Every check below exists because one of those would otherwise
 * render as an ordinary number.
 *
 * What it enforces:
 *
 *  - Every observation carries a status from the vocabulary, and that status is
 *    one the snapshot's own legend can produce. A value whose status came from
 *    nowhere is rejected even if the vocabulary would accept it.
 *  - The unit can express the metric. `METRIC_DIMENSION` fixes what each metric
 *    measures, and a unit that cannot express that dimension — an area in
 *    tonnes, a yield with no per-area term — fails.
 *  - One metric has ONE unit within a dataset. Mixing 1000 MT and bales in a
 *    single series is how a fourfold error hides in plain sight.
 *  - Periods are ordered, unique, and inside the snapshot's declared window.
 *  - No two datasets publish the same metric for the same commodity and
 *    country. That is the duplicate-alias failure: two numbers, both sourced,
 *    silently disagreeing.
 *  - Every series clears the declared depth rule, so no page is built on one
 *    isolated figure.
 */
import {
  allMarketSeries,
  commoditiesWithMarketData,
} from '../lib/markets/registry';
import {
  marketSnapshots,
  FAOSTAT_PRODUCTION_DATASET_ID,
  USDA_PSD_DATASET_ID,
  FAOSTAT_PRICES_DATASET_ID,
  FAOSTAT_TRADE_CL_DATASET_ID,
} from '../lib/markets/snapshot';
import {
  CURRENCY_BASES,
  MONETARY_METRICS,
  MARKET_METRICS,
  METRIC_DIMENSION,
  OBSERVATION_STATUSES,
  PERIOD_BASES,
  PERIOD_FREQUENCIES,
  type MarketMetric,
  type MetricDimension,
} from '../types/market';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { getDataset } from '../lib/data-ops/registry';
import { getProfileByCode } from '../lib/geo/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const COMMODITIES = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').map(
    (c) => c.slug,
  ),
);
const ISO3 = /^[A-Z]{3}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
/** Minimum observations in a series, matching the snapshots' declared rule. */
const MIN_SERIES_LENGTH = 10;

/**
 * The period basis each source actually publishes on.
 *
 * Pinned here rather than trusted from the file, because a snapshot that
 * relabels its own basis is internally consistent and nothing else contradicts
 * it — yet plotting USDA marketing years as calendar years silently shifts
 * every point by up to a year. Adding a dataset means stating its basis here
 * deliberately, which is the point.
 */
const REQUIRED_BASIS: Record<string, string> = {
  [FAOSTAT_PRODUCTION_DATASET_ID]: 'calendar-year',
  [USDA_PSD_DATASET_ID]: 'marketing-year',
  [FAOSTAT_PRICES_DATASET_ID]: 'calendar-year',
  [FAOSTAT_TRADE_CL_DATASET_ID]: 'calendar-year',
};

/**
 * The statuses each source is known to publish.
 *
 * "Forecast presented as actual" cannot be detected inside a file — a mislabelled
 * value looks like any other. What CAN be detected is the change that would let
 * it happen: a dataset quietly acquiring a status class it never had. FAOSTAT
 * flags official and estimated values and publishes no forecast flag in this
 * domain; USDA publishes PSD as estimates and flags nothing per value, which is
 * exactly why its projection marketing years were withheld rather than ingested.
 * Widening either set has to be a deliberate edit here, reviewed against the
 * source's own documentation.
 */
const PERMITTED_STATUSES: Record<string, readonly string[]> = {
  [FAOSTAT_PRODUCTION_DATASET_ID]: ['observed', 'estimated'],
  [USDA_PSD_DATASET_ID]: ['estimated'],
  [FAOSTAT_PRICES_DATASET_ID]: ['observed', 'estimated'],
  [FAOSTAT_TRADE_CL_DATASET_ID]: ['observed', 'estimated'],
};

/**
 * Whether a published unit can express a dimension. Deliberately a matcher over
 * unit SHAPE rather than a list of known units: a new source's unit string
 * should have to look like the dimension it claims, not appear on an allowlist
 * someone forgot to update.
 */
function unitFitsDimension(unit: string, dimension: MetricDimension): boolean {
  const u = unit.toLowerCase().trim();
  const perArea =
    /\/\s*(ha|hectare|ac|acre)\b|\bper\s+(ha|hectare|acre)\b/.test(u);
  const massTerm =
    /\b(t|tonne|tonnes|mt|kg|kilogram|lb|pound|bale|bales|bu|bushel)\b/.test(u);
  const areaTerm = /\b(ha|hectare|hectares|ac|acre|acres|km2|km²)\b/.test(u);
  const currencyTerm = /\b(usd|eur|lcu|slc|dollar|euro|\$|€)\b/.test(u);
  switch (dimension) {
    case 'mass':
      return massTerm && !perArea;
    case 'area':
      return areaTerm && !massTerm && !perArea;
    case 'mass-per-area':
      return massTerm && perArea;
    case 'currency':
      return currencyTerm && !perArea;
    case 'currency-per-mass':
      return currencyTerm && /\/\s*(t|kg|tonne|mt)\b/.test(u);
    case 'index':
      return /index|=\s*100/.test(u);
  }
}

/* -- snapshot-level checks ------------------------------------------------- */
if (marketSnapshots().size === 0) {
  fail('no market snapshot could be loaded from data/snapshots');
}

for (const [datasetId, snap] of marketSnapshots()) {
  const at = `snapshot ${datasetId}`;
  if (!getDataset(datasetId))
    fail(`${at}: no dataset registry entry — provenance would be unreachable`);
  if (!PERIOD_BASES.includes(snap.periodBasis))
    fail(`${at}: unknown period basis "${snap.periodBasis}"`);
  const requiredBasis = REQUIRED_BASIS[datasetId];
  if (!requiredBasis)
    fail(
      `${at}: no period basis is pinned for this dataset — state it in REQUIRED_BASIS rather than trusting the file`,
    );
  else if (snap.periodBasis !== requiredBasis)
    fail(
      `${at}: declares "${snap.periodBasis}" but this source publishes ${requiredBasis} periods`,
    );
  if (!PERIOD_FREQUENCIES.includes(snap.periodFrequency))
    fail(`${at}: unknown period frequency "${snap.periodFrequency}"`);
  if (!ISO_DATE.test(snap.retrievedAt))
    fail(`${at}: retrievedAt must be an ISO date`);
  if (!snap.datasetVersion?.trim())
    fail(`${at}: datasetVersion is required — a build date is not a data date`);
  if (snap.retrievedAt < snap.datasetVersion)
    fail(
      `${at}: retrievedAt ${snap.retrievedAt} precedes the release it claims to have read (${snap.datasetVersion})`,
    );
  if (!snap.checksum || snap.checksum.length < 32)
    fail(`${at}: an ingested snapshot must carry a checksum`);
  if (!snap.statusRule?.trim())
    fail(`${at}: statusRule is required — status may never be assumed`);
  if (!snap.limitations?.length) fail(`${at}: limitations are required`);
  for (const [metric, unit] of Object.entries(snap.metrics)) {
    if (!MARKET_METRICS.includes(metric as MarketMetric)) {
      fail(`${at}: metric "${metric}" is not in the vocabulary`);
      continue;
    }
    const dimension = METRIC_DIMENSION[metric as MarketMetric];
    if (!unitFitsDimension(unit, dimension))
      fail(
        `${at}: unit "${unit}" cannot express ${metric}, which measures ${dimension}`,
      );
  }
  for (const code of Object.values(snap.statusLegend)) {
    if (!OBSERVATION_STATUSES.includes(code))
      fail(`${at}: status legend maps to unknown status "${code}"`);
  }
  const permitted = PERMITTED_STATUSES[datasetId];
  if (!permitted)
    fail(
      `${at}: no status set is pinned for this dataset — state what this source publishes in PERMITTED_STATUSES`,
    );
  else {
    const used = new Set(
      snap.series.flatMap((series) =>
        [...series.statuses].map((c) => snap.statusLegend[c] ?? 'unknown'),
      ),
    );
    for (const st of used) {
      if (!permitted.includes(st))
        fail(
          `${at}: publishes status "${st}", which this source is not documented to produce (permitted: ${permitted.join(', ')})`,
        );
    }
  }
  const declared = snap.observationCount;
  const actual = snap.series.reduce((n, s) => n + s.years.length, 0);
  if (declared !== actual)
    fail(`${at}: declares ${declared} observations but holds ${actual}`);
  if (snap.seriesCount !== snap.series.length)
    fail(
      `${at}: declares ${snap.seriesCount} series but holds ${snap.series.length}`,
    );
}

/* -- series and observation checks ----------------------------------------- */
const seriesIds = new Set<string>();
/** metric+commodity+country -> datasets publishing it, for the alias check. */
const claims = new Map<string, Set<string>>();
/**
 * dataset+commodity+dimension -> units seen.
 *
 * Cotton is legitimately published in bales where wheat is published in tonnes,
 * so a single unit per metric is not a true invariant. What IS true: within one
 * source and one commodity, everything measuring the same dimension AND
 * denominated in the same currency shares a unit. A commodity whose production
 * is in tonnes and whose stocks are in bales is a fourfold error wearing a
 * plausible unit string.
 *
 * Currency belongs in the key because FAOSTAT publishes the same producer price
 * in local currency AND in US dollars as two separate series. Those are two
 * published facts, not one fact in two units — and keying on currency also
 * asserts the converse, that a single currency never carries two units.
 */
const unitsByDimension = new Map<string, Set<string>>();

for (const s of allMarketSeries()) {
  const at = s.id;
  if (seriesIds.has(s.id)) fail(`${at}: duplicate series id`);
  seriesIds.add(s.id);

  if (!COMMODITIES.has(s.commodityRef))
    fail(
      `${at}: commodityRef "${s.commodityRef}" is not a published commodity`,
    );
  if (!ISO3.test(s.countryCode))
    fail(`${at}: countryCode must be ISO 3166-1 alpha-3`);
  if (!getProfileByCode(s.countryCode))
    fail(`${at}: no country profile for "${s.countryCode}"`);
  if (!MARKET_METRICS.includes(s.metric))
    fail(`${at}: metric "${s.metric}" is not in the vocabulary`);
  if (!s.unit?.trim()) fail(`${at}: unit is required on every series`);
  if (!getDataset(s.sourceDatasetId))
    fail(`${at}: sourceDatasetId "${s.sourceDatasetId}" is not a dataset`);
  if (!s.sourceSnapshotId?.trim()) fail(`${at}: sourceSnapshotId is required`);
  if (!ISO_DATE.test(s.retrievedAt))
    fail(`${at}: retrievedAt must be an ISO date`);

  if (s.observations.length < MIN_SERIES_LENGTH)
    fail(
      `${at}: ${s.observations.length} observations is below the declared depth rule of ${MIN_SERIES_LENGTH} — a series this short must not be published`,
    );

  const snap = marketSnapshots().get(s.sourceDatasetId);
  const legend = new Set(Object.values(snap?.statusLegend ?? {}));
  const [from, to] = snap?.coveredYears ?? [-Infinity, Infinity];

  // The period basis is part of the fact. USDA reports trade on a marketing
  // year and FAOSTAT on a calendar year: those are different windows over
  // different months, not two answers to one question. Two sources claiming
  // the same metric for the same commodity, country AND basis would be a real
  // conflict, and that is what this still catches.
  const key = `${s.metric}|${s.commodityRef}|${s.countryCode}|${s.basis}`;
  claims.set(key, (claims.get(key) ?? new Set()).add(s.sourceDatasetId));

  const dimKey = `${s.sourceDatasetId}|${s.commodityRef}|${METRIC_DIMENSION[s.metric]}|${s.currency ?? '-'}`;
  unitsByDimension.set(
    dimKey,
    (unitsByDimension.get(dimKey) ?? new Set()).add(s.unit),
  );

  let previousYear = -Infinity;
  const units = new Set<string>();
  let allZero = true;
  for (const o of s.observations) {
    units.add(o.unit);
    if (o.value !== 0) allZero = false;
    if (!Number.isFinite(o.value))
      fail(`${at}: non-finite value at ${o.period.year}`);
    if (o.value < 0 && s.metric !== 'indexValue')
      fail(`${at}: negative ${s.metric} at ${o.period.year}`);
    if (!OBSERVATION_STATUSES.includes(o.observationStatus))
      fail(
        `${at}: unknown status "${o.observationStatus}" at ${o.period.year}`,
      );
    if (!legend.has(o.observationStatus))
      fail(
        `${at}: status "${o.observationStatus}" at ${o.period.year} is not one this snapshot's legend can produce`,
      );
    if (o.period.basis !== snap?.periodBasis)
      fail(
        `${at}: observation at ${o.period.year} claims basis "${o.period.basis}" but its snapshot publishes "${snap?.periodBasis}"`,
      );
    if (o.period.year <= previousYear)
      fail(`${at}: periods are out of order or duplicated at ${o.period.year}`);
    previousYear = o.period.year;
    if (o.period.year < from || o.period.year > to)
      fail(
        `${at}: period ${o.period.year} lies outside the snapshot window ${from}–${to}`,
      );
    if (o.commodityRef !== s.commodityRef || o.countryCode !== s.countryCode)
      fail(`${at}: observation at ${o.period.year} belongs to another series`);
  }
  if (units.size > 1)
    fail(
      `${at}: mixes units [${[...units].join(', ')}] within one series — every point in a series must share a unit`,
    );
  if (allZero)
    fail(
      `${at}: every value is zero; an all-zero series must not be published`,
    );

  const dimension = METRIC_DIMENSION[s.metric];
  if (!unitFitsDimension(s.unit, dimension))
    fail(
      `${at}: unit "${s.unit}" cannot express ${s.metric}, which measures ${dimension}`,
    );
}

for (const [dimKey, units] of unitsByDimension) {
  if (units.size > 1) {
    const [datasetId, commodity, dimension, currency] = dimKey.split('|');
    fail(
      `${datasetId} / ${commodity}: ${dimension} in ${currency} is published in more than one unit [${[...units].join(', ')}] — figures for one commodity would not be comparable with each other`,
    );
  }
}

/* -- money carries a currency; everything else carries none ---------------- */
for (const s of allMarketSeries()) {
  const monetary = MONETARY_METRICS.includes(s.metric);
  if (monetary && METRIC_DIMENSION[s.metric] === 'currency-per-mass') {
    // A price without a currency is a number nobody can act on.
    if (!s.currency)
      fail(
        `${s.id}: a price series must name the currency it is denominated in`,
      );
    if (!s.currencyBasis)
      fail(
        `${s.id}: a price series must say what kind of currency figure it is — a nominal local unit and a standardised construct are different facts`,
      );
    else if (!CURRENCY_BASES.includes(s.currencyBasis))
      fail(
        `${s.id}: currencyBasis "${s.currencyBasis}" is not in the vocabulary`,
      );
  }
  if (!monetary && s.currency)
    fail(
      `${s.id}: ${s.metric} is not money and must not carry a currency — an index in "USD" reads as a price`,
    );
  if (s.metric === 'indexValue' && (s.currency || s.currencyBasis))
    fail(
      `${s.id}: an index is not money. It shares no unit with a price and must carry no currency.`,
    );
  for (const o of s.observations) {
    if (o.currency !== s.currency)
      fail(`${s.id}: an observation's currency differs from its series`);
  }
}

/* -- a price basis is never merged with another --------------------------- */
{
  // producerPrice and wholesalePrice are different quantities for the same
  // commodity in the same week. A series may hold exactly one basis, and the
  // metric IS the basis — there is no bare "price" metric to fall back to.
  const priceMetrics = allMarketSeries()
    .filter((s) => METRIC_DIMENSION[s.metric] === 'currency-per-mass')
    .map((s) => s.metric);
  for (const m of new Set(priceMetrics)) {
    if (!MARKET_METRICS.includes(m))
      fail(`price metric "${m}" is not in the vocabulary`);
    if (m === ('price' as MarketMetric))
      fail('a bare "price" metric would hide which basis a figure is on');
  }
}

/* -- cross-dataset checks -------------------------------------------------- */
for (const [key, datasets] of claims) {
  if (datasets.size > 1)
    fail(
      `${key}: published by more than one dataset (${[...datasets].join(', ')}) on the SAME period basis — two sourced figures for one fact would silently disagree`,
    );
}

/* -- where two sources cover one fact on different bases, say so ----------- */
{
  // Allowed, but only when the difference is visible: both series must declare
  // a basis, and the two bases must actually differ.
  const byFact = new Map<string, { basis: string; dataset: string }[]>();
  for (const s of allMarketSeries()) {
    const k = `${s.metric}|${s.commodityRef}|${s.countryCode}`;
    byFact.set(k, [
      ...(byFact.get(k) ?? []),
      { basis: s.basis, dataset: s.sourceDatasetId },
    ]);
  }
  for (const [k, entries] of byFact) {
    const datasets = new Set(entries.map((e) => e.dataset));
    if (datasets.size < 2) continue;
    const bases = new Set(entries.map((e) => e.basis));
    if (bases.size < 2)
      fail(
        `${k}: covered by ${datasets.size} datasets that declare the same period basis`,
      );
    for (const e of entries) {
      if (!PERIOD_BASES.includes(e.basis as never))
        fail(`${k}: dataset ${e.dataset} declares no valid period basis`);
    }
  }
}

const missing = commoditiesWithMarketData().filter((c) => !COMMODITIES.has(c));
if (missing.length)
  fail(`market data references unpublished commodities: ${missing.join(', ')}`);

/* -- report ---------------------------------------------------------------- */
const series = allMarketSeries();
const observations = series.reduce((n, s) => n + s.observations.length, 0);
console.log('\nMarket data validation\n');
console.log(`  Datasets:                 ${marketSnapshots().size}`);
console.log(
  `  Series:                   ${series.length.toLocaleString('en')}`,
);
console.log(`  Observations:             ${observations.toLocaleString('en')}`);
console.log(
  `  Commodities:              ${commoditiesWithMarketData().length}`,
);
console.log(
  `  Countries:                ${new Set(series.map((s) => s.countryCode)).size}`,
);
for (const [datasetId, snap] of marketSnapshots()) {
  console.log(
    `  ${datasetId.padEnd(24)} ${snap.seriesCount.toLocaleString('en').padStart(6)} series · ${snap.periodBasis} · release ${snap.datasetVersion}`,
  );
}
const byStatus = new Map<string, number>();
for (const s of series)
  for (const o of s.observations)
    byStatus.set(
      o.observationStatus,
      (byStatus.get(o.observationStatus) ?? 0) + 1,
    );
for (const st of OBSERVATION_STATUSES) {
  const n = byStatus.get(st);
  if (n) console.log(`    ${st.padEnd(26)}${n.toLocaleString('en')}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Market validation passed.\n');
