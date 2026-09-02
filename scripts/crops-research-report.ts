/**
 * Advisory report on the crop research campaign. Offline, never blocking.
 *
 * Written for whoever picks the queue up next, so it leads with what is ready
 * to write rather than with totals.
 */
import { CROP_RESEARCH } from '../data/crop-research';
import { RESEARCH_OUTCOMES, SIGNIFICANCE_KINDS } from '../types/crop-research';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';

const name = (s: string) => IDENTITY_BY_SLUG.get(s)?.primaryCommonName ?? s;

console.log('\nCrop research campaign report\n');
console.log(`  Candidates researched:   ${CROP_RESEARCH.length}`);
{
  const by = new Map<string, number>();
  for (const r of CROP_RESEARCH)
    by.set(r.outcome, (by.get(r.outcome) ?? 0) + 1);
  for (const o of RESEARCH_OUTCOMES)
    if (by.get(o)) {
      const n = by.get(o)!;
      const bar = '█'.repeat(Math.round((n / CROP_RESEARCH.length) * 40));
      console.log(`    ${o.padEnd(30)}${String(n).padStart(4)}  ${bar}`);
    }
}

console.log('\n  Written this wave');
for (const r of CROP_RESEARCH.filter(
  (x) => x.outcome === 'PROMOTE_FULL_PROFILE',
))
  console.log(
    `    ${name(r.slug).padEnd(18)}${r.cohort.padEnd(20)}${(r.sourceIds ?? []).join(', ')}`,
  );

console.log('\n  Ready to write, by cohort — the queue for whoever comes next');
{
  const ready = CROP_RESEARCH.filter(
    (r) => r.outcome === 'READY_BUT_DEFER_EDITORIAL',
  );
  const by = new Map<string, string[]>();
  for (const r of ready)
    by.set(r.cohort, [...(by.get(r.cohort) ?? []), name(r.slug)]);
  for (const [c, list] of [...by].sort((a, b) => b[1].length - a[1].length))
    console.log(
      `    ${c.padEnd(22)}${String(list.length).padStart(3)}  ${list.slice(0, 6).join(', ')}${list.length > 6 ? ', …' : ''}`,
    );
  console.log(
    `\n    ${ready.length} crops where the evidence exists and the writing does not.\n` +
      '    That is an editorial backlog, deliberately not filed as an evidence gap.',
  );
}

console.log('\n  Blocked on something other than evidence');
for (const o of ['AGRICULTURAL_CONCEPT_COMPLEX', 'TAXONOMY_COMPLEX'] as const) {
  const rows = CROP_RESEARCH.filter((r) => r.outcome === o);
  if (!rows.length) continue;
  console.log(`    ${o} — ${rows.length}`);
  for (const r of rows.slice(0, 8)) console.log(`      ${name(r.slug)}`);
  if (rows.length > 8) console.log(`      … and ${rows.length - 8} more`);
}

console.log('\n  Significance recorded across the queue');
{
  const by = new Map<string, number>();
  for (const r of CROP_RESEARCH)
    for (const s of r.significance) by.set(s, (by.get(s) ?? 0) + 1);
  for (const k of SIGNIFICANCE_KINDS)
    if (by.get(k))
      console.log(`    ${k.padEnd(26)}${String(by.get(k)).padStart(4)}`);
  console.log(
    '\n    Recorded as kinds rather than as a score. A crop can matter because it\n' +
      '    feeds a region that publishes no statistics, and a tonnage ranking\n' +
      '    would put it last.',
  );
}
console.log();
