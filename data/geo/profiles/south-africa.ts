import type { CountryAgricultureProfile } from '@/types/geo';

export const southAfrica: CountryAgricultureProfile = {
  countryCode: 'ZAF',
  slug: 'south-africa',
  name: 'South Africa',
  region: 'Sub-Saharan Africa',
  subregion: 'Southern Africa',
  climateZones: [
    'Semi-arid interior',
    'Mediterranean (Western Cape, winter rainfall)',
    'Subtropical east coast',
    'Temperate Highveld grassland',
    'Arid Karoo and Kalahari',
  ],
  agroecologicalZones: [
    'Highveld summer-grain (maize) belt',
    'Cape winelands and deciduous-fruit zone',
    'Subtropical coastal Lowveld and KwaZulu-Natal',
    'Karoo and Kalahari extensive rangeland',
  ],
  dominantCropSystems: [
    'Rainfed summer maize on the Highveld grain belt (Free State, North West, Mpumalanga)',
    'Winter wheat under Mediterranean rainfall in the Western Cape, plus irrigated wheat',
    'Wine and table grapes, and deciduous fruit, in the Western Cape winelands',
    'Irrigated sugarcane in KwaZulu-Natal and Mpumalanga',
    'Citrus and subtropical fruit grown largely for export',
    'Smallholder and communal cropping in the former homeland areas',
  ],
  majorLivestockSystems: [
    'Extensive beef cattle on Highveld and bushveld rangeland',
    'Extensive wool and mutton sheep in the Karoo and Eastern Cape',
    'Intensive feedlot beef, poultry and piggeries near urban markets',
    'Communal smallholder cattle and goats in former homeland areas',
  ],
  irrigationContext:
    'A water-scarce country: irrigation is concentrated along the Orange and Vaal rivers and in the Western Cape, supporting high-value horticulture, sugarcane and wheat, while most field-crop area remains rainfed.',
  agriculturalInstitutions: [
    {
      name: 'Agricultural Research Council (ARC)',
      note: 'National statutory agricultural research organisation.',
      url: 'https://www.arc.agric.za',
    },
    {
      name: 'Department of Agriculture, Land Reform and Rural Development (DALRRD)',
      note: 'National department for agricultural policy, land reform and statistics.',
      url: 'https://www.dalrrd.gov.za',
    },
    {
      name: 'Grain SA',
      note: 'Producer organisation representing commercial and developing grain farmers.',
      url: 'https://www.grainsa.co.za',
    },
  ],
  overview:
    'South Africa has a distinctive dual agricultural economy, pairing a well-capitalised, export-oriented commercial sector with a large number of smallholder and subsistence farmers, many of them in the former homeland areas. Production is shaped by water scarcity and a summer-rainfall interior, with rainfed maize dominating the Highveld grain belt and Mediterranean-climate viticulture, deciduous fruit and wheat concentrated in the Western Cape. The country is a significant exporter of wine, citrus and table grapes and is broadly self-sufficient in maize in normal years, though periodic droughts drive sharp swings in output. Questions of land reform and equitable access to farmland remain central to national agricultural policy.',
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised as new survey and census results arrive.',
    'National definitions (for example of a "farm", or the commercial versus smallholder split) differ from those used elsewhere, limiting cross-country comparison.',
    'National aggregates mask a sharp dualism between a small, highly productive commercial sector and many low-input smallholders, so averages can mislead.',
    'Field-crop output is strongly drought-sensitive and can vary markedly from year to year.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'SP.RUR.TOTL.ZS',
    'AG.CON.FERT.ZS',
    'AG.LND.IRIG.AG.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land use and food-balance context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'sheep' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
