import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19. Note the rename: the former bmel.de redirects to
 * bmleh.de, and the ministry now styles itself BMLEH — "Landwirtschaft,
 * Ernährung und Heimat". The old name is retained as an alias rather than
 * published as a separate authority.
 */
export const bmleh: AgriculturalAuthorityEntry = {
  id: 'de-bmleh',
  slug: 'germany-bmleh',
  officialName: 'Bundesministerium für Landwirtschaft, Ernährung und Heimat',
  officialDesignation: 'Bundesministerium',
  shortName: 'BMLEH',
  alternativeNames: [
    'BMLEH',
    'Bundesministerium für Ernährung und Landwirtschaft',
    'BMEL',
  ],
  localLanguageNames: [
    {
      lang: 'de',
      name: 'Bundesministerium für Landwirtschaft, Ernährung und Heimat',
    },
  ],
  authorityType: 'ministry',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'DEU',
  jurisdictionName: 'Germany',
  authorityStatus: 'active',
  officialWebsite: 'https://www.bmleh.de',
  redirectedFrom: 'https://www.bmel.de',
  summary:
    'Germany’s federal ministry for agriculture, food and rural affairs. The ministry states its goals as balanced, healthy nutrition with safe food, clear consumer information at the point of purchase, and a strong and sustainable agriculture, forestry and fisheries sector, together with prospects for rural regions, future-proof animal husbandry, and world food security.',
  responsibilities: [
    {
      area: 'food-safety',
      note: 'States the goal of balanced, healthy nutrition with safe food and clear consumer information when buying food.',
      sourceId: 'de-bmleh',
      statutory: false,
    },
    {
      area: 'crops',
      note: 'States a goal of a strong and sustainable agricultural sector (Landwirtschaft).',
      sourceId: 'de-bmleh',
      statutory: false,
    },
    {
      area: 'forestry',
      note: 'Forestry (Waldwirtschaft) is named within the same ministerial goal as agriculture.',
      sourceId: 'de-bmleh',
      statutory: false,
    },
    {
      area: 'fisheries',
      note: 'Fisheries (Fischereiwirtschaft) is named within the same ministerial goal as agriculture.',
      sourceId: 'de-bmleh',
      statutory: false,
    },
    {
      area: 'livestock',
      note: 'States a commitment to future-proof animal husbandry (zukunftsfeste Tierhaltung).',
      sourceId: 'de-bmleh',
      statutory: false,
    },
    {
      area: 'rural-development',
      note: 'States a commitment to prospects for Germany’s many rural regions.',
      sourceId: 'de-bmleh',
      statutory: false,
    },
  ],
  sourceReferences: ['de-bmleh'],
  verification: [
    {
      url: 'https://www.bmleh.de/DE/ministerium/ministerium_node.html',
      sourceId: 'de-bmleh',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Ministry page resolved with HTTP 200 and names the body as “Bundesministerium für Landwirtschaft, Ernährung und Heimat (BMLEH)”, setting out food safety, agriculture, forestry, fisheries, animal husbandry, rural regions and world food security as its goals. The former bmel.de domain redirects to bmleh.de.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'The responsibilities recorded here are the ministry’s own statement of its goals; they are not a statement of statutory competence, which is set out in German law rather than on this page.',
    'Germany is federal: substantial agricultural administration sits with the Länder and is not described by this record.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
  seo: {
    description:
      'BMLEH is Germany’s federal ministry for agriculture, food and rural affairs. Verified official website, stated remit, and the BMEL rename.',
  },
};
