import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Saudi Arabia — country agriculture profile (Phase 3B).
 * Evergreen descriptive facts only; volatile statistics are resolved from dated
 * World Bank WDI snapshots at render time.
 */
export const saudiArabia: CountryAgricultureProfile = {
  countryCode: 'SAU',
  slug: 'saudi-arabia',
  name: 'Saudi Arabia',
  region: 'Middle East, North Africa, Afghanistan & Pakistan',
  subregion: 'Arabian Peninsula',
  climateZones: [
    'Hot desert (hyper-arid)',
    'Highland semi-arid (south-western Asir)',
  ],
  agroecologicalZones: [
    'Central desert plains (Najd)',
    'Eastern oases (Al-Ahsa)',
    'South-western highlands (Asir)',
    'Rangeland steppe',
  ],
  dominantCropSystems: [
    'Date palm cultivation in oases',
    'Centre-pivot irrigated forage (alfalfa) and vegetables drawing on groundwater',
    'Greenhouse vegetable production',
    'Irrigated wheat, reduced from earlier self-sufficiency programmes to conserve water',
  ],
  majorLivestockSystems: [
    'Camel, sheep, and goat pastoralism on the rangelands',
    'Large intensive dairy operations reliant on imported and irrigated feed',
    'Commercial broiler and layer poultry',
  ],
  irrigationContext:
    'Cultivation depends on irrigation from groundwater — much of it non-renewable fossil aquifer water — supplemented by desalination, making water availability the overriding constraint on farming.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Environment, Water and Agriculture (MEWA)',
      note: 'National ministry responsible for agriculture, water resources, and the environment.',
      url: 'https://www.mewa.gov.sa',
    },
    {
      name: 'Saudi Grains Organization (SAGO)',
      note: 'State body managing strategic grain reserves, flour milling, and cereal imports.',
      url: 'https://sago.gov.sa',
    },
  ],
  overview:
    'Agriculture in Saudi Arabia is practised in one of the world’s most water-limited environments — a hyper-arid desert without perennial rivers, where cultivation depends on groundwater, much of it non-renewable, and increasingly on desalination. Date palms grown in oases are the historic core of Saudi farming, complemented by centre-pivot forage and vegetable production and by some of the region’s largest intensive dairy and poultry operations, which rely heavily on imported feed. Camel, sheep, and goat pastoralism continues across the rangelands. Having once pursued irrigated wheat self-sufficiency, the Kingdom has since scaled back water-intensive cereal cultivation to conserve its aquifers and now meets most of its staple-food needs through imports.',
  keyLimitations: [
    'Agricultural statistics are dated, versioned, and periodically revised; always read them together with their observation year and dataset version.',
    'National statistical definitions — of agricultural land, irrigated area, holdings, and livestock categories — differ between countries and over time, which limits strict cross-country comparison.',
    'Much irrigation draws on non-renewable groundwater, so historical production levels are not necessarily sustainable or repeatable, and policy shifts such as the phase-down of subsidised wheat mean older figures may not reflect current cropping.',
    'Heavy reliance on food imports means domestic production statistics substantially understate the country’s total food supply.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators, compiled largely from FAO and national sources.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'NV.AGR.TOTL.ZS',
    'AG.PRD.LVSK.XD',
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
    { type: 'crop', slug: 'date-palm' },
    { type: 'crop', slug: 'wheat' },
    { type: 'livestock', slug: 'chickens' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
