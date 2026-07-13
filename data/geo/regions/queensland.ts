import type { RegionProfile } from '@/types/region';

export const queensland: RegionProfile = {
  regionId: 'queensland',
  slug: 'queensland',
  countryCode: 'AUS',
  countrySlug: 'australia',
  name: 'Queensland',
  alternativeNames: ['Qld'],
  adminLevel: 'State',
  officialCode: 'AU-QLD',
  climateContext:
    'Tropical to subtropical climate with wet summers and dry winters in the north, humid subtropical conditions on the southeast coast, and semi-arid interior rangelands.',
  agroecologicalZones: ['Aw', 'Cfa', 'BSh'],
  agriculturalLandContext:
    'A coastal sugarcane belt runs from the wet tropics to the central coast, vast inland rangelands carry Australia’s largest beef herd, and the Darling Downs concentrates cotton and grain on fertile basalt soils.',
  majorCropSystems: [
    'Sugarcane (coastal wet tropics and central coast)',
    'Cotton and grain sorghum (Darling Downs)',
    'Wheat (winter cropping)',
    'Tropical / subtropical horticulture — bananas, mangoes, tropical fruit, vegetables',
  ],
  majorLivestockSystems: [
    'Beef cattle — Australia’s largest herd on extensive rangelands',
  ],
  irrigationContext:
    'Coastal sugarcane and Darling Downs cotton rely heavily on irrigation, while much of the inland beef-cattle rangeland is unirrigated grazing.',
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
      name: 'Queensland Department of Agriculture and Fisheries',
      note: 'State agriculture and fisheries department.',
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
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'banana' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (AU-QLD).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Systems differ sharply by zone: coastal cane, inland rangeland beef, and Darling Downs cropping.',
    'Rangeland grazing productivity is strongly influenced by drought and monsoon variability.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
