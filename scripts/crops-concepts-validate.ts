/**
 * Deterministic gate for crop concept scope, homonyms, disagreements and the
 * name crosswalk. Offline.
 *
 * The reason this exists in one file: all four are the same kind of claim — a
 * statement about what a name means that a reader will act on. Waves 27–30 made
 * those statements in prose, and three of them were false in ways no amount of
 * reading would reveal, because the error was between the sentence and the data
 * rather than inside the sentence. Every rule below re-derives the claim from
 * the corpus instead of believing it.
 */
import {
  AMBIGUOUS_BINOMIALS,
  HOMONYM_BY_NAME,
  HOMONYM_RESOLUTIONS,
} from '../data/crop-identity/homonyms';
import { CONCEPT_BY_SLUG, CROP_CONCEPTS } from '../data/crop-identity/concepts';
import {
  DISAGREEMENT_BY_SLUG,
  TAXONOMY_DISAGREEMENTS,
} from '../data/crop-identity/taxonomy-disagreements';
import { NAME_CROSSWALK } from '../data/crop-identity/name-crosswalk';
import {
  CONCEPT_REQUIRED_RANKS,
  CONCEPT_KINDS,
  CONCEPT_KIND_MEANING,
  CROSSWALK_KINDS,
  DISAGREEMENT_KINDS,
  DISAGREEMENT_KIND_MEANING,
  HELD_AS,
} from '../types/crop-concepts';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { allRoutes } from '../lib/seo/routes';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const routes = new Set(allRoutes().map((r) => r.path));
const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const anyPublished = new Map(
  PUBLISHED_CONTENT.map((c) => [`${c.contentType}:${c.slug}`, c]),
);
/** Accepted names the corpus holds, normalised for comparison. */
const norm = (s: string) =>
  s.toLowerCase().replace(/×/g, '').replace(/\s+/g, ' ').trim();
const identityFor = (slug: string) => IDENTITY_BY_SLUG.get(slug);
const IDENTITY_BY_NAME = new Map(
  CROP_IDENTITIES.map((c) => [norm(c.acceptedScientificName), c]),
);

/* -- concepts -------------------------------------------------------------- */

// Every published page whose identity names more than one taxon must declare
// what it covers. This is the rule the whole file turns on: without it, scope
// lives only in a prose note nothing reads.
for (const c of CROP_IDENTITIES) {
  const multi = (CONCEPT_REQUIRED_RANKS as readonly string[]).includes(
    c.taxonRank,
  );
  const needsConcept = multi && c.profileDepth === 'full-profile';
  const has = CONCEPT_BY_SLUG.has(c.slug);
  if (needsConcept && !has)
    fail(
      `crop "${c.slug}" is published at rank "${c.taxonRank}" — it names more than one taxon — and declares no concept scope`,
    );
  if (has && !multi)
    fail(
      `crop "${c.slug}" declares a concept scope but its identity is a single taxon at rank "${c.taxonRank}"`,
    );
}

