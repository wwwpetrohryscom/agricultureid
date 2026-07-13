import type { RegionProfile } from '@/types/region';

export const california: RegionProfile = {
  regionId: 'california',
  slug: 'california',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'California',
  adminLevel: 'State',
  officialCode: 'US-CA',
  climateContext:
    'California is dominated by Mediterranean climates — hot-summer (Csa) in the Central Valley and warm-summer (Csb) along the coast — grading into cold semi-arid (BSk) and hot-desert (BWh) conditions in the south and interior. Rain falls mostly in winter, so the long, dry summer growing season depends on irrigation.',
  agroecologicalZones: ['Csa', 'Csb', 'BSk', 'BWh'],
  agriculturalLandContext:
    'The Central Valley (Sacramento and San Joaquin valleys) and the coastal valleys concentrate extraordinarily diverse, high-value cropping on deep alluvial soils; much of the rest of the state is rangeland, desert, or mountains.',
  majorCropSystems: [
    'Irrigated tree nuts — almonds, walnuts, and pistachios',
    'Wine, table, and raisin grapes and citrus',
    'Processing tomatoes, rice, cotton, and intensive vegetable and berry horticulture',
  ],
  majorLivestockSystems: [
    'Large-scale dairy — the leading dairy state',
    'Beef cow–calf and cattle grazing on foothill rangeland',
    'Poultry',
  ],
  irrigationContext:
    'Irrigation is fundamental: the federal Central Valley Project, the State Water Project, and local districts move Sierra Nevada snowmelt to farms, supplemented — and in drought heavily substituted — by groundwater.',
  officialInstitutions: [
    {
      name: 'California Department of Food and Agriculture (CDFA)',
      note: 'State department for agriculture, animal and plant health, and marketing.',
    },
    {
      name: 'University of California Agriculture and Natural Resources (UC ANR)',
      note: 'Statewide land-grant research and cooperative extension.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for California are published by USDA NASS and the California Department of Food and Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
    {
      sourceId: 'uc-ipm',
      citedFor: 'California crop production and pest-management context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'almond' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'tomato' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'Water availability is decisive and highly variable year to year; a snapshot profile does not capture drought cycles, surface-water allocations, or groundwater-sustainability constraints.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
