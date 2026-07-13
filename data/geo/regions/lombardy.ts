import type { RegionProfile } from '@/types/region';

export const lombardy: RegionProfile = {
  regionId: 'lombardy',
  slug: 'lombardy',
  countryCode: 'ITA',
  countrySlug: 'italy',
  name: 'Lombardy',
  alternativeNames: ['Lombardia'],
  adminLevel: 'Region',
  officialCode: 'IT-25',
  climateContext:
    'The agricultural heart of Lombardy is the humid subtropical Po plain, with hot, humid summers, cold, foggy winters and year-round rainfall, fed by abundant water from Alpine rivers and lakes; the northern Alps and Prealps are far cooler and wetter.',
  agroecologicalZones: ['Cfa', 'Cfb'],
  agriculturalLandContext:
    'The intensively cultivated lower plain (bassa pianura), watered by an old and dense network of springs (fontanili) and canals, is among the most productive farmland in Europe and supports Italy’s largest concentration of dairy and irrigated arable farming.',
  majorCropSystems: [
    'Grain and silage maize, the leading crop, feeding the dairy and pig sectors',
    'Rice on the flooded plains of the Lomellina and Pavia — part of Europe’s main rice belt',
    'Forage crops (Italian ryegrass, lucerne) for the dairy herd',
    'Soybean and other cereals in rotation',
    'Wine grapes in Franciacorta, Oltrepò Pavese and Valtellina',
  ],
  majorLivestockSystems: [
    'Dairy cattle for Grana Padano and other cheeses — Italy’s dominant milk-producing region',
    'Intensive pig production supplying cured-meat chains',
    'Poultry and egg production on the plain',
  ],
  irrigationContext:
    'Gravity-fed irrigation from Alpine rivers, lakes and the fontanili springs, distributed through centuries-old canal systems, sustains the rice, maize and forage economy and makes surface-water rights a central feature of farming here.',
  officialInstitutions: [
    {
      name: 'Direzione Generale Agricoltura, Regione Lombardia',
      note: 'Regional directorate-general for agriculture.',
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
    'Descriptive profile; subnational statistics for Lombardy are published by the Regione, ISTAT and CREA and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'soybean' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Farming is overwhelmingly concentrated in the irrigated lower plain; the Alpine north contributes little cropland, so region-wide land figures understate cropping intensity where it actually occurs.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
