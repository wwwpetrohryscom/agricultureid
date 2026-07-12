import { describe, expect, it } from 'vitest';
import { SOURCES, getSource, requireSource } from '@/lib/sources/registry';
import { ALL_CONTENT } from '@/lib/content/registry';
import { GLOSSARY } from '@/data/glossary';

describe('source registry', () => {
  it('has unique source ids', () => {
    const ids = SOURCES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has well-formed http(s) URLs for every source', () => {
    for (const source of SOURCES) {
      const url = new URL(source.url);
      expect(['http:', 'https:']).toContain(url.protocol);
    }
  });

  it('resolves and requires sources correctly', () => {
    expect(getSource('fao')?.organization).toContain('FAO');
    expect(() => requireSource('not-a-real-source')).toThrow();
  });
});

describe('source reference resolution', () => {
  it('every content source reference resolves to a registry entry', () => {
    for (const item of ALL_CONTENT) {
      for (const ref of item.sourceReferences) {
        expect(
          getSource(ref.sourceId),
          `${item.slug} → ${ref.sourceId}`,
        ).toBeDefined();
      }
    }
  });

  it('every published article cites at least one source', () => {
    for (const item of ALL_CONTENT) {
      if (item.editorialStatus === 'published') {
        expect(item.sourceReferences.length).toBeGreaterThan(0);
      }
    }
  });

  it('every glossary source reference resolves', () => {
    for (const term of GLOSSARY) {
      for (const ref of term.sourceReferences ?? []) {
        expect(getSource(ref.sourceId)).toBeDefined();
      }
    }
  });
});
