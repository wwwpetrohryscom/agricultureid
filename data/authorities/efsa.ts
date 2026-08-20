import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * DIRECTORY RECORD. Identity and official domain were verified on 2026-08-19,
 * but the body's own statement of its remit was not read during that pass, so
 * nothing beyond the single evidenced item below is asserted and this entry
 * intentionally does NOT receive an indexable detail page. Promoting it to a
 * full profile requires reading its published remit — never restating its name.
 */
export const efsa: AgriculturalAuthorityEntry = {
  id: 'eu-efsa',
  slug: 'european-food-safety-authority',
  officialName: 'European Food Safety Authority',
  shortName: 'EFSA',
  localLanguageNames: [{ lang: 'en', name: 'European Food Safety Authority' }],
  authorityType: 'agency',
  governmentLevel: 'supranational',
  jurisdictionType: 'supranational',
  jurisdictionName: 'European Union',
  authorityStatus: 'active',
  officialWebsite: 'https://www.efsa.europa.eu',
  summary:
    "The European Union's agency for scientific risk assessment on food and feed safety. It is a scientific advisory body rather than a regulator.",
  responsibilities: [
    {
      area: 'food-safety',
      note: 'Publishes as the European Union’s food-safety science agency under the strapline “Science, safe food, sustainability”.',
      sourceId: 'efsa',
      statutory: false,
    },
  ],
  sourceReferences: ['efsa'],
  verification: [
    {
      url: 'https://www.efsa.europa.eu',
      sourceId: 'efsa',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official europa.eu site resolved with HTTP 200 under the title “EFSA | Science, safe food, sustainability”.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'This is a verified directory record. The body’s detailed responsibilities, services and registries were not read during the verification pass and are therefore not stated here.',
  ],
  profileDepth: 'directory-record',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
};
