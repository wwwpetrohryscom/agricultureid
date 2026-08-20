import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const caNlFal: AgriculturalAuthorityEntry = {
  id: 'ca-nl-fal',
  slug: 'canada-fal',
  officialName: 'Department of Forestry, Agriculture and Lands',
  shortName: 'NL Forestry, Agriculture and Lands',
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-NL',
  jurisdictionName: 'Newfoundland and Labrador',
  authorityStatus: 'active',
  officialWebsite: 'https://www.gov.nl.ca/agriculture/',
  summary:
    'Department of Forestry, Agriculture and Lands is the first-order subnational public authority responsible for agriculture in Newfoundland and Labrador.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'ca-nl-fal',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry is a named portfolio in the department’s official title.',
      sourceId: 'ca-nl-fal',
      statutory: false,
    },
    {
      area: 'land-management',
      note: 'Lands is a named portfolio in the department’s official title.',
      sourceId: 'ca-nl-fal',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-nl-fal'],
  verification: [
    {
      url: 'https://www.gov.nl.ca/agriculture/',
      sourceId: 'ca-nl-fal',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Department of Forestry, Agriculture and Lands.',
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
