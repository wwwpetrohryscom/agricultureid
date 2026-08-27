import { PUBLISHED_CONTENT, contentUrlPath } from '@/lib/content/registry';
import { INDICATORS, profilesSorted, regionProfiles } from '@/lib/geo/registry';
import { allSnapshots } from '@/lib/geo/snapshots';
import { tradeSnapshot } from '@/lib/trade/snapshot';
import { FAOSTAT_TRADE_DATASET_ID } from '@/lib/data-ops/registry';
import {
  publishedAuthorities,
  authorityPath,
  AUTHORITIES_HUB_PATH,
  AUTHORITY_VIEW_COUNTRIES,
  countryAuthoritiesPath,
} from '@/lib/authorities/registry';
import {
  countryPath,
  datasetPath,
  datasetSlug,
  indicatorPath,
  regionPath,
} from '@/lib/geo/paths';
import { TOOLS } from '@/lib/tools/tools';
import { allComparisons, comparisonPath } from '@/lib/comparison/registry';
import {
  zonesSorted,
  zonePath,
  allRegions,
  regionPath as subRegionPath,
  countriesWithRegions,
} from '@/lib/geo/region-registry';
import {
  publishedRegistries,
  registryPath,
  REGISTRIES_HUB_PATH,
} from '@/lib/registries/registry';
import {
  publishedComplianceTopics,
  compliancePath,
  REGULATIONS_HUB_PATH,
} from '@/lib/compliance/registry';
import {
  publishedSupportPrograms,
  supportPath,
  SUPPORT_HUB_PATH,
} from '@/lib/support/registry';
import {
  cropsWithCalendars,
  cropCalendarPath,
  CALENDARS_HUB_PATH,
} from '@/lib/calendars/registry';
import { BIOSECURITY_HUB_PATH } from '@/lib/biosecurity/registry';
import { VARIETY_REGISTRATION_HUB_PATH } from '@/lib/varieties/registry';
import {
  MARKETS_HUB_PATH,
  commodityMarketPath,
  commoditiesWithMarketData,
} from '@/lib/markets/registry';
import { EXTENSION_HUB_PATH } from '@/lib/extension/registry';
import {
  INPUTS_HUB_PATH,
  ACTIVE_SUBSTANCES_PATH,
  PRODUCTS_PATH,
  PRODUCT_FAMILIES,
  productFamilyPath,
  productsInFamily,
} from '@/lib/inputs/registry';

/** Stable last-modified date for static (non-content) routes. */
export const SITE_LAST_UPDATED = '2026-07-12';

