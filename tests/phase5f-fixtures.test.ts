import { describe, it, expect } from 'vitest';
import { semanticEdges } from '@/lib/content/relations';
import {
  REF_FIELDS,
  isRefField,
  isGenericField,
  relationForField,
  originForField,
} from '@/lib/content/ref-fields';
import { isContentRefValue, declaredRefs } from '@/lib/content/graph-coverage';
import {
  RELATION_SPEC,
  unjustifiedSymmetry,
} from '@/lib/content/relation-spec';
import { RELATION_TYPES, INVERSE_RELATION } from '@/lib/content/relations';
import type { AnyContent } from '@/types/content';

/**
 * Phase 5F §1 — the structural-discovery contract, against a fixture built to
 * break it.
 *
 * The fixture deliberately contains every shape that is NOT a semantic
 * reference but could plausibly be mistaken for one: source references, image
 * metadata, dataset and formula ids, classification codes, ordinary string
 * arrays, prose blocks that carry their own `type`, and nested metadata. If any
 * of them becomes an edge, discovery is guessing.
 */
const FIXTURE = {
  id: 'trade-concept-fixture',
  slug: 'fixture',
  contentType: 'trade-concept',
  title: 'Fixture',
  category: 'Fixture',
  summary: 's',
  introduction: [{ type: 'paragraph', text: 'p' }],
  keyFacts: [{ label: 'l', value: 'v' }],

  /* ---- REAL semantic reference fields (must become edges) ---------- */
  relatedConcepts: [{ type: 'trade-concept', slug: 'incoterms-rules' }],
  relevantStandards: [
    { type: 'standard-reference', slug: 'codex-alimentarius' },
  ],
  connections: [{ type: 'commodity', slug: 'wheat-grain' }],

  /* ---- NOT references (must be ignored) --------------------------- */
  // Source references: sourceId, no type/slug.
  sourceReferences: [{ sourceId: 'wto', citedFor: 'x' }],
  // Field-level provenance: nested, and citations are FieldCitation.
  claims: [
    {
      field: 'f',
      statement: 's',
      citations: [{ sourceId: 'fao', locator: 'p. 1' }],
    },
  ],
  // Image metadata.
  image: { url: 'u', creator: 'c', licenseUrl: 'l', sourcePage: 'p' },
  // Classification codes: system/code, no type/slug.
  classificationSystems: [
    { system: 'HS', code: '1001.99', version: 'HS 2022' },
  ],
  // Plain string arrays.
  glossaryTerms: ['basis', 'incoterms'],
  advisoryLimitations: ['not advice'],
  limitations: ['a limitation'],
  keywords: ['a', 'b'],
  // Prose blocks carry `type` but no slug — and "paragraph" is not a type.
  sections: [
    {
      id: 's',
      heading: 'H',
      body: [
        { type: 'paragraph', text: 'x' },
        { type: 'callout', tone: 'note', text: 'y' },
        { type: 'list', items: ['1', '2'] },
      ],
    },
  ],
  // Nested non-graph metadata, including a ref-SHAPED object buried two levels
  // deep where no ref is supposed to live.
  structuredData: { article: true },
  seo: { title: 't', description: 'd', keywords: ['k'] },
  nestedMetadata: {
    inner: { type: 'commodity', slug: 'maize-grain' },
  },
  // A dataset/formula id pair — strings, not refs.
  datasetId: 'faostat-trade-matrix',
  formulaIds: ['moisture-wb-to-db'],
  updatedAt: '2026-07-16',
  geographicScope: 'Global',
  editorialStatus: 'published',
} as unknown as AnyContent;

