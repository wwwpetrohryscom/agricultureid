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
  /** Every authorisation scope this snapshot produces. A register may hold more than one. */
  scopeLevels: string[];
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

export interface PmraProduct {
  number: string;
  name: string;
  holder: string | null;
  functions: string[];
  substances: string[];
  status: string;
  publishedStatus: string;
  currency: string | null;
  marketingType: string | null;
  validFrom: string | null;
  validUntil: string | null;
  useSites: string[];
  targets: string[];
  contradiction?: boolean | null;
}

export interface ApvmaProduct {
  number: string;
  name: string;
  holder: string | null;
  functions: string[];
  formulation: string | null;
  status: string;
  publishedStatus: string;
  validFrom: string | null;
  validUntil: string | null;
  substances: string[];
  stateEntries: { state: string; code: string }[];
}

export interface ApvmaSubstance {
  number: string;
  name: string;
  holder: string | null;
  status: string;
  publishedStatus: string;
  validFrom: string | null;
  validUntil: string | null;
}

export interface PmraSnapshot extends BaseSnapshot {
  countryCode: string;
  versionNote: string;
  currencyRule: string;
  scopeFilterRule: string;
  agriculturalFunctions: string[];
  holderRule: string;
  doseRule: string;
  useMappingRule: string;
  truncationRule: string;
  truncatedProductCount: number;
  productCount: number;
  products: PmraProduct[];
}

export interface ApvmaSnapshot extends BaseSnapshot {
  countryCode: string;
  renewalRule: string;
  scopeFilterRule: string;
  subNationalRule: string;
  compositionRule: string;
  useRule: string;
  productCount: number;
  substanceCount: number;
  products: ApvmaProduct[];
  substances: ApvmaSubstance[];
}

export const PMRA_SNAPSHOT_PREFIX = 'pmra__products__';
export const APVMA_SNAPSHOT_PREFIX = 'apvma__pubcris__';

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
const PMRA = loadLatest<PmraSnapshot>(PMRA_SNAPSHOT_PREFIX);
const APVMA = loadLatest<ApvmaSnapshot>(APVMA_SNAPSHOT_PREFIX);

export function euPesticideSnapshot(): EuPesticideSnapshot | null {
  return EU;
}
export function ephySnapshot(): EphySnapshot | null {
  return EPHY;
}
export function pmraSnapshot(): PmraSnapshot | null {
  return PMRA;
}
export function apvmaSnapshot(): ApvmaSnapshot | null {
  return APVMA;
}

/** Every loaded input snapshot, with the jurisdiction each one belongs to. */
export function inputSnapshots(): {
  key: string;
  jurisdiction: string;
  snapshot: BaseSnapshot;
}[] {
  return [
    EU && { key: 'eu', jurisdiction: 'European Union', snapshot: EU },
    EPHY && { key: 'ephy', jurisdiction: 'France', snapshot: EPHY },
    PMRA && { key: 'pmra', jurisdiction: 'Canada', snapshot: PMRA },
    APVMA && { key: 'apvma', jurisdiction: 'Australia', snapshot: APVMA },
  ].filter(Boolean) as {
    key: string;
    jurisdiction: string;
    snapshot: BaseSnapshot;
  }[];
}
export function inputSnapshotFiles(): string[] {
  return [
    ...filesFor(EU_PESTICIDES_SNAPSHOT_PREFIX),
    ...filesFor(EPHY_SNAPSHOT_PREFIX),
    ...filesFor(PMRA_SNAPSHOT_PREFIX),
    ...filesFor(APVMA_SNAPSHOT_PREFIX),
  ];
}
