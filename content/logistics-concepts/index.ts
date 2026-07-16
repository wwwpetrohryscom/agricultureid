import type { LogisticsConceptContent } from '@/types/content';
import { airFreightOfPerishables } from './air-freight-of-perishables';
import { bondedWarehouse } from './bonded-warehouse';
import { breakBulkHandling } from './break-bulk-handling';
import { bulkLoadingAndDischarge } from './bulk-loading-and-discharge';
import { bulkSeaFreight } from './bulk-sea-freight';
import { coldChainIntegrity } from './cold-chain-integrity';
import { coldStoreFacility } from './cold-store-facility';
import { containerShipping } from './container-shipping';
import { containerStuffing } from './container-stuffing';
import { controlledAtmosphereTransport } from './controlled-atmosphere-transport';
import { draughtSurvey } from './draught-survey';
import { flexibleIntermediateBulkContainers } from './flexible-intermediate-bulk-containers';
import { fumigationInTransit } from './fumigation-in-transit';
import { grainTerminal } from './grain-terminal';
import { inlandWaterwayTransport } from './inland-waterway-transport';
import { multimodalTransport } from './multimodal-transport';
import { palletisation } from './palletisation';
import { portOfEntryInspection } from './port-of-entry-inspection';
import { preShipmentInspection } from './pre-shipment-inspection';
import { railFreightOfAgriculturalGoods } from './rail-freight-of-agricultural-goods';
import { reeferContainerTransport } from './reefer-container-transport';
import { roadHaulageOfAgriculturalGoods } from './road-haulage-of-agricultural-goods';
import { temperatureMonitoringInTransit } from './temperature-monitoring-in-transit';

export const logisticsConcepts: LogisticsConceptContent[] = [
  airFreightOfPerishables,
  bondedWarehouse,
  breakBulkHandling,
  bulkLoadingAndDischarge,
  bulkSeaFreight,
  coldChainIntegrity,
  coldStoreFacility,
  containerShipping,
  containerStuffing,
  controlledAtmosphereTransport,
  draughtSurvey,
  flexibleIntermediateBulkContainers,
  fumigationInTransit,
  grainTerminal,
  inlandWaterwayTransport,
  multimodalTransport,
  palletisation,
  portOfEntryInspection,
  preShipmentInspection,
  railFreightOfAgriculturalGoods,
  reeferContainerTransport,
  roadHaulageOfAgriculturalGoods,
  temperatureMonitoringInTransit,
];
