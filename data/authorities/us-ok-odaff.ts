import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usOkOdaff: AgriculturalAuthorityEntry = {
  id: 'us-ok-odaff',
  slug: 'united-states-odaff',
  officialName: 'Oklahoma Department of Agriculture, Food, and Forestry',
  shortName: 'ODAFF',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-OK',
  jurisdictionName: 'Oklahoma',
  authorityStatus: 'active',
  officialWebsite: 'https://ag.ok.gov',
  summary:
    'Oklahoma Department of Agriculture, Food, and Forestry is the first-order subnational public authority responsible for agriculture in Oklahoma.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-ok-odaff',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food is a named portfolio in the department’s official title.',
      sourceId: 'us-ok-odaff',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry is a named portfolio in the department’s official title.',
      sourceId: 'us-ok-odaff',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ok-odaff'],
  verification: [
    {
      url: 'https://ag.ok.gov',
      sourceId: 'us-ok-odaff',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Oklahoma Department of Agriculture, Food, and Forestry.',
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
