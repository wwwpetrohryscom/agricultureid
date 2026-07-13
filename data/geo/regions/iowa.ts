import type { RegionProfile } from '@/types/region';

export const iowa: RegionProfile = {
  regionId: 'iowa',
  slug: 'iowa',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Iowa',
  adminLevel: 'State',
  officialCode: 'US-IA',
  climateContext:
    'Iowa lies almost entirely in the hot-summer humid continental (Dfa) zone, with warm, humid summers, cold winters, and precipitation concentrated in the growing season — a classic Corn Belt climate. Killing frosts bound a field season running from roughly late April to mid-October.',
  agroecologicalZones: ['Dfa'],
  agriculturalLandContext:
    'Iowa is among the most intensively farmed states in the country; deep, fertile prairie-derived Mollisols across the Des Moines Lobe and the loess-mantled uplands support near-continuous row-crop cultivation over most of the state.',
  majorCropSystems: [
    'Rainfed maize–soybean two-year rotation',
    'Maize for grain, livestock feed, and ethanol',
    'Alfalfa and hay for forage',
  ],
  majorLivestockSystems: [
    'Confined hog (swine) finishing — the largest concentration in the United States',
    'Cattle feeding and cow–calf operations',
    'Egg-layer poultry',
  ],
  irrigationContext:
    'Production is overwhelmingly rainfed; irrigation is minor and largely confined to sandy soils and a few specialty crops.',
  officialInstitutions: [
    {
      name: 'Iowa Department of Agriculture and Land Stewardship',
      note: 'State department for agriculture, soil conservation, and agricultural programs.',
    },
    {
      name: 'Iowa State University Extension and Outreach',
      note: 'Land-grant research and extension for crops, livestock, and farm management.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Iowa are published by USDA NASS and the Iowa Department of Agriculture and Land Stewardship and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
    {
      sourceId: 'iastate-extension',
      citedFor: 'Iowa crop and livestock production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'chickens' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'A statewide profile conceals differences between the intensively cropped central and northern plains and the more dissected, mixed land use of the loess-hill margins.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
