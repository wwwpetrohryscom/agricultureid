/**
 * Rebuild the immutable FAOSTAT trade snapshot (Phase 5D).
 *
 *   node scripts/fetch-faostat-trade.mjs [--keep]
 *
 * This is a MANUAL refresh script, deliberately not wired into CI or the build:
 * it downloads ~400 MB and streams an ~8.5 GB CSV. Snapshots are immutable, so
 * a new FAOSTAT release produces a NEW dated file; existing snapshots are never
 * overwritten in place (see docs/dataset-snapshots.md).
 *
 * ## What it does, and the three things it must get right
 *
 *  1. **Aggregates are not countries.** FAOSTAT ships `World` (5000),
 *     `Western Europe` (5404) and friends AS REPORTERS AND PARTNERS. Any code
 *     >= 5000 is dropped; world totals are recomputed by summing real
 *     reporters. Skip this and "World" ranks as the top exporter of everything.
 *  2. **Absent is not zero.** A country missing from the reference year has not
 *     traded nothing — it has reported nothing. `notableNonReporters` records
 *     reporters that ranked top-10 in a prior year and are absent from the
 *     reference year (e.g. the Russian Federation for wheat in 2022).
 *  3. **Only the frozen concordance is mapped.** Commodities whose only
 *     candidate FAOSTAT item bundles them with others are excluded by design —
 *     see data/trade/faostat-concordance.ts.
 *
 * Source: FAOSTAT Detailed Trade Matrix, CC BY 4.0. Attribution is required and
 * is rendered wherever these figures appear.
 */
import {
  createReadStream,
  createWriteStream,
  existsSync,
  readFileSync,
  writeFileSync,
  rmSync,
  mkdtempSync,
} from 'node:fs';
import { createInterface } from 'node:readline';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BULK_URL =
  'https://bulks-faostat.fao.org/production/Trade_DetailedTradeMatrix_E_All_Data_(Normalized).zip';
const CSV_NAME = 'Trade_DetailedTradeMatrix_E_All_Data_(Normalized).csv';

const REFERENCE_YEAR = '2022';
const YEARS = new Set(['2020', '2021', REFERENCE_YEAR, '2023']);
const TOP_N = 12;

/** Element codes carrying tonnage and USD. The `An`/`No` variants are head
 *  counts for live animals and are irrelevant to these commodities. */
const ELEMENTS = {
  5910: ['export', 'quantity'],
  5922: ['export', 'value'],
  5610: ['import', 'quantity'],
  5622: ['import', 'value'],
};

const keep = process.argv.includes('--keep');
const work = mkdtempSync(join(tmpdir(), 'faostat-'));

