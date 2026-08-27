import type { AgriculturalComplianceTopic } from '@/types/compliance';

/**
 * Verified 2026-08-20. Requirements are marked `required` only where the operative
 * legal text was read and is cited; otherwise the encoding is a `verify` action
 * telling the reader which official system to consult.
 */
export const euPlantVarietyMarketing: AgriculturalComplianceTopic = {
  id: 'eu-plant-variety-marketing',
  slug: 'eu-plant-variety-marketing',
  title:
    'Checking whether a plant variety may be marketed in the European Union',
  topicType: 'plantVarieties',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: ['eu-dg-agri'],
  relatedRegistryIds: ['eu-plant-variety-portal', 'cpvo-variety-finder'],
  summary:
    'Marketing of seed and propagating material of EU-regulated agricultural and vegetable species is tied to variety listing. The EU Plant Variety Portal consolidates varieties of EU-regulated species, and the CPVO Variety Finder records variety denominations and Community plant variety rights.',
  requirements: [
    {
      id: 'eu-variety-check',
      title: 'Check whether a variety is listed for EU-regulated species',
      appliesTo: [
        'Anyone checking whether a variety of an EU-regulated species is listed',
      ],
      action: 'verify',
      authorityIds: ['eu-dg-agri'],
      registryIds: ['eu-plant-variety-portal', 'cpvo-variety-finder'],
      officialSourceIds: ['gov-ec-plant-health'],
      mandatoryStatus: 'uncertain',
      note: 'The EU Plant Variety Portal presents varieties of EU-regulated agricultural and vegetable species. Listing follows Member State registration; AgricultureID has verified the portal itself and does not assert the operative marketing condition here.',
    },
  ],
  officialSources: ['gov-ec-plant-health'],
  status: 'current',
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Variety registration is carried out by Member States; the EU portal is a consolidated view rather than the registering body.',
    'AgricultureID provides informational references to official sources and does not replace legal or professional advice.',
  ],
  profileDepth: 'full-profile',
};
