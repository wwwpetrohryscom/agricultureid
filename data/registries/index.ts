import type { AgriculturalRegistryEntry } from '@/types/registry';

/**
 * The official agricultural registries registry.
 *
 * Every entry was verified by loading the system itself in a real browser.
 * One logical public system = one record: search interfaces, downloads and APIs
 * are fields, never separate entries.
 */
import { euPesticidesDatabase } from './eu-pesticides-database';
import { euPlantVarietyPortal } from './eu-plant-variety-portal';
import { cpvoVarietyFinder } from './cpvo-variety-finder';
import { eurostatAgriculture } from './eurostat-agriculture';
import { euTracesNt } from './eu-traces-nt';
import { eppoGlobalDatabase } from './eppo-global-database';
import { ippcPestReports } from './ippc-pest-reports';
import { woahWahis } from './woah-wahis';
import { faostat } from './faostat';
import { usdaNassQuickstats } from './usda-nass-quickstats';
import { usdaAgCensus } from './usda-ag-census';
import { usdaErsDataProducts } from './usda-ers-data-products';
import { usdaOrganicIntegrity } from './usda-organic-integrity';
import { epaPpls } from './epa-ppls';
import { usdaPlants } from './usda-plants';
import { usdaGrinGlobal } from './usda-grin-global';
import { usdaAphisPcit } from './usda-aphis-pcit';
import { hsePesticidesRegister } from './hse-pesticides-register';
import { healthCanadaPesticideLabelSearch } from './health-canada-pesticide-label-search';
import { cfiaVarietyRegistration } from './cfia-variety-registration';
import { ukVarietyLists } from './uk-variety-lists';
import { usdaPvpo } from './usda-pvpo';
import { ipAustraliaPbr } from './ip-australia-pbr';
import { apvmaPubcris } from './apvma-pubcris';
import { ansesEphy } from './anses-ephy';
import { gevesCatalogueOfficiel } from './geves-catalogue-officiel';
import { bundessortenamt } from './bundessortenamt';
import { ctgbToelatingen } from './ctgb-toelatingen';
import { mapaRegistroFitosanitarios } from './mapa-registro-fitosanitarios';

export const REGISTRIES: AgriculturalRegistryEntry[] = [
  euPesticidesDatabase,
  euPlantVarietyPortal,
  cpvoVarietyFinder,
  eurostatAgriculture,
  euTracesNt,
  eppoGlobalDatabase,
  ippcPestReports,
  woahWahis,
  faostat,
  usdaNassQuickstats,
  usdaAgCensus,
  usdaErsDataProducts,
  usdaOrganicIntegrity,
  epaPpls,
  usdaPlants,
  usdaGrinGlobal,
  usdaAphisPcit,
  hsePesticidesRegister,
  healthCanadaPesticideLabelSearch,
  cfiaVarietyRegistration,
  ukVarietyLists,
  usdaPvpo,
  ipAustraliaPbr,
  apvmaPubcris,
  ansesEphy,
  gevesCatalogueOfficiel,
  bundessortenamt,
  ctgbToelatingen,
  mapaRegistroFitosanitarios,
];
