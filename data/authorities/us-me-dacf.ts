import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usMeDacf: AgriculturalAuthorityEntry = {
  id: 'us-me-dacf',
  slug: 'united-states-dacf',
  officialName: 'Maine Department of Agriculture, Conservation and Forestry',
  shortName: 'DACF',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-ME',
  jurisdictionName: 'Maine',
  authorityStatus: 'active',
  officialWebsite: 'https://www.maine.gov/dacf/',
  summary:
    'Maine Department of Agriculture, Conservation and Forestry is the first-order subnational public authority responsible for agriculture in Maine.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-me-dacf',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry is a named portfolio in the department’s official title.',
      sourceId: 'us-me-dacf',
      statutory: false,
    },
    {
      area: 'land-management',
      note: 'Conservation is a named portfolio in the department’s official title.',
      sourceId: 'us-me-dacf',
      statutory: false,
    },
  ],
  sourceReferences: ['us-me-dacf'],
  verification: [
    {
      url: 'https://www.maine.gov/dacf/',
      sourceId: 'us-me-dacf',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Maine Department of Agriculture, Conservation and Forestry.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the body’s official title; the statutory powers behind each portfolio are set out in law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
