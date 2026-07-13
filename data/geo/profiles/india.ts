import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * India — country agriculture profile (evergreen).
 * Volatile statistics are resolved from dated World Bank snapshots at render
 * time and are never written into this descriptive prose.
 */
export const india: CountryAgricultureProfile = {
  countryCode: 'IND',
  slug: 'india',
  name: 'India',
  region: 'South Asia',
  subregion: 'South Asia',
  climateZones: [
    'Tropical monsoon (dominant)',
    'Arid and semi-arid (northwest and Deccan)',
    'Humid subtropical (Indo-Gangetic Plain)',
    'Tropical wet (northeast and Western Ghats coast)',
    'Alpine and highland (Himalaya)',
  ],
  agroecologicalZones: [
    'Indo-Gangetic Plain (rice-wheat systems)',
    'Semi-arid Deccan Plateau (rainfed cereals, cotton, and pulses)',
    'Eastern rice belt',
    'Irrigated northwest (Punjab-Haryana)',
  ],
  dominantCropSystems: [
    'Irrigated rice-wheat rotation across the Indo-Gangetic Plain',
    'Rainfed and irrigated cotton, pulses (chickpea), oilseeds, and millets on the Deccan and central plateau',
    'Sugarcane in irrigated northern and western tracts',
    'Diverse horticulture across kharif (monsoon) and rabi (winter) seasons',
  ],
  majorLivestockSystems: [
    'The world’s largest smallholder dairy sector, built on cattle and water buffalo (the White Revolution / Operation Flood)',
    'Large goat and sheep flocks for meat and fiber',
    'Rapidly expanding commercial poultry, with draft animals still significant',
  ],
  irrigationContext:
    'India operates one of the world’s largest irrigated areas, drawing heavily on groundwater tube wells and canal networks, with acute concerns over aquifer depletion in the northwest.',
  agriculturalInstitutions: [
    {
      name: 'Indian Council of Agricultural Research (ICAR)',
      note: 'Apex national body coordinating agricultural research, education, and the crop-institute and state-university network.',
      url: 'https://icar.org.in',
    },
    {
      name: 'Ministry of Agriculture and Farmers’ Welfare',
      note: 'Central government ministry responsible for agricultural policy, extension, and farmer support programs.',
      url: 'https://agriwelfare.gov.in',
    },
  ],
  overview:
    'India is one of the world’s largest agricultural producers and a country where farming remains central to the livelihoods of hundreds of millions of smallholders. It ranks among the top global producers of rice, wheat, cotton, sugarcane, pulses, and milk, and it supports the world’s largest herd of dairy cattle and water buffalo. Production is shaped overwhelmingly by the southwest monsoon, with the Green Revolution since the 1960s making the irrigated northwest and Indo-Gangetic Plain the grain heartland.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; single-year figures should not be read as a fixed baseline.',
    'National definitions of agricultural land, holdings, crop years, and commodities differ from those used by other countries, limiting direct comparison.',
    'Output is highly monsoon-dependent, producing large year-to-year swings that national aggregates smooth over.',
    'National figures mask extreme diversity across states and agroecological zones, and groundwater-based irrigation raises long-term sustainability concerns.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.FOOD.XD',
    'AG.PRD.LVSK.XD',
    'SL.AGR.EMPL.ZS',
    'AG.LND.IRIG.AG.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land-use, and commodity context',
    },
    {
      sourceId: 'icar',
      citedFor: 'National crop systems and research context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'chickpea' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'water-buffalo' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
