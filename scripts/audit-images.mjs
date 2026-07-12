// Image identity + licensing audit (network; non-blocking, not a CI gate).
//
// For every image in data/images.ts, re-fetches the Wikimedia Commons file
// metadata (ObjectName, ImageDescription, Categories, License) and checks:
//  - identity: an expected subject keyword appears in the filename, description,
//    or categories (flags likely mismatches for manual review);
//  - licensing: creator, source page, license + license URL present;
//  - compatibility: license is CC0 / Public domain / CC BY / CC BY-SA.
//
// Usage: node scripts/audit-images.mjs [--json out.json]
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://commons.wikimedia.org/w/api.php';
const UA =
  'AgricultureID-image-audit/1.0 (educational; editorial@agricultureid.com)';
const FORBIDDEN = /(-nc|-nd|noncommercial|no-?deriv)/i;

// Slug words that are not distinctive subject keywords.
const STOP = new Set([
  'soil',
  'plant',
  'crop',
  'field',
  'method',
  'system',
  'topic',
  'farming',
  'irrigation',
  'agriculture',
  'agricultural',
  'common',
  'health',
  'fruit',
  'tree',
  'disease',
  'pest',
  'compound',
  'fertilizer',
  'the',
  'and',
  'of',
  'a',
  'domestic',
  'farm',
]);
// Synonyms/scientific hints to accept as identity matches.
const SYN = {
  maize: ['maize', 'corn', 'zea'],
  'oilseed-rape': ['rape', 'canola', 'brassica', 'napus'],
  groundnut: ['peanut', 'groundnut', 'arachis'],
  'colorado-potato-beetle': ['leptinotarsa', 'colorado', 'beetle'],
  'common-bean': ['bean', 'phaseolus'],
  eggplant: ['eggplant', 'aubergine', 'solanum', 'brinjal'],
  cilantro: ['coriander', 'cilantro'],
  'sweet-pepper': ['pepper', 'capsicum', 'bell'],
  'chili-pepper': ['chili', 'chilli', 'capsicum', 'pepper'],
  'water-buffalo': ['buffalo', 'bubalus'],
  courgette: ['zucchini', 'courgette'],
  zucchini: ['zucchini', 'courgette', 'cucurbita'],
  'farmed-fish': ['aquaculture', 'fish'],
  'honey-bees': ['bee', 'apis', 'apiary', 'hive'],
  vertisol: ['vertisol', 'black', 'cotton'],
  chernozem: ['chernozem', 'black'],
  podzol: ['podzol', 'spodosol'],
  sweetcorn: ['sweet', 'corn', 'maize', 'zea'],
  // Scientific / vernacular synonyms to avoid false-positive mismatches.
  chamomile: ['chamomile', 'chamomilla', 'matricaria'],
  'date-palm': ['date', 'palm', 'phoenix', 'dactylifera'],
  ginger: ['ginger', 'ingwer', 'zingiber', 'rhizom'],
  parsley: ['parsley', 'petroselinum', 'perejil'],
  rosemary: ['rosemary', 'rosmarinus', 'rosmarin'],
  sage: ['sage', 'salvia', 'officinalis'],
  tomato: ['tomato', 'tomate', 'solanum', 'lycopersicum'],
  armyworms: ['armyworm', 'spodoptera', 'mythimna'],
  leafhoppers: ['leafhopper', 'cicadellidae', 'chicharrita'],
  sawflies: ['sawfly', 'symphyta', 'arge', 'tenthredin'],
  thrips: ['thrips', 'thysanoptera'],
  weevils: ['weevil', 'curculion', 'diaprepes'],
  'fruit-flies': ['fruit fly', 'tephritid', 'bactrocera', 'ceratitis'],
  raspberry: ['raspberry', 'rubus'],
  silkworms: ['silkworm', 'bombyx', 'cocoon', 'sericult'],
  alpacas: ['alpaca', 'vicugna'],
  olive: ['olive', 'olea'],
  celery: ['celery', 'apium'],
  oats: ['oat', 'oats', 'avena'],
  'fertilizer-spreader': ['spreader', 'spreading', 'fertiliz'],
  thresher: ['thresher', 'threshing'],
  'volcanic-soil': ['volcanic', 'andosol', 'isric monolith'],
};

function expectedKeywords(key) {
  const slug = key.split(':')[1];
  const base = (SYN[slug] ?? slug.split('-')).filter(
    (w) => w.length >= 3 && !STOP.has(w),
  );
  return base.length ? base : slug.split('-');
}

