import type { AgriculturalComplianceTopic } from '@/types/compliance';

/**
 * Verified 2026-08-20. Requirements are marked `required` only where the operative
 * legal text was read and is cited; otherwise the encoding is a `verify` action
 * telling the reader which official system to consult.
 */
export const ukPesticideAuthorisationCheck: AgriculturalComplianceTopic = {
  id: 'uk-pesticide-authorisation-check',
  slug: 'uk-pesticide-authorisation-check',
  title: 'Checking whether a pesticide is authorised in the United Kingdom',
  topicType: 'pesticides',
  countryCode: 'GBR',
  jurisdictionName: 'United Kingdom',
  responsibleAuthorityIds: ['gb-defra'],
  relatedRegistryIds: ['hse-pesticides-register'],
  summary:
    'Plant protection product authorisation in the United Kingdom is administered through the Health and Safety Executive, which publishes the Pesticides Register of Authorised Plant Protection Products. That register is the place to confirm whether a specific product is currently authorised.',
  requirements: [
    {
      id: 'uk-ppp-check',
      title:
        'Confirm a product’s authorisation status in the official register',
      appliesTo: [
        'Anyone checking whether a plant protection product may be used in the UK',
      ],
      action: 'verify',
      authorityIds: ['gb-defra'],
      registryIds: ['hse-pesticides-register'],
      officialSourceIds: ['gov-hse-pesticides'],
      mandatoryStatus: 'uncertain',
      note: 'HSE publishes the Pesticides Register of Authorised Plant Protection Products as the official record of UK authorisations. AgricultureID has verified the register itself; the operative statutory provision has not been read, so no legal obligation is asserted here.',
    },
  ],
  officialSources: ['gov-hse-pesticides'],
  status: 'current',
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'This page identifies the responsible body and the official register; it does not state the statutory requirement, which is set out in United Kingdom law.',
    'A product label remains legally binding where official guidance says so. AgricultureID provides informational references to official sources and does not replace legal or professional advice.',
  ],
  profileDepth: 'full-profile',
};
