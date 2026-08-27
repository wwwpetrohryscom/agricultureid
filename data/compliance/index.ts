import type { AgriculturalComplianceTopic } from '@/types/compliance';

/**
 * Agricultural compliance topics.
 *
 * Narrowly scoped navigation over official material. A requirement is marked
 * `required` only where its operative legal text has been read and cited.
 */
import { euPesticideAuthorisation } from './eu-pesticide-authorisation';
import { ukPesticideAuthorisationCheck } from './uk-pesticide-authorisation-check';
import { usPesticideRegistrationCheck } from './us-pesticide-registration-check';
import { usPlantExportPhytosanitary } from './us-plant-export-phytosanitary';
import { euPlantVarietyMarketing } from './eu-plant-variety-marketing';

export const COMPLIANCE_TOPICS: AgriculturalComplianceTopic[] = [
  euPesticideAuthorisation,
  ukPesticideAuthorisationCheck,
  usPesticideRegistrationCheck,
  usPlantExportPhytosanitary,
  euPlantVarietyMarketing,
];
