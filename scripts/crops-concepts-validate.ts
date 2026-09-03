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
import { TAXON_SCOPE_OWNERSHIP } from '../data/crop-taxon-ownership';
import {
  CONCEPT_REQUIRED_RANKS,
  CONCEPT_KINDS,
  CONCEPT_KIND_MEANING,
  CROSSWALK_KINDS,
  DISAGREEMENT_KINDS,
  DISAGREEMENT_KIND_MEANING,
  HELD_AS,
  MARKET_GRANULARITIES,
  RELATIONSHIP_KINDS,
  ROUTE_STATUSES,
} from '../types/crop-concepts';
import {
  CROP_IDENTITIES,
  IDENTITY_BY_SLUG,
  constituentDestination,
} from '../lib/crops/identity';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { allRoutes } from '../lib/seo/routes';
import { COMMODITIES_BY_CROP } from '../lib/crops/integration';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const routes = new Set(allRoutes().map((r) => r.path));
const OWNERSHIP_BY_PARENT = new Map(
  TAXON_SCOPE_OWNERSHIP.map((o) => [o.parentTaxon, o]),
);

/** Published crops by each alternative name they claim, lower-cased. */
const CROPS_CLAIMING_NAME = new Map<string, string[]>();
for (const c of PUBLISHED_CONTENT) {
  if (c.contentType !== 'crop') continue;
  for (const n of (c as { alternativeNames?: string[] }).alternativeNames ?? [])
    CROPS_CLAIMING_NAME.set(n.toLowerCase(), [
      ...(CROPS_CLAIMING_NAME.get(n.toLowerCase()) ?? []),
      c.slug,
    ]);
}
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
  /*
   * The reverse prohibition — "only a multi-taxon identity may declare a
   * scope" — was removed in Wave 41, and it is the one change in this file
   * that is a relaxation rather than a tightening, so it is worth being
   * explicit about why.
   *
   * It assumed that a page covering several plants would be KEYED to several
   * plants. Nine pages disproved that: wheat, millet, cherry, pear, plum,
   * blueberry, chili pepper, cinnamon and mustard are each keyed to their
   * principal species and each name a wider crop, as their own scientific-name
   * fields had been saying in prose all along. The prohibition made it
   * impossible to declare their scope, and that silence is what let Waves 39
   * and 40 publish six of the plants those pages were covering without any of
   * the parents noticing.
   *
   * What replaces it is stricter, not looser: a concept must list at least one
   * constituent that is a real identity distinct from the page's own, and the
   * route status of every constituent is recomputed against the corpus. A page
   * cannot now declare a scope it does not have, and it can no longer stay
   * silent about one it does.
   */
}

