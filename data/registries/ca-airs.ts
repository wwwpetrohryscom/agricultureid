import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const caAirs: AgriculturalRegistryEntry = {
  id: 'ca-airs',
  slug: 'ca-airs',
  officialName: 'Automated Import Reference System (AIRS)',
  shortName: 'AIRS',
  registryType: 'borderControlSystem',
  countryCode: 'CAN',
  jurisdictionName: 'Canada',
  responsibleAuthorityIds: ['can-cfia'],
  officialUrl:
    'https://airs-sari.inspection.gc.ca/airs_external/english/decisions-eng.aspx',
  searchUrl:
    'https://airs-sari.inspection.gc.ca/airs_external/english/decisions-eng.aspx',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  apiAvailable: false,
  scope: [
    'Import requirements for food, plants and animals entering Canada, by tariff classification',
    'The documents, permits and inspections a classification attracts',
    'Requirements that vary by origin, end use and product form',
  ],
  coverageDescription:
    'Answers are keyed to the Harmonized System classification of the goods together with origin and end use. A requirement returned for one classification does not carry to another.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-ca-airs'],
  verification: [
    {
      url: 'https://airs-sari.inspection.gc.ca/airs_external/english/decisions-eng.aspx',
      sourceId: 'reg-ca-airs',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded on 2026-08-27; it resolved with HTTP 200 under the title “Automated Import Reference System: Import Requirements”.',
    },
  ],
  limitations: [
    'Requirements are returned per tariff classification, origin and end use. None of those answers is restated here.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
