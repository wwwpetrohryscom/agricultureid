/**
 * Wave 2 discovery + verification harness (research tool, NOT a gate).
 *
 * Loads each candidate official site in a real Chromium and records what the
 * page actually says: HTTP status, final URL after redirects, <title>, first
 * <h1>, meta description, and the top-level navigation labels. Government sites
 * routinely refuse curl, so a real browser is the only way to see the truth.
 *
 * Candidate URLs come from ordinary discovery. NOTHING here is evidence until
 * the page has been loaded and read — that is the whole point of this script:
 * a candidate never moves straight from a guess into the registry.
 *
 * Writes the full ledger to data/authorities/research-ledger.json so the
 * evidence is reviewable and diffable, and prints only a compact summary.
 *
 *   node scripts/authorities-discover.mjs [--only=CODE,CODE]
 */
import { chromium } from '@playwright/test';
import { writeFileSync } from 'node:fs';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/** country ISO3, region bucket, candidate official URL(s). */
export const CANDIDATES = [
  // ---- EU 27 -------------------------------------------------------------
  ['AUT', 'eu', 'https://www.bml.gv.at'],
  ['BEL', 'eu', 'https://www.health.belgium.be/en/food-safety'],
  ['BGR', 'eu', 'https://www.mzh.government.bg'],
  ['HRV', 'eu', 'https://poljoprivreda.gov.hr'],
  ['CYP', 'eu', 'https://www.moa.gov.cy'],
  ['CZE', 'eu', 'https://eagri.cz'],
  ['DNK', 'eu', 'https://fvm.dk'],
  ['EST', 'eu', 'https://www.agri.ee'],
  ['FIN', 'eu', 'https://mmm.fi'],
  ['GRC', 'eu', 'https://www.minagric.gr'],
  ['HUN', 'eu', 'https://kormany.hu/agrarminiszterium'],
  [
    'IRL',
    'eu',
    'https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/',
  ],
  ['LVA', 'eu', 'https://www.zm.gov.lv'],
  ['LTU', 'eu', 'https://zum.lrv.lt'],
  ['LUX', 'eu', 'https://agriculture.public.lu'],
  ['MLT', 'eu', 'https://agriculture.gov.mt'],
  ['PRT', 'eu', 'https://www.gpp.pt'],
  ['ROU', 'eu', 'https://www.madr.ro'],
  ['SVK', 'eu', 'https://www.mpsr.sk'],
  [
    'SVN',
    'eu',
    'https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-kmetijstvo-gozdarstvo-in-prehrano/',
  ],
  ['SWE', 'eu', 'https://jordbruksverket.se'],
  // ---- additional Europe -------------------------------------------------
  ['CHE', 'eur', 'https://www.blw.admin.ch'],
  ['NOR', 'eur', 'https://www.regjeringen.no/no/dep/lmd/id2614/'],
  ['UKR', 'eur', 'https://minagro.gov.ua'],
  ['TUR', 'eur', 'https://www.tarimorman.gov.tr'],
  ['ISL', 'eur', 'https://www.stjornarradid.is/raduneyti/matvaelaraduneytid/'],
  ['SRB', 'eur', 'https://www.minpolj.gov.rs'],
  // ---- North America -----------------------------------------------------
  ['USA', 'na', 'https://www.ers.usda.gov'],
  ['USA', 'na', 'https://www.fas.usda.gov'],
  ['CAN', 'na', 'https://inspection.canada.ca/en'],
  ['MEX', 'na', 'https://www.gob.mx/agricultura'],
  // ---- Latin America -----------------------------------------------------
  ['BRA', 'latam', 'https://www.gov.br/agricultura/pt-br'],
  ['ARG', 'latam', 'https://www.argentina.gob.ar/economia/agricultura'],
  ['CHL', 'latam', 'https://www.minagri.gob.cl'],
  ['COL', 'latam', 'https://www.minagricultura.gov.co'],
  ['PER', 'latam', 'https://www.gob.pe/midagri'],
  [
    'URY',
    'latam',
    'https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/',
  ],
  ['ECU', 'latam', 'https://www.agricultura.gob.ec'],
  ['CRI', 'latam', 'https://www.mag.go.cr'],
  ['PRY', 'latam', 'https://www.mag.gov.py'],
  ['BOL', 'latam', 'https://www.ruralytierras.gob.bo'],
  ['PAN', 'latam', 'https://mida.gob.pa'],
  ['DOM', 'latam', 'https://agricultura.gob.do'],
  // ---- Oceania -----------------------------------------------------------
  ['AUS', 'oce', 'https://www.agriculture.gov.au'],
  ['NZL', 'oce', 'https://www.mpi.govt.nz'],
  // ---- Asia --------------------------------------------------------------
  ['IND', 'asia', 'https://agriwelfare.gov.in'],
  ['JPN', 'asia', 'https://www.maff.go.jp'],
  ['KOR', 'asia', 'https://www.mafra.go.kr'],
  ['CHN', 'asia', 'http://www.moa.gov.cn'],
  ['IDN', 'asia', 'https://www.pertanian.go.id'],
  ['VNM', 'asia', 'https://www.mard.gov.vn'],
  ['THA', 'asia', 'https://www.moac.go.th'],
  ['PHL', 'asia', 'https://www.da.gov.ph'],
  ['PAK', 'asia', 'https://mnfsr.gov.pk'],
  ['BGD', 'asia', 'https://moa.gov.bd'],
  ['MYS', 'asia', 'https://www.kpkm.gov.my'],
  ['LKA', 'asia', 'https://www.agrimin.gov.lk'],
  ['NPL', 'asia', 'https://www.moald.gov.np'],
  // ---- Africa ------------------------------------------------------------
  ['ZAF', 'afr', 'https://www.dalrrd.gov.za'],
  ['KEN', 'afr', 'https://kilimo.go.ke'],
  ['NGA', 'afr', 'https://fmard.gov.ng'],
  ['MAR', 'afr', 'https://www.agriculture.gov.ma'],
  ['EGY', 'afr', 'https://www.agr.gov.eg'],
  ['ETH', 'afr', 'https://www.moa.gov.et'],
  ['GHA', 'afr', 'https://mofa.gov.gh'],
  ['TZA', 'afr', 'https://www.kilimo.go.tz'],
  ['UGA', 'afr', 'https://www.agriculture.go.ug'],
  ['TUN', 'afr', 'https://www.agriculture.tn'],
  ['DZA', 'afr', 'https://madr.gov.dz'],
  ['RWA', 'afr', 'https://www.minagri.gov.rw'],
  ['ZMB', 'afr', 'https://www.agriculture.gov.zm'],
  ['SEN', 'afr', 'https://www.agriculture.gouv.sn'],
  // ---- Gulf / Middle East ------------------------------------------------
  ['SAU', 'gulf', 'https://www.mewa.gov.sa'],
  ['ARE', 'gulf', 'https://www.moccae.gov.ae'],
  ['OMN', 'gulf', 'https://www.maf.gov.om'],
  ['QAT', 'gulf', 'https://www.mme.gov.qa'],
  ['KWT', 'gulf', 'https://www.paaf.gov.kw'],
  ['JOR', 'gulf', 'https://www.moa.gov.jo'],
];

