import { describe, expect, it } from 'vitest';
import {
  CHANGE_CANDIDATE_STATUSES,
  CHANGE_TYPES,
  SNAPSHOT_KINDS,
  SNAPSHOT_STATUSES,
} from '@/types/freshness';
import {
  FRESHNESS_CONTRACTS,
  FRESHNESS_CONTRACT_MAP,
  SNAPSHOT_COMPARISONS,
} from '@/lib/freshness/contracts';
import {
  collidingKeys,
  diffSemantic,
  diffSource,
  normalizeRow,
  type NormalizedSnapshot,
} from '@/lib/freshness/diff';
import { acceptedChanges, toCandidates } from '@/lib/freshness/candidates';
import { runComparisons } from '@/lib/freshness/registry';
import { SOURCE_SNAPSHOTS } from '@/data/freshness';
import { DIFF_SCENARIOS, FIXTURE_CONTRACT } from '@/data/freshness/fixtures';
import { SOURCE_MAP } from '@/lib/sources/registry';

const RESULTS = runComparisons();
const UK = RESULTS.find(
  (r) => r.contract.id === 'uk-seeds-gazette-variety-lists',
)!;

const snap = (
  id: string,
  rows: Record<string, unknown>[],
  over: Partial<NormalizedSnapshot> = {},
): NormalizedSnapshot => ({
  snapshotId: id,
  checksum: `sum-${id}`,
  parserVersion: 'fixture@1',
  normalizationVersion: 'fixture@1',
  rows,
  ...over,
});

const base = [
  {
    registrationNumber: 'R-1',
    name: 'Alpha',
    status: 'authorized',
    officialUrl: 'https://example.gov/R-1',
    decisionDate: '2026-01-15',
    jurisdiction: 'AAA',
    renderedHtmlClass: 'row',
  },
  {
    registrationNumber: 'R-2',
    name: 'Beta',
    status: 'authorized',
    officialUrl: 'https://example.gov/R-2',
    decisionDate: '2026-01-15',
    jurisdiction: 'AAA',
    renderedHtmlClass: 'row',
  },
  {
    registrationNumber: 'R-3',
    name: 'Gamma',
    status: 'authorized',
    officialUrl: 'https://example.gov/R-3',
    decisionDate: '2026-01-15',
    jurisdiction: 'AAA',
    renderedHtmlClass: 'row',
  },
];

describe('freshness — a source change is not a fact change', () => {
  it('reports a formatting difference at the source layer and nowhere else', () => {
    // The rule the whole layer exists to hold. A CSS class moved; nothing true
    // moved, and nothing downstream may be told otherwise.
    const from = snap('a', base);
    const to = snap(
      'b',
      base.map((r) => ({ ...r, renderedHtmlClass: 'row--v2' })),
      { checksum: 'sum-b' },
    );
    const src = diffSource(from, to, FIXTURE_CONTRACT);
    const sem = diffSemantic(from, to, FIXTURE_CONTRACT);

    expect(src.checksumChanged).toBe(true);
    expect(src.presentationFieldsChanged).toEqual(['renderedHtmlClass']);
    expect([...sem.added, ...sem.removed, ...sem.changed]).toHaveLength(0);
    expect(toCandidates(sem, src, FIXTURE_CONTRACT)).toHaveLength(0);
  });

  it('reports a real status transition as a fact', () => {
    const from = snap('a', base);
    const to = snap(
      'b',
      base.map((r) =>
        r.registrationNumber === 'R-2' ? { ...r, status: 'withdrawn' } : r,
      ),
      { checksum: 'sum-b' },
    );
    const sem = diffSemantic(from, to, FIXTURE_CONTRACT);
    expect(sem.changed).toHaveLength(1);
    expect(sem.changed[0]!.changeType).toBe('statusChanged');
    const accepted = acceptedChanges(
      toCandidates(
        sem,
        diffSource(from, to, FIXTURE_CONTRACT),
        FIXTURE_CONTRACT,
      ),
    );
    expect(accepted).toHaveLength(1);
  });

  it('is unmoved by row order', () => {
    const sem = diffSemantic(
      snap('a', base),
      snap('b', [...base].reverse(), { checksum: 'sum-b' }),
      FIXTURE_CONTRACT,
    );
    expect([...sem.added, ...sem.removed, ...sem.changed]).toHaveLength(0);
  });

  it('reads the source’s own placeholder as absence, not as a date', () => {
    // Left alone, the gazette's 01/01/1900 becomes sixteen decisions taken on
    // one day in 1900.
    const withPlaceholder = normalizeRow(
      { ...base[0]!, decisionDate: '1900-01-01' },
      FIXTURE_CONTRACT,
    );
    expect(withPlaceholder.decisionDate).toBeNull();
    const sem = diffSemantic(
      snap(
        'a',
        base.map((r) => ({ ...r, decisionDate: null })),
      ),
      snap(
        'b',
        base.map((r) => ({ ...r, decisionDate: '1900-01-01' })),
        {
          checksum: 'sum-b',
        },
      ),
      FIXTURE_CONTRACT,
    );
    expect(sem.changed).toHaveLength(0);
  });
});

