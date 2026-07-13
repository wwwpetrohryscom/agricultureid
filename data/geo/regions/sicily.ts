import type { RegionProfile } from '@/types/region';

export const sicily: RegionProfile = {
  regionId: 'sicily',
  slug: 'sicily',
  countryCode: 'ITA',
  countrySlug: 'italy',
  name: 'Sicily',
  alternativeNames: ['Sicilia'],
  adminLevel: 'Region',
  officialCode: 'IT-82',
  climateContext:
    'Sicily has a hot-summer Mediterranean climate on its coasts and a semi-arid, drought-prone interior, with mild wet winters and long hot dry summers; the volcanic soils and higher rainfall around Mount Etna create a distinctive local growing environment.',
  agroecologicalZones: ['Csa', 'BSk'],
  agriculturalLandContext:
    'Farming ranges from irrigated coastal citrus groves and greenhouse belts to the vast rainfed cereal and pasture landscapes of the interior hills, with the fertile volcanic slopes of Etna supporting specialised orchards and vines.',
  majorCropSystems: [
    'Citrus — oranges (including the PGI blood oranges of the Etna area), lemons and mandarins — on the irrigated coastal plains',
    'Olive groves for oil and table olives',
    'Durum (hard) wheat on the rainfed interior hills, a historic granary of the Mediterranean',
    'Wine grapes, including Nero d’Avola and the volcanic Etna DOC vineyards',
    'Greenhouse and open-field vegetables (Pachino and cherry tomatoes) in the southeast around Ragusa',
  ],
  majorLivestockSystems: [
    'Sheep and goats for cheeses such as Pecorino Siciliano and Ragusano, on the interior pastures',
    'Cattle, including the Modicana breed, on the Hyblaean uplands',
    'Poultry and mixed livestock on smaller holdings',
  ],
  irrigationContext:
    'Irrigation, from reservoirs and groundwater, is essential for citrus, greenhouse vegetables and early produce on the coast, but water scarcity, ageing infrastructure and drought make supply a persistent limitation, especially in the interior.',
  officialInstitutions: [
    {
      name: 'Assessorato regionale dell’Agricoltura, dello Sviluppo Rurale e della Pesca Mediterranea (Regione Siciliana)',
      note: 'Regional department of agriculture, rural development and Mediterranean fisheries.',
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
    'Descriptive profile; subnational statistics for Sicily are published by the Regione Siciliana, ISTAT and CREA and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'tomato' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'Irrigated coastal horticulture and rainfed interior cereal-and-livestock systems are very different; island-wide aggregates should not be read as representative of either.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
