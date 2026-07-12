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
};

export const CONTENT_TYPE_LABEL: Record<ContentType, string> = {
  crop: 'Crop',
  soil: 'Soil',
  'plant-disease': 'Plant Disease',
  pest: 'Pest',
  livestock: 'Livestock',
};

export const CONTENT_TYPE_LABEL_PLURAL: Record<ContentType, string> = {
  crop: 'Crops',
  soil: 'Soils',
  'plant-disease': 'Plant Diseases',
  pest: 'Pests',
  livestock: 'Livestock',
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
    label: 'Farm Systems',
    href: '/farm-systems',
    description:
      'Agricultural production systems, from conventional and organic to regenerative and protected cultivation.',
    active: true,
  },
  {
    label: 'Machinery',
    href: '/machinery',
    description:
      'Categories of agricultural machinery and equipment and their roles in the production cycle.',
    active: false,
  },
  {
    label: 'Irrigation',
    href: '/irrigation',
    description:
      'Irrigation methods, water management principles, and efficiency considerations.',
    active: true,
  },
  {
    label: 'Plant Nutrition',
    href: '/plant-nutrition',
    description:
      'Essential plant nutrients, fertilizer categories, and nutrient-management principles.',
    active: true,
  },
  {
    label: 'Agricultural Data',
    href: '/agricultural-data',
    description:
      'Authoritative agricultural statistics and datasets, and how AgricultureID references them.',
    active: true,
  },
  {
    label: 'Tools',
    href: '/tools',
    description:
      'Practical agricultural calculators and reference tools (in development).',
    active: false,
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
      '/irrigation',
      '/plant-nutrition',
      '/agricultural-data',
      '/glossary',
      '/sources',
    ].includes(s.href),
);
