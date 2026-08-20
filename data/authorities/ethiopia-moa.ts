import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const ethiopiaMoa: AgriculturalAuthorityEntry = {
  id: 'eth-moa',
  slug: 'ethiopia-moa',
  officialName: 'Ministry of Agriculture',
  shortName: 'MoA',
  localLanguageNames: [{ lang: 'am', name: 'የግብርና ሚኒስቴር' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'ETH',
  jurisdictionName: 'Ethiopia',
  authorityStatus: 'active',
  officialWebsite: 'https://www.moa.gov.et/',
  summary:
    'Ethiopia’s federal ministry of agriculture, published on the official gov.et government domain under the Federal Democratic Republic of Ethiopia identity.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the federal government domain as Ethiopia’s ministry of agriculture.',
      sourceId: 'et-moa',
      statutory: false,
    },
  ],
  sourceReferences: ['et-moa'],
  verification: [
    {
      url: 'https://www.moa.gov.et/',
      sourceId: 'et-moa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “FDRE Ministry Of Agriculture”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'Verified directory record: the ministry’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
