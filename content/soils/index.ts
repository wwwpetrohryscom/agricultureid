import type { SoilContent } from '@/types/content';
import { claySoil } from './clay-soil';
import { loamSoil } from './loam-soil';
import { peatSoil } from './peat-soil';
import { sandySoil } from './sandy-soil';
import { siltSoil } from './silt-soil';

export const soils: SoilContent[] = [
  claySoil,
  loamSoil,
  peatSoil,
  sandySoil,
  siltSoil,
];