function parseImageMap() {
  const txt = readFileSync(join(ROOT, 'data', 'images.ts'), 'utf8');
  const eq = txt.indexOf('=', txt.indexOf('IMAGE_MAP'));
  const start = txt.indexOf('{', eq);
  const end = txt.lastIndexOf('}');
  // The file is a JS object literal (single-quoted keys after formatting);
  // evaluate it directly. Trusted, first-party file.
  return new Function(`return (${txt.slice(start, end + 1)})`)();
}

function fileTitle(originalPage) {
  const m = originalPage && originalPage.match(/\/wiki\/(File:.+)$/);
  return m ? decodeURIComponent(m[1]).replace(/_/g, ' ') : null;
}

async function fetchMeta(titles) {
  const params = new URLSearchParams({
    action: 'query',
    titles: titles.join('|'),
    prop: 'imageinfo|categories',
    iiprop: 'extmetadata',
    cllimit: '500',
    format: 'json',
  });
  const res = await fetch(`${API}?${params}`, {
    headers: { 'User-Agent': UA },
  });
  if (!res.ok) throw new Error(`API ${res.status}`);
  const data = await res.json();
  return Object.values(data?.query?.pages ?? {});
}

async function main() {
  const map = parseImageMap();
  const entries = Object.entries(map);
  const byTitle = new Map();
  for (const [key, meta] of entries) {
    const t = fileTitle(meta.originalPage);
    if (t) byTitle.set(t, key);
  }

  // License-completeness check (offline part).
  const licenseIssues = [];
  for (const [key, m] of entries) {
    const miss = [];
    if (!m.creator) miss.push('creator');
    if (!m.originalPage) miss.push('originalPage');
    if (!m.license) miss.push('license');
    if (!m.licenseUrl) miss.push('licenseUrl');
    if (!m.attribution) miss.push('attribution');
    if (!m.alt) miss.push('alt');
    if (m.license && FORBIDDEN.test(m.license))
      miss.push('INCOMPATIBLE-LICENSE');
    if (miss.length) licenseIssues.push({ key, miss });
  }

  // Identity check (network).
  const titles = [...byTitle.keys()];
  const meta = new Map();
  for (let i = 0; i < titles.length; i += 40) {
    const batch = titles.slice(i, i + 40);
    try {
      const pages = await fetchMeta(batch);
      for (const p of pages) {
        const ex = p.imageinfo?.[0]?.extmetadata ?? {};
        const cats = (p.categories ?? []).map((c) => c.title).join(' ');
        const hay = [
          p.title ?? '',
          ex.ObjectName?.value ?? '',
          ex.ImageDescription?.value ?? '',
          cats,
        ]
          .join(' ')
          .replace(/<[^>]+>/g, ' ')
          .toLowerCase();
        meta.set(p.title, hay);
      }
    } catch (e) {
      console.log(`  batch ${i} error: ${e.message}`);
    }
  }

  const stem = (w) => w.toLowerCase().replace(/(ies|es|s)$/, '');
  const flagged = [];
  for (const [title, key] of byTitle) {
    const hay = meta.get(title) ?? title.toLowerCase();
    const kws = expectedKeywords(key);
    const ok = kws.some((kw) => {
      const k = kw.toLowerCase();
      return hay.includes(k) || (stem(k).length >= 4 && hay.includes(stem(k)));
    });
    if (!ok) flagged.push({ key, title, keywords: kws });
  }

  console.log('\nAgricultureID — image identity + licensing audit\n');
  console.log(`Images audited: ${entries.length}`);
  console.log(`Commons metadata fetched: ${meta.size}/${byTitle.size}`);
  console.log(`\nLicensing/attribution issues: ${licenseIssues.length}`);
  for (const li of licenseIssues)
    console.log(`  ${li.key}: missing ${li.miss.join(', ')}`);
  console.log(
    `\nIdentity: possible mismatches (no expected keyword found): ${flagged.length}`,
  );
  for (const f of flagged)
    console.log(
      `  ${f.key.padEnd(34)} kw[${f.keywords.join(',')}]  ${f.title}`,
    );

  const jsonIdx = process.argv.indexOf('--json');
  if (jsonIdx > -1 && process.argv[jsonIdx + 1]) {
    writeFileSync(
      process.argv[jsonIdx + 1],
      JSON.stringify({ licenseIssues, flagged }, null, 2),
    );
  }
  console.log('');
}

main();
