/**
 * Search benchmark report (Phase 3D, expanded 4E). Measures top-1, top-3,
 * false-positive, and unsafe-equivalence rates. Deterministic.
 * Run: npm run search:benchmark
 */
import { runBenchmark, benchmarkSummary } from '../lib/search/benchmark';

function main() {
  const results = runBenchmark();
  const s = benchmarkSummary();
  console.log('\nAgricultureID — search benchmark\n');
  for (const r of results) {
    const cls = r.falsePositive
      ? r.unsafeEquivalence
        ? 'UNSAFE-EQUIV'
        : 'FALSE-POS'
      : r.top1
        ? 'TOP-1'
        : r.top3
          ? 'TOP-3'
          : 'MISS';
    console.log(
      `  ${r.query.padEnd(30)} → ${`${r.topTitle} [${r.topType}]`.padEnd(40)} ${cls}`,
    );
  }
  console.log(
    `\n  ${s.total} cases · TOP-1 ${(s.top1Rate * 100).toFixed(1)}% · TOP-3 ${(s.top3Rate * 100).toFixed(1)}% · false-positives ${s.falsePositives} · unsafe-equivalences ${s.unsafeEquivalences}\n`,
  );
  if (s.failures.length > 0) {
    console.log(`  ${s.failures.length} failing case(s):`);
    for (const f of s.failures) console.log(`    - ${f.query} → ${f.topTitle}`);
    process.exit(1);
  }
}

main();
