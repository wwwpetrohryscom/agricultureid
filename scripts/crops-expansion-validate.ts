/**
 * Deterministic gate for the Wave 40 expansion campaign. Offline.
 *
 * Two claims are being made and both are easy to make falsely.
 *
 * The first is that the wave was aimed at measured gaps rather than at a queue.
 * That is checked by recomputing every count in the composition audit from the
 * live corpus — `publishedAfter` directly, `publishedBefore` by subtracting the
 * candidates this wave actually published into the same bucket. A recorded gap
 * that the corpus does not reproduce is a failure.
 *
 * The second is that each crop is regionally significant. A regional claim is
 * the easiest thing in an encyclopedia to write and the hardest to check, so
 * the record has to name a place, and the validator looks for that place in the
 * crop's own published geographic scope. That does not make the claim true. It
 * does make it impossible to attach "important in Africa" to a page that never
 * mentions Africa, which is the failure this rule exists for.
 *
 * Everything else follows the pattern the earlier waves established: outcomes
 * reconciled in both directions against the corpus, prior state reconciled
 * against the layer it came from, search expectations run rather than described.
 */
import {
  COMPOSITION_DIMENSIONS,
  EXPANSION_RECOMMENDATIONS,
  PROMOTIONAL_PHRASES,
  REGION_PLACES,
  WORLD_REGIONS,
} from '../types/crop-expansion';
import {
  COMPOSITION_GAPS,
  CROP_EXPANSION_CANDIDATES,
} from '../data/crop-expansion';
import { RESEARCH_BY_SLUG } from '../data/crop-research';
import {
  CROP_SCOPE_REVIEWS,
  SCOPE_REVIEW_BY_SLUG,
} from '../data/crop-scope-review';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { articleText } from '../lib/crops/content-depth';
import { SOURCE_MAP } from '../lib/sources/registry';
import { allRoutes } from '../lib/seo/routes';
import { buildIndex, search } from '../lib/search/engine';
import { buildSearchDocuments } from '../lib/search/documents';
import { SYNONYMS } from '../data/search/synonyms';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const cropPages = new Map(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => [
    c.slug,
    c,
  ]),
);
const routes = new Set(allRoutes().map((r) => r.path));

const REF_FIELDS = ['relatedTopics', 'connections'];
const inbound = new Map<string, number>();
for (const c of PUBLISHED_CONTENT) {
  const o = c as unknown as Record<string, { type: string; slug: string }[]>;
  for (const f of REF_FIELDS)
    for (const ref of o[f] ?? [])
      if (ref.type === 'crop' && ref.slug !== c.slug)
        inbound.set(ref.slug, (inbound.get(ref.slug) ?? 0) + 1);
}

const index = buildIndex(buildSearchDocuments(), SYNONYMS);

