import type { AgriculturalComplianceTopic } from '@/types/compliance';

/**
 * Verified 2026-08-20. Requirements are marked `required` only where the operative
 * legal text was read and is cited; otherwise the encoding is a `verify` action
 * telling the reader which official system to consult.
 */
export const euPesticideAuthorisation: AgriculturalComplianceTopic = {
  id: 'eu-pesticide-authorisation',
  slug: 'eu-pesticide-authorisation',
  title: 'Pesticide product authorisation in the European Union',
  topicType: 'pesticides',
  supranationalJurisdiction: 'European Union',
  jurisdictionName: 'European Union',
  responsibleAuthorityIds: ['eu-dg-agri'],
  relatedRegistryIds: ['eu-pesticides-database'],
  summary:
    'In the European Union a plant protection product must be authorised in the Member State where it is placed on the market or used. Approval of the active substance happens at EU level; authorisation of the finished product is granted nationally. The EU Pesticides Database records active-substance approval status and authorisations reported by Member States.',
  requirements: [
    {
      id: 'eu-ppp-authorisation',
      title:
        'A plant protection product must be authorised in the Member State concerned',
      appliesTo: [
        'Plant protection products placed on the EU market',
        'Use of plant protection products in a Member State',
      ],
      action: 'use-approved-product',
      authorityIds: ['eu-dg-agri'],
      registryIds: ['eu-pesticides-database'],
      officialSourceIds: ['law-eu-1107-2009'],
      mandatoryStatus: 'required',
      note: 'Regulation (EC) No 1107/2009, Article 28(1) provides that a plant protection product “shall not be placed on the market or used unless it has been authorised in the Member State concerned in accordance with this Regulation”.',
      conditions: [
        'Article 28(2) sets out derogations, including products containing exclusively basic substances, use for research or development under Article 54, and production, storage or movement of a product intended for use in another Member State where it is authorised there.',
      ],
    },
    {
      id: 'eu-ppp-check-status',
      title: 'Check the current status of an active substance or product',
      appliesTo: [
        'Anyone verifying whether a substance is approved or a product authorised',
      ],
      action: 'verify',
      authorityIds: ['eu-dg-agri'],
      registryIds: ['eu-pesticides-database'],
      officialSourceIds: ['law-eu-1107-2009'],
      mandatoryStatus: 'uncertain',
      note: 'The EU Pesticides Database is the Commission’s record of active-substance approval and of authorisations reported by Member States. Product-level authorisation is a national decision, so the national register of the Member State concerned is the authoritative source for a specific product.',
    },
  ],
  officialSources: ['law-eu-1107-2009'],
  status: 'current',
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Authorisation of a specific product is granted by an individual Member State; this page describes the EU framework and does not state the position for any particular product or country.',
    'AgricultureID provides informational references to official sources and does not replace legal or professional advice.',
  ],
  profileDepth: 'full-profile',
};
