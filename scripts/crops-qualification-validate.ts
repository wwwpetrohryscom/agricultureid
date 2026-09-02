/**
 * Deterministic gate for the crop qualification layer. Offline.
 *
 * What it prevents is a page that has quietly stopped meeting the standard, and
 * a taxon that has quietly acquired a page:
 *
 *   a published crop whose article can no longer carry it
 *   a data-only taxon with a route
 *   a qualification that agrees with the record because the record says so
 *   a status that does not follow from its own checks
 *   a route with no qualification behind it, or a qualification for a crop
 *     that no longer exists
 *   an enrichment count claimed from a relation that does not resolve
 */
import {
  BLOCKER_KINDS,
  CHECK_RESULTS,
  COVERAGE_RESULTS,
  PROMOTION_TIERS,
  PROMOTION_TIER_MEANING,
  QUALIFICATION_STATUSES,
  ROUTABLE_STATUSES,
} from '../types/crop-qualification';
import { allQualifications, promotionQueue } from '../lib/crops/qualification';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '../lib/crops/identity';
import { PROMOTION_NOTES } from '../data/crop-identity/promotion-notes';
import { SOURCE_MAP } from '../lib/sources/registry';
import { PUBLISHED_CONTENT } from '../lib/content/registry';
import { allRoutes } from '../lib/seo/routes';
import {
  SHARED_RUN_IS_PROSE,
  SIMILARITY_REVIEW_THRESHOLD,
  flaggedPairs,
} from '../lib/crops/content-depth';
import {
  DEBT_VERDICTS,
  RESOLVED_SIMILAR_PAIRS,
  REVIEWED_PAIRS,
  REVIEWED_PAIR_KEY,
  REVIEWED_SIMILAR_PAIRS,
  SIMILARITY_VERDICTS,
} from '../data/crop-identity/similar-pairs';
import { calendarsForCrop } from '../lib/calendars/registry';
import { costsForCrop } from '../lib/economics/registry';
import { EXTENSION_RESOURCES } from '../lib/extension/registry';
import { VARIETY_REGISTRATIONS } from '../lib/varieties/registry';
import { seriesForCommodity } from '../lib/markets/registry';

const errors: string[] = [];
const fail = (m: string) => errors.push(m);
const ISO = /^\d{4}-\d{2}-\d{2}$/;

const Q = allQualifications();
const routes = new Set(allRoutes().map((r) => r.path));
const cropRoutes = [...routes].filter(
  (p) => /^\/crops\/[^/]+$/.test(p) && p !== '/crops/taxa',
);
const cropArticles = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const articles = new Set(cropArticles.map((c) => c.slug));

/**
 * The universe of identifiers each enrichment dimension is allowed to name,
 * rebuilt here from the corpus rather than imported from the module under test.
 * A count is only as true as the things it counted, and this is what makes
 * those things checkable.
 */
const slugsOf = (t: string) =>
  new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === t).map((c) => c.slug),
  );
const ENRICHMENT_UNIVERSE: Record<string, Set<string>> = {
  calendars: new Set(
    [...articles].flatMap((s) => calendarsForCrop(s).map((c) => c.id)),
  ),
  cultivars: slugsOf('cultivar'),
  varietyRegistrations: new Set(
    VARIETY_REGISTRATIONS.map((r) => (r as unknown as { id: string }).id),
  ),
  extension: new Set(
    EXTENSION_RESOURCES.map((e) => (e as unknown as { id: string }).id),
  ),
  biosecurity: new Set([
    ...[...slugsOf('pest')].map((s) => `pest:${s}`),
    ...[...slugsOf('plant-disease')].map((s) => `plant-disease:${s}`),
  ]),
  soils: slugsOf('soil'),
  climate: slugsOf('climate'),
  economics: new Set(
    [...articles].flatMap((s) => costsForCrop(s).map((o) => o.id)),
  ),
  // Added in Wave 34, when markets stopped being reported as not-modelled.
  // Built from the commodity side so it is independent of the concordance the
  // qualification module reads.
  markets: new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').flatMap(
      (c) => seriesForCommodity(c.slug).map((s) => `${c.slug}:${s.id}`),
    ),
  ),
};

