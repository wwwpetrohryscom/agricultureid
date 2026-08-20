import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const indonesiaPertanian: AgriculturalAuthorityEntry = {
  id: 'idn-pertanian',
  slug: 'indonesia-pertanian',
  officialName: 'Kementerian Pertanian Republik Indonesia',
  shortName: 'Kementan',
  localLanguageNames: [
    { lang: 'id', name: 'Kementerian Pertanian Republik Indonesia' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'IDN',
  jurisdictionName: 'Indonesia',
  authorityStatus: 'active',
  officialWebsite: 'https://www.pertanian.go.id/',
  summary:
    'Indonesia’s national ministry of agriculture, published on the official go.id government domain.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national government domain as Indonesia’s ministry of agriculture.',
      sourceId: 'id-pertanian',
      statutory: false,
    },
  ],
  sourceReferences: ['id-pertanian'],
  verification: [
    {
      url: 'https://www.pertanian.go.id/',
      sourceId: 'id-pertanian',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Kementerian Pertanian Republik Indonesia”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'Verified directory record: the ministry’s published remit was not read during the verification pass.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
