import type { AgriculturalComplianceTopic } from '@/types/compliance';

/**
 * Verified 2026-08-20. Requirements are marked `required` only where the operative
 * legal text was read and is cited; otherwise the encoding is a `verify` action
 * telling the reader which official system to consult.
 */
export const usPesticideRegistrationCheck: AgriculturalComplianceTopic = {
  id: 'us-pesticide-registration-check',
  slug: 'us-pesticide-registration-check',
  title:
    'Checking whether a pesticide product is registered in the United States',
  topicType: 'pesticides',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['us-epa-pesticides'],
  relatedRegistryIds: ['epa-ppls'],
  summary:
    'Pesticide products sold or distributed in the United States are registered federally by the Environmental Protection Agency, which publishes the Pesticide Product and Label System (PPLS) containing registered products and their approved labels.',
  requirements: [
    {
      id: 'us-ppls-check',
      title: 'Confirm federal registration and read the approved label',
      appliesTo: [
        'Anyone checking whether a pesticide product is federally registered in the US',
      ],
      action: 'verify',
      authorityIds: ['us-epa-pesticides'],
      registryIds: ['epa-ppls'],
      officialSourceIds: ['gov-epa-pesticide-registration'],
      mandatoryStatus: 'uncertain',
      note: 'EPA publishes PPLS as the official record of federally registered pesticide products and approved labels. AgricultureID has verified the system itself; the operative statutory provision has not been read, so no legal obligation is asserted here.',
    },
  ],
  officialSources: ['gov-epa-pesticide-registration'],
  status: 'current',
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Individual states may impose registration or use requirements in addition to federal registration; this page does not describe state-level requirements.',
    'AgricultureID provides informational references to official sources and does not replace legal or professional advice.',
  ],
  profileDepth: 'full-profile',
};
