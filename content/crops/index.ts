import type { CropContent } from '@/types/content';
import { barley } from './barley';
import { maize } from './maize';
import { potato } from './potato';
import { rice } from './rice';
import { soybean } from './soybean';
import { sunflower } from './sunflower';
import { tomato } from './tomato';
import { wheat } from './wheat';

/** All crop entries. Add new crops here to register them. */
export const crops: CropContent[] = [
  wheat,
  maize,
  rice,
  soybean,
  potato,
  tomato,
  sunflower,
  barley,
];
