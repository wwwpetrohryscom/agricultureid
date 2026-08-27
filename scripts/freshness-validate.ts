/**
 * Deterministic gate for the source-freshness layer. Offline by design.
 *
 * No network. Everything here runs against committed snapshots and committed
 * fixtures, because the cases that matter most — a blocked request, a truncated
 * download, a parser upgrade — are exactly the ones a live run would only
 * produce by luck.
 *
 * Three things are checked:
 *
 *   1. Capture identity. A retrieval that did not observe the source cannot be
 *      compared, a release cannot go backwards, and a capture cannot be dated
 *      in the future.
 *   2. Contracts. Every registered contract must be reached by real snapshots,
 *      and every comparison must name one. A source with no contract fails
 *      closed rather than being diffed by whatever default is in scope.
 *   3. The fixtures. Each scenario states what the layer must conclude, and the
 *      gate fails if it concludes anything else. This is the part that makes
 *      the distinction between a formatting change and a fact enforceable
 *      rather than merely intended.
 */
import { existsSync, readFileSync, statSync } from 'node:fs';
import {
  CHANGE_CANDIDATE_STATUSES,
  CHANGE_TYPES,
  SNAPSHOT_KINDS,
  SNAPSHOT_STATUSES,
} from '../types/freshness';
import {
  FRESHNESS_CONTRACTS,
  FRESHNESS_CONTRACT_MAP,
  SNAPSHOT_COMPARISONS,
} from '../lib/freshness/contracts';
import { diffSemantic, diffSource } from '../lib/freshness/diff';
import { toCandidates } from '../lib/freshness/candidates';
import { runComparisons } from '../lib/freshness/registry';
import { SOURCE_SNAPSHOTS } from '../data/freshness';
import {
  DESCRIPTOR_SCENARIOS,
  DIFF_SCENARIOS,
  FIXTURE_CONTRACT,
} from '../data/freshness/fixtures';
import { SOURCE_MAP } from '../lib/sources/registry';
import { REGISTRIES } from '../data/registries';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const REGISTRY_IDS = new Set(REGISTRIES.map((r) => r.id));

/** The corpus's verification date. A capture cannot postdate it. */
const CORPUS_DATE = '2026-08-27';

/* -- 1. capture identity -------------------------------------------------- */
export function validateDescriptors(
  descriptors: typeof SOURCE_SNAPSHOTS,
  report: (m: string) => void,
): void {
  const seen = new Set<string>();
  const latestByLine = new Map<string, { at: string; release: string }>();

  for (const d of [...descriptors].sort((a, b) =>
    a.retrievedAt.localeCompare(b.retrievedAt),
  )) {
    const at = d.id;
    if (seen.has(d.id)) report(`${at}: duplicate snapshot id`);
    seen.add(d.id);

    if (!SNAPSHOT_KINDS.includes(d.snapshotKind))
      report(`${at}: snapshotKind not in vocabulary`);
    if (!SNAPSHOT_STATUSES.includes(d.status))
      report(`${at}: status not in vocabulary`);
    if (!ISO.test(d.retrievedAt))
      report(`${at}: retrievedAt must be an ISO date`);
    else if (d.retrievedAt > CORPUS_DATE)
      report(
        `${at}: retrievedAt ${d.retrievedAt} is in the future relative to the corpus verification date ${CORPUS_DATE}`,
      );

    // A retrieval that did not observe the source has nothing to compare, and
    // must never carry evidence that implies it did.
    if (d.status !== 'success' && d.status !== 'not-modified') {
      if (d.checksum || d.payloadPath)
        report(
          `${at}: a "${d.status}" retrieval did not observe the source, so it cannot carry a checksum or a payload`,
        );
    } else if (d.payloadPath && !existsSync(d.payloadPath)) {
      report(`${at}: payloadPath "${d.payloadPath}" does not exist`);
    } else if (d.payloadPath && d.byteLength !== undefined) {
      const actual = statSync(d.payloadPath).size;
      if (actual !== d.byteLength)
        report(
          `${at}: byteLength ${d.byteLength} does not match the payload on disk (${actual})`,
        );
    }

    // A later retrieval carrying an earlier release means the source went
    // backwards, which is a source-identity problem, not a change. Compared
    // WITHIN a release line: FAOSTAT publishes production, prices and trade on
    // their own schedules, and one being older than another says nothing.
    if (!d.releaseLineId?.trim()) report(`${at}: no releaseLineId`);
    if (d.sourceReleaseId && d.releaseLineId) {
      const prev = latestByLine.get(d.releaseLineId);
      if (prev && d.sourceReleaseId < prev.release)
        report(
          `${at}: retrieved ${d.retrievedAt} but carries an earlier release (${d.sourceReleaseId}) than the capture of ${prev.at} (${prev.release}) on the same release line`,
        );
      if (!prev || d.retrievedAt >= prev.at)
        latestByLine.set(d.releaseLineId, {
          at: d.retrievedAt,
          release: d.sourceReleaseId,
        });
    }
  }
}

