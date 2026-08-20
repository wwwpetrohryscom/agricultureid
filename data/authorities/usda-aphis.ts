import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-19. Note: the parent usda.gov domain refuses automated
 * access (HTTP 403 from a bot filter, even in a real browser), so the parent
 * department is NOT published from this pass — a bot block is not evidence of
 * anything either way. APHIS's own domain resolves normally and is verified
 * here on its own merits.
 */
export const usdaAphis: AgriculturalAuthorityEntry = {
  id: 'us-usda-aphis',
  slug: 'united-states-aphis',
  officialName: 'Animal and Plant Health Inspection Service',
  shortName: 'APHIS',
  alternativeNames: ['APHIS', 'USDA APHIS'],
  authorityType: 'plantHealthAuthority',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.aphis.usda.gov',
  contactPageUrl: 'https://www.aphis.usda.gov/contact-us',
  summary:
    'The agency of the United States Department of Agriculture responsible for protecting the health and value of American agricultural and natural resources. Its published work is organised around animals, plants, trade and travellers, covering both animal health and plant health functions.',
  responsibilities: [
    {
      area: 'plant-health',
      note: 'Maintains plant health as one of its two core programme areas; the agency states it protects the health and value of America’s agricultural and natural resources.',
      sourceId: 'usda-aphis',
      statutory: true,
    },
    {
      area: 'animal-health',
      note: 'Maintains animal health as one of its two core programme areas.',
      sourceId: 'usda-aphis',
      statutory: true,
    },
    {
      area: 'agricultural-trade',
      note: 'Publishes a dedicated trade programme area covering agricultural import and export.',
      sourceId: 'usda-aphis',
      statutory: true,
    },
    {
      area: 'phytosanitary-inspection',
      note: 'Operates as an inspection service, including requirements applying to travellers bringing agricultural material into the United States.',
      sourceId: 'usda-aphis',
      statutory: true,
    },
  ],
  sourceReferences: ['usda-aphis'],
  verification: [
    {
      url: 'https://www.aphis.usda.gov/about',
      sourceId: 'usda-aphis',
      verifiedAt: '2026-08-19',
      evidenceNote:
        'Official aphis.usda.gov “About APHIS” page resolved with HTTP 200 (last modified 15 May 2026) and states that “APHIS has been protecting the health and value of America’s agricultural and natural resources” for more than 50 years, with site programme areas for Animals, Plants, Trade and Travelers.',
      domainVerification: 'officialSubdomain',
    },
  ],
  limitations: [
    'APHIS is an agency within the United States Department of Agriculture; this record describes the agency, not the parent department.',
    'The specific statutory authorities under which APHIS acts are set out in United States law and are not enumerated here.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-19',
  seo: {
    description:
      'USDA APHIS is the US federal animal and plant health inspection agency. Verified official website, programme areas and limitations.',
  },
};
