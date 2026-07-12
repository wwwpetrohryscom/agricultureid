import type { ClimateContent } from '@/types/content';
import { drought } from './drought';
import { frost } from './frost';
import { growingDegreeDays } from './growing-degree-days';
import { growingSeason } from './growing-season';
import { heatStress } from './heat-stress';
import { humidity } from './humidity';
import { rainfall } from './rainfall';
import { temperature } from './temperature';

export const climateFactors: ClimateContent[] = [
  drought,
  frost,
  growingDegreeDays,
  growingSeason,
  heatStress,
  humidity,
  rainfall,
  temperature,
];
