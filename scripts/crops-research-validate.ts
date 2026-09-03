/**
 * Deterministic gate for the crop research campaign. Offline.
 *
 * The campaign's claim is that every crop held as a taxon without an article
 * has been looked at and given an outcome. That claim is only worth anything if
 * the queue and the records are reconciled against each other rather than
 * counted separately, and if the outcomes cannot be used to describe something
 * they do not describe.
 *
 * The rule that carries the most weight: a crop may only be promoted if a
 * source was consulted for it. Identity and coverage are enough to conclude
 * that nobody should write an article yet; they are not enough to conclude that
 * somebody should.
 */
import {
  EVIDENCE_BASES,
  EVIDENCE_SUFFICIENT_OUTCOMES,
  PROMOTING_OUTCOMES,
  RESEARCH_OUTCOMES,
  SIGNIFICANCE_KINDS,
} from '../types/crop-research';
import { CROP_RESEARCH, RESEARCH_BY_SLUG } from '../data/crop-research';
import { allQualifications } from '../lib/crops/qualification';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PROMOTION_NOTES } from '../data/crop-identity/promotion-notes';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { PUBLICATION_BY_SLUG } from '../data/crop-publication';
import { CROP_EXPANSION_CANDIDATES } from '../data/crop-expansion';
import { PROMOTED_BY_LATER_WAVE } from '../lib/crops/promotion-mechanisms';
import { allRoutes } from '../lib/seo/routes';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const Q = allQualifications();
const routes = new Set(allRoutes().map((r) => r.path));
const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);
const noted = new Set(PROMOTION_NOTES.map((n) => n.slug));

/**
 * Crops a later wave published and accounts for, in checkable form.
 *
 * Two campaigns now write articles for crops this campaign answered: Wave 39's
 * publication reviews took up its deferrals, and Wave 40's expansion candidates
 * took up crops it had judged sufficient as taxon records. Neither contradicts
 * it — both outcomes were about editorial capacity and reader need, not about
 * evidence — but a page that NO layer accounts for still has to fail, so this
 * set is built from those layers rather than from "has a page".
 */
const accountedForByLaterWave = new Set([
  ...[...PUBLICATION_BY_SLUG.values()]
    .filter((r) => r.outcome === 'PUBLISHED')
    .map((r) => r.slug),
  ...CROP_EXPANSION_CANDIDATES.filter(
    (c) => c.recommendation === 'PUBLISH',
  ).map((c) => c.slug),
  ...PROMOTED_BY_LATER_WAVE.keys(),
]);
const conceptConstituents = new Set(
  CROP_CONCEPTS.flatMap((k) =>
    k.constituents.map((t) => t.identitySlug),
  ).filter((s): s is string => !!s),
);

/**
 * The queue this campaign was answerable for: every crop identity that was
 * neither published nor already carrying a promotion note when the wave began.
 * Rebuilt here from live state rather than read from the records, so a record
 * cannot define its own denominator.
 */
const queue = new Set(
  CROP_IDENTITIES.filter((c) => {
    if (noted.has(c.slug)) return false;
    const r = RESEARCH_BY_SLUG.get(c.slug);
    // Published crops belong in the queue only if this campaign published
    // them, OR if a later wave's publication campaign did and says so.
    //
    // Wave 39 wrote 49 of the crops this campaign returned as
    // READY_BUT_DEFER_EDITORIAL. Rebuilding the queue from "has no page"
    // alone would have dropped all 49 out of it and then reported their
    // research records as claims about crops the campaign was never
    // answerable for — the campaign's own success erasing its record of
    // having done the work. The publication layer is what accounts for
    // them, so this reads that layer rather than relaxing the rule: a
    // published crop stays in the queue only while something states, in
    // checkable form, which wave published it.
    if (publishedCrops.has(c.slug))
      return (
        (!!r && PROMOTING_OUTCOMES.includes(r.outcome)) ||
        accountedForByLaterWave.has(c.slug)
      );
    return true;
  }).map((c) => c.slug),
);

/* -- 1. the queue is fully answered, and nothing extra is claimed ---------- */
for (const slug of queue)
  if (!RESEARCH_BY_SLUG.has(slug))
    fail(
      `crop "${slug}" was in the research queue and has no outcome — the campaign's central claim is that this set is empty`,
    );
for (const r of CROP_RESEARCH) {
  if (!IDENTITY_BY_SLUG.has(r.slug))
    fail(`research record "${r.slug}" names a crop with no identity`);
  else if (!queue.has(r.slug))
    fail(
      `research record "${r.slug}" is not in the queue this campaign was answerable for`,
    );
}
{
  const seen = new Set<string>();
  for (const r of CROP_RESEARCH) {
    if (seen.has(r.slug)) fail(`research record "${r.slug}" appears twice`);
    seen.add(r.slug);
  }
}

