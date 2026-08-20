import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const turkiyeTarim: AgriculturalAuthorityEntry = {
  id: 'tur-tarim-orman',
  slug: 'turkiye-tarim-orman',
  officialName: 'T.C. Tarım ve Orman Bakanlığı',
  shortName: 'Tarım ve Orman Bakanlığı',
  localLanguageNames: [{ lang: 'tr', name: 'T.C. Tarım ve Orman Bakanlığı' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'TUR',
  jurisdictionName: 'Türkiye',
  authorityStatus: 'active',
  officialWebsite: 'https://www.tarimorman.gov.tr/',
  summary:
    'Türkiye’s national ministry of agriculture and forestry, published on the official gov.tr government domain.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national government domain as Türkiye’s ministry of agriculture.',
      sourceId: 'tr-tarim',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry (Orman) is named in the ministry’s official title.',
      sourceId: 'tr-tarim',
      statutory: false,
    },
  ],
  sourceReferences: ['tr-tarim'],
  verification: [
    {
      url: 'https://www.tarimorman.gov.tr/',
      sourceId: 'tr-tarim',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “T.C. TARIM VE ORMAN BAKANLIĞI”.',
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
