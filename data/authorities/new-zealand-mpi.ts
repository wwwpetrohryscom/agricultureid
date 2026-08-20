import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const nzMpi: AgriculturalAuthorityEntry = {
  id: 'nzl-mpi',
  slug: 'new-zealand-mpi',
  officialName: 'Ministry for Primary Industries',
  shortName: 'MPI',
  localLanguageNames: [{ lang: 'en', name: 'Ministry for Primary Industries' }],
  authorityType: 'ministry',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'NZL',
  jurisdictionName: 'New Zealand',
  authorityStatus: 'active',
  officialWebsite: 'https://www.mpi.govt.nz/',
  summary:
    'New Zealand’s national ministry for the primary industries, covering agriculture together with its associated business units. Its official site publishes biosecurity requirements for bringing goods and animals into New Zealand and for sending them out.',
  responsibilities: [
    {
      area: 'import-export-certification',
      note: 'Publishes the requirements for bringing or sending items and animals into and out of New Zealand as a primary public-facing service.',
      sourceId: 'nz-mpi',
      statutory: true,
    },
    {
      area: 'animal-health',
      note: 'Publishes biosecurity requirements governing the movement of animals across the New Zealand border.',
      sourceId: 'nz-mpi',
      statutory: true,
    },
  ],
  sourceReferences: ['nz-mpi'],
  verification: [
    {
      url: 'https://www.mpi.govt.nz/',
      sourceId: 'nz-mpi',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Ministry for Primary Industries | NZ Government”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'MPI covers primary industries as a whole, including fisheries and forestry; this record does not separate the agricultural share of its statutory powers.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
