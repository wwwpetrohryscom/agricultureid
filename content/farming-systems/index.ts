import type { FarmingSystemContent } from '@/types/content';
import { agroforestry } from './agroforestry';
import { aquaponics } from './aquaponics';
import { conservationAgriculture } from './conservation-agriculture';
import { contourFarming } from './contour-farming';
import { greenhouseFarming } from './greenhouse-farming';
import { hydroponics } from './hydroponics';
import { integratedCropLivestock } from './integrated-crop-livestock';
import { mixedFarming } from './mixed-farming';
import { noTillFarming } from './no-till-farming';
import { organicFarming } from './organic-farming';
import { permaculture } from './permaculture';
import { precisionAgriculture } from './precision-agriculture';
import { regenerativeAgriculture } from './regenerative-agriculture';
import { silvopasture } from './silvopasture';
import { verticalFarming } from './vertical-farming';

export const farmingSystems: FarmingSystemContent[] = [
  agroforestry,
  aquaponics,
  conservationAgriculture,
  contourFarming,
  greenhouseFarming,
  hydroponics,
  integratedCropLivestock,
  mixedFarming,
  noTillFarming,
  organicFarming,
  permaculture,
  precisionAgriculture,
  regenerativeAgriculture,
  silvopasture,
  verticalFarming,
];
