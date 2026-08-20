import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usLaLdaf: AgriculturalAuthorityEntry = {
  id: 'us-la-ldaf',
  slug: 'united-states-ldaf',
  officialName: 'Louisiana Department of Agriculture and Forestry',
  shortName: 'LDAF',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-LA',
  jurisdictionName: 'Louisiana',
  authorityStatus: 'active',
  officialWebsite: 'https://www.ldaf.la.gov',
  summary:
    'Louisiana Department of Agriculture and Forestry is the first-order subnational public authority responsible for agriculture in Louisiana.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-la-ldaf',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry is a named portfolio in the department’s official title.',
      sourceId: 'us-la-ldaf',
      statutory: false,
    },
  ],
  sourceReferences: ['us-la-ldaf'],
  verification: [
    {
      url: 'https://www.ldaf.la.gov',
      sourceId: 'us-la-ldaf',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Louisiana Department of Agriculture and Forestry.',
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
