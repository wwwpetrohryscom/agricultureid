import type { RegionProfile } from '@/types/region';

export const veneto: RegionProfile = {
  regionId: 'veneto',
  slug: 'veneto',
  countryCode: 'ITA',
  countrySlug: 'italy',
  name: 'Veneto',
  adminLevel: 'Region',
  officialCode: 'IT-34',
  climateContext:
    'Veneto’s farmland lies on the humid subtropical Venetian-Po plain, with hot, humid summers, cold winters and rainfall in all seasons; the Prealps and Dolomites to the north are colder, while the Adriatic coast and Lake Garda margins are milder.',
  agroecologicalZones: ['Cfa', 'Cfb'],
  agriculturalLandContext:
    'The intensively farmed alluvial plain between the Alps and the Adriatic combines large arable areas with a dense fabric of vineyards on the hills (Prosecco, Valpolicella, Soave) and specialised horticulture, all set within a heavily reclaimed and drained lowland.',
  majorCropSystems: [
    'Grain and silage maize, the leading arable crop, supporting the livestock sector',
    'Wine grapes — Veneto is Italy’s largest wine-producing region by volume, led by Prosecco (Glera)',
    'Soybean, with Veneto a core of Italy’s soybean cultivation',
    'Wheat and other cereals in rotation',
    'Radicchio, horticulture and orchards as high-value specialities',
  ],
  majorLivestockSystems: [
    'Poultry and eggs — Veneto is Italy’s leading poultry region, centred on the Verona–Vicenza belt',
    'Dairy cattle supplying Grana Padano, Asiago and other cheeses',
    'Pigs for the cured-meat industry',
  ],
  irrigationContext:
    'The plain is served by extensive canal and land-reclamation networks fed by Alpine rivers (Adige, Piave, Brenta); irrigation supports maize, soybean and horticulture, and drainage of the low reclaimed lands is as important as water supply.',
  officialInstitutions: [
    {
      name: 'Area Sviluppo Economico – Agricoltura, Regione del Veneto',
      note: 'Regional agriculture administration; works with the in-house agency Veneto Agricoltura.',
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
    'Descriptive profile; subnational statistics for Veneto are published by the Regione, ISTAT and CREA and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'chickens' },
    { type: 'livestock', slug: 'cattle' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'High-value viticulture on the hills and intensive arable and livestock farming on the plain follow very different economics, so region-wide aggregates blur that distinction.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
