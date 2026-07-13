import type { RegionProfile } from '@/types/region';

export const indiana: RegionProfile = {
  regionId: 'indiana',
  slug: 'indiana',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Indiana',
  adminLevel: 'State',
  officialCode: 'US-IN',
  climateContext:
    'Indiana is mostly hot-summer humid continental (Dfa), grading into humid subtropical (Cfa) along the Ohio River in the far south, with hot, humid summers and rain in all seasons. The frost-free season lengthens toward the south.',
  agroecologicalZones: ['Dfa', 'Cfa'],
  agriculturalLandContext:
    'Deep glacial-till and prairie soils of the central and northern till plains carry intensive row cropping, while the unglaciated south is more dissected and mixed in land use.',
  majorCropSystems: [
    'Rainfed maize–soybean two-year rotation',
    'Soft red winter wheat',
    'Specialty crops including popcorn, processing tomatoes, and melons',
  ],
  majorLivestockSystems: [
    'Confined hogs — a leading state',
    'Egg-layer poultry, ducks, and turkeys',
    'Dairy and beef cattle',
  ],
  irrigationContext:
    'Field crops are predominantly rainfed, with some irrigation on lighter soils in the northwest and on specialty crops.',
  officialInstitutions: [
    {
      name: 'Indiana State Department of Agriculture',
      note: 'State department for agriculture, soil conservation, and marketing.',
    },
    {
      name: 'Purdue Extension (Purdue University)',
      note: 'Land-grant research and extension for crops, livestock, and agribusiness.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Indiana are published by USDA NASS and the Indiana State Department of Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'chickens' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'A statewide profile masks the contrast between the flat, intensively cropped central and northern till plains and the more mixed land use of the unglaciated south.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
