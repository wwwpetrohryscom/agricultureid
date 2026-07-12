import type { CountryAgricultureProfile } from '@/types/geo';

/**
 * Pakistan — country agriculture profile (evergreen).
 * Volatile statistics are resolved from dated World Bank snapshots at render
 * time and are never written into this descriptive prose.
 */
export const pakistan: CountryAgricultureProfile = {
  countryCode: 'PAK',
  slug: 'pakistan',
  name: 'Pakistan',
  // World Bank groups Pakistan with the MENA region (see keyLimitations).
  region: 'Middle East, North Africa, Afghanistan & Pakistan',
  subregion: 'South Asia',
  climateZones: [
    'Arid and semi-arid (dominant)',
    'Hyper-arid deserts (Thar and Cholistan)',
    'Temperate highland (northern mountains)',
    'Monsoon-influenced eastern margins',
  ],
  agroecologicalZones: [
    'Indus Basin irrigated plains of Punjab and Sindh',
    'Rainfed (barani) uplands of the northwest',
    'Mountainous north',
    'Arid rangelands of Balochistan',
  ],
  dominantCropSystems: [
    'Canal-irrigated wheat, cotton, rice (including basmati), and sugarcane across the Indus Basin',
    'Rainfed (barani) wheat and pulses on the uplands',
    'Orchards and horticulture',
    'Cropping split between kharif (summer) and rabi (winter) seasons',
  ],
  majorLivestockSystems: [
    'Smallholder and pastoral cattle and water buffalo for milk (a very large dairy sector)',
    'Large goat and sheep flocks for meat',
    'Expanding commercial poultry',
  ],
  irrigationContext:
    'Agriculture depends overwhelmingly on the Indus Basin Irrigation System — among the largest contiguous canal networks on earth — leaving output highly sensitive to river flows, waterlogging, and salinity.',
  agriculturalInstitutions: [
    {
      name: 'Pakistan Agricultural Research Council (PARC)',
      note: 'Apex federal body coordinating national agricultural research and its institute network.',
      url: 'https://www.parc.gov.pk',
    },
    {
      name: 'Ministry of National Food Security and Research',
      note: 'Federal ministry responsible for food security, agricultural policy, and coordination.',
      url: 'https://mnfsr.gov.pk',
    },
  ],
  overview:
    'Pakistan is a large, irrigation-dependent agricultural producer whose farming is concentrated in the fertile Indus Basin. It is a major producer of wheat — the staple food crop — along with the cotton that anchors its textile industry, rice (including premium basmati), and sugarcane, and it sustains a very large smallholder dairy sector based on cattle and water buffalo. Output relies almost entirely on canal and groundwater irrigation across a predominantly arid landscape, making water availability the central constraint on production.',
  keyLimitations: [
    'Statistics are dated, versioned, and periodically revised; single-year figures should not be read as a fixed baseline.',
    'National definitions of agricultural land, holdings, crop years, and commodities differ from those used by other countries, limiting direct comparison.',
    'The World Bank classifies Pakistan in its “Middle East, North Africa, Afghanistan & Pakistan” region rather than South Asia; this is an administrative grouping, whereas Pakistan is geographically part of South Asia.',
    'Production is exceptionally sensitive to Indus water availability, waterlogging, and salinity, and is exposed to recurrent flood and drought shocks.',
  ],
  dataCoverage:
    'Covered by the World Bank WDI snapshots for land, production, yield, economy, inputs, and environment indicators.',
  highlightIndicators: [
    'AG.LND.AGRI.ZS',
    'AG.LND.ARBL.ZS',
    'AG.YLD.CREL.KG',
    'AG.PRD.CREL.MT',
    'AG.PRD.LVSK.XD',
    'NV.AGR.TOTL.ZS',
    'SL.AGR.EMPL.ZS',
    'AG.LND.IRIG.AG.ZS',
  ],
  sourceReferences: [
    { sourceId: 'worldbank', citedFor: 'Agricultural statistics (WDI)' },
    {
      sourceId: 'fao',
      citedFor: 'Production, land-use, and commodity context',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'cotton' },
    { type: 'crop', slug: 'sugarcane' },
    { type: 'livestock', slug: 'cattle' },
    { type: 'livestock', slug: 'water-buffalo' },
  ],
  updatedAt: '2026-07-12',
  reviewedAt: '2026-07-12',
};
