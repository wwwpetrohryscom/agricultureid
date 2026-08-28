/**
 * Deterministic gate for the climate, drought and water layer. Offline.
 *
 * The failures it exists to prevent are the ones that turn a record into a
 * prediction, or an average into a measurement:
 *
 *   a normal read as what a year was, or as what a year will be
 *   an assessment read as an instrument reading
 *   FAO's own estimate read as a country's official statistic
 *   cumulative drought percentages read as categorical ones, or the reverse
 *   D0 counted as drought
 *   an expired weekly map presented as the current state of a drought
 *   irrigation capacity read as irrigation use
 *   a station's normal read as a figure for the county around it
 *   exposure read as impact
 */
import {
  ABSENT_CLIMATE_CLAIMS,
  CLIMATE_CONTRACTS,
  CLIMATE_CONTRACT_MAP,
  FAOSTAT_FLAG_MEANINGS,
  RESERVED_EVIDENCE_CLASSES,
} from '../lib/climate/contracts';
import {
  BASIS_REPRESENTS_AREA,
  CATEGORY_IS_DROUGHT,
  CLIMATE_EVIDENCE_CLASSES,
  CLIMATE_METRICS,
  CLIMATE_SPATIAL_BASES,
  DEGREE_DAY_BASE,
  DEGREE_DAY_BOUND_TOLERANCE,
  DEGREE_DAY_METHOD,
  DROUGHT_CATEGORIES,
  STATISTIC_FORMATS,
  WATER_METRIC_KIND,
} from '../types/climate-water';
import {
  allClimateObservations,
  byEvidenceClass,
  climateSnapshot,
  countriesWithWaterData,
  currentDroughtAssessment,
  statesWithNormals,
  UNRESOLVED_AREA_NAMES,
} from '../lib/climate/registry';
import { COUNTRY_META } from '../lib/geo/snapshots';
import { SOURCE_MAP } from '../lib/sources/registry';
import { REGISTRIES } from '../data/registries';
import { existsSync } from 'node:fs';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));
const OBS = allClimateObservations();
// The date the corpus was captured. Currency is judged against this, not
// against the clock, so the gate gives the same answer on every run.
const AS_OF = '2026-08-27';

/* -- contracts ------------------------------------------------------------- */
for (const c of CLIMATE_CONTRACTS) {
  if (!existsSync(c.snapshotPath))
    fail(
      `contract "${c.datasetId}": snapshot ${c.snapshotPath} does not exist`,
    );
  if (!REGISTRY_IDS.has(c.registryId))
    fail(`contract "${c.datasetId}": unknown registry "${c.registryId}"`);
  for (const s of c.sourceIds)
    if (!SOURCE_MAP.has(s))
      fail(`contract "${c.datasetId}": unknown source "${s}"`);
  if (!CLIMATE_EVIDENCE_CLASSES.includes(c.evidenceClass))
    fail(`contract "${c.datasetId}": evidence class not in vocabulary`);
  if (!CLIMATE_SPATIAL_BASES.includes(c.spatialBasis))
    fail(`contract "${c.datasetId}": spatial basis not in vocabulary`);
  if (!c.geographyNote?.trim())
    fail(`contract "${c.datasetId}": does not say what its geographies are`);
  if (!c.limitations.length)
    fail(
      `contract "${c.datasetId}": states no limitation, which no dataset here is free of`,
    );
  // An array of empty strings has a length. Checking the count while the
  // content is blank checks the shape of the rule rather than the rule.
  for (const [i, l] of c.limitations.entries())
    if (l.trim().length < 20)
      fail(
        `contract "${c.datasetId}": limitation ${i + 1} says nothing ("${l}")`,
      );
  if (!c.units.length) fail(`contract "${c.datasetId}": declares no unit`);
  for (const m of c.metrics)
    if (!CLIMATE_METRICS.includes(m))
      fail(`contract "${c.datasetId}": metric "${m}" not in vocabulary`);
  for (const [flag, cls] of Object.entries(c.evidenceClassByFlag ?? {}))
    if (!CLIMATE_EVIDENCE_CLASSES.includes(cls))
      fail(
        `contract "${c.datasetId}": flag "${flag}" maps to a class not in the vocabulary`,
      );
}

