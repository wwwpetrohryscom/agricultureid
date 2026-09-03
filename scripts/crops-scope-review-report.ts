/**
 * Wave 41 concept scope review report. Read-only, deterministic.
 *
 * Prints every complex candidate with its decision, the concept it sits under,
 * and what would change the answer. The unresolved ones are printed last and in
 * full, because they are what the wave found rather than what it tidied.
 *
 * Run: npm run crops:scope:report
 */
import { CROP_SCOPE_REVIEWS } from '../data/crop-scope-review';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';

console.log('\nAgricultureID — complex crop concept review (Wave 41)\n');

const byOutcome = new Map<string, typeof CROP_SCOPE_REVIEWS>();
for (const r of CROP_SCOPE_REVIEWS)
  byOutcome.set(r.outcome, [...(byOutcome.get(r.outcome) ?? []), r]);

const order = [...byOutcome.keys()].sort((a, b) =>
  a === 'DEFER_UNRESOLVED'
    ? 1
    : b === 'DEFER_UNRESOLVED'
      ? -1
      : a.localeCompare(b),
);

for (const outcome of order) {
  const rows = byOutcome.get(outcome)!;
  console.log(`\n  ── ${outcome} (${rows.length}) ──`);
  for (const r of rows) {
    const id = IDENTITY_BY_SLUG.get(r.slug);
    console.log(
      `\n  ${r.slug.padEnd(24)} ${id?.acceptedScientificName ?? ''}${r.conceptSlug ? `   under: ${r.conceptSlug}` : ''}`,
    );
    console.log(`    from       ${r.priorState}`);
    console.log(`    inspected  ${r.dimensionsInspected.join(', ')}`);
    console.log(`    finding    ${r.finding}`);
    console.log(`    changes if ${r.wouldChangeIf}`);
  }
}

console.log('\n\n  ── Concepts declared ──');
for (const k of CROP_CONCEPTS)
  console.log(
    `  ${k.slug.padEnd(18)} ${k.kind.padEnd(22)} ${k.constituents.length} constituent(s)   market: ${k.marketGranularity}`,
  );
console.log('');
