import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const cfiaVarietyRegistration: AgriculturalRegistryEntry = {
  id: 'cfia-variety-registration',
  slug: 'cfia-variety-registration',
  officialName: 'Variety Registration (CFIA)',
  registryType: 'varietyCatalogue',
  countryCode: 'CAN',
  jurisdictionName: 'Canada',
  responsibleAuthorityIds: ['can-cfia'],
  officialUrl:
    'https://inspection.canada.ca/en/plant-varieties/variety-registration',
  accessType: 'public-document',
  searchable: false,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Crop varieties registered for sale in Canada',
    'Variety registration requirements and registered variety listings',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-cfia-variety-registration'],
  verification: [
    {
      url: 'https://inspection.canada.ca/en/plant-varieties/variety-registration',
      sourceId: 'reg-cfia-variety-registration',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Variety Registration (CFIA).',
    },
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-20',
};
