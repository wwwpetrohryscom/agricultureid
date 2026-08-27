import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaAphisPcit: AgriculturalRegistryEntry = {
  id: 'usda-aphis-pcit',
  slug: 'usda-aphis-pcit',
  officialName: 'Phytosanitary Certificate Issuance and Tracking (PCIT)',
  shortName: 'PCIT',
  registryType: 'phytosanitarySystem',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['us-usda-aphis'],
  officialUrl: 'https://pcit.aphis.usda.gov/pcit/',
  accessType: 'restricted',
  searchable: false,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  loginRequired: true,
  scope: [
    'Issuance and tracking of United States phytosanitary certificates for plant exports',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-aphis-pcit'],
  verification: [
    {
      url: 'https://pcit.aphis.usda.gov/pcit/',
      sourceId: 'reg-usda-aphis-pcit',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 on the USDA APHIS application-access portal, identifying the system as PCIT (Phytosanitary Certificate Issuance and Tracking).',
    },
  ],
  limitations: [
    'PCIT requires an authenticated USDA account; it is an operational certificate-issuance system for registered exporters and officials, not a public lookup database.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
