import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const krApqa: AgriculturalRegistryEntry = {
  id: 'kr-apqa',
  slug: 'kr-apqa',
  officialName: 'Animal and Plant Quarantine Agency (농림축산검역본부)',
  shortName: 'APQA',
  registryType: 'borderControlSystem',
  countryCode: 'KOR',
  jurisdictionName: 'Republic of Korea',
  responsibleAuthorityIds: [],
  officialUrl: 'https://www.qia.go.kr/',
  accessType: 'public-document',
  searchable: false,
  downloadable: false,
  apiAvailable: false,
  scope: [
    'Animal and plant quarantine requirements for consignments entering the Republic of Korea',
    'Import prohibitions and the quarantine conditions attached to permitted articles',
  ],
  coverageDescription:
    'The agency operates both animal and plant quarantine. Which regime applies depends on what is being moved, and the two are not interchangeable.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-kr-apqa'],
  verification: [
    {
      url: 'https://www.qia.go.kr/',
      sourceId: 'reg-kr-apqa',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded on 2026-08-27; it resolved with HTTP 200 under the title 농림축산검역본부 (Animal and Plant Quarantine Agency).',
    },
  ],
  limitations: [
    'Published primarily in Korean. Nothing from it is translated or restated here.',
    'Animal and plant quarantine are separate regimes operated by the same agency.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
