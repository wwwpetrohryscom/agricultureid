import type { RegionProfile } from '@/types/region';

export const bavaria: RegionProfile = {
  regionId: 'bavaria',
  slug: 'bavaria',
  countryCode: 'DEU',
  countrySlug: 'germany',
  name: 'Bavaria',
  alternativeNames: ['Bayern'],
  adminLevel: 'Land',
  officialCode: 'DE-BY',
  climateContext:
    'Bavaria spans a temperate oceanic-to-continental gradient: a cool, moist Alpine foreland in the south gives way to warmer, drier basins such as the Danube valley and the Franconian Gäu, while the higher eastern uplands (Bavarian Forest, Fichtelgebirge) are colder with a shorter growing season.',
  agroecologicalZones: ['Cfb', 'Dfb'],
  agriculturalLandContext:
    'Farmland ranges from the fertile tertiary hills and river terraces of Lower Bavaria to the permanent grassland that dominates the wetter, cooler Alpine foreland; holdings are on average smaller and more often family-run than in northern or eastern Germany.',
  majorCropSystems: [
    'Winter wheat, winter barley and rye on the better arable soils of Lower Bavaria and the Gäu belts',
    'Grain and silage maize, widely grown for livestock feed and biogas',
    'Hops in the Hallertau (Holledau), the world’s largest contiguous hop-growing area',
    'Sugar beet in the Danube and Isar lowlands',
    'Grassland and forage on the moist Alpine foreland',
  ],
  majorLivestockSystems: [
    'Dairy cattle on the grassland of the Alpine foreland — Germany’s leading milk-producing Land',
    'Pig fattening, concentrated in Lower Bavaria',
    'Beef and calf rearing largely integrated with dairy herds',
  ],
  irrigationContext:
    'Farming is predominantly rainfed; supplemental irrigation is localised, mainly for vegetables, hops and crops on light soils in the drier Franconian basins.',
  officialInstitutions: [
    {
      name: 'Bayerisches Staatsministerium für Ernährung, Landwirtschaft und Forsten (StMELF)',
      note: 'Bavarian State Ministry of Food, Agriculture and Forestry.',
    },
    {
      name: 'Bayerische Landesanstalt für Landwirtschaft (LfL)',
      note: 'Bavarian State Research Center for Agriculture.',
    },
    {
      name: 'Destatis',
      note: 'Federal Statistical Office of Germany; publishes agricultural statistics with the Land statistical offices.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Bavaria are published by the Bavarian State Office for Statistics and Destatis and are not reproduced numerically here.',
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
    { type: 'livestock', slug: 'cattle' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Bavaria’s smaller-farm structure and its large share of grassland and biogas maize differ markedly from northern and eastern Germany, so state-level aggregates are not typical of the country as a whole.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
