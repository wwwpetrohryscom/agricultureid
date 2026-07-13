import type { RegionProfile } from '@/types/region';

export const andalusia: RegionProfile = {
  regionId: 'andalusia',
  slug: 'andalusia',
  countryCode: 'ESP',
  countrySlug: 'spain',
  name: 'Andalusia',
  alternativeNames: ['Andalucía'],
  adminLevel: 'Autonomous community',
  officialCode: 'ES-AN',
  climateContext:
    'Andalusia has a hot-summer Mediterranean climate over most of the Guadalquivir basin, grading to hot semi-arid conditions on the southeast coast around Almería — one of the driest parts of Europe — while the Sierras receive far more rainfall and snow.',
  agroecologicalZones: ['Csa', 'BSh', 'BSk'],
  agriculturalLandContext:
    'The fertile alluvial Guadalquivir valley supports intensive irrigated and arable farming, the rolling campiña carries vast olive groves and dryland cereals, and the arid Almería coast hosts Europe’s densest concentration of plastic greenhouses.',
  majorCropSystems: [
    'Olive groves for olive oil and table olives — the world’s largest olive-producing region, centred on Jaén and Córdoba',
    'Intensive greenhouse horticulture (tomatoes, peppers, cucumbers, courgettes) under plastic on the Almería coast',
    'Citrus, especially oranges, in the irrigated Guadalquivir valley',
    'Dryland and irrigated cereals (wheat) and sunflower on the campiña',
    'Cotton and rice in the lower Guadalquivir marshes',
  ],
  majorLivestockSystems: [
    'Iberian pigs on the dehesa (oak savanna) of the Sierra Morena',
    'Extensive sheep and goats, including dairy goats, on the sierras and dehesa',
    'Fighting and beef cattle on rangeland and marsh pastures',
  ],
  irrigationContext:
    'Irrigation is fundamental: the Guadalquivir and its reservoirs supply large irrigated districts for citrus, cotton, rice and horticulture, while the Almería greenhouses depend on tightly managed groundwater, making water scarcity a defining constraint.',
  officialInstitutions: [
    {
      name: 'Consejería de Agricultura, Pesca, Agua y Desarrollo Rural (Junta de Andalucía)',
      note: 'Regional ministry of agriculture, fisheries, water and rural development.',
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
    'Descriptive profile; subnational statistics for Andalusia are published by the Junta de Andalucía, MAPA and INE and are not reproduced numerically here.',
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
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sunflower' },
  ],
  limitations: [
    'Regional boundaries and the classification of agricultural land follow the official ISO 3166-2 subdivision and national statistical definitions.',
    'Any statistics are dated and source-specific; consult the year and dataset version at the cited official body rather than treating figures as current.',
    'The community spans very different systems — irrigated intensive horticulture, rainfed olive and cereal farming, and extensive dehesa livestock — so region-wide aggregates obscure sharp internal contrasts.',
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
};
