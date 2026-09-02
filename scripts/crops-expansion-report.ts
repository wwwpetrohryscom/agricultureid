/**
 * Wave 40 expansion campaign report. Read-only, deterministic.
 *
 * Shows what the composition audit found, what was published into each gap, and
 * — for every candidate that was not published — the reason it was left. A
 * campaign report that lists only what was added is a press release.
 *
 * Run: npm run crops:expansion:report
 */
import {
  COMPOSITION_GAPS,
  CROP_EXPANSION_CANDIDATES,
} from '../data/crop-expansion';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const title = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => [
    c.slug,
    c.title,
  ]),
);

console.log(
  '\nAgricultureID — regional and underrepresented crop expansion (Wave 40)\n',
);

console.log('  ── Composition gaps ──');
for (const g of COMPOSITION_GAPS) {
  console.log(
    `\n  ${g.dimension}/${g.bucket}   ${g.publishedBefore} → ${g.publishedAfter}`,
  );
  console.log(`    ${g.finding}`);
}

console.log('\n\n  ── Candidates ──');
const byRec = new Map<string, typeof CROP_EXPANSION_CANDIDATES>();
for (const c of CROP_EXPANSION_CANDIDATES)
  byRec.set(c.recommendation, [...(byRec.get(c.recommendation) ?? []), c]);
for (const [rec, rows] of [...byRec].sort()) {
  console.log(`\n  ${rec} (${rows.length})`);
  for (const c of rows) {
    console.log(
      `\n    ${(title.get(c.slug) ?? c.slug).padEnd(22)} ${IDENTITY_BY_SLUG.get(c.slug)?.acceptedScientificName ?? ''}`,
    );
    console.log(`      from        ${c.priorOutcome}`);
    for (const s of c.significance)
      console.log(
        `      ${s.region.padEnd(28)} ${s.statement.slice(0, 140)}${s.statement.length > 140 ? '…' : ''}`,
      );
    if (c.recommendation !== 'PUBLISH')
      console.log(`      not written  ${c.depthEvidence.slice(0, 160)}`);
  }
}

const regions = new Map<string, number>();
for (const c of CROP_EXPANSION_CANDIDATES)
  for (const s of c.significance)
    regions.set(s.region, (regions.get(s.region) ?? 0) + 1);
console.log('\n\n  ── Regional claims ──');
for (const [k, v] of [...regions].sort((a, b) => b[1] - a[1]))
  console.log(`  ${k.padEnd(30)}${v}`);
console.log('');
