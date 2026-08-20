import type { AgriculturalAuthorityEntry } from '@/types/authority';

/** Verified 2026-08-19. Supranational: no single countryCode applies. */
export const ecDgAgri: AgriculturalAuthorityEntry = {
  id: 'eu-dg-agri',
  slug: 'european-commission-agriculture-rural-development',
  officialName:
    'European Commission — Directorate-General for Agriculture and Rural Development',
  shortName: 'DG AGRI',
  alternativeNames: ['DG AGRI', 'Agriculture and rural development'],
  authorityType: 'administration',
  governmentLevel: 'supranational',
  jurisdictionType: 'supranational',
  jurisdictionName: 'European Union',
  authorityStatus: 'active',
  officialWebsite: 'https://agriculture.ec.europa.eu',
  summary:
    'The European Commission department responsible for agriculture and rural development in the European Union. It administers the Common Agricultural Policy (CAP), publishing its rules, its performance monitoring, and country-level implementation, and describes the CAP as supporting EU farmers and Europe’s food security.',
  responsibilities: [
    {
      area: 'farm-policy',
      note: 'Administers and publishes the Common Agricultural Policy, including its origins, functions, rules and performance monitoring for the CAP 2023–27 period.',
      sourceId: 'ec-agri',
      statutory: true,
    },
    {
      area: 'agricultural-subsidies',
      note: 'The CAP it administers is described as supporting EU farmers and Europe’s food security, and is published with country-level implementation (“CAP in my country”).',
      sourceId: 'ec-agri',
      statutory: true,
    },
    {
      area: 'rural-development',
      note: 'Rural development is a named half of the directorate-general’s remit.',
      sourceId: 'ec-agri',
      statutory: true,
    },
    {
      area: 'agricultural-statistics',
      note: 'Publishes a dedicated data and analysis area for agricultural markets and CAP performance.',
      sourceId: 'ec-agri',
      statutory: false,
    },
  ],
  sourceReferences: ['ec-agri'],
  verification: [
    {
      url: 'https://agriculture.ec.europa.eu/common-agricultural-policy/cap-overview_en',
      sourceId: 'ec-agri',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official europa.eu site resolved with HTTP 200 under “Agriculture and rural development”, describing “the origins, functions and rules of the CAP, how its performance is monitored and how the CAP 2023-27 is shaping the future of the EU”, with sections for farming, CAP in my country, international, and data and analysis.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'The CAP is implemented by designated paying agencies in each Member State; this record does not describe those national bodies.',
    'This is a European Commission directorate-general rather than a national ministry, and it does not replace Member State agricultural authorities.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
  seo: {
    description:
      'DG AGRI is the European Commission department for agriculture and rural development, administering the CAP. Verified official website and remit.',
  },
};
