import type { SoilContent } from '@/types/content';
import { alluvialSoil } from './alluvial-soil';
import { andosol } from './andosol';
import { cambisol } from './cambisol';
import { chalkySoil } from './chalky-soil';
import { chernozem } from './chernozem';
import { claySoil } from './clay-soil';
import { ferralsol } from './ferralsol';
import { fluvisol } from './fluvisol';
import { gleysol } from './gleysol';
import { histosol } from './histosol';
import { lateriteSoil } from './laterite-soil';
import { loamSoil } from './loam-soil';
import { luvisol } from './luvisol';
import { peatSoil } from './peat-soil';
import { podzol } from './podzol';
import { salineSoil } from './saline-soil';
import { sandySoil } from './sandy-soil';
import { siltSoil } from './silt-soil';
import { solonchak } from './solonchak';
import { vertisol } from './vertisol';
import { volcanicSoil } from './volcanic-soil';

export const soils: SoilContent[] = [
  alluvialSoil,
  andosol,
  cambisol,
  chalkySoil,
  chernozem,
  claySoil,
  ferralsol,
  fluvisol,
  gleysol,
  histosol,
  lateriteSoil,
  loamSoil,
  luvisol,
  peatSoil,
  podzol,
  salineSoil,
  sandySoil,
  siltSoil,
  solonchak,
  vertisol,
  volcanicSoil,
];
