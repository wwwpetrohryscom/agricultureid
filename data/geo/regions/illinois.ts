import type { RegionProfile } from '@/types/region';

export const illinois: RegionProfile = {
  regionId: 'illinois',
  slug: 'illinois',
  countryCode: 'USA',
  countrySlug: 'united-states',
  name: 'Illinois',
  adminLevel: 'State',
  officialCode: 'US-IL',
  climateContext:
    'Illinois spans hot-summer humid continental (Dfa) conditions in the north and center and humid subtropical (Cfa) conditions in the south, with hot, humid summers and rainfall in all seasons. The frost-free season lengthens markedly from north to south.',
  agroecologicalZones: ['Dfa', 'Cfa'],
  agriculturalLandContext:
    'Deep, dark prairie Mollisols across the central till plains make Illinois one of the most productive row-crop states; cropland dominates land use outside the Chicago metropolitan area and the dissected southern hills.',
  majorCropSystems: [
    'Rainfed maize–soybean two-year rotation',
    'Soft red winter wheat, mainly in the south',
    'Specialty crops including processing pumpkins',
  ],
  majorLivestockSystems: [
    'Confined hog (swine) production',
    'Beef and dairy cattle',
    'Poultry',
  ],
  irrigationContext:
    'Row cropping is predominantly rainfed, with limited irrigation on sandier soils such as the Illinois and Kankakee river sand areas.',
  officialInstitutions: [
    {
      name: 'Illinois Department of Agriculture',
      note: 'State department for agriculture, animal health, and marketing.',
    },
    {
      name: 'University of Illinois Extension',
      note: 'Land-grant research and extension (University of Illinois Urbana-Champaign).',
    },
    {
      name: 'USDA National Agricultural Statistics Service (NASS)',
      note: 'Official state-level crop, livestock, and Census of Agriculture statistics, published through its regional field office network.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Illinois are published by USDA NASS and the Illinois Department of Agriculture and are not reproduced numerically here.',
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
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the ISO 3166-2 subdivision system and USDA/state reporting units.',
    'No subnational statistics are reproduced here; any official figures are dated, versioned, and periodically revised — read them with their year and source.',
    'A statewide profile masks the north–south climate gradient that separates the maize-dominated central prairie from the more diversified, wheat-inclusive south.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