/* -- observations ---------------------------------------------------------- */
const ids = new Set<string>();
for (const o of OBS) {
  const at = o.id;
  if (ids.has(o.id)) fail(`${at}: duplicate observation id`);
  ids.add(o.id);

  const contract = CLIMATE_CONTRACT_MAP.get(o.sourceDatasetId);
  if (!contract) {
    fail(
      `${at}: dataset "${o.sourceDatasetId}" has no contract, so no rule in this gate applies to it`,
    );
    continue;
  }

  if (!CLIMATE_METRICS.includes(o.metric))
    fail(`${at}: metric not in vocabulary`);
  else if (!contract.metrics.includes(o.metric))
    fail(
      `${at}: "${o.metric}" is not a metric ${contract.datasetId} publishes`,
    );

  /* -- evidence class is the source's, never the record's ------------------ */
  // A dataset that flags its values individually must have a mapping for the
  // flag actually present. Falling back to the contract's default would let an
  // unrecognised flag inherit a class the source never claimed.
  if (contract.evidenceClassByFlag) {
    const expected = o.sourceFlag
      ? contract.evidenceClassByFlag[o.sourceFlag]
      : undefined;
    if (!expected)
      fail(
        `${at}: carries source flag "${o.sourceFlag ?? '(none)'}", which ${contract.datasetId} has no mapping for — so who produced this value is unknown`,
      );
    else if (o.evidenceClass !== expected)
      fail(
        `${at}: flag "${o.sourceFlag}" means "${expected}" and this value says "${o.evidenceClass}"`,
      );
  } else if (o.evidenceClass !== contract.evidenceClass) {
    fail(
      `${at}: evidence class "${o.evidenceClass}" is not what ${contract.datasetId} produces ("${contract.evidenceClass}")`,
    );
  }
  // Nothing in this corpus predicts anything.
  if (o.evidenceClass === 'forecast' || o.evidenceClass === 'projection')
    fail(`${at}: this corpus publishes no forecast and no projection`);

  /* -- a number needs its unit, its period and its place ------------------- */
  if (!Number.isFinite(o.value)) fail(`${at}: value is not a finite number`);
  if (!o.unit?.trim()) fail(`${at}: no unit`);
  else if (!contract.units.includes(o.unit))
    fail(`${at}: unit "${o.unit}" is not one ${contract.datasetId} publishes`);
  if (!o.period?.trim()) fail(`${at}: no period`);
  if (!o.publishedItem?.trim())
    fail(`${at}: no published item, so the value names nothing`);
  if (!o.jurisdictionName?.trim()) fail(`${at}: no jurisdiction name`);

  if (!CLIMATE_SPATIAL_BASES.includes(o.spatialBasis))
    fail(`${at}: spatial basis not in vocabulary`);
  else if (o.spatialBasis !== contract.spatialBasis)
    fail(
      `${at}: basis "${o.spatialBasis}" is not the basis ${contract.datasetId} publishes on`,
    );
  // A station describes itself. Nothing here may present one as an area.
  if (o.spatialBasis === 'station') {
    if (BASIS_REPRESENTS_AREA[o.spatialBasis])
      fail(
        `${at}: a station basis is marked as representing the area around it`,
      );
    if (!o.stationId?.trim()) fail(`${at}: a station value with no station`);
    if (typeof o.latitude !== 'number' || typeof o.longitude !== 'number')
      fail(`${at}: a station value with no coordinates`);
  }

  /* -- normals ------------------------------------------------------------- */
  if (o.evidenceClass === 'climate-normal') {
    // A normal is an average of a period. A single year here would make thirty
    // years of averaging look like one year of measurement.
    if (o.period !== '1991-2020')
      fail(
        `${at}: a normal whose period is "${o.period}" rather than the averaging period`,
      );
    if (o.sourceFlag !== 'S')
      fail(
        `${at}: completeness flag "${o.sourceFlag}" — only NCEI's Standard tier is published, because below it the source fills missing months from surrounding stations`,
      );
    if ((o.yearsUsed ?? 0) < 24)
      fail(
        `${at}: NCEI's Standard tier means at least 24 of the 30 years, and this says ${o.yearsUsed}`,
      );
    if ((o.yearsUsed ?? 0) > 30)
      fail(`${at}: claims ${o.yearsUsed} years from a 30-year period`);
  }

  /* -- drought assessments ------------------------------------------------- */
  if (o.metric === 'droughtAreaShare') {
    if (!o.droughtCategory || !DROUGHT_CATEGORIES.includes(o.droughtCategory))
      fail(`${at}: a drought share with no category`);
    if (o.statisticFormat !== 'categorical')
      fail(
        `${at}: statistic format "${o.statisticFormat}" — only categorical shares are published, and a cumulative share carrying a categorical label would overstate every category`,
      );
    if (o.value < 0 || o.value > 100)
      fail(`${at}: a share of ${o.value} percent`);
    if (!ISO.test(o.validFrom ?? '') || !ISO.test(o.validTo ?? ''))
      fail(`${at}: an assessment with no validity window`);
    else if (o.validTo! < o.validFrom!)
      fail(`${at}: a validity window that ends before it starts`);
    else if (o.period < o.validFrom! || o.period > o.validTo!)
      fail(
        `${at}: the map date ${o.period} is outside the week it is valid for`,
      );
  }

  /* -- provenance ---------------------------------------------------------- */
  if (!o.sourceReferenceIds.length) fail(`${at}: no source`);
  for (const s of o.sourceReferenceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown source "${s}"`);
  if (!ISO.test(o.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);
  if (!o.limitations?.length)
    fail(`${at}: no limitation recorded, and every value here has one`);
}

/* -- categorical shares must sum to a whole state -------------------------- */
// This is the check that tells the two statistic formats apart. Categorical
// shares partition the state and sum to 100; cumulative shares nest inside one
// another and sum to far more. A gate that only checked the LABEL would be
// checking the form while the error lives in the meaning.
{
  const byWeek = new Map<string, number>();
  for (const o of OBS) {
    if (o.metric !== 'droughtAreaShare') continue;
    const k = `${o.stateCode}|${o.period}`;
    byWeek.set(k, (byWeek.get(k) ?? 0) + o.value);
  }
  for (const [k, total] of byWeek)
    if (Math.abs(total - 100) > 0.5)
      fail(
        `${k}: the categories sum to ${total.toFixed(2)} rather than covering the state once. Cumulative shares sum above 100 because each includes the ones below it.`,
      );
  if (byWeek.size === 0) fail('no drought weeks were derived at all');
}

/* -- D0 is not drought ------------------------------------------------------ */
if (CATEGORY_IS_DROUGHT.D0)
  fail(
    'D0 is marked as drought. The Drought Monitor calls it "abnormally dry", a precursor and a recovery category, and counting it inflates every summary it appears in.',
  );
if (CATEGORY_IS_DROUGHT.none) fail('"none" is marked as drought');
for (const c of ['D1', 'D2', 'D3', 'D4'] as const)
  if (!CATEGORY_IS_DROUGHT[c]) fail(`${c} is not marked as drought`);

/* -- nothing expired is current -------------------------------------------- */
// Every state must have exactly one map in force on the capture date, and no
// map whose week has passed may answer as the current one.
for (const state of new Set(
  OBS.filter((o) => o.stateCode && o.metric === 'droughtAreaShare').map(
    (o) => o.stateCode!,
  ),
)) {
  const current = currentDroughtAssessment(state, AS_OF);
  if (!current) {
    fail(`${state}: no drought assessment is in force on ${AS_OF}`);
    continue;
  }
  if (current.validFrom > AS_OF || current.validTo < AS_OF)
    fail(
      `${state}: the assessment returned as current is valid ${current.validFrom}–${current.validTo}, which does not contain ${AS_OF}`,
    );
  const inForce = new Set(
    OBS.filter(
      (o) =>
        o.metric === 'droughtAreaShare' &&
        o.stateCode === state &&
        o.validFrom! <= AS_OF &&
        AS_OF <= o.validTo!,
    ).map((o) => o.period),
  );
  if (inForce.size !== 1)
    fail(`${state}: ${inForce.size} maps claim to be in force on ${AS_OF}`);
}
// And an expired week must not answer at all.
if (currentDroughtAssessment('NE', '2019-01-01'))
  fail('a date before any ingested map returned a current assessment');

/* -- capacity is not use ---------------------------------------------------- */
{
  const kinds = new Set(Object.values(WATER_METRIC_KIND));
  if (!kinds.has('capacity') || !kinds.has('use'))
    fail('the water vocabulary no longer distinguishes capacity from use');
  for (const [metric, kind] of Object.entries(WATER_METRIC_KIND)) {
    if (!CLIMATE_METRICS.includes(metric as (typeof CLIMATE_METRICS)[number]))
      fail(`water kind names "${metric}", which is not a metric`);
    // The source's own words decide. "equipped for" is capacity; "actually
    // irrigated" is use, and a metric whose name and kind disagree is a
    // relabelling of the source.
    const sample = OBS.find((o) => o.metric === metric);
    if (!sample) continue;
    const saysActual = /actually irrigated/i.test(sample.publishedItem);
    const saysEquipped = /equipped for irrigation/i.test(sample.publishedItem);
    if (kind === 'use' && !saysActual)
      fail(
        `${metric}: recorded as use, but the source calls it "${sample.publishedItem}"`,
      );
    if (kind === 'capacity' && !saysEquipped)
      fail(
        `${metric}: recorded as capacity, but the source calls it "${sample.publishedItem}"`,
      );
  }
}

/* -- a degree-day total cannot be smaller than the temperature surplus ------ */
// GDD is the sum of max(0, Tᵢ − base). Dropping the max() only lowers it, so
// the annual total is at least 365 × (mean temperature − base). This holds in
// every climate, and it is what catches a degree-day column that has been
// inverted or ingested from the wrong element — the failure that put a zero at
// the warmest station in the country while every value stayed plausible.
{
  for (const m of Object.keys(DEGREE_DAY_BASE)) {
    if (!DEGREE_DAY_METHOD[m])
      fail(`degree-day metric "${m}" does not say how it was accumulated`);
    if (!CLIMATE_METRICS.includes(m as (typeof CLIMATE_METRICS)[number]))
      fail(`degree-day base names "${m}", which is not a metric`);
  }
  const byStation = new Map<
    string,
    { temp?: number; gdd?: Record<string, number> }
  >();
  for (const o of OBS) {
    if (!o.stationId) continue;
    const e = byStation.get(o.stationId) ?? {};
    if (o.metric === 'annualMeanTemperature') e.temp = o.value;
    if (DEGREE_DAY_BASE[o.metric] !== undefined)
      e.gdd = { ...(e.gdd ?? {}), [o.metric]: o.value };
    byStation.set(o.stationId, e);
  }
  const broken: string[] = [];
  for (const [id, v] of byStation) {
    if (v.temp === undefined || !v.gdd) continue;
    for (const [metric, value] of Object.entries(v.gdd)) {
      const bound = 365 * Math.max(0, v.temp - DEGREE_DAY_BASE[metric]!);
      if (value < bound * (1 - DEGREE_DAY_BOUND_TOLERANCE))
        broken.push(
          `${id}: ${metric} is ${value} where the station's mean of ${v.temp}°F puts the floor at ${bound.toFixed(0)}`,
        );
    }
  }
  if (broken.length)
    fail(
      `${broken.length} station(s) report fewer degree days than their own mean temperature allows, which happens when a degree-day column is inverted or read from the wrong element — e.g. ${broken[0]}`,
    );
}

