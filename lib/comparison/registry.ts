import { COMPARISONS as SEEDS } from '@/data/comparisons';
import { DIMENSIONS } from '@/lib/comparison/dimensions';
import type {
  Comparison,
  ComparisonEntityType,
  ComparisonSeed,
} from '@/types/comparison';

const REVIEWED = '2026-07-13';

function build(seed: ComparisonSeed): Comparison {
  const dimensions =
    seed.dimensions ??
    (seed.entityType === 'country'
      ? []
      : DIMENSIONS[seed.entityType].map((d) => d.key));
  return {
    comparisonId: seed.slug,
    slug: seed.slug,
    entityType: seed.entityType,
    title: seed.title,
    comparedEntityIds: seed.comparedEntityIds,
    purpose: seed.purpose,
    dimensions,
    indicators: seed.indicators,
    referenceYear: seed.referenceYear,
    methodology: seed.methodology,
    limitations: seed.limitations,
    sourceReferences: seed.sourceReferences,
    reviewedAt: REVIEWED,
    updatedAt: REVIEWED,
    editorialStatus: 'published',
    seo: {
      title: seed.title,
      description: seed.purpose.slice(0, 160),
    },
  };
}

export const COMPARISONS: Comparison[] = SEEDS.map(build);

const BY_SLUG = new Map(COMPARISONS.map((c) => [c.slug, c]));

export function getComparison(slug: string): Comparison | undefined {
  return BY_SLUG.get(slug);
}

export function comparisonsByType(type: ComparisonEntityType): Comparison[] {
  return COMPARISONS.filter(
    (c) => c.entityType === type && c.editorialStatus === 'published',
  ).sort((a, b) => a.title.localeCompare(b.title));
}

export function allComparisons(): Comparison[] {
  return COMPARISONS.filter((c) => c.editorialStatus === 'published');
}

/** URL segment for a comparison entity type (route base). */
export const COMPARE_ROUTE: Record<ComparisonEntityType, string> = {
  crop: 'crops',
  cultivar: 'cultivars',
  breed: 'breeds',
  fertilizer: 'fertilizers',
  soil: 'soils',
  country: 'countries',
};

export function comparisonPath(c: Comparison): string {
  return `/compare/${COMPARE_ROUTE[c.entityType]}/${c.slug}`;
}
