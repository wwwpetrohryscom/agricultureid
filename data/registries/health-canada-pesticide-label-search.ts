import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const healthCanadaPesticideLabelSearch: AgriculturalRegistryEntry = {
  id: 'health-canada-pesticide-label-search',
  slug: 'health-canada-pesticide-label-search',
  officialName: 'Pesticide Label Search',
  registryType: 'pesticideProductRegistry',
  countryCode: 'CAN',
  jurisdictionName: 'Canada',
  responsibleAuthorityIds: [],
  officialUrl: 'https://pr-rp.hc-sc.gc.ca/ls-re/index-eng.php',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Pest control products registered in Canada',
    'Approved product labels',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-health-canada-pesticide-label-search'],
  verification: [
    {
      url: 'https://pr-rp.hc-sc.gc.ca/ls-re/index-eng.php',
      sourceId: 'reg-health-canada-pesticide-label-search',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Pesticide Label Search.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
