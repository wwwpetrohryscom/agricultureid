import type { ClimateContent } from '@/types/content';
import { aridityIndex } from './aridity-index';
import { chillingRequirement } from './chilling-requirement';
import { dew } from './dew';
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
import { photoperiod } from './photoperiod';
import { rainfall } from './rainfall';
import { solarRadiation } from './solar-radiation';
import { temperature } from './temperature';
import { vaporPressureDeficit } from './vapor-pressure-deficit';
import { vernalization } from './vernalization';
import { wind } from './wind';

export const climateFactors: ClimateContent[] = [
  aridityIndex,
  chillingRequirement,
  dew,
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
  photoperiod,
  rainfall,
  solarRadiation,
  temperature,
  vaporPressureDeficit,
  vernalization,
  wind,
];
