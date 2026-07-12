import type { PestContent } from '@/types/content';
import { aphids } from './aphids';
import { coloradoPotatoBeetle } from './colorado-potato-beetle';
import { thrips } from './thrips';
import { whiteflies } from './whiteflies';

/** All pest entries. Add new pests here to register them. */
export const pests: PestContent[] = [
  aphids,
  thrips,
  whiteflies,
  coloradoPotatoBeetle,
];
