import type { RegionProfile } from '@/types/region';

export const ontario: RegionProfile = {
  regionId: 'ontario',
  slug: 'ontario',
  countryCode: 'CAN',
  countrySlug: 'canada',
  name: 'Ontario',
  adminLevel: 'Province',
  officialCode: 'CA-ON',
  climateContext:
    'Humid continental climate; the far south around Lakes Erie and Ontario has warm-to-hot summers moderated by the Great Lakes and a season long enough for full-season maize and soybean, grading to shorter, cooler seasons in the north.',
  agroecologicalZones: ['Dfa', 'Dfb'],
  agriculturalLandContext:
    'The Great Lakes lowlands of southern Ontario hold the province’s most productive cropland and Canada’s most intensive horticulture (Niagara tender-fruit belt, Holland Marsh), supporting the country’s most diversified farm economy.',
  majorCropSystems: [
    'Grain corn (maize)',
    'Soybean',
    'Winter wheat',
    'Hay and forages',
    'Horticulture (apples, grapes/tender fruit, vegetables)',
  ],
  majorLivestockSystems: [
    'Dairy cattle (among the largest in Canada)',
    'Poultry and eggs',
    'Hogs and beef cattle',
  ],
  irrigationContext:
    'Field crops are largely rainfed; irrigation is concentrated in high-value horticulture and the Niagara tender-fruit and vegetable areas.',
  officialInstitutions: [
    {
      name: 'Statistics Canada',
      note: 'National statistical agency (Census of Agriculture, crop and livestock estimates).',
    },
    {
      name: 'Agriculture and Agri-Food Canada (AAFC)',
      note: 'Federal agriculture department.',
    },
    {
      name: 'Ontario Ministry of Agriculture, Food and Agribusiness',
      note: 'Provincial agriculture ministry.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics are published by Statistics Canada and Agriculture and Agri-Food Canada and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Crop and livestock system context' },
    {
      sourceId: 'faostat',
      citedFor: 'National agricultural production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'soybean' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'apple' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (CA-ON).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'The dairy sector operates under Canada’s supply-management system.',
    'Production is concentrated in the south; northern Ontario has a shorter, cooler season.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
