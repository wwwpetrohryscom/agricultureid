import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Indonesia — country agriculture profile (evergreen).
 * Volatile statistics are resolved from dated World Bank snapshots at render
 * time and are never written into this descriptive prose.
 */
export const indonesia: CountryAgricultureProfile = {
  countryCode: 'IDN',
  slug: 'indonesia',
  name: 'Indonesia',
  region: 'East Asia & Pacific',
  subregion: 'Southeast Asia',
  climateZones: ['Tropical rainforest (equatorial, humid)', 'Tropical monsoon'],
  agroecologicalZones: [
    'Intensive lowland wet-rice zones, especially volcanic-soil Java',
    'Tree-crop plantation belts of Sumatra and Kalimantan',
    'Upland smallholder mixed-farming areas',
  ],
  dominantCropSystems: [
    'Irrigated and rainfed lowland rice (sawah), concentrated on Java',
    'Smallholder and estate oil palm across Sumatra and Kalimantan',
    'Smallholder tree crops — coffee, cocoa, rubber, and coconut',
    'Upland maize and cassava',
  ],
  majorLivestockSystems: [
    'Smallholder mixed cattle and small ruminants (goats and sheep)',
    'Rapidly expanding commercial poultry (broilers and layers)',
    'Backyard pigs in non-Muslim-majority regions',
  ],
  irrigationContext:
    'Extensive gravity and technical irrigation supports intensive lowland rice, especially on Java, though many systems face aging infrastructure and competing water demand.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Agriculture (Kementerian Pertanian)',
      note: 'Central government ministry responsible for agricultural policy, extension, and food-crop programs.',
      url: 'https://www.pertanian.go.id',
    },
    {
      name: 'National Research and Innovation Agency (BRIN)',
      note: 'National science agency that absorbed the former Indonesian Agency for Agricultural Research and Development (IAARD) and now hosts its agricultural research.',
      url: 'https://www.brin.go.id',
    },
  ],
  overview:
    'Indonesia is a vast tropical archipelago where smallholder farming and large plantation estates coexist across thousands of islands. It is one of the world’s largest rice producers — rice being the dominant staple — and a leading global producer and exporter of palm oil, alongside significant coffee, cocoa, rubber, and coconut. Systems range from intensive irrigated rice on Java’s fertile volcanic soils to extensive tree-crop cultivation on the outer islands.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; single-year figures should not be read as a fixed baseline.',
    'National definitions of agricultural land, holdings, and commodities differ from those used by other countries, limiting direct comparison.',
    'National aggregates mask large differences between smallholder and estate production and between islands.',
    'Oil-palm expansion is intertwined with land-use and deforestation debates that area statistics alone do not convey.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.CROP.XD',
    'AG.PRD.FOOD.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land-use, and commodity context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'oil-palm' },
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'cocoa' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
