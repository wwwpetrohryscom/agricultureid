/**
 * Deterministic gate for the Wave 44 FAO orphan research layer. Offline.
 *
 * The claim this file checks is the one the wave was set: every FAO Crop
 * Calendar name that the matcher's contract does not resolve has been
 * researched and has exactly one outcome, and no name has been quietly left
 * out. The queue is RECOMPUTED here from the census and the match layer rather
 * than read from the research records, because a queue a layer computes from
 * itself is a queue that can never be short.
 *
 * Every rule below is about the difference between a label and a plant. An
 * outcome that names a destination has to have said which plant it thought the
 * label meant; an outcome that refuses has to be refusing for a reason the
 * corpus can check; and an outcome that adds nothing has to be an outcome and
 * not a gap.
 */
import {
  FAO_CROP_MATCHES,
  FAO_CROP_REFUSALS,
  FAO_NAME_CENSUS,
  FAO_CALENDAR_SNAPSHOT,
  FAO_CALENDAR_ENTRIES,
} from '../data/calendars/fao';
import { FAO_ORPHAN_RESEARCH } from '../data/fao-orphans';
import {
  ORPHAN_COHORTS,
  ORPHAN_OUTCOMES,
  ORPHAN_OUTCOME_MEANING,
} from '../types/fao-orphan';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { NAME_CROSSWALK } from '../data/crop-identity/name-crosswalk';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { SOURCE_MAP } from '../lib/sources/registry';
import { allRoutes } from '../lib/seo/routes';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);

const norm = (x: string) =>
  x
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const crops = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop') as {
  slug: string;
  title: string;
  alternativeNames?: string[];
}[];
const publishedCrops = new Set(crops.map((c) => c.slug));
const conceptSlugs = new Set(CROP_CONCEPTS.map((k) => k.slug));
const routes = new Set(allRoutes().map((r) => r.path));
const ambiguousNames = new Map(
  NAME_CROSSWALK.filter((n) => n.kind === 'ambiguous-common-name').map((n) => [
    norm(n.name),
    n.resolvesTo?.slug,
  ]),
);

/* -------------------------------------------------------------------------- */
/*  The census is the source universe, and its arithmetic is checked           */
/* -------------------------------------------------------------------------- */

{
  const seen = new Set<string>();
  let rows = 0;
  for (const c of FAO_NAME_CENSUS) {
    const at = `census "${c.faoName}"`;
    if (seen.has(c.faoName)) fail(`${at}: listed twice`);
    seen.add(c.faoName);
    if (c.rows < 1) fail(`${at}: records no rows`);
    if (!c.countries.length) fail(`${at}: records no country`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c.firstUpdated))
      fail(`${at}: firstUpdated is not a date`);
    if (c.lastUpdated < c.firstUpdated)
      fail(`${at}: lastUpdated is before firstUpdated`);
    rows += c.rows;
  }
  /*
   * The check Wave 42 could not fail.
   *
   * `faoCropNames` was written from the same enumeration it was meant to
   * validate, so it agreed with itself at 210 while the file held 219. Summing
   * the census against `sourceRows` is a different quantity derived from the
   * same read, so a name lost between the file and the census shows up as
   * missing rows rather than as agreement.
   */
  if (rows !== FAO_CALENDAR_SNAPSHOT.sourceRows)
    fail(
      `FAO census: accounts for ${rows} rows and the snapshot records ${FAO_CALENDAR_SNAPSHOT.sourceRows} in the source file`,
    );
  if (FAO_NAME_CENSUS.length !== FAO_CALENDAR_SNAPSHOT.faoCropNames)
    fail(
      `FAO census: holds ${FAO_NAME_CENSUS.length} names and the snapshot records ${FAO_CALENDAR_SNAPSHOT.faoCropNames}`,
    );
  const countries = new Set(FAO_NAME_CENSUS.flatMap((c) => c.countries));
  if (countries.size !== FAO_CALENDAR_SNAPSHOT.countries)
    fail(
      `FAO census: reaches ${countries.size} countries and the snapshot records ${FAO_CALENDAR_SNAPSHOT.countries}`,
    );
}