/* -- the payload agrees with the contract about itself ---------------------- */
{
  const d = climateSnapshot('usdm-state-drought-area');
  const rows = d.rows as { statisticFormat: string }[];
  const wrong = rows.filter((r) => r.statisticFormat !== 'categorical');
  if (wrong.length)
    fail(`usdm: ${wrong.length} payload row(s) are not categorical`);
  const n = climateSnapshot('ncei-us-climate-normals');
  const nrows = n.rows as { completenessFlag: string }[];
  const notStandard = nrows.filter((r) => r.completenessFlag !== 'S');
  if (notStandard.length)
    fail(
      `ncei: ${notStandard.length} payload row(s) are below Standard, so the contract's claim about this dataset is not true of it`,
    );
}

/* -- a flag and the words for it must agree -------------------------------- */
// The evidence class is taken from the flag, so a flag carrying the wrong words
// would produce a value labelled "official" beside a sentence saying FAO
// imputed it. And the build recorded how many of each flag it saw: if the rows
// no longer agree with that count, a flag has been changed since.
{
  const snap = climateSnapshot('faostat-land-use-irrigation');
  const rows = snap.rows as {
    flag: string;
    flagMeaning: string;
    areaName: string;
  }[];
  const seen = new Map<string, number>();
  for (const r of rows) {
    const expected = FAOSTAT_FLAG_MEANINGS[r.flag];
    if (!expected)
      fail(`faostat: flag "${r.flag}" is not one the source publishes`);
    else if (r.flagMeaning !== expected)
      fail(
        `faostat ${r.areaName}: flag "${r.flag}" means "${expected}" and this row says "${r.flagMeaning}"`,
      );
    seen.set(r.flag, (seen.get(r.flag) ?? 0) + 1);
  }
  const recorded = (snap.flagCounts ?? {}) as Record<string, number>;
  if (Object.keys(recorded).length === 0)
    fail(
      'faostat: the snapshot records no flag counts, so a changed flag would leave no trace',
    );
  for (const [flag, n] of Object.entries(recorded))
    if ((seen.get(flag) ?? 0) !== n)
      fail(
        `faostat: the build recorded ${n} row(s) flagged "${flag}" and the rows now hold ${seen.get(flag) ?? 0}, so a flag has been changed since the capture`,
      );
  for (const flag of seen.keys())
    if (!(flag in recorded))
      fail(
        `faostat: flag "${flag}" appears in the rows but not in the recorded counts`,
      );
}

