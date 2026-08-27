import type { AgriculturalAuthorityEntry } from '@/types/authority';

/**
 * Verified 2026-08-20 against epa.gov. Added in Wave 6 because a compliance
 * topic needed the correct registering body: pesticide product registration in
 * the United States is an EPA function, and attributing it to a USDA agency
 * would have been wrong.
 */
export const usEpaOpp: AgriculturalAuthorityEntry = {
  id: 'us-epa-pesticides',
  slug: 'united-states-epa-pesticide-registration',
  officialName:
    'United States Environmental Protection Agency — Pesticide Registration',
  shortName: 'EPA',
  authorityType: 'agency',
  governmentLevel: 'federal',
  jurisdictionType: 'country',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  authorityStatus: 'active',
  officialWebsite: 'https://www.epa.gov/pesticide-registration',
  summary:
    'The United States federal agency responsible for registering pesticide products. EPA publishes guidance on pesticide registration and operates the Pesticide Product and Label System recording registered products and their approved labels.',
  responsibilities: [
    {
      area: 'pesticides',
      note: 'Publishes a dedicated pesticide registration programme area describing federal registration of pesticide products.',
      sourceId: 'gov-epa-pesticide-registration',
      statutory: true,
    },
    {
      area: 'agricultural-research',
      note: 'Publishes the evaluation material underpinning pesticide registration decisions.',
      sourceId: 'gov-epa-pesticide-registration',
      statutory: false,
    },
  ],
  sourceReferences: ['gov-epa-pesticide-registration'],
  verification: [
    {
      url: 'https://www.epa.gov/pesticide-registration/about-pesticide-registration',
      sourceId: 'gov-epa-pesticide-registration',
      verifiedAt: '2026-08-20',
      evidenceNote:
        'Official epa.gov page resolved with HTTP 200 under the title “About Pesticide Registration”, published within the EPA Pesticide Registration programme area.',
      domainVerification: 'officialGovernmentPortal',
    },
  ],
  limitations: [
    'This record covers EPA’s pesticide registration function; EPA’s wider environmental remit is outside AgricultureID’s scope and is not described here.',
    'Individual states may impose registration or use requirements in addition to federal registration.',
  ],
  profileDepth: 'full-profile',
  candidateStatus: 'accepted',
  reviewedAt: '2026-08-20',
};
