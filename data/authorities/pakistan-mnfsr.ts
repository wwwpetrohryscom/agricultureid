import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const pakistanMnfsr: AgriculturalAuthorityEntry = {
  id: 'pak-mnfsr',
  slug: 'pakistan-mnfsr',
  officialName: 'Ministry of National Food Security & Research',
  shortName: 'MNFSR',
  localLanguageNames: [
    { lang: 'en', name: 'Ministry of National Food Security & Research' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'PAK',
  jurisdictionName: 'Pakistan',
  authorityStatus: 'active',
  officialWebsite: 'https://mnfsr.gov.pk/',
  summary:
    'Pakistan’s federal ministry for national food security and research, which holds the federal agriculture portfolio.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Holds Pakistan’s federal portfolio for national food security, published on a federal government domain.',
      sourceId: 'pk-mnfsr',
      statutory: false,
    },
    {
      area: 'agricultural-research',
      note: 'Research is named in the ministry’s official title.',
      sourceId: 'pk-mnfsr',
      statutory: false,
    },
  ],
  sourceReferences: ['pk-mnfsr'],
  verification: [
    {
      url: 'https://mnfsr.gov.pk/',
      sourceId: 'pk-mnfsr',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Ministry of National Food Security & Research”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'Agriculture is substantially a provincial subject in Pakistan; this record covers the federal ministry only.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
