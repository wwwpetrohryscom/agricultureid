import { describe, expect, it } from 'vitest';
import { PUBLISHED_CONTENT, resolveImage } from '@/lib/content/registry';
import { outgoingRefs } from '@/lib/content/graph';
import { CONTENT_TYPES } from '@/lib/site';

describe('phase 2 — expanded knowledge graph', () => {
  it('has published entries for every content type', () => {
    for (const type of CONTENT_TYPES) {
      const count = PUBLISHED_CONTENT.filter(
        (c) => c.contentType === type,
      ).length;
      expect(
        count,
        `content type "${type}" has no published entries`,
      ).toBeGreaterThan(0);
    }
  });

  it('has a substantially expanded corpus', () => {
    expect(PUBLISHED_CONTENT.length).toBeGreaterThanOrEqual(120);
  });

  it('is densely interconnected (cross-type links average > 3 per page)', () => {
    const totalEdges = PUBLISHED_CONTENT.reduce(
      (sum, item) => sum + outgoingRefs(item).length,
      0,
    );
    const avg = totalEdges / PUBLISHED_CONTENT.length;
    expect(avg).toBeGreaterThan(3);
  });
});

describe('phase 2 — image integrity', () => {
  const INCOMPATIBLE = /(-nc|-nd|noncommercial|no-?deriv)/i;

  it('every attached image is self-hosted with a compatible license + attribution', () => {
    for (const item of PUBLISHED_CONTENT) {
      const img = resolveImage(item);
      if (!img) continue;
      expect(
        img.src.startsWith('/'),
        `${item.slug} image not self-hosted`,
      ).toBe(true);
      expect(img.alt?.trim(), `${item.slug} image alt`).toBeTruthy();
      expect(img.license?.trim(), `${item.slug} image license`).toBeTruthy();
      expect(
        img.attribution?.trim(),
        `${item.slug} image attribution`,
      ).toBeTruthy();
      expect(INCOMPATIBLE.test(img.license ?? ''), `${item.slug} license`).toBe(
        false,
      );
    }
  });

  it('has verified photographs on a meaningful share of pages', () => {
    const withPhoto = PUBLISHED_CONTENT.filter((i) => resolveImage(i)).length;
    expect(withPhoto).toBeGreaterThanOrEqual(60);
  });
});
