import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const saudiMewa: AgriculturalAuthorityEntry = {
  id: 'sau-mewa',
  slug: 'saudi-arabia-mewa',
  officialName: 'Ministry of Environment, Water and Agriculture',
  shortName: 'MEWA',
  localLanguageNames: [{ lang: 'ar', name: 'وزارة البيئة والمياه والزراعة' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'SAU',
  jurisdictionName: 'Saudi Arabia',
  authorityStatus: 'active',
  officialWebsite: 'https://www.mewa.gov.sa/en/',
  summary:
    'Saudi Arabia’s national ministry covering environment, water and agriculture in a single portfolio. Its official portal publishes the ministry’s vision and mission, objectives and organizational structure alongside its environment, water and agriculture services.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Agriculture is one of the three portfolios named in the ministry’s official title, and its portal publishes agriculture services and initiatives directly.',
      sourceId: 'sa-mewa',
      statutory: false,
    },
    {
      area: 'irrigation',
      note: 'Water is a named portfolio of the same ministry, published alongside agriculture on its official portal.',
      sourceId: 'sa-mewa',
      statutory: false,
    },
  ],
  sourceReferences: ['sa-mewa'],
  verification: [
    {
      url: 'https://www.mewa.gov.sa/en/',
      sourceId: 'sa-mewa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Ministry of Environment, Water and Agriculture | MEWA”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'Agriculture is administered here as part of a combined environment/water/agriculture portfolio; this record does not separate which statutory powers attach to which portfolio.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
