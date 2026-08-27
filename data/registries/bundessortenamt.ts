import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const bundessortenamt: AgriculturalRegistryEntry = {
  id: 'bundessortenamt',
  slug: 'bundessortenamt',
  officialName: 'Bundessortenamt',
  registryType: 'varietyCatalogue',
  countryCode: 'DEU',
  jurisdictionName: 'Germany',
  responsibleAuthorityIds: ['de-bmleh'],
  officialUrl: 'https://www.bundessortenamt.de',
  accessType: 'public-document',
  searchable: false,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: ['German national plant variety listing and plant variety protection'],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-bundessortenamt'],
  verification: [
    {
      url: 'https://www.bundessortenamt.de',
      sourceId: 'reg-bundessortenamt',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Bundessortenamt.',
    },
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-20',
};
