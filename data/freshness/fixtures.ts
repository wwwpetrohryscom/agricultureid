import type { FreshnessContract } from '@/lib/freshness/contracts';
import type { NormalizedSnapshot } from '@/lib/freshness/diff';
import type {
  ChangeCandidateStatus,
  ChangeType,
  SourceSnapshotDescriptor,
} from '@/types/freshness';

/**
 * Committed fixtures — the freshness gate's negative tests, run in CI.
 *
 * Deterministic validation must never touch the network, so the cases that
 * matter most are the ones a live run would only produce by luck: a blocked
 * request, a truncated download, a parser upgrade, a source that reformats a
 * date. Each scenario below states what it is and what the layer must conclude,
 * and the validator fails if any of them concludes something else.
 *
 * These carry their own contract rather than borrowing a registered one. A
 * contract in `FRESHNESS_CONTRACTS` describes a source the corpus really reads,
 * and the liveness check requires every one of them to be reached by real
 * snapshots; a fixture contract sitting in that list would be exactly the dead
 * vocabulary Wave 18 removed.
 */
export const FIXTURE_CONTRACT: FreshnessContract = {
  id: 'fixture-register',
  sourceId: 'fixture',
  label: 'Fixture register (tests only)',
  snapshotKind: 'registry',
  rowsField: 'rows',
  identityFields: ['registrationNumber'],
  semanticFields: ['name', 'status', 'officialUrl', 'decisionDate'],
  presentationFields: ['renderedHtmlClass'],
  placeholderValues: { decisionDate: ['1900-01-01'] },
  fieldChangeType: {
    name: 'nameChanged',
    status: 'statusChanged',
    officialUrl: 'urlChanged',
    decisionDate: 'dateChanged',
  },
  completeness: {
    partitionField: 'jurisdiction',
    maxRemovedFraction: 0.5,
    minRowCount: 3,
    why: 'Fixture rule, mirroring the shape of a real register contract.',
  },
  parserVersion: 'fixture@1',
  normalizationVersion: 'fixture@1',
};

type Row = Record<string, unknown>;

const row = (
  registrationNumber: string,
  name: string,
  status: string,
  extra: Row = {},
): Row => ({
  registrationNumber,
  name,
  status,
  officialUrl: `https://example.gov/${registrationNumber}`,
  decisionDate: '2026-01-15',
  jurisdiction: 'AAA',
  renderedHtmlClass: 'table-row',
  ...extra,
});

const BASE_ROWS: Row[] = [
  row('R-1', 'Alpha', 'authorized'),
  row('R-2', 'Beta', 'authorized'),
  row('R-3', 'Gamma', 'authorized'),
  row('R-4', 'Delta', 'authorized', { jurisdiction: 'BBB' }),
];

const snapshot = (
  id: string,
  rows: Row[],
  over: Partial<NormalizedSnapshot> = {},
): NormalizedSnapshot => ({
  snapshotId: id,
  checksum: `sum-${id}`,
  byteLength: 1000,
  sourceReleaseId: '2026-01',
  parserVersion: 'fixture@1',
  normalizationVersion: 'fixture@1',
  rows,
  ...over,
});

export interface DiffScenario {
  id: string;
  what: string;
  from: NormalizedSnapshot;
  to: NormalizedSnapshot;
  expect: {
    /** Semantic changes, as `changeType` or `changeType:field`. */
    semantic: string[];
    candidateStatuses: ChangeCandidateStatus[];
    complete: boolean;
    checksumChanged?: boolean;
    presentationFieldsChanged?: string[];
  };
}

