import type { RegionProfile } from '@/types/region';

export const schleswigHolstein: RegionProfile = {
  regionId: 'schleswig-holstein',
  slug: 'schleswig-holstein',
  countryCode: 'DEU',
  countrySlug: 'germany',
  name: 'Schleswig-Holstein',
  adminLevel: 'Land',
  officialCode: 'DE-SH',
  climateContext:
    'Schleswig-Holstein has a cool, humid oceanic climate strongly moderated by the North Sea and Baltic; the fertile marshes of the west coast, the sandy Geest in the centre and the rolling, clay-rich eastern uplands (the Östliches Hügelland) give a clear west-to-east soil gradient.',
  agroecologicalZones: ['Cfb'],
  agriculturalLandContext:
    'Agriculture is a defining feature of the Land, combining highly productive arable soils on the reclaimed North Sea marshes and the eastern hill country with extensive grassland on the marshes and the lighter central Geest.',
  majorCropSystems: [
    'Winter wheat on the fertile marsh and eastern hill soils — a leading wheat area',
    'Winter rapeseed as the principal oilseed',
    'Winter barley and other small grains',
    'Grassland and forage maize supporting the large dairy sector',
    'Field vegetables and seed crops on the marshes',
  ],
  majorLivestockSystems: [
    'Dairy cattle, the mainstay of livestock farming, on the grassland of the marshes and Geest',
    'Beef and calf rearing integrated with the dairy herd',
    'Some pig and poultry fattening on mixed farms',
  ],
  irrigationContext:
    'The moist maritime climate means farming is essentially rainfed; drainage and water-table management on the low-lying marshes matter far more than irrigation.',
  officialInstitutions: [
    {
      name: 'Ministerium für Landwirtschaft, ländliche Räume, Europa und Verbraucherschutz (MLLEV)',
      note: 'Schleswig-Holstein Ministry of Agriculture, Rural Areas, Europe and Consumer Protection.',
    },
    {
      name: 'Landwirtschaftskammer Schleswig-Holstein',
      note: 'Chamber of Agriculture for Schleswig-Holstein (advisory and statutory body).',
    },
    {
      name: 'Destatis',
      note: 'Federal Statistical Office of Germany; publishes agricultural statistics with the Land statistical offices.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Schleswig-Holstein are published by the joint State Statistical Office (Statistikamt Nord) and Destatis and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'oilseed-rape' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'maize' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The strong west-to-east contrast between marsh, Geest and hill soils means Land-level averages mask very different cropping and grassland systems within short distances.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