describe('freshness — a parser change is not a source change', () => {
  it('marks every candidate a parser artifact when the parser moved', () => {
    const from = snap('a', base);
    const to = snap(
      'b',
      base.map((r) =>
        r.registrationNumber === 'R-2' ? { ...r, status: 'withdrawn' } : r,
      ),
      { parserVersion: 'fixture@2' },
    );
    const src = diffSource(from, to, FIXTURE_CONTRACT);
    const cands = toCandidates(
      diffSemantic(from, to, FIXTURE_CONTRACT),
      src,
      FIXTURE_CONTRACT,
    );
    expect(src.parserChanged).toBe(true);
    expect(cands.map((c) => c.status)).toEqual(['parserArtifact']);
    expect(acceptedChanges(cands)).toHaveLength(0);
  });
});

describe('freshness — a missing row is not a withdrawal', () => {
  it('suppresses removals when the capture cannot be shown complete', () => {
    const from = snap('a', base);
    const to = snap('b', base.slice(0, 1), { checksum: 'sum-b' });
    const sem = diffSemantic(from, to, FIXTURE_CONTRACT);
    expect(sem.completeness.complete).toBe(false);
    expect(sem.removed).toHaveLength(0);
    expect(sem.completeness.reasons.length).toBeGreaterThan(0);
  });

  it('suppresses removals when a whole partition stopped appearing', () => {
    const rows = [
      ...base,
      { ...base[0]!, registrationNumber: 'R-9', jurisdiction: 'BBB' },
    ];
    const sem = diffSemantic(
      snap('a', rows),
      snap(
        'b',
        rows.filter((r) => r.jurisdiction !== 'BBB'),
        { checksum: 'sum-b' },
      ),
      FIXTURE_CONTRACT,
    );
    expect(sem.completeness.partitionsLost).toEqual(['BBB']);
    expect(sem.removed).toHaveLength(0);
  });

  it('reports a removal when the capture IS complete', () => {
    const rows = [...base, { ...base[0]!, registrationNumber: 'R-9' }];
    const sem = diffSemantic(
      snap('a', rows),
      snap('b', rows.slice(0, 3), { checksum: 'sum-b' }),
      FIXTURE_CONTRACT,
    );
    expect(sem.completeness.complete).toBe(true);
    expect(sem.removed).toHaveLength(1);
  });
});

describe('freshness — an identity the source reuses carries no change', () => {
  it('excludes colliding keys rather than renaming one row into the other', () => {
    // The gazette lists two different peas, VADA and GENEVA, under scheme 11
    // variety 565 in every edition. Keyed naively, one appears renamed into the
    // other and the layer publishes a rename nobody made.
    const dup = [
      { ...base[0]!, registrationNumber: 'R-1', name: 'Vada' },
      { ...base[0]!, registrationNumber: 'R-1', name: 'Geneva' },
      base[1]!,
    ];
    expect([...collidingKeys(dup, FIXTURE_CONTRACT)]).toEqual(['R-1']);
    const sem = diffSemantic(
      snap('a', dup),
      snap('b', [dup[1]!, dup[0]!, dup[2]!], { checksum: 'sum-b' }),
      FIXTURE_CONTRACT,
    );
    expect(sem.changed).toHaveLength(0);
    expect(sem.collidingKeys).toEqual(['R-1']);
  });

  it('finds the real collision in the real gazette and reports no rename for it', () => {
    expect(UK.semantic.collidingKeys).toEqual(['variety-list|11|565']);
    expect(
      UK.candidates.some((c) => c.entityKey === 'variety-list|11|565'),
    ).toBe(false);
  });
});