async function inspect(context, url) {
  const page = await context.newPage();
  const out = {
    url,
    status: null,
    finalUrl: null,
    title: null,
    h1: null,
    desc: null,
    nav: [],
    note: null,
  };
  try {
    const r = await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 40_000,
    });
    out.status = r?.status() ?? null;
    out.finalUrl = page.url();
    out.title = (await page.title()).trim().slice(0, 160);
    const data = await page.evaluate(() => {
      const txt = (el) => (el?.textContent ?? '').replace(/\s+/g, ' ').trim();
      const h1 = txt(document.querySelector('h1')).slice(0, 160);
      const desc = (
        document
          .querySelector('meta[name="description"]')
          ?.getAttribute('content') ?? ''
      ).slice(0, 300);
      // Top-level navigation labels: the body's own statement of what areas it
      // publishes work under. Evidence of remit AREAS, not of legal competence.
      const navEls = Array.from(
        document.querySelectorAll('nav a, header a, [role="navigation"] a'),
      );
      const nav = [
        ...new Set(
          navEls
            .map((a) => txt(a))
            .filter((t) => t.length > 2 && t.length < 40),
        ),
      ].slice(0, 40);
      return { h1, desc, nav };
    });
    Object.assign(out, data);
    if (out.finalUrl !== url) {
      const a = new URL(url).hostname,
        b = new URL(out.finalUrl).hostname;
      out.note = a === b ? 'redirect-same-host' : `redirect-to:${b}`;
    }
  } catch (e) {
    const m = String(e?.message ?? e);
    out.note = /Timeout/i.test(m)
      ? 'timeout'
      : /ERR_CERT|SSL/i.test(m)
        ? 'tls-error'
        : /ERR_NAME_NOT_RESOLVED/i.test(m)
          ? 'dns-failure'
          : `error:${m.slice(0, 80)}`;
  } finally {
    await page.close().catch(() => {});
  }
  return out;
}

const only = process.argv
  .find((a) => a.startsWith('--only='))
  ?.split('=')[1]
  ?.split(',');
const targets = only
  ? CANDIDATES.filter(([c]) => only.includes(c))
  : CANDIDATES;

const browser = await chromium.launch();
const context = await browser.newContext({
  userAgent: UA,
  viewport: { width: 1280, height: 900 },
});

const ledger = [];
const BATCH = 6;
for (let i = 0; i < targets.length; i += BATCH) {
  const slice = targets.slice(i, i + BATCH);
  const results = await Promise.all(
    slice.map(([, , url]) => inspect(context, url)),
  );
  slice.forEach(([code, region], j) => {
    const r = results[j];
    ledger.push({ countryCode: code, region, ...r });
    const verdict =
      r.status === 200
        ? 'ok'
        : r.status === 403 || r.status === 429
          ? 'blocked'
          : r.status === 404
            ? 'dead'
            : (r.note ?? `http-${r.status}`);
    console.log(
      `${code} ${String(verdict).padEnd(11)} ${String(r.status ?? '-').padEnd(4)} ${(r.title ?? r.note ?? '').slice(0, 88)}`,
    );
  });
}
await browser.close();

writeFileSync(
  'data/authorities/research-ledger.json',
  JSON.stringify(ledger, null, 2) + '\n',
);
const okCount = ledger.filter((l) => l.status === 200).length;
console.log(
  `\nprobed ${ledger.length} candidates across ${new Set(ledger.map((l) => l.countryCode)).size} countries — ${okCount} resolved 200`,
);
console.log('ledger → data/authorities/research-ledger.json');