validateDescriptors(SOURCE_SNAPSHOTS, fail);

for (const d of SOURCE_SNAPSHOTS) {
  if (!SOURCE_MAP.has(d.sourceId))
    fail(`${d.id}: unknown source "${d.sourceId}"`);
}

/* -- 2. contracts, comparisons and liveness -------------------------------- */
const snapshotIds = new Set(SOURCE_SNAPSHOTS.map((s) => s.id));
const contractsReached = new Set<string>();

for (const c of SNAPSHOT_COMPARISONS) {
  const at = `${c.fromSnapshotId} → ${c.toSnapshotId}`;
  const contract = FRESHNESS_CONTRACT_MAP.get(c.contractId);
  if (!contract) {
    fail(`${at}: names unknown contract "${c.contractId}"`);
    continue;
  }
  contractsReached.add(contract.id);
  for (const id of [c.fromSnapshotId, c.toSnapshotId])
    if (!snapshotIds.has(id)) fail(`${at}: unknown snapshot "${id}"`);
  const from = SOURCE_SNAPSHOTS.find((s) => s.id === c.fromSnapshotId);
  const to = SOURCE_SNAPSHOTS.find((s) => s.id === c.toSnapshotId);
  if (from && to) {
    if (from.sourceId !== to.sourceId)
      fail(`${at}: compares two different sources`);
    if (from.releaseLineId !== to.releaseLineId)
      fail(`${at}: compares two different release lines`);
    // A retrieval that did not observe the source has nothing to contribute to
    // a comparison. 403 is a fact about a request, not about a register.
    for (const end of [from, to])
      if (end.status !== 'success' && end.status !== 'not-modified')
        fail(
          `${at}: snapshot "${end.id}" has status "${end.status}" and did not observe the source, so it cannot be an endpoint of a comparison`,
        );
    if (from.retrievedAt > to.retrievedAt)
      fail(`${at}: the earlier snapshot was retrieved after the later one`);
    if (from.id === to.id) fail(`${at}: compares a snapshot with itself`);
  }
}

