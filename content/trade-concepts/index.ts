import type { TradeConceptContent } from '@/types/content';
import { billOfLading } from './bill-of-lading';
import { certificateOfOrigin } from './certificate-of-origin';
import { cifDeliveryTerm } from './cif-delivery-term';
import { commercialInvoice } from './commercial-invoice';
import { countryOfOriginAndProvenance } from './country-of-origin-and-provenance';
import { customsClearance } from './customs-clearance';
import { customsDeclaration } from './customs-declaration';
import { customsValuation } from './customs-valuation';
import { ddpDeliveryTerm } from './ddp-delivery-term';
import { documentaryCollection } from './documentary-collection';
import { exportLicence } from './export-licence';
import { exwDeliveryTerm } from './exw-delivery-term';
import { fcaDeliveryTerm } from './fca-delivery-term';
import { fobDeliveryTerm } from './fob-delivery-term';
import { freeTradeZone } from './free-trade-zone';
import { harmonizedSystemClassification } from './harmonized-system-classification';
import { hsCodeVersioning } from './hs-code-versioning';
import { importPermit } from './import-permit';
import { incotermsRules } from './incoterms-rules';
import { letterOfCredit } from './letter-of-credit';
import { mirrorStatistics } from './mirror-statistics';
import { nonTariffMeasure } from './non-tariff-measure';
import { packingList } from './packing-list';
import { phytosanitaryCertificate } from './phytosanitary-certificate';
import { preferentialTradeAgreement } from './preferential-trade-agreement';
import { reExportAndTransit } from './re-export-and-transit';
import { rulesOfOrigin } from './rules-of-origin';
import { sanitaryCertificate } from './sanitary-certificate';
import { tariffRateQuota } from './tariff-rate-quota';
import { tariffsAndDuties } from './tariffs-and-duties';
import { tradeFlowDirection } from './trade-flow-direction';
import { transhipment } from './transhipment';

export const tradeConcepts: TradeConceptContent[] = [
  billOfLading,
  certificateOfOrigin,
  cifDeliveryTerm,
  commercialInvoice,
  countryOfOriginAndProvenance,
  customsClearance,
  customsDeclaration,
  customsValuation,
  ddpDeliveryTerm,
  documentaryCollection,
  exportLicence,
  exwDeliveryTerm,
  fcaDeliveryTerm,
  fobDeliveryTerm,
  freeTradeZone,
  harmonizedSystemClassification,
  hsCodeVersioning,
  importPermit,
  incotermsRules,
  letterOfCredit,
  mirrorStatistics,
  nonTariffMeasure,
  packingList,
  phytosanitaryCertificate,
  preferentialTradeAgreement,
  reExportAndTransit,
  rulesOfOrigin,
  sanitaryCertificate,
  tariffRateQuota,
  tariffsAndDuties,
  tradeFlowDirection,
  transhipment,
];
