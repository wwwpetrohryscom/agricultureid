import type { RegionProfile } from '@/types/region';

export const nebraska: RegionProfile = {
  regionId: 'nebraska',
  slug: 'nebraska',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Nebraska',
  adminLevel: 'State',
  officialCode: 'US-NE',
  climateContext:
    'Nebraska grades from hot-summer humid continental (Dfa) in the east to cold semi-arid steppe (BSk) across the west, with hot summers statewide and rainfall declining sharply westward. This west-to-east moisture gradient defines its farming systems.',
  agroecologicalZones: ['Dfa', 'BSk'],
  agriculturalLandContext:
    'Cropland dominates the wetter east and the irrigated Platte valley, while the sandy Sandhills and western High Plains are extensive rangeland; the state overlies a large part of the High Plains (Ogallala) Aquifer.',
  majorCropSystems: [
    'Irrigated and rainfed maize',
    'Soybean',
    'Winter wheat, grain sorghum, and alfalfa/hay, with sugar beet in the western Panhandle',
  ],
  majorLivestockSystems: [
    'Beef cattle feedlot finishing',
    'Cow–calf ranching on the Sandhills and western rangeland',
    'Confined hogs',
  ],
  irrigationContext:
    'Nebraska is among the most heavily irrigated states, relying on center-pivot groundwater pumping from the High Plains (Ogallala) Aquifer, supplemented by Platte and Republican river surface water.',
  officialInstitutions: [
    {
      name: 'Nebraska Department of Agriculture',
      note: 'State department for agriculture, animal and plant health, and marketing.',
    },
    {
      name: 'Nebraska Extension (University of Nebraska–Lincoln)',
      note: 'Land-grant research and extension through the Institute of Agriculture and Natural Resources.',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Nebraska are published by USDA NASS and the Nebraska Department of Agriculture and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'sorghum' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'Groundwater irrigation from the High Plains (Ogallala) Aquifer is central to western production but is subject to long-term drawdown concerns that a snapshot profile does not capture.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
