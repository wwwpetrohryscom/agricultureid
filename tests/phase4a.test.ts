import { describe, expect, it } from 'vitest';
import { DATASETS, getDataset } from '@/lib/data-ops/registry';
import { dataOpsIssues } from '@/lib/data-ops/validate-dataops';
import { diffSnapshots } from '@/lib/data-ops/diff';
import { provenanceHealth, reviewQueue } from '@/lib/provenance/health';
import { getSnapshot, checksumValid } from '@/lib/geo/snapshots';
import type { DatasetSnapshot } from '@/types/geo';

describe('phase 4A — dataset registry', () => {
  it('registers every indicator dataset + country metadata', () => {
    expect(DATASETS.length).toBeGreaterThanOrEqual(16);
    expect(getDataset('worldbank-country-metadata')).toBeDefined();
  });

  it('registry entries resolve to a checksum-verified snapshot with matching unit', () => {
    for (const d of DATASETS) {
      if (d.datasetId === 'worldbank-country-metadata') continue;
      const indId = d.datasetId
        .replace(/^worldbank-/, '')
        .toUpperCase()
        .replace(/-/g, '.');
      const snap = getSnapshot(indId);
      expect(snap, d.datasetId).toBeDefined();
      expect(d.checksum, d.datasetId).toBe(snap!.checksum);
      expect(d.expectedUnit, d.datasetId).toBe(snap!.unit);
      expect(checksumValid(snap!), d.datasetId).toBe(true);
      expect(d.expectedColumns).toEqual(['iso3', 'year', 'value']);
    }
  });

  it('reports no data-ops validation errors', () => {
    expect(dataOpsIssues().filter((i) => i.level === 'error')).toEqual([]);
  });
});

describe('phase 4A — snapshot diff', () => {
  const base = (
    rows: DatasetSnapshot['rows'],
    version: string,
    unit = 'kg/ha',
  ): DatasetSnapshot => ({
    snapshotId: `t-${version}`,
    source: 't',
    sourceUrl: 'x',
    indicatorId: 'T',
    indicatorName: 'T',
    unit,
    datasetVersion: version,
    retrievedAt: '2026-07-12',
    license: 'CC BY 4.0',
    rowCount: rows.length,
    coveredYears: [2000, 2001],
    jurisdictionCount: 2,
    transformationVersion: '1',
    limitations: '',
    checksum: 'x',
    rows,
  });

  it('detects added, removed, revised, and unit changes', () => {
    const prev = base(
      [
        { iso3: 'USA', year: 2000, value: 100 },
        { iso3: 'FRA', year: 2000, value: 50 },
      ],
      '2025',
      'kg/ha',
    );
    const next = base(
      [
        { iso3: 'USA', year: 2000, value: 110 }, // revised
        { iso3: 'DEU', year: 2000, value: 70 }, // added
      ],
      '2026',
      'kg/acre',
    ); // FRA removed, unit changed
    const d = diffSnapshots(prev, next);
    expect(d.added).toBe(1);
    expect(d.removed).toBe(1);
    expect(d.revised).toBe(1);
    expect(d.unitChanged).toBe(true);
    expect(d.jurisdictionsAdded).toContain('DEU');
    expect(d.jurisdictionsRemoved).toContain('FRA');
    expect(d.sampleRevisions[0]).toMatchObject({
      iso3: 'USA',
      from: 100,
      to: 110,
    });
  });

  it('treats a first snapshot as a baseline', () => {
    const d = diffSnapshots(
      null,
      base([{ iso3: 'USA', year: 2000, value: 1 }], '2026'),
    );
    expect(d.fromVersion).toBeNull();
    expect(d.added).toBe(1);
    expect(d.notes.some((n) => n.includes('baseline'))).toBe(true);
  });
});

describe('phase 4A — provenance health', () => {
  const report = provenanceHealth();

  it('classifies every subject with at least one status and no fabricated score', () => {
    expect(report.totals.subjects).toBeGreaterThan(500);
    for (const e of report.entries)
      expect(e.statuses.length).toBeGreaterThan(0);
    // report has discrete statuses, not a single numeric score
    expect((report as unknown as { score?: number }).score).toBeUndefined();
  });

  it('flags Tier-3-only sources as sourceWeak and unresolved subjects as unresolved', () => {
    expect(report.totals.byStatus.sourceWeak).toBeGreaterThan(0);
    const weakSource = report.entries.find(
      (e) => e.subject === 'source:britannica',
    );
    expect(weakSource?.statuses).toContain('sourceWeak');
    expect(report.totals.byStatus.unresolved).toBeGreaterThan(0);
  });

  it('review queue excludes fully-healthy subjects', () => {
    for (const e of reviewQueue(report))
      expect(e.statuses.every((s) => s === 'healthy')).toBe(false);
  });

  it('is deterministic for a fixed reference date', () => {
    expect(JSON.stringify(provenanceHealth('2026-07-13'))).toBe(
      JSON.stringify(provenanceHealth('2026-07-13')),
    );
  });
});
