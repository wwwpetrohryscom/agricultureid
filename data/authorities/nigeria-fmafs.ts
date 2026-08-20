import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const nigeriaFmafs: AgriculturalAuthorityEntry = {
  id: 'nga-fmafs',
  slug: 'nigeria-fmafs',
  officialName: 'Federal Ministry of Agriculture and Food Security',
  shortName: 'FMAFS',
  localLanguageNames: [
    { lang: 'en', name: 'Federal Ministry of Agriculture and Food Security' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'NGA',
  jurisdictionName: 'Nigeria',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.gov.ng/',
  redirectedFrom: 'https://fmard.gov.ng',
  summary:
    'Nigeria’s federal ministry for agriculture and food security. The ministry publishes under the FMAFS identity on a federal government domain retained from its former name.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a federal government domain as Nigeria’s ministry of agriculture.',
      sourceId: 'ng-fmafs',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food security is named in the ministry’s current official title.',
      sourceId: 'ng-fmafs',
      statutory: false,
    },
  ],
  sourceReferences: ['ng-fmafs'],
  verification: [
    {
      url: 'https://agriculture.gov.ng/',
      sourceId: 'ng-fmafs',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “FMAFS – Federal Ministry of Agriculture and Food Security”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The ministry’s current title (Food Security) differs from the fmard.gov.ng domain retained from its former name; the domain was verified as serving the current ministry.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