/* -------------------------------------------------------------------------- */
/*  Every name is matched, refused, or missing — and missing is an error       */
/* -------------------------------------------------------------------------- */

const matchByName = new Map(FAO_CROP_MATCHES.map((m) => [m.faoName, m]));
const refusalByName = new Map(FAO_CROP_REFUSALS.map((r) => [r.faoName, r]));
const researchByName = new Map(FAO_ORPHAN_RESEARCH.map((o) => [o.faoName, o]));

for (const c of FAO_NAME_CENSUS) {
  const m = matchByName.has(c.faoName);
  const r = refusalByName.has(c.faoName);
  if (!m && !r)
    fail(
      `FAO name "${c.faoName}": is in the source and is neither matched nor refused — the research queue left it unclassified`,
    );
  if (m && r) fail(`FAO name "${c.faoName}": is both matched and refused`);
}
for (const m of FAO_CROP_MATCHES)
  if (!FAO_NAME_CENSUS.some((c) => c.faoName === m.faoName))
    fail(`FAO match "${m.faoName}": names a label the source does not contain`);
for (const r of FAO_CROP_REFUSALS)
  if (!FAO_NAME_CENSUS.some((c) => c.faoName === r.faoName))
    fail(
      `FAO refusal "${r.faoName}": names a label the source does not contain`,
    );

/* -------------------------------------------------------------------------- */
/*  The orphan queue, recomputed                                              */
/* -------------------------------------------------------------------------- */

/**
 * A name is an orphan when the matcher's OWN contract — exact title, unique
 * alternative name, or a declared ambiguous-name concept mapping — does not
 * reach it. Recomputed from the live corpus, so publishing a crop shrinks the
 * queue by itself and a research record for a name that now resolves without
 * help is a record with nothing to do.
 */
const byTitle = new Map<string, string[]>();
const byAlias = new Map<string, string[]>();
for (const c of crops) {
  byTitle.set(norm(c.title), [...(byTitle.get(norm(c.title)) ?? []), c.slug]);
  for (const a of c.alternativeNames ?? [])
    byAlias.set(norm(a), [...(byAlias.get(norm(a)) ?? []), c.slug]);
}
function contractResolves(name: string): boolean {
  const k = norm(name);
  const amb = ambiguousNames.get(k);
  if (amb !== undefined) return !!amb && conceptSlugs.has(amb);
  if ((byTitle.get(k) ?? []).length === 1) return true;
  return (byAlias.get(k) ?? []).length === 1;
}

const computedQueue = FAO_NAME_CENSUS.map((c) => c.faoName).filter(
  (n) => !contractResolves(n) && !ambiguousNames.has(norm(n)),
);
{
  const researched = new Set(FAO_ORPHAN_RESEARCH.map((o) => o.faoName));
  for (const n of computedQueue)
    if (!researched.has(n))
      fail(
        `FAO orphan "${n}": the matcher's contract does not reach it and no research record answers it`,
      );
  for (const o of FAO_ORPHAN_RESEARCH)
    if (!FAO_NAME_CENSUS.some((c) => c.faoName === o.faoName))
      fail(
        `orphan research "${o.faoName}": researches a label the source does not contain`,
      );
}

/* -------------------------------------------------------------------------- */
/*  Each record                                                                */
/* -------------------------------------------------------------------------- */

