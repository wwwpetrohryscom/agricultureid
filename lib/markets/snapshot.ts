import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type {
  MarketMetric,
  ObservationStatus,
  PeriodBasis,
  PeriodFrequency,
} from '@/types/market';

/**
 * Server-only loader for the immutable market snapshots.
 *
 * Read from data/snapshots/ at build time — never bundled into client JS. A
 * changed dataset release is a NEW file, so the latest version is selected
 * deterministically and prior releases are never overwritten. Mirrors
 * lib/trade/snapshot.ts, including its fail-soft contract: a missing or
 * malformed file yields null rather than crashing the build, and the validator
 * reports it separately.
 *
 * Snapshots are stored SERIES-shaped rather than row-shaped. That is not only a
 * size decision: a series is the unit in which this data means something, and
 * storing it that way makes the depth rule ("ten of fifteen years, not all
 * zero") a property of the file rather than of whoever queries it.
 */
const SNAP_DIR = join(process.cwd(), 'data', 'snapshots');

export interface MarketSnapshotSeries {
  iso3: string;
  commoditySlug: string;
  metric: string;
  unit: string;
  /** Present only on monetary series. Never converted. */
  currency?: string | null;
  currencyBasis?: string | null;
  years: number[];
  values: number[];
  /** One legend character per year, parallel to `years`. */
  statuses: string;
}

export interface MarketSnapshot {
  snapshotId: string;
  source: string;
  sourceUrl: string;
  bulkUrl?: string;
  datasetVersion: string;
  retrievedAt: string;
  license: string;
  licenseUrl: string;
  attribution: string;
  transformationVersion: string;
  periodBasis: PeriodBasis;
  periodFrequency: PeriodFrequency;
  coveredYears: [number, number];
  metrics: Record<string, string>;
  flagMeanings?: Record<string, string>;
  statusLegend: Record<string, ObservationStatus>;
  statusRule: string;
  withheldRule?: string;
  priceBasisRule?: string;
  currencyRule?: string;
  excludedElementRule?: string;
  marketRule?: string;
  unitRule?: string;
  valueRule?: string;
  aggregateRule?: string;
  geographyRule: string;
  commodityRule: string;
  metricRule?: string;
  seriesRule: string;
  limitations: string[];
  seriesCount: number;
  observationCount: number;
  series: MarketSnapshotSeries[];
  checksumBasis: string;
  checksum: string;
}

/** Registry ids of the market datasets, used to link a figure to its dataset. */
export const FAOSTAT_PRODUCTION_DATASET_ID = 'faostat-production';
export const USDA_PSD_DATASET_ID = 'usda-psd-supply-use';
export const FAOSTAT_PRICES_DATASET_ID = 'faostat-producer-prices';
export const FAOSTAT_TRADE_CL_DATASET_ID = 'faostat-trade-cl';

const PREFIXES: Record<string, string> = {
  [FAOSTAT_PRODUCTION_DATASET_ID]: 'faostat__production__',
  [USDA_PSD_DATASET_ID]: 'usda-psd__supply-use__',
  [FAOSTAT_PRICES_DATASET_ID]: 'faostat__producer-prices__',
  [FAOSTAT_TRADE_CL_DATASET_ID]: 'faostat__trade-cl__',
};

function snapshotFilesFor(prefix: string): string[] {
  try {
    return readdirSync(SNAP_DIR)
      .filter((f) => f.startsWith(prefix) && f.endsWith('.json'))
      .sort();
  } catch {
    return [];
  }
}

function loadLatest(prefix: string): MarketSnapshot | null {
  const snaps: MarketSnapshot[] = [];
  for (const f of snapshotFilesFor(prefix)) {
    try {
      const snap = JSON.parse(
        readFileSync(join(SNAP_DIR, f), 'utf8'),
      ) as MarketSnapshot;
      if (snap.snapshotId && Array.isArray(snap.series)) snaps.push(snap);
    } catch {
      // malformed file: ignored here, reported by markets:validate
    }
  }
  if (!snaps.length) return null;
  return snaps.reduce((a, b) => (b.datasetVersion > a.datasetVersion ? b : a));
}

const LOADED: ReadonlyMap<string, MarketSnapshot> = new Map(
  Object.entries(PREFIXES)
    .map(([id, prefix]) => [id, loadLatest(prefix)] as const)
    .filter((entry): entry is readonly [string, MarketSnapshot] =>
      Boolean(entry[1]),
    ),
);

/** Every loaded market snapshot, keyed by dataset id. */
export function marketSnapshots(): ReadonlyMap<string, MarketSnapshot> {
  return LOADED;
}

export function marketSnapshot(datasetId: string): MarketSnapshot | null {
  return LOADED.get(datasetId) ?? null;
}

/** All snapshot filenames for a dataset, across releases. */
export function marketSnapshotFiles(datasetId: string): string[] {
  const prefix = PREFIXES[datasetId];
  return prefix ? snapshotFilesFor(prefix) : [];
}

/** Metrics a snapshot publishes, as the metric vocabulary types them. */
export function snapshotMetrics(snap: MarketSnapshot): MarketMetric[] {
  return Object.keys(snap.metrics) as MarketMetric[];
}
