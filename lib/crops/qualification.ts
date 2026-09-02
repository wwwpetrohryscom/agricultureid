/**
 * Deciding, from evidence, whether a crop can carry a public page.
 *
 * The one rule that shapes every function here: the evaluator never reads
 * `profileDepth`. That field records what IS published; this module works out
 * what SHOULD be, from the identity layer, the authored article, the resolved
 * cross-layer relations and the emitted route list. The validator then checks
 * the two agree — which is the only arrangement in which a page that has
 * quietly stopped meeting the standard can be found.
 */
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { GENUS_FAMILY } from '@/lib/crops/genus-family';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { calendarsForCrop } from '@/lib/calendars/registry';
import { costsForCrop } from '@/lib/economics/registry';
import { EXTENSION_RESOURCES } from '@/lib/extension/registry';
import { COMMODITIES_BY_CROP } from '@/lib/crops/integration';
import { seriesForCommodity } from '@/lib/markets/registry';
import { VARIETY_REGISTRATIONS } from '@/lib/varieties/registry';
import {
  DEPTH_REQUIREMENTS,
  SIMILARITY_REVIEW_THRESHOLD,
  measureDepth,
  similarityMatrix,
  type DepthMeasures,
} from './content-depth';
import { MULTI_TAXON_RANKS } from '@/types/crop-identity';
import { PROMOTION_NOTE_BY_SLUG } from '@/data/crop-identity/promotion-notes';
import type {
  CoverageCheck,
  CropProfileQualification,
  PromotionTier,
  QualificationBlocker,
  QualificationCheck,
} from '@/types/crop-qualification';

/* -------------------------------------------------------------------------- */
/*  Evidence gathered once                                                    */
/* -------------------------------------------------------------------------- */

const cropArticles = PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop');
const ARTICLE_BY_SLUG = new Map(cropArticles.map((c) => [c.slug, c]));
const SIMILARITY = similarityMatrix(cropArticles);
const ROUTES = new Set(allRoutes().map((r) => r.path));

/** Accumulate the IDENTIFIERS behind a relation, never a bare tally. */
function push(m: Map<string, string[]>, k: string, v: string) {
  const l = m.get(k);
  if (l) l.push(v);
  else m.set(k, [v]);
}

const CULTIVAR_PARENT = new Map<string, string>();
const CULTIVARS_BY_CROP = new Map<string, string[]>();
for (const c of PUBLISHED_CONTENT.filter((x) => x.contentType === 'cultivar')) {
  const parent = (c as unknown as { parentCrop?: { slug?: string } }).parentCrop
    ?.slug;
  if (!parent) continue;
  CULTIVAR_PARENT.set(c.slug, parent);
  push(CULTIVARS_BY_CROP, parent, c.slug);
}

const REGISTRATIONS_BY_CROP = new Map<string, string[]>();
for (const r of VARIETY_REGISTRATIONS) {
  const rec = r as unknown as { cultivarRef: string; id: string };
  const crop = CULTIVAR_PARENT.get(rec.cultivarRef);
  if (crop) push(REGISTRATIONS_BY_CROP, crop, rec.id);
}

const EXTENSION_BY_CROP = new Map<string, string[]>();
for (const e of EXTENSION_RESOURCES)
  for (const s of (e as unknown as { cropRefs?: string[] }).cropRefs ?? [])
    push(EXTENSION_BY_CROP, s, (e as unknown as { id: string }).id);

/** Pests and diseases that name this crop as a host — a relation they assert. */
const HOSTS_BY_CROP = new Map<string, string[]>();
for (const c of PUBLISHED_CONTENT.filter(
  (x) => x.contentType === 'pest' || x.contentType === 'plant-disease',
))
  for (const h of (c as unknown as { hostCrops?: { slug?: string }[] })
    .hostCrops ?? [])
    if (h.slug) push(HOSTS_BY_CROP, h.slug, `${c.contentType}:${c.slug}`);

const SOIL_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'soil').map((c) => c.slug),
);
const CLIMATE_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'climate').map(
    (c) => c.slug,
  ),
);
const CULTIVAR_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map(
    (c) => c.slug,
  ),
);
const COMMODITY_SLUGS = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'commodity').map(
    (c) => c.slug,
  ),
);

