import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaAgCensus: AgriculturalRegistryEntry = {
  id: 'usda-ag-census',
  slug: 'usda-ag-census',
  officialName: 'USDA Census of Agriculture',
  registryType: 'agriculturalCensusDatabase',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['us-usda-nass'],
  officialUrl: 'https://www.nass.usda.gov/AgCensus/',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Periodic census of United States farms and ranches',
    'Farm numbers, land in farms, production and operator characteristics',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-ag-census'],
  verification: [
    {
      url: 'https://www.nass.usda.gov/AgCensus/',
      sourceId: 'reg-usda-ag-census',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as USDA Census of Agriculture.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
