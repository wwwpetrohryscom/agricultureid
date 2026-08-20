import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usNeNda: AgriculturalAuthorityEntry = {
  id: 'us-ne-nda',
  slug: 'united-states-ne-nda',
  officialName: 'Nebraska Department of Agriculture',
  shortName: 'NDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-NE',
  jurisdictionName: 'Nebraska',
  authorityStatus: 'active',
  officialWebsite: 'https://nda.nebraska.gov',
  summary:
    'Nebraska Department of Agriculture is the first-order subnational public authority responsible for agriculture in Nebraska.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Nebraska state government domain as the state department of agriculture.',
      sourceId: 'us-ne-nda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ne-nda'],
  verification: [
    {
      url: 'https://nda.nebraska.gov',
      sourceId: 'us-ne-nda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Nebraska Department of Agriculture.',
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
