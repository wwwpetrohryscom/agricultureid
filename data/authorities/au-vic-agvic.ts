import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official government site in a real browser.
 * Responsibilities are evidenced from the body's own official designation and
 * published context — never inferred beyond what the page shows.
 */
export const auVicAgvic: AgriculturalAuthorityEntry = {
  id: 'au-vic-agvic',
  slug: 'australia-vic-agvic',
  officialName: 'Agriculture Victoria',
  shortName: 'Agriculture Victoria',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'AUS',
  jurisdictionId: 'AU-VIC',
  jurisdictionName: 'Victoria',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.vic.gov.au',
  summary:
    'Agriculture Victoria is the first-order subnational public authority responsible for agriculture in Victoria.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published by the Victorian Government as the state agriculture body.',
      sourceId: 'au-vic-agvic',
      statutory: false,
    },
  ],
  sourceReferences: ['au-vic-agvic'],
  verification: [
    {
      url: 'https://agriculture.vic.gov.au',
      sourceId: 'au-vic-agvic',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 identifying the body as Agriculture Victoria.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: Agriculture Victoria operates within a larger Victorian government department; its published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