for (const c of FRESHNESS_CONTRACTS) {
  if (!contractsReached.has(c.id))
    fail(
      `contract "${c.id}" is registered but no comparison uses it — a contract describing a source nothing reads is coverage that does not exist`,
    );
  if (!SOURCE_MAP.has(c.sourceId))
    fail(`contract "${c.id}": unknown source "${c.sourceId}"`);
  if (c.registryId && !REGISTRY_IDS.has(c.registryId))
    fail(`contract "${c.id}": unknown registry "${c.registryId}"`);
  if (!c.identityFields.length)
    fail(
      `contract "${c.id}": no identity fields, so no two rows are the same row`,
    );
  for (const f of c.semanticFields)
    if (!c.fieldChangeType[f])
      fail(
        `contract "${c.id}": semantic field "${f}" has no change type, so a difference in it would be reported generically`,
      );
  for (const f of Object.keys(c.fieldChangeType))
    if (!c.semanticFields.includes(f))
      fail(
        `contract "${c.id}": change type declared for non-semantic field "${f}"`,
      );
  for (const f of c.presentationFields)
    if (c.semanticFields.includes(f))
      fail(
        `contract "${c.id}": "${f}" is declared both semantic and presentation-only`,
      );
  for (const f of Object.keys(c.placeholderValues))
    if (![...c.semanticFields, ...c.presentationFields].includes(f))
      fail(`contract "${c.id}": placeholder declared for unknown field "${f}"`);
  // A placeholder rule nothing exercises is a rule nothing has tested, and one
  // that has been quietly applied upstream instead is worse: it looks live
  // while doing nothing, and deleting it changes published output silently.
  const covered = SNAPSHOT_COMPARISONS.filter(
    (x) => x.contractId === c.id,
  ).flatMap((x) => [x.fromSnapshotId, x.toSnapshotId]);
  for (const [field, values] of Object.entries(c.placeholderValues)) {
    const seen = new Set<string>();
    for (const id of covered) {
      const d = SOURCE_SNAPSHOTS.find((x) => x.id === id);
      if (!d?.payloadPath) continue;
      const raw = JSON.parse(readFileSync(d.payloadPath, 'utf8')) as Record<
        string,
        unknown
      >;
      for (const row of (raw[c.rowsField] as Record<string, unknown>[]) ?? [])
        if (values.includes(String(row[field]))) seen.add(String(row[field]));
    }
    for (const v of values)
      if (!seen.has(v))
        fail(
          `contract "${c.id}": placeholder "${v}" for "${field}" never occurs in the snapshots it covers, so the rule is not exercised by anything`,
        );
  }
}

/* -- 3. the fixtures ------------------------------------------------------- */
const label = (c: { changeType: string; field?: string }) =>
  c.field ? `${c.changeType}:${c.field}` : c.changeType;

for (const s of DIFF_SCENARIOS) {
  const src = diffSource(s.from, s.to, FIXTURE_CONTRACT);
  const sem = diffSemantic(s.from, s.to, FIXTURE_CONTRACT);
  const cands = toCandidates(sem, src, FIXTURE_CONTRACT);
  const at = `fixture "${s.id}"`;

  const got = [...sem.added, ...sem.removed, ...sem.changed].map(label).sort();
  const want = [...s.expect.semantic].sort();
  if (JSON.stringify(got) !== JSON.stringify(want))
    fail(
      `${at}: semantic changes ${JSON.stringify(got)}, expected ${JSON.stringify(want)}`,
    );

  const gotStatuses = cands.map((c) => c.status).sort();
  const wantStatuses = [...s.expect.candidateStatuses].sort();
  if (JSON.stringify(gotStatuses) !== JSON.stringify(wantStatuses))
    fail(
      `${at}: candidate statuses ${JSON.stringify(gotStatuses)}, expected ${JSON.stringify(wantStatuses)}`,
    );

  if (sem.completeness.complete !== s.expect.complete)
    fail(
      `${at}: completeness ${sem.completeness.complete}, expected ${s.expect.complete}`,
    );
  if (
    s.expect.checksumChanged !== undefined &&
    src.checksumChanged !== s.expect.checksumChanged
  )
    fail(
      `${at}: checksumChanged ${src.checksumChanged}, expected ${s.expect.checksumChanged}`,
    );
  if (s.expect.presentationFieldsChanged)
    if (
      JSON.stringify(src.presentationFieldsChanged) !==
      JSON.stringify(s.expect.presentationFieldsChanged)
    )
      fail(
        `${at}: presentation fields ${JSON.stringify(src.presentationFieldsChanged)}`,
      );

  // The rule the whole layer exists for: a presentation-only difference can
  // never produce anything downstream may treat as a fact.
  if (
    src.presentationFieldsChanged.length > 0 &&
    cands.some((c) => c.status === 'verified')
  )
    fail(`${at}: a presentation-only difference produced a verified change`);

  // And the checksum cross-check the diff itself cannot make.
  if (!src.checksumChanged && got.length > 0)
    console.log(
      `    ! ${at}: normalised state changed while the checksum did not — the checksum does not cover what is compared`,
    );
}