/* -- an aggregate must not sit among the countries -------------------------- */
// FAOSTAT publishes groupings in the same column as countries, and two of them
// sit BELOW the area-code threshold that separates the rest. A threshold alone
// does not catch those, which is why they are excluded by name and why the
// exclusion is checked here rather than assumed.
{
  const snap = climateSnapshot('faostat-land-use-irrigation');
  const excluded = (snap.excludedAreas ?? []) as {
    areaCode: number;
    areaName: string;
    m49: string;
    why: string;
    arithmeticEvidence: string;
  }[];
  if (excluded.length === 0)
    fail(
      'the water snapshot records no excluded aggregate, and FAOSTAT publishes two below the threshold',
    );
  const present = new Set(
    (snap.rows as { areaCode: number }[]).map((r) => r.areaCode),
  );
  for (const e of excluded) {
    if (present.has(e.areaCode))
      fail(
        `area ${e.areaCode} "${e.areaName}" is excluded as an aggregate but is in the rows`,
      );
    if (!e.why?.trim()) fail(`excluded area "${e.areaName}" gives no reason`);
    if (!e.arithmeticEvidence?.trim())
      fail(
        `excluded area "${e.areaName}" gives no evidence that it is an aggregate`,
      );
  }
  // And nothing at or above the old threshold either.
  const overThreshold = [...present].filter((c) => c >= 5000);
  if (overThreshold.length)
    fail(
      `${overThreshold.length} regional aggregate(s) at area code 5000 or above are still in the rows`,
    );
}

