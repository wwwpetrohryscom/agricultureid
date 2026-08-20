import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usMsMdac: AgriculturalAuthorityEntry = {
  id: 'us-ms-mdac',
  slug: 'united-states-mdac',
  officialName: 'Mississippi Department of Agriculture and Commerce',
  shortName: 'MDAC',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-MS',
  jurisdictionName: 'Mississippi',
  authorityStatus: 'active',
  officialWebsite: 'https://www.mdac.ms.gov',
  summary:
    'Mississippi Department of Agriculture and Commerce is the first-order subnational public authority responsible for agriculture in Mississippi.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-ms-mdac',
      statutory: false,
    },
    {
      area: 'agricultural-trade',
      note: 'Commerce is a named portfolio of the same department, published alongside agriculture.',
      sourceId: 'us-ms-mdac',
      statutory: false,
    },
  ],
  sourceReferences: ['us-ms-mdac'],
  verification: [
    {
      url: 'https://www.mdac.ms.gov',
      sourceId: 'us-ms-mdac',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Mississippi Department of Agriculture and Commerce.',
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
