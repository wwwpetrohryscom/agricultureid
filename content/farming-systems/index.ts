import type { FarmingSystemContent } from '@/types/content';
import { agroecology } from './agroecology';
import { agroforestry } from './agroforestry';
import { aquaponics } from './aquaponics';
import { conservationAgriculture } from './conservation-agriculture';
import { contourFarming } from './contour-farming';
import { drylandFarming } from './dryland-farming';
import { greenhouseFarming } from './greenhouse-farming';
import { hydroponics } from './hydroponics';
import { integratedCropLivestock } from './integrated-crop-livestock';
import { intercropping } from './intercropping';
import { mixedFarming } from './mixed-farming';
import { noTillFarming } from './no-till-farming';
import { organicFarming } from './organic-farming';
import { permaculture } from './permaculture';
import { precisionAgriculture } from './precision-agriculture';
import { regenerativeAgriculture } from './regenerative-agriculture';
import { riceFishFarming } from './rice-fish-farming';
import { shiftingCultivation } from './shifting-cultivation';
import { silvopasture } from './silvopasture';
import { verticalFarming } from './vertical-farming';

export const farmingSystems: FarmingSystemContent[] = [
  agroecology,
  agroforestry,
  aquaponics,
  conservationAgriculture,
  contourFarming,
  drylandFarming,
  greenhouseFarming,
  hydroponics,
  integratedCropLivestock,
  intercropping,
  mixedFarming,
  noTillFarming,
  organicFarming,
  permaculture,
  precisionAgriculture,
  regenerativeAgriculture,
  riceFishFarming,
  shiftingCultivation,
  silvopasture,
  verticalFarming,
];
