import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usMaMdar: AgriculturalAuthorityEntry = {
  id: 'us-ma-mdar',
  slug: 'united-states-mdar',
  officialName: 'Massachusetts Department of Agricultural Resources',
  shortName: 'MDAR',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-MA',
  jurisdictionName: 'Massachusetts',
  authorityStatus: 'active',
  officialWebsite:
    'https://www.mass.gov/orgs/massachusetts-department-of-agricultural-resources',
  summary:
    'Massachusetts Department of Agricultural Resources is the first-order subnational public authority responsible for agriculture in Massachusetts.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Massachusetts state government portal as the state department of agricultural resources.',
      sourceId: 'us-ma-mdar',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ma-mdar'],
  verification: [
    {
      url: 'https://www.mass.gov/orgs/massachusetts-department-of-agricultural-resources',
      sourceId: 'us-ma-mdar',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Massachusetts Department of Agricultural Resources.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: the body’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
