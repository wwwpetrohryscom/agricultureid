import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const chinaMoa: AgriculturalAuthorityEntry = {
  id: 'chn-moa',
  slug: 'china-moa',
  officialName:
    'Ministry of Agriculture and Rural Affairs of the People’s Republic of China',
  shortName: 'MARA',
  localLanguageNames: [{ lang: 'zh-Hans', name: '中华人民共和国农业农村部' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'CHN',
  jurisdictionName: 'China',
  authorityStatus: 'active',
  officialWebsite: 'https://www.moa.gov.cn/',
  summary:
    'China’s national ministry for agriculture and rural affairs. The official legal identity is 中华人民共和国农业农村部; the English form is a display translation.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Published on the national gov.cn government domain as China’s ministry of agriculture.',
      sourceId: 'cn-mara',
      statutory: false,
    },
    {
      area: 'rural-development',
      note: 'Rural affairs (农村) is named in the ministry’s official Chinese title 农业农村部.',
      sourceId: 'cn-mara',
      statutory: false,
    },
  ],
  sourceReferences: ['cn-mara'],
  verification: [
    {
      url: 'https://www.moa.gov.cn/',
      sourceId: 'cn-mara',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “中华人民共和国农业农村部”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The authoritative legal name is the Chinese 中华人民共和国农业农村部; the English name is a display aid and is not the legal identity.',
    'Subordinate administrations under the ministry are distinct bodies and are not described by this record.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
