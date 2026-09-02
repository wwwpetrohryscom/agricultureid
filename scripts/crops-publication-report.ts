/**
 * Wave 39 publication campaign report. Read-only, deterministic.
 *
 * Prints the decision for every crop the research campaign left ready, and the
 * two things a reader of that decision needs in order to disagree with it: the
 * claim the article was published for, and — where it was stopped — the
 * question that has to be answered first.
 *
 * Run: npm run crops:publication:report
 */
import { CROP_PUBLICATION_REVIEWS } from '../data/crop-publication';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const title = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => [
    c.slug,
    c.title,
  ]),
);

const byOutcome = new Map<string, typeof CROP_PUBLICATION_REVIEWS>();
for (const r of CROP_PUBLICATION_REVIEWS)
  byOutcome.set(r.outcome, [...(byOutcome.get(r.outcome) ?? []), r]);

console.log('\nAgricultureID — crop publication campaign (Wave 39)\n');
console.log(`  Decisions: ${CROP_PUBLICATION_REVIEWS.length}\n`);

for (const [outcome, rows] of [...byOutcome].sort()) {
  console.log(`  ── ${outcome} (${rows.length}) ──`);
  for (const r of rows) {
    console.log(`\n  ${(title.get(r.slug) ?? r.slug).padEnd(24)} ${r.slug}`);
    console.log(`    scope       ${r.scope.granularity}`);
    if (r.differentiator)
      console.log(
        `    published   because: ${r.differentiator.claim.slice(0, 150)}${r.differentiator.claim.length > 150 ? '…' : ''}`,
      );
    if (r.differentiator)
      console.log(`    not true of ${r.differentiator.falseFor}`);
    if (r.blockedReason) console.log(`    stopped     ${r.blockedReason}`);
    if (r.scope.collidesWith?.length)
      console.log(`    collides    ${r.scope.collidesWith.join(', ')}`);
    console.log(
      `    searches    ${r.searchReview.map((c) => `"${c.query}"`).join(', ')}`,
    );
  }
  console.log('');
}

const granularity = new Map<string, number>();
for (const r of CROP_PUBLICATION_REVIEWS)
  granularity.set(
    r.scope.granularity,
    (granularity.get(r.scope.granularity) ?? 0) + 1,
  );
console.log('  ── Declared scope granularity ──');
for (const [k, v] of [...granularity].sort())
  console.log(`  ${k.padEnd(26)}${v}`);
console.log('');
