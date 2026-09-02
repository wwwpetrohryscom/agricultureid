/**
 * Advisory report on crop hubs. Offline, never blocking.
 *
 * Leads with what was NOT published, because that is the substance: the corpus
 * offers 287 taxonomic slugs and this wave turned 5 of them into pages.
 */
import { CROP_HUBS, HUB_REFUSALS } from '../data/crop-hubs';
import { HUB_KINDS, HUB_REFUSAL_REASONS } from '../types/crop-hubs';
import { hubPath, membershipOf } from '../lib/crops/hubs';
import { CROP_IDENTITIES } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const families = new Set(CROP_IDENTITIES.map((c) => c.family));
const genera = new Set(CROP_IDENTITIES.map((c) => c.genus));

console.log('\nCrop knowledge hubs report\n');
console.log('  What was available, and what was published');
console.log(
  `    families in the corpus        ${String(families.size).padStart(4)}`,
);
console.log(
  `    genera in the corpus         ${String(genera.size).padStart(4)}`,
);
console.log(`    crop groups in the vocabulary  16`);
console.log(
  `    hubs published               ${String(CROP_HUBS.length).padStart(4)}`,
);
console.log(
  '\n    Generating a page per taxon would have added 287 routes. A taxon\n' +
    '    existing is not a reason to publish a page about it.',
);

for (const kind of HUB_KINDS) {
  const hs = CROP_HUBS.filter((h) => h.kind === kind);
  if (!hs.length) continue;
  console.log(`\n  ${kind} — ${hs.length}`);
  for (const h of hs) {
    const m = membershipOf(h);
    console.log(
      `    ${h.title.padEnd(34)}${String(m.published.length).padStart(3)} published${String(m.taxaOnly.length).padStart(5)} taxa   ${hubPath(h)}`,
    );
  }
}

console.log('\n  Evaluated and not published');
for (const reason of HUB_REFUSAL_REASONS) {
  const rows = HUB_REFUSALS.filter((r) => r.reason === reason);
  if (!rows.length) continue;
  console.log(`\n    ${reason} — ${rows.length}`);
  for (const r of rows)
    console.log(`      ${r.memberKey.padEnd(18)}${r.note.slice(0, 96)}`);
}

console.log('\n  Discovery');
{
  const covered = new Set<string>();
  for (const h of CROP_HUBS)
    for (const c of membershipOf(h).published) covered.add(c.slug);
  console.log(
    `    published crops reachable from a hub  ${covered.size} of ${publishedCrops.size}`,
  );
  const uncovered = CROP_IDENTITIES.filter(
    (c) => publishedCrops.has(c.cropPageSlug ?? c.slug) && !covered.has(c.slug),
  );
  const byGroup = new Map<string, number>();
  for (const c of uncovered)
    for (const g of c.cropGroups) byGroup.set(g, (byGroup.get(g) ?? 0) + 1);
  console.log('    crops in no hub, by group:');
  for (const [g, n] of [...byGroup].sort((a, b) => b[1] - a[1]))
    console.log(`      ${g.padEnd(24)}${String(n).padStart(3)}`);
  console.log(
    '\n    Those groups have no hub because the hub would have been thin, not\n' +
      '    because the crops are unimportant. Publishing one for each would be\n' +
      '    the permutation this wave refused.',
  );
}
console.log();
