/**
 * Advisory report on source freshness. Offline, never blocking.
 *
 * Its job is to say what the gate cannot judge: how much of the corpus is
 * comparable at all, how far apart a source's representation and its meaning
 * moved, and which differences were refused and why.
 */
import { SOURCE_SNAPSHOTS } from '../data/freshness';
import {
  FRESHNESS_CONTRACTS,
  SNAPSHOT_COMPARISONS,
} from '../lib/freshness/contracts';
import { runComparisons } from '../lib/freshness/registry';
import {
  DIFF_SCENARIOS,
  DESCRIPTOR_SCENARIOS,
} from '../data/freshness/fixtures';

console.log('\nSource freshness report\n');

const byLine = new Map<string, typeof SOURCE_SNAPSHOTS>();
for (const s of SOURCE_SNAPSHOTS)
  byLine.set(s.releaseLineId, [...(byLine.get(s.releaseLineId) ?? []), s]);
const comparable = [...byLine.values()].filter((v) => v.length > 1).length;

console.log(`  Source captures:          ${SOURCE_SNAPSHOTS.length}`);
console.log(`  Release lines:            ${byLine.size}`);
console.log(`    …held at 2+ releases:   ${comparable}`);
console.log(`  Contracts:                ${FRESHNESS_CONTRACTS.length}`);
console.log(`  Registered comparisons:   ${SNAPSHOT_COMPARISONS.length}`);
console.log(
  `  Fixture scenarios:        ${DIFF_SCENARIOS.length} diff · ${DESCRIPTOR_SCENARIOS.length} descriptor`,
);

console.log('\n  Why only one line is comparable');
console.log(
  '    Twenty-seven of the twenty-eight captures are of sources that publish\n' +
    '    current state only: FAOSTAT, the World Bank, PMRA, APVMA, EPHY and the\n' +
    '    EU pesticides database each serve one version, and an earlier one\n' +
    '    cannot be fetched after the fact. The UK Seeds Gazette retains its\n' +
    '    monthly editions, so it is the only source here that can be compared\n' +
    '    with its own past. The rest become comparable at their NEXT retrieval,\n' +
    '    not before, and nothing pretends otherwise.',
);

console.log('\n  Captures by kind');
const kinds = new Map<string, number>();
for (const s of SOURCE_SNAPSHOTS)
  kinds.set(s.snapshotKind, (kinds.get(s.snapshotKind) ?? 0) + 1);
for (const [k, n] of [...kinds].sort())
  console.log(`    ${k.padEnd(20)} ${String(n).padStart(3)}`);

for (const r of runComparisons()) {
  console.log(`\n  ${r.contract.label}`);
  console.log(`    ${r.source.fromSnapshotId}\n    → ${r.source.toSnapshotId}`);

  console.log('\n    How the source moved');
  console.log(
    `      checksum ${r.source.checksumChanged ? 'changed' : 'unchanged'} · bytes ${
      r.source.byteLengthDelta === undefined
        ? 'n/a'
        : `${r.source.byteLengthDelta >= 0 ? '+' : ''}${r.source.byteLengthDelta}`
    } · rows ${r.source.rowCountDelta >= 0 ? '+' : ''}${r.source.rowCountDelta}`,
  );
  console.log(
    `      release ${r.source.releaseChanged ? 'changed' : 'same'} · parser ${r.source.parserChanged ? 'CHANGED' : 'same'} · normalisation ${r.source.normalizationChanged ? 'CHANGED' : 'same'}`,
  );
  for (const n of r.source.notes) console.log(`      ! ${n}`);

  console.log('\n    How much of that was meaning');
  console.log(
    `      ${r.semantic.added.length} added · ${r.semantic.removed.length} removed · ${r.semantic.changed.length} changed`,
  );
  console.log(
    `      capture complete: ${r.semantic.completeness.complete} (${r.semantic.completeness.fromRowCount} → ${r.semantic.completeness.toRowCount} rows)`,
  );
  for (const reason of r.semantic.completeness.reasons)
    console.log(`      ! ${reason}`);
  if (r.semantic.collidingKeys.length)
    console.log(
      `      ! ${r.semantic.collidingKeys.length} identity key(s) the source reuses, excluded: ${r.semantic.collidingKeys.join(', ')}`,
    );

  const byStatus = new Map<string, number>();
  const byType = new Map<string, number>();
  for (const c of r.candidates) {
    byStatus.set(c.status, (byStatus.get(c.status) ?? 0) + 1);
    byType.set(c.changeType, (byType.get(c.changeType) ?? 0) + 1);
  }
  console.log('\n    Candidates');
  for (const [s, n] of [...byStatus].sort())
    console.log(`      ${s.padEnd(16)} ${String(n).padStart(4)}`);
  console.log('    By type');
  for (const [t, n] of [...byType].sort())
    console.log(`      ${t.padEnd(16)} ${String(n).padStart(4)}`);

  const refused = r.candidates.filter((c) => c.status !== 'verified');
  if (refused.length) {
    console.log('\n    Refused, and why');
    for (const c of refused)
      console.log(
        `      ${c.changeType}${c.field ? `/${c.field}` : ''} ${JSON.stringify(c.from)} → ${JSON.stringify(c.to)}\n        ${c.reason}`,
      );
  }
}

console.log('');
