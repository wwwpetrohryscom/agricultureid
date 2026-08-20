import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usIlAgr: AgriculturalAuthorityEntry = {
  id: 'us-il-agr',
  slug: 'united-states-il-agr',
  officialName: 'Illinois Department of Agriculture',
  shortName: 'IDOA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  regionId: 'illinois',
  jurisdictionName: 'Illinois',
  authorityStatus: 'active',
  officialWebsite: 'https://agr.illinois.gov',
  summary:
    'Illinois Department of Agriculture is the first-order subnational public authority responsible for agriculture in Illinois.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on an Illinois state government domain as the state department of agriculture.',
      sourceId: 'us-il-agr',
      statutory: false,
    },
  ],
  sourceReferences: ['us-il-agr'],
  verification: [
    {
      url: 'https://agr.illinois.gov',
      sourceId: 'us-il-agr',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Illinois Department of Agriculture.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: the department’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
