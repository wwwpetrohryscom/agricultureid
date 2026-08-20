/**
 * The agricultural-authorities registry.
 *
 * Every entry here was verified against an official government source with a
 * real browser during the access pass recorded in each `verification` block.
 * Nothing in this file is inferred from an organisation's name: where a body's
 * identity was confirmed but its remit was not read from its own pages, it is
 * a `directory-record` and gets no indexable detail page.
 */
import type { AgriculturalAuthorityEntry } from '@/types/authority';

import { defra } from './defra';
import { bmleh } from './bmleh';
import { masaf } from './masaf';
import { usdaAphis } from './usda-aphis';
import { usdaNass } from './usda-nass';
import { ecDgAgri } from './ec-dg-agri';
import { franceMasa } from './france-masa';
import { spainMapa } from './spain-mapa';
import { polandMrirw } from './poland-mrirw';
import { netherlandsLvvn } from './netherlands-lvvn';
import { efsa } from './efsa';

export const AUTHORITIES: AgriculturalAuthorityEntry[] = [
  ecDgAgri,
  efsa,
  defra,
  franceMasa,
  bmleh,
  spainMapa,
  masaf,
  polandMrirw,
  netherlandsLvvn,
  usdaAphis,
  usdaNass,
];
