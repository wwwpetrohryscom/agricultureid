/**
 * Advisory report on the crop identity layer. Offline, never blocking.
 *
 * The numbers worth watching are not how many taxa are held. They are how many
 * are published without a page, and where the authorities did not agree —
 * because both are measures of how honestly the layer is behaving.
 */
import {
  CROP_IDENTITIES,
  contestedIdentities,
  familyCounts,
  genusCount,
  groupCounts,
  dataOnlyIdentities,
} from '../lib/crops/identity';
import { CROP_GROUP_LABEL } from '../types/crop-identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';

const full = CROP_IDENTITIES.filter((c) => c.profileDepth === 'full-profile');
const dataOnly = dataOnlyIdentities();
const pages = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');

console.log('\nCrop identity report\n');
console.log(`  Verified identities:   ${CROP_IDENTITIES.length}`);
console.log(`    with an article:     ${full.length}`);
console.log(`    data-only:           ${dataOnly.length}`);
console.log(`  Crop pages published:  ${pages.length}`);
console.log(`  Pages awaiting an identity: ${pages.length - full.length}`);
console.log(`  Families:              ${familyCounts().length}`);
console.log(`  Genera:                ${genusCount()}`);

console.log('\n  Crop groups');
for (const { group, count } of groupCounts())
  console.log(
    `    ${CROP_GROUP_LABEL[group].padEnd(26)}${String(count).padStart(4)}`,
  );

console.log('\n  Families, largest first');
for (const { family, count } of familyCounts().slice(0, 12))
  console.log(`    ${family.padEnd(26)}${String(count).padStart(4)}`);

console.log('\n  Where the authorities did not simply agree');
if (contestedIdentities().length === 0) console.log('    none');
for (const c of contestedIdentities()) {
  console.log(`\n    ${c.primaryCommonName} (${c.slug}) — ${c.agreement}`);
  for (const a of c.authorities)
    console.log(`      ${a.sourceId.padEnd(34)}${a.acceptedName}`);
  console.log(`      published: ${c.acceptedScientificName}`);
}

console.log('\n  Names that are homonyms');
{
  const h = CROP_IDENTITIES.filter((c) =>
    (c.limitations ?? []).some((l) => l.includes('homonym')),
  );
  console.log(
    `    ${h.length} identities rest on a name that more than one published taxon carries:`,
  );
  for (const c of h)
    console.log(`      ${c.slug.padEnd(24)}${c.acceptedScientificName}`);
}

console.log('\n  Concepts that are not a single taxon');
for (const c of CROP_IDENTITIES.filter(
  (c) =>
    c.taxonRank === 'genus' ||
    c.taxonRank === 'species-complex' ||
    c.taxonRank === 'intergeneric-hybrid',
))
  console.log(
    `    ${c.slug.padEnd(16)}${c.taxonRank.padEnd(22)}${c.acceptedScientificName}`,
  );

console.log(
  '\n  Data-only taxa carry no page. A verified taxon is worth holding; a\n' +
    '  taxon plus a template is not worth publishing.\n',
);
