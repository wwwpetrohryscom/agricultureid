/**
 * Staging: a semantic difference becomes a CANDIDATE, never a fact.
 *
 *   snapshot diff → candidate → validation → accepted change
 *
 * Nothing here publishes. The point of the stage is that a difference has to
 * survive questions that the diff itself cannot answer: was the capture
 * complete, did the parser change under us, and is this a real edit or a
 * corrected apostrophe?
 *
 * Three gates run, in order, and the first that fires decides the status:
 *
 *   1. parser changed        → everything is `parserArtifact`. The same bytes
 *      read by different code produce different state; that is not the source
 *      moving. Confirming it needs the earlier snapshot reprocessed with the
 *      later parser, which is a retrieval question, not a diffing one.
 *   2. capture incomplete    → removals are already suppressed upstream, and
 *      what remains is marked `uncertain` rather than trusted.
 *   3. cosmetic equality     → a name that differs only in punctuation or
 *      spacing is `uncertain`, never a rename. `SALLY2014'` becoming
 *      `'SALLY2014'` is a transcription fix, and calling it a rename would put
 *      a change event on a variety nobody renamed.
 */
import type {
  ChangeCandidate,
  ChangeCandidateStatus,
  SemanticDiff,
  SourceDiff,
} from '@/types/freshness';
import type { FreshnessContract } from './contracts';

/** Letters and digits only, case-folded — for asking "is this the same name?" */
const cosmeticKey = (v: string | number | null | undefined): string =>
  v === null || v === undefined
    ? ''
    : String(v)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '');

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export function toCandidates(
  semantic: SemanticDiff,
  source: SourceDiff,
  contract: FreshnessContract,
): ChangeCandidate[] {
  const all = [...semantic.added, ...semantic.removed, ...semantic.changed];

  return all.map((c, i) => {
    let status: ChangeCandidateStatus = 'detected';
    let reason: string | undefined;

    if (source.parserChanged || source.normalizationChanged) {
      status = 'parserArtifact';
      reason =
        'The parser or normalisation version differs between these snapshots, so a difference in normalised state cannot yet be attributed to the source.';
    } else if (!semantic.completeness.complete) {
      status = 'uncertain';
      reason = `The later capture could not be shown complete: ${semantic.completeness.reasons[0]}`;
    } else if (
      c.field &&
      contract.fieldChangeType[c.field] === 'nameChanged' &&
      cosmeticKey(c.from) === cosmeticKey(c.to)
    ) {
      status = 'uncertain';
      reason =
        'The two names differ only in punctuation or spacing, which is a transcription fix at least as often as it is a rename. It is not published as a rename.';
    } else {
      status = 'verified';
    }

    return {
      id: `${contract.id}:${semantic.fromSnapshotId}:${semantic.toSnapshotId}:${slug(c.entityKey)}:${c.changeType}${c.field ? `:${c.field}` : ''}:${i}`,
      contractId: contract.id,
      sourceId: contract.sourceId,
      entityKey: c.entityKey,
      changeType: c.changeType,
      status,
      field: c.field,
      from: c.from,
      to: c.to,
      fromSnapshotId: semantic.fromSnapshotId,
      toSnapshotId: semantic.toSnapshotId,
      reason,
    };
  });
}

/** Only these may be treated as facts by anything downstream. */
export const acceptedChanges = (candidates: ChangeCandidate[]) =>
  candidates.filter((c) => c.status === 'verified');
