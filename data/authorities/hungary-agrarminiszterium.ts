import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const hungaryAm: AgriculturalAuthorityEntry = {
  id: 'hun-agrarminiszterium',
  slug: 'hungary-agrarminiszterium',
  officialName: 'Agrárminisztérium',
  shortName: 'AM',
  localLanguageNames: [{ lang: 'hu', name: 'Agrárminisztérium' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'HUN',
  jurisdictionName: 'Hungary',
  authorityStatus: 'active',
  officialWebsite: 'https://kormany.hu/kormanyzat/agrarminiszterium',
  summary:
    'Hungary’s national agriculture ministry, published on the official kormany.hu government portal.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national government portal as Hungary’s agriculture ministry.',
      sourceId: 'hu-am',
      statutory: false,
    },
  ],
  sourceReferences: ['hu-am'],
  verification: [
    {
      url: 'https://kormany.hu/kormanyzat/agrarminiszterium',
      sourceId: 'hu-am',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Agrárminisztérium | Magyarország Kormánya”.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'Verified directory record: the ministry’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
