import type { RegionProfile } from '@/types/region';

export const northDakota: RegionProfile = {
  regionId: 'north-dakota',
  slug: 'north-dakota',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'North Dakota',
  adminLevel: 'State',
  officialCode: 'US-ND',
  climateContext:
    'North Dakota is warm-summer humid continental (Dfb) across most of the state, grading into cold semi-arid steppe (BSk) in the west, with cold winters, short warm summers, and a brief frost-free season. The short season favors small grains and spring-sown crops.',
  agroecologicalZones: ['Dfb', 'BSk'],
  agriculturalLandContext:
    'The flat, fertile Red River Valley in the east is prime cropland, the drift prairie and Missouri Coteau carry mixed crop and rangeland, and the semi-arid southwest is largely grazing land.',
  majorCropSystems: [
    'Spring wheat and durum — a national leader',
    'Canola, sunflower, and flax oilseeds',
    'Soybean, maize, barley, dry edible beans, and pulses (lentils and dry peas), with sugar beet in the Red River Valley',
  ],
  majorLivestockSystems: [
    'Beef cow–calf ranching',
    'Some cattle backgrounding and feeding',
  ],
  irrigationContext:
    'Agriculture is overwhelmingly dryland/rainfed, with limited irrigation from the Missouri River system and local groundwater.',
  officialInstitutions: [
    {
      name: 'North Dakota Department of Agriculture',
      note: 'State department for agriculture, plant and animal health, and marketing.',
    },
    {
      name: 'NDSU Extension (North Dakota State University)',
      note: 'Land-grant research and extension for small grains, oilseeds, pulses, and livestock.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for North Dakota are published by USDA NASS and the North Dakota Department of Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sunflower' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'Canola is grown and reported as the oilseed brassica linked here under the crop "oilseed-rape"; the two names refer to the same crop group.',
    'The short frost-free season and the wet east / semi-arid west divide strongly shape which crops are grown where, which a statewide profile cannot fully convey.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
