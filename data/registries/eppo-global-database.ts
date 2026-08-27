import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const eppoGlobalDatabase: AgriculturalRegistryEntry = {
  id: 'eppo-global-database',
  slug: 'eppo-global-database',
  officialName: 'EPPO Global Database',
  registryType: 'plantHealthDatabase',
  supranationalJurisdiction: 'Global',
  jurisdictionName: 'EPPO region (global coverage)',
  responsibleAuthorityIds: [],
  officialUrl: 'https://gd.eppo.int',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Pest and pathogen distribution records',
    'Regulated pest listings by country',
    'Host plant associations',
    'Plant protection product registrations reported by EPPO countries',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-eppo-global-database'],
  verification: [
    {
      url: 'https://gd.eppo.int',
      sourceId: 'reg-eppo-global-database',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as EPPO Global Database.',
    },
  ],
  limitations: [
    'EPPO is an intergovernmental organisation; presence of a pest in the database is not the same as regulated quarantine status in a given country.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