/* -- every identity is evaluated, exactly once ----------------------------- */
if (Q.length !== CROP_IDENTITIES.length)
  fail(
    `${Q.length} qualifications for ${CROP_IDENTITIES.length} identities — every crop must be evaluated`,
  );
{
  const seen = new Set<string>();
  for (const q of Q) {
    if (seen.has(q.slug)) fail(`${q.slug}: evaluated twice`);
    seen.add(q.slug);
    if (!IDENTITY_BY_SLUG.has(q.slug))
      fail(`${q.slug}: a qualification for a crop that has no identity`);
  }
  for (const c of CROP_IDENTITIES)
    if (!seen.has(c.slug)) fail(`${c.slug}: identity with no qualification`);
}

for (const q of Q) {
  const at = `qualification "${q.slug}"`;

  /* -- vocabularies ------------------------------------------------------- */
  if (!QUALIFICATION_STATUSES.includes(q.status))
    fail(`${at}: status "${q.status}" is not in the vocabulary`);
  if (!ISO.test(q.evaluatedAt)) fail(`${at}: evaluatedAt is not an ISO date`);
  for (const [name, c] of Object.entries(q.hardGates)) {
    if (!CHECK_RESULTS.includes(c.result))
      fail(`${at}: gate "${name}" has a result not in the vocabulary`);
    if (!c.detail?.trim())
      fail(
        `${at}: gate "${name}" states no detail — a check with no explanation cannot be acted on`,
      );
  }
  for (const [name, c] of Object.entries(q.enrichment)) {
    if (!COVERAGE_RESULTS.includes(c.result))
      fail(`${at}: enrichment "${name}" has a result not in the vocabulary`);
    if (!c.derivedFrom?.trim())
      fail(`${at}: enrichment "${name}" does not say how it was derived`);
    if (c.count < 0) fail(`${at}: enrichment "${name}" has a negative count`);
    // A count without coverage, or coverage without a count, is a contradiction.
    if (c.result === 'missing' && c.count > 0)
      fail(`${at}: enrichment "${name}" is missing but counts ${c.count}`);
    if ((c.result === 'available' || c.result === 'partial') && c.count === 0)
      fail(`${at}: enrichment "${name}" claims coverage with a count of zero`);
    if (c.result === 'not-modelled' && c.count > 0)
      fail(`${at}: enrichment "${name}" is not modelled but counts ${c.count}`);
    // The count has to BE the things counted, and each of them has to exist.
    // Without this a broken relation raises coverage exactly as a real one
    // does, which is the difference between a claim and an assertion.
    if (c.count !== c.refs.length)
      fail(
        `${at}: enrichment "${name}" counts ${c.count} and names ${c.refs.length} — a count that is not the things counted`,
      );
    if (new Set(c.refs).size !== c.refs.length)
      fail(`${at}: enrichment "${name}" counts the same relation twice`);
    const universe = ENRICHMENT_UNIVERSE[name];
    if (universe) {
      for (const r of c.refs)
        if (!universe.has(r))
          fail(
            `${at}: enrichment "${name}" counts "${r}", which does not resolve to anything in the corpus`,
          );
    } else if (c.refs.length) {
      // markets and trade are declared not-modelled; refs there would be a
      // count smuggled in under a dimension that says it counts nothing.
      fail(`${at}: enrichment "${name}" names refs but is not modelled`);
    }
  }
  for (const b of q.blockers) {
    if (!BLOCKER_KINDS.includes(b.kind))
      fail(`${at}: blocker kind "${b.kind}" is not in the vocabulary`);
    if (!b.detail?.trim()) fail(`${at}: a blocker with no explanation`);
  }

  /* -- the status must follow from the checks ------------------------------ */
  const g = q.hardGates;
  const allPass =
    g.taxonomy.result === 'pass' &&
    g.agriculturalIdentity.result === 'pass' &&
    g.contentDepth.result === 'pass' &&
    g.sourceIntegrity.result === 'pass' &&
    g.identityConsistency.result === 'pass';
  if (q.status === 'FULL_PROFILE_ELIGIBLE' && !allPass)
    fail(
      `${at}: eligible for a full profile while a hard gate does not pass — the status does not follow from its own checks`,
    );
  if (allPass && q.status !== 'FULL_PROFILE_ELIGIBLE')
    fail(`${at}: every hard gate passes and the status is "${q.status}"`);
  if (q.status === 'BLOCKED_DEPTH' && g.contentDepth.result !== 'fail')
    fail(`${at}: blocked on depth while the depth gate does not fail`);
  if (
    q.status === 'BLOCKED_IDENTITY' &&
    g.taxonomy.result === 'pass' &&
    g.agriculturalIdentity.result === 'pass' &&
    g.sourceIntegrity.result === 'pass'
  )
    fail(`${at}: blocked on identity while every identity gate passes`);
  if (q.status === 'DATA_ONLY' && g.contentDepth.result !== 'not-applicable')
    fail(`${at}: data-only while an article exists to measure`);
  if (q.blockers.length === 0 && q.status !== 'FULL_PROFILE_ELIGIBLE')
    fail(`${at}: status "${q.status}" with no blocker explaining it`);

  /* -- reconcile with what is actually published --------------------------- */
  // This is the check the whole layer exists for. It compares the judgement
  // against the emitted route list, not against a field the record sets about
  // itself.
  const routed = routes.has(`/crops/${q.slug}`);
  if (routed !== q.hasPublishedRoute)
    fail(
      `${at}: records hasPublishedRoute=${q.hasPublishedRoute}; the route list says ${routed}`,
    );
  if (routed && !ROUTABLE_STATUSES.includes(q.status))
    fail(
      `${at}: /crops/${q.slug} is published and the crop qualifies only as "${q.status}"`,
    );
  if (!routed && q.status === 'FULL_PROFILE_ELIGIBLE')
    fail(
      `${at}: qualifies for a full profile and has no route — promotion is a deliberate act, so this is a state nothing should produce`,
    );
  // An identity's own profileDepth is the PUBLISHED state and must agree with
  // the route list. The qualification never reads it; this is where the two
  // are brought together.
  const depth = IDENTITY_BY_SLUG.get(q.slug)?.profileDepth;
  if (depth === 'full-profile' && !routed)
    fail(`${at}: marked full-profile and no route is emitted`);
  if (depth === 'data-only' && routed)
    fail(`${at}: marked data-only and /crops/${q.slug} is emitted`);

  /* -- promotion tier ------------------------------------------------------ */
  if (q.status === 'FULL_PROFILE_ELIGIBLE' && q.promotionTier)
    fail(`${at}: already eligible and still carries a promotion tier`);
  if (q.status !== 'FULL_PROFILE_ELIGIBLE' && !q.promotionTier)
    fail(`${at}: not eligible and carries no promotion tier`);
  if (q.promotionTier) {
    if (!PROMOTION_TIERS.includes(q.promotionTier))
      fail(
        `${at}: promotion tier "${q.promotionTier}" is not in the vocabulary`,
      );
    else if (!PROMOTION_TIER_MEANING[q.promotionTier]?.trim())
      fail(`${at}: promotion tier "${q.promotionTier}" has no stated meaning`);
  }
}

