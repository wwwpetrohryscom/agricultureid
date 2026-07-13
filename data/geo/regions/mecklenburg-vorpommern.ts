import type { RegionProfile } from '@/types/region';

export const mecklenburgVorpommern: RegionProfile = {
  regionId: 'mecklenburg-vorpommern',
  slug: 'mecklenburg-vorpommern',
  countryCode: 'DEU',
  countrySlug: 'germany',
  name: 'Mecklenburg-Vorpommern',
  alternativeNames: ['Mecklenburg-Western Pomerania'],
  adminLevel: 'Land',
  officialCode: 'DE-MV',
  climateContext:
    'Mecklenburg-Vorpommern lies in the transition from oceanic to continental climate on the Baltic coast, with relatively low rainfall by German standards, cold winters inland and a moderate but reliable growing season on the glacial soils of the young moraine landscape.',
  agroecologicalZones: ['Cfb', 'Dfb'],
  agriculturalLandContext:
    'The Land is characterised by large, contiguous fields on the fertile boulder-clay soils of the ground-moraine plains, farmed by comparatively large enterprises that reflect the legacy of former collective and state farms in eastern Germany.',
  majorCropSystems: [
    'Winter wheat as the dominant crop on the fertile moraine soils',
    'Winter rapeseed, grown on a large scale as the leading oilseed',
    'Winter barley and rye',
    'Sugar beet on the better soils',
    'Grain maize and pulses on lighter and rotational land',
  ],
  majorLivestockSystems: [
    'Dairy and beef cattle, often in large herds, on grassland and forage areas',
    'Pig fattening on some larger enterprises',
    'Extensive grazing and forage on coastal and lowland pastures',
  ],
  irrigationContext:
    'Farming is almost entirely rainfed; the relatively dry Baltic climate and light soils create localised drought risk, but large-scale irrigation infrastructure is limited.',
  officialInstitutions: [
    {
      name: 'Ministerium für Klimaschutz, Landwirtschaft, ländliche Räume und Umwelt Mecklenburg-Vorpommern',
      note: 'State Ministry for Climate Protection, Agriculture, Rural Areas and the Environment.',
    },
    {
      name: 'Thünen Institute',
      note: 'Federal Research Institute for Rural Areas, Forestry and Fisheries.',
    },
    {
      name: 'Destatis',
      note: 'Federal Statistical Office of Germany; publishes agricultural statistics with the Land statistical offices.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Mecklenburg-Vorpommern are published by the State Statistical Office and Destatis and are not reproduced numerically here.',
  sourceReferences: [
    {
      sourceId: 'ec-agri',
      citedFor:
        'EU Common Agricultural Policy framework and Eurostat regional farm statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global crop and livestock production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'crop', slug: 'barley' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Farm sizes here are among the largest in Germany, reflecting the post-1990 transition of former collective and state farms, so structural indicators differ sharply from the smaller-farm west and south.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
