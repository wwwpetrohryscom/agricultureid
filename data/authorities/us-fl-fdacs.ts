import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usFlFdacs: AgriculturalAuthorityEntry = {
  id: 'us-fl-fdacs',
  slug: 'united-states-fl-fdacs',
  officialName: 'Florida Department of Agriculture and Consumer Services',
  shortName: 'FDACS',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'florida',
  jurisdictionName: 'Florida',
  authorityStatus: 'active',
  officialWebsite: 'https://www.fdacs.gov',
  summary:
    'Florida Department of Agriculture and Consumer Services is the first-order subnational public authority responsible for agriculture in Florida.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-fl-fdacs',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Consumer services is a named portfolio of the same department, published alongside agriculture.',
      sourceId: 'us-fl-fdacs',
      statutory: false,
    },
  ],
  sourceReferences: ['us-fl-fdacs'],
  verification: [
    {
      url: 'https://www.fdacs.gov',
      sourceId: 'us-fl-fdacs',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Florida Department of Agriculture and Consumer Services.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; statutory powers are set out in Florida law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
