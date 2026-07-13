import { DATASETS } from '@/lib/data-ops/registry';
import { getSnapshot, checksumValid } from '@/lib/geo/snapshots';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';

export interface DataOpsIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const PUB_STATUS = new Set([
  'published',
  'in-review',
  'deprecated',
  'withdrawn',
]);

/** Phase 4A — dataset-registry integrity (3.9). */
export function dataOpsIssues(): DataOpsIssue[] {
  const out: DataOpsIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const ids = new Set<string>();
  for (const d of DATASETS) {
    const w = `dataset:${d.datasetId}`;
    if (ids.has(d.datasetId)) err('dataset-dup-id', 'Duplicate datasetId', w);
    ids.add(d.datasetId);
    if (!d.provider?.trim()) err('dataset-no-provider', 'Missing provider', w);
    if (!d.license?.trim()) err('dataset-no-license', 'Missing license', w);
    if (!d.sourceUrl?.startsWith('http'))
      err('dataset-bad-url', 'Bad source URL', w);
    if (!d.snapshotIds.length) err('dataset-no-snapshot', 'No snapshot ids', w);
    if (!d.expectedColumns.length)
      err('dataset-no-columns', 'No expected columns', w);
    if (!d.transformationVersion)
      err('dataset-no-transform', 'Missing transformation version', w);
    if (!PUB_STATUS.has(d.publicationStatus))
      err(
        'dataset-bad-status',
        `Bad publication status "${d.publicationStatus}"`,
        w,
      );
    if (!d.revisionPolicy?.trim())
      err('dataset-no-revision-policy', 'Missing revision policy', w);
    if (!d.missingValueRule?.trim())
      err('dataset-no-missing-rule', 'Missing missing-value rule', w);

    // Indicator datasets must resolve to a snapshot with matching unit + checksum.
    const indId = d.datasetId
      .replace(/^worldbank-/, '')
      .toUpperCase()
      .replace(/-/g, '.');
    const ind = INDICATOR_BY_ID.get(indId);
    if (ind) {
      const snap = getSnapshot(ind.id);
      if (!snap) {
        err(
          'dataset-snapshot-missing',
          `No snapshot for indicator ${ind.id}`,
          w,
        );
      } else {
        if (d.expectedUnit !== ind.unit)
          err(
            'dataset-unit-mismatch',
            `Registry unit "${d.expectedUnit}" ≠ indicator "${ind.unit}"`,
            w,
          );
        if (d.checksum !== snap.checksum)
          err(
            'dataset-checksum-drift',
            'Registry checksum ≠ latest snapshot checksum',
            w,
          );
        if (!checksumValid(snap))
          err(
            'dataset-snapshot-corrupt',
            `Snapshot ${snap.snapshotId} checksum does not verify`,
            w,
          );
        for (const col of ['iso3', 'year', 'value'])
          if (!d.expectedColumns.includes(col))
            err('dataset-schema', `Expected column "${col}" not declared`, w);
      }
    }
  }
  return out;
}
