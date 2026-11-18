#!/usr/bin/env node
/**
 * Serve the static export in `out/` locally, resolving paths the way
 * Cloudflare's asset handler does in production (wrangler.jsonc):
 *
 *   /a/b/      → 308 /a/b            (out/_redirects)
 *   /a/b       → out/a/b.html, else out/a/b/index.html
 *   /          → out/index.html
 *   not found  → out/404.html with status 404
 *
 * For local checks and the Playwright suite only — `wrangler dev` is the
 * faithful emulator where it can run. Usage: node scripts/serve-out.mjs [port]
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const ROOT = join(process.cwd(), 'out');
const PORT = Number(process.argv[2] ?? process.env.PORT ?? 3000);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

const isFile = (p) => existsSync(p) && statSync(p).isFile();

function resolve(pathname) {
  const clean = normalize(decodeURIComponent(pathname)).replace(
    /^(\.\.[/\\])+/,
    '',
  );
  const base = join(ROOT, clean);
  if (!base.startsWith(ROOT)) return null;
  if (clean === '/') return join(ROOT, 'index.html');
  for (const candidate of [base, `${base}.html`, join(base, 'index.html')]) {
    if (isFile(candidate)) return candidate;
  }
  return null;
}

createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://localhost:${PORT}`);
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    res.writeHead(308, { Location: url.pathname.slice(0, -1) + url.search });
    res.end();
    return;
  }
  const file = resolve(url.pathname);
  const status = file ? 200 : 404;
  const path = file ?? join(ROOT, '404.html');
  res.writeHead(status, {
    'Content-Type': TYPES[extname(path)] ?? 'application/octet-stream',
  });
  createReadStream(path).pipe(res);
}).listen(PORT, () => {
  console.log(`serving out/ on http://localhost:${PORT}`);
});
