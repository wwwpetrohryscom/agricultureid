/**
 * Pinned freshness contracts, one per source.
 *
 * Waves 15 and 18 both learned the same lesson the hard way: a rule written
 * against the only source that existed at the time does not merely stop
 * applying when a second source arrives — it stops FAILING. A check on the
 * shape of an EU identifier never fires on a Canadian registration number, and
 * the record passes with no rules at all.
 *
 * So a source with no contract here cannot be compared. It fails closed, and
 * the validator says so, rather than being diffed by whatever default happened
 * to be in scope.
 *
 * What a contract pins:
 *
 *   identityFields     — what makes two rows the same row. Get this wrong and
 *                        every row looks added and every row looks removed.
 *   semanticFields     — what makes a row's meaning different. Only these can
 *                        produce a change candidate.
 *   presentationFields — fields that differ without meaning differing. They are
 *                        diffed, reported at the source layer, and can never
 *                        become an agricultural change.
 *   placeholderValues  — values the source writes where it means "nothing".
 *                        The UK gazette writes 01/01/1900 for entries listed
 *                        before it kept dates; read as a date, that is sixteen
 *                        decisions taken on one day in 1900.
 *   completeness       — how a snapshot proves it holds the whole source. A
 *                        snapshot that cannot prove it produces NO removals,
 *                        because a missing row is not a withdrawal.
 *   fieldChangeType    — which change type each semantic field produces, so a
 *                        status transition is never reported as a rename.
 */
import type { ChangeType } from '@/types/freshness';

export interface CompletenessRule {
  /**
   * Partition field. Every partition present in the earlier snapshot must be
   * present in the later one, or the comparison is incomplete: a download that
   * lost a whole scheme lost rows, it did not witness deletions.
   */
  partitionField: string;
  /**
   * The largest share of rows a single comparison may see disappear before the
   * snapshot is treated as truncated rather than as evidence of removals.
   * Expressed as a fraction of the earlier row count.
   */
  maxRemovedFraction: number;
  /** A snapshot with fewer rows than this is never complete. */
  minRowCount: number;
  why: string;
}

export interface FreshnessContract {
  id: string;
  sourceId: string;
  registryId?: string;
  label: string;
  snapshotKind: 'dataset' | 'registry' | 'download' | 'api-response';
  /** Property of the snapshot payload holding the comparable rows. */
  rowsField: string;
  identityFields: readonly string[];
  semanticFields: readonly string[];
  presentationFields: readonly string[];
  placeholderValues: Readonly<Record<string, readonly string[]>>;
  fieldChangeType: Readonly<Record<string, ChangeType>>;
  completeness: CompletenessRule;
  parserVersion: string;
  normalizationVersion: string;
}

export const FRESHNESS_CONTRACTS: readonly FreshnessContract[] = [
  {
    id: 'uk-seeds-gazette-variety-lists',
    sourceId: 'reg-uk-seeds-gazette',
    registryId: 'uk-variety-lists',
    label: 'Great Britain and Northern Ireland Variety Lists',
    snapshotKind: 'download',
    rowsField: 'rows',
    // The gazette's own reference for an entry, plus the sheet, because a
    // variety listing and a plant breeders' right share a scheme and variety
    // number while being different legal facts about the same variety.
    identityFields: ['sheet', 'schemeNo', 'varietyNo'],
    semanticFields: [
      'approvedName',
      'botanicName',
      'commonName',
      'adminGroup',
      'decisionDate',
      'grantNumber',
    ],
    // Nothing here is presentation-only: the gazette publishes a table of
    // facts. Serialisation differences are handled by normalisation, which is
    // the right place — a date written two ways is one date, not two fields.
    presentationFields: [],
    placeholderValues: {
      decisionDate: ['1900-01-01'],
    },
    fieldChangeType: {
      approvedName: 'nameChanged',
      botanicName: 'sourceValueChanged',
      commonName: 'sourceValueChanged',
      adminGroup: 'sourceValueChanged',
      decisionDate: 'dateChanged',
      grantNumber: 'sourceValueChanged',
    },
    completeness: {
      partitionField: 'schemeNo',
      // The gazette publishes complete lists monthly, and a month has never
      // removed anything close to a twentieth of them. A larger drop is a
      // truncated download until proven otherwise.
      maxRemovedFraction: 0.05,
      minRowCount: 5000,
      why: 'The special edition publishes the complete awarded lists, not a delta, so a complete snapshot must carry every scheme the previous one carried and cannot lose a large share of its rows in one month.',
    },
    parserVersion: 'uk-seeds-gazette@3',
    normalizationVersion: 'uk-seeds-gazette@3',
  },
];

export const FRESHNESS_CONTRACT_MAP: ReadonlyMap<string, FreshnessContract> =
  new Map(FRESHNESS_CONTRACTS.map((c) => [c.id, c]));

/**
 * A comparison the corpus actually holds: two snapshots of one source, in
 * order. Registered explicitly so a comparison is a reviewed decision rather
 * than whatever two files happen to sort next to each other.
 */
export interface SnapshotComparison {
  contractId: string;
  fromSnapshotId: string;
  toSnapshotId: string;
  /**
   * The outcome a person reviewed and accepted.
   *
   * Without this, the layer's most important rules are invisible to the gate:
   * deleting the placeholder rule from a contract silently turns sixteen empty
   * cells into sixteen published date changes, and every structural check still
   * passes because the structure is still valid. Recording the reviewed
   * outcome makes the real comparison a regression fixture, so any change to a
   * contract, a normalisation rule or the differ that moves real output has to
   * be looked at again rather than merely compiling.
   */
  expected: {
    added: number;
    removed: number;
    changed: number;
    verified: number;
    uncertain: number;
    collidingKeys: number;
    complete: boolean;
  };
}

export const SNAPSHOT_COMPARISONS: readonly SnapshotComparison[] = [
  {
    contractId: 'uk-seeds-gazette-variety-lists',
    fromSnapshotId: 'uk-seeds-gazette-variety-lists-2026-07-01',
    toSnapshotId: 'uk-seeds-gazette-variety-lists-2026-08-01',
    // 8,165 fields differ between these two editions. 8,164 of them are the
    // same decisions written a different way — July serialises dates as Excel
    // serial numbers, August as text — and one is an apostrophe. What is left
    // is 200 listings and grants that appeared and 43 that stopped appearing.
    expected: {
      added: 200,
      removed: 43,
      changed: 1,
      verified: 243,
      uncertain: 1,
      collidingKeys: 1,
      complete: true,
    },
  },
];