describe('Phase 5F §1 — structural discovery discovers only what it should', () => {
  it('finds exactly the three real reference fields', () => {
    const found = declaredRefs(FIXTURE);
    const fields = [...new Set(found.map((f) => f.field))].sort();
    expect(fields).toEqual([
      'connections',
      'relatedConcepts',
      'relevantStandards',
    ]);
  });

  it('ignores source references, provenance citations, and image metadata', () => {
    const fields = declaredRefs(FIXTURE).map((f) => f.field);
    for (const excluded of ['sourceReferences', 'claims', 'image'])
      expect(fields, `${excluded} must never be an edge`).not.toContain(
        excluded,
      );
  });

  it('ignores classification codes, dataset ids, and formula ids', () => {
    const fields = declaredRefs(FIXTURE).map((f) => f.field);
    for (const excluded of ['classificationSystems', 'datasetId', 'formulaIds'])
      expect(fields, excluded).not.toContain(excluded);
  });

  it('ignores ordinary string arrays', () => {
    const fields = declaredRefs(FIXTURE).map((f) => f.field);
    for (const excluded of [
      'glossaryTerms',
      'advisoryLimitations',
      'limitations',
      'keywords',
    ])
      expect(fields, excluded).not.toContain(excluded);
  });

  it('never mistakes a prose block for a reference', () => {
    // ContentBlocks carry `type: 'paragraph'` — the guard also requires a slug
    // AND a real content type, so prose can never be structure.
    expect(isContentRefValue({ type: 'paragraph', text: 'x' })).toBe(false);
    expect(
      isContentRefValue({ type: 'callout', tone: 'note', text: 'y' }),
    ).toBe(false);
    // Even a block that somehow had a slug is not a content type.
    expect(isContentRefValue({ type: 'paragraph', slug: 'x' })).toBe(false);
    expect(declaredRefs(FIXTURE).map((f) => f.field)).not.toContain('sections');
  });

  it('does not reach into nested non-graph metadata', () => {
    // Refs live at the top level or in a top-level array. Recursing deeper would
    // start hunting authored content for structure.
    const targets = declaredRefs(FIXTURE).map(
      (f) => `${f.ref.type}:${f.ref.slug}`,
    );
    expect(targets).not.toContain('commodity:maize-grain');
    expect(targets).toContain('commodity:wheat-grain'); // top-level array: found
  });

  it('rejects a ref whose type is not a real content type', () => {
    expect(isContentRefValue({ type: 'not-a-type', slug: 'x' })).toBe(false);
    expect(isContentRefValue({ type: 'commodity', slug: 'x' })).toBe(true);
    expect(isContentRefValue({ type: 'commodity' })).toBe(false); // no slug
    expect(isContentRefValue({ slug: 'x' })).toBe(false); // no type
    expect(isContentRefValue(null)).toBe(false);
    expect(isContentRefValue('commodity:wheat')).toBe(false);
  });

  it('preserves the relation and direction the field declares', () => {
    const edges = semanticEdges(FIXTURE);
    const standard = edges.find((e) => e.to.type === 'standard-reference');
    expect(standard?.relation).toBe('governedByStandard');
    expect(standard?.from.slug).toBe('fixture'); // direction: fixture → standard
    expect(standard?.to.slug).toBe('codex-alimentarius');

    const concept = edges.find((e) => e.to.type === 'trade-concept');
    expect(concept?.relation).toBe('relatedTradeConcept');
  });

  it('emits no duplicate edge for the same target', () => {
    const dup = {
      ...FIXTURE,
      // The same target named by BOTH a typed field and a generic one.
      relatedConcepts: [{ type: 'trade-concept', slug: 'incoterms-rules' }],
      connections: [{ type: 'trade-concept', slug: 'incoterms-rules' }],
    } as unknown as AnyContent;
    const edges = semanticEdges(dup).filter(
      (e) => e.to.slug === 'incoterms-rules',
    );
    expect(edges.length, 'one edge per target').toBe(1);
    // …and the TYPED field must win, not the generic one.
    expect(edges[0]!.relation).toBe('relatedTradeConcept');
  });

  it('is deterministic', () => {
    const a = JSON.stringify(semanticEdges(FIXTURE));
    const b = JSON.stringify(semanticEdges(FIXTURE));
    expect(a).toBe(b);
  });

  it('supports a content type nobody registered, with no switch to update', () => {
    // The property that stops Phase 5D's bug recurring.
    const novel = {
      ...FIXTURE,
      contentType: 'market-term',
      slug: 'novel',
      relatedTerms: [{ type: 'market-term', slug: 'basis' }],
    } as unknown as AnyContent;
    const edges = semanticEdges(novel);
    expect(edges.some((e) => e.to.slug === 'basis')).toBe(true);
  });
});

describe('Phase 5F §3 — edge provenance', () => {
  it('marks every edge with an origin the registry agrees with', () => {
    for (const edge of semanticEdges(FIXTURE)) {
      expect(['declared', 'generated', 'inverse']).toContain(edge.origin);
      expect(edge.origin).toBe(originForField(edge.field));
    }
  });

  it('never presents a generated edge as authored', () => {
    // `producedBy` is written by a generator inverting each processing method's
    // declared outputs. Calling it an author's assertion would overstate what
    // anybody actually wrote.
    const spec = REF_FIELDS['producedBy'];
    expect(spec?.origin).toBe('generated');
    expect(spec?.generator).toBe('scripts/build-produced-by.mjs');
  });

  it('gives every registered field an origin', () => {
    for (const [field, spec] of Object.entries(REF_FIELDS)) {
      expect(['declared', 'generated', 'inverse'], field).toContain(
        spec.origin,
      );
      if (spec.origin === 'generated')
        expect(spec.generator, `${field} must name its generator`).toBeTruthy();
    }
  });
});

