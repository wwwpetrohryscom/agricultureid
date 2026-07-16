import type { ProcessingMethodContent } from '@/types/content';
import { beetDiffusionExtraction } from './beet-diffusion-extraction';
import { centrifugation } from './centrifugation';
import { citrusJuiceExtraction } from './citrus-juice-extraction';
import { cocoaBeanCleaningAndWinnowing } from './cocoa-bean-cleaning-and-winnowing';
import { decortication } from './decortication';
import { degumming } from './degumming';
import { evaporationAndCrystallisation } from './evaporation-and-crystallisation';
import { flaking } from './flaking';
import { fruitDrying } from './fruit-drying';
import { hammerMilling } from './hammer-milling';
import { juiceConcentration } from './juice-concentration';
import { juiceExtractionMilling } from './juice-extraction-milling';
import { juicePressing } from './juice-pressing';
import { maizeDryMilling } from './maize-dry-milling';
import { malting } from './malting';
import { mealDesolventisingAndToasting } from './meal-desolventising-and-toasting';
import { mechanicalPressing } from './mechanical-pressing';
import { nutShelling } from './nut-shelling';
import { oilClarification } from './oil-clarification';
import { oilseedDehulling } from './oilseed-dehulling';
import { pearling } from './pearling';
import { riceDehulling } from './rice-dehulling';
import { riceGradingAndBrokensSeparation } from './rice-grading-and-brokens-separation';
import { riceWhiteningPolishing } from './rice-whitening-polishing';
import { rollerMilling } from './roller-milling';
import { semolinaProduction } from './semolina-production';
import { solventExtraction } from './solvent-extraction';
import { stoneMilling } from './stone-milling';
import { tomatoPasteProduction } from './tomato-paste-production';
import { vegetableDehydration } from './vegetable-dehydration';

export const processingMethods: ProcessingMethodContent[] = [
  beetDiffusionExtraction,
  centrifugation,
  citrusJuiceExtraction,
  cocoaBeanCleaningAndWinnowing,
  decortication,
  degumming,
  evaporationAndCrystallisation,
  flaking,
  fruitDrying,
  hammerMilling,
  juiceConcentration,
  juiceExtractionMilling,
  juicePressing,
  maizeDryMilling,
  malting,
  mealDesolventisingAndToasting,
  mechanicalPressing,
  nutShelling,
  oilClarification,
  oilseedDehulling,
  pearling,
  riceDehulling,
  riceGradingAndBrokensSeparation,
  riceWhiteningPolishing,
  rollerMilling,
  semolinaProduction,
  solventExtraction,
  stoneMilling,
  tomatoPasteProduction,
  vegetableDehydration,
];
