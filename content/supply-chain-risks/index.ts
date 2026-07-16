import type { SupplyChainRiskContent } from '@/types/content';
import { biosecurityIncursion } from './biosecurity-incursion';
import { coldChainFailure } from './cold-chain-failure';
import { contaminationInTransit } from './contamination-in-transit';
import { counterpartyDefault } from './counterparty-default';
import { currencyVolatility } from './currency-volatility';
import { documentationError } from './documentation-error';
import { exportRestriction } from './export-restriction';
import { fraudAndAdulteration } from './fraud-and-adulteration';
import { freightRateVolatility } from './freight-rate-volatility';
import { harvestShortfall } from './harvest-shortfall';
import { importBan } from './import-ban';
import { informationAsymmetry } from './information-asymmetry';
import { infrastructureFailure } from './infrastructure-failure';
import { inlandLogisticsBottleneck } from './inland-logistics-bottleneck';
import { labourDisruption } from './labour-disruption';
import { mycotoxinRejection } from './mycotoxin-rejection';
import { phytosanitaryRejection } from './phytosanitary-rejection';
import { portCongestion } from './port-congestion';
import { residueLimitExceedanceRejection } from './residue-limit-exceedance-rejection';
import { traceabilityFailure } from './traceability-failure';

export const supplyChainRisks: SupplyChainRiskContent[] = [
  biosecurityIncursion,
  coldChainFailure,
  contaminationInTransit,
  counterpartyDefault,
  currencyVolatility,
  documentationError,
  exportRestriction,
  fraudAndAdulteration,
  freightRateVolatility,
  harvestShortfall,
  importBan,
  informationAsymmetry,
  infrastructureFailure,
  inlandLogisticsBottleneck,
  labourDisruption,
  mycotoxinRejection,
  phytosanitaryRejection,
  portCongestion,
  residueLimitExceedanceRejection,
  traceabilityFailure,
];
