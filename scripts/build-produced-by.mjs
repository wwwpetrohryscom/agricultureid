/**
 * Regenerates the `producedBy` field on every commodity-product by inverting
 * the outputs declared on processing methods (Phase 5C).
 *
 * `producedBy` is derived, never hand-maintained: a method declares what it
 * produces, and this script writes the reverse edge. That keeps the two
 * directions from drifting — the validator requires them to agree, and a
 * hand-edited inverse is exactly the kind of thing that silently rots.
 *
 * A product may legitimately have several producers (soybean oil comes from
 * both mechanical pressing and solvent extraction), so the inverse is a list.
 *
 * Run: node scripts/build-produced-by.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const METHOD_DIR = join(ROOT, 'content/processing-methods');
const PRODUCT_DIR = join(ROOT, 'content/commodity-products');

/** Pull the slugs out of one array field of a content file. */
function arrayFieldSlugs(src, field) {
  const m = src.match(new RegExp(`\\n  ${field}: \\[([\\s\\S]*?)\\n?  \\],`));
  if (!m) {
    // single-line form: `field: [{ ... }],`
    const one = src.match(new RegExp(`\\n  ${field}: \\[(.*?)\\],\\n`));
    if (!one) return [];
    return [...one[1].matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((x) => x[1]);
  }
  return [...m[1].matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((x) => x[1]);
}

const fileSlug = (f) => f.replace(/\.ts$/, '');

// method slug -> declared output product slugs
const producers = new Map(); // product slug -> Set(method slug)
for (const f of readdirSync(METHOD_DIR)) {
  if (!f.endsWith('.ts') || f === 'index.ts') continue;
  const src = readFileSync(join(METHOD_DIR, f), 'utf8');
  const method = fileSlug(f);
  for (const field of [
    'primaryOutputs',
    'coProductOutputs',
    'byProductOutputs',
  ]) {
    for (const product of arrayFieldSlugs(src, field)) {
      if (!producers.has(product)) producers.set(product, new Set());
      producers.get(product).add(method);
    }
  }
}

let written = 0;
let cleared = 0;
for (const f of readdirSync(PRODUCT_DIR)) {
  if (!f.endsWith('.ts') || f === 'index.ts') continue;
  const fp = join(PRODUCT_DIR, f);
  let src = readFileSync(fp, 'utf8');
  const product = fileSlug(f);
  const methods = [...(producers.get(product) ?? [])].sort();

  // Remove any existing producedBy block, single- or multi-line.
  //
  // The pattern deliberately matches ONLY a list of `{ ... }` ref objects. An
  // earlier version used a lazy `[\s\S]*?` up to the next `\n  ],`, which — on a
  // single-line `producedBy: [{...}],` that has no such closer — ran on and
  // matched the NEXT array's closer, silently deleting `summary` and
  // `introduction`. Constraining the body to ref objects makes over-matching
  // impossible regardless of formatting.
  const before = src;
  src = src.replace(/\n  producedBy: \[(?:\s*\{[^{}]*\},?)*\s*\],/, '');

  if (methods.length > 0) {
    // Anchor immediately after derivedFrom, which every product has.
    const anchor = src.match(/\n  derivedFrom: \{[^}]*\},\n/);
    if (!anchor) {
      console.log(`  !! no derivedFrom anchor in ${f}`);
      continue;
    }
    const block =
      '  producedBy: [\n' +
      methods
        .map((m) => `    { type: 'processing-method', slug: '${m}' },`)
        .join('\n') +
      '\n  ],\n';
    src = src.replace(anchor[0], anchor[0] + block);
    written++;
  } else if (before !== src) {
    cleared++;
  }
  if (src !== before) writeFileSync(fp, src);
}

console.log(
  `produced-by: wired ${written} product(s) from ${producers.size} produced slug(s); cleared ${cleared} stale`,
);
const orphans = readdirSync(PRODUCT_DIR)
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
  .map(fileSlug)
  .filter((s) => !producers.has(s));
console.log(
  `products with no declared producer (${orphans.length}): ${orphans.join(', ')}`,
);
