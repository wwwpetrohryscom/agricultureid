/**
 * Deterministic gate for the farm-economics layer. Offline.
 *
 * The failures this prevents are the ones that turn an estimate into a promise:
 *
 *   a forecast presented as what a farm spent
 *   a total cost read as a variable cost, or a gross margin called profit
 *   a figure without its currency, year or unit basis
 *   a currency or an inflation adjustment applied that no source applied
 *   a nominal and a real series compared with each other
 *   a national average read as an individual farm's number
 *   an index treated as an amount of money
 */
import {
  EVIDENCE_TYPES,
  FARM_ECONOMIC_METRICS,
  GEOGRAPHY_LEVELS,
  INDEX_METRICS,
  PRICE_BASES,
  SOURCE_TOTAL_METRICS,
} from '../types/farm-economics';
import {
  ABSENT_METRICS,
  CURRENCY_FORBIDDEN_SERIES,
  ECONOMICS_CONTRACTS,
  ECONOMICS_CONTRACT_MAP,
  ERS_ITEM_FOR_METRIC,
  PAYLOAD_EVIDENCE_MARKERS,
  RESERVED_EVIDENCE_TYPES,
  RESERVED_GEOGRAPHY_LEVELS,
} from '../lib/economics/contracts';
import {
  allEconomicObservations,
  byEvidenceType,
  cropsWithCosts,
  economicsJurisdictions,
  economicsSnapshot,
} from '../lib/economics/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { REGISTRIES } from '../data/registries';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { existsSync } from 'node:fs';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const YEAR = /^\d{4}$/;
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const CROP_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const OBS = allEconomicObservations();
const CORPUS_YEAR = 2026;
const RESERVED_LEVELS = new Set(RESERVED_GEOGRAPHY_LEVELS.map((r) => r.level));

/* -- contracts ------------------------------------------------------------- */
for (const c of ECONOMICS_CONTRACTS) {
  if (!existsSync(c.snapshotPath))
    fail(
      `contract "${c.datasetId}": snapshot ${c.snapshotPath} does not exist`,
    );
  if (!REGISTRY_IDS.has(c.registryId))
    fail(`contract "${c.datasetId}": unknown registry "${c.registryId}"`);
  for (const s of c.sourceIds)
    if (!SOURCE_MAP.has(s))
      fail(`contract "${c.datasetId}": unknown source "${s}"`);
  if (!EVIDENCE_TYPES.includes(c.evidenceType))
    fail(`contract "${c.datasetId}": evidence type not in vocabulary`);
  for (const m of c.metrics)
    if (!FARM_ECONOMIC_METRICS.includes(m))
      fail(`contract "${c.datasetId}": metric "${m}" not in vocabulary`);
  // An index has no currency; anything else must say what money it is in.
  if (c.isIndex && c.currencies.length)
    fail(`contract "${c.datasetId}": an index dataset declares currencies`);
  if (!c.isIndex && !c.currencies.length)
    fail(`contract "${c.datasetId}": a monetary dataset declares no currency`);
  // Every dataset must say what kind of place its figures are about. Without
  // it a union aggregate and a NUTS region read as the same kind of number.
  if (!c.geographyNote?.trim())
    fail(`contract "${c.datasetId}": does not say what its geographies are`);
  // A forecast or a budget is a scenario, and a scenario without its
  // assumptions is a set of numbers detached from what produced them.
  if (
    ['forecast', 'enterprise-budget', 'modeled'].includes(c.evidenceType) &&
    !c.assumptions?.length
  )
    fail(
      `contract "${c.datasetId}": a "${c.evidenceType}" dataset must state what it assumes`,
    );
}

