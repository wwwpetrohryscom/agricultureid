/**
 * Advisory report on crop profile qualification. Offline, never blocking.
 *
 * Written for an editor deciding what to write next, so it leads with the queue
 * and the reasons, not with totals.
 */
import {
  PROMOTION_TIERS,
  PROMOTION_TIER_MEANING,
  QUALIFICATION_STATUSES,
} from '../types/crop-qualification';
import { allQualifications, promotionQueue } from '../lib/crops/qualification';
import { PROMOTION_NOTES } from '../data/crop-identity/promotion-notes';
import {
  DEPTH_REQUIREMENTS,
  SIMILARITY_REVIEW_THRESHOLD,
  flaggedPairs,
} from '../lib/crops/content-depth';
import {
  REVIEWED_PAIRS,
  REVIEWED_PAIR_KEY,
} from '../data/crop-identity/similar-pairs';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const Q = allQualifications();
const cropArticles = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');

console.log('\nCrop profile qualification report\n');
console.log(`  Identities evaluated:  ${Q.length}`);
for (const s of QUALIFICATION_STATUSES) {
  const n = Q.filter((q) => q.status === s).length;
  console.log(`    ${s.padEnd(24)}${String(n).padStart(4)}`);
}

console.log('\n  What a published article has to carry');
for (const [k, v] of Object.entries(DEPTH_REQUIREMENTS))
  console.log(`    ${k.padEnd(28)}${v}`);
console.log(
  '\n    Set at, not above, what the weakest existing article already manages,\n' +
    '    so the gate describes the standard the corpus holds rather than one\n' +
    '    nothing meets.',
);

console.log('\n  Promotion queue');
for (const tier of PROMOTION_TIERS) {
  const items = promotionQueue().filter((q) => q.promotionTier === tier);
  if (!items.length) continue;
  console.log(`\n    ${tier} — ${items.length}`);
  console.log(`    ${PROMOTION_TIER_MEANING[tier]}`);
  for (const q of items.slice(0, 12)) {
    const note = PROMOTION_NOTES.find((n) => n.slug === q.slug);
    console.log(`      ${q.primaryName}${note ? '' : ''}`);
    if (note) console.log(`        ${note.reason}`);
  }
  if (items.length > 12) console.log(`      … and ${items.length - 12} more`);
}

console.log('\n  Cross-layer coverage across published profiles');
{
  const published = Q.filter((q) => q.status === 'FULL_PROFILE_ELIGIBLE');
  const dims = Object.keys(published[0]?.enrichment ?? {});
  for (const d of dims) {
    const c = published.map(
      (q) =>
        (q.enrichment as unknown as Record<string, { result: string }>)[d]!,
    );
    const avail = c.filter((x) => x.result === 'available').length;
    const partial = c.filter((x) => x.result === 'partial').length;
    const notModelled = c.filter((x) => x.result === 'not-modelled').length;
    console.log(
      `    ${d.padEnd(22)}${notModelled === published.length ? 'not modelled for crops' : `${String(avail + partial).padStart(4)} of ${published.length}`}`,
    );
  }
}

console.log('\n  Reused prose between published articles');
{
  const flagged = flaggedPairs(cropArticles);
  console.log(
    `    Threshold ${SIMILARITY_REVIEW_THRESHOLD} five-word-shingle overlap, names removed.`,
  );
  console.log(`    ${flagged.length} pair(s) above it:\n`);
  console.log(
    `      ${'pair'.padEnd(30)}${'overlap'.padStart(8)}${'identical run'.padStart(15)}`,
  );
  for (const p of flagged) {
    const rec = REVIEWED_PAIRS.get(REVIEWED_PAIR_KEY(p.a, p.b));
    console.log(
      `      ${`${p.a} / ${p.b}`.padEnd(30)}${`${(p.overlap * 100).toFixed(1)}%`.padStart(8)}${`${p.longestRun} words`.padStart(15)}   ${rec?.verdict ?? 'UNREVIEWED'}`,
    );
  }
  const worst = flagged[0];
  if (worst)
    console.log(
      `\n    Longest shared passage (${worst.a} / ${worst.b}):\n      "${worst.longestRunText?.slice(0, 150)}…"`,
    );
  console.log(
    '\n    Every pair above the line is a closely related crop, and the easy\n' +
      '    reading is that adjacent crops share agronomic vocabulary. They do\n' +
      '    not: all ' +
      flagged.length +
      ' pairs share an unbroken identical run of ' +
      Math.min(...flagged.map((p) => p.longestRun)) +
      '–' +
      Math.max(...flagged.map((p) => p.longestRun)) +
      '\n    words. This is reused prose, recorded as debt in\n' +
      '    data/crop-identity/similar-pairs.ts. Flagged for a human to rewrite,\n' +
      '    never for deletion.',
  );
}

console.log('\n  Most common missing evidence, across data-only crops');
{
  const m = new Map<string, number>();
  for (const q of Q.filter((x) => x.status !== 'FULL_PROFILE_ELIGIBLE'))
    for (const e of q.missingEvidence) m.set(e, (m.get(e) ?? 0) + 1);
  for (const [k, v] of [...m].sort((a, b) => b[1] - a[1]).slice(0, 12))
    console.log(`    ${k.padEnd(24)}${String(v).padStart(4)}`);
}
console.log();
