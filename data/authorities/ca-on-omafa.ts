import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const caOnOmafa: AgriculturalAuthorityEntry = {
  id: 'ca-on-omafa',
  slug: 'canada-omafa',
  officialName: 'Ministry of Agriculture, Food and Agribusiness',
  shortName: 'OMAFA',
  alternativeNames: [
    'Ministry of Agriculture, Food and Rural Affairs',
    'OMAFRA',
  ],
  authorityType: 'ministry',
  governmentLevel: 'provincial',
  jurisdictionType: 'province',
  countryCode: 'CAN',
  jurisdictionId: 'CA-ON',
  jurisdictionName: 'Ontario',
  authorityStatus: 'active',
  officialWebsite:
    'https://www.ontario.ca/page/ministry-agriculture-food-and-agribusiness',
  summary:
    'Ministry of Agriculture, Food and Agribusiness is the first-order subnational public authority responsible for agriculture in Ontario.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the ministry’s official title.',
      sourceId: 'ca-on-omafa',
      statutory: false,
    },
    {
      area: 'food-safety',
      note: 'Food is a named portfolio in the ministry’s official title.',
      sourceId: 'ca-on-omafa',
      statutory: false,
    },
    {
      area: 'agricultural-trade',
      note: 'Agribusiness is a named portfolio in the ministry’s current official title.',
      sourceId: 'ca-on-omafa',
      statutory: false,
    },
  ],
  sourceReferences: ['ca-on-omafa'],
  verification: [
    {
      url: 'https://www.ontario.ca/page/ministry-agriculture-food-and-agribusiness',
      sourceId: 'ca-on-omafa',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Ministry of Agriculture, Food and Agribusiness.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Portfolio scope is taken from the body’s official title; the statutory powers behind each portfolio are set out in law and are not asserted here.',
    'The ministry was formerly the Ministry of Agriculture, Food and Rural Affairs (OMAFRA); its old URLs no longer resolve, and the former name is recorded in the change history rather than as an alias, because an alias is not evidence of a former name.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
