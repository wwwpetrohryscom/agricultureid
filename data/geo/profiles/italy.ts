import type { CountryAgricultureProfile } from '@/types/geo';

export const italy: CountryAgricultureProfile = {
  countryCode: 'ITA',
  slug: 'italy',
  name: 'Italy',
  region: 'Europe & Central Asia',
  subregion: 'Southern Europe',
  climateZones: [
    'Mediterranean',
    'Temperate (Po Valley)',
    'Mountain (Alpine and Apennine)',
  ],
  agroecologicalZones: [
    'Irrigated northern plain',
    'Central and southern Mediterranean hills',
    'Insular Mediterranean (Sicily, Sardinia)',
  ],
  dominantCropSystems: [
    'Durum wheat for pasta across the centre and south',
    'Common wheat, maize and rice in the irrigated Po Valley',
    'Viticulture across numerous designated regions (Piedmont, Tuscany, Veneto)',
    'Olive groves through the centre and south',
    'Processing and fresh tomatoes and field horticulture',
    'Citrus and fruit in the south and on the islands',
  ],
  majorLivestockSystems: [
    'Dairy cattle on the northern plains supplying protected-origin cheeses',
    'Pig production linked to cured-meat (PDO ham) supply chains',
    'Poultry for meat and eggs',
    'Sheep and goats for milk and cheese in the centre, south and islands',
  ],
  irrigationContext:
    'Irrigation is essential to the productive Po Valley and to southern horticulture, drawing on Alpine and Apennine water resources.',
  agriculturalInstitutions: [
    {
      name: 'CREA',
      note: "Council for Agricultural Research and Economics (Consiglio per la ricerca in agricoltura e l'analisi dell'economia agraria).",
      url: 'https://www.crea.gov.it',
    },
    {
      name: 'MASAF',
      note: "Ministry of Agriculture, Food Sovereignty and Forests (Ministero dell'Agricoltura, della Sovranità alimentare e delle Foreste).",
      url: 'https://www.masaf.gov.it',
    },
    {
      name: 'ISMEA',
      note: 'Institute of Services for the Agricultural and Food Market (Istituto di Servizi per il Mercato Agricolo Alimentare).',
      url: 'https://www.ismea.it',
    },
  ],
  overview:
    "Italy has a highly diversified, quality-oriented agricultural sector that ranges from the intensive, irrigated arable and dairy systems of the Po Valley to Mediterranean permanent crops across the centre and south. It is one of the world's leading producers of wine and olive oil, the European Union's largest rice grower, and a major producer of durum wheat for pasta, processing tomatoes, and fruit and vegetables. The sector is distinguished by an exceptional density of protected designation-of-origin (DOP/IGP) products, from cheeses and cured meats to wines. Farming operates within the EU Common Agricultural Policy (CAP), and a persistent north-south divide separates larger, capital-intensive northern farms from smaller southern holdings.",
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised; always read the year and dataset version rather than treating a figure as current.',
    'National and EU statistical definitions (for example utilised agricultural area and livestock categories) differ from those of other countries, limiting direct cross-country comparison.',
    'Much of the sector value lies in protected-origin and quality products that tonnage-based production indicators do not capture.',
    'A marked north-south divide in farm structure and productivity is averaged out in national figures.',
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
    { type: 'crop', slug: 'grape' },
    { type: 'crop', slug: 'olive' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'tomato' },
    { type: 'crop', slug: 'maize' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
