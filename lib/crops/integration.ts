/**
 * How much of the rest of AgricultureID a crop page can actually reach.
 *
 * Wave 31 built the enrichment view and got one of its dimensions wrong. It
 * looked for market data by matching a crop slug against a commodity slug,
 * found almost nothing, and concluded that "no verified crop↔commodity
 * concordance exists in the corpus". The concordance did exist: every commodity
 * carries a `sourceCrop` reference, and 61 of the 64 commodities with ingested
 * price series resolve to a crop through it. The three that do not are hen
 * eggs, cow milk and raw wool, which come from animals.
 *
 * The lesson is in how the mistake survived. `not-modelled` was a claim about
 * the SHAPE of another layer, asserted in a comment, and nothing checked it —
 * so a wrong answer looked exactly like a right one. Every dimension here now
 * carries the refs it resolved, and `linkage` says which field the link was
 * made through, so the validator can go and look.
 */
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { calendarsForCrop } from '@/lib/calendars/registry';
import { costsForCrop } from '@/lib/economics/registry';
import { EXTENSION_RESOURCES } from '@/lib/extension/registry';
import { VARIETY_REGISTRATIONS } from '@/lib/varieties/registry';
import { seriesForCommodity } from '@/lib/markets/registry';
import { CONCEPT_BY_SLUG } from '@/data/crop-identity/concepts';
import { IDENTITY_BY_SLUG } from '@/lib/crops/identity';

/* -------------------------------------------------------------------------- */
/*  The concordance Wave 31 said was missing                                  */
/* -------------------------------------------------------------------------- */

interface CommodityRecord {
  slug: string;
  sourceCrop?: { type?: string; slug?: string };
}

const COMMODITIES = PUBLISHED_CONTENT.filter(
  (c) => c.contentType === 'commodity',
) as unknown as CommodityRecord[];

/**
 * crop slug → commodity slugs, built by reversing `sourceCrop`.
 *
 * This is the whole concordance. It was always derivable; nothing had derived
 * it, which is a different problem from it not existing.
 */
export const COMMODITIES_BY_CROP: ReadonlyMap<string, readonly string[]> =
  (() => {
    const m = new Map<string, string[]>();
    for (const c of COMMODITIES) {
      const crop = c.sourceCrop?.slug;
      if (!crop) continue;
      const l = m.get(crop);
      if (l) l.push(c.slug);
      else m.set(crop, [c.slug]);
    }
    for (const [, v] of m) v.sort();
    return m;
  })();

/** Commodities whose source is not a crop — animal products, correctly. */
export const COMMODITIES_WITHOUT_CROP: readonly string[] = COMMODITIES.filter(
  (c) => !c.sourceCrop?.slug,
)
  .map((c) => c.slug)
  .sort();

/* -------------------------------------------------------------------------- */
/*  Per-layer resolution                                                      */
/* -------------------------------------------------------------------------- */

/**
 * How a layer is joined to a crop.
 *
 * Recorded per dimension so that "this layer is not keyed to crops" becomes a
 * checkable statement rather than a comment. A dimension declared
 * `unkeyed` must survive the validator going and looking for a crop reference
 * in that layer — which is exactly the check Wave 31's markets claim would
 * have failed.
 */
export type Linkage =
  /** The layer's records name a crop directly. */
  | { via: 'direct'; field: string }
  /** The layer is reached through another entity that names the crop. */
  | { via: 'indirect'; through: string; field: string }
  /** The layer holds no crop reference of any kind. */
  | { via: 'unkeyed'; reason: string };

export interface LayerCoverage {
  layer: string;
  linkage: Linkage;
  /** Identifiers actually resolved for this crop. */
  refs: readonly string[];
}

export const INTEGRATION_LAYERS = [
  'calendars',
  'cultivars',
  'varietyRegistrations',
  'extension',
  'biosecurity',
  'soils',
  'climate',
  'economics',
  'markets',
  'trade',
  'relatedCrops',
] as const;
export type IntegrationLayer = (typeof INTEGRATION_LAYERS)[number];

const article = (slug: string) =>
  PUBLISHED_CONTENT.find((c) => c.contentType === 'crop' && c.slug === slug) as
    Record<string, unknown> | undefined;