/* -- observations ---------------------------------------------------------- */
const ids = new Set<string>();
for (const o of OBS) {
  const at = o.id;
  if (ids.has(o.id)) fail(`${at}: duplicate observation id`);
  ids.add(o.id);

  const contract = ECONOMICS_CONTRACT_MAP.get(o.sourceDatasetId);
  if (!contract) {
    fail(
      `${at}: dataset "${o.sourceDatasetId}" has no contract, so no rule in this gate applies to it`,
    );
    continue;
  }

  if (!FARM_ECONOMIC_METRICS.includes(o.metric))
    fail(`${at}: metric not in vocabulary`);
  else if (!contract.metrics.includes(o.metric))
    fail(
      `${at}: "${o.metric}" is not a metric ${contract.datasetId} publishes`,
    );

  // Evidence type comes from the dataset, never from the record. A forecast
  // cannot promote itself into an observation of what a farm spent.
  if (o.evidenceType !== contract.evidenceType)
    fail(
      `${at}: evidence type "${o.evidenceType}" is not what ${contract.datasetId} produces ("${contract.evidenceType}")`,
    );

  /* -- a number needs its currency, year and basis ------------------------- */
  if (!Number.isFinite(o.value)) fail(`${at}: value is not a finite number`);
  if (!o.unitBasis?.trim()) fail(`${at}: no unit basis`);
  if (!YEAR.test(o.period)) fail(`${at}: period must be a four-digit year`);
  else if (Number(o.period) > CORPUS_YEAR + 5)
    fail(
      `${at}: period ${o.period} is further ahead than any source here forecasts`,
    );

  const isIndex = INDEX_METRICS.includes(o.metric);
  if (isIndex !== contract.isIndex)
    fail(
      `${at}: metric "${o.metric}" disagrees with its dataset about being an index`,
    );
  if (isIndex) {
    // An index is not money. Giving one a currency invites it to be added to,
    // subtracted from or spent alongside amounts that are.
    if (o.currency)
      fail(
        `${at}: an index carries a currency, which would make it look like money`,
      );
    if (!o.indexBase?.trim())
      fail(
        `${at}: an index with no base year cannot be compared with anything`,
      );
    if (!o.priceBasis)
      fail(`${at}: an index must say whether it is nominal or real`);
    else if (!PRICE_BASES.includes(o.priceBasis))
      fail(`${at}: price basis not in vocabulary`);
  } else {
    if (!o.currency?.trim()) fail(`${at}: a monetary figure with no currency`);
    else if (!contract.currencies.includes(o.currency))
      fail(
        `${at}: currency "${o.currency}" is not one ${contract.datasetId} publishes (${contract.currencies.join(', ')})`,
      );
    if (o.priceBasis)
      fail(`${at}: a price basis on a figure that is not an index`);
    if (o.indexBase)
      fail(`${at}: an index base on a figure that is not an index`);
  }

  /* -- geography ----------------------------------------------------------- */
  if (!GEOGRAPHY_LEVELS.includes(o.geographyLevel))
    fail(`${at}: geography level not in vocabulary`);
  // "unknown" is for recording a geography this corpus cannot place. Publishing
  // one puts a figure in the corpus that nobody can attribute to anywhere.
  else if (RESERVED_LEVELS.has(o.geographyLevel))
    fail(
      `${at}: geography "${o.jurisdictionName}" could not be placed as a union, a country or a region, and a figure at an unplaceable geography is not publishable`,
    );
  if (o.countryCode && o.supranationalJurisdiction)
    fail(`${at}: a figure cannot be a country's and a union's at once`);
  if (o.countryCode && !/^[A-Z]{3}$/.test(o.countryCode))
    fail(`${at}: countryCode must be ISO 3166-1 alpha-3`);
  if (o.geographyLevel === 'union' && o.countryCode)
    fail(`${at}: a union aggregate carrying a country code`);
  if (o.geographyLevel === 'subnational' && !o.subnationalCode)
    fail(`${at}: a regional figure with no regional code`);
  if (o.subnationalCode && o.geographyLevel !== 'subnational')
    fail(`${at}: a regional code on a figure that is not regional`);
  if (!o.jurisdictionName?.trim()) fail(`${at}: no jurisdiction name`);

  /* -- crops are named by the source, never inferred ----------------------- */
  if (o.cropRef && !CROP_SLUGS.has(o.cropRef))
    fail(`${at}: cropRef "${o.cropRef}" is not a published crop`);
  if (!o.publishedSubject?.trim())
    fail(`${at}: no published subject, so the figure names nothing`);

  /* -- scenarios carry their assumptions ----------------------------------- */
  if (
    ['forecast', 'enterprise-budget', 'modeled'].includes(o.evidenceType) &&
    !o.assumptions?.length
  )
    fail(`${at}: a "${o.evidenceType}" figure with no assumptions`);

  /* -- provenance ---------------------------------------------------------- */
  if (!o.sourceReferenceIds.length) fail(`${at}: no source`);
  for (const s of o.sourceReferenceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  if (!ISO.test(o.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
}

/* -- the payload must agree with the contract about it --------------------- */
// A contract that describes a dataset is trusted for every figure derived from
// it. That trust is only earned if the payload still says what the contract
// says it says.
for (const m of PAYLOAD_EVIDENCE_MARKERS) {
  const contract = ECONOMICS_CONTRACT_MAP.get(m.datasetId);
  if (!contract) {
    fail(
      `evidence marker names dataset "${m.datasetId}", which has no contract`,
    );
    continue;
  }
  const snap = economicsSnapshot(m.datasetId) as Record<string, unknown>;
  const rows = snap[m.series];
  if (!Array.isArray(rows)) {
    fail(`evidence marker: "${m.datasetId}" has no series "${m.series}"`);
    continue;
  }
  const disagreeing = (rows as Record<string, unknown>[]).filter(
    (r) => r[m.field] !== m.mustEqual,
  );
  if (disagreeing.length)
    fail(
      `${m.datasetId}: ${disagreeing.length} row(s) do not carry ${m.field}=${String(m.mustEqual)}, so the contract calling this dataset "${contract.evidenceType}" is describing data it does not describe`,
    );
}

for (const f of CURRENCY_FORBIDDEN_SERIES) {
  const snap = economicsSnapshot(f.datasetId) as Record<string, unknown>;
  const rows = snap[f.series];
  if (!Array.isArray(rows)) {
    fail(`currency rule: "${f.datasetId}" has no series "${f.series}"`);
    continue;
  }
  const withCurrency = (rows as Record<string, unknown>[]).filter(
    (r) => r.currency !== undefined,
  );
  if (withCurrency.length)
    fail(
      `${f.datasetId}: ${withCurrency.length} index row(s) carry a currency field. ${f.why}`,
    );
}

/* -- the source's own wording still names the metric ----------------------- */
// The metric is this corpus's word for the figure; publishedItem is the
// source's. Checking only that the metric is in the vocabulary would check the
// SHAPE of the mapping while the error lives in what it means.
{
  const rows = economicsSnapshot('ers-cost-of-production-forecasts').rows as {
    metric: string;
    publishedItem: string;
    cropRef: string;
    period: string;
  }[];
  for (const r of rows) {
    const expected = ERS_ITEM_FOR_METRIC[r.metric];
    if (!expected)
      fail(
        `ers ${r.cropRef} ${r.period}: metric "${r.metric}" has no pinned published item, so nothing checks what the source called it`,
      );
    else if (r.publishedItem !== expected)
      fail(
        `ers ${r.cropRef} ${r.period}: "${r.metric}" is published by the source as "${expected}", but this row carries "${r.publishedItem}"`,
      );
  }
  for (const m of Object.keys(ERS_ITEM_FOR_METRIC))
    if (
      !FARM_ECONOMIC_METRICS.includes(
        m as (typeof FARM_ECONOMIC_METRICS)[number],
      )
    )
      fail(`pinned published item names "${m}", which is not a metric`);
}

/* -- totals are the source's, never computed here -------------------------- */
// ERS decides what belongs in "Total, operating costs". A total recomputed by
// adding the items would silently disagree, and the difference would read as a
// data error rather than a definitional one.
{
  const ers = economicsSnapshot('ers-cost-of-production-forecasts');
  const rows = ers.rows as {
    cropRef: string;
    period: string;
    metric: string;
    value: number;
  }[];
  for (const period of new Set(rows.map((r) => r.period))) {
    for (const crop of new Set(rows.map((r) => r.cropRef))) {
      const scope = rows.filter(
        (r) => r.cropRef === crop && r.period === period,
      );
      const total = scope.find((r) => r.metric === 'totalCost');
      const op = scope.find((r) => r.metric === 'operatingCost');
      const alloc = scope.find((r) => r.metric === 'allocatedOverheadCost');
      if (!total || !op || !alloc) continue;
      // The source's own totals must be consistent with each other, which is a
      // check on the ingest rather than a recomputation of the source.
      const drift = Math.abs(total.value - (op.value + alloc.value));
      if (drift > 0.05)
        fail(
          `${crop} ${period}: the source's total (${total.value}) is not its operating plus allocated costs (${op.value} + ${alloc.value}); the ingest has mixed items up`,
        );
    }
  }
}

/* -- nothing that needs revenue exists ------------------------------------- */
// Every metric a reader most wants — margin, net return, break-even — needs
// revenue, and no dataset here carries any.
for (const a of ABSENT_METRICS) {
  if ((FARM_ECONOMIC_METRICS as readonly string[]).includes(a.name))
    fail(
      `metric "${a.name}" is in the vocabulary, but nothing here carries the revenue it would need: ${a.why}`,
    );
  if (!a.why?.trim()) fail(`absent metric "${a.name}" gives no reason`);
  if (!a.label?.trim()) fail(`absent metric "${a.name}" has no readable label`);
}

/* -- liveness -------------------------------------------------------------- */
const metricsUsed = new Set(OBS.map((o) => o.metric));
for (const m of FARM_ECONOMIC_METRICS)
  if (!metricsUsed.has(m))
    fail(`metric "${m}" is in the vocabulary but no observation uses it`);
const typesUsed = new Set(OBS.map((o) => o.evidenceType));
const reserved = new Set(RESERVED_EVIDENCE_TYPES.map((r) => r.evidenceType));
for (const t of EVIDENCE_TYPES)
  if (!typesUsed.has(t) && !reserved.has(t))
    fail(
      `evidence type "${t}" is neither produced nor explicitly reserved with a reason`,
    );
for (const r of RESERVED_EVIDENCE_TYPES) {
  if (typesUsed.has(r.evidenceType))
    fail(`evidence type "${r.evidenceType}" is reserved but data produces it`);
  if (!r.why?.trim())
    fail(`reserved evidence type "${r.evidenceType}" gives no reason`);
}
for (const m of SOURCE_TOTAL_METRICS)
  if (!metricsUsed.has(m)) fail(`source-total metric "${m}" is unused`);
const levelsInUse = new Set(OBS.map((o) => o.geographyLevel));
for (const l of GEOGRAPHY_LEVELS)
  if (!levelsInUse.has(l) && !RESERVED_LEVELS.has(l))
    fail(
      `geography level "${l}" is neither used nor explicitly reserved with a reason`,
    );
for (const r of RESERVED_GEOGRAPHY_LEVELS) {
  if (!GEOGRAPHY_LEVELS.includes(r.level as (typeof GEOGRAPHY_LEVELS)[number]))
    fail(`reserved geography level "${r.level}" is not in the vocabulary`);
  if (!r.why?.trim())
    fail(`reserved geography level "${r.level}" gives no reason`);
}
const levelsUsed = new Set(OBS.map((o) => o.geographyLevel));
for (const l of levelsUsed)
  if (!GEOGRAPHY_LEVELS.includes(l))
    fail(`geography level "${l}" not in vocabulary`);

/* -- report ---------------------------------------------------------------- */
console.log('\nFarm economics validation\n');
console.log(`  Observations:             ${OBS.length.toLocaleString('en')}`);
console.log(`  Datasets:                 ${ECONOMICS_CONTRACTS.length}`);
console.log(`  Crops with cost figures:  ${cropsWithCosts().length}`);
console.log(`  Jurisdictions:            ${economicsJurisdictions().length}`);
console.log('\n  By kind of estimate');
for (const t of EVIDENCE_TYPES) {
  const n = byEvidenceType().get(t) ?? 0;
  console.log(
    `    ${t.padEnd(20)}${n ? n.toLocaleString('en').padStart(8) : '  reserved'}`,
  );
}
console.log('\n  By geography level');
{
  const m = new Map<string, number>();
  for (const o of OBS)
    m.set(o.geographyLevel, (m.get(o.geographyLevel) ?? 0) + 1);
  for (const [k, v] of [...m].sort((a, b) => b[1] - a[1]))
    console.log(`    ${k.padEnd(20)}${v.toLocaleString('en').padStart(8)}`);
}
console.log('\n  Currencies, as published');
{
  const m = new Map<string, number>();
  for (const o of OBS)
    m.set(
      o.currency ?? '(index, no currency)',
      (m.get(o.currency ?? '(index, no currency)') ?? 0) + 1,
    );
  for (const [k, v] of [...m].sort((a, b) => b[1] - a[1]))
    console.log(`    ${k.padEnd(20)}${v.toLocaleString('en').padStart(8)}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Farm economics validation passed.\n');
