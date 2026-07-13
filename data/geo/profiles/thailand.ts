import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Thailand — country agriculture profile (evergreen).
 * Volatile statistics are resolved from dated World Bank snapshots at render
 * time and are never written into this descriptive prose.
 */
export const thailand: CountryAgricultureProfile = {
  countryCode: 'THA',
  slug: 'thailand',
  name: 'Thailand',
  region: 'East Asia & Pacific',
  subregion: 'Southeast Asia',
  climateZones: [
    'Tropical monsoon',
    'Tropical savanna with distinct wet and dry seasons',
  ],
  agroecologicalZones: [
    'Central Plain (Chao Phraya rice bowl)',
    'Khorat Plateau / Northeast (rainfed, drought-prone)',
    'Northern uplands',
    'Peninsular South (tree crops)',
  ],
  dominantCropSystems: [
    'Irrigated lowland rice on the Central Plain and rainfed rice (including fragrant hom mali) in the Northeast',
    'Sugarcane and cassava as major upland industrial and export crops',
    'Rubber and oil palm in the South',
    'Tropical fruit and horticulture',
  ],
  majorLivestockSystems: [
    'Large export-oriented commercial poultry (broilers)',
    'Intensive and smallholder pigs',
    'Beef and dairy cattle, with buffalo declining as draft animals',
  ],
  irrigationContext:
    'Irrigation is concentrated in the Central Plain through the Chao Phraya river system, while the populous Northeast remains largely rainfed and drought-prone.',
  agriculturalInstitutions: [
    {
      name: 'Department of Agriculture (DOA)',
      note: 'Government department for crop research, plant protection, and variety and input regulation.',
      url: 'https://www.doa.go.th',
    },
    {
      name: 'Ministry of Agriculture and Cooperatives',
      note: 'Parent ministry coordinating national agricultural policy, irrigation, and extension.',
      url: 'https://www.moac.go.th',
    },
  ],
  overview:
    'Thailand is one of the world’s foremost agricultural exporters, long a leading shipper of rice — notably fragrant jasmine rice — along with natural rubber, sugar, and cassava products. The irrigated Central Plain around the Chao Phraya River is the historic rice bowl, while the rainfed Northeast and uplands supply cassava and sugarcane, and the South produces rubber and oil palm. A large export-oriented poultry and processed-food industry complements a still-substantial smallholder farming base.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; single-year figures should not be read as a fixed baseline.',
    'National definitions of agricultural land, holdings, and commodities differ from those used by other countries, limiting direct comparison.',
    'The cereal-yield indicator largely reflects rice and understates the economic weight of non-cereal industrial crops such as cassava and sugarcane.',
    'National aggregates obscure the disparity between the irrigated Central Plain and the rainfed, drought-prone Northeast, and an aging farm workforce.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.CROP.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.IRIG.AG.ZS',
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
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'cassava' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
