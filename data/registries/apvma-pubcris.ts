import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const apvmaPubcris: AgriculturalRegistryEntry = {
  id: 'apvma-pubcris',
  slug: 'apvma-pubcris',
  officialName: 'PUBCRIS — Public Chemical Registration Information System',
  shortName: 'PUBCRIS',
  registryType: 'pesticideProductRegistry',
  countryCode: 'AUS',
  jurisdictionName: 'Australia',
  responsibleAuthorityIds: [],
  officialUrl: 'https://portal.apvma.gov.au/pubcris',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Agricultural and veterinary chemical products registered in Australia',
    'Approved labels and active constituents',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-apvma-pubcris'],
  verification: [
    {
      url: 'https://portal.apvma.gov.au/pubcris',
      sourceId: 'reg-apvma-pubcris',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as PUBCRIS — Public Chemical Registration Information System.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
