import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 against the official GOV.UK organisations directory.
 * Responsibilities below are taken from Defra's own statement of what it does
 * and from the policy areas it lists — not from the department's title.
 */
export const defra: AgriculturalAuthorityEntry = {
  id: 'gb-defra',
  slug: 'united-kingdom-defra',
  officialName: 'Department for Environment, Food & Rural Affairs',
  shortName: 'Defra',
  alternativeNames: [
    'Defra',
    'Department for Environment Food and Rural Affairs',
  ],
  authorityType: 'department',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'GBR',
  jurisdictionName: 'United Kingdom',
  authorityStatus: 'active',
  officialWebsite:
    'https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs',
  summary:
    'The United Kingdom’s ministerial department for the environment, food, farming and fisheries. Defra states that it is responsible for improving and protecting the environment, and that it supports the UK’s food, farming and fishing industries. It is supported by a large number of agencies and public bodies, several of which hold the operational regulatory functions.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'States that it supports the UK’s food, farming and fishing industries, and publishes agricultural development policy.',
      sourceId: 'defra',
      statutory: false,
    },
    {
      area: 'agricultural-subsidies',
      note: 'Publishes and administers funding for farmers and land managers.',
      sourceId: 'defra',
      statutory: true,
    },
    {
      area: 'animal-health',
      note: 'Issues guidance and control measures for notifiable animal disease, including avian influenza and bluetongue.',
      sourceId: 'defra',
      statutory: true,
    },
    {
      area: 'import-export-certification',
      note: 'Publishes the requirements for bringing food and animal products into Great Britain.',
      sourceId: 'defra',
      statutory: true,
    },
    {
      area: 'rural-development',
      note: 'States an aim of sustaining thriving rural communities.',
      sourceId: 'defra',
      statutory: false,
    },
    {
      area: 'fisheries',
      note: 'Covers fisheries alongside food and farming within the same departmental remit.',
      sourceId: 'defra',
      statutory: false,
    },
  ],
  sourceReferences: ['defra'],
  verification: [
    {
      url: 'https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs',
      sourceId: 'defra',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official GOV.UK organisation page resolved with HTTP 200 and states the department is “responsible for improving and protecting the environment… We also support our world-leading food, farming and fishing industries”, listing farming funding, animal disease and food-import policy areas.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Defra is supported by separate agencies and public bodies; several operational regulatory functions (for example plant health and rural payments) sit with those bodies rather than the department itself, and are not asserted here.',
    'Agricultural competence is devolved across the United Kingdom; this record does not describe the devolved administrations’ separate authorities.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
  seo: {
    description:
      'Defra is the UK ministerial department for environment, food, farming and fisheries. Verified official website, remit and limitations.',
  },
};
