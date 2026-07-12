import type { SoilContent } from '@/types/content';
import { alluvialSoil } from './alluvial-soil';
import { chalkySoil } from './chalky-soil';
import { chernozem } from './chernozem';
import { claySoil } from './clay-soil';
import { lateriteSoil } from './laterite-soil';
import { loamSoil } from './loam-soil';
import { peatSoil } from './peat-soil';
import { podzol } from './podzol';
import { salineSoil } from './saline-soil';
import { sandySoil } from './sandy-soil';
import { siltSoil } from './silt-soil';
import { vertisol } from './vertisol';
import { volcanicSoil } from './volcanic-soil';

export const soils: SoilContent[] = [
  alluvialSoil,
  chalkySoil,
  chernozem,
  claySoil,
  lateriteSoil,
  loamSoil,
  peatSoil,
  podzol,
  salineSoil,
  sandySoil,
  siltSoil,
  vertisol,
  volcanicSoil,
];
