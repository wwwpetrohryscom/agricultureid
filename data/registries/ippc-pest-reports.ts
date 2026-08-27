import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const ippcPestReports: AgriculturalRegistryEntry = {
  id: 'ippc-pest-reports',
  slug: 'ippc-pest-reports',
  officialName: 'IPPC Official Pest Reports',
  registryType: 'quarantinePestDatabase',
  supranationalJurisdiction: 'Global',
  jurisdictionName: 'Global (IPPC contracting parties)',
  responsibleAuthorityIds: [],
  officialUrl: 'https://www.ippc.int/en/countries/all/pestreport/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Official pest reports notified by IPPC contracting parties',
    'National plant protection organisation notifications',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-ippc-pest-reports'],
  verification: [
    {
      url: 'https://www.ippc.int/en/countries/all/pestreport/',
      sourceId: 'reg-ippc-pest-reports',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as IPPC Official Pest Reports.',
    },
  ],
  limitations: [
    'Reports are submitted by national plant protection organisations; absence of a report is not evidence that a pest is absent.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
