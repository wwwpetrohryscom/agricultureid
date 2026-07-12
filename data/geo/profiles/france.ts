import type { CountryAgricultureProfile } from '@/types/geo';

export const france: CountryAgricultureProfile = {
  countryCode: 'FRA',
  slug: 'france',
  name: 'France',
  region: 'Europe & Central Asia',
  subregion: 'Western Europe',
  climateZones: [
    'Temperate oceanic',
    'Semi-continental',
    'Mediterranean',
    'Mountain (Alpine and Pyrenean)',
  ],
  agroecologicalZones: [
    'Atlantic lowland cropland',
    'Mediterranean permanent crops',
    'Mountain and upland pasture',
  ],
  dominantCropSystems: [
    'Rainfed soft wheat, barley and rapeseed on the northern plains (Beauce, Picardy)',
    'Grain maize in the southwest, partly irrigated',
    'Sugar beet in the northern basins',
    'Viticulture across classified wine regions (Bordeaux, Burgundy, Champagne, Rhône)',
    'Mediterranean fruit, vegetables and permanent crops in the south',
  ],
  majorLivestockSystems: [
    'Extensive beef cattle on grassland (Charolais, Limousin, Massif Central)',
    'Dairy cattle in Normandy, Brittany and the east',
    'Intensive pig and poultry production in Brittany',
    'Sheep on uplands and Mediterranean rangeland',
  ],
  irrigationContext:
    'Agriculture is predominantly rainfed, with irrigation concentrated in the southwest and Mediterranean south for grain maize, fruit and vegetables.',
  agriculturalInstitutions: [
    {
      name: 'INRAE',
      note: 'National Research Institute for Agriculture, Food and the Environment.',
      url: 'https://www.inrae.fr',
    },
    {
      name: "Ministère de l'Agriculture et de la Souveraineté alimentaire",
      note: 'National ministry of agriculture and food sovereignty.',
      url: 'https://agriculture.gouv.fr',
    },
    {
      name: 'FranceAgriMer',
      note: 'National establishment for agricultural and fisheries products, providing market data and administering CAP measures.',
      url: 'https://www.franceagrimer.fr',
    },
  ],
  overview:
    "France is the European Union's largest agricultural producer by value and a cornerstone of European food supply, with a highly diversified sector spanning temperate cereals, oilseeds and sugar beet in the north, grain maize in the southwest, and internationally renowned viticulture and cheese production. Its farming operates within the EU Common Agricultural Policy (CAP), which shapes income support, environmental conditionality and market organisation. The country combines large, mechanised arable farms on the northern plains with quality-differentiated systems governed by protected designations of origin (AOP/AOC) for wines, cheeses and other foods. France is consistently among the world's leading exporters of wheat, wine and dairy products.",
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised; always read the year and dataset version rather than treating a figure as current.',
    'National and EU statistical definitions (for example utilised agricultural area and livestock categories) differ from those of other countries, limiting direct cross-country comparison.',
    'Overseas departments such as Réunion, Guadeloupe, Martinique and Guyane have distinct tropical agriculture that country-level aggregates obscure.',
    'Wine and other quality-scheme output is economically significant but only partly reflected in tonnage-based production indicators.',
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
      sourceId: 'ec-agri',
      citedFor: 'EU Common Agricultural Policy framework and farm statistics',
    },
    {
      sourceId: 'fao',
      citedFor: 'Global agriculture and food production context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'sugar-beet' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
