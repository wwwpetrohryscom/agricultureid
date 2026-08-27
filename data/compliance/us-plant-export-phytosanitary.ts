import type { AgriculturalComplianceTopic } from '@/types/compliance';

/**
 * Verified 2026-08-20. Requirements are marked `required` only where the operative
 * legal text was read and is cited; otherwise the encoding is a `verify` action
 * telling the reader which official system to consult.
 */
export const usPlantExportPhytosanitary: AgriculturalComplianceTopic = {
  id: 'us-plant-export-phytosanitary',
  slug: 'us-plant-export-phytosanitary',
  title: 'Phytosanitary certification for plant exports from the United States',
  topicType: 'phytosanitary',
  countryCode: 'USA',
  jurisdictionName: 'United States',
  responsibleAuthorityIds: ['us-usda-aphis'],
  relatedRegistryIds: ['usda-aphis-pcit'],
  summary:
    'Exports of plants and plant products from the United States may require a phytosanitary certificate issued under the authority of USDA APHIS. APHIS operates the Phytosanitary Certificate Issuance and Tracking (PCIT) system through which certificates are requested and tracked.',
  requirements: [
    {
      id: 'us-phyto-cert',
      title:
        'Obtain a phytosanitary certificate where the destination requires one',
      appliesTo: [
        'Exporters of plants and plant products from the United States',
      ],
      action: 'obtain-certificate',
      authorityIds: ['us-usda-aphis'],
      registryIds: ['usda-aphis-pcit'],
      officialSourceIds: ['gov-aphis-plant-exports'],
      mandatoryStatus: 'conditional',
      note: 'APHIS publishes phytosanitary certificates for export and re-export among its plant-export services, and operates PCIT as the issuance and tracking system. Whether a certificate is needed depends on the requirements of the destination country.',
      conditions: [
        'Requirements are set by the importing country; a certificate is not universally required for every consignment.',
      ],
    },
  ],
  officialSources: ['gov-aphis-plant-exports'],
  status: 'current',
  lastVerifiedAt: '2026-08-20',
  limitations: [
    'Whether a phytosanitary certificate is required, and what it must attest, is determined by the importing country’s requirements rather than by the United States.',
    'PCIT requires an authenticated USDA account and is an operational system for registered exporters, not a public lookup.',
    'AgricultureID provides informational references to official sources and does not replace legal or professional advice.',
  ],
  profileDepth: 'full-profile',
};
