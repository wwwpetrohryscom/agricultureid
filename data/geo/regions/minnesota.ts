import type { RegionProfile } from '@/types/region';

export const minnesota: RegionProfile = {
  regionId: 'minnesota',
  slug: 'minnesota',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Minnesota',
  adminLevel: 'State',
  officialCode: 'US-MN',
  climateContext:
    'Minnesota is hot-summer humid continental (Dfa) in the south and warm-summer humid continental (Dfb) in the north, with warm summers, cold winters, and a growing season that shortens northward. Frost dates tightly bound the field season.',
  agroecologicalZones: ['Dfa', 'Dfb'],
  agriculturalLandContext:
    'Fertile prairie soils across the south and west support intensive row cropping, the flat Red River Valley in the northwest is prime sugar beet and small-grain land, and forest and lakes dominate the northeast.',
  majorCropSystems: [
    'Rainfed maize–soybean rotation',
    'Sugar beet and spring wheat in the Red River Valley',
    'Sweet corn, peas, and dry edible beans for processing',
  ],
  majorLivestockSystems: [
    'Confined hogs — among the top states',
    'Turkey production — a national leader',
    'Dairy and beef cattle',
  ],
  irrigationContext:
    'Cropping is mostly rainfed, with center-pivot irrigation concentrated on the sandy Central Sands region.',
  officialInstitutions: [
    {
      name: 'Minnesota Department of Agriculture',
      note: 'State department for agriculture, food safety, and marketing.',
    },
    {
      name: 'University of Minnesota Extension',
      note: 'Land-grant research and extension for crops, livestock, and food systems.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Minnesota are published by USDA NASS and the Minnesota Department of Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
    {
      sourceId: 'umn-extension',
      citedFor: 'Minnesota crop and livestock production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'turkeys' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'A statewide profile masks the divide between the intensively farmed south and Red River Valley and the forested, minimally cropped northeast.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
