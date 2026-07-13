import type { RegionProfile } from '@/types/region';

export const kansas: RegionProfile = {
  regionId: 'kansas',
  slug: 'kansas',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Kansas',
  adminLevel: 'State',
  officialCode: 'US-KS',
  climateContext:
    'Kansas ranges from cold semi-arid steppe (BSk) in the west to humid subtropical and hot-summer continental (Cfa/Dfa) conditions in the east, with hot summers, cold winters, and westward-declining rainfall. The east–west moisture gradient separates row crops from dryland wheat and rangeland.',
  agroecologicalZones: ['BSk', 'Cfa', 'Dfa'],
  agriculturalLandContext:
    'Wheat and rangeland dominate the semi-arid west and the Flint Hills tallgrass prairie, while the wetter east and the irrigated southwest support row crops; a large share of the state overlies the High Plains (Ogallala) Aquifer.',
  majorCropSystems: [
    'Hard red winter wheat',
    'Grain sorghum',
    'Irrigated and rainfed maize and soybean',
  ],
  majorLivestockSystems: [
    'Beef cattle feedlot finishing',
    'Cow–calf grazing on the Flint Hills and western rangeland',
  ],
  irrigationContext:
    'Irrigation is concentrated in the west and southwest, drawing on the declining High Plains (Ogallala) Aquifer; eastern and central cropping is largely rainfed.',
  officialInstitutions: [
    {
      name: 'Kansas Department of Agriculture',
      note: 'State department for agriculture, water, and animal health.',
    },
    {
      name: 'K-State Research and Extension (Kansas State University)',
      note: 'Land-grant research and extension for crops, livestock, and range management.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Kansas are published by USDA NASS and the Kansas Department of Agriculture and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'usda-nass',
      citedFor: 'Official state agricultural statistics',
    },
    { sourceId: 'usda', citedFor: 'Federal agricultural context' },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'The state profile spans very different systems — dryland winter wheat and rangeland in the semi-arid west versus irrigated and rainfed row crops in the east — that averages obscure.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
