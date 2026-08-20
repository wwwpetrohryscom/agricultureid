import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usWiDatcp: AgriculturalAuthorityEntry = {
  id: 'us-wi-datcp',
  slug: 'united-states-wi-datcp',
  officialName:
    'Wisconsin Department of Agriculture, Trade and Consumer Protection',
  shortName: 'DATCP',
  alternativeNames: ['DATCP'],
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'wisconsin',
  jurisdictionName: 'Wisconsin',
  authorityStatus: 'active',
  officialWebsite: 'https://datcp.wi.gov',
  summary:
    'Wisconsin Department of Agriculture, Trade and Consumer Protection is the first-order subnational public authority responsible for agriculture in Wisconsin.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-wi-datcp',
      statutory: false,
    },
    {
      area: 'agricultural-trade',
      note: 'Trade is a named portfolio in the department’s official title.',
      sourceId: 'us-wi-datcp',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Consumer protection is a named portfolio of the same department.',
      sourceId: 'us-wi-datcp',
      statutory: false,
    },
  ],
  sourceReferences: ['us-wi-datcp'],
  verification: [
    {
      url: 'https://datcp.wi.gov',
      sourceId: 'us-wi-datcp',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Wisconsin Department of Agriculture, Trade and Consumer Protection.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the department’s official title; statutory powers are set out in Wisconsin law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