const CULTIVAR_PARENT = new Map<string, string>();
const CULTIVARS_BY_CROP = new Map<string, string[]>();
for (const c of PUBLISHED_CONTENT.filter((x) => x.contentType === 'cultivar')) {
  const parent = (c as unknown as { parentCrop?: { slug?: string } }).parentCrop
    ?.slug;
  if (!parent) continue;
  CULTIVAR_PARENT.set(c.slug, parent);
  const l = CULTIVARS_BY_CROP.get(parent);
  if (l) l.push(c.slug);
  else CULTIVARS_BY_CROP.set(parent, [c.slug]);
}

const SLUGS_OF = (t: string) =>
  new Set(
    PUBLISHED_CONTENT.filter((c) => c.contentType === t).map((c) => c.slug),
  );
const SOIL_SLUGS = SLUGS_OF('soil');
const CLIMATE_SLUGS = SLUGS_OF('climate');
const CROP_SLUGS = SLUGS_OF('crop');

const refsOf = (
  item: Record<string, unknown> | undefined,
  field: string,
  allowed: Set<string>,
) =>
  ((item?.[field] as { slug?: string }[] | undefined) ?? [])
    .map((r) => r.slug)
    .filter((s): s is string => !!s && allowed.has(s));

/* -------------------------------------------------------------------------- */
/*  Related crops, derived rather than listed                                 */
/* -------------------------------------------------------------------------- */

/**
 * Crops genuinely related to this one, and why.
 *
 * Derived from structure the corpus already holds — shared genus, shared
 * concept scope, shared pest or disease hosts — rather than from a hand-kept
 * list or, worse, from every pairing of two crops. A relation that cannot name
 * the thing the two crops share is not published.
 */
export interface RelatedCrop {
  slug: string;
  /** What the two crops actually share. */
  basis: 'same-genus' | 'same-concept' | 'shared-host-pressure';
  detail: string;
}

const HOSTS_BY_CROP = new Map<string, Set<string>>();
for (const c of PUBLISHED_CONTENT.filter(
  (x) => x.contentType === 'pest' || x.contentType === 'plant-disease',
))
  for (const h of (c as unknown as { hostCrops?: { slug?: string }[] })
    .hostCrops ?? [])
    if (h.slug) {
      const s = HOSTS_BY_CROP.get(h.slug) ?? new Set<string>();
      s.add(`${c.contentType}:${c.slug}`);
      HOSTS_BY_CROP.set(h.slug, s);
    }

/** How many shared hosts make two crops worth relating. */
export const SHARED_HOST_THRESHOLD = 3;