/* -- 2. every record is well formed --------------------------------------- */
for (const r of CROP_RESEARCH) {
  const at = `research "${r.slug}"`;
  if (!RESEARCH_OUTCOMES.includes(r.outcome))
    fail(`${at}: outcome "${r.outcome}" is not in the vocabulary`);
  if (!ISO.test(r.researchedAt)) fail(`${at}: researchedAt is not an ISO date`);
  if (!r.finding?.trim() || r.finding.length < 60)
    fail(`${at}: gives no substantive finding`);
  if (!r.significance.length) fail(`${at}: records no kind of significance`);
  for (const s of r.significance)
    if (!SIGNIFICANCE_KINDS.includes(s))
      fail(`${at}: significance "${s}" is not in the vocabulary`);
  for (const b of r.evidenceBasis)
    if (!EVIDENCE_BASES.includes(b))
      fail(`${at}: evidence basis "${b}" is not in the vocabulary`);
  if (!r.evidenceBasis.includes('CORPUS_VERIFIED_IDENTITY'))
    fail(
      `${at}: every outcome rests on the verified identity; it is not recorded`,
    );
  // An outcome other than promotion has to say what would change it, or the
  // record is a verdict without a route back.
  if (!PROMOTING_OUTCOMES.includes(r.outcome) && !r.wouldChangeIf?.trim())
    fail(
      `${at}: outcome "${r.outcome}" and nothing recorded that would change it`,
    );
  if (PROMOTING_OUTCOMES.includes(r.outcome) && r.wouldChangeIf)
    fail(`${at}: promoted, and still records what would change the decision`);
}

/* -- 3. promotion requires a source consulted for that crop ---------------- */
for (const r of CROP_RESEARCH) {
  const at = `research "${r.slug}"`;
  const promoted = PROMOTING_OUTCOMES.includes(r.outcome);
  if (promoted) {
    if (!r.evidenceBasis.includes('SOURCE_CONSULTED'))
      fail(
        `${at}: promoted without a source consulted for this crop — identity and coverage can justify not writing an article, never writing one`,
      );
    if (!r.sourceIds?.length) fail(`${at}: promoted and names no source`);
    if (!publishedCrops.has(r.slug))
      fail(`${at}: records a promotion and no article is published`);
    if (!routes.has(`/crops/${r.slug}`))
      fail(`${at}: records a promotion and no route is emitted`);
    // A route is not discovery. A promoted crop that nothing links to is
    // reachable only from the sitemap and the search index, which is the
    // definition of the thin page this campaign exists not to produce.
    const inbound = PUBLISHED_CONTENT.filter(
      (c) =>
        c.contentType === 'crop' &&
        c.slug !== r.slug &&
        (
          (c as unknown as { relatedTopics?: { slug?: string }[] })
            .relatedTopics ?? []
        ).some((t) => t.slug === r.slug),
    );
    if (!inbound.length)
      fail(
        `${at}: promoted and no published crop links to it — a route without an inbound link is a sitemap-only page`,
      );
    const q = Q.find((x) => x.slug === r.slug);
    if (q && q.status !== 'FULL_PROFILE_ELIGIBLE')
      fail(
        `${at}: promoted and the qualification engine rates it "${q.status}"`,
      );
    if (IDENTITY_BY_SLUG.get(r.slug)?.profileDepth !== 'full-profile')
      fail(`${at}: promoted and the identity still says data-only`);
  } else if (
    publishedCrops.has(r.slug) &&
    !accountedForByLaterWave.has(r.slug)
  ) {
    // A non-promoting research outcome with a page is a contradiction unless a
    // later wave's publication campaign accounts for the page. Wave 39 wrote 49
    // of the crops this campaign deferred, and that is not the campaign being
    // wrong: the deferral was about editorial capacity, not evidence, and it
    // was recorded as such precisely so that a later wave could take it up.
    // What must not survive is a page nothing accounts for.
    fail(`${at}: outcome "${r.outcome}" and an article is published anyway`);
  }
  if (r.evidenceBasis.includes('SOURCE_CONSULTED') && !r.sourceIds?.length)
    fail(`${at}: claims a source was consulted and names none`);
  for (const s of r.sourceIds ?? [])
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);
  if (!r.evidenceBasis.includes('SOURCE_CONSULTED') && r.sourceIds?.length)
    fail(`${at}: names sources without recording that any was consulted`);
}

