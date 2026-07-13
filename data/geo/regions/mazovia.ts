import type { RegionProfile } from '@/types/region';

export const mazovia: RegionProfile = {
  regionId: 'mazovia',
  slug: 'mazovia',
  countryCode: 'POL',
  countrySlug: 'poland',
  name: 'Mazovia',
  alternativeNames: ['Masovian Voivodeship', 'Mazowieckie'],
  adminLevel: 'Voivodeship',
  officialCode: 'PL-14',
  climateContext:
    'Mazovia, in the central Polish lowlands around Warsaw, has a temperate climate in transition from oceanic to continental, with warm summers, cold winters, moderate rainfall and a growing season shaped by spring frost risk.',
  agroecologicalZones: ['Dfb', 'Cfb'],
  agriculturalLandContext:
    'Poland’s largest voivodeship by area is a mosaic of mostly light, sandy and loamy soils on the Mazovian plain, worked by many small and medium family farms, with river valleys (Vistula, Bug) supporting orchards and vegetables.',
  majorCropSystems: [
    'Apple orchards around Grójec and Warka — the core of Poland’s apple production, among the largest fruit-growing districts in Europe',
    'Cereals — rye, wheat, triticale and oats — on the sandy plain',
    'Potatoes and field vegetables for the Warsaw market',
    'Soft fruit (blackcurrants, strawberries) and other orchard fruit in the river valleys',
    'Forage crops and maize for the dairy sector',
  ],
  majorLivestockSystems: [
    'Dairy cattle — Mazovia is one of Poland’s leading milk-producing regions',
    'Poultry for meat and eggs',
    'Pigs on mixed family farms',
  ],
  irrigationContext:
    'Field cropping is essentially rainfed; irrigation is largely confined to orchards, soft fruit and vegetables, and drought on the light sandy soils is a recurring risk.',
  officialInstitutions: [
    {
      name: 'Mazowiecki Ośrodek Doradztwa Rolniczego (MODR)',
      note: 'Mazovian Agricultural Advisory Centre.',
    },
    {
      name: 'GUS (Główny Urząd Statystyczny)',
      note: 'Statistics Poland — the central statistical office.',
    },
    {
      name: 'IUNG-PIB',
      note: 'Institute of Soil Science and Plant Cultivation, Puławy (national research institute).',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Mazovia are published by Statistics Poland (GUS) and its regional office and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'rye' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'potato' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Farm structure is dominated by small holdings, and the intensive Grójec fruit belt is atypical of the wider voivodeship, so regional averages mask that concentration.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