/* -- every crop route has a qualification behind it ------------------------ */
for (const p of cropRoutes) {
  const slug = p.replace('/crops/', '');
  if (!Q.some((q) => q.slug === slug))
    fail(
      `route ${p} is emitted and no crop qualification exists for it — a page nothing has judged`,
    );
}
/* -- and no qualification names a crop that has gone ----------------------- */
for (const q of Q)
  if (q.hasPublishedRoute && !articles.has(q.slug))
    fail(`${q.slug}: routed and no article exists`);

/* -- every flagged similar pair has been looked at -------------------------- */
// The similarity metric produces a number for 11,628 pairs. A number nobody
// has to account for is a number that gets ignored — which is what happened
// when this layer was first built. Pinning the flagged pairs is what makes the
// measurement bind: a new pair cannot appear without a human verdict, and the
// prose reuse already recorded cannot grow.
{
  const flagged = flaggedPairs(cropArticles);
  const seen = new Set<string>();
  for (const p of flagged) {
    const key = REVIEWED_PAIR_KEY(p.a, p.b);
    seen.add(key);
    const rec = REVIEWED_PAIRS.get(key);
    if (!rec) {
      fail(
        `${p.a} and ${p.b} share ${(p.overlap * 100).toFixed(1)}% of their five-word phrasing (${p.longestRun} identical words in a row) and no one has reviewed the pair`,
      );
      continue;
    }
    if (p.longestRun > rec.longestRun)
      fail(
        `${p.a}/${p.b}: identical run has grown from ${rec.longestRun} to ${p.longestRun} words since review — reuse may be paid down, never added to`,
      );
    // Debt verdicts must not survive a wave: a pair reviewed as copied
    // crop-specific prose is a thing to fix, not a thing to record.
    if (DEBT_VERDICTS.includes(rec.verdict))
      fail(
        `${p.a}/${p.b}: reviewed as ${rec.verdict} and still flagged — copied crop-specific prose is debt to be rewritten, not a verdict to keep`,
      );
    if (
      rec.verdict === 'SHARED_DEFINITION' &&
      p.longestRun >= SHARED_RUN_IS_PROSE * 3
    )
      fail(
        `${p.a}/${p.b}: reviewed as a shared definition, but ${p.longestRun} identical words in a row is a passage, not a definition`,
      );
  }
  for (const r of REVIEWED_SIMILAR_PAIRS) {
    if (!articles.has(r.a) || !articles.has(r.b))
      fail(
        `reviewed pair ${r.a}/${r.b} names a crop with no published article`,
      );
    else if (!seen.has(REVIEWED_PAIR_KEY(r.a, r.b)))
      fail(
        `reviewed pair ${r.a}/${r.b} no longer overlaps above the threshold — remove it so the register stays a record of what is true`,
      );
    if (!r.reason?.trim() || r.reason.length < 40)
      fail(`reviewed pair ${r.a}/${r.b} gives no substantive reason`);
    if (!ISO.test(r.reviewedAt))
      fail(`reviewed pair ${r.a}/${r.b} has no ISO review date`);
    if (!SIMILARITY_VERDICTS.includes(r.verdict))
      fail(`reviewed pair ${r.a}/${r.b} has a verdict outside the vocabulary`);
  }
  // A rewrite that comes undone must name itself rather than arriving as a
  // brand-new pair for someone to review from scratch.
  for (const r of RESOLVED_SIMILAR_PAIRS) {
    const key = REVIEWED_PAIR_KEY(r.a, r.b);
    if (seen.has(key) && !REVIEWED_PAIRS.has(key))
      fail(
        `${r.a}/${r.b} was rewritten on ${r.resolvedAt} and is flagged again — the rewrite has regressed`,
      );
    if (!articles.has(r.a) || !articles.has(r.b))
      fail(
        `resolved pair ${r.a}/${r.b} names a crop with no published article`,
      );
    if (!r.wasSharing?.trim() || r.wasSharing.length < 40)
      fail(`resolved pair ${r.a}/${r.b} does not say what was shared`);
  }
}