/* -- 4. an outcome may not describe something it does not describe --------- */
for (const r of CROP_RESEARCH) {
  const at = `research "${r.slug}"`;
  // The distinction the brief asks for explicitly: an editorial backlog is not
  // an evidence failure, and must not be filed as one.
  if (
    r.outcome === 'NEEDS_MORE_EVIDENCE' &&
    /sufficient evidence|evidence supports|enough evidence|deferred/i.test(
      r.finding,
    )
  )
    fail(
      `${at}: filed as an evidence failure while the finding says the evidence exists — that is an editorial deferral`,
    );
  // Deliberately anchored to the EVIDENCE, not to the words. The first version
  // of this rule fired on "projections that did not materialise" and "has
  // limited its spread" — descriptions of a crop's history, not of what is
  // known about it.
  const EVIDENCE_IS_THIN =
    /(evidence|sources?|literature|documentation|record)[^.]{0,48}(thin|limited|insufficient|not enough|lacking|sparse|absent)|(thin|limited|insufficient|sparse|no accessible)[^.]{0,32}(evidence|sources?|literature|documentation)/i;
  if (
    r.outcome === 'READY_BUT_DEFER_EDITORIAL' &&
    EVIDENCE_IS_THIN.test(r.finding)
  )
    fail(
      `${at}: filed as ready while the finding describes missing evidence — that is NEEDS_MORE_EVIDENCE`,
    );
  // A concept-complex outcome must name a crop that is actually inside a concept.
  if (
    r.outcome === 'AGRICULTURAL_CONCEPT_COMPLEX' &&
    !conceptConstituents.has(r.slug)
  )
    fail(
      `${at}: filed as concept-complex and is not a constituent of any declared concept scope`,
    );
  // A taxonomy-complex outcome must name a crop whose authorities really differ.
  if (r.outcome === 'TAXONOMY_COMPLEX') {
    const id = IDENTITY_BY_SLUG.get(r.slug);
    if (id && id.agreement === 'agreed')
      fail(
        `${at}: filed as taxonomy-complex and both authorities agree on the identity`,
      );
  }
  if (
    EVIDENCE_SUFFICIENT_OUTCOMES.includes(r.outcome) &&
    !r.significance.length
  )
    fail(
      `${at}: asserts the evidence is sufficient and records no significance`,
    );
}

/* -- 4b. an absence claim must be scoped to the corpus --------------------- */
/**
 * Principle A. "AgricultureID holds no market relation for this crop" is a
 * statement about the corpus and is checkable. "No market data exists for this
 * crop" is a statement about the world, and this corpus is in no position to
 * make it — the absence of a relation here means nobody has ingested one, not
 * that none exists.
 *
 * The check is deliberately narrow: it fires on a claim of universal absence,
 * not on the corpus-scoped form, which findings are free to use.
 */
{
  const UNIVERSAL_ABSENCE =
    /\b(none|nothing|no\s+\w+)\s+exists?\s+(anywhere|at all)\b|\bdoes not exist (anywhere|at all)\b|\bthere (is|are) no\b[^.]{0,60}\b(anywhere|in existence|at all)\b/i;
  for (const r of CROP_RESEARCH)
    if (UNIVERSAL_ABSENCE.test(r.finding))
      fail(
        `research "${r.slug}": the finding claims a universal absence. The corpus can say what it holds; it cannot say what exists — scope the claim to AgricultureID or label it NOT_RESEARCHED`,
      );
}

/* -- 5. no candidate silently left the queue ------------------------------- */
{
  const unreviewed = Q.filter(
    (q) =>
      q.promotionTier && !noted.has(q.slug) && !RESEARCH_BY_SLUG.has(q.slug),
  );
  if (unreviewed.length)
    fail(
      `${unreviewed.length} candidate(s) still carry a promotion tier with no research outcome: ${unreviewed
        .slice(0, 5)
        .map((q) => q.slug)
        .join(', ')}`,
    );
}

/* -- report ---------------------------------------------------------------- */
console.log('\nCrop research campaign\n');
console.log(
  `  Queue answered:               ${CROP_RESEARCH.length} of ${queue.size}`,
);
{
  const by = new Map<string, number>();
  for (const r of CROP_RESEARCH)
    by.set(r.outcome, (by.get(r.outcome) ?? 0) + 1);
  for (const o of RESEARCH_OUTCOMES)
    if (by.get(o))
      console.log(`    ${o.padEnd(32)}${String(by.get(o)).padStart(4)}`);
}
{
  const unreviewed = Q.filter(
    (q) =>
      q.promotionTier && !noted.has(q.slug) && !RESEARCH_BY_SLUG.has(q.slug),
  ).length;
  console.log(`\n  Unreviewed candidates:        ${unreviewed}`);
  const sourced = CROP_RESEARCH.filter((r) =>
    r.evidenceBasis.includes('SOURCE_CONSULTED'),
  ).length;
  console.log(`  Sources consulted for:        ${sourced} crop(s)`);
  console.log(`  Published crop articles:      ${publishedCrops.size}`);
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop research validation passed.\n');
