import type { RegionProfile } from '@/types/region';

export const emiliaRomagna: RegionProfile = {
  regionId: 'emilia-romagna',
  slug: 'emilia-romagna',
  countryCode: 'ITA',
  countrySlug: 'italy',
  name: 'Emilia-Romagna',
  adminLevel: 'Region',
  officialCode: 'IT-45',
  climateContext:
    'Emilia-Romagna is dominated by the humid subtropical Po plain, with hot, muggy summers, cold, often foggy winters and rainfall in all seasons; the Apennine foothills to the south are cooler and wetter, and the Adriatic coast is milder.',
  agroecologicalZones: ['Cfa', 'Cfb'],
  agriculturalLandContext:
    'The deep, fertile alluvial soils of the Po and Reno plains make this one of Italy’s most productive and highly organised agricultural regions, tightly linked to a famous food-processing and PDO/PGI economy.',
  majorCropSystems: [
    'Soft and durum wheat and other cereals on the plain',
    'Orchard fruit — pears, peaches, nectarines, apricots and kiwifruit — with the region a leading Italian and European fruit producer',
    'Processing tomatoes and field vegetables for the canning industry',
    'Forage (lucerne and maize silage) underpinning the Parmigiano-Reggiano dairy chain',
    'Sugar beet and grain maize in rotation',
  ],
  majorLivestockSystems: [
    'Dairy cattle for Parmigiano-Reggiano, a defining PDO system of the region',
    'Pigs for Parma and other cured hams (Prosciutto di Parma, mortadella)',
    'Poultry and egg production on the plain',
  ],
  irrigationContext:
    'Irrigation from the Po, Apennine rivers and the Canale Emiliano-Romagnolo is widely used for fruit, tomatoes, vegetables and forage maize, and is increasingly important as summers grow hotter and the lower Po faces salt-water intrusion in drought years.',
  officialInstitutions: [
    {
      name: 'Assessorato Agricoltura e agroalimentare, Regione Emilia-Romagna',
      note: 'Regional department of agriculture and agri-food.',
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
    'Descriptive profile; subnational statistics for Emilia-Romagna are published by the Regione, ISTAT and CREA and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'pear' },
    { type: 'crop', slug: 'tomato' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'pigs' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Much of the region’s output is tied to specific PDO/PGI supply chains, so production is better understood through those denominations than through generic commodity totals.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
