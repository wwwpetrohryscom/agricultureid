import type { CountryAgricultureProfile } from '@/types/geo';

export const germany: CountryAgricultureProfile = {
  countryCode: 'DEU',
  slug: 'germany',
  name: 'Germany',
  region: 'Europe & Central Asia',
  subregion: 'Central Europe',
  climateZones: [
    'Temperate oceanic',
    'Temperate continental',
    'Mountain (Alpine foreland, south)',
  ],
  agroecologicalZones: [
    'Northern lowland plain',
    'Central loess uplands',
    'Southern hills and Alpine foreland',
  ],
  dominantCropSystems: [
    'Rainfed winter wheat, barley and rye across the northern and central plains',
    'Winter rapeseed as the leading oilseed',
    'Sugar beet on fertile loess soils (the Börde regions)',
    'Potatoes for food, starch and seed',
    'Silage and grain maize, partly grown for biogas',
    'Viticulture along the Rhine, Mosel and southern river valleys',
  ],
  majorLivestockSystems: [
    'Intensive pig production concentrated in the northwest (Lower Saxony, North Rhine-Westphalia)',
    'Dairy cattle in Bavaria, the Alpine foreland and the north',
    'Poultry for meat and eggs',
    'Beef cattle largely integrated with dairy herds',
  ],
  irrigationContext:
    'Agriculture is overwhelmingly rainfed, with supplemental irrigation used mainly on light sandy soils and for potatoes and horticulture.',
  agriculturalInstitutions: [
    {
      name: 'BMEL',
      note: 'Federal Ministry of Food and Agriculture (Bundesministerium für Ernährung und Landwirtschaft).',
      url: 'https://www.bmel.de',
    },
    {
      name: 'Thünen Institute',
      note: 'Federal Research Institute for Rural Areas, Forestry and Fisheries.',
      url: 'https://www.thuenen.de',
    },
    {
      name: 'Julius Kühn-Institut (JKI)',
      note: 'Federal Research Centre for Cultivated Plants.',
      url: 'https://www.julius-kuehn.de',
    },
  ],
  overview:
    "Germany has one of the European Union's largest and most intensive agricultural sectors, combining highly productive arable farming on fertile loess soils with a major livestock economy centred on pigs and dairy. Cropping is dominated by winter cereals, rapeseed, sugar beet and potatoes, while maize is grown extensively for silage and biogas as part of the country's renewable-energy policy. Farming operates within the EU Common Agricultural Policy (CAP), and Germany has been a leading force in linking farm support to environmental and climate objectives. Structural contrasts persist between generally larger farms in the former east and smaller, often family-run holdings in the west and south.",
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised; always read the year and dataset version rather than treating a figure as current.',
    'National and EU statistical definitions (for example utilised agricultural area and livestock categories) differ from those of other countries, limiting direct cross-country comparison.',
    'A substantial share of maize is grown for biogas and silage rather than food, so grain-production indicators understate total cropping intensity.',
    'East-west differences in farm size and organisation are averaged out in national aggregates.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CROP.XD',
    'AG.PRD.LVSK.XD',
    'AG.CON.FERT.ZS',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'ec-agri',
      citedFor: 'EU Common Agricultural Policy framework and farm statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global agriculture and food production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'livestock', slug: 'pigs' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
