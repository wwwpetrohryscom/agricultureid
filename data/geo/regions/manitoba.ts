import type { RegionProfile } from '@/types/region';

export const manitoba: RegionProfile = {
  regionId: 'manitoba',
  slug: 'manitoba',
  countryCode: 'CAN',
  countrySlug: 'canada',
  name: 'Manitoba',
  adminLevel: 'Province',
  officialCode: 'CA-MB',
  climateContext:
    'Cold humid continental climate with warm summers and very cold winters; moisture increases eastward, and the low-lying Red River Valley is warm enough for longer-season crops than the western Prairies.',
  agroecologicalZones: ['Dfb'],
  agriculturalLandContext:
    'Fertile Red River Valley lacustrine clays and surrounding prairie soils give Manitoba a more diversified cropping mix than the drier western provinces, alongside a large intensive hog sector.',
  majorCropSystems: [
    'Wheat (spring)',
    'Canola (oilseed rape)',
    'Soybean',
    'Grain corn (maize)',
    'Oats, field peas, and sunflower',
  ],
  majorLivestockSystems: [
    'Hogs (a leading production and processing sector)',
    'Beef cattle',
    'Poultry and eggs',
  ],
  irrigationContext:
    'Cropping is largely rainfed; supplemental irrigation is concentrated in potato and vegetable areas.',
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
      name: 'Manitoba Agriculture',
      note: 'Provincial agriculture department.',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (CA-MB).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop.',
    'The Red River Valley’s longer, warmer season supports soybean and corn that are marginal farther west.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
