import type { FertilizerContent } from '@/types/content';
import { ammoniumNitrate } from './ammonium-nitrate';
import { ammoniumSulfate } from './ammonium-sulfate';
import { biochar } from './biochar';
import { calciumAmmoniumNitrate } from './calcium-ammonium-nitrate';
import { chelatedMicronutrients } from './chelated-micronutrients';
import { compost } from './compost';
import { diammoniumPhosphate } from './diammonium-phosphate';
import { farmyardManure } from './farmyard-manure';
import { greenManure } from './green-manure';
import { monoammoniumPhosphate } from './monoammonium-phosphate';
import { muriateOfPotash } from './muriate-of-potash';
import { npkCompoundFertilizer } from './npk-compound-fertilizer';
import { rockPhosphate } from './rock-phosphate';
import { singleSuperphosphate } from './single-superphosphate';
import { sulfateOfPotash } from './sulfate-of-potash';
import { tripleSuperphosphate } from './triple-superphosphate';
import { urea } from './urea';
import { vermicompost } from './vermicompost';

export const fertilizers: FertilizerContent[] = [
  ammoniumNitrate,
  ammoniumSulfate,
  biochar,
  calciumAmmoniumNitrate,
  chelatedMicronutrients,
  compost,
  diammoniumPhosphate,
  farmyardManure,
  greenManure,
  monoammoniumPhosphate,
  muriateOfPotash,
  npkCompoundFertilizer,
  rockPhosphate,
  singleSuperphosphate,
  sulfateOfPotash,
  tripleSuperphosphate,
  urea,
  vermicompost,
];
