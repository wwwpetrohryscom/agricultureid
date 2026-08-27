import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaGrinGlobal: AgriculturalRegistryEntry = {
  id: 'usda-grin-global',
  slug: 'usda-grin-global',
  officialName: 'GRIN-Global — Germplasm Resources Information Network',
  shortName: 'GRIN',
  registryType: 'germplasmDatabase',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: [],
  officialUrl: 'https://npgsweb.ars-grin.gov/gringlobal/search',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Plant germplasm accessions held by the US National Plant Germplasm System',
    'Taxonomy and accession passport data',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-grin-global'],
  verification: [
    {
      url: 'https://npgsweb.ars-grin.gov/gringlobal/search',
      sourceId: 'reg-usda-grin-global',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as GRIN-Global — Germplasm Resources Information Network.',
    },
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
