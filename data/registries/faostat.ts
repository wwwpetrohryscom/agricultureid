import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const faostat: AgriculturalRegistryEntry = {
  id: 'faostat',
  slug: 'faostat',
  officialName: 'FAOSTAT',
  registryType: 'agriculturalStatisticsPortal',
  supranationalJurisdiction: 'Global',
  jurisdictionName: 'Global',
  responsibleAuthorityIds: [],
  officialUrl: 'https://www.fao.org/faostat/en/#data',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Global agricultural production statistics',
    'Trade in agricultural commodities',
    'Land use and inputs',
    'Food balance sheets',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-faostat'],
  verification: [
    {
      url: 'https://www.fao.org/faostat/en/#data',
      sourceId: 'reg-faostat',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as FAOSTAT.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