export const DIFF_SCENARIOS: DiffScenario[] = [
  {
    id: 'formatting-only',
    what: 'The source rewraps its markup. A CSS class is not an agricultural fact.',
    from: snapshot('f-a', BASE_ROWS),
    to: snapshot(
      'f-b',
      BASE_ROWS.map((r) => ({ ...r, renderedHtmlClass: 'table-row--v2' })),
      { checksum: 'sum-f-b' },
    ),
    expect: {
      semantic: [],
      candidateStatuses: [],
      complete: true,
      checksumChanged: true,
      presentationFieldsChanged: ['renderedHtmlClass'],
    },
  },
  {
    id: 'row-order-change',
    what: 'The source returns the same rows in a different order.',
    from: snapshot('o-a', BASE_ROWS),
    to: snapshot('o-b', [...BASE_ROWS].reverse(), { checksum: 'sum-o-b' }),
    expect: { semantic: [], candidateStatuses: [], complete: true },
  },
  {
    id: 'parser-version-change',
    what: 'AgricultureID changed how it reads the source. The source did not move.',
    from: snapshot('p-a', BASE_ROWS),
    to: snapshot(
      'p-b',
      BASE_ROWS.map((r) =>
        r.registrationNumber === 'R-2' ? { ...r, status: 'withdrawn' } : r,
      ),
      { parserVersion: 'fixture@2' },
    ),
    expect: {
      semantic: ['statusChanged:status'],
      candidateStatuses: ['parserArtifact'],
      complete: true,
    },
  },
  {
    id: 'status-transition',
    what: 'A registration was withdrawn. This is the change the layer exists for.',
    from: snapshot('s-a', BASE_ROWS),
    to: snapshot(
      's-b',
      BASE_ROWS.map((r) =>
        r.registrationNumber === 'R-2' ? { ...r, status: 'withdrawn' } : r,
      ),
      { checksum: 'sum-s-b' },
    ),
    expect: {
      semantic: ['statusChanged:status'],
      candidateStatuses: ['verified'],
      complete: true,
    },
  },
  {
    id: 'url-change',
    what: 'The register moved a record to a new official URL.',
    from: snapshot('u-a', BASE_ROWS),
    to: snapshot(
      'u-b',
      BASE_ROWS.map((r) =>
        r.registrationNumber === 'R-3'
          ? { ...r, officialUrl: 'https://example.gov/moved/R-3' }
          : r,
      ),
      { checksum: 'sum-u-b' },
    ),
    expect: {
      semantic: ['urlChanged:officialUrl'],
      candidateStatuses: ['verified'],
      complete: true,
    },
  },
  {
    id: 'true-deletion',
    what: 'A record really left a complete register.',
    from: snapshot('d-a', BASE_ROWS),
    to: snapshot(
      'd-b',
      BASE_ROWS.filter((r) => r.registrationNumber !== 'R-3'),
      { checksum: 'sum-d-b' },
    ),
    expect: {
      semantic: ['removed'],
      candidateStatuses: ['verified'],
      complete: true,
    },
  },
  {
    id: 'truncated-download',
    what: 'Half the register is missing. That is a failed download, not a purge.',
    from: snapshot('t-a', BASE_ROWS),
    to: snapshot('t-b', BASE_ROWS.slice(0, 2), { checksum: 'sum-t-b' }),
    expect: { semantic: [], candidateStatuses: [], complete: false },
  },
  {
    id: 'partition-lost',
    what: 'A whole jurisdiction stopped appearing. The capture lost rows; it did not witness deletions.',
    from: snapshot('j-a', BASE_ROWS),
    to: snapshot(
      'j-b',
      [
        ...BASE_ROWS.filter((r) => r.jurisdiction !== 'BBB'),
        row('R-5', 'Epsilon', 'authorized'),
        row('R-6', 'Zeta', 'authorized'),
      ],
      { checksum: 'sum-j-b' },
    ),
    expect: {
      semantic: ['added', 'added'],
      candidateStatuses: ['uncertain', 'uncertain'],
      complete: false,
    },
  },
  {
    id: 'addition',
    what: 'A new registration appeared in a complete register.',
    from: snapshot('a-a', BASE_ROWS),
    to: snapshot('a-b', [...BASE_ROWS, row('R-9', 'Omega', 'authorized')], {
      checksum: 'sum-a-b',
    }),
    expect: {
      semantic: ['added'],
      candidateStatuses: ['verified'],
      complete: true,
    },
  },
  {
    id: 'checksum-moved-meaning-did-not',
    what: 'The file was resaved. Bytes differ, nothing true differs.',
    from: snapshot('c-a', BASE_ROWS),
    to: snapshot('c-b', BASE_ROWS, { checksum: 'sum-c-b', byteLength: 1200 }),
    expect: {
      semantic: [],
      candidateStatuses: [],
      complete: true,
      checksumChanged: true,
    },
  },
  {
    id: 'meaning-moved-checksum-did-not',
    what: 'The normalised state changed while the checksum did not, which means the checksum does not cover what is compared.',
    from: snapshot('k-a', BASE_ROWS),
    to: snapshot(
      'k-b',
      BASE_ROWS.map((r) =>
        r.registrationNumber === 'R-1' ? { ...r, status: 'withdrawn' } : r,
      ),
      { checksum: 'sum-k-a' },
    ),
    expect: {
      semantic: ['statusChanged:status'],
      candidateStatuses: ['verified'],
      complete: true,
      checksumChanged: false,
    },
  },
  {
    id: 'placeholder-date-appears',
    what: 'The source writes its "no date" placeholder where it previously wrote nothing.',
    from: snapshot(
      'z-a',
      BASE_ROWS.map((r) => ({ ...r, decisionDate: null })),
    ),
    to: snapshot(
      'z-b',
      BASE_ROWS.map((r) => ({ ...r, decisionDate: '1900-01-01' })),
      { checksum: 'sum-z-b' },
    ),
    expect: { semantic: [], candidateStatuses: [], complete: true },
  },
  {
    id: 'punctuation-only-rename',
    what: 'A name gains an apostrophe. A transcription fix is not a rename.',
    from: snapshot('n-a', BASE_ROWS),
    to: snapshot(
      'n-b',
      BASE_ROWS.map((r) =>
        r.registrationNumber === 'R-1' ? { ...r, name: "'Alpha'" } : r,
      ),
      { checksum: 'sum-n-b' },
    ),
    expect: {
      semantic: ['nameChanged:name'],
      candidateStatuses: ['uncertain'],
      complete: true,
    },
  },
  {
    id: 'real-rename',
    what: 'A record really was renamed.',
    from: snapshot('r-a', BASE_ROWS),
    to: snapshot(
      'r-b',
      BASE_ROWS.map((r) =>
        r.registrationNumber === 'R-1' ? { ...r, name: 'Alphabet' } : r,
      ),
      { checksum: 'sum-r-b' },
    ),
    expect: {
      semantic: ['nameChanged:name'],
      candidateStatuses: ['verified'],
      complete: true,
    },
  },
];

