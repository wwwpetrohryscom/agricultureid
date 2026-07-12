import { describe, expect, it } from 'vitest';
import { validateAll } from '@/lib/validation/validate';

/**
 * The master gate: the full content validation suite must pass with zero
 * errors. Any violation (bad source ref, duplicate slug/metadata, unresolved
 * relationship, placeholder text, orphan, etc.) fails this test.
 */
describe('content integrity', () => {
  const result = validateAll();

  it('produces no error-level issues', () => {
    if (result.errorCount > 0) {
      const detail = result.issues
        .filter((i) => i.level === 'error')
        .map((i) => `[${i.code}] ${i.message} (${i.where ?? ''})`)
        .join('\n');
      throw new Error(`Validation errors:\n${detail}`);
    }
    expect(result.errorCount).toBe(0);
  });

  it('has published content across all five content types', () => {
    expect(result.stats.publishedContent).toBeGreaterThanOrEqual(26);
    for (const type of ['crop', 'soil', 'plant-disease', 'pest', 'livestock']) {
      expect(result.stats.byType[type]).toBeGreaterThan(0);
    }
  });

  it('registers a non-trivial source library', () => {
    expect(result.stats.sources).toBeGreaterThanOrEqual(20);
  });
});
