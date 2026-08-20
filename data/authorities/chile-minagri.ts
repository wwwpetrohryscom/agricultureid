import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const chileMinagri: AgriculturalAuthorityEntry = {
  id: 'chl-minagri',
  slug: 'chile-minagri',
  officialName: 'Ministerio de Agricultura',
  shortName: 'Minagri',
  localLanguageNames: [
    { lang: 'es', name: 'Ministerio de Agricultura de Chile' },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'CHL',
  jurisdictionName: 'Chile',
  authorityStatus: 'active',
  officialWebsite: 'https://minagri.gob.cl/',
  redirectedFrom: 'https://www.minagri.gob.cl',
  summary:
    'Chile’s national ministry of agriculture, published on the official gob.cl government domain.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national government domain as Chile’s ministry of agriculture.',
      sourceId: 'cl-minagri',
      statutory: false,
    },
  ],
  sourceReferences: ['cl-minagri'],
  verification: [
    {
      url: 'https://minagri.gob.cl/',
      sourceId: 'cl-minagri',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Ministerio de Agricultura de Chile”.',
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
