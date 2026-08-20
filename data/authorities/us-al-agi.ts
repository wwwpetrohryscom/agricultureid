import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-20 by loading the official government site in a real browser. */
export const usAlAgi: AgriculturalAuthorityEntry = {
  id: 'us-al-agi',
  slug: 'united-states-agi',
  officialName: 'Alabama Department of Agriculture and Industries',
  shortName: 'ADAI',
  authorityType: 'department',
  governmentLevel: 'state',
  jurisdictionType: 'state',
  countryCode: 'USA',
  jurisdictionId: 'US-AL',
  jurisdictionName: 'Alabama',
  authorityStatus: 'active',
  officialWebsite: 'https://agi.alabama.gov',
  summary:
    'Alabama Department of Agriculture and Industries is the first-order subnational public authority responsible for agriculture in Alabama.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is a named portfolio in the department’s official title.',
      sourceId: 'us-al-agi',
      statutory: false,
    },
    {
      area: 'agricultural-trade',
      note: 'Industries is a named portfolio of the same department, published alongside agriculture.',
      sourceId: 'us-al-agi',
      statutory: false,
    },
  ],
  sourceReferences: ['us-al-agi'],
  verification: [
    {
      url: 'https://agi.alabama.gov',
      sourceId: 'us-al-agi',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official government site loaded in a real browser on 2026-08-20; it resolved with HTTP 200 identifying the body as Alabama Department of Agriculture and Industries.',
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
