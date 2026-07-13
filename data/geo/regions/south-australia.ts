import type { RegionProfile } from '@/types/region';

export const southAustralia: RegionProfile = {
  regionId: 'south-australia',
  slug: 'south-australia',
  countryCode: 'AUS',
  countrySlug: 'australia',
  name: 'South Australia',
  alternativeNames: ['SA'],
  adminLevel: 'State',
  officialCode: 'AU-SA',
  climateContext:
    'Mediterranean climate with wet winters and hot, dry summers across the agricultural south, grading rapidly to semi-arid and arid conditions inland; it is the driest of the mainland states.',
  agroecologicalZones: ['Csa', 'BSk', 'BWh'],
  agriculturalLandContext:
    'Winter-rainfall broadacre cropping on Eyre and Yorke Peninsulas and the Murray Mallee, alongside premium wine regions (Barossa, Clare, Coonawarra, McLaren Vale) and irrigated Riverland horticulture.',
  majorCropSystems: [
    'Wheat',
    'Barley',
    'Canola (oilseed rape)',
    'Pulses — lentils, field peas, faba beans',
    'Wine grapes',
  ],
  majorLivestockSystems: [
    'Sheep (wool and meat)',
    'Beef cattle and some dairy',
  ],
  irrigationContext:
    'The Murray River Riverland is the main irrigation zone, supplying wine grapes, citrus, and horticulture; broadacre grain and pulse cropping is rainfed.',
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
      name: 'Primary Industries and Regions SA (PIRSA)',
      note: 'State primary industries agency.',
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
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'lentil' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (AU-SA).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop.',
    'Riverland irrigation depends on variable Murray River water allocations.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
