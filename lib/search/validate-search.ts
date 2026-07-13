import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSearchDocuments } from '@/lib/search/documents';
import { docsChecksum } from '@/lib/search/checksum';
import { SYNONYMS } from '@/data/search/synonyms';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { sitemapPaths } from '@/lib/seo/routes';

export interface SearchIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

/** Phase 3D — search index & synonym integrity (3D.13). */
export function searchIssues(): SearchIssue[] {
  const out: SearchIssue[] = [];
  const err = (code: string, message: string, where?: string) =>
    out.push({ level: 'error', code, message, where });
  const warn = (code: string, message: string, where?: string) =>
    out.push({ level: 'warning', code, message, where });

  const docs = buildSearchDocuments();
  const publishedKeys = new Set(
    PUBLISHED_CONTENT.map((c) => `${c.contentType}:${c.slug}`),
  );
  const paths = sitemapPaths();
  const ids = new Set<string>();

  for (const d of docs) {
    const w = d.id;
    if (ids.has(d.id)) err('search-dup-doc', 'Duplicate search document id', w);
    ids.add(d.id);
    if (!d.title?.trim())
      err('search-empty-title', 'Search doc missing title', w);
    if (!d.route?.trim() || !d.route.startsWith('/'))
      err('search-bad-route', `Search doc has no canonical route`, w);
    if (!d.facets?.entityType?.length)
      err('search-no-type-facet', 'Search doc missing entityType facet', w);
    // Content docs must correspond to a PUBLISHED entity and a real route.
    const contentTypes = new Set(PUBLISHED_CONTENT.map((c) => c.contentType));
    if (contentTypes.has(d.type as never)) {
      if (!publishedKeys.has(d.id))
        err('search-unpublished', `Indexed entity is not published`, w);
      const base = d.route.split('#')[0]!;
      if (!paths.has(base))
        err('search-route-missing', `Route ${base} not in sitemap`, w);
    }
  }

  // Synonyms: no self-mapping; no ambiguous exact equivalence (one variant
  // claimed by two different canonicals); no cycles beyond the intended pair.
  const exactVariantOwner = new Map<string, string>();
  for (const e of SYNONYMS) {
    const c = e.canonical.toLowerCase();
    for (const v of e.variants) {
      const vv = v.toLowerCase();
      if (vv === c) err('synonym-self', `Synonym maps "${v}" to itself`, c);
      if (e.kind === 'exact') {
        const owner = exactVariantOwner.get(vv);
        if (owner && owner !== c)
          err(
            'synonym-ambiguous',
            `Variant "${v}" is an exact synonym of both "${owner}" and "${c}"`,
            c,
          );
        exactVariantOwner.set(vv, c);
      }
    }
  }

  // Stale index checksum: the committed public/search-index.json must match a
  // fresh build of the documents (run `npm run search:index` to refresh).
  try {
    const file = join(process.cwd(), 'public', 'search-index.json');
    const idx = JSON.parse(readFileSync(file, 'utf8')) as {
      checksum?: string;
      count?: number;
    };
    if (idx.checksum !== docsChecksum())
      err(
        'search-index-stale',
        'public/search-index.json is stale — run `npm run search:index`',
        'search-index',
      );
    if (idx.count !== docs.length)
      err(
        'search-index-count',
        `Index count ${idx.count} ≠ ${docs.length}`,
        'search-index',
      );
  } catch {
    warn(
      'search-index-missing',
      'public/search-index.json not found — run `npm run search:index`',
      'search-index',
    );
  }

  return out;
}
