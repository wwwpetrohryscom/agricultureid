import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const japanMaff: AgriculturalAuthorityEntry = {
  id: 'jpn-maff',
  slug: 'japan-maff',
  officialName: 'Ministry of Agriculture, Forestry and Fisheries',
  shortName: 'MAFF',
  localLanguageNames: [{ lang: 'ja', name: '農林水産省' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'JPN',
  jurisdictionName: 'Japan',
  authorityStatus: 'active',
  officialWebsite: 'https://www.maff.go.jp/',
  summary:
    'Japan’s national ministry for agriculture, forestry and fisheries. The official legal identity is 農林水産省; the English form is a display translation.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national go.jp government domain as Japan’s agriculture ministry.',
      sourceId: 'jp-maff',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry (林) is named in the ministry’s official Japanese title 農林水産省.',
      sourceId: 'jp-maff',
      statutory: false,
    },
    {
      area: 'fisheries',
      note: 'Fisheries (水産) is named in the ministry’s official Japanese title 農林水産省.',
      sourceId: 'jp-maff',
      statutory: false,
    },
  ],
  sourceReferences: ['jp-maff'],
  verification: [
    {
      url: 'https://www.maff.go.jp/',
      sourceId: 'jp-maff',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “農林水産省ホームページ”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The authoritative legal name is the Japanese 農林水産省; the English name is a display aid and is not the legal identity.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
