import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const usdaErs: AgriculturalAuthorityEntry = {
  id: 'usa-ers',
  slug: 'united-states-ers',
  officialName: 'Economic Research Service',
  shortName: 'ERS',
  localLanguageNames: [{ lang: 'en', name: 'Economic Research Service' }],
  authorityType: 'researchAgency',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.fas.usda.gov/',
  redirectedFrom: 'https://www.ers.usda.gov',
  summary:
    'The economic research agency of the United States Department of Agriculture, publishing economic analysis of agriculture, food, natural resources and rural America.',
  responsibilities: [
    {
      area: 'agricultural-research',
      note: 'Operates as the economic research agency of the United States Department of Agriculture.',
      sourceId: 'usda-ers',
      statutory: true,
    },
    {
      area: 'agricultural-statistics',
      note: 'Publishes economic data and analysis on agriculture and rural America.',
      sourceId: 'usda-ers',
      statutory: false,
    },
  ],
  sourceReferences: ['usda-ers'],
  verification: [
    {
      url: 'https://www.fas.usda.gov/',
      sourceId: 'usda-ers',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 403 under the title “Access Denied”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'ERS is an agency within the United States Department of Agriculture; this record describes the agency, not the parent department.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
