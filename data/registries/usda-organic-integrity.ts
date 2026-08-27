import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-20 by loading the official system in a real browser. */
export const usdaOrganicIntegrity: AgriculturalRegistryEntry = {
  id: 'usda-organic-integrity',
  slug: 'usda-organic-integrity',
  officialName: 'USDA Organic INTEGRITY Database',
  shortName: 'INTEGRITY',
  registryType: 'organicOperatorRegistry',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: [],
  officialUrl: 'https://organic.ams.usda.gov/integrity/',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  // apiAvailable is false unless a public or documented API genuinely exists;
  // internal JSON calls made by the site are NOT an API.
  apiAvailable: false,
  scope: [
    'Certified organic operations in the United States',
    'Certifying agents and their accredited scopes',
    'Operation certification status and products',
  ],
  // `unknown` unless the operator documents a cadence — a recent timestamp is
  // not documentation.
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-usda-organic-integrity'],
  verification: [
    {
      url: 'https://organic.ams.usda.gov/integrity/',
      sourceId: 'reg-usda-organic-integrity',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official system loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying itself as USDA Organic INTEGRITY Database.',
    },
  ],
  limitations: [
    'Certification is issued by accredited certifying agents rather than by the database operator; the database records certification status, it does not confer it.',
  ],
  profileDepth: 'full-profile',
  lastVerifiedAt: '2026-08-20',
};
