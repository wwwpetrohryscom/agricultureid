import type { LivestockContent } from '@/types/content';
import { cattle } from './cattle';
import { chickens } from './chickens';
import { goats } from './goats';
import { pigs } from './pigs';
import { sheep } from './sheep';

/** All livestock entries. Add new animals here to register them. */
export const livestock: LivestockContent[] = [
  cattle,
  sheep,
  goats,
  pigs,
  chickens,
];
