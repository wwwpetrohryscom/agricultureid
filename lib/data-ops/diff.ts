import type { DatasetSnapshot } from '@/types/geo';
import type { SnapshotDiff } from '@/types/data-ops';

/**
 * Deterministic diff between two dataset snapshots of the same indicator.
 * Compares observations keyed by (iso3, year). Pure — no I/O, no timestamps.
 */
export function diffSnapshots(
  prev: DatasetSnapshot | null,
  next: DatasetSnapshot,
): SnapshotDiff {
  const key = (iso3: string, year: number) => `${iso3}:${year}`;
  const prevMap = new Map<string, number>();
  const prevJur = new Set<string>();
  const prevYears = new Set<number>();
  for (const r of prev?.rows ?? []) {
    prevMap.set(key(r.iso3, r.year), r.value);
    prevJur.add(r.iso3);
    prevYears.add(r.year);
  }
  const nextJur = new Set<string>();
  const nextYears = new Set<number>();

  let added = 0;
  let revised = 0;
  const revisions: SnapshotDiff['sampleRevisions'] = [];
  const nextKeys = new Set<string>();
  for (const r of next.rows) {
    const k = key(r.iso3, r.year);
    nextKeys.add(k);
    nextJur.add(r.iso3);
    nextYears.add(r.year);
    if (!prevMap.has(k)) {
      added++;
    } else {
      const from = prevMap.get(k)!;
      if (from !== r.value) {
        revised++;
        const pctChange =
          from === 0 ? Infinity : ((r.value - from) / Math.abs(from)) * 100;
        revisions.push({
          iso3: r.iso3,
          year: r.year,
          from,
          to: r.value,
          pctChange,
        });
      }
    }
  }
  let removed = 0;
  for (const k of prevMap.keys()) if (!nextKeys.has(k)) removed++;

  const diffSet = (a: Set<string>, b: Set<string>) =>
    [...a].filter((x) => !b.has(x)).sort();
  const diffNum = (a: Set<number>, b: Set<number>) =>
    [...a].filter((x) => !b.has(x)).sort((x, y) => x - y);

  const notes: string[] = [];
  if (!prev) notes.push('No prior snapshot: this is the baseline version.');
  if (prev && prev.unit !== next.unit)
    notes.push(`Unit changed: "${prev.unit}" → "${next.unit}".`);
  if (
    prev &&
    Math.abs(next.rows.length - prev.rows.length) > prev.rows.length * 0.1
  )
    notes.push(
      'Row count changed by more than 10% — review for coverage changes.',
    );

  return {
    datasetId: next.indicatorId,
    fromVersion: prev?.datasetVersion ?? null,
    toVersion: next.datasetVersion,
    added,
    removed,
    revised,
    unitChanged: Boolean(prev && prev.unit !== next.unit),
    rowCountDelta: next.rows.length - (prev?.rows.length ?? 0),
    jurisdictionsAdded: diffSet(nextJur, prevJur),
    jurisdictionsRemoved: diffSet(prevJur, nextJur),
    yearsAdded: diffNum(nextYears, prevYears),
    yearsRemoved: diffNum(prevYears, nextYears),
    sampleRevisions: revisions
      .filter((r) => Number.isFinite(r.pctChange))
      .sort((a, b) => Math.abs(b.pctChange) - Math.abs(a.pctChange))
      .slice(0, 10),
    notes,
  };
}
