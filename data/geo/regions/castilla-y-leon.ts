import type { RegionProfile } from '@/types/region';

export const castillaYLeon: RegionProfile = {
  regionId: 'castilla-y-leon',
  slug: 'castilla-y-leon',
  countryCode: 'ESP',
  countrySlug: 'spain',
  name: 'Castilla y León',
  alternativeNames: ['Castile and León'],
  adminLevel: 'Autonomous community',
  officialCode: 'ES-CL',
  climateContext:
    'Castilla y León covers the high northern Meseta drained by the Duero, with a cold continental Mediterranean climate: long cold winters, warm-to-hot summers, frequent frost and low rainfall, softened towards a more warm-summer regime on the higher, cooler plateau.',
  agroecologicalZones: ['Csb', 'Csa', 'BSk'],
  agriculturalLandContext:
    'The vast Duero basin is Spain’s principal dryland cereal region, a largely treeless plateau of open arable fields, complemented by irrigated riverside vegas and by mountain grazing on the surrounding cordilleras.',
  majorCropSystems: [
    'Dryland winter cereals — barley and wheat — dominating the Duero plateau',
    'Sugar beet and maize under irrigation along the Duero and its tributaries',
    'Wine grapes in high-value denominations such as Ribera del Duero, Rueda and Toro',
    'Legumes and forage in cereal rotations',
    'Sunflower and rapeseed as oilseeds on rainfed land',
  ],
  majorLivestockSystems: [
    'Sheep, notably Churra and Castellana breeds, for lamb and cheese on cereal fallows and pasture',
    'Intensive pig production, a major and growing sector on the plateau',
    'Dairy and beef cattle, with dairy strong in the wetter northwest (León, Zamora)',
  ],
  irrigationContext:
    'Irrigation is concentrated in the river vegas of the Duero system, supporting sugar beet, maize and vegetables, while the great majority of the plateau remains rainfed and exposed to drought.',
  officialInstitutions: [
    {
      name: 'Consejería de Agricultura, Ganadería y Desarrollo Rural (Junta de Castilla y León)',
      note: 'Regional ministry of agriculture, livestock and rural development.',
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
    'Descriptive profile; subnational statistics for Castilla y León are published by the regional government, MAPA and INE and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'As Spain’s largest autonomous community it spans dryland plateau, irrigated vegas and mountain grazing, so region-wide figures blend very different farming systems.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
