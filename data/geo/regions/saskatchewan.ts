import type { RegionProfile } from '@/types/region';

export const saskatchewan: RegionProfile = {
  regionId: 'saskatchewan',
  slug: 'saskatchewan',
  countryCode: 'CAN',
  countrySlug: 'canada',
  name: 'Saskatchewan',
  adminLevel: 'Province',
  officialCode: 'CA-SK',
  climateContext:
    'Cold semi-arid to subhumid continental climate with short, warm summers and long, cold winters; growing-season moisture is the dominant constraint across the grain belt, and frost dates bound the crop calendar.',
  agroecologicalZones: ['Dfb', 'BSk'],
  agriculturalLandContext:
    'Extensive dryland cropping on fertile dark-brown and black chernozemic prairie soils; large field sizes, a legacy of summerfallow, and moisture conservation define the province often called Canada’s breadbasket.',
  majorCropSystems: [
    'Spring wheat',
    'Durum wheat',
    'Canola (oilseed rape)',
    'Lentils and field peas (pulses)',
    'Barley and oats',
    'Flax',
  ],
  majorLivestockSystems: [
    'Beef cattle (cow-calf on native and tame rangeland)',
    'Some hog and poultry production',
  ],
  irrigationContext:
    'Farming is predominantly rainfed dryland; irrigation is localized, notably in the Lake Diefenbaker and South Saskatchewan River districts.',
  officialInstitutions: [
    {
      name: 'Statistics Canada',
      note: 'National statistical agency (Census of Agriculture, field-crop estimates).',
    },
    {
      name: 'Agriculture and Agri-Food Canada (AAFC)',
      note: 'Federal agriculture department.',
    },
    {
      name: 'Saskatchewan Ministry of Agriculture',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'lentil' },
    { type: 'crop', slug: 'pea' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (CA-SK).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop; durum is reported under the general wheat entry.',
    'Cropping is strongly moisture-limited, so year-to-year area and yield vary with precipitation.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
