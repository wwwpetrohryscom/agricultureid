import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const euTracesNt: AgriculturalRegistryEntry = {
  id: 'eu-traces-nt',
  slug: 'eu-traces-nt',
  officialName: 'TRACES NT',
  shortName: 'TRACES',
  registryType: 'phytosanitarySystem',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: [],
  officialUrl: 'https://webgate.ec.europa.eu/tracesnt/',
  accessType: 'restricted',
  searchable: false,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  loginRequired: true,
  scope: [
    'Official certification for consignments of animals, plants and products entering or moving within the EU',
    'Sanitary and phytosanitary certificates',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-eu-traces-nt'],
  verification: [
    {
      url: 'https://webgate.ec.europa.eu/tracesnt/',
      sourceId: 'reg-eu-traces-nt',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as TRACES NT.',
    },
  ],
  limitations: [
    'TRACES NT requires an authenticated EU Login account; it is an operational certification system for registered operators and competent authorities, not a public lookup database.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
