import type { RegionProfile } from '@/types/region';

export const westernAustralia: RegionProfile = {
  regionId: 'western-australia',
  slug: 'western-australia',
  countryCode: 'AUS',
  countrySlug: 'australia',
  name: 'Western Australia',
  alternativeNames: ['WA'],
  adminLevel: 'State',
  officialCode: 'AU-WA',
  climateContext:
    'Mediterranean climate with wet winters and hot, dry summers across the southwest wheatbelt, grading to semi-arid interior and arid conditions in the north; winter rainfall drives the cropping season.',
  agroecologicalZones: ['Csa', 'BSk', 'BWh'],
  agriculturalLandContext:
    'The Western Australian Wheatbelt is a very large winter-rainfall dryland grain and sheep zone on ancient, often sandy and dryland-salinity-prone soils; WA is one of Australia’s leading grain exporters.',
  majorCropSystems: [
    'Wheat',
    'Barley',
    'Canola (oilseed rape)',
    'Lupins and other pulses',
  ],
  majorLivestockSystems: [
    'Sheep (Merino wool and meat) integrated with cropping',
    'Beef cattle in the north (Kimberley / Pilbara rangelands)',
  ],
  irrigationContext:
    'The wheatbelt is almost entirely rainfed under winter-dominant rainfall; irrigation is limited to the Ord River scheme in the north and horticulture near Perth and the southwest.',
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
      name: 'Western Australia Department of Primary Industries and Regional Development (DPIRD)',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'barley' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (AU-WA).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop.',
    'Cropping is winter-rainfall dependent, and dryland salinity constrains parts of the wheatbelt.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
