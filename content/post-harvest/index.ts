import type { PostHarvestContent } from '@/types/content';
import { coldChain } from './cold-chain';
import { coldStorage } from './cold-storage';
import { controlledAtmosphereStorage } from './controlled-atmosphere-storage';
import { curing } from './curing';
import { ethyleneManagement } from './ethylene-management';
import { fruitRipening } from './fruit-ripening';
import { grainCleaning } from './grain-cleaning';
import { grainDrying } from './grain-drying';
import { grainStorage } from './grain-storage';
import { hermeticStorage } from './hermetic-storage';
import { modifiedAtmospherePackaging } from './modified-atmosphere-packaging';
import { moistureContentAndEquilibrium } from './moisture-content-and-equilibrium';
import { onionAndGarlicCuring } from './onion-and-garlic-curing';
import { packingAndPackaging } from './packing-and-packaging';
import { postharvestFoodLoss } from './postharvest-food-loss';
import { potatoStorage } from './potato-storage';
import { precooling } from './precooling';
import { sortingAndGrading } from './sorting-and-grading';
import { storageMouldsAndMycotoxins } from './storage-moulds-and-mycotoxins';
import { storedGrainInsects } from './stored-grain-insects';
import { sunDrying } from './sun-drying';
import { threshingAndShelling } from './threshing-and-shelling';

export const postHarvest: PostHarvestContent[] = [
  coldChain,
  coldStorage,
  controlledAtmosphereStorage,
  curing,
  ethyleneManagement,
  fruitRipening,
  grainCleaning,
  grainDrying,
  grainStorage,
  hermeticStorage,
  modifiedAtmospherePackaging,
  moistureContentAndEquilibrium,
  onionAndGarlicCuring,
  packingAndPackaging,
  postharvestFoodLoss,
  potatoStorage,
  precooling,
  sortingAndGrading,
  storageMouldsAndMycotoxins,
  storedGrainInsects,
  sunDrying,
  threshingAndShelling,
];
