import type { RegionProfile } from '@/types/region';

export const victoria: RegionProfile = {
  regionId: 'victoria',
  slug: 'victoria',
  countryCode: 'AUS',
  countrySlug: 'australia',
  name: 'Victoria',
  alternativeNames: ['Vic'],
  adminLevel: 'State',
  officialCode: 'AU-VIC',
  climateContext:
    'Temperate climate: cool and reliably wet in the south (Gippsland, the southwest), warmer in the northeast, and drier Mediterranean-to-semi-arid in the northwest Mallee and Wimmera.',
  agroecologicalZones: ['Cfb', 'Cfa', 'BSk'],
  agriculturalLandContext:
    'Australia’s leading dairy state, with pasture-based dairying in Gippsland, the southwest, and the northern irrigation region, plus dryland grain in the Wimmera-Mallee and irrigated horticulture along the Murray (Sunraysia).',
  majorCropSystems: [
    'Wheat and barley (Wimmera / Mallee)',
    'Canola (oilseed rape)',
    'Pulses — lentils and chickpeas',
    'Horticulture — wine grapes, pome and stone fruit, citrus (Sunraysia)',
  ],
  majorLivestockSystems: [
    'Dairy cattle (Australia’s largest dairy herd)',
    'Sheep (wool and prime lambs)',
    'Beef cattle',
  ],
  irrigationContext:
    'The Goulburn-Murray Irrigation District and the Sunraysia region support dairy pasture, horticulture, and wine grapes; broadacre cropping in the Wimmera-Mallee is rainfed.',
  officialInstitutions: [
    {
      name: 'Australian Bureau of Agricultural and Resource Economics and Sciences (ABARES)',
      note: 'National agricultural research and statistics agency.',
    },
    {
      name: 'Australian Bureau of Statistics (ABS)',
      note: 'National statistical agency (agricultural census and surveys).',
    },
    { name: 'Agriculture Victoria', note: 'State agriculture agency.' },
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
    { type: 'crop', slug: 'grape' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Boundaries and administrative classification follow the official ISO 3166-2 system (AU-VIC).',
    'Any statistics from official bodies are dated and source-specific; none are reproduced here.',
    'Canola is the commercial oilseed-rape crop.',
    'Northern irrigation and Sunraysia horticulture depend on variable Murray-system water allocations.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
