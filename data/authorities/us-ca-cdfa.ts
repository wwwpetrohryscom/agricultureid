import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usCaCdfa: AgriculturalAuthorityEntry = {
  id: 'us-ca-cdfa',
  slug: 'united-states-canada-cdfa',
  officialName: 'California Department of Food and Agriculture',
  shortName: 'CDFA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'california',
  jurisdictionName: 'California',
  authorityStatus: 'active',
  officialWebsite: 'https://www.cdfa.ca.gov',
  summary:
    'California Department of Food and Agriculture is the first-order subnational public authority responsible for agriculture in California.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-ca-cdfa',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food is a named portfolio in the department’s official title, alongside agriculture.',
      sourceId: 'us-ca-cdfa',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ca-cdfa'],
  verification: [
    {
      url: 'https://www.cdfa.ca.gov',
      sourceId: 'us-ca-cdfa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as California Department of Food and Agriculture.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; the specific statutory powers behind each portfolio are set out in California law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
