import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19. politicheagricole.it redirects to masaf.gov.it. */
export const masaf: AgriculturalAuthorityEntry = {
  id: 'it-masaf',
  slug: 'italy-masaf',
  officialName:
    'Ministero dell’agricoltura, della sovranità alimentare e delle foreste',
  shortName: 'MASAF',
  alternativeNames: [
    'MASAF',
    'Masaf',
    'Ministero delle politiche agricole alimentari e forestali',
  ],
  localLanguageNames: [
    {
      lang: 'it',
      name: 'Ministero dell’agricoltura, della sovranità alimentare e delle foreste',
    },
  ],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'ITA',
  jurisdictionName: 'Italy',
  authorityStatus: 'active',
  officialWebsite: 'https://www.masaf.gov.it',
  redirectedFrom: 'https://www.politicheagricole.it',
  summary:
    'Italy’s national ministry for agriculture, food sovereignty and forests. Its own site organises its work into European policy, national policy, controls, quality, and research, and it publishes measures covering fisheries and forestry alongside agriculture.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Organises its published work under national policy (Politiche nazionali) and European policy (Politiche europee) for agriculture.',
      sourceId: 'it-masaf',
      statutory: false,
    },
    {
      area: 'agricultural-research',
      note: 'Maintains research (Ricerca) as a top-level area of its published work.',
      sourceId: 'it-masaf',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forests are within the ministry’s title and remit; it maintains the national list of monumental trees (Elenco nazionale degli alberi monumentali).',
      sourceId: 'it-masaf',
      statutory: true,
    },
    {
      area: 'fisheries',
      note: 'Administers fisheries measures, including the national solidarity fund for fishing enterprises affected by natural disasters.',
      sourceId: 'it-masaf',
      statutory: true,
    },
  ],
  sourceReferences: ['it-masaf'],
  verification: [
    {
      url: 'https://www.masaf.gov.it',
      sourceId: 'it-masaf',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official .gov.it site resolved with HTTP 200 under the title “Masaf — Ministero dell’agricoltura, della sovranità alimentare e delle foreste”, with top-level sections for European policy, national policy, controls, quality and research, and current items on the national monumental-tree list and a fisheries solidarity fund. The former politicheagricole.it domain redirects here.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The “Controlli” and “Qualità” sections indicate areas of published activity; the specific statutory inspection and certification powers behind them are set out in Italian law and are not asserted here.',
    'Italian regions hold substantial agricultural competence; this record covers the national ministry only.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
  seo: {
    description:
      'MASAF is Italy’s ministry for agriculture, food sovereignty and forests. Verified official website, published remit and limitations.',
  },
};
