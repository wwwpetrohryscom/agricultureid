import type { RegionProfile } from '@/types/region';

export const southDakota: RegionProfile = {
  regionId: 'south-dakota',
  slug: 'south-dakota',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'South Dakota',
  adminLevel: 'State',
  officialCode: 'US-SD',
  climateContext:
    'South Dakota is hot-summer humid continental (Dfa) in the east and cold semi-arid steppe (BSk) in the west, with cold winters, warm-to-hot summers, and rainfall declining westward. The Missouri River roughly divides the cropping east from the ranching west.',
  agroecologicalZones: ['Dfa', 'BSk'],
  agriculturalLandContext:
    'The glaciated eastern prairies support intensive row cropping, while the semi-arid West River country and Great Plains grassland are dominated by rangeland and the Black Hills.',
  majorCropSystems: [
    'Rainfed maize and soybean in the east',
    'Spring and winter wheat',
    'Sunflower, grain sorghum, oats, and alfalfa/hay',
  ],
  majorLivestockSystems: [
    'Beef cattle — cow–calf ranching on the western rangeland',
    'Cattle feeding and confined hogs',
    'Sheep and bison',
  ],
  irrigationContext:
    'Production is largely dryland/rainfed, with some irrigation along the Missouri River and its reservoirs.',
  officialInstitutions: [
    {
      name: 'South Dakota Department of Agriculture and Natural Resources (DANR)',
      note: 'State department for agriculture and natural resources (agriculture and environment merged in 2021).',
    },
    {
      name: 'SDSU Extension (South Dakota State University)',
      note: 'Land-grant research and extension for crops, livestock, and range management.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for South Dakota are published by USDA NASS and the South Dakota Department of Agriculture and Natural Resources and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'sunflower' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'A statewide profile masks the sharp Missouri-River divide between the cropped, glaciated east and the semi-arid grazing country of the west.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
