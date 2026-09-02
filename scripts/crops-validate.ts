/**
 * Deterministic gate for the crop identity layer. Offline.
 *
 * The failures it exists to prevent are the ones that put a wrong plant behind
 * a right-looking name:
 *
 *   a cultivar published as a crop, or a commodity, or a market class
 *   a taxonomic synonym published as an accepted name
 *   two crops asserting the same taxon
 *   a hybrid stripped of the mark that says it is one
 *   an infraspecific name with no species above it
 *   a genus that does not match the name it is the genus of
 *   an identity resting on no authority at all
 *   a data-only taxon given a page
 *   a page with no identity behind it
 */
import {
  AGREEMENT_STATES,
  AGRICULTURAL_USES,
  CROP_GROUPS,
  GROWTH_HABITS,
  HARVESTED_PARTS,
  INFRASPECIFIC_RANKS,
  LIFE_CYCLES,
  MULTI_TAXON_RANKS,
  NAME_STATUSES,
  PROFILE_DEPTHS,
  TAXON_RANKS,
} from '../types/crop-identity';
import {
  CROP_IDENTITIES,
  contestedIdentities,
  familyCounts,
  genusCount,
  groupCounts,
} from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { allRoutes } from '../lib/seo/routes';
import { GENUS_FAMILY, MARKET_CLASS_NAMES } from '../lib/crops/genus-family';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const cropPages = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const cropSlugs = new Set(cropPages.map((c) => c.slug));
const cultivarSlugs = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map(
    (c) => c.slug,
  ),
);
const cultivarTitles = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map((c) =>
    c.title.toLowerCase(),
  ),
);
const commoditySlugs = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').map(
    (c) => c.slug,
  ),
);
const routePaths = new Set(allRoutes().map((r) => r.path));
/**
 * Names the corpus already publishes as a market class or a grade.
 *
 * A crop concept and a market class are different things — "Hard Red Winter" is
 * a wheat class, not a taxon — and the corpus holds both, so the collision can
 * be checked rather than guessed at.
 */
const marketClassNames = new Set([
  ...MARKET_CLASS_NAMES,
  ...PUBLISHED_CONTENT.filter(
    (c) =>
      c.contentType === 'commodity-grade' ||
      c.contentType === 'market-term' ||
      c.contentType === 'quality-attribute',
  ).map((c) => c.title.toLowerCase()),
]);

