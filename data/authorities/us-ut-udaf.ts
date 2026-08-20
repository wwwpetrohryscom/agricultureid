import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usUtUdaf: AgriculturalAuthorityEntry = {
  id: 'us-ut-udaf',
  slug: 'united-states-udaf',
  officialName: 'Utah Department of Agriculture and Food',
  shortName: 'UDAF',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-UT',
  jurisdictionName: 'Utah',
  authorityStatus: 'active',
  officialWebsite: 'https://ag.utah.gov',
  summary:
    'Utah Department of Agriculture and Food is the first-order subnational public authority responsible for agriculture in Utah.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-ut-udaf',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food is a named portfolio in the department’s official title.',
      sourceId: 'us-ut-udaf',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ut-udaf'],
  verification: [
    {
      url: 'https://ag.utah.gov',
      sourceId: 'us-ut-udaf',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Utah Department of Agriculture and Food.',
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
