/**
 * Pure comparison of two normalised snapshots. No I/O, no clock, no network.
 *
 * Two functions, deliberately separate:
 *
 *   diffSource   — did the source's representation change?
 *   diffSemantic — did anything true change?
 *
 * Keeping them apart is the whole point of the layer. A checksum can change
 * because a spreadsheet was saved by a newer version of Excel; a normalised
 * state can change because a product was withdrawn. Only the second is news.
 */
import type {
  SemanticChange,
  SemanticDiff,
  SourceDiff,
} from '@/types/freshness';
import type { FreshnessContract } from './contracts';

/**
 * Identity keys the source itself uses for more than one row.
 *
 * The UK gazette lists two different peas — VADA and GENEVA — under scheme 11,
 * variety 565, in every edition. Keyed naively, whichever row a map happened to
 * keep last would appear to have been renamed into the other, and the layer
 * would publish a rename of a variety nobody renamed. A reference the source
 * does not use uniquely cannot carry a change, so these keys are excluded from
 * the semantic diff and reported instead.
 */
export function collidingKeys(
  rows: Record<string, unknown>[],
  contract: FreshnessContract,
): Set<string> {
  const counts = new Map<string, number>();
  for (const r of rows) {
    const k = entityKey(r, contract);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return new Set([...counts].filter(([, n]) => n > 1).map(([k]) => k));
}

export interface NormalizedSnapshot {
  snapshotId: string;
  checksum?: string;
  byteLength?: number;
  sourceReleaseId?: string;
  parserVersion?: string;
  normalizationVersion?: string;
  rows: Record<string, unknown>[];
}

const asText = (v: unknown): string | null =>
  v === null || v === undefined || v === '' ? null : String(v);

/** The contract's identity fields, joined. Stable, and printable in an error. */
export function entityKey(
  row: Record<string, unknown>,
  contract: FreshnessContract,
): string {
  return contract.identityFields.map((f) => asText(row[f]) ?? '').join('|');
}

/**
 * Apply the source's own placeholder rules.
 *
 * A placeholder is the source writing "nothing" in a shape that looks like
 * something. Left alone, the UK gazette's 01/01/1900 turns sixteen empty cells
 * into sixteen decisions taken on the same day in 1900.
 */
export function normalizeRow(
  row: Record<string, unknown>,
  contract: FreshnessContract,
): Record<string, string | null> {
  const out: Record<string, string | null> = {};
  for (const f of [
    ...contract.semanticFields,
    ...contract.presentationFields,
  ]) {
    const raw = asText(row[f]);
    const placeholders = contract.placeholderValues[f] ?? [];
    out[f] = raw !== null && placeholders.includes(raw) ? null : raw;
  }
  return out;
}

export function diffSource(
  from: NormalizedSnapshot,
  to: NormalizedSnapshot,
  contract: FreshnessContract,
): SourceDiff {
  const notes: string[] = [];
  const parserChanged =
    (from.parserVersion ?? null) !== (to.parserVersion ?? null);
  const normalizationChanged =
    (from.normalizationVersion ?? null) !== (to.normalizationVersion ?? null);
  const releaseChanged =
    (from.sourceReleaseId ?? null) !== (to.sourceReleaseId ?? null);

  if (parserChanged)
    notes.push(
      `Parser version differs (${from.parserVersion} → ${to.parserVersion}). A difference in normalised state cannot be attributed to the source until the earlier snapshot is reprocessed with the later parser.`,
    );
  if (normalizationChanged)
    notes.push(
      `Normalisation version differs (${from.normalizationVersion} → ${to.normalizationVersion}).`,
    );
  if (!releaseChanged && from.checksum !== to.checksum)
    notes.push(
      'The source reports the same release but its content differs. The release identifier is not a reliable version for this source.',
    );

  // Presentation-only fields are compared so the report can say the source
  // moved, and are then dropped: they can never become an agricultural change.
  const fromByKey = new Map(
    from.rows.map((r) => [entityKey(r, contract), normalizeRow(r, contract)]),
  );
  const presentationFieldsChanged = new Set<string>();
  for (const r of to.rows) {
    const prev = fromByKey.get(entityKey(r, contract));
    if (!prev) continue;
    const next = normalizeRow(r, contract);
    for (const f of contract.presentationFields)
      if (prev[f] !== next[f]) presentationFieldsChanged.add(f);
  }

  return {
    fromSnapshotId: from.snapshotId,
    toSnapshotId: to.snapshotId,
    checksumChanged: (from.checksum ?? null) !== (to.checksum ?? null),
    byteLengthDelta:
      from.byteLength !== undefined && to.byteLength !== undefined
        ? to.byteLength - from.byteLength
        : undefined,
    rowCountDelta: to.rows.length - from.rows.length,
    releaseChanged,
    parserChanged,
    normalizationChanged,
    presentationFieldsChanged: [...presentationFieldsChanged].sort(),
    notes,
  };
}

export function diffSemantic(
  from: NormalizedSnapshot,
  to: NormalizedSnapshot,
  contract: FreshnessContract,
): SemanticDiff {
  // Excluded before anything else: a key the source reuses cannot be attributed
  // a change, in either direction.
  const collisions = new Set([
    ...collidingKeys(from.rows, contract),
    ...collidingKeys(to.rows, contract),
  ]);

  const fromByKey = new Map<string, Record<string, string | null>>();
  const fromPartitions = new Set<string>();
  for (const r of from.rows) {
    const k = entityKey(r, contract);
    const p = asText(r[contract.completeness.partitionField]);
    if (p !== null) fromPartitions.add(p);
    if (collisions.has(k)) continue;
    fromByKey.set(k, normalizeRow(r, contract));
  }
  const toPartitions = new Set<string>();
  const seen = new Set<string>();

  const added: SemanticChange[] = [];
  const changed: SemanticChange[] = [];

  for (const r of to.rows) {
    const key = entityKey(r, contract);
    const p = asText(r[contract.completeness.partitionField]);
    if (p !== null) toPartitions.add(p);
    if (collisions.has(key)) continue;
    seen.add(key);
    const next = normalizeRow(r, contract);
    const prev = fromByKey.get(key);
    if (!prev) {
      added.push({ entityKey: key, changeType: 'added' });
      continue;
    }
    for (const f of contract.semanticFields) {
      if (prev[f] === next[f]) continue;
      changed.push({
        entityKey: key,
        changeType: contract.fieldChangeType[f] ?? 'sourceValueChanged',
        field: f,
        from: prev[f],
        to: next[f],
      });
    }
  }

  const missing = [...fromByKey.keys()].filter((k) => !seen.has(k));

  /* -- is this comparison entitled to report removals at all? ------------- */
  const reasons: string[] = [];
  const partitionsLost = [...fromPartitions]
    .filter((p) => !toPartitions.has(p))
    .sort();
  if (to.rows.length < contract.completeness.minRowCount)
    reasons.push(
      `The later snapshot holds ${to.rows.length} rows, below the ${contract.completeness.minRowCount} a complete capture of this source has. It reads as truncated.`,
    );
  if (partitionsLost.length)
    reasons.push(
      `Whole ${contract.completeness.partitionField} partitions present before are absent now (${partitionsLost.slice(0, 8).join(', ')}${partitionsLost.length > 8 ? ', …' : ''}). A capture that lost a partition lost rows; it did not witness deletions.`,
    );
  const removedFraction =
    from.rows.length === 0 ? 0 : missing.length / from.rows.length;
  if (removedFraction > contract.completeness.maxRemovedFraction)
    reasons.push(
      `${missing.length} of ${from.rows.length} rows (${(removedFraction * 100).toFixed(1)}%) are absent, above the ${(contract.completeness.maxRemovedFraction * 100).toFixed(0)}% this source's contract treats as a plausible month of removals.`,
    );

  const complete = reasons.length === 0;
  const removed: SemanticChange[] = complete
    ? missing.map((k) => ({ entityKey: k, changeType: 'removed' as const }))
    : [];

  return {
    fromSnapshotId: from.snapshotId,
    toSnapshotId: to.snapshotId,
    added,
    removed,
    changed,
    collidingKeys: [...collisions].sort(),
    completeness: {
      complete,
      reasons,
      fromRowCount: from.rows.length,
      toRowCount: to.rows.length,
      partitionsLost,
    },
  };
}
