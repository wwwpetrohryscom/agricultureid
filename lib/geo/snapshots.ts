import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import type {
  AgriculturalStatistic,
  CountryMeta,
  DatasetSnapshot,
  SnapshotRow,
} from '@/types/geo';

/**
 * Server-only loader for immutable World Bank dataset snapshots. Snapshots are
 * read from data/snapshots/ at build time (static generation) — never bundled
 * into client JS. A changed dataset version is a new file, so the latest
 * version per indicator is selected deterministically.
 */
const SNAP_DIR = join(process.cwd(), 'data', 'snapshots');

function loadAll(): DatasetSnapshot[] {
  let files: string[] = [];
  try {
    files = readdirSync(SNAP_DIR).filter(
      (f) =>
        f.startsWith('worldbank__') &&
        f.endsWith('.json') &&
        f.includes('__', 11),
    );
  } catch {
    return [];
  }
  const snaps: DatasetSnapshot[] = [];
  for (const f of files) {
    if (f === 'worldbank__countries.json') continue;
    try {
      const snap = JSON.parse(
        readFileSync(join(SNAP_DIR, f), 'utf8'),
      ) as DatasetSnapshot;
      if (snap.indicatorId) snaps.push(snap);
    } catch {
      // ignore malformed file; validator reports it separately
    }
  }
  return snaps;
}

const ALL_SNAPSHOTS = loadAll();

/** Latest-version snapshot per indicator id. */
const LATEST_BY_INDICATOR: ReadonlyMap<string, DatasetSnapshot> = (() => {
  const m = new Map<string, DatasetSnapshot>();
  for (const s of ALL_SNAPSHOTS) {
    const cur = m.get(s.indicatorId);
    if (!cur || s.datasetVersion > cur.datasetVersion) m.set(s.indicatorId, s);
  }
  return m;
})();

export function allSnapshots(): DatasetSnapshot[] {
  return [...LATEST_BY_INDICATOR.values()].sort((a, b) =>
    a.indicatorId.localeCompare(b.indicatorId),
  );
}

export function getSnapshot(indicatorId: string): DatasetSnapshot | undefined {
  return LATEST_BY_INDICATOR.get(indicatorId);
}

/** Country metadata snapshot. */
export const COUNTRY_META: CountryMeta[] = (() => {
  try {
    const snap = JSON.parse(
      readFileSync(join(SNAP_DIR, 'worldbank__countries.json'), 'utf8'),
    ) as { rows: CountryMeta[] };
    // Normalize region strings (the source has occasional trailing whitespace).
    return (snap.rows ?? []).map((r) => ({
      ...r,
      region: r.region ? r.region.trim() : r.region,
    }));
  } catch {
    return [];
  }
})();

const META_BY_ISO3 = new Map(COUNTRY_META.map((c) => [c.iso3, c]));

export function countryMeta(iso3: string): CountryMeta | undefined {
  return META_BY_ISO3.get(iso3);
}

/** Rows for one country from an indicator snapshot, ascending by year. */
export function timeSeries(indicatorId: string, iso3: string): SnapshotRow[] {
  const snap = getSnapshot(indicatorId);
  if (!snap) return [];
  return snap.rows
    .filter((r) => r.iso3 === iso3)
    .sort((a, b) => a.year - b.year);
}

/** The most recent observation for a country/indicator, with full provenance. */
export function latestStatistic(
  indicatorId: string,
  iso3: string,
): AgriculturalStatistic | undefined {
  const snap = getSnapshot(indicatorId);
  const ind = INDICATOR_BY_ID.get(indicatorId);
  if (!snap || !ind) return undefined;
  const rows = snap.rows.filter((r) => r.iso3 === iso3);
  if (!rows.length) return undefined;
  const latest = rows.reduce((a, b) => (b.year > a.year ? b : a));
  return {
    indicatorId,
    jurisdiction: iso3,
    year: latest.year,
    value: latest.value,
    unit: snap.unit,
    sourceDataset: snap.source,
    sourceVersion: snap.datasetVersion,
    retrievedAt: snap.retrievedAt,
    revisionStatus: ind.estimateFlag ? 'estimate' : 'observed',
    estimateFlag: ind.estimateFlag,
    sourceId: ind.sourceId,
    methodology: ind.methodology,
    limitations: snap.limitations,
  };
}

/** Recompute the checksum over a snapshot's rows and compare (integrity gate). */
export function checksumValid(snap: DatasetSnapshot): boolean {
  const recomputed =
    'sha256:' +
    createHash('sha256').update(JSON.stringify(snap.rows)).digest('hex');
  return recomputed === snap.checksum;
}

/** Countries (iso3) that have at least one observation for the indicator. */
export function jurisdictionsFor(indicatorId: string): Set<string> {
  const snap = getSnapshot(indicatorId);
  return new Set(snap ? snap.rows.map((r) => r.iso3) : []);
}
