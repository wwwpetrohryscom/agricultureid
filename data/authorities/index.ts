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
import { usCaCdfa } from './us-ca-cdfa';
import { usFlFdacs } from './us-fl-fdacs';
import { usIlAgr } from './us-il-agr';
import { usInIsda } from './us-in-isda';
import { usIaIdals } from './us-ia-idals';
import { usMnMda } from './us-mn-mda';
import { usNeNda } from './us-ne-nda';
import { usSdDanr } from './us-sd-danr';
import { usTxTda } from './us-tx-tda';
import { usWaWsda } from './us-wa-wsda';
import { usWiDatcp } from './us-wi-datcp';
import { usNcNcdas } from './us-nc-ncdas';
import { usPaPda } from './us-pa-pda';
import { usCoCda } from './us-co-cda';
import { usOrOda } from './us-or-oda';
import { usAzAzda } from './us-az-azda';
import { caAbAgi } from './ca-ab-agi';
import { caBcAgf } from './ca-bc-agf';
import { caMbAgr } from './ca-mb-agr';
import { caQcMapaq } from './ca-qc-mapaq';
import { caSkAgr } from './ca-sk-agr';
import { auNswDpird } from './au-nsw-dpird';
import { auQldDpi } from './au-qld-dpi';
import { auSaPirsa } from './au-sa-pirsa';
import { auTasNre } from './au-tas-nre';
import { auVicAgvic } from './au-vic-agvic';
import { auWaDpird } from './au-wa-dpird';
import { usAlAgi } from './us-al-agi';
import { usCtDoag } from './us-ct-doag';
import { usDeDa } from './us-de-da';
import { usHiHdoa } from './us-hi-hdoa';
import { usLaLdaf } from './us-la-ldaf';
import { usMeDacf } from './us-me-dacf';
import { usMaMdar } from './us-ma-mdar';
import { usMsMdac } from './us-ms-mdac';
import { usNjNjda } from './us-nj-njda';
import { usOkOdaff } from './us-ok-odaff';
import { usScScda } from './us-sc-scda';
import { usTnTda } from './us-tn-tda';
import { usUtUdaf } from './us-ut-udaf';
import { usVtVaafm } from './us-vt-vaafm';
import { usWyWda } from './us-wy-wda';
import { caNlFal } from './ca-nl-fal';
import { caNsAgri } from './ca-ns-agri';
import { caOnOmafa } from './ca-on-omafa';
import { usEpaOpp } from './us-epa-opp';

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
  usCaCdfa,
  usFlFdacs,
  usIlAgr,
  usInIsda,
  usIaIdals,
  usMnMda,
  usNeNda,
  usSdDanr,
  usTxTda,
  usWaWsda,
  usWiDatcp,
  caAbAgi,
  caBcAgf,
  caMbAgr,
  caQcMapaq,
  caSkAgr,
  auNswDpird,
  auQldDpi,
  auSaPirsa,
  auTasNre,
  auVicAgvic,
  auWaDpird,
  usNcNcdas,
  usPaPda,
  usCoCda,
  usOrOda,
  usAzAzda,
  usAlAgi,
  usCtDoag,
  usDeDa,
  usHiHdoa,
  usLaLdaf,
  usMeDacf,
  usMaMdar,
  usMsMdac,
  usNjNjda,
  usOkOdaff,
  usScScda,
  usTnTda,
  usUtUdaf,
  usVtVaafm,
  usWyWda,
  caNlFal,
  caNsAgri,
  caOnOmafa,
  usEpaOpp,
];