/* -- 1. per-candidate ----------------------------------------------------- */
const seen = new Set<string>();
for (const c of CROP_EXPANSION_CANDIDATES) {
  const at = `expansion candidate "${c.slug}"`;
  if (seen.has(c.slug)) fail(`${at}: recorded twice`);
  seen.add(c.slug);
  if (!EXPANSION_RECOMMENDATIONS.includes(c.recommendation))
    fail(
      `${at}: recommendation "${c.recommendation}" is not in the vocabulary`,
    );
  if (!ISO.test(c.reviewedAt)) fail(`${at}: reviewedAt is not an ISO date`);
  if (!c.sourceIds.length) fail(`${at}: cites no source`);
  for (const s of c.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);

  const id = IDENTITY_BY_SLUG.get(c.slug);
  if (!id) fail(`${at}: names a crop identity that does not exist`);

  /* the prior state is reconciled against the layer it came from */
  const prior = RESEARCH_BY_SLUG.get(c.slug)?.outcome;
  if (prior && c.priorOutcome !== prior)
    fail(
      `${at}: records prior outcome "${c.priorOutcome}" and the research layer says "${prior}"`,
    );
  if (!prior && c.priorOutcome !== 'NO_RECORD')
    fail(`${at}: claims a prior outcome and the research layer has no record`);

  const page = cropPages.get(c.slug);
  if (c.recommendation === 'PUBLISH') {
    if (!page) fail(`${at}: recommends PUBLISH and no crop page exists`);
    else {
      if (!routes.has(`/crops/${c.slug}`))
        fail(`${at}: recommends PUBLISH and no route is emitted`);
      if (id && id.profileDepth !== 'full-profile')
        fail(`${at}: recommends PUBLISH and the identity says data-only`);
      if (!inbound.get(c.slug))
        fail(`${at}: recommends PUBLISH and no other crop page links to it`);
      /**
       * Representation is not a reason to lower the bar. A crop published to
       * fill a gap must have the same settled identity as any other, so an
       * unresolved authority disagreement blocks publication here exactly as
       * it would anywhere else.
       */
      if (id && id.agreement !== 'agreed')
        fail(
          `${at}: recommends PUBLISH and the authorities record "${id.agreement}" — a gap in coverage is not a reason to publish an unsettled identity`,
        );
    }
  } else if (page) {
    /*
     * A page for a candidate this wave declined is a contradiction unless a
     * later wave accounts for it. Wave 40 declined turnip, swede and kaffir
     * lime because no page owned their parent taxon; Wave 43 built the owners
     * and promoted all three. That is not Wave 40 being wrong — the block was
     * real and is what got it fixed — so the decline stands and the scope
     * review is what has to say the block was lifted.
     */
    const promoted =
      SCOPE_REVIEW_BY_SLUG.get(c.slug)?.outcome === 'PROMOTE_CHILD_PROFILE';
    if (!promoted)
      fail(
        `${at}: recommends ${c.recommendation} and a crop page exists — the decision and the corpus disagree`,
      );
  }

  /* -- regional significance, corroborated against the article ------------ */
  if (!c.significance.length) fail(`${at}: makes no significance claim`);
  for (const s of c.significance) {
    const where = `${at} · ${s.region}`;
    if (!WORLD_REGIONS.includes(s.region))
      fail(`${where}: region is not in the vocabulary`);
    if (s.statement.trim().length < 120)
      fail(
        `${where}: the significance statement is too short to say where, why and in what role`,
      );
    if (!s.sourceIds.length) fail(`${where}: cites no source`);
    for (const id2 of s.sourceIds)
      if (!SOURCE_MAP.has(id2)) fail(`${where}: names unknown source "${id2}"`);
    if (!s.corroboratedBy.trim())
      fail(`${where}: names no place to corroborate against`);
    else if (
      WORLD_REGIONS.includes(s.region) &&
      !REGION_PLACES[s.region].some((p) => s.corroboratedBy.includes(p))
    )
      fail(
        `${where}: corroborates on "${s.corroboratedBy}", which is not a place this region covers — the region label and the evidence disagree`,
      );
    else if (!s.statement.includes(s.corroboratedBy))
      fail(
        `${where}: corroborates on "${s.corroboratedBy}", which the statement never names`,
      );
    else if (page) {
      const scope = String(
        (page as unknown as { geographicScope?: string }).geographicScope ?? '',
      );
      if (!scope.includes(s.corroboratedBy))
        fail(
          `${where}: corroborates on "${s.corroboratedBy}" and the crop's own geographic scope never names it — a regional claim the page does not support`,
        );
    }
  }

  if (c.conceptStability.trim().length < 60)
    fail(`${at}: says nothing checkable about concept stability`);
  if (c.depthEvidence.trim().length < 60)
    fail(`${at}: says nothing checkable about publication-depth evidence`);

  /* -- search expectations, run ------------------------------------------- */
  for (const check of c.searchReview) {
    if (!check.mustWin && !(check.mustNotWin ?? []).length)
      fail(`${at}: search check "${check.query}" expects nothing`);
    const top = search(index, check.query, { limit: 3 }).results[0];
    const title = top?.doc.title ?? '(nothing)';
    if (check.mustWin && title !== check.mustWin)
      fail(
        `${at}: search "${check.query}" must return "${check.mustWin}" and returns "${title}"`,
      );
    for (const bad of check.mustNotWin ?? [])
      if (title === bad)
        fail(`${at}: search "${check.query}" must not return "${bad}"`);
  }
}

/* -- 2. the composition audit, recomputed --------------------------------- */
const inBucket = (slug: string, dimension: string, bucket: string): boolean => {
  const id = IDENTITY_BY_SLUG.get(slug);
  if (!id) return false;
  const groups: readonly string[] = id.cropGroups ?? [];
  const uses: readonly string[] = id.agriculturalUses ?? [];
  if (dimension === 'crop-group') return groups.includes(bucket);
  if (dimension === 'growth-habit') return String(id.growthHabit) === bucket;
  if (dimension === 'agricultural-use') return uses.includes(bucket);
  return false;
};
const publishedThisWave = CROP_EXPANSION_CANDIDATES.filter(
  (c) => c.recommendation === 'PUBLISH',
).map((c) => c.slug);

/** Crops published after this layer's wave, by the mechanisms that exist. */
const publishedLater = new Set(
  CROP_SCOPE_REVIEWS.filter((r) => r.outcome === 'PROMOTE_CHILD_PROFILE').map(
    (r) => r.slug,
  ),
);

