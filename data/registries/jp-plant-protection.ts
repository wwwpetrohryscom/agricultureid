import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const jpPlantProtection: AgriculturalRegistryEntry = {
  id: 'jp-plant-protection',
  slug: 'jp-plant-protection',
  officialName: 'Plant Protection Station (植物防疫所)',
  shortName: 'PPS',
  registryType: 'borderControlSystem',
  countryCode: 'JPN',
  jurisdictionName: 'Japan',
  responsibleAuthorityIds: ['jpn-maff'],
  officialUrl: 'https://www.maff.go.jp/pps/index.html',
  accessType: 'public-document',
  searchable: false,
  downloadable: false,
  apiAvailable: false,
  scope: [
    'Plant quarantine requirements for plants and plant products entering and leaving Japan',
    'Prohibited and restricted articles, and the quarantine pests behind those restrictions',
  ],
  coverageDescription:
    'The station publishes import prohibitions and conditions by article and origin. Conditions depend on the species, the origin and the quarantine pest concerned.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-jp-plant-protection'],
  verification: [
    {
      url: 'https://www.maff.go.jp/pps/index.html',
      sourceId: 'reg-jp-plant-protection',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded on 2026-08-27; it resolved with HTTP 200 under the title 植物防疫所ホームページ (Plant Protection Station homepage).',
    },
  ],
  limitations: [
    'Published primarily in Japanese. Nothing from it is translated or restated here.',
    'Conditions depend on the species, the origin and the pest of concern.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