for (const s of DESCRIPTOR_SCENARIOS) {
  const found: string[] = [];
  validateDescriptors(s.descriptors, (m) => found.push(m));
  if (!found.some((m) => m.includes(s.mustReject)))
    fail(
      `descriptor fixture "${s.id}": expected a complaint containing "${s.mustReject}", got ${JSON.stringify(found)}`,
    );
}

/* -- the real comparisons still run ---------------------------------------- */
const results = runComparisons();
for (const c of SNAPSHOT_COMPARISONS) {
  const r = results.find(
    (x) =>
      x.semantic.fromSnapshotId === c.fromSnapshotId &&
      x.semantic.toSnapshotId === c.toSnapshotId,
  );
  if (!r) continue;
  const got = {
    added: r.semantic.added.length,
    removed: r.semantic.removed.length,
    changed: r.semantic.changed.length,
    verified: r.candidates.filter((x) => x.status === 'verified').length,
    uncertain: r.candidates.filter((x) => x.status === 'uncertain').length,
    collidingKeys: r.semantic.collidingKeys.length,
    complete: r.semantic.completeness.complete,
  };
  for (const k of Object.keys(c.expected) as (keyof typeof got)[])
    if (got[k] !== c.expected[k])
      fail(
        `${c.contractId} ${c.fromSnapshotId} → ${c.toSnapshotId}: ${k} is ${got[k]}, but the reviewed outcome recorded ${c.expected[k]}. A contract, a normalisation rule or the differ moved; the comparison needs reviewing again, not re-recording.`,
      );
}
for (const r of results) {
  for (const c of r.candidates) {
    if (!CHANGE_TYPES.includes(c.changeType))
      fail(`${c.id}: change type not in vocabulary`);
    if (!CHANGE_CANDIDATE_STATUSES.includes(c.status))
      fail(`${c.id}: candidate status not in vocabulary`);
    if (c.status !== 'verified' && !c.reason)
      fail(`${c.id}: status "${c.status}" without a reason`);
  }
  if (!r.semantic.completeness.complete && r.semantic.removed.length)
    fail(
      `${r.contract.id}: removals were reported from a capture that could not be shown complete`,
    );
  // A key the source reuses cannot carry a change in either direction.
  for (const c of r.candidates)
    if (r.semantic.collidingKeys.includes(c.entityKey))
      fail(
        `${c.id}: a candidate was produced for "${c.entityKey}", an identity the source reuses for more than one row`,
      );
}

/* -- report ---------------------------------------------------------------- */
console.log('\nSource freshness validation\n');
console.log(`  Source captures:          ${SOURCE_SNAPSHOTS.length}`);
console.log(
  `    …comparable sources:    ${new Set(SNAPSHOT_COMPARISONS.map((c) => c.contractId)).size} of ${new Set(SOURCE_SNAPSHOTS.map((s) => s.sourceId)).size} sources captured`,
);
console.log(`  Contracts:                ${FRESHNESS_CONTRACTS.length}`);
console.log(`  Comparisons:              ${SNAPSHOT_COMPARISONS.length}`);
console.log(
  `  Fixture scenarios:        ${DIFF_SCENARIOS.length} diff · ${DESCRIPTOR_SCENARIOS.length} descriptor`,
);
for (const r of results) {
  const v = r.candidates.filter((c) => c.status === 'verified').length;
  console.log(
    `\n  ${r.contract.label}\n    source diff:   checksum ${r.source.checksumChanged ? 'changed' : 'unchanged'}, rows ${r.source.rowCountDelta >= 0 ? '+' : ''}${r.source.rowCountDelta}, parser ${r.source.parserChanged ? 'CHANGED' : 'same'}`,
  );
  console.log(
    `    semantic diff: ${r.semantic.added.length} added · ${r.semantic.removed.length} removed · ${r.semantic.changed.length} changed · complete ${r.semantic.completeness.complete}`,
  );
  console.log(`    candidates:    ${r.candidates.length} (${v} verified)`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Source freshness validation passed.\n');
