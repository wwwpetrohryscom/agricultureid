/**
 * Phase 4A — scientific data operations & provenance health.
 *
 * A central, typed registry describing every external dataset AgricultureID
 * depends on, plus the health-status model used by the provenance/source/image
 * health reports. Designed to support MULTIPLE providers with different update
 * models — nothing here assumes the World Bank cadence.
 */

export type UpdateFrequency =
  'continuous' | 'annual' | 'periodic' | 'irregular' | 'static' | 'unknown';

export type PublicationStatus =
  'published' | 'in-review' | 'deprecated' | 'withdrawn';

/** Access model for a provider dataset. */
export type AccessRequirement =
  | 'open'
  | 'attribution-required'
  | 'registration-required'
  | 'api-key-required'
  | 'restricted';

/**
 * One provider dataset (e.g. a World Bank indicator series, or the country
 * metadata table). Fields not reliably knowable are omitted, never invented.
 */
export interface DatasetRegistryEntry {
  datasetId: string;
  provider: string;
  title: string;
  description: string;
  /** Canonical, durable source URL (organization/program/record). */
  sourceUrl: string;
  license: string;
  licenseUrl?: string;
  accessRequirements: AccessRequirement[];
  jurisdiction: string;
  /** Geographic coverage summary (e.g. "217 countries + aggregates"). */
  geographicCoverage: string;
  /** Temporal coverage as [minYear, maxYear] when known. */
  temporalCoverage?: [number, number];
  updateFrequency: UpdateFrequency;
  /** Provider's latest available release/version string, when known. */
  latestAvailableRelease?: string;
  retrievalDate: string;
  /** Snapshot file ids backing this dataset (may be multiple versions). */
  snapshotIds: string[];
  schemaVersion: string;
  transformationVersion: string;
  /** Integrity checksum of the latest snapshot. */
  checksum: string;
  expectedColumns: string[];
  expectedUnit: string;
  /** How missing values are handled in the snapshot. */
  missingValueRule: string;
  /** How the provider revises historical values. */
  revisionPolicy: string;
  knownLimitations: string[];
  publicationStatus: PublicationStatus;
}

/** Health status vocabulary — a complex state, never one fabricated score. */
export type HealthStatus =
  | 'healthy'
  | 'reviewDue'
  | 'sourceWeak'
  | 'sourceUnavailable'
  | 'provenanceIncomplete'
  | 'unresolved'
  | 'deprecated';

export interface ProvenanceHealthEntry {
  /** Subject id, e.g. "crop:wheat", "dataset:worldbank-...", "formula:...". */
  subject: string;
  kind: 'content' | 'dataset' | 'formula' | 'source';
  statuses: HealthStatus[];
  /** Human-readable notes explaining the statuses. */
  notes: string[];
}

export interface ProvenanceHealthReport {
  generatedFrom: string;
  totals: {
    subjects: number;
    byStatus: Record<HealthStatus, number>;
  };
  entries: ProvenanceHealthEntry[];
}

/** One field-level difference between two dataset snapshots. */
export interface SnapshotDiff {
  datasetId: string;
  fromVersion: string | null;
  toVersion: string;
  added: number;
  removed: number;
  revised: number;
  unitChanged: boolean;
  rowCountDelta: number;
  jurisdictionsAdded: string[];
  jurisdictionsRemoved: string[];
  yearsAdded: number[];
  yearsRemoved: number[];
  /** Sample of the largest revisions for review. */
  sampleRevisions: {
    iso3: string;
    year: number;
    from: number;
    to: number;
    pctChange: number;
  }[];
  notes: string[];
}
