import type { CountryAgricultureProfile } from '@/types/geo';

export const ethiopia: CountryAgricultureProfile = {
  countryCode: 'ETH',
  slug: 'ethiopia',
  name: 'Ethiopia',
  region: 'Sub-Saharan Africa',
  subregion: 'Horn of Africa',
  climateZones: [
    'Cool highlands (dega)',
    'Temperate midlands (weyna dega)',
    'Hot lowlands (kolla)',
    'Arid and semi-arid periphery',
  ],
  agroecologicalZones: [
    'Highland mixed cereal and pulse systems',
    'Enset-based southern highlands',
    'Coffee forest and highland coffee zones',
    'Lowland pastoral rangelands (Afar, Somali, Borana)',
  ],
  dominantCropSystems: [
    'Smallholder rainfed highland cereals — teff, wheat, maize, sorghum and barley',
    'Arabica coffee in the southern and western highlands, the leading agricultural export',
    'Enset ("false banana")-based systems in the densely populated southern highlands',
    'Pulses and oilseeds grown in rotation with cereals',
    'Ox-plough smallholder mixed farming across the highlands',
  ],
  majorLivestockSystems: [
    'Highland mixed crop-livestock farming using oxen for draught power, with cattle, sheep and goats',
    'Lowland pastoralism of cattle, camels, goats and sheep in the arid periphery',
    'Smallholder poultry and small ruminants integrated with cropping',
  ],
  irrigationContext:
    'Irrigation remains a small share of cultivated land; smallholder agriculture is overwhelmingly rainfed and dependent on the main (kiremt) rains, although government programmes have promoted smallholder irrigation and lowland commercial schemes.',
  agriculturalInstitutions: [
    {
      name: 'Ethiopian Institute of Agricultural Research (EIAR)',
      note: 'Federal agricultural research institute coordinating the national system.',
      url: 'https://www.eiar.gov.et',
    },
    {
      name: 'Ministry of Agriculture',
      note: 'Federal ministry responsible for agricultural policy and extension.',
    },
    {
      name: 'Ethiopian Agricultural Transformation Institute (ATI)',
      note: 'Government institute for agricultural transformation, formerly the Agricultural Transformation Agency (ATA).',
    },
  ],
  overview:
    'Ethiopian agriculture is dominated by smallholder, rainfed, ox-plough farming and is organised largely by altitude, from the cool highlands down to the hot lowlands. The highlands support cereals such as teff, wheat, maize, sorghum and barley alongside pulses and oilseeds, while coffee — a crop for which Ethiopia is the centre of origin — is the leading agricultural export, grown in the southern and western highlands. The country carries one of the largest livestock populations in Africa, integrated with cropping through draught oxen in highland mixed systems and sustained by pastoralism in the arid lowlands. Dependence on seasonal rains leaves output highly exposed to drought.',
  keyLimitations: [
    'Statistics are dated, versioned and periodically revised as new agricultural survey rounds arrive.',
    'National definitions differ, and nationally important crops such as teff and enset map poorly onto international crop categories.',
    'Heavy reliance on rainfed smallholder farming makes production strongly drought-sensitive.',
    'Livestock numbers and smallholder output are difficult to measure precisely, so estimates carry wide uncertainty.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'SP.RUR.TOTL.ZS',
    'AG.CON.FERT.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    { sourceId: 'fao', citedFor: 'Production, land use and livestock context' },
  ],
  connections: [
    { type: 'crop', slug: 'coffee' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'maize' },
    { type: 'livestock', slug: 'cattle' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
