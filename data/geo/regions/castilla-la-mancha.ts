import type { RegionProfile } from '@/types/region';

export const castillaLaMancha: RegionProfile = {
  regionId: 'castilla-la-mancha',
  slug: 'castilla-la-mancha',
  countryCode: 'ESP',
  countrySlug: 'spain',
  name: 'Castilla-La Mancha',
  alternativeNames: ['Castile-La Mancha'],
  adminLevel: 'Autonomous community',
  officialCode: 'ES-CM',
  climateContext:
    'Castilla-La Mancha occupies the southern Meseta, with a continental hot-summer Mediterranean-to-semi-arid climate marked by hot dry summers, cold winters, low and erratic rainfall, and a high risk of late frosts and summer drought.',
  agroecologicalZones: ['Csa', 'BSk'],
  agriculturalLandContext:
    'The broad, gently undulating plains of La Mancha carry the world’s largest concentration of vineyards alongside extensive dryland cereals, while thin, calcareous soils and scarce water make much of the land better suited to drought-tolerant and extensive systems.',
  majorCropSystems: [
    'Wine grapes across La Mancha and Valdepeñas — by area the largest vineyard region on Earth',
    'Dryland cereals, chiefly barley and wheat, on the open plains',
    'Saffron, the traditional high-value spice crop of La Mancha',
    'Olive groves and some irrigated horticulture where water allows',
    'Legumes and sunflower in cereal rotations',
  ],
  majorLivestockSystems: [
    'Manchega sheep for Manchego cheese and lamb, on the cereal steppe and fallows',
    'Extensive goats on the sierras and scrubland',
    'Pig and poultry units integrated with cereal production',
  ],
  irrigationContext:
    'Irrigation draws heavily on the overexploited Western La Mancha and Campo de Montiel aquifers; groundwater depletion and the associated conflict over the Tablas de Daimiel wetlands make water management a central and contested issue.',
  officialInstitutions: [
    {
      name: 'Consejería de Agricultura, Agua y Desarrollo Rural (Junta de Comunidades de Castilla-La Mancha)',
      note: 'Regional ministry of agriculture, water and rural development.',
    },
    {
      name: 'Ministerio de Agricultura, Pesca y Alimentación (MAPA)',
      note: 'Spanish Ministry of Agriculture, Fisheries and Food.',
    },
    {
      name: 'Instituto Nacional de Estadística (INE)',
      note: 'National Statistics Institute of Spain.',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Castilla-La Mancha are published by the regional government, MAPA and INE and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'saffron' },
    { type: 'livestock', slug: 'sheep' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Groundwater overdraft in the La Mancha aquifers makes the balance between irrigated and rainfed area sensitive to policy and drought, so a single snapshot may not reflect current water availability.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
