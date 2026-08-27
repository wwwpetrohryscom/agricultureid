import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const eurostatAgriculture: AgriculturalRegistryEntry = {
  id: 'eurostat-agriculture',
  slug: 'eurostat-agriculture',
  officialName: 'Eurostat — Agriculture database',
  registryType: 'agriculturalStatisticsPortal',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: ['eu-dg-agri'],
  officialUrl: 'https://ec.europa.eu/eurostat/web/agriculture/database',
  accessType: 'mixed',
  searchable: true,
  downloadable: true,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'European agricultural statistics',
    'Crop production statistics',
    'Livestock and animal production statistics',
    'Agricultural accounts and prices',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-eurostat-agriculture'],
  verification: [
    {
      url: 'https://ec.europa.eu/eurostat/web/agriculture/database',
      sourceId: 'reg-eurostat-agriculture',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as Eurostat — Agriculture database.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
