// Wikimedia Commons image pipeline for AgricultureID.
//
// Reads a manifest [{ key, query, localName }] and, for each entry, searches
// Commons, verifies the license is redistribution-compatible (CC0 / Public
// domain / CC BY / CC BY-SA, and NOT NonCommercial / NoDerivatives), downloads
// a resized copy into public/images/, and records full attribution metadata.
//
// Usage: node scripts/fetch-images.mjs <manifest.json> <output.json>
// Requires network access and macOS `sips` for resizing (falls back to raw).

import { execFileSync } from 'node:child_process';
import {
  mkdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
  statSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES_DIR = join(ROOT, 'public', 'images');
const API = 'https://commons.wikimedia.org/w/api.php';
const UA =
  'AgricultureID-image-bot/1.0 (educational reference; contact editorial@agricultureid.com)';

const ALLOWED = [
  /^cc0/i,
  /^cc-by(-sa)?-([1-4])\.\d/i,
  /^public\s*domain/i,
  /^pd/i,
];
const FORBIDDEN = /(-nc|-nd|noncommercial|no-?deriv|fair use|gfdl-only)/i;

function licenseOk(shortName, licenseCode) {
  const s = `${shortName ?? ''}`.toLowerCase();
  const c = `${licenseCode ?? ''}`.toLowerCase();
  if (FORBIDDEN.test(s) || FORBIDDEN.test(c)) return false;
  const hay = `${c} ${s}`;
  if (/cc0|public domain|\bpd\b|cc[- ]by/i.test(hay)) {
    // Reject NC/ND explicitly even if CC-BY present.
    return !FORBIDDEN.test(hay);
  }
  return ALLOWED.some((re) => re.test(c) || re.test(s));
}

function stripHtml(s) {
  return `${s ?? ''}`
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({ format: 'json', ...params })}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

async function findImage(query, keywords = []) {
  // Search File namespace (6) for candidate images.
  const search = await api({
    action: 'query',
    generator: 'search',
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: '6',
    gsrlimit: '20',
    prop: 'imageinfo',
    iiprop: 'url|size|mime|extmetadata',
    iiurlwidth: '1280',
  });
  const pages = Object.values(search?.query?.pages ?? {});
  // Prefer candidates whose title/description contains an expected keyword
  // (relevance over raw size), then by size.
  const kw = keywords.map((k) => k.toLowerCase()).filter(Boolean);
  const relevance = (p) => {
    if (!kw.length) return 0;
    const hay =
      `${p.title ?? ''} ${p.imageinfo?.[0]?.extmetadata?.ImageDescription?.value ?? ''}`
        .replace(/<[^>]+>/g, ' ')
        .toLowerCase();
    return kw.some((k) => hay.includes(k)) ? 1 : 0;
  };
  pages.sort((a, b) => {
    const r = relevance(b) - relevance(a);
    if (r !== 0) return r;
    return (b.imageinfo?.[0]?.width ?? 0) - (a.imageinfo?.[0]?.width ?? 0);
  });
  for (const page of pages) {
    const info = page.imageinfo?.[0];
    if (!info) continue;
    if (!/image\/(jpeg|png)/.test(info.mime ?? '')) continue;
    if ((info.width ?? 0) < 800) continue;
    const meta = info.extmetadata ?? {};
    const licenseCode = meta.License?.value;
    const licenseShort = meta.LicenseShortName?.value;
    if (!licenseOk(licenseShort, licenseCode)) continue;
    const artist = stripHtml(meta.Artist?.value) || 'Unknown author';
    const licenseUrl = meta.LicenseUrl?.value;
    return {
      title: page.title,
      descriptionUrl: info.descriptionurl,
      thumbUrl: info.thumburl ?? info.url,
      width: info.thumbwidth ?? info.width,
      height: info.thumbheight ?? info.height,
      license: licenseShort || licenseCode,
      licenseUrl,
      artist,
      credit: stripHtml(meta.Credit?.value),
    };
  }
  return null;
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
}

function resize(dest) {
  try {
    execFileSync('sips', ['-Z', '1280', '-s', 'formatOptions', '72', dest], {
      stdio: 'ignore',
    });
  } catch {
    /* leave original if sips unavailable */
  }
}

async function main() {
  const [manifestPath, outputPath] = process.argv.slice(2);
  if (!manifestPath || !outputPath) {
    console.error(
      'usage: node scripts/fetch-images.mjs <manifest.json> <output.json>',
    );
    process.exit(1);
  }
  mkdirSync(IMAGES_DIR, { recursive: true });
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

  const results = {};
  let ok = 0;
  let fail = 0;
  for (const entry of manifest) {
    const { key, query, localName } = entry;
    const localPath = `/images/${localName}.jpg`;
    const dest = join(IMAGES_DIR, `${localName}.jpg`);
    try {
      if (existsSync(dest) && statSync(dest).size > 5000 && results[key]) {
        continue;
      }
      const found = await findImage(query, entry.keywords ?? []);
      if (!found) {
        console.log(`  ✗ ${key}: no compatible image for "${query}"`);
        fail++;
        continue;
      }
      await download(found.thumbUrl, dest);
      resize(dest);
      const attribution = `${found.artist}, via Wikimedia Commons (${found.license})`;
      results[key] = {
        src: localPath,
        alt: entry.alt ?? `${entry.title ?? query}`,
        width: found.width,
        height: found.height,
        creator: found.artist,
        sourceUrl: found.thumbUrl,
        originalPage: found.descriptionUrl,
        license: found.license,
        licenseUrl: found.licenseUrl,
        attribution,
        subject: entry.title ?? query,
      };
      ok++;
      console.log(
        `  ✓ ${key}: ${found.license} — ${found.artist.slice(0, 40)}`,
      );
    } catch (e) {
      console.log(`  ✗ ${key}: ${e.message}`);
      fail++;
    }
  }

  writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\nDone: ${ok} ok, ${fail} failed. Wrote ${outputPath}`);
}

main();
