import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * United Arab Emirates — country agriculture profile (Phase 3B).
 * Evergreen descriptive facts only; volatile statistics are resolved from dated
 * World Bank WDI snapshots at render time.
 */
export const unitedArabEmirates: CountryAgricultureProfile = {
  countryCode: 'ARE',
  slug: 'united-arab-emirates',
  name: 'United Arab Emirates',
  region: 'Middle East, North Africa, Afghanistan & Pakistan',
  subregion: 'Arabian Peninsula (Persian Gulf)',
  climateZones: ['Hot desert (hyper-arid)', 'Coastal humid arid'],
  agroecologicalZones: [
    'Coastal desert plain',
    'Interior oases (Al Ain, Liwa)',
    'Hajar Mountain foothills',
  ],
  dominantCropSystems: [
    'Date palm cultivation at oases',
    'Controlled-environment horticulture (greenhouse, hydroponic, and vertical farming)',
    'Limited irrigated field vegetables and fodder',
    'Amenity and heritage tree planting',
  ],
  majorLivestockSystems: [
    'Dromedary camel keeping for heritage, meat, and milk',
    'Goats and sheep on limited rangeland',
    'Intensive poultry and dairy units using imported feed',
  ],
  irrigationContext:
    'With no perennial surface water, irrigation relies on groundwater and desalinated water, and water scarcity is the fundamental limit on domestic production.',
  agriculturalInstitutions: [
    {
      name: 'Ministry of Climate Change and Environment (MOCCAE)',
      note: 'Federal ministry responsible for agriculture, food security, water, and the environment.',
      url: 'https://www.moccae.gov.ae',
    },
    {
      name: 'Abu Dhabi Agriculture and Food Safety Authority (ADAFSA)',
      note: 'Emirate-level authority regulating and supporting agriculture and food safety in Abu Dhabi.',
      url: 'https://www.adafsa.gov.ae',
    },
  ],
  overview:
    'The United Arab Emirates farms at the margins of what its hyper-arid climate allows: there are no perennial rivers, arable land is minimal, and cultivation depends on groundwater and desalinated water under intense heat and salinity pressure. Date palms at oases such as Al Ain and Liwa are the country’s signature crop and a cultural mainstay, while field agriculture is limited and increasingly supplemented by controlled-environment methods — greenhouses, hydroponics, and vertical farms — aimed at producing fresh vegetables locally. Camels, goats, and sheep are kept for heritage, meat, and milk, alongside intensive poultry and dairy units dependent on imported feed. As one of the most food-import-reliant countries in the world, the UAE frames domestic production largely as a food-security and agri-technology objective rather than a route to staple self-sufficiency.',
  keyLimitations: [
    'Agricultural statistics are dated, versioned, and periodically revised; always read them together with their observation year and dataset version.',
    'National statistical definitions — of agricultural land, irrigated area, holdings, and livestock categories — differ between countries and over time, which limits strict cross-country comparison.',
    'Domestic output covers only a small share of food consumed, so national production figures say little about the country’s overall food supply, which is dominated by imports.',
    'A large and growing part of production comes from controlled-environment and desalination-dependent systems whose water use and cost are not captured by land-area indicators.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators, compiled largely from FAO and national sources.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'NV.AGR.TOTL.ZS',
    'AG.PRD.FOOD.XD',
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
  connections: [{ type: 'crop', slug: 'date-palm' }],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