export interface RouteEntry {
  path: string;
  lastModified: string;
  changeFrequency:
    'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Every indexable static route. Sections that are intentionally not built in
 * Phase 1 (machinery, tools) are absent — we do not publish empty shells.
 */
const STATIC_ROUTES: Omit<RouteEntry, 'lastModified'>[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  // Content hubs
  { path: '/crops', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/soils', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/plant-diseases', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/pests', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/livestock', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/cultivars', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/breeds', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/plant-nutrition', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/fertilizers', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/soil-health', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/machinery', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/climate', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/farm-systems', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/irrigation', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/post-harvest', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/processing', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quality-attributes', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/post-harvest-defects', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/quality-measurements', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/commodities', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/commodity-products', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/commodity-grades', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/trade', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/logistics', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/standards', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/market-terms', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/supply-chain-risks', changeFrequency: 'weekly', priority: 0.9 },
  // Overview sections
  { path: '/agricultural-data', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/countries', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/datasets', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/methodology/data', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/data-health', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/tools', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/explore', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/compare', changeFrequency: 'weekly', priority: 0.6 },
  // Reference
  { path: '/glossary', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/sources', changeFrequency: 'monthly', priority: 0.6 },
  {
    path: AUTHORITIES_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: REGISTRIES_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: REGULATIONS_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: SUPPORT_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: CALENDARS_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: BIOSECURITY_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: VARIETY_REGISTRATION_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: MARKETS_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: EXTENSION_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: INPUTS_HUB_PATH,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    path: ACTIVE_SUBSTANCES_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    path: PRODUCTS_PATH,
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  // One route per product family. Each is a substantive listing of hundreds of
  // authorised products, not a slice created to make more URLs.
  ...PRODUCT_FAMILIES.filter((f) => productsInFamily(f.slug).length > 0).map(
    (f) => ({
      path: productFamilyPath(f.slug),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }),
  ),
  // Trust, editorial, legal
  { path: '/about', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/editorial-policy', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/methodology', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/corrections', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.2 },
];

/**
 * Route groups used to assemble the sitemap in a stable order and to let the SEO
 * audit reason about sections. These are internal groupings, NOT separate
 * sitemap files: the sitemap is a single `/sitemap.xml` (see `app/sitemap.ts`),
 * because the URL count is far below the per-sitemap limit. Order is stable.
 */
export const SITEMAP_SECTIONS = [
  'pages',
  'content',
  'post-harvest',
  'commodities',
  'trade',
  'geo',
  'tools',
  'authorities',
] as const;
export type SitemapSection = (typeof SITEMAP_SECTIONS)[number];

/** Indexable routes grouped by sitemap section. */
export function sectionedRoutes(): Record<SitemapSection, RouteEntry[]> {
  const staticRoutes: RouteEntry[] = STATIC_ROUTES.map((r) => ({
    ...r,
    lastModified: SITE_LAST_UPDATED,
  }));

  const COMMODITY_TYPES = new Set([
    'commodity',
    'commodity-product',
    'commodity-grade',
  ]);
  // Phase 5B — the post-harvest quality cluster gets its own shard.
  const POST_HARVEST_TYPES = new Set([
    'post-harvest',
    'processing-method',
    'quality-attribute',
    'post-harvest-defect',
    'quality-measurement',
  ]);
  // Phase 5D — the trade/logistics/standards/market/risk cluster gets its
  // own shard. Hubs stay in `pages` (STATIC_ROUTES).
  const TRADE_TYPES = new Set([
    'trade-concept',
    'logistics-concept',
    'standard-reference',
    'market-term',
    'supply-chain-risk',
  ]);
  const allContentRoutes = PUBLISHED_CONTENT.map((item) => ({
    path: contentUrlPath(item),
    lastModified: item.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    isCommodity: COMMODITY_TYPES.has(item.contentType),
    isPostHarvest: POST_HARVEST_TYPES.has(item.contentType),
    isTrade: TRADE_TYPES.has(item.contentType),
  }));
  const contentRoutes: RouteEntry[] = allContentRoutes
    .filter((r) => !r.isCommodity && !r.isPostHarvest && !r.isTrade)
    .map(({ isCommodity: _d1, isPostHarvest: _d2, isTrade: _d3, ...r }) => r);
  const tradeRoutes: RouteEntry[] = allContentRoutes
    .filter((r) => r.isTrade)
    .map(({ isCommodity: _d1, isPostHarvest: _d2, isTrade: _d3, ...r }) => r);
  const postHarvestRoutes: RouteEntry[] = allContentRoutes
    .filter((r) => r.isPostHarvest)
    .map(({ isCommodity: _d1, isPostHarvest: _d2, isTrade: _d3, ...r }) => r);
  // Phase 5A — the commodity cluster gets its own sitemap shard.
  const commodityRoutes: RouteEntry[] = allContentRoutes
    .filter((r) => r.isCommodity)
    .map(({ isCommodity: _d1, isPostHarvest: _d2, isTrade: _d3, ...r }) => r);

  // Phase 3B — geographic routes (country profiles, indicators, datasets,
  // regions). Statistics change on the provider's cycle, so these are monthly.
  const geoRoutes: RouteEntry[] = [
    ...profilesSorted().map((p) => ({
      path: countryPath(p.slug),
      lastModified: p.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...INDICATORS.map((i) => ({
      path: indicatorPath(i.slug),
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...allSnapshots().map((s) => ({
      path: datasetPath(datasetSlug(s.indicatorId)),
      lastModified: s.retrievedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.4,
    })),
    // Phase 5D — FAOSTAT trade dataset (not an indicator series).
    ...(tradeSnapshot()
      ? [
          {
            path: datasetPath(FAOSTAT_TRADE_DATASET_ID),
            lastModified: tradeSnapshot()!.retrievedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.4,
          },
        ]
      : []),
    ...regionProfiles().map((r) => ({
      path: regionPath(r.slug),
      lastModified: r.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  // Phase 3C — calculator tools.
  const toolRoutes: RouteEntry[] = TOOLS.map((t) => ({
    path: `/tools/${t.slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Phase 4B — fixed editorial comparison pages (arbitrary custom combos are
  // noindex and never listed here).
  const comparisonRoutes: RouteEntry[] = allComparisons().map((c) => ({
    path: comparisonPath(c),
    lastModified: c.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Phase 4C — agroecological zones + subnational regions.
  const zoneRoutes: RouteEntry[] = [
    {
      path: '/agroecological-zones',
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    ...zonesSorted().map((z) => ({
      path: zonePath(z),
      lastModified: z.updatedAt,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ];
  const regionRoutes: RouteEntry[] = [
    ...countriesWithRegions().map((c) => ({
      path: `/countries/${c}/regions`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...allRegions().map((r) => ({
      path: subRegionPath(r),
      lastModified: r.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  // Agricultural authorities cluster. ONLY publishable bodies appear here:
  // directory records are verified but evidence-thin, so they are listed on the
  // hub without a detail page and must never enter the sitemap.
  const authorityRoutes: RouteEntry[] = [
    // Country authority views are substantive canonical listings — they are the
    // crawl path for jurisdictions that have no RegionProfile page.
    ...AUTHORITY_VIEW_COUNTRIES.map((c) => ({
      path: countryAuthoritiesPath(c.slug),
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // One route per crop; the 172 crop×jurisdiction records are table rows on
    // those pages, never routes of their own.
    ...cropsWithCalendars().map((crop) => ({
      path: cropCalendarPath(crop),
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    // One route per commodity. A commodity×country market page would be 2,480
    // routes, each a single table the commodity page already shows in context,
    // so country detail stays a table row rather than becoming a URL.
    ...commoditiesWithMarketData().map((commodity) => ({
      path: commodityMarketPath(commodity),
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...publishedSupportPrograms().map((p) => ({
      path: supportPath(p.slug),
      lastModified: p.lastVerifiedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...publishedComplianceTopics().map((t) => ({
      path: compliancePath(t.slug),
      lastModified: t.lastVerifiedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...publishedRegistries().map((r) => ({
      path: registryPath(r.slug),
      lastModified: r.lastVerifiedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...publishedAuthorities().map((a) => ({
      path: authorityPath(a.slug),
      lastModified: a.reviewedAt ?? SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return {
    // Static, overview, reference, and legal pages.
    pages: staticRoutes,
    // Every structured content-type entry (crops, diseases, post-harvest, …).
    content: contentRoutes,
    // Post-harvest quality cluster (processes/systems, attributes, defects,
    // measurements). Hubs live in the `pages` shard.
    'post-harvest': postHarvestRoutes,
    // Commodity taxonomy cluster (commodities, products, grading standards).
    // The three hubs live in the `pages` shard (STATIC_ROUTES); this shard
    // carries only the entries, so no path appears in two shards.
    commodities: commodityRoutes,
    // Trade, logistics, standards, market terms, and supply-chain risks
    // (Phase 5D). Hubs live in the `pages` shard.
    trade: tradeRoutes,
    // Geographic + agroecological pages (countries, indicators, datasets, WB
    // macro-regions, agroecological zones, subnational regions).
    geo: [...geoRoutes, ...zoneRoutes, ...regionRoutes],
    // Interactive + editorial: calculator tools and fixed comparisons.
    tools: [...toolRoutes, ...comparisonRoutes],
    // Official agricultural authority profiles. The hub lives in `pages`.
    authorities: authorityRoutes,
  };
}

/** All indexable routes with resolved last-modified dates (flat). */
export function allRoutes(): RouteEntry[] {
  const sections = sectionedRoutes();
  return SITEMAP_SECTIONS.flatMap((s) => sections[s]);
}

/** Set of every path present in the sitemap (for validation coverage checks). */
export function sitemapPaths(): Set<string> {
  return new Set(allRoutes().map((r) => r.path));
}
