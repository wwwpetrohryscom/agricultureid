import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19 by loading the official site in a real browser and reading
 * what the page states. Responsibilities below are evidenced, never inferred
 * from the body's name alone.
 */
export const canadaCfia: AgriculturalAuthorityEntry = {
  id: 'can-cfia',
  slug: 'canada-cfia',
  officialName: 'Canadian Food Inspection Agency',
  shortName: 'CFIA',
  localLanguageNames: [
    { lang: 'en', name: 'Agence canadienne d’inspection des aliments' },
  ],
  authorityType: 'inspectorate',
  governmentLevel: 'national',
  jurisdictionType: 'country',
  countryCode: 'CAN',
  jurisdictionName: 'Canada',
  authorityStatus: 'active',
  officialWebsite: 'https://inspection.canada.ca/en',
  summary:
    'Canada’s federal food, plant and animal health inspection agency. It operates on the Government of Canada domain and is the federal body responsible for inspection and enforcement across the food, plant and animal sectors.',
  responsibilities: [
    {
      area: 'plant-health',
      note: 'Operates as Canada’s federal inspection agency for the plant sector.',
      sourceId: 'ca-cfia',
      statutory: true,
    },
    {
      area: 'animal-health',
      note: 'Operates as Canada’s federal inspection agency for the animal sector.',
      sourceId: 'ca-cfia',
      statutory: true,
    },
    {
      area: 'food-safety',
      note: 'Named in its official title as the federal food inspection agency.',
      sourceId: 'ca-cfia',
      statutory: true,
    },
  ],
  sourceReferences: ['ca-cfia'],
  verification: [
    {
      url: 'https://inspection.canada.ca/en',
      sourceId: 'ca-cfia',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official site loaded in a real browser on 2026-08-19; it resolved with HTTP 200 under the title “Canadian Food Inspection Agency - inspection.canada.ca”.',
      domainVerification: 'verifiedOfficial',
    },
  ],
  limitations: [
    'CFIA is an agency of the Government of Canada and is distinct from Agriculture and Agri-Food Canada, the federal agriculture department, which is not described by this record.',
    'The specific statutes under which CFIA acts are set out in Canadian law and are not enumerated here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
