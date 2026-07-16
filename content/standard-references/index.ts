import type { StandardReferenceContent } from '@/types/content';
import { accreditationAndCertificationBodies } from './accreditation-and-certification-bodies';
import { chainOfCustodyCertification } from './chain-of-custody-certification';
import { codexAlimentarius } from './codex-alimentarius';
import { codexFoodHygienePrinciples } from './codex-food-hygiene-principles';
import { codexMaximumResidueLimits } from './codex-maximum-residue-limits';
import { euOrganicRegulation } from './eu-organic-regulation';
import { fairtradeStandards } from './fairtrade-standards';
import { globalgapIntegratedFarmAssurance } from './globalgap-integrated-farm-assurance';
import { gs1TraceabilityStandards } from './gs1-traceability-standards';
import { haccp } from './haccp';
import { ifoamFamilyOfStandards } from './ifoam-family-of-standards';
import { ippcPhytosanitaryStandards } from './ippc-phytosanitary-standards';
import { isealCodesOfGoodPractice } from './iseal-codes-of-good-practice';
import { iso22000FoodSafetyManagement } from './iso-22000-food-safety-management';
import { iso9001QualityManagement } from './iso-9001-quality-management';
import { ispm15WoodPackaging } from './ispm-15-wood-packaging';
import { organicCertification } from './organic-certification';
import { phytosanitaryCertificationSystem } from './phytosanitary-certification-system';
import { rainforestAllianceCertification } from './rainforest-alliance-certification';
import { thirdPartyAudit } from './third-party-audit';
import { uneceFreshProduceStandards } from './unece-fresh-produce-standards';
import { usdaNationalOrganicProgram } from './usda-national-organic-program';
import { woahTerrestrialAnimalHealthCode } from './woah-terrestrial-animal-health-code';
import { wtoSpsAgreement } from './wto-sps-agreement';
import { wtoTbtAgreement } from './wto-tbt-agreement';

export const standardReferences: StandardReferenceContent[] = [
  accreditationAndCertificationBodies,
  chainOfCustodyCertification,
  codexAlimentarius,
  codexFoodHygienePrinciples,
  codexMaximumResidueLimits,
  euOrganicRegulation,
  fairtradeStandards,
  globalgapIntegratedFarmAssurance,
  gs1TraceabilityStandards,
  haccp,
  ifoamFamilyOfStandards,
  ippcPhytosanitaryStandards,
  isealCodesOfGoodPractice,
  iso22000FoodSafetyManagement,
  iso9001QualityManagement,
  ispm15WoodPackaging,
  organicCertification,
  phytosanitaryCertificationSystem,
  rainforestAllianceCertification,
  thirdPartyAudit,
  uneceFreshProduceStandards,
  usdaNationalOrganicProgram,
  woahTerrestrialAnimalHealthCode,
  wtoSpsAgreement,
  wtoTbtAgreement,
];