/**
 * Descriptor-level fixtures: retrievals that must never become comparisons at
 * all. A 403 is a fact about a request, not about a register.
 */
export interface DescriptorScenario {
  id: string;
  what: string;
  descriptors: SourceSnapshotDescriptor[];
  /** Substring the validator's complaint must contain. */
  mustReject: string;
}

const okDescriptor = (
  over: Partial<SourceSnapshotDescriptor> = {},
): SourceSnapshotDescriptor => ({
  id: 'fx-1',
  sourceId: 'fixture',
  releaseLineId: 'fixture:register',
  snapshotKind: 'registry',
  retrievedAt: '2026-08-01',
  sourceReleaseId: '2026-07',
  checksum: 'sum-1',
  byteLength: 100,
  status: 'success',
  ...over,
});

export const DESCRIPTOR_SCENARIOS: DescriptorScenario[] = [
  {
    id: 'blocked-retrieval',
    what: 'The request was refused, yet the record carries a checksum as though the register had been read.',
    descriptors: [okDescriptor({ status: 'blocked' })],
    mustReject: 'did not observe the source',
  },
  {
    id: 'failed-retrieval',
    what: 'The retrieval failed outright, yet evidence was recorded for it.',
    descriptors: [
      okDescriptor({
        status: 'failed',
        payloadPath: 'data/snapshots/nothing.json',
      }),
    ],
    mustReject: 'did not observe the source',
  },
  {
    id: 'duplicate-snapshot',
    what: 'The same capture recorded twice.',
    descriptors: [okDescriptor(), okDescriptor()],
    mustReject: 'duplicate',
  },
  {
    id: 'future-retrieval',
    what: 'A capture dated after the corpus was verified.',
    descriptors: [okDescriptor({ retrievedAt: '2099-01-01' })],
    mustReject: 'in the future',
  },
  {
    id: 'release-regression',
    what: 'A later retrieval carries an earlier release than the one before it.',
    descriptors: [
      okDescriptor({
        id: 'fx-1',
        retrievedAt: '2026-08-01',
        sourceReleaseId: '2026-07',
      }),
      okDescriptor({
        id: 'fx-2',
        retrievedAt: '2026-08-02',
        sourceReleaseId: '2026-05',
      }),
    ],
    mustReject: 'earlier release',
  },
];

export const ALL_CHANGE_TYPES_EXERCISED: ChangeType[] = [
  'added',
  'removed',
  'statusChanged',
  'nameChanged',
  'urlChanged',
  'dateChanged',
  'sourceValueChanged',
];
