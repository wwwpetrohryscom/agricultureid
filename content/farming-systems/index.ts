import type { FarmingSystemContent } from '@/types/content';
import { agroforestry } from './agroforestry';
import { conservationAgriculture } from './conservation-agriculture';
import { greenhouseFarming } from './greenhouse-farming';
import { hydroponics } from './hydroponics';
import { integratedCropLivestock } from './integrated-crop-livestock';
import { organicFarming } from './organic-farming';
import { precisionAgriculture } from './precision-agriculture';
import { regenerativeAgriculture } from './regenerative-agriculture';
import { verticalFarming } from './vertical-farming';

export const farmingSystems: FarmingSystemContent[] = [
  agroforestry,
  conservationAgriculture,
  greenhouseFarming,
  hydroponics,
  integratedCropLivestock,
  organicFarming,
  precisionAgriculture,
  regenerativeAgriculture,
  verticalFarming,
];
