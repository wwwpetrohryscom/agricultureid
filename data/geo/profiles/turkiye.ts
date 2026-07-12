import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Turkiye — country agriculture profile (Phase 3B).
 * Evergreen descriptive facts only; volatile statistics are resolved from dated
 * World Bank WDI snapshots at render time.
 */
export const turkiye: CountryAgricultureProfile = {
  countryCode: 'TUR',
  slug: 'turkiye',
  name: 'Turkiye',
  region: 'Europe & Central Asia',
  subregion: 'Anatolia and the Eastern Mediterranean',
  climateZones: [
    'Mediterranean',
    'Semi-arid continental',
    'Humid subtropical (Black Sea coast)',
    'Highland',
  ],
  agroecologicalZones: [
    'Mediterranean and Aegean coastal belt',
    'Anatolian semi-arid steppe (interior plateau)',
    'Black Sea humid littoral',
    'Eastern highlands',
  ],
  dominantCropSystems: [
    'Rainfed winter wheat and barley on the Anatolian plateau',
    'Mediterranean tree and vine crops (olive, grape, fig, citrus) along the coasts',
    'Irrigated cotton and horticulture in the Cukurova plain and the Southeastern Anatolia Project (GAP) area',
    'Hazelnut and tea on the humid Black Sea coast',
    'Greenhouse vegetable production, notably tomato, in the Mediterranean south',
  ],
  majorLivestockSystems: [
    'Extensive sheep and goat grazing on rangelands and highlands',
    'Dairy and beef cattle',
    'Intensive broiler and layer poultry',
  ],
  irrigationContext:
    'Irrigation is significant and expanding — most notably through the Southeastern Anatolia Project (GAP) on the Tigris and Euphrates — but a large share of cereal production remains rainfed and exposed to drought.',
  agriculturalInstitutions: [
    {
      name: 'General Directorate of Agricultural Research and Policies (TAGEM)',
      note: 'National agricultural research organisation under the Ministry of Agriculture and Forestry.',
    },
    {
      name: 'Ministry of Agriculture and Forestry (Tarim ve Orman Bakanligi)',
      note: 'National ministry responsible for agriculture, food, forestry, and water resources.',
      url: 'https://www.tarimorman.gov.tr',
    },
  ],
  overview:
    'Turkiye spans a wide climatic range, from the Mediterranean and Aegean coasts and the humid Black Sea littoral to the semi-arid interior of the Anatolian plateau, giving it one of the most diverse agricultural bases in its region. Rainfed winter wheat and barley dominate the plateau, while Mediterranean tree and vine crops — olives, grapes, figs, citrus, and hazelnuts — line the coasts, and irrigated cotton and horticulture concentrate in the Cukurova plain and the Southeastern Anatolia Project area. Extensive sheep and goat grazing on rangelands coexists with expanding intensive dairy and poultry sectors. A long-standing agricultural exporter, Turkiye is a leading source of hazelnuts, dried fruit, and fresh produce for European and Middle Eastern markets.',
  keyLimitations: [
    'Agricultural statistics are dated, versioned, and periodically revised; always read them together with their observation year and dataset version.',
    'National statistical definitions — of agricultural land, irrigated area, holdings, and livestock categories — differ between countries and over time, which limits strict cross-country comparison.',
    'Rainfed cereal output on the Anatolian plateau varies substantially between years with drought, so a single-year figure can misrepresent the underlying trend.',
    'Production is regionally concentrated (hazelnuts on the Black Sea coast, cotton and pistachio in the south-east), a pattern that national aggregates obscure.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators, compiled largely from FAO and national sources.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.IRIG.AG.ZS',
    'AG.LND.PRCP.MM',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production systems, irrigation, and food-balance context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'tomato' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
