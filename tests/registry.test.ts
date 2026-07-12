import { describe, expect, it } from 'vitest';
import {
  PUBLISHED_CONTENT,
  contentPath,
  getContent,
  getContentByType,
} from '@/lib/content/registry';

describe('content registry — slug resolution', () => {
  it('resolves a known slug to the correct item', () => {
    const wheat = getContent('crop', 'wheat');
    expect(wheat).toBeDefined();
    expect(wheat?.title).toBe('Wheat');
    expect(wheat?.contentType).toBe('crop');
  });

  it('returns undefined for an unknown slug', () => {
    expect(getContent('crop', 'does-not-exist')).toBeUndefined();
  });

  it('does not resolve a slug under the wrong type', () => {
    // "wheat" is a crop, not a soil.
    expect(getContent('soil', 'wheat')).toBeUndefined();
  });

  it('lists only published items of a type', () => {
    const crops = getContentByType('crop');
    expect(crops.length).toBeGreaterThanOrEqual(8);
    expect(crops.every((c) => c.editorialStatus === 'published')).toBe(true);
  });
});

describe('canonical path generation', () => {
  it('builds pluralised, kebab-case canonical paths', () => {
    expect(contentPath('crop', 'wheat')).toBe('/crops/wheat');
    expect(contentPath('plant-disease', 'late-blight')).toBe(
      '/plant-diseases/late-blight',
    );
    expect(contentPath('livestock', 'cattle')).toBe('/livestock/cattle');
  });

  it('produces a unique canonical path for every published item', () => {
    const paths = PUBLISHED_CONTENT.map((i) =>
      contentPath(i.contentType, i.slug),
    );
    expect(new Set(paths).size).toBe(paths.length);
  });
});