/** Split a FAOSTAT CSV line; fields are quoted and may contain commas. */
function cells(line) {
  const out = [];
  let cur = '';
  let inQ = false;
  for (const ch of line) {
    if (ch === '"') inQ = !inQ;
    else if (ch === ',' && !inQ) {
      out.push(cur);
      cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

function readLookup(file, keyIdx, cols) {
  const map = {};
  for (const line of readFileSync(join(work, file), 'utf8')
    .split('\n')
    .slice(1)) {
    if (!line.trim()) continue;
    const c = cells(line);
    if (c.length <= Math.max(keyIdx, ...Object.values(cols))) continue;
    map[c[keyIdx]] = Object.fromEntries(
      Object.entries(cols).map(([k, i]) => [k, c[i].replace(/'/g, '').trim()]),
    );
  }
  return map;
}

/** The frozen concordance is the single source of truth for what is mapped. */
function concordance() {
  const src = readFileSync(
    join(ROOT, 'data/trade/faostat-concordance.ts'),
    'utf8',
  );
  const body = src.slice(src.indexOf('FAOSTAT_TRADE_CONCORDANCE'));
  const out = new Map();
  for (const m of body.matchAll(
    /commoditySlug:\s*'([a-z0-9-]+)',\s*\n\s*faostatItemCode:\s*'(\d+)'/g,
  ))
    out.set(m[2], m[1]);
  return out;
}

async function main() {
  const zip = join(work, 'matrix.zip');
  console.log(`→ downloading ${BULK_URL}`);
  const res = await fetch(BULK_URL);
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(zip));
  console.log(`  ${(readFileSync(zip).length / 1048576).toFixed(1)} MB`);

  console.log('→ extracting');
  execFileSync('unzip', ['-o', '-q', zip, '-d', work]);

  const items = concordance(); // itemCode -> commoditySlug
  const itemMeta = readLookup('Trade_DetailedTradeMatrix_E_ItemCodes.csv', 0, {
    name: 2,
    cpc: 1,
  });
  const reporters = readLookup(
    'Trade_DetailedTradeMatrix_E_ReporterCountries.csv',
    0,
    { name: 2, m49: 1 },
  );
  console.log(`  concordance: ${items.size} mapped items`);

  console.log(`→ streaming ${CSV_NAME}`);
  const rows = new Map();
  const world = new Map();
  let seen = 0;
  let kept = 0;
  const rl = createInterface({
    input: createReadStream(join(work, CSV_NAME), { highWaterMark: 1 << 22 }),
    crlfDelay: Infinity,
  });
  let header = true;
  for await (const line of rl) {
    if (header) {
      header = false;
      continue;
    }
    seen++;
    if (line.length < 40) continue;
    const c = cells(line);
    if (c.length < 16) continue;
    if (!items.has(c[6])) continue;
    if (!YEARS.has(c[12])) continue;
    const el = ELEMENTS[c[9]];
    if (!el) continue;
    // Aggregates (>= 5000) are not countries.
    if (!(Number(c[0]) < 5000) || !(Number(c[3]) < 5000)) continue;
    const value = Number(c[14]);
    if (!Number.isFinite(value)) continue;
    kept++;
    const [flow, measure] = el;
    const k = `${c[6]}|${c[0]}|${c[12]}|${flow}|${measure}`;
    let r = rows.get(k);
    if (!r) rows.set(k, (r = { v: 0, flags: {} }));
    r.v += value;
    r.flags[c[15]] = (r.flags[c[15]] ?? 0) + 1;
    const wk = `${c[6]}|${c[12]}|${flow}|${measure}`;
    world.set(wk, (world.get(wk) ?? 0) + value);
    if (seen % 20_000_000 === 0)
      console.log(`  ...${(seen / 1e6).toFixed(0)}M scanned, ${kept} kept`);
  }
  console.log(`  scanned ${seen}, kept ${kept}`);

  const series = (item, year, flow, measure) => {
    const m = new Map();
    for (const [k, v] of rows) {
      const [i, r, y, f, ms] = k.split('|');
      if (i === item && y === year && f === flow && ms === measure) m.set(r, v);
    }
    return m;
  };

  const commodities = [];
  let observationCount = 0;
  for (const [item, slug] of [...items].sort((a, b) =>
    a[1].localeCompare(b[1]),
  )) {
    const meta = itemMeta[item] ?? { name: 'unknown', cpc: '' };
    const side = (flow) => {
      const qty = series(item, REFERENCE_YEAR, flow, 'quantity');
      const val = series(item, REFERENCE_YEAR, flow, 'value');
      observationCount += qty.size;
      const list = [...qty].map(([r, v]) => ({
        reporter: reporters[r]?.name ?? r,
        m49: reporters[r]?.m49 ?? null,
        quantityT: Math.round(v.v * 100) / 100,
        valueKUsd: val.has(r) ? Math.round(val.get(r).v * 100) / 100 : null,
        flags: v.flags,
      }));
      list.sort((a, b) => b.quantityT - a.quantityT);
      return { list, count: qty.size };
    };
    const exp = side('export');
    const imp = side('import');
    if (!exp.list.length && !imp.list.length) {
      console.log(`  !! no trade rows for ${slug} (item ${item}) — skipped`);
      continue;
    }

    const present = new Set(exp.list.map((e) => e.reporter));
    const notableNonReporters = [];
    for (const prior of ['2021', '2020'])
      [...series(item, prior, 'export', 'quantity')]
        .map(([r, v]) => ({ reporter: reporters[r]?.name ?? r, q: v.v }))
        .sort((a, b) => b.q - a.q)
        .slice(0, 10)
        .forEach((p, idx) => {
          if (present.has(p.reporter)) return;
          if (notableNonReporters.some((n) => n.reporter === p.reporter))
            return;
          notableNonReporters.push({
            reporter: p.reporter,
            lastReportedYear: Number(prior),
            lastReportedExportQuantityT: Math.round(p.q * 100) / 100,
            rankInLastReportedYear: idx + 1,
          });
        });

    const w = (flow, measure) => {
      const v = world.get(`${item}|${REFERENCE_YEAR}|${flow}|${measure}`);
      return v === undefined ? null : Math.round(v * 100) / 100;
    };
    const we = w('export', 'quantity');
    const wi = w('import', 'quantity');
    commodities.push({
      commoditySlug: slug,
      faostatItemCode: item,
      faostatItemName: meta.name,
      cpcCode: meta.cpc,
      referenceYear: Number(REFERENCE_YEAR),
      exportReporterCount: exp.count,
      importReporterCount: imp.count,
      topExporters: exp.list.slice(0, TOP_N),
      topImporters: imp.list.slice(0, TOP_N),
      world: {
        exportQuantityT: we,
        importQuantityT: wi,
        exportValueKUsd: w('export', 'value'),
        importValueKUsd: w('import', 'value'),
      },
      mirrorGapPct: we && wi ? Math.round(((wi - we) / we) * 1000) / 10 : null,
      notableNonReporters,
    });
  }

  const version = process.env.FAOSTAT_RELEASE ?? '2025-12-18';
  const snapshot = {
    snapshotId: `faostat-trade-matrix-${version}`,
    source: `FAOSTAT — Detailed Trade Matrix (${CSV_NAME.replace('.csv', '')})`,
    sourceUrl: 'https://www.fao.org/faostat/en/#data/TM',
    bulkUrl: BULK_URL,
    datasetVersion: version,
    retrievedAt: new Date().toISOString().slice(0, 10),
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    attribution:
      'FAO. FAOSTAT Detailed Trade Matrix. Licensed under CC BY 4.0.',
    referenceYear: Number(REFERENCE_YEAR),
    coveredYears: [2020, 2023],
    transformationVersion: '1',
    units: { quantity: 't', value: '1000 USD' },
    elementCodes: {
      5910: 'Export quantity (t)',
      5922: 'Export value (1000 USD)',
      5610: 'Import quantity (t)',
      5622: 'Import value (1000 USD)',
    },
    flagMeanings: {
      A: 'Official figure',
      E: 'Estimated value',
      I: 'Value imputed by a receiving agency',
      X: 'Figure from external organization',
    },
    aggregateRule:
      'Reporter and partner codes >= 5000 are FAOSTAT aggregates (World, Western Europe, …) and are EXCLUDED. World totals here are recomputed by summing real reporters, not read from FAOSTAT’s own "World" row.',
    transformation:
      'Bilateral partner-level rows are summed over partners to a reporter total per item-year-flow. No interpolation, gap-filling, or estimation is applied; missing reporter-years are simply absent.',
    commodityCount: commodities.length,
    observationCount,
    commodities,
    limitations: [
      'Reported trade describes what reporting countries declared, not what physically moved.',
      'Reporter and partner figures for the same flow routinely disagree; the mirrorGapPct field records the size of that disagreement at world level and is a property of the data, not an error in it.',
      'Re-exports can double-count a consignment along its route, so world totals exceed the quantity originally produced and shipped.',
      'A country absent from a reference year is not a country with zero trade — see notableNonReporters. The Russian Federation, for example, reported wheat exports in 2020–2021 but not 2022.',
      'FAOSTAT items may aggregate several commodities (e.g. "Grapes" covers both table and wine grapes); commodities whose only matching item is such an aggregate are deliberately not mapped.',
      'A FAOSTAT item code present in the production domain need not exist in the trade domain — seed cotton (item 328) has no trade item because it is ginned at origin.',
      'Values are nominal US dollars as reported, not deflated, and are not comparable across years without adjustment.',
      'Historical values are revised by FAO; this snapshot is one dated version and is never overwritten in place.',
    ],
  };

  const out = join(
    ROOT,
    `data/snapshots/faostat__trade-matrix__${version}.json`,
  );
  if (existsSync(out))
    console.log(
      `  !! ${out} exists — snapshots are immutable; remove it deliberately to rebuild`,
    );
  // The checksum covers the whole snapshot except the checksum itself, so a
  // reader can recompute it. `checksumBasis` documents that and is part of the
  // basis it describes.
  snapshot.checksumBasis =
    'sha256 of this file\'s JSON with the "checksum" key removed, serialised with JSON.stringify(value, null, 2). Verify with tradeChecksumValid() in lib/trade/snapshot.ts.';
  snapshot.checksum = createHash('sha256')
    .update(JSON.stringify(snapshot, null, 2))
    .digest('hex');
  writeFileSync(out, JSON.stringify(snapshot, null, 2) + '\n');
  console.log(
    `✓ ${out}\n  ${commodities.length} commodities, ${observationCount} reporter-observations`,
  );
  const nonRep = commodities.filter((c) => c.notableNonReporters.length).length;
  console.log(`  ${nonRep} commodities disclose a notable non-reporter`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => {
    if (!keep) rmSync(work, { recursive: true, force: true });
    else console.log(`(kept working dir: ${work})`);
  });
