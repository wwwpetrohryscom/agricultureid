import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Australia — country agriculture profile (evergreen).
 * Volatile statistics are resolved from dated World Bank snapshots at render
 * time and are never written into this descriptive prose.
 */
export const australia: CountryAgricultureProfile = {
  countryCode: 'AUS',
  slug: 'australia',
  name: 'Australia',
  region: 'East Asia & Pacific',
  subregion: 'Oceania',
  climateZones: [
    'Arid and semi-arid interior',
    'Mediterranean (southern and southwestern margins)',
    'Temperate (southeast and Tasmania)',
    'Subtropical to tropical (north and northeast)',
  ],
  agroecologicalZones: [
    'Southern wheat-sheep belt',
    'Northern and interior grazing rangelands',
    'High-rainfall temperate coastal zones',
    'Murray-Darling Basin irrigation districts',
  ],
  dominantCropSystems: [
    'Rainfed winter cereals (wheat and barley) and canola across the southern grain belt',
    'Irrigated cotton and rice in the Murray-Darling Basin',
    'Sugarcane along the tropical Queensland coast',
    'Wine grapes, horticulture, and pulses',
  ],
  majorLivestockSystems: [
    'Extensive rangeland beef cattle across the north and interior',
    'Merino and prime-lamb sheep for wool and meat in the temperate south',
    'Pasture-based dairy in high-rainfall southern zones',
  ],
  irrigationContext:
    'Irrigation is concentrated in the Murray-Darling Basin and depends on highly variable surface-water allocations managed through water-trading markets.',
  agriculturalInstitutions: [
    {
      name: 'Australian Bureau of Agricultural and Resource Economics and Sciences (ABARES)',
      note: 'Government research and economic-analysis bureau within the federal agriculture department.',
      url: 'https://www.agriculture.gov.au/abares',
    },
    {
      name: 'Commonwealth Scientific and Industrial Research Organisation (CSIRO)',
      note: 'National science agency with major agriculture and food research programs.',
      url: 'https://www.csiro.au',
    },
    {
      name: 'Grains Research and Development Corporation (GRDC)',
      note: 'Statutory corporation investing in grains research, development, and extension.',
      url: 'https://grdc.com.au',
    },
  ],
  overview:
    'Australia is a highly commercialized, export-oriented agricultural producer operating across one of the driest inhabited continents. Broadacre grain and livestock enterprises dominate by area, and the country is a leading exporter of wheat, barley, wool, beef, and cotton. Farming is characterized by large holdings, low input intensity per hectare, high mechanization, and pronounced exposure to drought and climate variability.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; single-year figures should not be read as a fixed baseline.',
    'National definitions of agricultural land, holdings, and commodities differ from those used by other countries, limiting direct comparison.',
    'Most agricultural land is low-productivity grazing rangeland, so land-area shares overstate the intensity of cropping.',
    'Severe drought cycles cause large year-to-year swings in production, making any single season potentially unrepresentative.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.AGRI.K2',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'AG.LND.PRCP.MM',
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
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'cotton' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
