import {
  PUBLISHED_CONTENT,
  contentUrlPath,
  resolveRef,
  refKey,
} from '@/lib/content/registry';
import { outgoingRefs } from '@/lib/content/graph';
import { getContentByType } from '@/lib/content/registry';
import { COUNTRY_PROFILES, regionProfiles } from '@/lib/geo/registry';
import { regionPath as wbRegionPath } from '@/lib/geo/paths';
import { INDICATORS } from '@/data/geo/indicators';
import { allSnapshots } from '@/lib/geo/snapshots';
import { tradeSnapshot } from '@/lib/trade/snapshot';
import { FAOSTAT_TRADE_DATASET_ID } from '@/lib/data-ops/registry';
import {
  countryPath,
  indicatorPath,
  datasetPath,
  datasetSlug,
} from '@/lib/geo/paths';
import {
  regionsForCountry,
  regionPath,
  zonesSorted,
  zonePath,
  countriesWithRegions,
} from '@/lib/geo/region-registry';
import { allComparisons, comparisonPath } from '@/lib/comparison/registry';
import { TOOLS } from '@/lib/tools/tools';
import { allRoutes, sitemapPaths } from '@/lib/seo/routes';
import { absoluteUrl } from '@/lib/seo/metadata';
import {
  webPageSchema,
  breadcrumbSchema,
  articleSchema,
} from '@/lib/schema/jsonld';
import { contentBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { SECTIONS, CONTENT_TYPE_ROUTE, FOOTER_HREFS } from '@/lib/site';
import type { AnyContent, ContentBlock } from '@/types/content';

export interface AuditIssue {
  level: 'error' | 'warning';
  code: string;
  message: string;
  where?: string;
}

/* -------------------------------------------------------------------------- */
/*  Modelled registry reachability (NOT a crawl)                              */
/* -------------------------------------------------------------------------- */

/**
 * A hand-written MODEL of internal navigation, built from the registry.
 *
 * **This is not a crawl and must never be reported as one.** It renders no JSX,
 * parses no HTML, and reads no build output. It asserts the edges an author
 * believed the site has. Three consequences, all measured and documented in
 * `docs/rendered-link-audit.md`:
 *
 * 1. It links every type hub to every published item of that type, and all 27
 *    content types have an `active` section — so every content page is depth ≤ 2
 *    *before any content→content link is considered*. It would report full
 *    reachability even if no page linked to any other page.
 * 2. Its home→hub edges are asserted here, not observed. Seven of them
 *    (`/compare`, `/explore`, `/tools`, `/countries`, `/datasets`,
 *    `/data-health`, `/agroecological-zones`) are **not** rendered on the home
 *    page at all.
 * 3. Its content→content edges come from `outgoingRefs()`, which is itself a
 *    model of which fields hold refs.
 *
 * It remains useful: it answers "does the registry believe every page is
 * listed somewhere?", which is a real question about editorial structure. It
 * does not answer "can a crawler reach this page?" — for that, and for any
 * claim about orphans, crawl depth, or rendered reachability, use
 * `scripts/rendered-link-audit.ts` (`npm run seo:rendered`), which parses the
 * emitted HTML.
 */
export function registryNavModel(): Map<string, Set<string>> {
  const edges = new Map<string, Set<string>>();
  const add = (from: string, to: string) => {
    if (from === to) return;
    const set = edges.get(from) ?? new Set<string>();
    set.add(to);
    edges.set(from, set);
  };

  // Home → every active nav section.
  for (const s of SECTIONS) if (s.active) add('/', s.href);

  // The global footer (rendered on every page) links About/legal/resource pages.
  for (const href of FOOTER_HREFS) add('/', href);

  // Home also reaches the top-level geo/reference hubs directly.
  for (const hub of [
    '/countries',
    '/agroecological-zones',
    '/compare',
    '/datasets',
    '/agricultural-data',
    '/tools',
    '/explore',
    '/glossary',
    '/sources',
    '/data-health',
  ]) {
    add('/', hub);
  }

  // Content hubs list every published item of their type (EntryGrid).
  for (const s of SECTIONS) {
    if (!s.active || !s.contentType) continue;
    const hub = `/${CONTENT_TYPE_ROUTE[s.contentType]}`;
    for (const item of getContentByType(s.contentType)) {
      add(hub, contentUrlPath(item));
    }
  }

  // Content → content graph edges (typed relations + connections).
  for (const item of PUBLISHED_CONTENT) {
    const from = contentUrlPath(item);
    for (const ref of outgoingRefs(item)) {
      const target = resolveRef(ref);
      if (target && target.editorialStatus === 'published') {
        add(from, contentUrlPath(target));
      }
    }
  }

  // Geo: countries hub → country → region list → region profiles.
  for (const p of COUNTRY_PROFILES) {
    add('/countries', countryPath(p.slug));
    if (regionsForCountry(p.slug).length > 0) {
      add(countryPath(p.slug), `/countries/${p.slug}/regions`);
    }
  }
  // The countries hub also groups profiles under their World Bank macro-region.
  for (const r of regionProfiles()) add('/countries', wbRegionPath(r.slug));

  // Data-methodology page is linked from the data overview/registry pages.
  for (const from of ['/agricultural-data', '/datasets', '/data-health']) {
    add(from, '/methodology/data');
  }
  for (const c of countriesWithRegions()) {
    for (const r of regionsForCountry(c)) {
      add(`/countries/${c}/regions`, regionPath(r));
    }
  }

  // Agroecological zones hub → each zone.
  for (const z of zonesSorted()) add('/agroecological-zones', zonePath(z));

  // Datasets + indicators hubs.
  for (const s of allSnapshots())
    add('/datasets', datasetPath(datasetSlug(s.indicatorId)));
  // Phase 5D — the FAOSTAT trade dataset is listed on the datasets hub too.
  if (tradeSnapshot()) add('/datasets', datasetPath(FAOSTAT_TRADE_DATASET_ID));
  for (const i of INDICATORS) add('/agricultural-data', indicatorPath(i.slug));

  // Compare hub → each fixed comparison.
  for (const c of allComparisons()) add('/compare', comparisonPath(c));

  // Tools hub → each tool.
  for (const t of TOOLS) add('/tools', `/tools/${t.slug}`);

  return edges;
}

/**
 * The result of walking the registry MODEL. Every field is modelled, not
 * observed — the names say so deliberately, because the previous names
 * (`crawlDepth`, `maxDepth`, `unreachable`) read as findings about rendered
 * HTML and were repeatedly cited as such.
 */
export interface RegistryReachabilityReport {
  /** Modelled distance from '/' over `registryNavModel()`. Not crawl depth. */
  modelledDepthByPath: Map<string, number>;
  /** Deepest modelled distance. Not a measured click-depth. */
  maxModelledDepth: number;
  modelledHistogram: Record<number, number>;
  /**
   * Sitemap paths the MODEL does not reach. **Not an orphan list**: a page
   * absent here can still have zero rendered inbound links, and a page listed
   * here may render fine. Orphans are reported by the rendered-HTML audit.
   */
  modelUnreachable: string[];
  deepest: { path: string; depth: number }[];
}

/**
 * BFS over the registry navigation MODEL from '/'.
 *
 * Reports modelled registry reachability — whether the registry believes each
 * page is listed somewhere. **It is not a crawl**; see `registryNavModel()`.
 * For rendered reachability, run `npm run seo:rendered`.
 */
export function registryReachabilityAudit(): RegistryReachabilityReport {
  const edges = registryNavModel();
  const depth = new Map<string, number>([['/', 0]]);
  const queue: string[] = ['/'];
  while (queue.length) {
    const cur = queue.shift() as string;
    const d = depth.get(cur) as number;
    for (const next of edges.get(cur) ?? []) {
      if (!depth.has(next)) {
        depth.set(next, d + 1);
        queue.push(next);
      }
    }
  }

  const histogram: Record<number, number> = {};
  for (const d of depth.values()) histogram[d] = (histogram[d] ?? 0) + 1;

  // Sitemap paths the MODEL never reaches. Not an orphan list.
  const smPaths = sitemapPaths();
  const modelUnreachable = [...smPaths].filter((p) => !depth.has(p)).sort();

  const deepest = [...depth.entries()]
    .map(([path, d]) => ({ path, depth: d }))
    .sort((a, b) => b.depth - a.depth)
    .slice(0, 10);

  return {
    modelledDepthByPath: depth,
    maxModelledDepth: Math.max(...depth.values()),
    modelledHistogram: histogram,
    modelUnreachable,
    deepest,
  };
}

/* -------------------------------------------------------------------------- */
/*  Metadata / sitemap hygiene                                                */
/* -------------------------------------------------------------------------- */

export function metadataAudit(): AuditIssue[] {
  const out: AuditIssue[] = [];
  const routes = allRoutes();

  // Canonical/path uniqueness and format across the sitemap.
  const seen = new Map<string, number>();
  for (const r of routes) {
    seen.set(r.path, (seen.get(r.path) ?? 0) + 1);
    if (!r.path.startsWith('/')) {
      out.push({
        level: 'error',
        code: 'route-bad-path',
        message: `Sitemap path "${r.path}" is not root-relative`,
        where: r.path,
      });
    }
    // Absolute URL must be constructible and https.
    const abs = absoluteUrl(r.path);
    if (!abs.startsWith('https://')) {
      out.push({
        level: 'error',
        code: 'route-bad-url',
        message: `Absolute URL for "${r.path}" is not https`,
        where: r.path,
      });
    }
    if (r.priority < 0 || r.priority > 1) {
      out.push({
        level: 'error',
        code: 'route-bad-priority',
        message: `Priority ${r.priority} out of range for "${r.path}"`,
        where: r.path,
      });
    }
  }
  for (const [path, n] of seen) {
    if (n > 1) {
      out.push({
        level: 'error',
        code: 'route-duplicate',
        message: `Sitemap lists "${path}" ${n} times`,
        where: path,
      });
    }
  }

  // Every published content page must be present exactly once.
  const smPaths = sitemapPaths();
  for (const item of PUBLISHED_CONTENT) {
    if (!smPaths.has(contentUrlPath(item))) {
      out.push({
        level: 'error',
        code: 'content-not-in-sitemap',
        message: `Published ${item.contentType}:${item.slug} missing from sitemap`,
        where: `${item.contentType}:${item.slug}`,
      });
    }
  }

  return out;
}

/* -------------------------------------------------------------------------- */
/*  Structured-data coverage                                                  */
/* -------------------------------------------------------------------------- */

export function structuredDataAudit(): AuditIssue[] {
  const out: AuditIssue[] = [];
  for (const item of PUBLISHED_CONTENT) {
    const where = `${item.contentType}:${item.slug}`;
    const path = contentUrlPath(item);
    try {
      const wp = webPageSchema({
        name: item.title,
        description: item.summary,
        path,
      }) as Record<string, unknown>;
      if (wp['@type'] !== 'WebPage')
        out.push({
          level: 'error',
          code: 'schema-webpage',
          message: 'WebPage schema missing @type',
          where,
        });
      const bc = breadcrumbSchema(
        contentBreadcrumbs(item.contentType, item.title, item.slug),
      ) as Record<string, unknown>;
      if (bc['@type'] !== 'BreadcrumbList')
        out.push({
          level: 'error',
          code: 'schema-breadcrumb',
          message: 'Breadcrumb schema missing @type',
          where,
        });
      if (item.structuredData?.article) {
        const a = articleSchema(item, path) as Record<string, unknown>;
        if (a['@type'] !== 'Article')
          out.push({
            level: 'error',
            code: 'schema-article',
            message: 'Article schema missing @type',
            where,
          });
      }
    } catch (e) {
      out.push({
        level: 'error',
        code: 'schema-throw',
        message: `Structured data threw: ${(e as Error).message}`,
        where,
      });
    }
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/*  Accessibility (deterministic, content-level)                             */
/* -------------------------------------------------------------------------- */

function blockA11yIssues(
  blocks: ContentBlock[],
  where: string,
  out: AuditIssue[],
) {
  for (const b of blocks) {
    switch (b.type) {
      case 'paragraph':
        if (!b.text.trim())
          out.push({
            level: 'error',
            code: 'a11y-empty-paragraph',
            message: 'Empty paragraph block',
            where,
          });
        break;
      case 'list':
        if (!b.items.length || b.items.some((i) => !i.trim()))
          out.push({
            level: 'error',
            code: 'a11y-empty-list-item',
            message: 'List has an empty item',
            where,
          });
        break;
      case 'table':
        if (!b.columns.length || b.columns.some((c) => !c.trim()))
          out.push({
            level: 'error',
            code: 'a11y-table-no-header',
            message: 'Table is missing a column header',
            where,
          });
        for (const row of b.rows) {
          if (row.length !== b.columns.length)
            out.push({
              level: 'error',
              code: 'a11y-table-ragged',
              message: 'Table row length does not match header',
              where,
            });
        }
        break;
      case 'definitionList':
        if (b.items.some((i) => !i.term.trim() || !i.description.trim()))
          out.push({
            level: 'error',
            code: 'a11y-empty-definition',
            message: 'Definition list has an empty term/description',
            where,
          });
        break;
      case 'callout':
        if (!b.text.trim())
          out.push({
            level: 'error',
            code: 'a11y-empty-callout',
            message: 'Callout has no text',
            where,
          });
        break;
    }
  }
}

/**
 * Deterministic accessibility checks on structured content: a single H1 per
 * page (the title; sections render as H2), non-empty headings and interactive
 * labels, tables with headers, and no empty content blocks. Rendering-level
 * checks (contrast, focus order) are out of scope for a static audit.
 */
export function accessibilityAudit(): AuditIssue[] {
  const out: AuditIssue[] = [];
  for (const item of PUBLISHED_CONTENT as AnyContent[]) {
    const where = `${item.contentType}:${item.slug}`;
    if (!item.title.trim())
      out.push({
        level: 'error',
        code: 'a11y-no-h1',
        message: 'Page has no H1 title',
        where,
      });
    for (const f of item.keyFacts) {
      if (!f.label.trim() || !f.value.trim())
        out.push({
          level: 'error',
          code: 'a11y-empty-keyfact',
          message: 'Key fact has an empty label/value',
          where,
        });
    }
    for (const sec of item.sections) {
      if (!sec.heading.trim())
        out.push({
          level: 'error',
          code: 'a11y-empty-heading',
          message: `Section "${sec.id}" has an empty heading`,
          where,
        });
      blockA11yIssues(sec.body, where, out);
    }
    blockA11yIssues(item.introduction, where, out);
  }
  return out;
}

/* -------------------------------------------------------------------------- */
/*  Aggregate                                                                 */
/* -------------------------------------------------------------------------- */

export interface SeoAuditReport {
  routes: number;
  metadata: AuditIssue[];
  structuredData: AuditIssue[];
  accessibility: AuditIssue[];
  /**
   * Modelled registry reachability. **Not a crawl, and not an orphan report.**
   * Rendered reachability comes from `npm run seo:rendered`.
   */
  registryReachability: RegistryReachabilityReport;
  errorCount: number;
}

/**
 * Sitemap/metadata/structured-data/accessibility hygiene, plus **modelled**
 * registry reachability. This audit reads no rendered HTML: nothing it reports
 * is evidence about what a crawler can reach. See `docs/rendered-link-audit.md`.
 */
export function seoAudit(): SeoAuditReport {
  const metadata = metadataAudit();
  const structuredData = structuredDataAudit();
  const accessibility = accessibilityAudit();
  const registryReachability = registryReachabilityAudit();
  const modelIssues: AuditIssue[] = registryReachability.modelUnreachable.map(
    (p) => ({
      level: 'error' as const,
      code: 'registry-model-unreachable',
      message: `Indexable page not listed anywhere in the registry navigation model: ${p}`,
      where: p,
    }),
  );
  const errorCount = [
    ...metadata,
    ...structuredData,
    ...accessibility,
    ...modelIssues,
  ].filter((i) => i.level === 'error').length;
  return {
    routes: allRoutes().length,
    metadata,
    structuredData,
    accessibility: [...accessibility, ...modelIssues],
    registryReachability,
    errorCount,
  };
}

// Re-exported for callers that only need the reference-key helper.
export { refKey };
