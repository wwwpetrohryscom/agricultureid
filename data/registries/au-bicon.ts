import type { AgriculturalRegistryEntry } from '@/types/registry';

/** Verified 2026-08-27 by loading the system in a real browser. */
export const auBicon: AgriculturalRegistryEntry = {
  id: 'au-bicon',
  slug: 'au-bicon',
  officialName: 'Biosecurity Import Conditions system (BICON)',
  shortName: 'BICON',
  registryType: 'borderControlSystem',
  countryCode: 'AUS',
  jurisdictionName: 'Australia',
  responsibleAuthorityIds: [],
  officialUrl: 'https://bicon.agriculture.gov.au/',
  searchUrl: 'https://bicon.agriculture.gov.au/BiconWeb4.0',
  accessType: 'public-search',
  searchable: true,
  downloadable: false,
  apiAvailable: false,
  scope: [
    'Import conditions for biosecurity-regulated goods entering Australia',
    'Whether an import permit is required, and the conditions attached to one',
    'Case-by-case conditions resolved by answering questions about the goods, their origin and their intended use',
  ],
  coverageDescription:
    'A decision tree, not a table. The conditions returned depend on the commodity, its origin, its end use and its treatment, which is why this record points at the system rather than restating an answer from it.',
  updateFrequency: 'unknown',
  status: 'active',
  sourceReferences: ['reg-au-bicon'],
  verification: [
    {
      url: 'https://bicon.agriculture.gov.au/',
      sourceId: 'reg-au-bicon',
      verifiedAt: '2026-08-27',
      evidenceNote:
        'Loaded in a real browser on 2026-08-27 under the title “BICON - Australian Biosecurity Import Conditions”, heading “Welcome to BICON”. It refuses automated clients with HTTP 403; the classification here comes from the browser session, not the refusal.',
    },
  ],
  limitations: [
    'The system answers for a specific consignment after a series of questions. No answer it gives is reproduced here.',
    'Automated clients are refused. The record was verified interactively.',
  ],
  profileDepth: 'directory-record',
  lastVerifiedAt: '2026-08-27',
};
