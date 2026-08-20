import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usIaIdals: AgriculturalAuthorityEntry = {
  id: 'us-ia-idals',
  slug: 'united-states-ia-idals',
  officialName: 'Iowa Department of Agriculture and Land Stewardship',
  shortName: 'IDALS',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-IA',
  jurisdictionName: 'Iowa',
  authorityStatus: 'active',
  officialWebsite: 'https://iowaagriculture.gov',
  summary:
    'Iowa Department of Agriculture and Land Stewardship is the first-order subnational public authority responsible for agriculture in Iowa.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-ia-idals',
      statutory: false,
    },
    {
      area: 'land-management',
      note: 'Land stewardship is a named portfolio in the department’s official title.',
      sourceId: 'us-ia-idals',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ia-idals'],
  verification: [
    {
      url: 'https://iowaagriculture.gov',
      sourceId: 'us-ia-idals',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Iowa Department of Agriculture and Land Stewardship.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; statutory powers are set out in Iowa law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
