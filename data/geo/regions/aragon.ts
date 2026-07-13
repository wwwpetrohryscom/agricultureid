import type { RegionProfile } from '@/types/region';

export const aragon: RegionProfile = {
  regionId: 'aragon',
  slug: 'aragon',
  countryCode: 'ESP',
  countrySlug: 'spain',
  name: 'Aragon',
  alternativeNames: ['Aragón'],
  adminLevel: 'Autonomous community',
  officialCode: 'ES-AR',
  climateContext:
    'Aragon centres on the Ebro depression, one of the most continental and semi-arid parts of Spain, with hot dry summers, cold winters, very low rainfall and the drying cierzo wind; the Pyrenees to the north and the Iberian System to the south are cooler and wetter.',
  agroecologicalZones: ['BSk', 'Csa', 'Csb'],
  agriculturalLandContext:
    'A sharp divide separates the productive irrigated lands of the Ebro and its tributaries — including the historic Canal Imperial and Monegros schemes — from the surrounding arid dryland steppe (the Monegros) and the mountain grazing of the Pyrenees.',
  majorCropSystems: [
    'Irrigated maize and alfalfa on the Ebro valley floodplains',
    'Fruit orchards — peaches (Calanda), pears, apples and cherries — in the irrigated valleys',
    'Dryland cereals, mainly barley and wheat, on the semi-arid plains',
    'Wine grapes in Cariñena, Campo de Borja and Somontano',
    'Irrigated rice in the lower Ebro districts',
  ],
  majorLivestockSystems: [
    'Intensive pig production — Aragon holds one of Spain’s largest pig herds',
    'Poultry and rabbit units integrated with cereal cropping',
    'Sheep for lamb (Ternasco de Aragón) on the dryland steppe and mountain pastures',
  ],
  irrigationContext:
    'Irrigation from the Ebro and its regulated tributaries is the backbone of high-value production; large state irrigation schemes such as Riegos del Alto Aragón transformed the Monegros, and water allocation remains central to the regional economy.',
  officialInstitutions: [
    {
      name: 'Departamento de Agricultura, Ganadería y Alimentación (Gobierno de Aragón)',
      note: 'Regional department of agriculture, livestock and food.',
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
    'Descriptive profile; subnational statistics for Aragon are published by the Gobierno de Aragón, MAPA and INE and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'peach' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'grape' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The contrast between irrigated Ebro-valley cropping and arid dryland steppe is extreme, so community-wide averages do not describe either system well.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