const conceptSeen = new Set<string>();
for (const k of CROP_CONCEPTS) {
  const at = `concept "${k.slug}"`;
  /*
   * One page, one scope.
   *
   * Two concept records for the same slug are two answers to "what does this
   * page cover", and nothing downstream chooses between them: the lookup map
   * keeps whichever came last and the other is invisible. A Wave 41 injection
   * duplicated the cherry concept and every gate passed.
   */
  if (conceptSeen.has(k.slug))
    fail(`${at}: a second concept record declares a scope for the same page`);
  conceptSeen.add(k.slug);
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

  /*
   * A concept covering one taxon is not a concept — but the count that matters
   * is taxa, and the page's own taxon is one of them and is never listed as a
   * constituent. One constituent plus the page is two plants under one name,
   * which is exactly what cherry, pear, plum and cinnamon are.
   */
  if (k.constituents.length < 1)
    fail(`${at}: declares no constituent — the page covers only its own taxon`);

  if (
    !(MARKET_GRANULARITIES as readonly string[]).includes(k.marketGranularity)
  )
    fail(
      `${at}: marketGranularity "${k.marketGranularity}" is not in the vocabulary`,
    );
  if (k.marketGranularityNote.trim().length < 60)
    fail(`${at}: states a market granularity without saying why`);
  /**
   * The declaration has to survive the corpus.
   *
   * `NO_MARKET_LINKAGE` is the one that can be checked outright, and it is the
   * one most likely to go stale: a commodity keyed to the page later makes the
   * claim false without anyone editing this record.
   */
  const conceptCommodities = [...(COMMODITIES_BY_CROP.get(k.slug) ?? [])];
  if (k.marketGranularity === 'NO_MARKET_LINKAGE' && conceptCommodities.length)
    fail(
      `${at}: says no market series is keyed to it and ${conceptCommodities.length} is: ${conceptCommodities.join(', ')}`,
    );
  if (k.marketGranularity !== 'NO_MARKET_LINKAGE' && !conceptCommodities.length)
    fail(
      `${at}: declares market granularity "${k.marketGranularity}" and no commodity is keyed to the page at all`,
    );
  /**
   * Market coverage must not leak from a concept to a child.
   *
   * A CONCEPT_LEVEL commodity measures the traded product of the whole
   * concept. If the same commodity also resolves to a constituent that has its
   * own page, the corpus is reporting one trade twice and attributing it to a
   * species no source measured.
   */
  /*
   * A note on what this rule can and cannot catch.
   *
   * A Wave 41 injection tried to construct the leak and could not: a commodity
   * carries one `sourceCrop`, and `COMMODITIES_BY_CROP` reverses it, so one
   * commodity reaches exactly one crop and the condition below is unreachable
   * in the current model. The rule is kept as a guard on the model rather than
   * on the data — if a commodity ever names several crops, this is what stops
   * the same trade being counted on a concept and on its child — and it is
   * recorded here that it has never fired and currently cannot, because a rule
   * that silently cannot fail is worse than no rule at all.
   */
  if (k.marketGranularity === 'CONCEPT_LEVEL')
    for (const t of k.constituents) {
      if (!t.identitySlug || !publishedCrops.has(t.identitySlug)) continue;
      const childCommodities = [
        ...(COMMODITIES_BY_CROP.get(t.identitySlug) ?? []),
      ];
      const leaked = childCommodities.filter((c) =>
        conceptCommodities.includes(c),
      );
      if (leaked.length)
        fail(
          `${at}: commodity ${leaked.join(', ')} is keyed to the concept AND to its constituent "${t.identitySlug}" — concept-level market coverage must not leak to a child`,
        );
    }
  for (const x of k.excludes ?? []) {
    const ex = `${at} exclusion "${x.scientificName}"`;
    if (!x.reason.trim()) fail(`${ex}: says nothing about why it is excluded`);
    if (
      x.resolvesTo &&
      !PUBLISHED_CONTENT.some(
        (p) =>
          p.contentType === x.resolvesTo!.type && p.slug === x.resolvesTo!.slug,
      )
    )
      fail(
        `${ex}: resolves to ${x.resolvesTo.type}:${x.resolvesTo.slug}, which is not published`,
      );
  }

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
      /*
       * The rule is about a MISMATCH, not about the rank.
       *
       * It was written for pumpkin, where the constituent names Cucurbita pepo
       * and the corpus holds only the Zucchini Group of it — claiming
       * own-identity there overstates what is held. Where the constituent
       * names the cultivar group itself, as the citrus concept does for the
       * Sweet Orange, Grapefruit and Mandarin Groups, the corpus holds exactly
       * what the constituent names and own-identity is the truthful answer.
       */
      else if (
        id.taxonRank === 'cultivar-group' &&
        norm(t.scientificName) !== norm(id.acceptedScientificName)
      )
        fail(
          `${where}: claims its own identity, but "${t.identitySlug}" is a cultivar group of it — the corpus holds a cultivated form, not the taxon this constituent names`,
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

    /*
     * The link the reader is actually offered has to go somewhere.
     *
     * `identitySlug` resolving inside the identity layer says the corpus holds
     * the taxon. It says nothing about whether `/crops/<slug>` exists, and
     * until Wave 43 the scope table assumed the two were the same question:
     * thirty-seven links across sixteen concept pages pointed at pages that
     * were never published. The rule re-derives the destination through the
     * same function the component renders, so the check cannot drift from what
     * ships.
     */
    const dest = constituentDestination(t.identitySlug);
    if (dest.kind !== 'unheld') {
      const target = dest.href.split('#')[0]!;
      if (!routes.has(target))
        fail(
          `${where}: the scope table would link to "${dest.href}", which is not a route`,
        );
      if (dest.kind === 'register' && t.heldAs === 'not-held')
        fail(`${where}: says not held and would still be linked`);
    }

    /* -- the parent–child scope contract ---------------------------------
     *
     * `routeStatus` and `relationshipKind` are recomputed here rather than
     * read. Promoting a child changes what the corpus contains, and a parent
     * whose scope record does not change with it is describing a corpus that
     * no longer exists — Wave 39 published five crops that concepts had listed
     * as taxon rows, and nothing noticed because nothing was looking.
     *
     * The check fails in both directions on purpose: a constituent recorded as
     * having a page that does not is the same class of error as the reverse.
     */
    if (!(RELATIONSHIP_KINDS as readonly string[]).includes(t.relationshipKind))
      fail(
        `${where}: relationshipKind "${t.relationshipKind}" is not in the vocabulary`,
      );
    if (!(ROUTE_STATUSES as readonly string[]).includes(t.routeStatus))
      fail(`${where}: routeStatus "${t.routeStatus}" is not in the vocabulary`);
    /*
     * The name and the identity must be the same plant.
     *
     * `identitySlug` and `scientificName` were two independent fields: the
     * checks confirmed that the slug resolved and that the name resolved, and
     * never that they resolved to each other. A Wave 41 injection put apricot's
     * binomial on the sour cherry constituent and every gate passed.
     */
    if (id) {
      const exact = norm(t.scientificName) === norm(id.acceptedScientificName);
      /*
       * `cultivar-group-only` is the case where they legitimately differ: the
       * constituent names the species and the corpus holds a cultivar group of
       * it, which is the Wave 33 correction on pumpkin. The identity's name
       * must then be the constituent's name plus a group epithet — narrower,
       * not different.
       */
      const narrower =
        t.heldAs === 'cultivar-group-only' &&
        norm(id.acceptedScientificName).startsWith(
          `${norm(t.scientificName)} `,
        );
      if (!exact && !narrower)
        fail(
          `${where}: names identity "${t.identitySlug}", whose accepted name is "${id.acceptedScientificName}" — the constituent and the identity are different plants`,
        );
    }

    const actualRoute = !t.identitySlug
      ? 'no-route'
      : publishedCrops.has(t.identitySlug)
        ? 'own-page'
        : 'taxon-row-only';
    if (t.routeStatus !== actualRoute)
      fail(
        `${where}: records routeStatus "${t.routeStatus}" and the corpus emits "${actualRoute}" — promoting a child without updating its parent leaves the parent describing a corpus that no longer exists`,
      );
    /*
     * Rank and relationship must agree in both directions. A cultivar group
     * recorded as a species overstates what it is; a species recorded as a
     * cultivar group understates it, and that direction matters more, because
     * the split criterion turns on it — promoting a species gives a reader a
     * plant, promoting a cultivar group gives them a market category with a
     * Latin name attached.
     */
    if (
      id &&
      id.taxonRank === 'cultivar-group' &&
      t.relationshipKind !== 'cultivar-group'
    )
      fail(
        `${where}: is a cultivar group by rank and is recorded as "${t.relationshipKind}"`,
      );
    if (
      id &&
      id.taxonRank !== 'cultivar-group' &&
      t.relationshipKind === 'cultivar-group'
    )
      fail(
        `${where}: is recorded as a cultivar group and the identity holds it at rank "${id.taxonRank}"`,
      );

    /*
     * A hybrid has to be nomenclaturally a hybrid.
     *
     * `relationshipKind: 'hybrid'` says "a hybrid between constituents of the
     * concept" and nothing checked it. A Wave 43 injection recorded pomelo —
     * Citrus maxima, one of the three ANCESTRAL species and the concept's own
     * genome donor — as a hybrid of the concept it is a parent of, and every
     * gate passed. Getting that backwards on a citrus page is not a
     * bookkeeping slip: the whole point of the page is which taxa are the
     * ancestors and which are the crosses.
     *
     * The check is the botanical convention and only that: a hybrid binomial
     * puts a multiplication sign between the genus and the epithet
     * ("Citrus × limon"). A nothogeneric name carries it as a PREFIX
     * ("×Triticosecale rimpaui") and names a hybrid genus whose species are
     * cultivated species in their own right, so it is excluded deliberately —
     * triticale's two constituents are recorded as cultivated species and are
     * right to be. Anything narrower than the marker — which cross, between
     * which parents — the corpus states in the constituent's role and no rule
     * can verify.
     */
    const infixHybrid = / × /.test(t.scientificName);
    if (t.relationshipKind === 'hybrid' && !infixHybrid)
      fail(
        `${where}: is recorded as a hybrid and "${t.scientificName}" carries no hybrid marker — a parent species of the concept is not a cross within it`,
      );
    if (
      infixHybrid &&
      (t.relationshipKind === 'genome-donor' ||
        t.relationshipKind === 'cultivated-species')
    )
      fail(
        `${where}: "${t.scientificName}" is a hybrid name and it is recorded as "${t.relationshipKind}"`,
      );

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
    /**
     * A destination that has stopped being true.
     *
     * A crosswalk entry pointing at `crop-taxon` says "this name is not a
     * page; here is the row that holds it". Publishing that crop makes the
     * statement false, and Wave 41 found fifteen of them — every crop Waves 39
     * and 40 promoted out of the taxon table left its own crosswalk entries
     * behind, sending readers to a row when a page existed. It is the same
     * defect as a concept whose constituent was promoted without the parent
     * noticing, in a different layer, and it survived for the same reason:
     * nothing recomputed the destination.
     */
    if (
      x.resolvesTo?.type === 'crop-taxon' &&
      publishedCrops.has(x.resolvesTo.slug)
    )
      fail(
        `${at}: resolves to the taxon row for "${x.resolvesTo.slug}", which now has its own page`,
      );
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

    /*
     * An alias a page claims, sent somewhere else.
     *
     * "Satsuma" sat in the crosswalk pointing at the orange page from Wave 29
     * to Wave 43, with a note that said "a cultivar group within mandarin" —
     * true when written, because mandarin had no page and orange was the
     * nearest citrus that did. Publishing mandarin made the destination wrong
     * and nothing looked, because the note and the destination live in the
     * same record and only the destination is machine-readable.
     *
     * The rule is deliberately narrow. It fires only where exactly ONE
     * published page claims the name as its own alternative name: that page
     * has made a claim, the crosswalk contradicts it, and one of them is
     * wrong. Where two or more pages share an alias — "red bean", "cocoyam",
     * "horse bean", "African eggplant" all legitimately do — the crosswalk is
     * the layer that arbitrates and the rule stays out of it. This is not an
     * alias-uniqueness rule and must not become one.
     */
    if (x.resolvesTo?.type === 'crop') {
      const claimants = CROPS_CLAIMING_NAME.get(x.name.toLowerCase()) ?? [];
      if (claimants.length === 1 && claimants[0] !== x.resolvesTo.slug)
        fail(
          `${at}: resolves to "${x.resolvesTo.slug}", but "${claimants[0]}" is the page that carries this name as an alternative name`,
        );
    }

    /*
     * A parent-taxon entry is read out of the ownership layer, not written.
     *
     * The failure this prevents is the one the entries were added to fix,
     * pointed the other way: a name sent to a child that is only part of it.
     * The ownership layer already decides who owns each shared parent, so the
     * destination is derivable, and anything that disagrees with it is either
     * a stale entry or an invented one. The `null` case is checked just as
     * hard — a name whose owner IS a page may not be recorded as having
     * nowhere to go.
     */
    if (x.kind === 'parent-taxon') {
      const owner = OWNERSHIP_BY_PARENT.get(x.name);
      if (!owner)
        fail(
          `${at}: recorded as a parent taxon, and no scope-ownership record names it`,
        );
      else if (owner.ownerKind === 'crop-concept') {
        if (x.resolvesTo?.slug !== owner.ownerSlug)
          fail(
            `${at}: "${owner.parentTaxon}" is owned by the "${owner.ownerSlug}" page, and this entry resolves to ${x.resolvesTo ? `"${x.resolvesTo.slug}"` : 'nowhere'}`,
          );
      } else if (x.resolvesTo)
        fail(
          `${at}: "${owner.parentTaxon}" is owned by a record with no page, so resolving to "${x.resolvesTo.slug}" sends the reader to a child of it`,
        );
    }
  }

  /*
   * Every shared parent taxon must be findable by its own name.
   *
   * The crosswalk was the layer that could answer "Citrus × aurantium" and it
   * had no entry for it, so the query fell to whichever cultivar group scored
   * best. Requiring the entry rather than merely validating the ones present
   * is the difference between a register and a gate.
   */
  for (const o of TAXON_SCOPE_OWNERSHIP) {
    const x = NAME_CROSSWALK.find((c) => c.name === o.parentTaxon);
    if (!x)
      fail(
        `scope ownership "${o.parentTaxon}": is shared by ${o.publishedChildren.length} published crops and the name crosswalk does not carry it`,
      );
    else if (x.kind !== 'parent-taxon')
      fail(
        `crosswalk "${x.name}": is a shared parent taxon and is recorded as "${x.kind}"`,
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
