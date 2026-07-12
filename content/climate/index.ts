import type { ClimateContent } from '@/types/content';
import { chillingRequirement } from './chilling-requirement';
import { drought } from './drought';
import { elNinoLaNina } from './el-nino-la-nina';
import { evapotranspiration } from './evapotranspiration';
import { frost } from './frost';
import { growingDegreeDays } from './growing-degree-days';
import { growingSeason } from './growing-season';
import { hail } from './hail';
import { heatStress } from './heat-stress';
import { humidity } from './humidity';
import { monsoon } from './monsoon';
import { rainfall } from './rainfall';
import { temperature } from './temperature';
import { wind } from './wind';

export const climateFactors: ClimateContent[] = [
  chillingRequirement,
  drought,
  elNinoLaNina,
  evapotranspiration,
  frost,
  growingDegreeDays,
  growingSeason,
  hail,
  heatStress,
  humidity,
  monsoon,
  rainfall,
  temperature,
  wind,
];
