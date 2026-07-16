import type { PostHarvestContent } from '@/types/content';
import { aeratedStorage } from './aerated-storage';
import { ambientWarehouseStorage } from './ambient-warehouse-storage';
import { bagStackStorage } from './bag-stack-storage';
import { batchDrying } from './batch-drying';
import { bulkBagFibc } from './bulk-bag-fibc';
import { bulkBinProduceStorage } from './bulk-bin-produce-storage';
import { chilledGrainStorage } from './chilled-grain-storage';
import { clampStorage } from './clamp-storage';
import { coldChain } from './cold-chain';
import { coldStorage } from './cold-storage';
import { commercialGrainSilo } from './commercial-grain-silo';
import { continuousFlowDrying } from './continuous-flow-drying';
import { controlledAtmosphereStorage } from './controlled-atmosphere-storage';
import { curing } from './curing';
import { degreening } from './degreening';
import { dehullingShelling } from './dehulling-shelling';
import { destoning } from './destoning';
import { ethyleneManagement } from './ethylene-management';
import { farmGrainBin } from './farm-grain-bin';
import { fibreboardCarton } from './fibreboard-carton';
import { fieldHeatRemoval } from './field-heat-removal';
import { flatStorageWarehouse } from './flat-storage-warehouse';
import { fruitRipening } from './fruit-ripening';
import { grainCleaning } from './grain-cleaning';
import { grainDrying } from './grain-drying';
import { grainStorage } from './grain-storage';
import { harvestMaturityAssessment } from './harvest-maturity-assessment';
import { hermeticStorage } from './hermetic-storage';
import { juteSack } from './jute-sack';
import { linerAndWrap } from './liner-and-wrap';
import { meshBag } from './mesh-bag';
import { modifiedAtmospherePackaging } from './modified-atmosphere-packaging';
import { modifiedAtmosphereStorage } from './modified-atmosphere-storage';
import { moistureContentAndEquilibrium } from './moisture-content-and-equilibrium';
import { naturalAirDrying } from './natural-air-drying';
import { onionAndGarlicCuring } from './onion-and-garlic-curing';
import { onionStore } from './onion-store';
import { packingAndPackaging } from './packing-and-packaging';
import { palletisation } from './palletisation';
import { plasticCrate } from './plastic-crate';
import { postharvestFoodLoss } from './postharvest-food-loss';
import { potatoStorage } from './potato-storage';
import { precooling } from './precooling';
import { punnetClamshell } from './punnet-clamshell';
import { refrigeratedContainer } from './refrigerated-container';
import { refrigeratedWarehouse } from './refrigerated-warehouse';
import { rootCellar } from './root-cellar';
import { shadeDrying } from './shade-drying';
import { siloBag } from './silo-bag';
import { sortingAndGrading } from './sorting-and-grading';
import { storageMouldsAndMycotoxins } from './storage-moulds-and-mycotoxins';
import { storedGrainInsects } from './stored-grain-insects';
import { sunDrying } from './sun-drying';
import { threshingAndShelling } from './threshing-and-shelling';
import { washingAndSanitising } from './washing-and-sanitising';
import { waxing } from './waxing';
import { winnowing } from './winnowing';
import { woodenCrate } from './wooden-crate';
import { wovenPolypropyleneSack } from './woven-polypropylene-sack';

export const postHarvest: PostHarvestContent[] = [
  aeratedStorage,
  ambientWarehouseStorage,
  bagStackStorage,
  batchDrying,
  bulkBagFibc,
  bulkBinProduceStorage,
  chilledGrainStorage,
  clampStorage,
  coldChain,
  coldStorage,
  commercialGrainSilo,
  continuousFlowDrying,
  controlledAtmosphereStorage,
  curing,
  degreening,
  dehullingShelling,
  destoning,
  ethyleneManagement,
  farmGrainBin,
  fibreboardCarton,
  fieldHeatRemoval,
  flatStorageWarehouse,
  fruitRipening,
  grainCleaning,
  grainDrying,
  grainStorage,
  harvestMaturityAssessment,
  hermeticStorage,
  juteSack,
  linerAndWrap,
  meshBag,
  modifiedAtmospherePackaging,
  modifiedAtmosphereStorage,
  moistureContentAndEquilibrium,
  naturalAirDrying,
  onionAndGarlicCuring,
  onionStore,
  packingAndPackaging,
  palletisation,
  plasticCrate,
  postharvestFoodLoss,
  potatoStorage,
  precooling,
  punnetClamshell,
  refrigeratedContainer,
  refrigeratedWarehouse,
  rootCellar,
  shadeDrying,
  siloBag,
  sortingAndGrading,
  storageMouldsAndMycotoxins,
  storedGrainInsects,
  sunDrying,
  threshingAndShelling,
  washingAndSanitising,
  waxing,
  winnowing,
  woodenCrate,
  wovenPolypropyleneSack,
];
