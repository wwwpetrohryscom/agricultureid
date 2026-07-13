import type { RegionProfile } from '@/types/region';

export const texas: RegionProfile = {
  regionId: 'texas',
  slug: 'texas',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Texas',
  adminLevel: 'State',
  officialCode: 'US-TX',
  climateContext:
    'Texas spans humid subtropical (Cfa) conditions in the east to semi-arid (BSk/BSh) and hot-desert (BWh) conditions in the west and far west, with rainfall declining steeply from east to west. This gradient underlies a shift from row crops in the east to ranching and irrigated cropping in the west.',
  agroecologicalZones: ['Cfa', 'BSk', 'BSh', 'BWh'],
  agriculturalLandContext:
    'Texas has more land in farms and ranches than any other state; vast rangelands cover the west and center, with intensive cropping on the irrigated High Plains, the Blackland Prairie, the Gulf Coast, and the Lower Rio Grande Valley.',
  majorCropSystems: [
    'Cotton — the leading producing state, centred on the High Plains',
    'Grain sorghum, wheat, and maize',
    'Gulf Coast rice and Lower Rio Grande Valley citrus and winter vegetables',
  ],
  majorLivestockSystems: [
    'Beef cattle — the largest cattle inventory of any state, from cow–calf ranching to Panhandle feedlots',
    'Sheep and meat/mohair goats on the Edwards Plateau',
    'Broiler poultry in the east and expanding Panhandle dairy',
  ],
  irrigationContext:
    'Irrigation is important on the High Plains (Ogallala Aquifer) and in the Rio Grande valley, but much of the state is rainfed rangeland and dryland crop.',
  officialInstitutions: [
    {
      name: 'Texas Department of Agriculture',
      note: 'State department for agriculture, marketing, and regulatory programs.',
    },
    {
      name: 'Texas A&M AgriLife Extension Service',
      note: 'Land-grant research and extension for crops, livestock, and range management.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Texas are published by USDA NASS and the Texas Department of Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'Texas is climatically and agriculturally vast; a single profile spans humid eastern row crops, semi-arid western ranching, and irrigated High Plains and Rio Grande valley systems.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
