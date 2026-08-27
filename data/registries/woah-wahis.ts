import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const woahWahis: AgriculturalRegistryEntry = {
  id: 'woah-wahis',
  slug: 'woah-wahis',
  officialName: 'WAHIS — World Animal Health Information System',
  shortName: 'WAHIS',
  registryType: 'veterinaryDatabase',
  supranationalJurisdiction: 'Global',
  jurisdictionName: 'Global (WOAH members)',
  responsibleAuthorityIds: [],
  officialUrl: 'https://wahis.woah.org/#/home',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Animal disease notifications from WOAH member countries',
    'Animal health status by country and disease',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-woah-wahis'],
  verification: [
    {
      url: 'https://wahis.woah.org/#/home',
      sourceId: 'reg-woah-wahis',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as WAHIS — World Animal Health Information System.',
    },
  ],
  limitations: [
    'Data are self-reported by member countries; reporting completeness varies between countries.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
