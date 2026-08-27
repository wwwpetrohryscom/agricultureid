import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const epaPpls: AgriculturalRegistryEntry = {
  id: 'epa-ppls',
  slug: 'epa-ppls',
  officialName: 'EPA Pesticide Product and Label System',
  shortName: 'PPLS',
  registryType: 'pesticideProductRegistry',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: [],
  officialUrl: 'https://ordspub.epa.gov/ords/pesticides/f?p=PPLS:1',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Pesticide products registered in the United States',
    'Approved product labels',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-epa-ppls'],
  verification: [
    {
      url: 'https://ordspub.epa.gov/ords/pesticides/f?p=PPLS:1',
      sourceId: 'reg-epa-ppls',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as EPA Pesticide Product and Label System.',
    },
  ],
  limitations: [
    'The database records federal product registration and approved labels; individual states may impose additional registration or use restrictions.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