const seenResearch = new Set<string>();
for (const o of FAO_ORPHAN_RESEARCH) {
  const at = `orphan research "${o.faoName}"`;
  if (seenResearch.has(o.faoName)) fail(`${at}: recorded twice`);
  seenResearch.add(o.faoName);
  if (!(ORPHAN_COHORTS as readonly string[]).includes(o.cohort))
    fail(`${at}: cohort "${o.cohort}" is not in the vocabulary`);
  if (!(ORPHAN_OUTCOMES as readonly string[]).includes(o.outcome))
    fail(`${at}: outcome "${o.outcome}" is not in the vocabulary`);
  else if (!ORPHAN_OUTCOME_MEANING[o.outcome]?.trim())
    fail(`${at}: outcome "${o.outcome}" has no stated meaning`);
  if (!o.rationale?.trim() || o.rationale.length < 60)
    fail(`${at}: gives no rationale, or one too short to say what was found`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(o.reviewedAt))
    fail(`${at}: reviewedAt is not a date`);
  for (const s of o.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: cites unknown source "${s}"`);
  if (!o.sourceIds.length) fail(`${at}: cites no source`);

  /*
   * §15 — the FAO label is not a botanical identity.
   *
   * An outcome that points at a plant must have named the plant it thought the
   * label meant. This is the rule that makes the difference between research
   * and pattern-matching checkable: "Coleus dazo" and "Impwa" resolve to
   * different places for reasons that live entirely in the candidate field,
   * and a record that pointed somewhere without naming a candidate would be
   * indistinguishable from a lucky string match.
   */
  const NAMES_A_PLANT = new Set([
    'MAP_TO_EXISTING_CROP',
    'MAP_TO_EXISTING_CONCEPT',
    'ADD_ALIAS_TO_EXISTING',
    'ADD_DATA_ONLY_IDENTITY',
    'PROMOTE_FULL_PROFILE',
    'TAXONOMY_UNCERTAIN',
    'MULTI_TAXON_CONCEPT',
    'AMBIGUOUS',
  ]);
  if (NAMES_A_PLANT.has(o.outcome) && !o.botanicalCandidates.length)
    fail(`${at}: outcome "${o.outcome}" points at a plant and names none`);
  if (
    (o.outcome === 'DEFER_RESEARCH' || o.outcome === 'OUT_OF_SCOPE') &&
    o.botanicalCandidates.length
  )
    fail(
      `${at}: outcome "${o.outcome}" says nothing was established and names ${o.botanicalCandidates.length} candidate(s)`,
    );
  /* An ambiguity is a claim about there being MORE THAN ONE answer. */
  if (
    (o.outcome === 'AMBIGUOUS' || o.outcome === 'MULTI_TAXON_CONCEPT') &&
    o.botanicalCandidates.length < 2 &&
    !o.botanicalCandidates.some((c) => c.split(' ').length === 1)
  )
    fail(
      `${at}: recorded as covering more than one plant and names one candidate, which is not more than one`,
    );

  /* -- destinations ---------------------------------------------------- */
  const dest = o.resolvesTo;
  const RESOLVES = new Set([
    'MAP_TO_EXISTING_CROP',
    'MAP_TO_EXISTING_CONCEPT',
    'ADD_ALIAS_TO_EXISTING',
    'ADD_DATA_ONLY_IDENTITY',
    'PROMOTE_FULL_PROFILE',
  ]);
  if (RESOLVES.has(o.outcome) && !dest)
    fail(`${at}: outcome "${o.outcome}" resolves somewhere and names nowhere`);
  if (!RESOLVES.has(o.outcome) && dest && o.outcome !== 'AGRICULTURAL_FORM')
    fail(
      `${at}: outcome "${o.outcome}" does not resolve and names a destination`,
    );

  if (dest) {
    if (dest.type === 'crop') {
      if (!publishedCrops.has(dest.slug))
        fail(`${at}: resolves to crop "${dest.slug}", which has no page`);
      const isConcept = conceptSlugs.has(dest.slug);
      if (o.outcome === 'MAP_TO_EXISTING_CONCEPT' && !isConcept)
        fail(
          `${at}: says it maps to a concept and "${dest.slug}" is not a declared concept`,
        );
    } else if (dest.type === 'crop-taxon') {
      const id = IDENTITY_BY_SLUG.get(dest.slug);
      if (!id)
        fail(`${at}: resolves to taxon "${dest.slug}", which is unknown`);
      /*
       * A data-only destination must NOT have a route. This is the rule the
       * brief's eighth injection is aimed at: a taxon record that acquires a
       * URL stops being a taxon record and becomes an unwritten page.
       */
      else if (id.profileDepth !== 'data-only')
        fail(
          `${at}: resolves to taxon "${dest.slug}", which is held at "${id.profileDepth}"`,
        );
      if (routes.has(`/crops/${dest.slug}`))
        fail(
          `${at}: resolves to taxon "${dest.slug}" and /crops/${dest.slug} is a route`,
        );
    } else fail(`${at}: destination type "${dest.type}" is not recognised`);
  }

  /* -- agricultural forms ---------------------------------------------- */
  if (o.outcome === 'AGRICULTURAL_FORM') {
    if (!o.formOf) fail(`${at}: recorded as a form and names no crop`);
    else {
      if (!publishedCrops.has(o.formOf.slug))
        fail(
          `${at}: is a form of "${o.formOf.slug}", which is not a published crop`,
        );
      if (!o.formOf.form?.trim() || o.formOf.form.length < 6)
        fail(`${at}: is a form of a crop and does not say which form`);
    }
  } else if (o.formOf)
    fail(`${at}: outcome "${o.outcome}" is not a form and names one anyway`);

  /* -- promotions ------------------------------------------------------- */
  if (o.outcome === 'PROMOTE_FULL_PROFILE') {
    if (dest?.type !== 'crop' || !publishedCrops.has(dest.slug))
      fail(`${at}: says an article was written and none is published`);
    /*
     * §18 — calendar presence is not page-worthiness.
     *
     * The identity has to have been verified BEFORE this wave, because this
     * wave could not read the second authority. A promotion of a taxon this
     * wave itself introduced would be exactly the shortcut §21 forbids.
     */
    const id = dest && IDENTITY_BY_SLUG.get(dest.slug);
    if (id && id.lastVerifiedAt >= o.reviewedAt)
      fail(
        `${at}: promotes an identity last verified on ${id.lastVerifiedAt}, on or after this research — a promotion may not rest on taxonomy this wave asserted`,
      );
  }

  /* -- ambiguity is registered, not asserted ---------------------------- */
  if (o.outcome === 'AMBIGUOUS') {
    const k = norm(o.faoName);
    if (!ambiguousNames.has(k))
      fail(
        `${at}: refused as ambiguous and the name crosswalk holds no ambiguous-common-name entry for it — the refusal is an opinion rather than a reading of the register`,
      );
  }

  /* -- uncertainty must name what could not be read --------------------- */
  if (
    o.outcome === 'TAXONOMY_UNCERTAIN' &&
    !/authorit|World Flora|POWO|Plants of the World/i.test(o.rationale)
  )
    fail(
      `${at}: recorded as taxonomically uncertain and does not say which authority could not be read`,
    );
}

/* -------------------------------------------------------------------------- */
/*  Cross-layer: matches and refusals agree with the research                  */
/* -------------------------------------------------------------------------- */

for (const m of FAO_CROP_MATCHES) {
  const at = `FAO match "${m.faoName}"`;
  const o = researchByName.get(m.faoName);
  if (m.route === 'explicit-name-mapping') {
    if (!o)
      fail(`${at}: uses the explicit route and no research record backs it`);
    else if (o.resolvesTo?.slug !== m.cropRef)
      fail(
        `${at}: maps to "${m.cropRef}" and the research resolves it to "${o.resolvesTo?.slug ?? 'nowhere'}"`,
      );
  }
  if (m.route === 'explicit-form-mapping') {
    if (!o) fail(`${at}: uses the form route and no research record backs it`);
    else {
      if (o.outcome !== 'AGRICULTURAL_FORM')
        fail(
          `${at}: uses the form route and the research outcome is "${o.outcome}"`,
        );
      if (o.formOf && o.formOf.slug !== m.cropRef)
        fail(
          `${at}: is a form of "${m.cropRef}" and the research says "${o.formOf.slug}"`,
        );
      if (m.granularity !== 'FORM_LEVEL')
        fail(`${at}: is a form mapping recorded at "${m.granularity}"`);
      if (!m.form) fail(`${at}: is a form mapping and does not say which form`);
      else if (o.formOf && m.form !== o.formOf.form)
        fail(`${at}: names a form the research record does not`);
    }
  }
  if (m.granularity === 'FORM_LEVEL' && m.route !== 'explicit-form-mapping')
    fail(
      `${at}: is recorded at form level and reached by "${m.route}" — a form has to be declared, not inferred`,
    );
}

for (const r of FAO_CROP_REFUSALS) {
  const at = `FAO refusal "${r.faoName}"`;
  if (r.reason !== 'RESEARCHED_NO_PAGE_DESTINATION') continue;
  const o = researchByName.get(r.faoName);
  if (!o) {
    fail(`${at}: says the research answered it and no research record exists`);
    continue;
  }
  const RESOLVING_TO_A_PAGE = new Set([
    'MAP_TO_EXISTING_CROP',
    'MAP_TO_EXISTING_CONCEPT',
    'ADD_ALIAS_TO_EXISTING',
    'PROMOTE_FULL_PROFILE',
    'AGRICULTURAL_FORM',
  ]);
  if (RESOLVING_TO_A_PAGE.has(o.outcome))
    fail(
      `${at}: is refused and the research outcome "${o.outcome}" reaches a page`,
    );
}

/* Entries only exist for matched names, and only for published crops. */
{
  const matchedRefs = new Set(FAO_CROP_MATCHES.map((m) => m.cropRef));
  for (const c of new Set(FAO_CALENDAR_ENTRIES.map((e) => e.cropRef)))
    if (!matchedRefs.has(c))
      fail(`FAO entries reach crop "${c}" and no match resolves to it`);
}

/* -------------------------------------------------------------------------- */
/*  Report                                                                     */
/* -------------------------------------------------------------------------- */

console.log('\nAgricultureID — FAO orphan research validation\n');
console.log(`  Source labels:                ${FAO_NAME_CENSUS.length}`);
console.log(
  `  Source rows:                  ${FAO_CALENDAR_SNAPSHOT.sourceRows}`,
);
console.log(`  Matched:                      ${FAO_CROP_MATCHES.length}`);
{
  const r = new Map<string, number>();
  for (const m of FAO_CROP_MATCHES) r.set(m.route, (r.get(m.route) ?? 0) + 1);
  for (const [k, v] of [...r].sort())
    console.log(`    ${k.padEnd(36)}${String(v).padStart(4)}`);
  const g = new Map<string, number>();
  for (const m of FAO_CROP_MATCHES)
    g.set(m.granularity, (g.get(m.granularity) ?? 0) + 1);
  console.log('  Granularity');
  for (const [k, v] of [...g].sort())
    console.log(`    ${k.padEnd(36)}${String(v).padStart(4)}`);
}
console.log(`\n  Refused:                      ${FAO_CROP_REFUSALS.length}`);
console.log(`  Research records:             ${FAO_ORPHAN_RESEARCH.length}`);
console.log(`  Recomputed orphan queue:      ${computedQueue.length}`);
{
  const o = new Map<string, number>();
  for (const r of FAO_ORPHAN_RESEARCH)
    o.set(r.outcome, (o.get(r.outcome) ?? 0) + 1);
  for (const k of ORPHAN_OUTCOMES)
    if (o.get(k))
      console.log(`    ${k.padEnd(36)}${String(o.get(k)).padStart(4)}`);
  const unclassified = FAO_ORPHAN_RESEARCH.filter(
    (r) => !(ORPHAN_OUTCOMES as readonly string[]).includes(r.outcome),
  ).length;
  console.log(
    `    ${'UNCLASSIFIED'.padEnd(36)}${String(unclassified).padStart(4)}`,
  );
}
console.log(`\n  Crop identities:              ${CROP_IDENTITIES.length}`);
console.log(`  Calendar entries:             ${FAO_CALENDAR_ENTRIES.length}`);

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ FAO orphan research validation passed.\n');
