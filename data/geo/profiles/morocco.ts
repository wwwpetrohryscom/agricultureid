import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Morocco — country agriculture profile (Phase 3B).
 * Evergreen descriptive facts only; volatile statistics are resolved from dated
 * World Bank WDI snapshots at render time.
 */
export const morocco: CountryAgricultureProfile = {
  countryCode: 'MAR',
  slug: 'morocco',
  name: 'Morocco',
  region: 'Middle East, North Africa, Afghanistan & Pakistan',
  subregion: 'Maghreb (North-West Africa)',
  climateZones: [
    'Mediterranean',
    'Semi-arid',
    'Arid / Saharan',
    'Highland (Atlas Mountains)',
  ],
  agroecologicalZones: [
    'Mediterranean and Atlantic coastal plains',
    'Semi-arid rainfed interior plains (bour)',
    'Atlas Mountains',
    'Pre-Saharan oases',
  ],
  dominantCropSystems: [
    'Rainfed cereals — soft and durum wheat and barley — on the plains',
    'Irrigated export horticulture (citrus, tomato, and early vegetables) in the Souss, Gharb, and Doukkala perimeters',
    'Olive groves, both rainfed and irrigated',
    'Date palms and argan in the arid south',
    'Mountain and steppe fodder supporting grazing herds',
  ],
  majorLivestockSystems: [
    'Extensive sheep and goat pastoralism on rangelands and mountains',
    'Smallholder and commercial dairy cattle',
    'Poultry',
  ],
  irrigationContext:
    'Public irrigation perimeters fed by dams underpin high-value horticulture, yet the bulk of the cultivated area is rainfed and highly vulnerable to recurrent drought.',
  agriculturalInstitutions: [
    {
      name: 'National Institute of Agricultural Research (INRA Morocco)',
      note: 'National agricultural research institute for crop, livestock, and resource-management science.',
      url: 'https://www.inra.org.ma',
    },
    {
      name: 'Ministry of Agriculture, Maritime Fisheries, Rural Development and Water and Forests',
      note: 'Leads national agricultural strategy, articulated first through the Plan Maroc Vert (Green Morocco Plan) and continued under Generation Green.',
      url: 'https://www.agriculture.gov.ma',
    },
  ],
  overview:
    'Morocco’s agriculture is shaped by a steep gradient from the Mediterranean and Atlantic coasts through semi-arid plains to the arid pre-Saharan south, with the Atlas Mountains dividing wetter zones from drier ones. Rainfed cereals — soft and durum wheat and barley — occupy the largest area but swing sharply with year-to-year rainfall, making drought the defining risk to the sector. Irrigated perimeters in the Souss, Gharb, and Doukkala support the high-value citrus, early vegetables, and olives that anchor export horticulture, while sheep and goat herding remains central to rural livelihoods across the mountains and steppe. National strategy, set out first in the Plan Maroc Vert and continued under Generation Green, has prioritised irrigation efficiency, value addition, and resilience to water stress.',
  keyLimitations: [
    'Agricultural statistics are dated, versioned, and periodically revised; always read them together with their observation year and dataset version.',
    'National statistical definitions — of agricultural land, irrigated area, holdings, and livestock categories — differ between countries and over time, which limits strict cross-country comparison.',
    'Cereal harvests are highly sensitive to seasonal rainfall, and a single dry or wet year can swing national output dramatically.',
    'Area and production estimates for rainfed smallholdings carry larger uncertainty than those for the managed irrigated perimeters.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators, compiled largely from FAO and national sources.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.IRIG.AG.ZS',
    'AG.LND.PRCP.MM',
    'SP.RUR.TOTL.ZS',
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
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'orange' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'barley' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
