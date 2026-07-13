import type { RegionProfile } from '@/types/region';

export const quebec: RegionProfile = {
  regionId: 'quebec',
  slug: 'quebec',
  countryCode: 'CAN',
  countrySlug: 'canada',
  name: 'Quebec',
  alternativeNames: ['Québec'],
  adminLevel: 'Province',
  officialCode: 'CA-QC',
  climateContext:
    'Humid continental climate with warm summers and cold, snowy winters; the St. Lawrence Lowlands form the warmer agricultural core, with shorter, cooler seasons across the surrounding highlands and north.',
  agroecologicalZones: ['Dfb', 'Dfa'],
  agriculturalLandContext:
    'Fertile St. Lawrence Lowlands soils anchor the province’s farming; supply-managed dairy is the backbone, complemented by field crops, hogs, and a large maple sector.',
  majorCropSystems: [
    'Grain corn (maize)',
    'Soybean',
    'Forages and hay',
    'Small grains (wheat, barley, oats)',
  ],
  majorLivestockSystems: [
    'Dairy cattle (the largest dairy herd in Canada)',
    'Hogs (a major producing and exporting sector)',
    'Poultry and eggs',
  ],
  irrigationContext:
    'Field and forage crops are predominantly rainfed; supplemental irrigation is used mainly in vegetable and horticulture areas.',
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
      name: 'Ministère de l’Agriculture, des Pêcheries et de l’Alimentation du Québec (MAPAQ)',
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
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (CA-QC).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'The dairy and poultry sectors operate under Canada’s supply-management system.',
    'Farming concentrates in the St. Lawrence Lowlands; the northern majority of the province is non-agricultural.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