for (const k of CROP_CONCEPTS) {
  const at = `concept "${k.slug}"`;
  if (!CONCEPT_KINDS.includes(k.kind))
    fail(`${at}: kind "${k.kind}" is not in the vocabulary`);
  else if (!CONCEPT_KIND_MEANING[k.kind]?.trim())
    fail(`${at}: kind "${k.kind}" has no stated meaning`);
  if (!publishedCrops.has(k.slug))
    fail(`${at}: names a crop page that is not published`);
  if (!routes.has(`/crops/${k.slug}`))
    fail(`${at}: no route is emitted for /crops/${k.slug}`);
  if (!ISO.test(k.reviewedAt)) fail(`${at}: reviewedAt is not an ISO date`);
  if (!k.scopeStatement?.trim() || k.scopeStatement.length < 60)
    fail(`${at}: the scope statement does not say what the page covers`);
  if (!k.splitCriterion?.trim() || k.splitCriterion.length < 60)
    fail(
      `${at}: no split criterion — without one, promotion out of this concept is a thing that happens rather than a judgement someone made`,
    );
  for (const s of k.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);
  if (!k.sourceIds.length) fail(`${at}: cites no source`);

  // A concept covering one taxon is not a concept.
  if (k.constituents.length < 2)
    fail(`${at}: declares ${k.constituents.length} constituent(s)`);

  const seen = new Set<string>();
  for (const t of k.constituents) {
    const where = `${at} constituent "${t.scientificName}"`;
    if (seen.has(norm(t.scientificName))) fail(`${where}: listed twice`);
    seen.add(norm(t.scientificName));
    // A scope cannot contain itself. This is the shape a careless edit takes
    // when a concept is "completed" by adding the page it belongs to.
    if (t.identitySlug === k.slug)
      fail(
        `${where}: the concept is listed as its own constituent — a scope cannot contain itself`,
      );
    if (
      norm(t.scientificName) ===
      norm(identityFor(k.slug)?.acceptedScientificName ?? '\u0000')
    )
      fail(`${where}: names the same taxon as the concept page itself`);
    if (!HELD_AS.includes(t.heldAs))
      fail(`${where}: heldAs "${t.heldAs}" is not in the vocabulary`);
    if (!t.role?.trim() || t.role.length < 20)
      fail(`${where}: does not say why it sits inside the concept`);

    // The check the prose notes failed. Each coverage claim is re-derived.
    const id = t.identitySlug
      ? IDENTITY_BY_SLUG.get(t.identitySlug)
      : undefined;
    if (t.heldAs === 'own-identity') {
      if (!t.identitySlug)
        fail(`${where}: claims its own identity and names no slug`);
      else if (!id)
        fail(
          `${where}: names identity "${t.identitySlug}", which does not exist`,
        );
      else if (id.taxonRank === 'cultivar-group')
        fail(
          `${where}: claims its own identity, but "${t.identitySlug}" is a cultivar group — the corpus holds a cultivated form, not the species`,
        );
    } else if (t.heldAs === 'cultivar-group-only') {
      if (!id)
        fail(
          `${where}: claims a cultivar group and names no identity that exists`,
        );
      else if (id.taxonRank !== 'cultivar-group')
        fail(
          `${where}: claims a cultivar group, but "${t.identitySlug}" is held at rank "${id.taxonRank}"`,
        );
    } else if (t.heldAs === 'not-held') {
      if (t.identitySlug)
        fail(`${where}: says not held and names an identity anyway`);
      // An overclaim is the error this catches; an UNDERclaim is one too. If
      // the corpus does hold the taxon, saying it does not is equally wrong.
      const found = IDENTITY_BY_NAME.get(norm(t.scientificName));
      if (found)
        fail(
          `${where}: says the corpus does not hold it, but identity "${found.slug}" carries that accepted name`,
        );
    }

    // A constituent with its own page must be reachable from the concept page.
    if (id && publishedCrops.has(id.slug)) {
      const page = PUBLISHED_CONTENT.find(
        (p) => p.contentType === 'crop' && p.slug === k.slug,
      ) as { relatedTopics?: { slug?: string }[] } | undefined;
      if (!(page?.relatedTopics ?? []).some((r) => r.slug === id.slug))
        fail(
          `${where}: has its own page and the concept page "${k.slug}" does not link to it`,
        );
    }
  }
}

/* -- disagreements --------------------------------------------------------- */

for (const c of CROP_IDENTITIES) {
  const has = DISAGREEMENT_BY_SLUG.has(c.slug);
  if (c.agreement !== 'agreed' && !has)
    fail(
      `identity "${c.slug}" records agreement "${c.agreement}" and no classified disagreement — a reader cannot tell a gap in coverage from a live dispute`,
    );
  if (c.agreement === 'agreed' && has)
    fail(
      `identity "${c.slug}" is recorded as agreed and carries a disagreement record`,
    );
}
for (const d of TAXONOMY_DISAGREEMENTS) {
  const at = `disagreement "${d.identitySlug}"`;
  if (!IDENTITY_BY_SLUG.has(d.identitySlug))
    fail(`${at}: names an identity that does not exist`);
  if (!DISAGREEMENT_KINDS.includes(d.kind))
    fail(`${at}: kind "${d.kind}" is not in the vocabulary`);
  else if (!DISAGREEMENT_KIND_MEANING[d.kind]?.trim())
    fail(`${at}: kind "${d.kind}" has no stated meaning`);
  if (!d.wfo?.trim() || !d.powo?.trim())
    fail(`${at}: does not record what both authorities give`);
  if (d.wfo === d.powo)
    fail(`${at}: records the same reading for both authorities`);
  if (!d.corpusTakes?.trim() || d.corpusTakes.length < 30)
    fail(`${at}: does not say which reading the corpus publishes, or why`);
  if (!d.resolvedBy?.trim()) fail(`${at}: does not say what would settle it`);
  // A coverage gap means one authority returned nothing. Anything else is a
  // disagreement about the plant and must not be filed as coverage.
  const silent = /no placement|not resolve|\(none\)/i;
  if (d.kind === 'coverage' && !silent.test(d.wfo) && !silent.test(d.powo))
    fail(
      `${at}: classified as a coverage gap while both authorities returned a reading`,
    );
  if (d.kind !== 'coverage' && (silent.test(d.wfo) || silent.test(d.powo)))
    fail(
      `${at}: classified as "${d.kind}" while one authority returned no placement — that is a coverage gap`,
    );
}

/* -- homonyms -------------------------------------------------------------- */

for (const name of AMBIGUOUS_BINOMIALS)
  if (!HOMONYM_BY_NAME.has(name.toLowerCase()))
    fail(
      `"${name}" is recorded as an ambiguous binomial and has no resolution — an identity could attach to the wrong plant`,
    );

