import type { CountryAgricultureProfile } from '@/types/geo';

export const spain: CountryAgricultureProfile = {
  countryCode: 'ESP',
  slug: 'spain',
  name: 'Spain',
  region: 'Europe & Central Asia',
  subregion: 'Southern Europe',
  climateZones: [
    'Mediterranean',
    'Semi-arid continental (interior Meseta)',
    'Temperate oceanic (north)',
    'Arid (southeast)',
  ],
  agroecologicalZones: [
    'Mediterranean permanent crops',
    'Dryland cereal Meseta',
    'Irrigated coastal and river-valley horticulture',
  ],
  dominantCropSystems: [
    'Olive groves across Andalusia and the interior',
    'Rainfed winter cereals (wheat, barley) on the central Meseta',
    'Viticulture across designated regions (La Rioja, La Mancha, Ribera del Duero)',
    'Irrigated citrus and horticulture along the Mediterranean coast and Guadalquivir valley',
    'Intensive greenhouse vegetable production in the southeast (Almería)',
    'Almonds and other tree nuts',
  ],
  majorLivestockSystems: [
    'Intensive pig production, among the largest herds in the European Union',
    'Iberian pigs grazing dehesa oak rangeland',
    'Extensive sheep and goats for meat, milk and cheese',
    'Dairy and beef cattle in the wetter north',
  ],
  irrigationContext:
    'Irrigation is central to high-value output and is concentrated in the Mediterranean arc and the Ebro and Guadalquivir valleys, where water scarcity is a persistent constraint.',
  agriculturalInstitutions: [
    {
      name: 'MAPA',
      note: 'Ministry of Agriculture, Fisheries and Food (Ministerio de Agricultura, Pesca y Alimentación).',
      url: 'https://www.mapa.gob.es',
    },
    {
      name: 'INIA-CSIC',
      note: 'National Institute for Agricultural and Food Research and Technology, part of the Spanish National Research Council.',
      url: 'https://www.inia.es',
    },
    {
      name: 'FEGA',
      note: 'Spanish Agricultural Guarantee Fund, the national CAP paying agency.',
      url: 'https://www.fega.gob.es',
    },
  ],
  overview:
    "Spain is one of the European Union's leading agricultural producers and the world's foremost producer of olive oil, with a Mediterranean-dominated sector built on olives, wine, citrus, fruit and vegetables alongside extensive dryland cereals on the central Meseta. A sharp contrast runs between rainfed dryland farming and highly productive irrigated horticulture, including the intensive greenhouse systems of the southeast that supply much of Europe's off-season produce. Livestock is dominated by a very large pig sector and by extensive sheep, goat and Iberian-pig grazing on the dehesa oak rangelands. Farming operates within the EU Common Agricultural Policy (CAP), and water availability is the defining long-term constraint on the sector.",
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised; always read the year and dataset version rather than treating a figure as current.',
    'National and EU statistical definitions (for example utilised agricultural area and livestock categories) differ from those of other countries, limiting direct cross-country comparison.',
    'Water scarcity and recurrent drought cause large year-to-year swings in output that single-year figures cannot convey.',
    'The economic weight of high-value permanent crops such as olives, wine and citrus is understated by tonnage-based production indicators.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.LND.IRIG.AG.ZS',
    'AG.YLD.CREL.KG',
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
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'orange' },
    { type: 'livestock', slug: 'pigs' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
