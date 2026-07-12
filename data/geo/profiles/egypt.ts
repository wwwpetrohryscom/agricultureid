import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Egypt, Arab Rep. — country agriculture profile (Phase 3B).
 * Evergreen descriptive facts only; volatile statistics are resolved from dated
 * World Bank WDI snapshots at render time.
 */
export const egypt: CountryAgricultureProfile = {
  countryCode: 'EGY',
  slug: 'egypt',
  name: 'Egypt, Arab Rep.',
  region: 'Middle East, North Africa, Afghanistan & Pakistan',
  subregion: 'Nile Valley and Delta',
  climateZones: ['Hot desert (arid)', 'Mediterranean (narrow north coast)'],
  agroecologicalZones: [
    'Nile Delta',
    'Nile Valley (Middle and Upper Egypt)',
    'Reclaimed desert fringe',
    'North-coast rainfed strip',
  ],
  dominantCropSystems: [
    'Fully irrigated Nile Valley and Delta cropping with multiple crops per year',
    'Winter wheat, berseem clover, and sugar beet',
    'Summer rice, maize, and long-staple cotton',
    'Sugarcane in Upper Egypt',
    'Irrigated citrus and vegetable horticulture for export',
  ],
  majorLivestockSystems: [
    'Smallholder cattle and water buffalo for milk and draught, integrated with fodder crops',
    'Sheep and goats',
    'Large-scale poultry',
  ],
  irrigationContext:
    'Essentially all cropland is irrigated from the Nile — historically by basin flooding and now perennially since the Aswan High Dam — so agriculture is almost wholly dependent on a single river system.',
  agriculturalInstitutions: [
    {
      name: 'Agricultural Research Center (ARC)',
      note: 'National agricultural research body under the Ministry of Agriculture and Land Reclamation.',
      url: 'https://www.arc.sci.eg',
    },
    {
      name: 'Ministry of Agriculture and Land Reclamation',
      note: 'National ministry responsible for agriculture, irrigation-linked land reclamation, and food policy.',
    },
  ],
  overview:
    'Egypt is an almost entirely arid country whose agriculture is confined to the irrigated Nile Valley and Delta and to reclaimed desert on their fringes, where the river’s water sustains some of the most intensive cropping systems in the world. Warm winters and abundant irrigation allow year-round production, rotating winter wheat, berseem clover, and sugar beet with summer rice, maize, and cotton, and — in Upper Egypt — sugarcane. Smallholdings integrate cattle and water buffalo for milk and draught with fodder crops, alongside a large poultry sector. Because rainfall is negligible almost everywhere, essentially all cropland depends on Nile irrigation, and the country is at once a major producer of rice, long-staple cotton, and horticulture and one of the world’s largest importers of wheat.',
  keyLimitations: [
    'Agricultural statistics are dated, versioned, and periodically revised; always read them together with their observation year and dataset version.',
    'National statistical definitions — of agricultural land, irrigated area, holdings, and livestock categories — differ between countries and over time, which limits strict cross-country comparison.',
    'Because nearly all cropland is irrigated from the Nile, water availability rather than land is the binding constraint, and cropped area can exceed physical land area where multiple crops are grown in a year.',
    'Old-land Valley and Delta holdings and newer reclaimed-desert farms differ markedly in productivity, a contrast that national averages blend together.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators, compiled largely from FAO and national sources.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.HA.PC',
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
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'crop', slug: 'maize' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
