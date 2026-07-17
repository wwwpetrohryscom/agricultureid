/**
 * Search benchmark report (Phase 3D, expanded 4E, expanded again in 5F §7).
 *
 * Reports relevance (top-1/top-3/false-positives/unsafe-equivalences) AND the
 * §7 diagnostics that say *why* a result ranked: expected-type accuracy,
 * exact-vs-fuzzy ranking, fuzzy false positives, unsafe synonym expansions, and
 * graph-derived association false positives — broken down by case kind.
 *
 * Pass/fail alone cannot distinguish a right answer for the right reason from a
 * right answer by accident, so it is not reported alone.
 *
 * Deterministic. Run: npm run search:benchmark
 */
import { runBenchmark, benchmarkSummary } from '../lib/search/benchmark';

const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

function main() {
  const results = runBenchmark();
  const s = benchmarkSummary();

  console.log('\nAgricultureID — search benchmark\n');
  for (const r of results) {
    const cls = r.knownIssue
      ? 'KNOWN-ISSUE'
      : r.falsePositive
        ? r.unsafeEquivalence
          ? 'UNSAFE-EQUIV'
          : 'FALSE-POS'
        : r.top1
          ? 'TOP-1'
          : r.top3
            ? 'TOP-3'
            : 'MISS';
    // Type column: ✓/✗ only where the case declares an expected type.
    const type = !r.typeExpected ? ' ' : r.typeCorrect ? '✓' : '✗';
    console.log(
      `  ${r.query.padEnd(30)} → ${`${r.topTitle} [${r.topType}]`.padEnd(46)} ${cls.padEnd(12)} type:${type} via:${r.matchClass}`,
    );
  }

  console.log(`\n  ── Relevance (${s.total} regression cases) ──`);
  console.log(`  TOP-1                        ${pct(s.top1Rate)}`);
  console.log(`  TOP-3                        ${pct(s.top3Rate)}`);
  console.log(`  false positives              ${s.falsePositives}`);
  console.log(`  unsafe equivalences          ${s.unsafeEquivalences}`);

  console.log(`\n  ── Why it ranked ──`);
  console.log(
    `  expected-type accuracy       ${pct(s.typeAccuracy)}  (over ${s.typeExpectedCount} cases declaring a type)`,
  );
  const m = s.matchClasses;
  console.log(
    `  top-hit match class          exact ${m.exact} · synonym ${m.synonym} · prefix ${m.prefix} · typo ${m.typo} · none ${m.none}`,
  );
  // Diagnostics span every case, defects included — that is where they inform.
  console.log(`  ── Diagnostics (all ${s.totalCases} cases) ──`);
  console.log(`  fuzzy false positives        ${s.fuzzyFalsePositives}`);
  console.log(`  unsafe synonym expansions    ${s.unsafeSynonymExpansions}`);
  console.log(
    `  graph-derived assoc. FPs     ${s.graphDerivedFalsePositives}  (top hits ranking ONLY on a relation label: ${s.graphDerivedHits})`,
  );

  console.log(`\n  ── By kind ──`);
  console.log(
    `  ${'kind'.padEnd(20)} ${'n'.padStart(3)}  ${'top-1'.padStart(6)}  ${'top-3'.padStart(6)}  ${'type'.padStart(6)}  fp`,
  );
  for (const k of s.byKind) {
    const type =
      k.typeExpected === 0
        ? '   —  '
        : pct(k.typeCorrect / k.typeExpected).padStart(6);
    console.log(
      `  ${k.kind.padEnd(20)} ${String(k.total).padStart(3)}  ${pct(k.top1 / k.total).padStart(6)}  ${pct(k.top3 / k.total).padStart(6)}  ${type}  ${k.falsePositives}`,
    );
  }

  if (s.knownIssues.length > 0) {
    console.log(
      `\n  ── ${s.knownIssues.length} KNOWN ISSUE(S) — engine defects, excluded from the rates above ──`,
    );
    console.log(
      `  These expectations state the CORRECT answer. They are not relaxed to match`,
    );
    console.log(
      `  the observed behaviour; relaxing them would delete the finding.\n`,
    );
    for (const k of s.knownIssues) {
      console.log(`  ✗ ${k.query}`);
      console.log(`      returns: ${k.topTitle} [${k.topType}]`);
      console.log(
        `      matched fields: ${k.topMatchedFields.join(', ') || '(none)'}`,
      );
      console.log(`      ${k.knownIssue}`);
      console.log('');
    }
  }

  console.log(
    `  ${s.totalCases} cases total = ${s.total} regression + ${s.knownIssues.length} known issue(s)\n`,
  );

  if (s.failures.length > 0) {
    console.log(`  ${s.failures.length} failing case(s):`);
    for (const f of s.failures) console.log(`    - ${f.query} → ${f.topTitle}`);
    process.exit(1);
  }
}

main();
