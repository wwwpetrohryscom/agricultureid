/**
 * Phase 3B — fetch real, official agricultural statistics from the World Bank
 * Open Data API (World Development Indicators) and write IMMUTABLE, checksummed
 * dataset snapshots under data/snapshots/.
 *
 * - No API key required; data is CC BY 4.0.
 * - `lastupdated` from the API is recorded as the snapshot `datasetVersion`.
 * - Snapshots are versioned by filename (`worldbank__<indicator>__<version>.json`)
 *   so historical snapshots are never overwritten silently.
 * - Deterministic: `retrievedAt` is fixed to RETRIEVED (below), not Date.now().
 *
 * Run: node scripts/fetch-worldbank.mjs
 */
import { createHash } from 'node:crypto';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'data', 'snapshots');
const RETRIEVED = '2026-07-12';
const YEAR_RANGE = '2000:2024';

/** Curated indicator set (WDI codes) with unit + methodology metadata. */
const INDICATORS = [
  [
    'AG.LND.AGRI.ZS',
    'Agricultural land (% of land area)',
    '% of land area',
    false,
  ],
  ['AG.LND.AGRI.K2', 'Agricultural land (sq. km)', 'sq. km', false],
  ['AG.LND.ARBL.ZS', 'Arable land (% of land area)', '% of land area', false],
  [
    'AG.LND.ARBL.HA.PC',
    'Arable land (hectares per person)',
    'hectares per person',
    false,
  ],
  ['AG.YLD.CREL.KG', 'Cereal yield (kg per hectare)', 'kg per hectare', false],
  ['AG.PRD.CREL.MT', 'Cereal production (metric tons)', 'metric tons', false],
  [
    'AG.PRD.CROP.XD',
    'Crop production index (2014-2016 = 100)',
    'index (2014–2016 = 100)',
    false,
  ],
  [
    'AG.PRD.FOOD.XD',
    'Food production index (2014-2016 = 100)',
    'index (2014–2016 = 100)',
    false,
  ],
  [
    'AG.PRD.LVSK.XD',
    'Livestock production index (2014-2016 = 100)',
    'index (2014–2016 = 100)',
    false,
  ],
  [
    'NV.AGR.TOTL.ZS',
    'Agriculture, forestry, and fishing, value added (% of GDP)',
    '% of GDP',
    false,
  ],
  [
    'SL.AGR.EMPL.ZS',
    'Employment in agriculture (% of total employment)',
    '% of total employment',
    true,
  ],
  [
    'AG.CON.FERT.ZS',
    'Fertilizer consumption (kg per hectare of arable land)',
    'kg per hectare of arable land',
    false,
  ],
  ['AG.LND.FRST.ZS', 'Forest area (% of land area)', '% of land area', false],
  [
    'AG.LND.IRIG.AG.ZS',
    'Agricultural irrigated land (% of total agricultural land)',
    '% of agricultural land',
    false,
  ],
  [
    'AG.LND.PRCP.MM',
    'Average precipitation in depth (mm per year)',
    'mm per year',
    false,
  ],
  [
    'SP.RUR.TOTL.ZS',
    'Rural population (% of total population)',
    '% of total population',
    false,
  ],
];

async function getJson(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'AgricultureID/3B (data snapshot)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

function sha256(obj) {
  return (
    'sha256:' + createHash('sha256').update(JSON.stringify(obj)).digest('hex')
  );
}

async function fetchCountries() {
  const url = 'https://api.worldbank.org/v2/country?format=json&per_page=400';
  const [meta, rows] = await getJson(url);
  const countries = rows
    .filter((r) => r.region && r.region.value !== 'Aggregates')
    .map((r) => ({
      iso3: r.id,
      iso2: r.iso2Code,
      name: r.name,
      region: r.region?.value ?? null,
      regionCode: r.region?.id ?? null,
      incomeLevel: r.incomeLevel?.value ?? null,
      capitalCity: r.capitalCity || null,
      longitude: r.longitude || null,
      latitude: r.latitude || null,
    }))
    .sort((a, b) => a.iso3.localeCompare(b.iso3));
  const payload = {
    snapshotId: `worldbank-countries-${meta.lastupdated ?? RETRIEVED}`,
    source: 'World Bank Open Data — country metadata',
    sourceUrl: 'https://api.worldbank.org/v2/country',
    datasetVersion: meta.lastupdated ?? RETRIEVED,
    retrievedAt: RETRIEVED,
    license: 'CC BY 4.0',
    rowCount: countries.length,
    transformationVersion: '1',
    limitations:
      'Excludes World Bank aggregate regions; income-level and region are World Bank classifications.',
    checksum: sha256(countries),
    rows: countries,
  };
  writeFileSync(
    join(OUT, `worldbank__countries.json`),
    JSON.stringify(payload, null, 2),
  );
  console.log(
    `countries: ${countries.length} (version ${payload.datasetVersion})`,
  );
  return new Set(countries.map((c) => c.iso3));
}

async function fetchIndicator([code, name, unit, estimate], countrySet) {
  const url = `https://api.worldbank.org/v2/country/all/indicator/${code}?format=json&date=${YEAR_RANGE}&per_page=20000`;
  const [meta, data] = await getJson(url);
  if (!Array.isArray(data)) {
    console.warn(
      `  ${code}: no data array (${JSON.stringify(meta).slice(0, 120)})`,
    );
    return null;
  }
  const rows = data
    .filter((r) => r && r.value != null && countrySet.has(r.countryiso3code))
    .map((r) => ({
      iso3: r.countryiso3code,
      year: Number(r.date),
      value: r.value,
    }))
    .sort((a, b) =>
      a.iso3 === b.iso3 ? a.year - b.year : a.iso3.localeCompare(b.iso3),
    );
  const years = rows.map((r) => r.year);
  const jurisdictions = new Set(rows.map((r) => r.iso3));
  const version = meta.lastupdated ?? RETRIEVED;
  const payload = {
    snapshotId: `worldbank-${code}-${version}`,
    source: 'World Bank Open Data (World Development Indicators)',
    sourceUrl: `https://data.worldbank.org/indicator/${code}`,
    apiQuery: url,
    indicatorId: code,
    indicatorName: name,
    unit,
    estimateFlag: estimate,
    datasetVersion: version,
    retrievedAt: RETRIEVED,
    license: 'CC BY 4.0',
    rowCount: rows.length,
    coveredYears: years.length ? [Math.min(...years), Math.max(...years)] : [],
    jurisdictionCount: jurisdictions.size,
    transformationVersion: '1',
    limitations:
      'World Bank compiles this indicator from FAO and national statistical sources; values are periodically revised and some are modeled estimates. Use the primary dataset for authoritative figures.',
    checksum: sha256(rows),
    rows,
  };
  const file = join(OUT, `worldbank__${code}__${version}.json`);
  if (existsSync(file)) {
    console.log(
      `  ${code}: unchanged (version ${version} already on disk) — not overwritten`,
    );
    return payload;
  }
  writeFileSync(file, JSON.stringify(payload, null, 2));
  console.log(
    `  ${code}: ${rows.length} rows, ${jurisdictions.size} jurisdictions, version ${version}`,
  );
  return payload;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const countrySet = await fetchCountries();
  for (const ind of INDICATORS) {
    try {
      await fetchIndicator(ind, countrySet);
    } catch (e) {
      console.warn(`  ${ind[0]}: FAILED ${e.message}`);
    }
  }
  console.log('done.');
}

main();