describe('Phase 5F §1 — the field registry is complete and honest', () => {
  it('maps every registered field to a vocabulary relation', () => {
    for (const [field, spec] of Object.entries(REF_FIELDS)) {
      expect(
        RELATION_TYPES.has(spec.relation),
        `${field} → ${spec.relation}`,
      ).toBe(true);
      for (const [type, rel] of Object.entries(spec.byType ?? {})) {
        expect(rel, `${field}@${type} must name a relation`).toBeDefined();
        expect(RELATION_TYPES.has(rel!), `${field}@${type} → ${rel}`).toBe(
          true,
        );
      }
    }
  });

  it('lets only the two generic fields be generic', () => {
    const generic = Object.entries(REF_FIELDS)
      .filter(([, s]) => s.generic)
      .map(([f]) => f)
      .sort();
    expect(generic).toEqual(['connections', 'relatedTopics']);
    expect(isGenericField('connections')).toBe(true);
    expect(isGenericField('relatedConcepts')).toBe(false);
  });

  it('resolves a per-type override ahead of the default', () => {
    // Field names are NOT unique across types.
    expect(relationForField('relevantStandards', 'post-harvest')).toBe(
      'gradedUnder',
    );
    expect(relationForField('relevantStandards', 'trade-concept')).toBe(
      'governedByStandard',
    );
    expect(relationForField('affectedCommodities', 'post-harvest-defect')).toBe(
      'damagesCommodity',
    );
    expect(relationForField('affectedCommodities', 'supply-chain-risk')).toBe(
      'riskAffects',
    );
    expect(relationForField('notAField', 'crop')).toBeUndefined();
    expect(isRefField('sourceReferences')).toBe(false);
  });
});

describe('Phase 5F §4 — reciprocity rules are declared, not assumed', () => {
  it('gives every symmetric relation a stated reason', () => {
    // A relation must not be promoted to symmetric merely to silence a
    // validator. The rationale is the check on that.
    expect(unjustifiedSymmetry()).toEqual([]);
  });

  it('makes a symmetric relation its own inverse', () => {
    for (const [relation, spec] of RELATION_SPEC)
      if (spec.kind === 'symmetric') {
        expect(spec.inverse, relation).toBe(relation);
        expect(INVERSE_RELATION[relation], relation).toBe(relation);
        expect(spec.inverseGeneration, relation).toBe(true);
      }
  });

  it('gives every directional relation a DIFFERENT inverse, or none', () => {
    for (const [relation, spec] of RELATION_SPEC)
      if (spec.kind === 'directional' && spec.inverse)
        expect(spec.inverse, relation).not.toBe(relation);
  });

  it('forbids reciprocity where the reverse claim would be false', () => {
    // A crop is susceptible to a disease; the disease is not susceptible to the
    // crop. Reciprocity here would be a bug, not a gap.
    for (const relation of [
      'susceptibleTo',
      'damagesCommodity',
      'cultivarOf',
      'derivedFromCommodity',
      'gradedUnder',
    ] as const)
      expect(RELATION_SPEC.get(relation)?.reciprocity, relation).toBe(
        'forbidden',
      );
  });

  it('keeps associatedDocument symmetric and says why', () => {
    const spec = RELATION_SPEC.get('associatedDocument');
    expect(spec?.kind).toBe('symmetric');
    expect(spec?.symmetryRationale).toMatch(/accompany/i);
  });

  it('has retired the directional documents relation entirely', () => {
    // It existed only for a mis-mapping: `associatedDocuments` was read as
    // "A documents B", which is not what the field says.
    expect(RELATION_TYPES.has('documents' as never)).toBe(false);
    expect(RELATION_TYPES.has('documentedBy' as never)).toBe(false);
  });

  it('never declares a directional relation symmetric to suppress an error', () => {
    // Spot-check the shape of the rule: a relation with a distinct inverse must
    // not also claim to be its own.
    for (const [relation, spec] of RELATION_SPEC) {
      if (spec.kind !== 'symmetric') continue;
      expect(
        spec.symmetryRationale!.length,
        `${relation}'s rationale must actually say something`,
      ).toBeGreaterThan(30);
    }
  });
});
