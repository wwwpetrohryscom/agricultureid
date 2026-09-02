/**
 * Advisory report on crop corpus integrity. Offline, never blocking.
 *
 * Written for an editor asking "what is still shared between pages, and is any
 * of it a problem" — so it leads with the actual shared text rather than a
 * score.
 */
import {
  STANDING_PHRASES,
  articlesContaining,
  cropArticleCount,
} from '../lib/crops/editorial-boilerplate';
import {
  RESOLVED_SIMILAR_PAIRS,
  REVIEWED_PAIRS,
  REVIEWED_PAIR_KEY,
} from '../data/crop-identity/similar-pairs';
import { SCOPE_DECISIONS } from '../data/crop-identity/scope-decisions';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { articleText, flaggedPairs } from '../lib/crops/content-depth';

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const total = cropArticleCount();

console.log('\nCrop corpus integrity report\n');

console.log('  Standing language — what the corpus repeats on purpose');
for (const p of STANDING_PHRASES) {
  const n = articlesContaining(p.phrase);
  console.log(
    `    ${String(n).padStart(4)}/${total}  ${((n / total) * 100).toFixed(0).padStart(3)}%  ${p.phrase.slice(0, 62)}`,
  );
}
console.log(
  '\n    These are excluded before two articles are compared. A phrase only\n' +
    '    qualifies if it is genuinely corpus-wide, which is what stops copied\n' +
    '    prose being laundered as policy.',
);

console.log('\n  Still flagged, and why that is correct');
{
  const flagged = flaggedPairs(crops);
  if (!flagged.length) console.log('    none');
  for (const p of flagged) {
    const rec = REVIEWED_PAIRS.get(REVIEWED_PAIR_KEY(p.a, p.b));
    console.log(
      `\n    ${p.a} / ${p.b}  —  ${(p.overlap * 100).toFixed(1)}% overlap, ${p.longestRun} identical words`,
    );
    console.log(`      verdict: ${rec?.verdict ?? 'UNREVIEWED'}`);
    console.log(`      shared:  "${(p.longestRunText ?? '').slice(0, 120)}…"`);
  }
}

console.log('\n  Rewritten, and holding');
for (const r of RESOLVED_SIMILAR_PAIRS)
  console.log(
    `    ${`${r.a} / ${r.b}`.padEnd(26)}${String(r.runBefore).padStart(3)}w → below the line`,
  );

console.log('\n  Numeric surface');
{
  const re =
    /[^.]*?\b\d[\d.,]*\s?(?:%|per cent|percent|°C|°F|mm|cm|kg|t\/ha|tonnes|ppm)[^.]*\./g;
  let prose = 0;
  for (const c of crops) prose += [...articleText(c).matchAll(re)].length;
  let facts = 0;
  for (const c of crops)
    for (const f of (c as unknown as { keyFacts?: { value: string }[] })
      .keyFacts ?? [])
      if (/\d/.test(String(f.value))) facts++;
  console.log(`    quantitative claims in prose:     ${prose}`);
  console.log(`    numbers in structured key facts:  ${facts}`);
  console.log(
    '\n    A number in prose is the factual claim most likely to go stale and\n' +
      '    hardest to check. The corpus keeps them out of prose by policy, so\n' +
      '    the whole falsifiable numeric surface is the key-fact list above.',
  );
}

console.log('\n  Scope decisions');
for (const d of SCOPE_DECISIONS)
  console.log(`    ${d.slug.padEnd(12)}${d.outcome.padEnd(30)}${d.decidedAt}`);
console.log();
