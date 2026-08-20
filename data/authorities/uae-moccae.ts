import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const uaeMoccae: AgriculturalAuthorityEntry = {
  id: 'are-moccae',
  slug: 'uae-moccae',
  officialName: 'Ministry of Climate Change and Environment',
  shortName: 'MOCCAE',
  localLanguageNames: [{ lang: 'ar', name: 'وزارة التغير المناخي والبيئة' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'ARE',
  jurisdictionName: 'United Arab Emirates',
  authorityStatus: 'active',
  officialWebsite: 'https://www.moccae.gov.ae/ar/home',
  summary:
    'The United Arab Emirates ministry within which the national agriculture portfolio sits, alongside climate change and environment. Its official portal states that it works towards integrated management of ecosystems and resources.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Holds the UAE’s national agriculture portfolio within a combined climate/environment ministry, published on the official gov.ae domain.',
      sourceId: 'ae-moccae',
      statutory: false,
    },
  ],
  sourceReferences: ['ae-moccae'],
  verification: [
    {
      url: 'https://www.moccae.gov.ae/ar/home',
      sourceId: 'ae-moccae',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “وزارة التغير المناخي والبيئة - الامارات العربية المتحدة”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'Agriculture in the UAE is administered within a combined climate-change and environment ministry rather than a standalone agriculture ministry; this record reflects that structure rather than implying a separate agriculture ministry exists.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
