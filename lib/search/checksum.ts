import { createHash } from 'node:crypto';
import { buildSearchDocuments } from '@/lib/search/documents';

/** Stable checksum over the set of indexed document ids (order-independent). */
export function docsChecksum(): string {
  const docs = buildSearchDocuments();
  return (
    'sha256:' +
    createHash('sha256')
      .update(JSON.stringify(docs.map((d) => d.id).sort()))
      .digest('hex')
  );
}
