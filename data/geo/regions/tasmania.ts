import type { RegionProfile } from '@/types/region';

export const tasmania: RegionProfile = {
  regionId: 'tasmania',
  slug: 'tasmania',
  countryCode: 'AUS',
  countrySlug: 'australia',
  name: 'Tasmania',
  alternativeNames: ['Tas'],
  adminLevel: 'State',
  officialCode: 'AU-TAS',
  climateContext:
    'Cool-temperate maritime climate with mild summers and reliable year-round rainfall in the west and north; the eastern coast and the Midlands are notably drier in the rain shadow of the western highlands.',
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    'Fertile, reliably watered soils in the north and northwest support intensive dairy and vegetable cropping, while the Midlands are a wool-sheep and mixed-cropping zone increasingly served by new irrigation schemes.',
  majorCropSystems: [
    'Temperate horticulture — apples, cherries, berries',
    'Vegetables for processing (potatoes, onions, brassicas)',
    'Poppies (pharmaceutical opium alkaloids) and pyrethrum',
    'Cereals and forages',
  ],
  majorLivestockSystems: [
    'Dairy cattle (an expanding sector in the north and northwest)',
    'Sheep (fine Merino wool and prime lambs)',
    'Beef cattle',
  ],
  irrigationContext:
    'State irrigation schemes have expanded reliable water to the drier Midlands and north, underpinning dairy pasture, cropping, and horticulture.',
  officialInstitutions: [
    {
      name: 'Australian Bureau of Agricultural and Resource Economics and Sciences (ABARES)',
      note: 'National agricultural research and statistics agency.',
    },
    {
      name: 'Australian Bureau of Statistics (ABS)',
      note: 'National statistical agency (agricultural census and surveys).',
    },
    {
      name: 'Department of Natural Resources and Environment Tasmania (NRE Tas)',
      note: 'State primary industries department.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics are published by ABARES and the Australian Bureau of Statistics and are not reproduced numerically here.',
  sourceReferences: [
    { sourceId: 'fao', citedFor: 'Crop and livestock system context' },
    {
      sourceId: 'faostat',
      citedFor: 'National agricultural production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'cherry' },
    { type: 'crop', slug: 'potato' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (AU-TAS).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Poppies (opium alkaloids) are a regionally significant crop with no dedicated AgricultureID entry.',
    'Reliable rainfall in the north/west contrasts with the drier, irrigation-dependent Midlands and east.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
