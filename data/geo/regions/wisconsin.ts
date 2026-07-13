import type { RegionProfile } from '@/types/region';

export const wisconsin: RegionProfile = {
  regionId: 'wisconsin',
  slug: 'wisconsin',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Wisconsin',
  adminLevel: 'State',
  officialCode: 'US-WI',
  climateContext:
    'Wisconsin is hot-summer humid continental (Dfa) in the south and warm-summer humid continental (Dfb) in the north, with warm summers, cold, snowy winters, and reliable year-round precipitation. The cooler north favors forage and dairy over long-season grain.',
  agroecologicalZones: ['Dfa', 'Dfb'],
  agriculturalLandContext:
    'A landscape of dairy farms, forage, and grain in the south and west gives way to forest, cranberry marshes, and the irrigated Central Sands vegetable district; soils and terrain are varied, including the unglaciated Driftless Area.',
  majorCropSystems: [
    'Maize for grain and silage and soybean',
    'Alfalfa, hay, and forage for dairy',
    'Potatoes, processing vegetables, and cranberries',
  ],
  majorLivestockSystems: [
    'Dairy — the core of "America’s Dairyland" and a national leader',
    'Beef cattle',
    'Confined hogs and poultry',
  ],
  irrigationContext:
    'Most cropping is rainfed, with concentrated center-pivot irrigation on the sandy Central Sands potato and vegetable region.',
  officialInstitutions: [
    {
      name: 'Wisconsin Department of Agriculture, Trade and Consumer Protection (DATCP)',
      note: 'State department for agriculture, food safety, and consumer protection.',
    },
    {
      name: 'University of Wisconsin–Madison Division of Extension',
      note: 'Land-grant research and extension for dairy, crops, and horticulture.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Wisconsin are published by USDA NASS and the Wisconsin Department of Agriculture, Trade and Consumer Protection and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'cranberry' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'Dairy links to the "cattle" entry here, but Wisconsin production is overwhelmingly dairy rather than beef — a distinction a broad species link does not convey.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