for (const h of HOMONYM_RESOLUTIONS) {
  const at = `homonym "${h.name}"`;
  // Two senses or it is not a homonym.
  if (h.senses.length < 2) fail(`${at}: records ${h.senses.length} sense(s)`);
  if (!h.senses.some((s) => s.author === h.corpusTakes))
    fail(
      `${at}: the corpus takes author "${h.corpusTakes}", which is not among the recorded senses`,
    );
  if (new Set(h.senses.map((s) => s.author)).size !== h.senses.length)
    fail(`${at}: two senses share an author`);
  if (!h.evidence?.trim() || h.evidence.length < 40)
    fail(`${at}: gives no evidence`);
  if (!h.identitySlugs.length)
    fail(`${at}: names no identity that rests on it`);
  for (const s of h.identitySlugs) {
    const id = IDENTITY_BY_SLUG.get(s);
    if (!id) fail(`${at}: names identity "${s}", which does not exist`);
    else if (norm(id.acceptedScientificName) !== norm(h.name))
      fail(
        `${at}: names identity "${s}", whose accepted name is "${id.acceptedScientificName}"`,
      );
  }
  if (!AMBIGUOUS_BINOMIALS.includes(h.name))
    fail(`${at}: resolved but not listed as an ambiguous binomial`);
}

// And the direction that matters most: an identity resting on a name known to
// be ambiguous must have a resolution behind it.
for (const c of CROP_IDENTITIES) {
  const amb = AMBIGUOUS_BINOMIALS.find(
    (n) => norm(n) === norm(c.acceptedScientificName),
  );
  if (!amb) continue;
  const h = HOMONYM_BY_NAME.get(amb.toLowerCase());
  if (!h?.identitySlugs.includes(c.slug))
    fail(
      `identity "${c.slug}" rests on the ambiguous binomial "${amb}" and no homonym resolution names it`,
    );
}

/* -- crosswalk ------------------------------------------------------------- */

{
  const seen = new Set<string>();
  for (const x of NAME_CROSSWALK) {
    const at = `crosswalk "${x.name}"`;
    if (seen.has(x.name.toLowerCase())) fail(`${at}: listed twice`);
    seen.add(x.name.toLowerCase());
    if (!CROSSWALK_KINDS.includes(x.kind))
      fail(`${at}: kind "${x.kind}" is not in the vocabulary`);
    if (!x.note?.trim() || x.note.length < 20)
      fail(`${at}: gives no explanation`);
    if (x.resolvesTo) {
      const key = `${x.resolvesTo.type}:${x.resolvesTo.slug}`;
      const isTaxon =
        x.resolvesTo.type === 'crop-taxon' &&
        IDENTITY_BY_SLUG.has(x.resolvesTo.slug);
      if (!anyPublished.has(key) && !isTaxon)
        fail(
          `${at}: resolves to ${key}, which is neither a published page nor a crop identity`,
        );
      // A name must not resolve to a page that is itself only a redirect target
      // by accident: a crop crosswalk pointing at a data-only taxon has to say
      // so with the crop-taxon type.
      if (
        x.resolvesTo.type === 'crop' &&
        !publishedCrops.has(x.resolvesTo.slug)
      )
        fail(
          `${at}: resolves to crop "${x.resolvesTo.slug}", which has no page`,
        );
    }
    // A homonym must never be sent to the plant it is NOT.
    if (x.kind === 'homonym' && x.resolvesTo)
      fail(
        `${at}: a homonym resolves to a different plant; sending a reader to "${x.resolvesTo.slug}" confirms the error they arrived with`,
      );
  }
}

/* -- report ---------------------------------------------------------------- */

console.log('\nCrop concepts, homonyms, disagreements and crosswalk\n');
console.log(`  Concept pages declared:       ${CROP_CONCEPTS.length}`);
{
  const k = new Map<string, number>();
  for (const c of CROP_CONCEPTS) k.set(c.kind, (k.get(c.kind) ?? 0) + 1);
  for (const kind of CONCEPT_KINDS)
    if (k.get(kind))
      console.log(`    ${kind.padEnd(24)}${String(k.get(kind)).padStart(4)}`);
  const held = new Map<string, number>();
  for (const c of CROP_CONCEPTS)
    for (const t of c.constituents)
      held.set(t.heldAs, (held.get(t.heldAs) ?? 0) + 1);
  console.log('\n  Constituent taxa');
  for (const h of HELD_AS)
    if (held.get(h))
      console.log(`    ${h.padEnd(24)}${String(held.get(h)).padStart(4)}`);
}
console.log(
  `\n  Authority disagreements:      ${TAXONOMY_DISAGREEMENTS.length}`,
);
{
  const k = new Map<string, number>();
  for (const d of TAXONOMY_DISAGREEMENTS)
    k.set(d.kind, (k.get(d.kind) ?? 0) + 1);
  for (const kind of DISAGREEMENT_KINDS)
    if (k.get(kind))
      console.log(`    ${kind.padEnd(24)}${String(k.get(kind)).padStart(4)}`);
}
console.log(`\n  Homonyms pinned:              ${HOMONYM_RESOLUTIONS.length}`);
console.log(`  Crosswalk names:              ${NAME_CROSSWALK.length}`);
{
  const nulls = NAME_CROSSWALK.filter((x) => !x.resolvesTo).length;
  console.log(
    `    resolving to a page         ${NAME_CROSSWALK.length - nulls}`,
  );
  console.log(`    deliberately nowhere        ${nulls}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop concept validation passed.\n');
