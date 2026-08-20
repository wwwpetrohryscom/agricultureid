import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const czechiaMze: AgriculturalAuthorityEntry = {
  id: 'cze-mze',
  slug: 'czechia-mze',
  officialName: 'Ministerstvo zemědělství',
  shortName: 'MZe',
  localLanguageNames: [{ lang: 'cs', name: 'Ministerstvo zemědělství' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'CZE',
  jurisdictionName: 'Czechia',
  authorityStatus: 'active',
  officialWebsite: 'https://mze.gov.cz/public/portal/mze/',
  summary:
    'Czechia’s national ministry of agriculture. Its official portal organises public content under agriculture, subsidies and a dedicated farmer portal, alongside the ministry’s own institutional pages.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Publishes agriculture (Zemědělství) as a top-level area of its official portal.',
      sourceId: 'cz-mze',
      statutory: false,
    },
    {
      area: 'agricultural-subsidies',
      note: 'Publishes subsidies (Dotace) as a top-level area of its official portal.',
      sourceId: 'cz-mze',
      statutory: false,
    },
    {
      area: 'extension',
      note: 'Operates a dedicated farmer portal (Portál farmáře) as a public-facing service.',
      sourceId: 'cz-mze',
      statutory: false,
    },
  ],
  sourceReferences: ['cz-mze'],
  verification: [
    {
      url: 'https://mze.gov.cz/public/portal/mze/',
      sourceId: 'cz-mze',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “MZe | MZe”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The portal section labels evidence areas of published activity; the statutory powers behind them are set out in Czech law and are not asserted here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
