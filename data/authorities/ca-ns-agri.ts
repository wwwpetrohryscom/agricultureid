import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const caNsAgri: AgriculturalAuthorityEntry = {
  id: 'ca-ns-agri',
  slug: 'canada-agri',
  officialName: 'Nova Scotia Department of Agriculture',
  shortName: 'NS Agriculture',
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-NS',
  jurisdictionName: 'Nova Scotia',
  authorityStatus: 'active',
  officialWebsite: 'https://novascotia.ca/agri/',
  summary:
    'Nova Scotia Department of Agriculture is the first-order subnational public authority responsible for agriculture in Nova Scotia.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the Government of Nova Scotia portal as the provincial Department of Agriculture.',
      sourceId: 'ca-ns-agri',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-ns-agri'],
  verification: [
    {
      url: 'https://novascotia.ca/agri/',
      sourceId: 'ca-ns-agri',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Nova Scotia Department of Agriculture.',
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
