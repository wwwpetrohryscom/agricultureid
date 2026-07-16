/**
 * Makes the Phase 5D symmetric relations reciprocal.
 *
 *   node scripts/build-trade-reciprocity.mjs
 *
 * `relatedConcepts`, `relatedLogistics`, `relatedStandards`, `relatedTerms`,
 * and `relatedRisks` all relate a page to a SIBLING OF THE SAME TYPE, and the
 * relation is symmetric by meaning: if hedging is related to speculation, then
 * speculation is related to hedging. An author who adds one direction and
 * forgets the other leaves a one-way door in the graph — the reader arrives and
 * cannot get back.
 *
 * Following Phase 5C's `producedBy`, the inverse is DERIVED rather than
 * hand-written: the validator warns when the directions disagree, and a
 * hand-maintained inverse is exactly the thing that silently rots.
 *
 * The script is idempotent: it computes the symmetric closure of the declared
 * edges and rewrites each field to the full sorted set.
 *
 * NOTE on the regex: the array pattern matches ONLY a list of `{ ... }` ref
 * objects. Phase 5C had a lazy `[\s\S]*?` version that ran past a single-line
 * array's closer and deleted the next fields. Constraining the body to ref
 * objects makes over-matching impossible regardless of formatting.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/** [content dir, symmetric field, the ContentRef `type` it targets] */
const SYMMETRIC = [
  ['trade-concepts', 'relatedConcepts', 'trade-concept'],
  ['logistics-concepts', 'relatedLogistics', 'logistics-concept'],
  ['standard-references', 'relatedStandards', 'standard-reference'],
  ['market-terms', 'relatedTerms', 'market-term'],
  ['supply-chain-risks', 'relatedRisks', 'supply-chain-risk'],
];

const fileSlug = (f) => f.replace(/\.ts$/, '');
const arrayRe = (field) =>
  new RegExp(`\\n  ${field}: \\[(?:\\s*\\{[^{}]*\\},?)*\\s*\\],`);

let totalAdded = 0;

for (const [dir, field, type] of SYMMETRIC) {
  const abs = join(ROOT, 'content', dir);
  const files = readdirSync(abs).filter(
    (f) => f.endsWith('.ts') && f !== 'index.ts',
  );
  const slugs = new Set(files.map(fileSlug));

  // 1. Read declared edges.
  const edges = new Map(files.map((f) => [fileSlug(f), new Set()]));
  const src = new Map();
  for (const f of files) {
    const s = readFileSync(join(abs, f), 'utf8');
    src.set(fileSlug(f), s);
    const m = s.match(arrayRe(field));
    if (!m) continue;
    for (const x of m[0].matchAll(/slug:\s*'([a-z0-9-]+)'/g))
      if (slugs.has(x[1]) && x[1] !== fileSlug(f))
        edges.get(fileSlug(f)).add(x[1]);
  }

  // 2. Symmetric closure.
  let added = 0;
  for (const [from, tos] of edges)
    for (const to of tos)
      if (!edges.get(to).has(from)) {
        edges.get(to).add(from);
        added++;
      }

  // 3. Write each field back as the full sorted set.
  let written = 0;
  for (const [slug, tos] of edges) {
    let s = src.get(slug);
    const before = s;
    const list = [...tos].sort();
    const block =
      list.length === 0
        ? ''
        : `\n  ${field}: [\n` +
          list.map((t) => `    { type: '${type}', slug: '${t}' },`).join('\n') +
          `\n  ],`;

    if (arrayRe(field).test(s)) {
      s = s.replace(arrayRe(field), block);
    } else if (block) {
      // Field absent: anchor before `updatedAt`, which BaseContent requires on
      // every page, so the anchor always exists.
      const anchor = s.match(/\n  updatedAt: '/);
      if (!anchor) {
        console.log(`  !! no updatedAt anchor in ${dir}/${slug}.ts`);
        continue;
      }
      s = s.replace(anchor[0], block + anchor[0]);
    }
    if (s !== before) {
      writeFileSync(join(abs, `${slug}.ts`), s);
      written++;
    }
  }
  totalAdded += added;
  console.log(
    `${dir}: ${field} — ${added} missing back-reference(s) added, ${written} file(s) rewritten`,
  );
}

console.log(`\nreciprocity: ${totalAdded} edge(s) made symmetric`);
