import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Server-only loaders for the immutable input-authorisation snapshots.
 *
 * Read from data/snapshots/ at build time — never bundled into client JS. Fails
 * soft, like the other snapshot loaders: a missing or malformed file yields
 * null and `inputs:validate` reports it, rather than breaking the build.
 */
const SNAP_DIR = join(process.cwd(), 'data', 'snapshots');

export interface EuSubstanceRecord {
  name: string;
  status: string;
  publishedStatus: string;
  validUntil: string | null;
  sourceId: string | null;
}

export interface EphyUse {
  cropTerm: string;
  cropRef: string | null;
  target: string;
  state: string;
}

export interface EphyProduct {
  amm: string;
  name: string;
  holder: string;
  productType: string;
  functions: string[];
  substances: string[];
  range: string;
  status: string;
  publishedStatus: string;
  validFrom: string | null;
  validUntil: string | null;
  uses: EphyUse[];
  /** Withdrawal date precedes first authorisation in the source. See dateIncoherenceRule. */
  dateIncoherent?: boolean;
}

export interface EphySubstance {
  name: string;
  cas: string | null;
  publishedStatus: string;
  variant: string | null;
  status: string;
}

interface BaseSnapshot {
  snapshotId: string;
  source: string;
  sourceUrl: string;
  registryId: string;
  datasetVersion: string;
  retrievedAt: string;
  license: string;
  licenseUrl: string;
  jurisdictionScope: string;
  scopeLevel: string;
  transformationVersion: string;
  statusMapping: Record<string, string>;
  statusRule: string;
  limitations: string[];
  checksum: string;
}

export interface EuPesticideSnapshot extends BaseSnapshot {
  versionNote: string;
  recordCount: number;
  records: EuSubstanceRecord[];
}

export interface EphySnapshot extends BaseSnapshot {
  bulkUrl: string;
  countryCode: string;
  holderRule: string;
  useRule: string;
  doseRule: string;
  compositionRule: string;
  useTruncation: string;
  nameRule: string;
  dateIncoherenceRule: string;
  dateIncoherentCount: number;
  cropMap: Record<string, string>;
  unmappedCropTerms: Record<string, number>;
  substanceStatusMapping: Record<string, string>;
  productCount: number;
  substanceCount: number;
  products: EphyProduct[];
  substances: EphySubstance[];
}

export const EU_PESTICIDES_SNAPSHOT_PREFIX =
  'eu-pesticides__active-substances__';
export const EPHY_SNAPSHOT_PREFIX = 'ephy__products__';

function filesFor(prefix: string): string[] {
  try {
    return readdirSync(SNAP_DIR)
      .filter((f) => f.startsWith(prefix) && f.endsWith('.json'))
      .sort();
  } catch {
    return [];
  }
}

function loadLatest<T extends { snapshotId: string; datasetVersion: string }>(
  prefix: string,
): T | null {
  const loaded: T[] = [];
  for (const f of filesFor(prefix)) {
    try {
      const snap = JSON.parse(readFileSync(join(SNAP_DIR, f), 'utf8')) as T;
      if (snap.snapshotId) loaded.push(snap);
    } catch {
      // malformed file: reported by inputs:validate
    }
  }
  if (!loaded.length) return null;
  return loaded.reduce((a, b) => (b.datasetVersion > a.datasetVersion ? b : a));
}

const EU = loadLatest<EuPesticideSnapshot>(EU_PESTICIDES_SNAPSHOT_PREFIX);
const EPHY = loadLatest<EphySnapshot>(EPHY_SNAPSHOT_PREFIX);

export function euPesticideSnapshot(): EuPesticideSnapshot | null {
  return EU;
}
export function ephySnapshot(): EphySnapshot | null {
  return EPHY;
}
export function inputSnapshotFiles(): string[] {
  return [
    ...filesFor(EU_PESTICIDES_SNAPSHOT_PREFIX),
    ...filesFor(EPHY_SNAPSHOT_PREFIX),
  ];
}
