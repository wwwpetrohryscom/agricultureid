import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaNassQuickstats: AgriculturalRegistryEntry = {
  id: 'usda-nass-quickstats',
  slug: 'usda-nass-quickstats',
  officialName: 'USDA NASS Quick Stats',
  shortName: 'Quick Stats',
  registryType: 'agriculturalStatisticsPortal',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['us-usda-nass'],
  officialUrl: 'https://quickstats.nass.usda.gov',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'United States agricultural statistics published by NASS',
    'Crop and livestock data by state, county and commodity',
    'Economics, demographics and environmental subject areas',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-nass-quickstats'],
  verification: [
    {
      url: 'https://quickstats.nass.usda.gov',
      sourceId: 'reg-usda-nass-quickstats',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as USDA NASS Quick Stats.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
