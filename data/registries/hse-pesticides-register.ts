import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const hsePesticidesRegister: AgriculturalRegistryEntry = {
  id: 'hse-pesticides-register',
  slug: 'hse-pesticides-register',
  officialName: 'Pesticides Register of Authorised Plant Protection Products',
  registryType: 'pesticideProductRegistry',
  countryCode: 'GBR',
  jurisdictionName: 'United Kingdom',
  responsibleAuthorityIds: ['gb-defra'],
  officialUrl: 'https://secure.pesticides.gov.uk/pestreg/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Plant protection products authorised for use in the United Kingdom',
    'Authorisation status and approval holders',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-hse-pesticides-register'],
  verification: [
    {
      url: 'https://secure.pesticides.gov.uk/pestreg/',
      sourceId: 'reg-hse-pesticides-register',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Pesticides Register of Authorised Plant Protection Products.',
    },
  ],
  limitations: [
    'Authorisation status can change; the register is the authoritative current record and a product label remains legally binding where official guidance says so.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
