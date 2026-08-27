/**
 * Print one registered comparison in full. Offline.
 *
 * Usage: npm run freshness:diff [-- <contractId>] [--verified] [--limit N]
 *
 * Deliberately a reading tool, not a gate: it shows the individual changes a
 * comparison produced so a person can review them before anything downstream
 * treats them as facts.
 */
import { runComparisons } from '../lib/freshness/registry';

const args = process.argv.slice(2);
const wanted = args.find((a) => !a.startsWith('--'));
const verifiedOnly = args.includes('--verified');
const limitArg = args.indexOf('--limit');
const limit = limitArg >= 0 ? Number(args[limitArg + 1]) : 40;

const results = runComparisons().filter(
  (r) => !wanted || r.contract.id === wanted,
);
if (!results.length) {
  console.error(`No registered comparison matches "${wanted}".`);
  process.exit(1);
}

for (const r of results) {
  console.log(`\n${r.contract.label}`);
  console.log(`${r.source.fromSnapshotId} → ${r.source.toSnapshotId}\n`);

  const rows = r.candidates.filter(
    (c) => !verifiedOnly || c.status === 'verified',
  );
  console.log(
    `${rows.length} candidate(s)${verifiedOnly ? ' (verified only)' : ''}, showing up to ${limit}\n`,
  );
  for (const c of rows.slice(0, limit)) {
    const value =
      c.field !== undefined
        ? ` ${c.field}: ${JSON.stringify(c.from)} → ${JSON.stringify(c.to)}`
        : '';
    console.log(
      `  [${c.status}] ${c.changeType.padEnd(18)} ${c.entityKey}${value}`,
    );
    if (c.reason) console.log(`      ${c.reason}`);
  }
  if (rows.length > limit)
    console.log(`\n  … ${rows.length - limit} more not shown (--limit N).`);
}
console.log('');
