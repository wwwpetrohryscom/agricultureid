/**
 * Central site configuration. Single source of truth for brand, canonical
 * origin, and navigation structure. Keeping this here makes canonical URLs,
 * metadata, sitemap, and navigation deterministic across the whole app.
 */

export const SITE = {
  name: 'AgricultureID',
  domain: 'agricultureid.com',
  /**
   * Canonical origin used to build absolute URLs (canonical tags, sitemap,
   * Open Graph). Overridable per-environment but defaults to production so
   * static builds are deterministic without env configuration.
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://agricultureid.com'
  ).replace(/\/$/, ''),
  tagline: 'Global Agriculture Knowledge and Intelligence',
  description:
    'AgricultureID is a structured, evidence-based reference platform for crops, soils, plant diseases, pests, livestock, and agricultural systems — built for farmers, agronomists, researchers, and students.',
  locale: 'en',
  contactEmail: 'editorial@agricultureid.com',
} as const;

/**
 * The five structured content types that have individual, data-driven pages.
 * The literal union is the backbone of routing, validation, and the knowledge
 * graph.
 */
export const CONTENT_TYPES = [
  'crop',
  'soil',
  'plant-disease',
  'pest',
  'livestock',
  'nutrient',
  'fertilizer',
  'soil-topic',
  'machinery',
  'climate',
  'farming-system',
  'irrigation-method',
  'post-harvest',
  'cultivar',
  'breed',
] as const;

export type ContentType = (typeof CONTENT_TYPES)[number];

/**
 * Maps a content type to its URL segment (pluralised route base). Canonical
 * paths are always `/{segment}/{slug}`.
 */
export const CONTENT_TYPE_ROUTE: Record<ContentType, string> = {
  crop: 'crops',
  soil: 'soils',
  'plant-disease': 'plant-diseases',
  pest: 'pests',
  livestock: 'livestock',
  nutrient: 'plant-nutrition',
  fertilizer: 'fertilizers',
  'soil-topic': 'soil-health',
  machinery: 'machinery',
  climate: 'climate',
  'farming-system': 'farm-systems',
  'irrigation-method': 'irrigation',
  'post-harvest': 'post-harvest',
  cultivar: 'cultivars',
  breed: 'breeds',
};

export const CONTENT_TYPE_LABEL: Record<ContentType, string> = {
  crop: 'Crop',
  soil: 'Soil',
  'plant-disease': 'Plant Disease',
  pest: 'Pest',
  livestock: 'Livestock',
  nutrient: 'Plant Nutrient',
  fertilizer: 'Fertilizer',
  'soil-topic': 'Soil Health',
  machinery: 'Machinery',
  climate: 'Climate Factor',
  'farming-system': 'Farming System',
  'irrigation-method': 'Irrigation Method',
  'post-harvest': 'Post-Harvest',
  cultivar: 'Cultivar',
  breed: 'Breed',
};

export const CONTENT_TYPE_LABEL_PLURAL: Record<ContentType, string> = {
  crop: 'Crops',
  soil: 'Soils',
  'plant-disease': 'Plant Diseases',
  pest: 'Pests',
  livestock: 'Livestock',
  nutrient: 'Plant Nutrients',
  fertilizer: 'Fertilizers',
  'soil-topic': 'Soil Health',
  machinery: 'Machinery',
  climate: 'Climate',
  'farming-system': 'Farming Systems',
  'irrigation-method': 'Irrigation',
  'post-harvest': 'Post-Harvest',
  cultivar: 'Cultivars',
  breed: 'Breeds',
};

/**
 * Primary navigation sections. `active: true` sections have real public
 * content and appear in the header. `active: false` sections have an honest
 * overview page but are intentionally not linked from the primary nav until
 * they hold substantive content (no empty category shells).
 */
export interface NavSection {
  label: string;
  href: string;
  description: string;
  active: boolean;
  /** Present when this section maps to a structured content type. */
  contentType?: ContentType;
}

export const SECTIONS: NavSection[] = [
  {
    label: 'Crops',
    href: '/crops',
    description:
      'Field, cereal, oilseed, and horticultural crops with agronomy, requirements, and associated pests and diseases.',
    active: true,
    contentType: 'crop',
  },
  {
    label: 'Soils',
    href: '/soils',
    description:
      'Soil textures and types, their properties, management considerations, and crop suitability.',
    active: true,
    contentType: 'soil',
  },
  {
    label: 'Plant Diseases',
    href: '/plant-diseases',
    description:
      'Fungal, bacterial, and other plant diseases — identification, biology, hosts, and prevention principles.',
    active: true,
    contentType: 'plant-disease',
  },
  {
    label: 'Pests',
    href: '/pests',
    description:
      'Insect and arthropod pests of crops — biology, hosts, monitoring, and integrated management principles.',
    active: true,
    contentType: 'pest',
  },
  {
    label: 'Livestock',
    href: '/livestock',
    description:
      'Farm animal species — production context, husbandry considerations, nutrition, and welfare.',
    active: true,
    contentType: 'livestock',
  },
  {
    label: 'Cultivars',
    href: '/cultivars',
    description:
      'Crop varieties, cultivars, and landraces tied to their parent species, origin, registries, and authoritative sources.',
    active: true,
    contentType: 'cultivar',
  },
  {
    label: 'Breeds',
    href: '/breeds',
    description:
      'Livestock breeds tied to their parent species, origin, herd books, conservation status, and authoritative sources.',
    active: true,
    contentType: 'breed',
  },
  {
    label: 'Farming Systems',
    href: '/farm-systems',
    description:
      'Agricultural production systems, from conventional and organic to regenerative, protected, and soilless cultivation.',
    active: true,
    contentType: 'farming-system',
  },
  {
    label: 'Machinery',
    href: '/machinery',
    description:
      'Agricultural machinery and equipment — from tractors and tillage to seeding, spraying, harvest, and precision technology.',
    active: true,
    contentType: 'machinery',
  },
  {
    label: 'Irrigation',
    href: '/irrigation',
    description:
      'Irrigation methods and water-management approaches, and their efficiency considerations.',
    active: true,
    contentType: 'irrigation-method',
  },
  {
    label: 'Post-Harvest',
    href: '/post-harvest',
    description:
      'Handling, drying, cooling, storage, processing, and loss-reduction operations between harvest and market.',
    active: true,
    contentType: 'post-harvest',
  },
  {
    label: 'Plant Nutrition',
    href: '/plant-nutrition',
    description:
      'Essential plant nutrients — macro-, secondary, and micronutrients — their roles, deficiencies, and interactions.',
    active: true,
    contentType: 'nutrient',
  },
  {
    label: 'Fertilizers',
    href: '/fertilizers',
    description:
      'Mineral, compound, organic, and micronutrient fertilizers — composition, the nutrients they supply, and use principles.',
    active: true,
    contentType: 'fertilizer',
  },
  {
    label: 'Soil Health',
    href: '/soil-health',
    description:
      'Soil properties and processes — structure, pH, salinity, organic matter, cation exchange, biology, and testing.',
    active: true,
    contentType: 'soil-topic',
  },
  {
    label: 'Climate',
    href: '/climate',
    description:
      'Climate factors that shape agriculture — temperature, rainfall, drought, frost, humidity, and growing-degree days.',
    active: true,
    contentType: 'climate',
  },
  {
    label: 'Agricultural Data',
    href: '/agricultural-data',
    description:
      'Authoritative agricultural statistics and datasets, and how AgricultureID references them.',
    active: true,
  },
  {
    label: 'Agroecological Zones',
    href: '/agroecological-zones',
    description:
      'Köppen-Geiger climate/agroecological zones and their agricultural relevance.',
    active: true,
  },
  {
    label: 'Tools',
    href: '/tools',
    description:
      'Transparent agricultural calculators grounded in a versioned formula registry — with every formula, assumption, and source shown.',
    active: true,
  },
  {
    label: 'Explore',
    href: '/explore',
    description:
      'Browse the knowledge graph by entity type and relationship, or search the whole platform.',
    active: true,
  },
  {
    label: 'Compare',
    href: '/compare',
    description:
      'Curated, evidence-based comparisons of compatible crops, cultivars, breeds, fertilizers, and countries.',
    active: true,
  },
  {
    label: 'Glossary',
    href: '/glossary',
    description: 'Definitions of key agricultural and agronomic terms.',
    active: true,
  },
  {
    label: 'Sources',
    href: '/sources',
    description:
      'The registry of authoritative organizations and publications AgricultureID references.',
    active: true,
  },
  {
    label: 'Data Health',
    href: '/data-health',
    description:
      'Transparency dashboard for dataset snapshots, source evidence, provenance coverage, image licensing, and formula versions.',
    active: true,
  },
];

/** All active sections (used in the footer and mobile menu). */
export const PRIMARY_NAV = SECTIONS.filter((s) => s.active);

/** Curated, uncrowded set of links shown in the desktop header. */
const HEADER_HREFS = new Set([
  '/crops',
  '/soils',
  '/plant-diseases',
  '/pests',
  '/livestock',
  '/farm-systems',
]);
export const HEADER_NAV = SECTIONS.filter(
  (s) => s.active && HEADER_HREFS.has(s.href),
);

/** Reference / knowledge-base sections, grouped for the footer and menu. */
export const REFERENCE_NAV = SECTIONS.filter(
  (s) =>
    s.active &&
    [
      '/cultivars',
      '/breeds',
      '/irrigation',
      '/post-harvest',
      '/plant-nutrition',
      '/agricultural-data',
      '/agroecological-zones',
      '/explore',
      '/compare',
      '/glossary',
      '/sources',
      '/data-health',
    ].includes(s.href),
);