describe('freshness — a punctuation fix is not a rename', () => {
  it('leaves a cosmetic name difference uncertain', () => {
    const from = snap('a', base);
    const to = snap(
      'b',
      base.map((r) =>
        r.registrationNumber === 'R-1' ? { ...r, name: "'Alpha'" } : r,
      ),
      { checksum: 'sum-b' },
    );
    const cands = toCandidates(
      diffSemantic(from, to, FIXTURE_CONTRACT),
      diffSource(from, to, FIXTURE_CONTRACT),
      FIXTURE_CONTRACT,
    );
    expect(cands.map((c) => c.status)).toEqual(['uncertain']);
  });

  it('accepts a real rename', () => {
    const from = snap('a', base);
    const to = snap(
      'b',
      base.map((r) =>
        r.registrationNumber === 'R-1' ? { ...r, name: 'Alphabet' } : r,
      ),
      { checksum: 'sum-b' },
    );
    const cands = toCandidates(
      diffSemantic(from, to, FIXTURE_CONTRACT),
      diffSource(from, to, FIXTURE_CONTRACT),
      FIXTURE_CONTRACT,
    );
    expect(cands.map((c) => c.status)).toEqual(['verified']);
  });
});

describe('freshness — the real comparison', () => {
  it('collapses 8,000-plus raw field differences into one', () => {
    // July writes decision dates as Excel serial numbers, August as text. The
    // same decisions, written differently; normalisation is what tells them
    // apart from the 200 listings that genuinely appeared.
    expect(UK.source.checksumChanged).toBe(true);
    expect(UK.semantic.added).toHaveLength(200);
    expect(UK.semantic.removed).toHaveLength(43);
    expect(UK.semantic.changed).toHaveLength(1);
    expect(UK.semantic.completeness.complete).toBe(true);
  });

  it('publishes nothing that has not cleared the gates', () => {
    for (const c of UK.candidates) {
      expect(CHANGE_TYPES).toContain(c.changeType);
      expect(CHANGE_CANDIDATE_STATUSES).toContain(c.status);
      if (c.status !== 'verified') expect(c.reason, c.id).toBeTruthy();
    }
    expect(acceptedChanges(UK.candidates)).toHaveLength(243);
  });
});

describe('freshness — contracts and captures', () => {
  it('runs every fixture scenario through the real code paths', () => {
    for (const s of DIFF_SCENARIOS) {
      const src = diffSource(s.from, s.to, FIXTURE_CONTRACT);
      const sem = diffSemantic(s.from, s.to, FIXTURE_CONTRACT);
      const got = [...sem.added, ...sem.removed, ...sem.changed]
        .map((c) => (c.field ? `${c.changeType}:${c.field}` : c.changeType))
        .sort();
      expect(got, s.id).toEqual([...s.expect.semantic].sort());
      expect(sem.completeness.complete, s.id).toBe(s.expect.complete);
      expect(
        toCandidates(sem, src, FIXTURE_CONTRACT)
          .map((c) => c.status)
          .sort(),
        s.id,
      ).toEqual([...s.expect.candidateStatuses].sort());
    }
  });

  it('reaches every registered contract with a real comparison', () => {
    const used = new Set(SNAPSHOT_COMPARISONS.map((c) => c.contractId));
    for (const c of FRESHNESS_CONTRACTS) expect(used, c.id).toContain(c.id);
    expect(used.size).toBe(FRESHNESS_CONTRACTS.length);
  });

  it('fails closed for a source with no contract', () => {
    expect(FRESHNESS_CONTRACT_MAP.get('no-such-source')).toBeUndefined();
  });

  it('records every capture against a real source, with a release line', () => {
    for (const d of SOURCE_SNAPSHOTS) {
      expect(SOURCE_MAP.has(d.sourceId), d.id).toBe(true);
      expect(SNAPSHOT_KINDS).toContain(d.snapshotKind);
      expect(SNAPSHOT_STATUSES).toContain(d.status);
      expect(d.releaseLineId, d.id).toBeTruthy();
      expect(d.retrievedAt, d.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('never lets one source’s release lines be compared with each other', () => {
    // FAOSTAT publishes production, prices and trade on their own schedules, so
    // one being older than another is not a regression.
    const faostat = SOURCE_SNAPSHOTS.filter((s) => s.sourceId === 'faostat');
    expect(faostat.length).toBeGreaterThan(1);
    expect(new Set(faostat.map((s) => s.releaseLineId)).size).toBe(
      faostat.length,
    );
  });
});
