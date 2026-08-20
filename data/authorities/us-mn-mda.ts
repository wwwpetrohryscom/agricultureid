import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const usMnMda: AgriculturalAuthorityEntry = {
  id: 'us-mn-mda',
  slug: 'united-states-mn-mda',
  officialName: 'Minnesota Department of Agriculture',
  shortName: 'MDA',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-MN',
  jurisdictionName: 'Minnesota',
  authorityStatus: 'active',
  officialWebsite: 'https://www.mda.state.mn.us',
  summary:
    'Minnesota Department of Agriculture is the first-order subnational public authority responsible for agriculture in Minnesota.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on a Minnesota state government domain as the state department of agriculture.',
      sourceId: 'us-mn-mda',
      statutory: false,
    },
  ],
  sourceReferences: ['us-mn-mda'],
  verification: [
    {
      url: 'https://www.mda.state.mn.us',
      sourceId: 'us-mn-mda',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Minnesota Department of Agriculture.',
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
