import { COMPARISONS } from '@/lib/comparison/registry';
import { DIMENSIONS } from '@/lib/comparison/dimensions';
import { getContent } from '@/lib/content/registry';
import { countryMeta } from '@/lib/geo/snapshots';
import { INDICATOR_BY_ID } from '@/data/geo/indicators';
import { SOURCES } from '@/data/sources';
import type { ContentType } from '@/lib/site';

export interface ComparisonIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Phase 4B — comparison-registry integrity (4.11). */
export function comparisonIssues(): ComparisonIssue[] {
  const out: ComparisonIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });

  const sourceIds = new Set(SOURCES.map((s) => s.id));
  const slugs = new Set<string>();
  const seoTitles = new Set<string>();

  for (const c of COMPARISONS) {
    const w = `comparison:${c.slug}`;
    if (!SLUG.test(c.slug)) err('cmp-bad-slug', `Bad slug "${c.slug}"`, w);
    if (slugs.has(c.slug)) err('cmp-dup-slug', 'Duplicate comparison slug', w);
    slugs.add(c.slug);
    if (seoTitles.has(c.seo.title))
      err('cmp-dup-seo', 'Duplicate comparison SEO title', w);
    seoTitles.add(c.seo.title);

    if (c.comparedEntityIds.length < 2)
      err('cmp-too-few', 'A comparison needs at least 2 entities', w);
    if (new Set(c.comparedEntityIds).size !== c.comparedEntityIds.length)
      err('cmp-dup-entity', 'Duplicate entity in comparison', w);
    if (!c.methodology?.trim()) err('cmp-no-method', 'Missing methodology', w);
    if (!c.limitations?.length) err('cmp-no-limits', 'Missing limitations', w);
    if (!c.sourceReferences?.length)
      err('cmp-no-sources', 'Missing sources', w);
    for (const r of c.sourceReferences ?? [])
      if (!sourceIds.has(r.sourceId))
        err('cmp-bad-source', `Unknown source "${r.sourceId}"`, w);

    if (c.entityType === 'country') {
      if (!c.indicators?.length)
        err('cmp-no-indicators', 'Country comparison needs indicators', w);
      for (const id of c.indicators ?? [])
        if (!INDICATOR_BY_ID.has(id))
          err('cmp-bad-indicator', `Unknown indicator "${id}"`, w);
      for (const iso3 of c.comparedEntityIds)
        if (!countryMeta(iso3))
          err('cmp-bad-country', `Country code "${iso3}" not in metadata`, w);
    } else {
      const validKeys = new Set(DIMENSIONS[c.entityType].map((d) => d.key));
      for (const key of c.dimensions)
        if (!validKeys.has(key))
          err(
            'cmp-bad-dimension',
            `Unknown dimension "${key}" for ${c.entityType}`,
            w,
          );
      for (const id of c.comparedEntityIds) {
        const item = getContent(c.entityType as ContentType, id);
        if (!item)
          err(
            'cmp-entity-missing',
            `Entity ${c.entityType}:${id} not published`,
            w,
          );
      }
    }
  }
  return out;
}