const TAXON_HOLDERS = new Map<string, string[]>();
for (const c of CROP_IDENTITIES) {
  const k = c.acceptedScientificName
    .toLowerCase()
    .replace(/×/g, '')
    .replace(/\b(subsp\.|var\.|f\.)\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  TAXON_HOLDERS.set(k, [...(TAXON_HOLDERS.get(k) ?? []), c.slug]);
}

/* -------------------------------------------------------------------------- */
/*  Hard gates                                                                */
/* -------------------------------------------------------------------------- */

function taxonomyGate(slug: string): QualificationCheck {
  const id = IDENTITY_BY_SLUG.get(slug);
  if (!id)
    return { result: 'fail', detail: 'No verified botanical identity exists.' };
  const problems: string[] = [];
  if (!id.authorities.length) problems.push('no authority is recorded');
  if (!id.taxonomySourceIds.length) problems.push('no taxonomy source');
  if (!GENUS_FAMILY[id.genus.replace(/×/g, '').trim()])
    problems.push(`the genus ${id.genus} has no recorded family`);
  if (id.agreement !== 'agreed' && !id.agreementNote?.trim())
    problems.push('the authorities did not agree and nothing explains why');
  return problems.length
    ? {
        result: 'fail',
        detail: `Identity is not sound: ${problems.join('; ')}.`,
      }
    : {
        result: 'pass',
        detail: `${id.acceptedScientificName} (${id.taxonRank}), ${id.family}, on ${id.authorities.length} authority${id.authorities.length === 1 ? '' : ' records'}.`,
        measures: { authorities: id.authorities.length, rank: id.taxonRank },
      };
}

function agriculturalGate(slug: string): QualificationCheck {
  const id = IDENTITY_BY_SLUG.get(slug);
  if (!id)
    return { result: 'fail', detail: 'No identity to read a role from.' };
  const missing: string[] = [];
  if (!id.harvestedParts.length) missing.push('harvested part');
  if (!id.agriculturalUses.length) missing.push('agricultural use');
  if (!id.cropGroups.length) missing.push('crop group');
  return missing.length
    ? { result: 'fail', detail: `No ${missing.join(', no ')} recorded.` }
    : {
        result: 'pass',
        detail: `Harvested for ${id.harvestedParts.join(', ')}; grown for ${id.agriculturalUses.join(', ')}.`,
        measures: {
          parts: id.harvestedParts.length,
          uses: id.agriculturalUses.length,
        },
      };
}

function depthGate(slug: string): {
  check: QualificationCheck;
  measures?: DepthMeasures;
} {
  const article = ARTICLE_BY_SLUG.get(slug);
  if (!article)
    return {
      check: {
        result: 'not-applicable',
        detail: 'No article has been written, so there is nothing to measure.',
      },
    };
  const m = measureDepth(article, SIMILARITY.get(slug) ?? { max: 0 });
  const short: string[] = [];
  if (m.words < DEPTH_REQUIREMENTS.minWords)
    short.push(`${m.words} words against ${DEPTH_REQUIREMENTS.minWords}`);
  if (m.substantiveSections < DEPTH_REQUIREMENTS.minSubstantiveSections)
    short.push(
      `${m.substantiveSections} substantive sections against ${DEPTH_REQUIREMENTS.minSubstantiveSections}`,
    );
  if (m.keyFacts < DEPTH_REQUIREMENTS.minKeyFacts)
    short.push(
      `${m.keyFacts} key facts against ${DEPTH_REQUIREMENTS.minKeyFacts}`,
    );
  if (m.sources < DEPTH_REQUIREMENTS.minSources)
    short.push(`${m.sources} sources against ${DEPTH_REQUIREMENTS.minSources}`);
  if (m.limitations < DEPTH_REQUIREMENTS.minLimitations)
    short.push('no limitations recorded');
  return {
    check: short.length
      ? {
          result: 'fail',
          detail: `Short on ${short.join('; ')}.`,
          measures: { ...m },
        }
      : {
          result: 'pass',
          detail: `${m.words} words across ${m.substantiveSections} substantive sections, ${m.sources} sources, ${m.limitations} limitations.`,
          measures: { ...m },
        },
    measures: m,
  };
}

function sourceGate(slug: string): QualificationCheck {
  const article = ARTICLE_BY_SLUG.get(slug);
  const id = IDENTITY_BY_SLUG.get(slug);
  const unknown: string[] = [];
  for (const s of id?.taxonomySourceIds ?? [])
    if (!SOURCE_MAP.has(s)) unknown.push(s);
  if (article)
    for (const r of (
      article as unknown as { sourceReferences: { sourceId: string }[] }
    ).sourceReferences ?? [])
      if (!SOURCE_MAP.has(r.sourceId)) unknown.push(r.sourceId);
  if (unknown.length)
    return {
      result: 'fail',
      detail: `Names ${unknown.length} source(s) the registry does not hold: ${[...new Set(unknown)].slice(0, 3).join(', ')}.`,
    };
  const n =
    (id?.taxonomySourceIds.length ?? 0) +
    ((article as unknown as { sourceReferences?: unknown[] })?.sourceReferences
      ?.length ?? 0);
  return {
    result: 'pass',
    detail: `${n} source reference(s), all resolving.`,
    measures: { sources: n },
  };
}

function consistencyGate(slug: string): QualificationCheck {
  const id = IDENTITY_BY_SLUG.get(slug);
  if (!id) return { result: 'fail', detail: 'No identity.' };
  const problems: string[] = [];
  if (CULTIVAR_SLUGS.has(slug))
    problems.push('this slug is a published cultivar');
  if (COMMODITY_SLUGS.has(slug) && !ARTICLE_BY_SLUG.has(slug))
    problems.push('this slug is a published commodity with no crop article');
  const holders = TAXON_HOLDERS.get(
    id.acceptedScientificName
      .toLowerCase()
      .replace(/×/g, '')
      .replace(/\b(subsp\.|var\.|f\.)\s*/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  );
  if (holders && holders.length > 1)
    problems.push(
      `the taxon is also claimed by ${holders.filter((h) => h !== slug).join(', ')}`,
    );
  return problems.length
    ? { result: 'fail', detail: `Conflicts: ${problems.join('; ')}.` }
    : {
        result: 'pass',
        detail: 'No conflict with another entity in the corpus.',
      };
}

/* -------------------------------------------------------------------------- */
/*  Enrichment                                                                */
/* -------------------------------------------------------------------------- */

function coverage(
  refs: string[],
  derivedFrom: string,
  partialBelow = 3,
): CoverageCheck {
  const count = refs.length;
  return {
    result:
      count === 0 ? 'missing' : count < partialBelow ? 'partial' : 'available',
    count,
    derivedFrom,
    refs,
  };
}

function enrichmentFor(slug: string): CropProfileQualification['enrichment'] {
  const article = ARTICLE_BY_SLUG.get(slug);
  // Only relations that RESOLVE are counted, and the resolved slugs are
  // reported so the validator can re-resolve them itself.
  const soils = (
    (article as unknown as { suitableSoils?: { slug?: string }[] })
      ?.suitableSoils ?? []
  )
    .map((r) => r.slug)
    .filter((s): s is string => !!s && SOIL_SLUGS.has(s));
  const climate = (
    (article as unknown as { connections?: { slug?: string }[] })
      ?.connections ?? []
  )
    .map((r) => r.slug)
    .filter((s): s is string => !!s && CLIMATE_SLUGS.has(s));
  return {
    // Reached through the commodity that names the crop.
    //
    // Wave 31 reported this dimension as not-modelled, on the reasoning that
    // the market layer is keyed to commodity slugs and no crop↔commodity
    // concordance existed. The first half was right and the second was wrong:
    // every commodity carries a `sourceCrop`, and Wave 34 reversed it into an
    // index. 57 published crops reach price series through it. The claim
    // survived because nothing checked it — see crops-integration-validate.
    markets: coverage(
      (COMMODITIES_BY_CROP.get(slug) ?? []).flatMap((c) =>
        seriesForCommodity(c).map((x) => `${c}:${x.id}`),
      ),
      'market series on the commodities whose sourceCrop is this crop',
      2,
    ),
    calendars: coverage(
      calendarsForCrop(slug).map((c) => c.id),
      'crop calendar entries naming this crop',
      2,
    ),
    cultivars: coverage(
      CULTIVARS_BY_CROP.get(slug) ?? [],
      'published cultivars whose parentCrop is this crop',
      2,
    ),
    varietyRegistrations: coverage(
      REGISTRATIONS_BY_CROP.get(slug) ?? [],
      'official registrations reached through this crop’s cultivars',
      2,
    ),
    extension: coverage(
      EXTENSION_BY_CROP.get(slug) ?? [],
      'verified extension resources naming this crop',
      2,
    ),
    biosecurity: coverage(
      HOSTS_BY_CROP.get(slug) ?? [],
      'pests and diseases that name this crop as a host',
      2,
    ),
    soils: coverage(soils, 'resolved soil references on the crop article', 2),
    climate: coverage(
      climate,
      'resolved climate references on the crop article',
      2,
    ),
    economics: coverage(
      costsForCrop(slug).map((o) => o.id),
      'farm economics observations for this crop',
      2,
    ),
    // The trade layer records official systems by jurisdiction and commodity
    // scope, not by botanical crop. There is nothing to resolve per crop, and
    // reporting that as a gap would invent 348 of them.
    trade: {
      result: 'not-modelled',
      count: 0,
      refs: [],
      derivedFrom:
        'the border-requirement layer is scoped by jurisdiction and official system, not by crop',
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Evaluation                                                                */
/* -------------------------------------------------------------------------- */

const EVALUATED_AT = '2026-09-02';

export function qualify(slug: string): CropProfileQualification {
  const id = IDENTITY_BY_SLUG.get(slug);
  const taxonomy = taxonomyGate(slug);
  const agriculturalIdentity = agriculturalGate(slug);
  const { check: contentDepth } = depthGate(slug);
  const sourceIntegrity = sourceGate(slug);
  const identityConsistency = consistencyGate(slug);
  const enrichment = enrichmentFor(slug);
  const hasPublishedRoute = ROUTES.has(`/crops/${slug}`);

  const blockers: QualificationBlocker[] = [];
  const missingEvidence: string[] = [];

  if (taxonomy.result === 'fail')
    blockers.push({ kind: 'identity-unverified', detail: taxonomy.detail });
  if (identityConsistency.result === 'fail')
    blockers.push({
      kind: 'identity-conflict',
      detail: identityConsistency.detail,
    });
  if (agriculturalIdentity.result === 'fail')
    blockers.push({
      kind: 'agricultural-role-missing',
      detail: agriculturalIdentity.detail,
    });
  if (sourceIntegrity.result === 'fail')
    blockers.push({
      kind: 'source-insufficient',
      detail: sourceIntegrity.detail,
    });
  if (contentDepth.result === 'fail')
    blockers.push({ kind: 'content-thin', detail: contentDepth.detail });
  if (contentDepth.result === 'not-applicable') {
    blockers.push({
      kind: 'content-absent',
      detail: 'No article is written for this crop.',
    });
    missingEvidence.push('an authored article');
  }

  const sim = SIMILARITY.get(slug);
  if (sim && sim.max >= SIMILARITY_REVIEW_THRESHOLD)
    blockers.push({
      kind: 'content-templated',
      detail: `Shares ${(sim.max * 100).toFixed(0)}% of its five-word phrasing with ${sim.to}; worth a human comparison.`,
    });

  for (const [name, c] of Object.entries(enrichment))
    if (c.result === 'missing') missingEvidence.push(name);

  let status: CropProfileQualification['status'];
  if (taxonomy.result === 'fail') status = 'BLOCKED_IDENTITY';
  else if (identityConsistency.result === 'fail') status = 'BLOCKED_CONFLICT';
  else if (
    agriculturalIdentity.result === 'fail' ||
    sourceIntegrity.result === 'fail'
  )
    status = 'BLOCKED_IDENTITY';
  else if (contentDepth.result === 'fail') status = 'BLOCKED_DEPTH';
  else if (contentDepth.result === 'not-applicable')
    status =
      id && MULTI_TAXON_RANKS.includes(id.taxonRank)
        ? 'DEFERRED_RESEARCH'
        : 'DATA_ONLY';
  else status = 'FULL_PROFILE_ELIGIBLE';

  let promotionTier: PromotionTier | undefined;
  if (status === 'DATA_ONLY' || status === 'DEFERRED_RESEARCH') {
    const available = Object.values(enrichment).filter(
      (c) => c.result === 'available' || c.result === 'partial',
    ).length;
    // Importance is editorial and is not computed. Where an editor has
    // recorded a reason, that is what lifts a crop up the queue; where nobody
    // has, the queue orders on what can be measured and says so.
    const noted = PROMOTION_NOTE_BY_SLUG.has(slug);
    if (
      id &&
      (MULTI_TAXON_RANKS.includes(id.taxonRank) || id.agreement !== 'agreed')
    )
      promotionTier = 'P4_IDENTITY_COMPLEX';
    else if (noted && available >= 1) promotionTier = 'P1_READY';
    else if (noted || available >= 1) promotionTier = 'P2_STRONG_CANDIDATE';
    else promotionTier = 'P3_NEEDS_RESEARCH';
  }

  return {
    cropId: id?.id ?? `crop-identity-${slug}`,
    slug,
    primaryName: id?.primaryCommonName ?? slug,
    status,
    hardGates: {
      taxonomy,
      agriculturalIdentity,
      contentDepth,
      sourceIntegrity,
      identityConsistency,
    },
    enrichment,
    blockers,
    missingEvidence,
    promotionTier,
    hasPublishedRoute,
    evaluatedAt: EVALUATED_AT,
  };
}

let ALL: CropProfileQualification[] | null = null;

/** Every crop identity, evaluated. */
export function allQualifications(): CropProfileQualification[] {
  if (ALL) return ALL;
  ALL = CROP_IDENTITIES.map((c) => qualify(c.slug));
  return ALL;
}

export function qualificationFor(
  slug: string,
): CropProfileQualification | undefined {
  return allQualifications().find((q) => q.slug === slug);
}

/** Data-only crops in promotion order. */
export function promotionQueue(): CropProfileQualification[] {
  const order = [
    'P1_READY',
    'P2_STRONG_CANDIDATE',
    'P3_NEEDS_RESEARCH',
    'P4_IDENTITY_COMPLEX',
    'P5_LOW_CURRENT_PRIORITY',
  ];
  return allQualifications()
    .filter((q) => q.promotionTier)
    .sort(
      (a, b) =>
        order.indexOf(a.promotionTier!) - order.indexOf(b.promotionTier!) ||
        a.primaryName.localeCompare(b.primaryName),
    );
}
