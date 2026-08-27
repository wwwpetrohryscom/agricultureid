/**
 * Source freshness — what a source looked like at a point in time, and what
 * genuinely changed between two of those points.
 *
 * ## The distinction this layer exists to hold
 *
 * A source can differ from its previous retrieval for at least five unrelated
 * reasons, and only the last of them is an agricultural fact:
 *
 *   the network answered differently   — 403, a redirect, a timeout
 *   the file was serialised differently — a date written as 26846, then as
 *                                         01/07/1973
 *   AgricultureID parses it differently — the parser changed, the source did not
 *   the raw dataset changed             — bytes differ, meaning may not
 *   an entity changed                   — a variety was listed, a product withdrawn
 *
 * These are measured separately and never merged. The UK Seeds Gazette makes the
 * point better than any invented example: between its July and August 2026
 * editions, 8,165 fields differ. After normalisation, ONE does. The other 8,164
 * are the same decisions written a different way, because one edition stores
 * dates as Excel serial numbers and the next stores them as text.
 *
 * So {@link SourceDiff} answers "did the source's representation change" and
 * {@link SemanticDiff} answers "did anything true change". A page may only ever
 * be built from the second.
 *
 * ## Nothing here publishes itself
 *
 * A semantic difference is a CANDIDATE, not a fact. It passes through
 * completeness checks, parser-version checks and per-source rules before it can
 * be called verified, and a candidate that cannot clear them stays
 * `uncertain` — visible to the report, absent from the site.
 *
 * ## A missing row is not a withdrawal
 *
 * The most dangerous inference in this layer is that absence means deletion. A
 * row can vanish because the register removed it, or because a download
 * truncated, a page paginated differently, a request was blocked, or the
 * source narrowed its scope. Removals are therefore gated on a completeness
 * rule declared by the source's own contract, and a snapshot that cannot show
 * it is complete produces no removals at all.
 */

/** What kind of thing was captured. */
export const SNAPSHOT_KINDS = [
  'dataset',
  'registry',
  'web-page',
  'official-document',
  'api-response',
  'download',
] as const;
export type SnapshotKind = (typeof SNAPSHOT_KINDS)[number];

/** How the retrieval itself went. A retrieval outcome, never a domain fact. */
export const SNAPSHOT_STATUSES = [
  'success',
  'blocked',
  'redirect',
  'not-modified',
  'failed',
] as const;
export type SnapshotStatus = (typeof SNAPSHOT_STATUSES)[number];

/**
 * The identity of one capture of one source.
 *
 * This is a descriptor, not a copy: the payload stays in the layer-specific
 * snapshot files that already exist under `data/snapshots`, and this record
 * says which source, which release, which parser and which retrieval produced
 * it. Duplicating the payload here would give two things that could disagree.
 */
export interface SourceSnapshotDescriptor {
  id: string;
  sourceId: string;
  snapshotKind: SnapshotKind;
  /** ISO date AgricultureID retrieved it. Never a build timestamp. */
  retrievedAt: string;
  /**
   * What the releases are releases OF.
   *
   * One source can publish several independent things on their own schedules:
   * FAOSTAT releases production, producer prices and trade separately, and
   * comparing a production release date with a price release date says nothing.
   * Release ordering is only meaningful within a release line.
   */
  releaseLineId: string;
  /**
   * The source's own release or version identifier, where the source publishes
   * one. Absent when it does not — an HTTP `Last-Modified` header is not a
   * publication date unless the publisher says it is.
   */
  sourceReleaseId?: string;
  /** The source's own publication date, only where the source states it. */
  sourcePublishedAt?: string;
  checksum?: string;
  byteLength?: number;
  /** Version of the code that read the source's representation. */
  parserVersion?: string;
  /** Version of the rules that turned it into comparable state. */
  normalizationVersion?: string;
  status: SnapshotStatus;
  /** Path of the payload file, relative to the repository root. */
  payloadPath?: string;
  /** What the capture covers, in the source's own partitions. */
  rawScope?: string[];
  notes?: string[];
}

/**
 * How a normalised entity differs. Deliberately specific: a single `changed`
 * would put a withdrawn pesticide and a corrected apostrophe in one bucket.
 */
export const CHANGE_TYPES = [
  'added',
  'removed',
  'statusChanged',
  'nameChanged',
  'urlChanged',
  'authorityChanged',
  'jurisdictionChanged',
  'dateChanged',
  'sourceValueChanged',
  'relationshipChanged',
  'sourceReleaseChanged',
  'parserOnly',
  'formattingOnly',
  'unavailable',
  'restored',
  'uncertain',
] as const;
export type ChangeType = (typeof CHANGE_TYPES)[number];

/** How far a candidate has got. Only `verified` may reach a page. */
export const CHANGE_CANDIDATE_STATUSES = [
  'detected',
  'verified',
  'rejected',
  'uncertain',
  'parserArtifact',
] as const;
export type ChangeCandidateStatus = (typeof CHANGE_CANDIDATE_STATUSES)[number];

/**
 * Whether the source's REPRESENTATION differs. None of this is an agricultural
 * fact, and none of it may reach a page on its own.
 */
export interface SourceDiff {
  fromSnapshotId: string;
  toSnapshotId: string;
  checksumChanged: boolean;
  byteLengthDelta?: number;
  rowCountDelta: number;
  releaseChanged: boolean;
  parserChanged: boolean;
  normalizationChanged: boolean;
  /** Fields that differ but are declared presentation-only by the contract. */
  presentationFieldsChanged: string[];
  notes: string[];
}

/** One normalised difference, keyed by the contract's identity fields. */
export interface SemanticChange {
  entityKey: string;
  changeType: ChangeType;
  field?: string;
  from?: string | number | null;
  to?: string | number | null;
}

/**
 * Whether anything TRUE differs — and whether the comparison was even entitled
 * to say so. `complete` false means removals were suppressed.
 */
export interface SemanticDiff {
  fromSnapshotId: string;
  toSnapshotId: string;
  added: SemanticChange[];
  removed: SemanticChange[];
  changed: SemanticChange[];
  /**
   * Identity keys the source itself reuses for more than one row, excluded from
   * the comparison. A reference the source does not use uniquely cannot carry a
   * change, and pretending otherwise renames varieties nobody renamed.
   */
  collidingKeys: string[];
  completeness: {
    complete: boolean;
    reasons: string[];
    fromRowCount: number;
    toRowCount: number;
    partitionsLost: string[];
  };
}

/** A semantic difference that has not yet earned the right to be a fact. */
export interface ChangeCandidate {
  id: string;
  contractId: string;
  sourceId: string;
  entityKey: string;
  changeType: ChangeType;
  status: ChangeCandidateStatus;
  field?: string;
  from?: string | number | null;
  to?: string | number | null;
  fromSnapshotId: string;
  toSnapshotId: string;
  /** Why it has the status it has. Required for anything not `verified`. */
  reason?: string;
}

/** Shown wherever freshness output is presented. */
export const FRESHNESS_CAVEAT =
  'A difference between two retrievals of a source is not by itself a change in the world. Formatting, pagination, parser versions and blocked requests all produce differences, and only differences that survive those checks are treated as changes.';
