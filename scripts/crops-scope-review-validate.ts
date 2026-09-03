/**
 * Deterministic gate for the Wave 41 concept scope review. Offline.
 *
 * The claim is that no crop is left labelled "complex" without a current
 * decision, and that every decision describes an arrangement the corpus
 * actually has. Both halves are checked against live state:
 *
 *   - the queue is rebuilt from the research layer and from the two campaigns
 *     that handed candidates forward, so a review cannot define its own
 *     denominator and a candidate cannot quietly drop out of it;
 *   - a candidate kept under an umbrella must BE a constituent of that
 *     umbrella's concept record — the review says where the crop lives and the
 *     concept layer is asked whether it lives there;
 *   - a promoted child must have a page and an alias-only resolution must have
 *     a crosswalk entry, both recomputed.
 *
 * The rule that carries the most weight is the first one. "Complex" is a label
 * that stays true while the corpus changes around it, which is exactly why a
 * campaign to remove it has to be reconciled against the layer that produced
 * it rather than counted on its own.
 */
import {
  CONCEPT_BOUND_OUTCOMES,
  MIN_DIMENSIONS_INSPECTED,
  SCOPE_DIMENSIONS,
  SCOPE_OUTCOMES,
} from '../types/crop-scope-review';
import {
  CROP_SCOPE_REVIEWS,
  SCOPE_REVIEW_BY_SLUG,
} from '../data/crop-scope-review';
import { CROP_CONCEPTS } from '../data/crop-identity/concepts';
import { promotedByLaterWave } from '../lib/crops/promotion-mechanisms';
import { NAME_CROSSWALK } from '../data/crop-identity/name-crosswalk';
import { CROP_RESEARCH } from '../data/crop-research';
import { CROP_PUBLICATION_REVIEWS } from '../data/crop-publication';
import { CROP_EXPANSION_CANDIDATES } from '../data/crop-expansion';
import { IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { SOURCE_MAP } from '../lib/sources/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const publishedCrops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

/** Which concept, if any, actually lists this crop as a constituent. */
const conceptOf = new Map<string, string>();
for (const k of CROP_CONCEPTS)
  for (const t of k.constituents)
    if (t.identitySlug) conceptOf.set(t.identitySlug, k.slug);
const conceptSlugs = new Set(CROP_CONCEPTS.map((k) => k.slug));

/* -- 1. the queue, rebuilt from the layers that produced it ---------------- */
const COMPLEX_OUTCOMES = [
  'AGRICULTURAL_CONCEPT_COMPLEX',
  'TAXONOMY_COMPLEX',
  'DUPLICATES_EXISTING_CONCEPT',
];
const queue = new Map<string, string>();
for (const r of CROP_RESEARCH)
  if (COMPLEX_OUTCOMES.includes(r.outcome)) queue.set(r.slug, r.outcome);
for (const r of CROP_PUBLICATION_REVIEWS)
  if (r.outcome !== 'PUBLISHED') queue.set(r.slug, `publication:${r.outcome}`);
for (const c of CROP_EXPANSION_CANDIDATES)
  if (c.recommendation === 'DECLINE_SCOPE_UNRESOLVED')
    queue.set(c.slug, `expansion:${c.recommendation}`);

for (const [slug, prior] of queue) {
  const r = SCOPE_REVIEW_BY_SLUG.get(slug);
  if (!r) {
    fail(
      `crop "${slug}" is classified "${prior}" and has no scope review — "complex" is a label that stays true while the corpus changes around it`,
    );
    continue;
  }
  if (r.priorState !== prior)
    fail(
      `scope review "${slug}": records prior state "${r.priorState}" and the layer it came from says "${prior}"`,
    );
}

const seen = new Set<string>();
for (const r of CROP_SCOPE_REVIEWS) {
  const at = `scope review "${r.slug}"`;
  if (seen.has(r.slug)) fail(`${at}: recorded twice`);
  seen.add(r.slug);
  if (!queue.has(r.slug))
    fail(
      `${at}: reviews a crop that no layer classified as complex or handed forward`,
    );
  if (!SCOPE_OUTCOMES.includes(r.outcome))
    fail(`${at}: outcome "${r.outcome}" is not in the vocabulary`);
  if (!ISO.test(r.reviewedAt)) fail(`${at}: reviewedAt is not an ISO date`);
  if (!IDENTITY_BY_SLUG.has(r.slug))
    fail(`${at}: names a crop identity that does not exist`);
  if (!r.sourceIds.length) fail(`${at}: cites no source`);
  for (const s of r.sourceIds)
    if (!SOURCE_MAP.has(s)) fail(`${at}: names unknown source "${s}"`);

  /* -- the dimensions actually inspected --------------------------------- */
  if (r.dimensionsInspected.length < MIN_DIMENSIONS_INSPECTED)
    fail(
      `${at}: inspected ${r.dimensionsInspected.length} dimension(s); a review of a concept that looked at fewer than ${MIN_DIMENSIONS_INSPECTED} looked at taxonomy and stopped`,
    );
  const dseen = new Set<string>();
  for (const d of r.dimensionsInspected) {
    if (!SCOPE_DIMENSIONS.includes(d))
      fail(`${at}: dimension "${d}" is not in the vocabulary`);
    if (dseen.has(d)) fail(`${at}: lists dimension "${d}" twice`);
    dseen.add(d);
  }

  /* -- the finding and the escape hatch ---------------------------------- */
  if (r.finding.trim().length < 120)
    fail(`${at}: the finding is too short to be a finding about this crop`);
  if (!r.wouldChangeIf.trim())
    fail(`${at}: does not say what would change the answer`);
  const id = IDENTITY_BY_SLUG.get(r.slug);
  /**
   * A finding has to be about this crop.
   *
   * The cheapest way to answer thirty-nine reviews is to write one sentence
   * thirty-nine times. Requiring the accepted name or the common name in the
   * text does not make a finding good, but it does make a generic one
   * impossible to file without noticing.
   */
  if (
    id &&
    !r.finding.includes(id.acceptedScientificName.split(' ')[0]!) &&
    !r.finding.toLowerCase().includes(id.primaryCommonName.toLowerCase())
  )
    fail(
      `${at}: the finding never names the crop it is about, so it could be about any of them`,
    );

  /* -- the outcome, reconciled against the corpus ------------------------- */
  if (CONCEPT_BOUND_OUTCOMES.includes(r.outcome)) {
    if (!r.conceptSlug) fail(`${at}: says ${r.outcome} and names no concept`);
    else {
      if (!conceptSlugs.has(r.conceptSlug))
        fail(`${at}: names concept "${r.conceptSlug}", which does not exist`);
      const actual = conceptOf.get(r.slug);
      if (actual !== r.conceptSlug)
        fail(
          `${at}: says it sits under "${r.conceptSlug}" and the concept layer places it under "${actual ?? 'nothing'}"`,
        );
    }
  } else if (r.outcome === 'PROMOTE_CHILD_PROFILE' && r.conceptSlug) {
    /*
     * A promotion may name the concept it was promoted UNDER, and where it
     * does the claim is checked the same way as a concept-bound outcome. It is
     * optional rather than required: Wave 43 promoted four children, two under
     * the citrus concept and two under parents that are owned by a scope record
     * with no page, and demanding a concept for all four would have forced a
     * page into existence to satisfy a field.
     */
    if (!conceptSlugs.has(r.conceptSlug))
      fail(`${at}: names concept "${r.conceptSlug}", which does not exist`);
    else if (conceptOf.get(r.slug) !== r.conceptSlug)
      fail(
        `${at}: was promoted under "${r.conceptSlug}" and the concept layer places it under "${conceptOf.get(r.slug) ?? 'nothing'}"`,
      );
  } else if (r.conceptSlug) {
    fail(`${at}: says ${r.outcome} and names a concept anyway`);
  }

  if (r.outcome === 'PROMOTE_CHILD_PROFILE' && !publishedCrops.has(r.slug))
    fail(`${at}: says the child was promoted and no crop page exists`);
  /*
   * Same reconciliation as the publication and expansion layers. Wave 41 kept
   * jute mallow inside the jute umbrella, which was right about the fibre
   * crop; Wave 44 found sixty-eight FAO calendar rows for the LEAF crop across
   * two labels and wrote it up. The umbrella decision stands and the record
   * that accounts for the page lives in another layer.
   */
  if (
    r.outcome !== 'PROMOTE_CHILD_PROFILE' &&
    publishedCrops.has(r.slug) &&
    !promotedByLaterWave(r.slug)
  )
    fail(
      `${at}: says ${r.outcome} and a crop page exists — the decision and the corpus disagree`,
    );
  if (r.outcome === 'ALIAS_ONLY') {
    const name = id?.primaryCommonName.toLowerCase();
    if (!NAME_CROSSWALK.some((n) => n.name.toLowerCase() === name))
      fail(
        `${at}: says the answer is an alias and the crosswalk has no entry for "${name}"`,
      );
  }
  if (r.outcome === 'DEFER_UNRESOLVED' && r.wouldChangeIf.trim().length < 60)
    fail(
      `${at}: defers without saying, at any length, what would settle it — which is the difference between a deferral and a shrug`,
    );
}

/* -- 2. report ------------------------------------------------------------ */
const counts = new Map<string, number>();
for (const r of CROP_SCOPE_REVIEWS)
  counts.set(r.outcome, (counts.get(r.outcome) ?? 0) + 1);

console.log('\nAgricultureID — complex crop concept review (Wave 41)\n');
console.log(`  Queue rebuilt:                ${queue.size}`);
console.log(`  Reviews recorded:             ${CROP_SCOPE_REVIEWS.length}`);
for (const [k, v] of [...counts].sort((a, b) => b[1] - a[1]))
  console.log(`    ${k.padEnd(30)}${v}`);
console.log(`  Concepts declared:            ${CROP_CONCEPTS.length}`);
const dims = new Map<string, number>();
for (const r of CROP_SCOPE_REVIEWS)
  for (const d of r.dimensionsInspected) dims.set(d, (dims.get(d) ?? 0) + 1);
console.log('  Dimensions inspected:');
for (const [k, v] of [...dims].sort((a, b) => b[1] - a[1]))
  console.log(`    ${k.padEnd(30)}${v}`);

if (errors.length) {
  console.log(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors) console.log(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop scope review validation passed.\n');
