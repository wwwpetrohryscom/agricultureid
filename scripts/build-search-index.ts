/**
 * Phase 3D — build the client search index. Serializes the compact search
 * documents (no article bodies) + synonym registry to public/search-index.json
 * with a checksum. The client builds the inverted index in-browser from this
 * payload (the engine is isomorphic). Run via `npm run search:index` (and as a
 * prebuild step so production is always fresh).
 */
import { gzipSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildSearchDocuments } from '../lib/search/documents';
import { docsChecksum } from '../lib/search/checksum';
import { SYNONYMS } from '../data/search/synonyms';

function trimDocs(docs: ReturnType<typeof buildSearchDocuments>) {
  // Keep summaries short — the index is for matching, not reading.
  return docs.map((d) => ({ ...d, summary: d.summary.slice(0, 160) }));
}

function main() {
  const docs = trimDocs(buildSearchDocuments());
  const payload = {
    version: 1,
    count: docs.length,
    checksum: docsChecksum(),
    docs,
    synonyms: SYNONYMS,
  };
  const json = JSON.stringify(payload);
  const out = join(process.cwd(), 'public', 'search-index.json');
  writeFileSync(out, json);
  const raw = Buffer.byteLength(json);
  const gz = gzipSync(json).length;
  console.log(
    `search index: ${docs.length} docs, ${(raw / 1024).toFixed(1)} kB raw, ${(gz / 1024).toFixed(1)} kB gzipped`,
  );
}

main();
