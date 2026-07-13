import type { CountryAgricultureProfile } from '@/types/geo';

export const unitedKingdom: CountryAgricultureProfile = {
  countryCode: 'GBR',
  slug: 'united-kingdom',
  name: 'United Kingdom',
  region: 'Europe & Central Asia',
  subregion: 'Northern Europe',
  climateZones: ['Temperate oceanic', 'Cool maritime (north and uplands)'],
  agroecologicalZones: [
    'Eastern lowland arable',
    'Western and northern grassland',
    'Uplands and rough grazing',
  ],
  dominantCropSystems: [
    'Rainfed winter wheat, barley and oilseed rape in the drier east (East Anglia, eastern England)',
    'Sugar beet and field vegetables in eastern England',
    'Potatoes across eastern and central areas',
    'Oats and spring cereals in cooler northern areas',
    'Grassland-based systems dominating the wetter west and uplands',
  ],
  majorLivestockSystems: [
    'Extensive sheep on the uplands of Wales, Scotland and northern England',
    'Beef and dairy cattle on lowland and western grassland',
    'Intensive pig and poultry production',
    'Lowland mixed grazing',
  ],
  irrigationContext:
    'Agriculture is predominantly rainfed; supplemental irrigation is concentrated in the drier east for potatoes and high-value field vegetables.',
  agriculturalInstitutions: [
    {
      name: 'DEFRA',
      note: 'Department for Environment, Food & Rural Affairs, the UK government department for agriculture and the environment.',
      url: 'https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs',
    },
    {
      name: 'AHDB',
      note: 'Agriculture and Horticulture Development Board, a statutory levy board providing sector data and research.',
      url: 'https://ahdb.org.uk',
    },
    {
      name: 'Rothamsted Research',
      note: "One of the world's oldest agricultural research institutions.",
      url: 'https://www.rothamsted.ac.uk',
    },
  ],
  overview:
    'The United Kingdom has a temperate, largely grassland-oriented agricultural sector, with an arable heartland concentrated in the drier east of England producing wheat, barley, oilseed rape, sugar beet and potatoes, and extensive sheep and cattle grazing across the wetter west and the uplands of Wales, Scotland and northern England. Following its departure from the European Union, the UK sits outside the Common Agricultural Policy (CAP) and has been replacing area-based subsidies with domestic schemes that pay farmers for environmental land management and other public goods. Agricultural policy and support are devolved, differing across England, Scotland, Wales and Northern Ireland. The sector combines large, efficient lowland arable and intensive livestock operations with upland farms that depend on grazing livestock.',
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised; always read the year and dataset version rather than treating a figure as current.',
    'National statistical definitions (for example utilised agricultural area and livestock categories) differ from those of other countries, limiting direct cross-country comparison.',
    'Since leaving the EU the UK has diverged from the Common Agricultural Policy, and agricultural support is devolved, so policy and payments differ across England, Scotland, Wales and Northern Ireland.',
    'Post-Brexit changes to trade, subsidies and data collection create discontinuities that reduce comparability with earlier years and with EU members.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.CROP.XD',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'ahdb',
      citedFor: 'UK levy-board sector data and market analysis',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global agriculture and food production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'oats' },
    { type: 'livestock', slug: 'sheep' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