/** Compare two botanical names ignoring hybrid spelling and rank connectors. */
function taxonKey(n: string): string {
  return n
    .toLowerCase()
    .replace(/×/g, '')
    .replace(/\bx\b/g, '')
    .replace(/\b(subsp\.|ssp\.|var\.|convar\.|f\.|nothosubsp\.)\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Species any authority named in this corpus.
 *
 * A cultivar group's parent must be one of these. Taking the parent on trust
 * would let a group hang under a species nobody ever checked.
 */
const verifiedParents = new Set<string>();
for (const c of CROP_IDENTITIES) {
  verifiedParents.add(taxonKey(c.acceptedScientificName));
  if (c.parentSpecies) verifiedParents.add(taxonKey(c.parentSpecies));
  for (const a of c.authorities ?? [])
    verifiedParents.add(taxonKey(a.acceptedName));
}

const ids = new Set<string>();
const slugs = new Set<string>();
const byTaxon = new Map<string, string[]>();

for (const c of CROP_IDENTITIES) {
  const at = `crop identity "${c.slug}"`;

  /* -- identity ---------------------------------------------------------- */
  if (ids.has(c.id)) fail(`${at}: duplicate id "${c.id}"`);
  ids.add(c.id);
  if (slugs.has(c.slug)) fail(`${at}: duplicate slug`);
  slugs.add(c.slug);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(c.slug))
    fail(`${at}: slug is not lowercase kebab-case`);
  if (!c.primaryCommonName?.trim()) fail(`${at}: no common name`);

  /* -- the name ----------------------------------------------------------- */
  if (!c.acceptedScientificName?.trim())
    fail(`${at}: no accepted scientific name`);
  if (!TAXON_RANKS.includes(c.taxonRank))
    fail(`${at}: taxon rank "${c.taxonRank}" is not in the vocabulary`);
  if (!c.genus?.trim()) fail(`${at}: no genus`);
  if (!c.family?.trim()) fail(`${at}: no family`);
  // A family is one word. The corpus's free-text `botanicalFamily` drifted to
  // "Amaranthaceae (formerly Chenopodiaceae)" and "Anacardiaceae (cashew
  // family)", which made one family look like several.
  else if (!/^[A-Z][a-z]+$/.test(c.family))
    fail(`${at}: family "${c.family}" is not a bare family name`);

  // The family must be the one the authorities reported for this genus.
  //
  // Without this, changing a cereal's family from Poaceae to Fabaceae produced
  // a record that was well-formed, plausibly spelled and completely wrong, and
  // every structural rule in this gate passed it. The pin fails closed: a genus
  // with no recorded family is an error, not a pass.
  const pinnedFamily = GENUS_FAMILY[c.genus.replace(/×/g, '').trim()];
  if (!pinnedFamily)
    fail(
      `${at}: genus "${c.genus}" has no recorded family, so nothing checks the family "${c.family}"`,
    );
  else if (pinnedFamily !== c.family)
    fail(
      `${at}: family "${c.family}", but the authorities place ${c.genus} in ${pinnedFamily}`,
    );

  // The genus must be the first word of the name it claims to be the genus of.
  const first = c.acceptedScientificName.trim().split(/\s+/)[0]!;
  if (taxonKey(first) !== taxonKey(c.genus))
    fail(
      `${at}: genus "${c.genus}" is not the genus of "${c.acceptedScientificName}"`,
    );

  // A hybrid must carry the mark that says so, and a name carrying the mark
  // must be recorded as a hybrid. Stripping × turns an interspecific hybrid
  // into a claim about one parent species.
  const marked = /×/.test(c.acceptedScientificName);
  const hybridRank =
    c.taxonRank === 'hybrid' ||
    c.taxonRank === 'intergeneric-hybrid' ||
    c.taxonRank === 'nothosubspecies';
  // A cultivar group of a hybrid species inherits the parent's mark: "Citrus ×
  // aurantium Sweet Orange Group" is a selection FROM a hybrid, not itself a
  // new cross. The mark must then be the parent's, not one the group invented.
  const inheritedMark =
    c.taxonRank === 'cultivar-group' &&
    Boolean(c.parentSpecies && /×/.test(c.parentSpecies));
  if (marked !== hybridRank && !inheritedMark)
    fail(
      `${at}: "${c.acceptedScientificName}" ${marked ? 'carries a hybrid mark' : 'carries no hybrid mark'} but its rank is "${c.taxonRank}"`,
    );
  if (inheritedMark && !marked)
    fail(
      `${at}: a cultivar group of the hybrid "${c.parentSpecies}" has lost the hybrid mark`,
    );

  // An infraspecific name sits under a species, and the species must be named.
  if (INFRASPECIFIC_RANKS.includes(c.taxonRank)) {
    const words = c.acceptedScientificName
      .split(/\s+/)
      .filter((w) => w !== '×');
    if (words.length < 3 && c.taxonRank !== 'cultivar-group')
      fail(
        `${at}: rank "${c.taxonRank}" but "${c.acceptedScientificName}" is a binomial`,
      );
  }
  // An infraspecific taxon must name the species it sits under, and that
  // species must itself be a name an authority gave — a cultivar group whose
  // parent nobody verified is a group of nothing.
  if (INFRASPECIFIC_RANKS.includes(c.taxonRank)) {
    if (!c.parentSpecies?.trim())
      fail(`${at}: rank "${c.taxonRank}" but no parent species is named`);
    else {
      if (!c.acceptedScientificName.startsWith(c.parentSpecies))
        fail(
          `${at}: "${c.acceptedScientificName}" is not a form of its stated parent "${c.parentSpecies}"`,
        );
      const parentWords = c.parentSpecies
        .trim()
        .split(/\s+/)
        .filter((w) => w !== '×');
      if (parentWords.length !== 2)
        fail(`${at}: parent species "${c.parentSpecies}" is not a binomial`);
      if (!verifiedParents.has(taxonKey(c.parentSpecies)))
        fail(
          `${at}: parent species "${c.parentSpecies}" is not a name any authority recorded in this corpus`,
        );
    }
  }
  if (MULTI_TAXON_RANKS.includes(c.taxonRank)) {
    if (!c.limitations?.length)
      fail(
        `${at}: rank "${c.taxonRank}" names more than one taxon and records no limitation saying so`,
      );
    if (!c.agreementNote?.trim())
      fail(`${at}: a multi-taxon concept must explain what it covers`);
  }

  /* -- synonyms are never silently promoted -------------------------------- */
  for (const s of c.synonyms ?? []) {
    if (!s.name?.trim()) fail(`${at}: a synonym with no name`);
    if (!s.note?.trim())
      fail(`${at}: synonym "${s.name}" gives no reason for being kept`);
    if (taxonKey(s.name) === taxonKey(c.acceptedScientificName))
      fail(`${at}: synonym "${s.name}" is the accepted name`);
    if (s.sourceId && !SOURCE_MAP.has(s.sourceId))
      fail(`${at}: synonym "${s.name}" names an unknown source`);
  }

  /* -- authorities --------------------------------------------------------- */
  if (!AGREEMENT_STATES.includes(c.agreement))
    fail(`${at}: agreement state not in the vocabulary`);
  if (!c.authorities?.length) fail(`${at}: rests on no authority`);
  for (const a of c.authorities ?? []) {
    if (!SOURCE_MAP.has(a.sourceId))
      fail(`${at}: unknown authority source "${a.sourceId}"`);
    if (!a.acceptedName?.trim())
      fail(`${at}: authority "${a.sourceId}" records no accepted name`);
  }
  // A disagreement without an explanation is a flag with nothing behind it.
  if (c.agreement !== 'agreed' && !c.agreementNote?.trim())
    fail(
      `${at}: agreement is "${c.agreement}" and nothing says what the difference is`,
    );
  if (c.agreement === 'agreed') {
    const names = new Set(
      (c.authorities ?? []).map((a) => taxonKey(a.acceptedName)),
    );
    if (names.size > 1)
      fail(
        `${at}: marked agreed, but the authorities record different names: ${[...names].join(' / ')}`,
      );
    if (
      (c.authorities ?? []).length < 2 &&
      !MULTI_TAXON_RANKS.includes(c.taxonRank)
    )
      fail(`${at}: marked agreed but only one authority is recorded`);
  }
  if (c.agreement === 'single-source' && (c.authorities ?? []).length > 1)
    fail(
      `${at}: marked single-source but records ${c.authorities!.length} authorities`,
    );

  if (!c.taxonomySourceIds?.length) fail(`${at}: no taxonomy source`);
  for (const s of c.taxonomySourceIds ?? [])
    if (!SOURCE_MAP.has(s)) fail(`${at}: unknown taxonomy source "${s}"`);

  /* -- agricultural vocabularies ------------------------------------------- */
  if (!c.cropGroups?.length) fail(`${at}: no crop group`);
  for (const g of c.cropGroups ?? [])
    if (!CROP_GROUPS.includes(g))
      fail(`${at}: crop group "${g}" is not in the vocabulary`);
  if (!c.harvestedParts?.length) fail(`${at}: no harvested part`);
  for (const p of c.harvestedParts ?? [])
    if (!HARVESTED_PARTS.includes(p))
      fail(`${at}: harvested part "${p}" is not in the vocabulary`);
  if (!c.agriculturalUses?.length) fail(`${at}: no agricultural use`);
  for (const u of c.agriculturalUses ?? [])
    if (!AGRICULTURAL_USES.includes(u))
      fail(`${at}: agricultural use "${u}" is not in the vocabulary`);
  if (c.lifeCycle && !LIFE_CYCLES.includes(c.lifeCycle))
    fail(`${at}: life cycle not in the vocabulary`);
  if (c.growthHabit && !GROWTH_HABITS.includes(c.growthHabit))
    fail(`${at}: growth habit not in the vocabulary`);

  /* -- a crop is not a cultivar, a commodity or a market class ------------- */
  if (cultivarSlugs.has(c.slug))
    fail(`${at}: this slug is a published CULTIVAR, not a crop`);
  if (cultivarTitles.has(c.primaryCommonName.toLowerCase()))
    fail(
      `${at}: "${c.primaryCommonName}" is the name of a published cultivar; a cultivar is not a crop`,
    );
  if (commoditySlugs.has(c.slug) && c.profileDepth === 'data-only')
    fail(
      `${at}: this slug is a published COMMODITY and no crop page backs it; a commodity is a traded good, not a botanical taxon`,
    );

  // A market class is not a species. "Hard Red Winter" is a wheat class, and a
  // crop record carrying it as a common name asserts that a grading category is
  // a plant. The corpus already publishes the classes, so the check is against
  // its own vocabulary rather than a guess.
  if (marketClassNames.has(c.primaryCommonName.toLowerCase()))
    fail(
      `${at}: "${c.primaryCommonName}" is a published market class or commodity grade, not a botanical crop`,
    );
  for (const alt of c.alternativeCommonNames ?? [])
    if (marketClassNames.has(alt.toLowerCase()))
      fail(
        `${at}: alternative name "${alt}" is a published market class or commodity grade`,
      );

  /* -- publication depth ---------------------------------------------------- */
  if (!PROFILE_DEPTHS.includes(c.profileDepth))
    fail(`${at}: profile depth not in the vocabulary`);
  if (c.profileDepth === 'full-profile') {
    if (!c.cropPageSlug) fail(`${at}: full-profile with no crop page slug`);
    else if (!cropSlugs.has(c.cropPageSlug))
      fail(
        `${at}: names crop page "${c.cropPageSlug}", which is not published`,
      );
    else if (c.cropPageSlug !== c.slug)
      fail(`${at}: identity slug and crop page slug differ`);
  } else {
    if (c.cropPageSlug) fail(`${at}: data-only but names a crop page`);
    // The thin-page rule, checked against the real route list rather than
    // asserted: a data-only taxon must not have acquired a URL.
    if (routePaths.has(`/crops/${c.slug}`))
      fail(
        `${at}: data-only but /crops/${c.slug} is a published route — a verified taxon with no article must not be given a page`,
      );
  }

  if (!ISO.test(c.lastVerifiedAt))
    fail(`${at}: lastVerifiedAt must be an ISO date`);

  const key = taxonKey(c.acceptedScientificName);
  byTaxon.set(key, [...(byTaxon.get(key) ?? []), c.slug]);
}

/* -- two crops must not be the same plant ---------------------------------- */
for (const [taxon, holders] of byTaxon)
  if (holders.length > 1)
    fail(
      `the taxon "${taxon}" is claimed by ${holders.length} identities: ${holders.join(', ')}. Two crops cannot be the same plant.`,
    );

/* -- a synonym must not also be an accepted name --------------------------- */
{
  const accepted = new Map(
    CROP_IDENTITIES.map((c) => [taxonKey(c.acceptedScientificName), c.slug]),
  );
  for (const c of CROP_IDENTITIES)
    for (const s of c.synonyms ?? []) {
      const holder = accepted.get(taxonKey(s.name));
      if (holder && holder !== c.slug)
        fail(
          `"${s.name}" is recorded as a synonym on "${c.slug}" and as the accepted name of "${holder}". One of the two is wrong.`,
        );
    }
}

/* -- every crop page should have a verified identity ----------------------- */
{
  const covered = new Set(
    CROP_IDENTITIES.filter((c) => c.profileDepth === 'full-profile').map(
      (c) => c.cropPageSlug,
    ),
  );
  const uncovered = cropPages.filter((c) => !covered.has(c.slug));
  // Not yet an error: identity is being backfilled wave by wave, and a page
  // without one is a known gap rather than a defect. The count is reported so
  // the gap cannot quietly stop shrinking.
  if (uncovered.length)
    console.log(
      `\n  Crop pages awaiting a verified identity: ${uncovered.length} of ${cropPages.length}`,
    );
}

/* -- report ---------------------------------------------------------------- */
console.log('\nCrop identity validation\n');
console.log(`  Identities:            ${CROP_IDENTITIES.length}`);
console.log(
  `    full profiles:       ${CROP_IDENTITIES.filter((c) => c.profileDepth === 'full-profile').length}`,
);
console.log(
  `    data-only:           ${CROP_IDENTITIES.filter((c) => c.profileDepth === 'data-only').length}`,
);
console.log(`  Botanical families:    ${familyCounts().length}`);
console.log(`  Genera:                ${genusCount()}`);
console.log('\n  By rank');
{
  const m = new Map<string, number>();
  for (const c of CROP_IDENTITIES)
    m.set(c.taxonRank, (m.get(c.taxonRank) ?? 0) + 1);
  for (const [k, v] of [...m].sort((a, b) => b[1] - a[1]))
    console.log(`    ${k.padEnd(22)}${String(v).padStart(4)}`);
}
console.log('\n  By crop group');
for (const { group, count } of groupCounts())
  console.log(`    ${group.padEnd(22)}${String(count).padStart(4)}`);
console.log(
  `\n  Authorities disagreed or spoke alone: ${contestedIdentities().length}`,
);
for (const c of contestedIdentities())
  console.log(`    ${c.slug.padEnd(20)}${c.agreement}`);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 40)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop identity validation passed.\n');
