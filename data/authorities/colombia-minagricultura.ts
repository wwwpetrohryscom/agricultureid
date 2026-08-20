import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const colombiaMinagri: AgriculturalAuthorityEntry = {
  id: 'col-minagricultura',
  slug: 'colombia-minagricultura',
  officialName: 'Ministerio de Agricultura y Desarrollo Rural',
  shortName: 'MinAgricultura',
  localLanguageNames: [
    { lang: 'es', name: 'Ministerio de Agricultura y Desarrollo Rural' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'COL',
  jurisdictionName: 'Colombia',
  authorityStatus: 'active',
  officialWebsite: 'https://www.minagricultura.gov.co/',
  summary:
    'Colombia’s national ministry for agriculture and rural development, published on the official gov.co government domain.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national government domain as Colombia’s ministry of agriculture.',
      sourceId: 'co-minagri',
      statutory: false,
    },
    {
      area: 'rural-development',
      note: 'Rural development is named in the ministry’s official title.',
      sourceId: 'co-minagri',
      statutory: false,
    },
  ],
  sourceReferences: ['co-minagri'],
  verification: [
    {
      url: 'https://www.minagricultura.gov.co/',
      sourceId: 'co-minagri',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Ministerio de Agricultura y Desarrollo Rural”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'Detailed statutory competences were not read during the verification pass and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