/* -- the editorial register ------------------------------------------------ */
for (const n of PROMOTION_NOTES) {
  if (!IDENTITY_BY_SLUG.has(n.slug))
    fail(`promotion note names "${n.slug}", which is not a crop identity`);
  if (!SOURCE_MAP.has(n.sourceId))
    fail(`promotion note for "${n.slug}" names an unknown source`);
  if (!n.reason?.trim() || n.reason.length < 60)
    fail(`promotion note for "${n.slug}" gives no substantive reason`);
  if (!ISO.test(n.notedAt))
    fail(`promotion note for "${n.slug}" has no ISO date`);
  const q = Q.find((x) => x.slug === n.slug);
  // Both directions. A note that has not been acted on must name a candidate;
  // a note that HAS been acted on must name a page that exists. Checking only
  // the first would let a promotion be recorded that never happened.
  if (!n.promotedAt && q?.hasPublishedRoute)
    fail(
      `promotion note for "${n.slug}" names a crop that already has a page and records no promotion date`,
    );
  if (n.promotedAt) {
    if (!ISO.test(n.promotedAt))
      fail(`promotion note for "${n.slug}" has a non-ISO promotion date`);
    if (!q?.hasPublishedRoute)
      fail(
        `promotion note for "${n.slug}" records a promotion on ${n.promotedAt} and no page is published`,
      );
    if (q && q.status !== 'FULL_PROFILE_ELIGIBLE')
      fail(
        `promotion note for "${n.slug}" records a promotion and the crop qualifies only as "${q.status}"`,
      );
    const r = n.promotionReview;
    if (!r)
      fail(
        `promotion note for "${n.slug}" records a promotion with no per-crop review behind it`,
      );
    else {
      if (!r.materialSufficient)
        fail(
          `promotion note for "${n.slug}" was promoted although the review found the material insufficient`,
        );
      if (!r.distinctFrom?.trim())
        fail(
          `promotion note for "${n.slug}" does not say what the new page is distinct from`,
        );
      if (!r.finding?.trim() || r.finding.length < 80)
        fail(
          `promotion note for "${n.slug}" gives no substantive review finding`,
        );
      // A promoted species must be reachable from the page it was split out
      // of, and must point back. A page nothing links to is not published in
      // any sense that matters to a reader.
      if (r.distinctFromSlug) {
        const parent = PUBLISHED_CONTENT.find(
          (c) => c.contentType === 'crop' && c.slug === r.distinctFromSlug,
        ) as { relatedTopics?: { slug?: string }[] } | undefined;
        const child = PUBLISHED_CONTENT.find(
          (c) => c.contentType === 'crop' && c.slug === n.slug,
        ) as { relatedTopics?: { slug?: string }[] } | undefined;
        if (!parent)
          fail(
            `promotion note for "${n.slug}" names distinctFromSlug "${r.distinctFromSlug}", which is not a published crop`,
          );
        else if (!(parent.relatedTopics ?? []).some((t) => t.slug === n.slug))
          fail(
            `"${r.distinctFromSlug}" does not link to "${n.slug}", which was split out of it — a reader on the umbrella page cannot reach the species`,
          );
        else if (
          !(child?.relatedTopics ?? []).some(
            (t) => t.slug === r.distinctFromSlug,
          )
        )
          fail(`"${n.slug}" does not link back to "${r.distinctFromSlug}"`);
      }
    }
  }
}