for (const g of COMPOSITION_GAPS) {
  const at = `composition gap ${g.dimension}/${g.bucket}`;
  if (!COMPOSITION_DIMENSIONS.includes(g.dimension))
    fail(`${at}: dimension is not in the vocabulary`);
  const known = CROP_IDENTITIES.some((i) =>
    inBucket(i.slug, g.dimension, g.bucket),
  );
  if (!known) fail(`${at}: no crop identity is in this bucket at all`);
  const after = [...cropPages.keys()].filter((s) =>
    inBucket(s, g.dimension, g.bucket),
  ).length;
  const added = publishedThisWave.filter((s) =>
    inBucket(s, g.dimension, g.bucket),
  ).length;
  /*
   * Both counts stay EXACT, and both are anchored to the wave rather than to
   * now.
   *
   * `publishedAfter` used to be compared with the live count, which held until
   * a later wave published into one of these buckets — Wave 43 put turnip and
   * swede into two of them. Relaxing it to a floor would have been the wrong
   * repair: the record is a measurement of what this bucket held at the end of
   * THIS wave, and that quantity is recomputable forever as the members it had
   * before plus the ones this wave published into it. Nothing a later wave
   * does can change either term.
   */
  if (g.publishedBefore !== g.bucketBefore.length)
    fail(
      `${at}: records ${g.publishedBefore} before the wave and lists ${g.bucketBefore.length} article(s)`,
    );
  if (g.publishedAfter !== g.bucketBefore.length + added)
    fail(
      `${at}: records ${g.publishedAfter} articles at the end of the wave and the corpus computes ${g.bucketBefore.length + added} (${g.bucketBefore.length} before, ${added} published into it here)`,
    );
  if (added === 0)
    fail(
      `${at}: is recorded as a gap the wave addressed and nothing was published into it`,
    );
  /**
   * The membership, not only the count.
   *
   * A count cannot contradict a finding about what a bucket did or did not
   * contain. The first draft of these records claimed "not one of them a
   * tropical pasture species" of a bucket that already held napier grass, and
   * every count agreed with it. Recomputing the list is what makes a finding
   * about membership answerable.
   */
  const nowInBucket = [...cropPages.keys()].filter((s) =>
    inBucket(s, g.dimension, g.bucket),
  );
  const declared = [...g.bucketBefore].sort();
  const missing = declared.filter((x) => !nowInBucket.includes(x));
  const wronglyClaimed = declared.filter((x) => publishedThisWave.includes(x));
  /*
   * And the other direction, kept total.
   *
   * A crop in this bucket that is neither listed as prior nor published by
   * this wave has to be a LATER wave's. `publishedLater` is the set of
   * mechanisms by which that can have happened, enumerated rather than
   * assumed: today the scope-review layer's promotions are the only one. A
   * future wave that publishes some other way will fail here until it is added
   * — which is the point. Dropping the direction instead would let an
   * unexplained member sit in a bucket a finding is written about.
   */
  const unexplained = nowInBucket.filter(
    (s) =>
      !declared.includes(s) &&
      !publishedThisWave.includes(s) &&
      !publishedLater.has(s),
  );
  if (missing.length || wronglyClaimed.length || unexplained.length)
    fail(
      `${at}: the bucket and the record disagree — no longer in the bucket: ${missing.join(', ') || 'none'}; listed as prior yet published by this wave: ${wronglyClaimed.join(', ') || 'none'}; in the bucket and accounted for by nothing: ${unexplained.join(', ') || 'none'}`,
    );
  if (g.finding.trim().length < 80)
    fail(`${at}: states a count without a finding`);
}

/* -- 3. promotional language, across every crop article ------------------- */
for (const c of cropPages.values()) {
  const text =
    `${(c as unknown as { summary: string }).summary} ${articleText(c)}`.toLowerCase();
  for (const phrase of PROMOTIONAL_PHRASES)
    if (text.includes(phrase))
      fail(
        `crop "${c.slug}": uses the promotional phrase "${phrase}" — state the agronomy the phrase stands in for`,
      );
}

/* -- 4. report ------------------------------------------------------------ */
const counts = new Map<string, number>();
for (const c of CROP_EXPANSION_CANDIDATES)
  counts.set(c.recommendation, (counts.get(c.recommendation) ?? 0) + 1);
const regions = new Map<string, number>();
for (const c of CROP_EXPANSION_CANDIDATES)
  for (const s of c.significance)
    regions.set(s.region, (regions.get(s.region) ?? 0) + 1);

console.log('\nAgricultureID — crop expansion campaign (Wave 40)\n');
console.log(
  `  Candidates reviewed:          ${CROP_EXPANSION_CANDIDATES.length}`,
);
for (const [k, v] of [...counts].sort()) console.log(`    ${k.padEnd(28)}${v}`);
console.log(`  Composition gaps recorded:    ${COMPOSITION_GAPS.length}`);
console.log('  Regional claims by region:');
for (const [k, v] of [...regions].sort((a, b) => b[1] - a[1]))
  console.log(`    ${k.padEnd(28)}${v}`);
const checks = CROP_EXPANSION_CANDIDATES.reduce(
  (n, c) => n + c.searchReview.length,
  0,
);
console.log(`  Search checks executed:       ${checks}`);

if (errors.length) {
  console.log(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors) console.log(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop expansion validation passed.\n');
