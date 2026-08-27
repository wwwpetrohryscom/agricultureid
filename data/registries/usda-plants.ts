import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaPlants: AgriculturalRegistryEntry = {
  id: 'usda-plants',
  slug: 'usda-plants',
  officialName: 'USDA PLANTS Database',
  shortName: 'PLANTS',
  registryType: 'germplasmDatabase',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: [],
  officialUrl: 'https://plants.usda.gov',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Vascular plants, mosses, liverworts and lichens of the United States and its territories',
    'Plant names, distribution and characteristics',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-plants'],
  verification: [
    {
      url: 'https://plants.usda.gov',
      sourceId: 'reg-usda-plants',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as USDA PLANTS Database.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