/* -- report ---------------------------------------------------------------- */
const by = (s: string) => Q.filter((q) => q.status === s).length;
console.log('\nCrop profile qualification\n');
console.log(`  Crop identities evaluated: ${Q.length}`);
for (const s of QUALIFICATION_STATUSES)
  console.log(`    ${s.padEnd(24)}${String(by(s)).padStart(4)}`);
console.log('\n  Promotion queue');
{
  const t = new Map<string, number>();
  for (const q of promotionQueue())
    t.set(q.promotionTier!, (t.get(q.promotionTier!) ?? 0) + 1);
  for (const tier of PROMOTION_TIERS)
    if (t.get(tier))
      console.log(`    ${tier.padEnd(24)}${String(t.get(tier)).padStart(4)}`);
}
console.log('\n  Reused prose (recorded debt, not a blocker)');
{
  const flagged = flaggedPairs(cropArticles);
  const worst = flagged[0];
  console.log(
    `    ${flagged.length} pair(s) above ${(SIMILARITY_REVIEW_THRESHOLD * 100).toFixed(0)}% overlap, all reviewed`,
  );
  if (worst)
    console.log(
      `    longest identical run: ${worst.longestRun} words (${worst.a}/${worst.b})`,
    );
}

if (errors.length) {
  console.error(`\n  FAILED — ${errors.length} error(s):\n`);
  for (const e of errors.slice(0, 30)) console.error(`    ✗ ${e}`);
  process.exit(1);
}
console.log('\n  ✓ Crop qualification validation passed.\n');