/* -- an unresolved country name is a gap, not a guess ----------------------- */
{
  const names = new Set(COUNTRY_META.map((c) => c.name.toLowerCase()));
  const unresolved = [
    ...new Set(
      OBS.filter((o) => o.spatialBasis === 'country' && !o.countryCode).map(
        (o) => o.jurisdictionName,
      ),
    ),
  ];
  // If a published name matches a corpus country exactly and still did not
  // resolve, the resolver is broken rather than the world being complicated.
  for (const n of unresolved)
    if (names.has(n.toLowerCase()))
      fail(
        `"${n}" is a country this corpus keys, but its values carry no country code`,
      );
  for (const u of UNRESOLVED_AREA_NAMES) {
    if (!u.why?.trim()) fail(`unresolved name "${u.name}" gives no reason`);
    if (!unresolved.includes(u.name))
      fail(
        `"${u.name}" is documented as deliberately unresolved but nothing carries that name`,
      );
  }
  // A former state must never be silently folded into a successor.
  for (const former of ['Serbia and Montenegro', 'Sudan (former)'])
    if (OBS.some((o) => o.jurisdictionName === former && o.countryCode))
      fail(
        `"${former}" no longer exists and has been given a successor's country code`,
      );
}

/* -- exposure is not impact -------------------------------------------------- */
for (const a of ABSENT_CLIMATE_CLAIMS) {
  if ((CLIMATE_METRICS as readonly string[]).includes(a.name))
    fail(`"${a.name}" is in the metric vocabulary, and it cannot be: ${a.why}`);
  if (!a.why?.trim()) fail(`absent claim "${a.name}" gives no reason`);
  if (!a.label?.trim()) fail(`absent claim "${a.name}" has no readable label`);
}

