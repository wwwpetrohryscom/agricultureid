import { describe, expect, it } from 'vitest';
import { resolveComparison } from '@/lib/comparison/resolve';
import { DIMENSIONS } from '@/lib/comparison/dimensions';
import { COMPARISONS } from '@/lib/comparison/registry';
import { buildCustomMatrix } from '@/lib/comparison/custom-matrix';
import {
  CUSTOM_COMPARISON_TYPES,
  MAX_CUSTOM_IDS,
  assembleCustomComparison,
  customComparisonRecord,
  parseCustomQuery,
  validCustomIds,
  type CustomMatrix,
} from '@/lib/comparison/custom';
import { getContent, getContentByType } from '@/lib/content/registry';
import { countryMeta } from '@/lib/geo/snapshots';
import type { ComparisonEntityType } from '@/types/comparison';
import type { ContentType } from '@/lib/site';

/**
 * /compare/custom moved from a server render to a static shell that assembles
 * the table in the browser. These tests pin the browser assembly to the server
 * resolver it replaced, so the page shows exactly what it showed before.
 */

const matrices = new Map<ComparisonEntityType, CustomMatrix>(
  CUSTOM_COMPARISON_TYPES.map((t) => [
    t,
    // Round-trip through JSON: the browser sees the serialised file.
    JSON.parse(JSON.stringify(buildCustomMatrix(t))) as CustomMatrix,
  ]),
);

/** What the former server page rendered for a selection. */
function serverRender(type: ComparisonEntityType, ids: string[]) {
  const validIds = ids.filter((id) =>
    type === 'country'
      ? Boolean(countryMeta(id))
      : Boolean(getContent(type as ContentType, id)),
  );
  if (validIds.length < 2) return null;
  const record = customComparisonRecord(
    type,
    validIds,
    type === 'country' ? [] : DIMENSIONS[type].map((d) => d.key),
  );
  return resolveComparison(record);
}

/** What the static page now renders for the same selection. */
function browserRender(type: ComparisonEntityType, ids: string[]) {
  const matrix = matrices.get(type)!;
  const valid = validCustomIds(matrix, ids);
  return valid.length >= 2 ? assembleCustomComparison(matrix, valid) : null;
}

/** Deterministic sample of id tuples for a type. */
function samples(type: ComparisonEntityType): string[][] {
  const ids =
    type === 'country'
      ? Object.keys(
          (
            matrices.get('country') as Extract<
              CustomMatrix,
              { kind: 'country' }
            >
          ).countries,
        )
      : getContentByType(type as ContentType).map((c) => c.slug);
  const out: string[][] = [];
  for (let i = 0; i + 1 < ids.length && out.length < 40; i += 3) {
    out.push([ids[i]!, ids[(i * 7 + 1) % ids.length]!]);
    out.push(ids.slice(i, i + MAX_CUSTOM_IDS));
  }
  return out;
}

describe('custom comparison: browser assembly equals the server resolver', () => {
  it('matches every curated comparison selection', () => {
    expect(COMPARISONS.length).toBeGreaterThan(0);
    for (const c of COMPARISONS) {
      expect(browserRender(c.entityType, c.comparedEntityIds)).toEqual(
        serverRender(c.entityType, c.comparedEntityIds),
      );
    }
  });

  for (const type of CUSTOM_COMPARISON_TYPES) {
    it(`matches sampled ${type} selections`, () => {
      const cases = samples(type);
      expect(cases.length).toBeGreaterThan(0);
      for (const ids of cases) {
        expect(browserRender(type, ids)).toEqual(serverRender(type, ids));
      }
    });
  }

  it('drops unknown and unpublished ids exactly as the server did', () => {
    const [first, second] = getContentByType('crop' as ContentType).map(
      (c) => c.slug,
    ) as [string, string];
    const ids = [first, 'not-a-crop', second, 'constructor'];
    expect(browserRender('crop', ids)).toEqual(serverRender('crop', ids));
    expect(browserRender('crop', [first, 'nope'])).toBeNull();
    expect(serverRender('crop', [first, 'nope'])).toBeNull();
  });
});

describe('custom comparison: query parsing', () => {
  it('reads type and the first four trimmed ids', () => {
    expect(
      parseCustomQuery('?type=crop&ids= wheat, barley,,maize,rice,oat'),
    ).toEqual({
      type: 'crop',
      ids: ['wheat', 'barley', 'maize', 'rice'],
    });
  });

  it('rejects an unknown type', () => {
    expect(parseCustomQuery('?type=planet&ids=a,b').type).toBeUndefined();
    expect(parseCustomQuery('').ids).toEqual([]);
  });
});
