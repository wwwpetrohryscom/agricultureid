import type { RegionProfile } from '@/types/region';

export const apulia: RegionProfile = {
  regionId: 'apulia',
  slug: 'apulia',
  countryCode: 'ITA',
  countrySlug: 'italy',
  name: 'Apulia',
  alternativeNames: ['Puglia'],
  adminLevel: 'Region',
  officialCode: 'IT-75',
  climateContext:
    'Apulia, the flat heel of Italy, has a hot-summer Mediterranean climate grading to semi-arid on the Tavoliere and Salento, with hot dry summers, mild winters, low and irregular rainfall and a chronic scarcity of surface water.',
  agroecologicalZones: ['Csa', 'BSk'],
  agriculturalLandContext:
    'Extensive plains — the Tavoliere delle Puglie, the largest lowland in peninsular Italy — and low limestone plateaus carry vast olive groves and vineyards, with cropping shaped by shallow calcareous soils and limited water.',
  majorCropSystems: [
    'Olive groves for olive oil — Apulia is Italy’s leading olive-oil region, with ancient groves across the Salento and Bari areas',
    'Durum (hard) wheat on the Tavoliere for pasta and semolina',
    'Table and wine grapes across the Salento and Murgia',
    'Vegetables, including processing tomatoes and artichokes, under irrigation',
    'Almonds and other tree crops on the Murgia',
  ],
  majorLivestockSystems: [
    'Sheep and goats on the Murgia plateau and dry pastures, a long transhumance tradition',
    'Dairy for fresh cheeses such as mozzarella and burrata',
    'Poultry and some beef cattle on mixed farms',
  ],
  irrigationContext:
    'Water is the binding constraint: much land is rainfed, and irrigation depends on transfers from the Basilicata reservoirs and on groundwater, with over-abstraction driving salt-water intrusion along the coast.',
  officialInstitutions: [
    {
      name: 'Assessorato all’Agricoltura, Regione Puglia',
      note: 'Regional department of agriculture, rural development and food.',
    },
    {
      name: 'ISTAT',
      note: 'Italian National Institute of Statistics.',
    },
    {
      name: 'CREA',
      note: 'Council for Agricultural Research and Economics (Consiglio per la ricerca in agricoltura).',
    },
  ],
  dataCoverage:
    'Descriptive profile; subnational statistics for Apulia are published by the Regione, ISTAT and CREA and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'almond' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The Xylella fastidiosa epidemic has killed large numbers of olive trees in the Salento, so historical olive figures may not reflect the current, reduced productive area.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
