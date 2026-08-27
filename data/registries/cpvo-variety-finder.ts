import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const cpvoVarietyFinder: AgriculturalRegistryEntry = {
  id: 'cpvo-variety-finder',
  slug: 'cpvo-variety-finder',
  officialName: 'CPVO Variety Finder',
  registryType: 'varietyCatalogue',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: [],
  officialUrl:
    'https://cpvo.europa.eu/en/applications-and-examinations/cpvo-variety-finder',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Plant variety denominations',
    'Community plant variety rights records',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-cpvo-variety-finder'],
  verification: [
    {
      url: 'https://cpvo.europa.eu/en/applications-and-examinations/cpvo-variety-finder',
      sourceId: 'reg-cpvo-variety-finder',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as CPVO Variety Finder.',
    },
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-20',
};
