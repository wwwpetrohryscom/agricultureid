import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19 against nass.usda.gov, which resolves normally. */
export const usdaNass: AgriculturalAuthorityEntry = {
  id: 'us-usda-nass',
  slug: 'united-states-nass',
  officialName: 'National Agricultural Statistics Service',
  shortName: 'NASS',
  alternativeNames: ['NASS', 'USDA NASS'],
  authorityType: 'statisticsAuthority',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.nass.usda.gov',
  datasetsPageUrl: 'https://quickstats.nass.usda.gov',
  summary:
    'The statistical agency of the United States Department of Agriculture. It publishes official United States agricultural statistics and operates Quick Stats, a searchable database of the agricultural data it publishes, queryable by commodity, location and time period.',
  responsibilities: [
    {
      area: 'agricultural-statistics',
      note: 'Publishes official United States agricultural statistics, organised by state and by subject including crops and plants, livestock, economics and prices, environmental and demographic data.',
      sourceId: 'usda-nass',
      statutory: true,
    },
    {
      area: 'crops',
      note: 'Publishes crop and plant statistics as a named subject area.',
      sourceId: 'usda-nass',
      statutory: false,
    },
    {
      area: 'livestock',
      note: 'Publishes livestock statistics as a named subject area.',
      sourceId: 'usda-nass',
      statutory: false,
    },
  ],
  registries: [
    {
      name: 'Quick Stats',
      url: 'https://quickstats.nass.usda.gov',
      kind: 'dataset',
      note: 'Searchable database of NASS-published agricultural data, queryable by commodity, location or time period.',
      sourceId: 'usda-nass',
    },
  ],
  sourceReferences: ['usda-nass'],
  verification: [
    {
      url: 'https://www.nass.usda.gov/About_NASS/index.php',
      sourceId: 'usda-nass',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official nass.usda.gov page resolved with HTTP 200, identifying the agency as the National Agricultural Statistics Service of the United States Department of Agriculture and describing Quick Stats as “the most comprehensive tool for accessing agricultural data published by NASS”, with statistics browsable by state and by subject.',
      domainVerification: 'officialSubdomain',
    },
  ],
  limitations: [
    'NASS is an agency within the United States Department of Agriculture; this record describes the agency, not the parent department.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
  seo: {
    description:
      'USDA NASS publishes official US agricultural statistics and operates the Quick Stats database. Verified official website and remit.',
  },
};