export function relatedCrops(slug: string): RelatedCrop[] {
  const id = IDENTITY_BY_SLUG.get(slug);
  const out = new Map<string, RelatedCrop>();

  // Same genus — a botanical fact, not a guess.
  if (id)
    for (const other of IDENTITY_BY_SLUG.values()) {
      if (other.slug === slug || other.profileDepth !== 'full-profile')
        continue;
      if (other.genus === id.genus && CROP_SLUGS.has(other.slug))
        out.set(other.slug, {
          slug: other.slug,
          basis: 'same-genus',
          detail: `Both are ${id.genus}.`,
        });
    }

  // Inside the same declared concept scope, in either direction.
  for (const [conceptSlug, concept] of CONCEPT_BY_SLUG) {
    const members = concept.constituents
      .map((t) => t.identitySlug)
      .filter((s): s is string => !!s && CROP_SLUGS.has(s));
    const inside = members.includes(slug) || conceptSlug === slug;
    if (!inside) continue;
    for (const m of [conceptSlug, ...members]) {
      if (m === slug || !CROP_SLUGS.has(m)) continue;
      out.set(m, {
        slug: m,
        basis: 'same-concept',
        detail:
          m === conceptSlug
            ? `Covered by the ${conceptSlug} concept page.`
            : `Also covered by the ${conceptSlug} concept page.`,
      });
    }
  }

  // Shared pest and disease pressure, above a threshold so that two crops
  // sharing only aphids are not called related.
  const mine = HOSTS_BY_CROP.get(slug);
  if (mine)
    for (const [other, theirs] of HOSTS_BY_CROP) {
      if (other === slug || !CROP_SLUGS.has(other) || out.has(other)) continue;
      let shared = 0;
      for (const h of mine) if (theirs.has(h)) shared++;
      if (shared >= SHARED_HOST_THRESHOLD)
        out.set(other, {
          slug: other,
          basis: 'shared-host-pressure',
          detail: `${shared} pests or diseases name both as hosts.`,
        });
    }

  return [...out.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

/* -------------------------------------------------------------------------- */
/*  The matrix                                                                */
/* -------------------------------------------------------------------------- */

export function coverageFor(slug: string): LayerCoverage[] {
  const a = article(slug);
  const commodities = COMMODITIES_BY_CROP.get(slug) ?? [];
  return [
    {
      layer: 'calendars',
      linkage: { via: 'direct', field: 'cropRef' },
      refs: calendarsForCrop(slug).map((c) => c.id),
    },
    {
      layer: 'cultivars',
      linkage: { via: 'direct', field: 'parentCrop' },
      refs: CULTIVARS_BY_CROP.get(slug) ?? [],
    },
    {
      layer: 'varietyRegistrations',
      linkage: { via: 'indirect', through: 'cultivar', field: 'cultivarRef' },
      refs: VARIETY_REGISTRATIONS.filter(
        (r) =>
          CULTIVAR_PARENT.get(
            (r as unknown as { cultivarRef: string }).cultivarRef,
          ) === slug,
      ).map((r) => (r as unknown as { id: string }).id),
    },
    {
      layer: 'extension',
      linkage: { via: 'direct', field: 'cropRefs' },
      refs: EXTENSION_RESOURCES.filter((e) =>
        ((e as unknown as { cropRefs?: string[] }).cropRefs ?? []).includes(
          slug,
        ),
      ).map((e) => (e as unknown as { id: string }).id),
    },
    {
      layer: 'biosecurity',
      linkage: { via: 'direct', field: 'hostCrops' },
      refs: [...(HOSTS_BY_CROP.get(slug) ?? [])].sort(),
    },
    {
      layer: 'soils',
      linkage: { via: 'direct', field: 'suitableSoils' },
      refs: refsOf(a, 'suitableSoils', SOIL_SLUGS),
    },
    {
      layer: 'climate',
      linkage: { via: 'direct', field: 'connections' },
      refs: refsOf(a, 'connections', CLIMATE_SLUGS),
    },
    {
      layer: 'economics',
      linkage: { via: 'direct', field: 'cropRef' },
      refs: costsForCrop(slug).map((o) => o.id),
    },
    {
      // The correction. Reached through the commodity that names the crop.
      layer: 'markets',
      linkage: { via: 'indirect', through: 'commodity', field: 'sourceCrop' },
      refs: commodities.flatMap((c) =>
        seriesForCommodity(c).map((s) => `${c}:${s.id}`),
      ),
    },
    {
      // Border requirements are scoped by jurisdiction and by broad subject
      // type — "plant", "plant-product", "seed". No record names a crop, and
      // the validator checks that rather than taking this comment's word.
      layer: 'trade',
      linkage: {
        via: 'unkeyed',
        reason:
          'border requirements are scoped by jurisdiction and by broad subject type, and no record names a crop or a commodity',
      },
      refs: [],
    },
    {
      layer: 'relatedCrops',
      linkage: { via: 'direct', field: 'derived' },
      refs: relatedCrops(slug).map((r) => r.slug),
    },
  ];
}

export interface CropIntegration {
  slug: string;
  coverage: LayerCoverage[];
  /** Layers with at least one resolved reference. */
  layersReached: number;
  /** Layers that are keyed to crops and hold nothing for this one. */
  gaps: string[];
}

export function integrationFor(slug: string): CropIntegration {
  const coverage = coverageFor(slug);
  return {
    slug,
    coverage,
    layersReached: coverage.filter((c) => c.refs.length > 0).length,
    gaps: coverage
      .filter((c) => c.linkage.via !== 'unkeyed' && c.refs.length === 0)
      .map((c) => c.layer),
  };
}

let ALL: CropIntegration[] | null = null;

export function allIntegrations(): CropIntegration[] {
  if (ALL) return ALL;
  ALL = [...CROP_SLUGS].sort().map(integrationFor);
  return ALL;
}