/* -- liveness ---------------------------------------------------------------- */
const metricsUsed = new Set(OBS.map((o) => o.metric));
for (const m of CLIMATE_METRICS)
  if (!metricsUsed.has(m))
    fail(`metric "${m}" is in the vocabulary but no observation uses it`);
const classesUsed = new Set(OBS.map((o) => o.evidenceClass));
const reserved = new Set(RESERVED_EVIDENCE_CLASSES.map((r) => r.evidenceClass));
for (const c of CLIMATE_EVIDENCE_CLASSES)
  if (!classesUsed.has(c) && !reserved.has(c))
    fail(
      `evidence class "${c}" is neither produced nor explicitly reserved with a reason`,
    );
for (const r of RESERVED_EVIDENCE_CLASSES) {
  if (classesUsed.has(r.evidenceClass))
    fail(
      `evidence class "${r.evidenceClass}" is reserved but data produces it`,
    );
  if (!r.why?.trim())
    fail(`reserved evidence class "${r.evidenceClass}" gives no reason`);
}
const basesUsed = new Set(OBS.map((o) => o.spatialBasis));
for (const b of CLIMATE_SPATIAL_BASES)
  if (!basesUsed.has(b))
    fail(`spatial basis "${b}" is in the vocabulary but unused`);
for (const f of STATISTIC_FORMATS)
  if (!['categorical', 'cumulative'].includes(f))
    fail(`statistic format "${f}" is not one this corpus knows`);
for (const c of DROUGHT_CATEGORIES)
  if (!OBS.some((o) => o.droughtCategory === c))
    fail(
      `drought category "${c}" is in the vocabulary but no assessment uses it`,
    );

/* -- report ------------------------------------------------------------------ */
console.log('\nClimate, drought and water validation\n');
console.log(`  Values:                   ${OBS.length.toLocaleString('en')}`);
console.log(`  Datasets:                 ${CLIMATE_CONTRACTS.length}`);
console.log(`  States with normals:      ${statesWithNormals().length}`);
console.log(`  Countries with water:     ${countriesWithWaterData().length}`);
console.log('\n  By kind of statement');
for (const c of CLIMATE_EVIDENCE_CLASSES) {
  const n = byEvidenceClass().get(c) ?? 0;
  console.log(
    `    ${c.padEnd(20)}${n ? n.toLocaleString('en').padStart(8) : '  reserved'}`,
  );
}
console.log('\n  By what the value is about');
{
  const m = new Map<string, number>();
  for (const o of OBS) m.set(o.spatialBasis, (m.get(o.spatialBasis) ?? 0) + 1);
  for (const [k, v] of [...m].sort((a, b) => b[1] - a[1]))
    console.log(`    ${k.padEnd(20)}${v.toLocaleString('en').padStart(8)}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Climate, drought and water validation passed.\n');
