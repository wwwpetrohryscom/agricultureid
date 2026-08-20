import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usSdDanr: AgriculturalAuthorityEntry = {
  id: 'us-sd-danr',
  slug: 'united-states-sd-danr',
  officialName: 'South Dakota Department of Agriculture and Natural Resources',
  shortName: 'DANR',
  alternativeNames: ['DANR'],
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'south-dakota',
  jurisdictionName: 'South Dakota',
  authorityStatus: 'active',
  officialWebsite: 'https://danr.sd.gov',
  summary:
    'South Dakota Department of Agriculture and Natural Resources is the first-order subnational public authority responsible for agriculture in South Dakota.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-sd-danr',
      statutory: false,
    },
    {
      area: 'land-management',
      note: 'Natural resources is a named portfolio of the same department, published alongside agriculture.',
      sourceId: 'us-sd-danr',
      statutory: false,
    },
  ],
  sourceReferences: ['us-sd-danr'],
  verification: [
    {
      url: 'https://danr.sd.gov',
      sourceId: 'us-sd-danr',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as South Dakota Department of Agriculture and Natural Resources.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'South Dakota administers agriculture within a combined agriculture and natural-resources department; this record reflects that structure rather than implying a standalone agriculture department.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
