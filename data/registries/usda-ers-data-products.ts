import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaErsDataProducts: AgriculturalRegistryEntry = {
  id: 'usda-ers-data-products',
  slug: 'usda-ers-data-products',
  officialName: 'USDA ERS Data Products',
  registryType: 'agriculturalStatisticsPortal',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['usa-ers'],
  officialUrl: 'https://www.ers.usda.gov/data-products/',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Economic research data on agriculture, food, natural resources and rural America',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-ers-data-products'],
  verification: [
    {
      url: 'https://www.ers.usda.gov/data-products/',
      sourceId: 'reg-usda-ers-data-products',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as USDA ERS Data Products.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
