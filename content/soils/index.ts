import type { SoilContent } from '@/types/content';
import { claySoil } from './clay-soil';
import { loamSoil } from './loam-soil';
import { peatSoil } from './peat-soil';
import { sandySoil } from './sandy-soil';
import { siltSoil } from './silt-soil';

/** All soil entries. Add new soils here to register them. */
export const soils: SoilContent[] = [
  claySoil,
  sandySoil,
  loamSoil,
  siltSoil,
  peatSoil,
];
