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
import { ukraineMinagro } from './ukraine-minagro';
import { saudiMewa } from './saudi-arabia-mewa';
import { nzMpi } from './new-zealand-mpi';
import { canadaCfia } from './canada-cfia';
import { czechiaMze } from './czechia-mze';
import { argentinaAgri } from './argentina-agricultura';
import { brazilMapa } from './brazil-mapa';
import { chileMinagri } from './chile-minagri';
import { colombiaMinagri } from './colombia-minagricultura';
import { peruMidagri } from './peru-midagri';
import { turkiyeTarim } from './turkiye-tarim-orman';
import { nigeriaFmafs } from './nigeria-fmafs';
import { pakistanMnfsr } from './pakistan-mnfsr';
import { indonesiaPertanian } from './indonesia-pertanian';
import { ethiopiaMoa } from './ethiopia-moa';
import { hungaryAm } from './hungary-agrarminiszterium';
import { japanMaff } from './japan-maff';
import { chinaMoa } from './china-moa';
import { uaeMoccae } from './uae-moccae';
import { usdaErs } from './united-states-ers';

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
  ukraineMinagro,
  saudiMewa,
  nzMpi,
  canadaCfia,
  czechiaMze,
  argentinaAgri,
  brazilMapa,
  chileMinagri,
  colombiaMinagri,
  peruMidagri,
  turkiyeTarim,
  nigeriaFmafs,
  pakistanMnfsr,
  indonesiaPertanian,
  ethiopiaMoa,
  hungaryAm,
  japanMaff,
  chinaMoa,
  uaeMoccae,
  usdaErs,
];
