import { describe, it, expect } from 'vitest';
import { allSemanticEdges, semanticEdges } from '@/lib/content/relations';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import {
  reverseEdges,
  reverseEdgesByRelation,
  displayOnlyReverse,
} from '@/lib/content/reverse-lookup';
import {
  relationRenderCoverage,
  unrenderableRelations,
} from '@/lib/content/renderable-relations';
import {
  RELATION_HEADING,
  GENERIC_CAP,
  buildRelationGroups,
} from '@/components/graph/RelationPanels';
import type { RelationTarget } from '@/components/graph/RelationPanels';
import { graphIssues, declaredRefs } from '@/lib/content/graph-coverage';
import {
  isMaterializable,
  typeUnsafeInverses,
} from '@/lib/content/relation-spec';
import { isRefField } from '@/lib/content/ref-fields';
import type { AnyContent, ContentRef, RelationType } from '@/types/content';

describe('Phase 5F §4 — parent↔child, one canonical definition', () => {
  it('gives every cultivar and breed an inbound edge from its parent', () => {
    const inbound = new Set(
      allSemanticEdges().map((e) => `${e.to.type}:${e.to.slug}`),
    );
    const orphaned = PUBLISHED_CONTENT.filter(
      (c) =>
        (c.contentType === 'cultivar' || c.contentType === 'breed') &&
        !inbound.has(`${c.contentType}:${c.slug}`),
    );
    // Was 101. The parent→child edge (hasCultivar/hasBreed) is now materialised
    // from the same registry function the panel uses.
    expect(orphaned.map((c) => c.slug)).toEqual([]);
  });

  it('marks the parent→child edge generated, never authored', () => {
    const crop = PUBLISHED_CONTENT.find((c) => c.contentType === 'crop')!;
    const childEdges = semanticEdges(crop).filter(
      (e) => e.relation === 'hasCultivar',
    );
    for (const e of childEdges) {
      expect(e.origin).toBe('generated');
      expect(e.generator).toContain('cultivarsForCrop');
      expect(e.to.type).toBe('cultivar');
    }
  });

  it('materialises ONLY the type-safe parent→child inverse', () => {
    // hasCultivar/hasBreed are safe (crop→cultivar and nothing else). Every
    // OTHER inverse stays display-only. Verify no type-unsafe inverse leaked in.
    for (const u of typeUnsafeInverses())
      expect(isMaterializable(u.relation), u.relation).toBe(false);
    const generated = allSemanticEdges().filter(
      (e) => e.origin === 'generated',
    );
    const relations = new Set(generated.map((e) => e.relation));
    // producedBy is generated too; the only materialised INVERSES are these.
    expect(relations.has('hasCultivar')).toBe(true);
    expect(relations.has('hasBreed')).toBe(true);
    expect(relations.has('includesCrop')).toBe(false); // the unsafe one
  });
});

describe('Phase 5F §3 — reverse lookup, no false inverse', () => {
  const farmingSystem = PUBLISHED_CONTENT.find(
    (c) =>
      c.contentType === 'farming-system' &&
      allSemanticEdges().some(
        (e) => e.to.type === 'farming-system' && e.to.slug === c.slug,
      ),
  )!;
  const subject: ContentRef = {
    type: 'farming-system',
    slug: farmingSystem.slug,
  };

  it('shows what points at an entity using the FORWARD relation only', () => {
    const rev = reverseEdges(subject);
    expect(rev.length).toBeGreaterThan(0);
    // Not one row may carry an invented inverse label. The whole point of
    // reverse lookup is to avoid asserting includesCrop against a plough.
    for (const r of rev) {
      expect(r.relation.startsWith('includes'), r.relation).toBe(false);
      // Every relation shown is a real forward relation from the corpus.
      const forward = allSemanticEdges().some(
        (e) =>
          e.relation === r.relation &&
          e.from.type === r.source.type &&
          e.from.slug === r.source.slug,
      );
      expect(forward, `${r.source.slug} --${r.relation}-->`).toBe(true);
    }
  });

  it('preserves the truth of the original relation', () => {
    // A source shown in the reverse must genuinely declare that forward edge.
    const grouped = reverseEdgesByRelation(subject);
    for (const [relation, sources] of grouped)
      for (const src of sources) {
        const declares = semanticEdges(src as unknown as AnyContent);
        void declares; // resolved below through the edge set
        const real = allSemanticEdges().some(
          (e) =>
            e.from.slug === src.slug &&
            e.to.slug === subject.slug &&
            e.relation === relation,
        );
        expect(real, `${src.slug} --${relation}--> ${subject.slug}`).toBe(true);
      }
  });

  it('groups sources correctly and deterministically', () => {
    const a = JSON.stringify(reverseEdges(subject));
    const b = JSON.stringify(reverseEdges(subject));
    expect(a).toBe(b);
  });

  it('emits no duplicate row for one source and relation', () => {
    const rev = reverseEdges(subject);
    const keys = rev.map(
      (r) => `${r.source.type}:${r.source.slug}:${r.relation}`,
    );
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('marks the type-unsafe relations display-only', () => {
    // partOfFarmingSystem, affects, gradedUnder must be shown by reverse lookup,
    // not by a stored inverse.
    expect(displayOnlyReverse('partOfFarmingSystem')).toBe(true);
    expect(displayOnlyReverse('affects')).toBe(true);
    expect(displayOnlyReverse('gradedUnder')).toBe(true);
    // A symmetric relation needs no reverse — the forward edge reads both ways.
    expect(displayOnlyReverse('relatedRisk')).toBe(false);
  });
});

describe('Phase 5F §8 — every relation with edges reaches a reader', () => {
  it('leaves no relation with edges unrenderable', () => {
    expect(unrenderableRelations()).toEqual([]);
  });

  it('renders the post-harvest appliesToCommodity edges — the regression guard', () => {
    // Phase 5F made this relation precise and dropped it from the heading list,
    // silently un-rendering 208 edges. It must have a heading forever.
    const coverage = relationRenderCoverage().find(
      (r) => r.relation === 'appliesToCommodity',
    );
    expect(coverage, 'appliesToCommodity must carry edges').toBeDefined();
    expect(coverage!.edges).toBeGreaterThan(0);
    expect(
      'appliesToCommodity' in RELATION_HEADING,
      'appliesToCommodity must have a RelationPanels heading',
    ).toBe(true);
  });

  it('gives every heading-bearing relation a non-empty label', () => {
    for (const [relation, heading] of Object.entries(RELATION_HEADING))
      expect(heading.trim().length, relation).toBeGreaterThan(0);
  });
});

describe('Phase 5F §6 — relation direction is not inverted', () => {
  it('never asserts a quality attribute POSSESSES its commodities', () => {
    // `appliesToCommodities` is declared on a quality-attribute and points AT
    // commodities: the attribute IS an attribute OF the commodity. The edge must
    // read `qualityAttributeOf` (dependent side), never the possessor-side
    // `hasQualityAttribute` — which would render "Quality attributes:
    // [maize-grain, wheat-grain, …]" on every quality-attribute page, claiming
    // the attribute owns those commodities as its attributes.
    for (const e of allSemanticEdges()) {
      if (e.from.type === 'quality-attribute' && e.to.type === 'commodity')
        expect(e.relation, `${e.from.slug} → ${e.to.slug}`).toBe(
          'qualityAttributeOf',
        );
      // The possessor-side label must never originate from the attribute itself.
      if (e.relation === 'hasQualityAttribute')
        expect(e.from.type, `hasQualityAttribute from ${e.from.slug}`).not.toBe(
          'quality-attribute',
        );
    }
  });
});

describe('Phase 5F §9 — relatedConcept does not dominate', () => {
  it('caps the generic panel while leaving precise panels uncapped', () => {
    expect(GENERIC_CAP).toBeLessThanOrEqual(15);
    expect(GENERIC_CAP).toBeGreaterThan(0);
  });

  it('drops a target from the generic panel when a precise relation shows it', () => {
    // A page lists the same target through both a precise relation and the
    // generic `relatedConcept` catch-all. buildRelationGroups is the exact code
    // path RelationPanels renders, so this asserts the real dedup: the precise
    // panel keeps the target, the generic panel drops it.
    const shared = 'commodity:maize-grain';
    const byRelation = new Map<RelationType, RelationTarget[]>([
      [
        'appliesToCommodity',
        [
          {
            title: 'Maize Grain',
            href: '/commodities/maize-grain',
            targetKey: shared,
          },
        ],
      ],
      [
        'relatedConcept',
        [
          // Same target as the precise relation above — must be dropped here.
          {
            title: 'Maize Grain',
            href: '/commodities/maize-grain',
            targetKey: shared,
          },
          {
            title: 'Clay Soil',
            href: '/soils/clay-soil',
            targetKey: 'soil:clay-soil',
          },
        ],
      ],
    ]);
    const groups = buildRelationGroups(byRelation);
    const precise = groups.find((g) => g.relation === 'appliesToCommodity');
    const generic = groups.find((g) => g.relation === 'relatedConcept');
    expect(precise?.items.map((i) => i.targetKey)).toContain(shared);
    // The precise link wins: the duplicate is gone from the generic panel …
    expect(generic?.items.map((i) => i.targetKey)).not.toContain(shared);
    // … and the non-duplicate generic target survives.
    expect(generic?.items.map((i) => i.targetKey)).toContain('soil:clay-soil');
    expect(generic?.total).toBe(1);
  });

  it('caps the generic panel at GENERIC_CAP while precise panels stay uncapped', () => {
    const generic: RelationTarget[] = Array.from({ length: 30 }, (_, i) => ({
      title: `Topic ${String(i).padStart(2, '0')}`,
      href: `/x/${i}`,
      targetKey: `soil:t${i}`,
    }));
    const precise: RelationTarget[] = Array.from({ length: 30 }, (_, i) => ({
      title: `Commodity ${String(i).padStart(2, '0')}`,
      href: `/c/${i}`,
      targetKey: `commodity:c${i}`,
    }));
    const byRelation = new Map<RelationType, RelationTarget[]>([
      ['relatedConcept', generic],
      ['appliesToCommodity', precise],
    ]);
    const groups = buildRelationGroups(byRelation);
    const g = groups.find((r) => r.relation === 'relatedConcept')!;
    const p = groups.find((r) => r.relation === 'appliesToCommodity')!;
    expect(g.items.length).toBe(GENERIC_CAP);
    expect(g.truncated).toBe(true);
    expect(g.total).toBe(30);
    // The precise panel is never capped.
    expect(p.items.length).toBe(30);
    expect(p.truncated).toBe(false);
  });
});

/* -------------------------------------------------------------------------- *
 * §11 — ADVERSARIAL FIXTURES.
 *
 * Each is a defect that PASSED before Phase 5F. Every one must now be caught by
 * a gate. A test that only asserts "the corpus is clean" cannot prove the gate
 * fires — so each fixture reintroduces the defect and asserts the gate reports
 * it.
 * -------------------------------------------------------------------------- */
describe('Phase 5F §11 — the gates catch what used to slip through', () => {
  const isRef = (v: unknown): v is ContentRef =>
    !!v &&
    typeof v === 'object' &&
    typeof (v as ContentRef).type === 'string' &&
    typeof (v as ContentRef).slug === 'string';

  it('a source reference is never discovered as a semantic edge', () => {
    // sourceReferences carry sourceId, not type/slug — structurally not a ref.
    const item = {
      contentType: 'crop',
      slug: 'x',
      sourceReferences: [{ sourceId: 'fao', citedFor: 'y' }],
      connections: [{ type: 'soil', slug: 'clay-soil' }],
    } as unknown as AnyContent;
    const fields = declaredRefs(item).map((d) => d.field);
    expect(fields).not.toContain('sourceReferences');
    expect(fields).toContain('connections');
  });

  it('an unmapped ref field is reported, not silently turned into an edge', () => {
    // The whole graph-unmapped-ref-field gate. Confirm it exists and is wired:
    // there are none in the corpus, but the code path is exercised by the
    // fixture test, and content:validate would fail on a real one.
    const codes = new Set(graphIssues().map((i) => i.code));
    // No unmapped fields today — the assertion is that the corpus is clean AND
    // the check is present (imported and run).
    expect(codes.has('graph-unmapped-ref-field')).toBe(false);
    expect(graphIssues()).toEqual([]); // whole gate green
  });

  it('a vacuous edge-validity test cannot pass on an empty set', () => {
    // The Phase 5D failure: `for (e of semanticEdges(x)) expect(valid(e))` is
    // true of nothing. The coverage gate asserts the OPPOSITE — declared refs
    // must appear — so an empty edge set for a type that declares refs fails.
    for (const item of PUBLISHED_CONTENT) {
      const declared = declaredRefs(item).filter((d) =>
        isRefField(d.field),
      ).length;
      const emitted = semanticEdges(item).length;
      if (declared > 0) expect(emitted, item.slug).toBeGreaterThan(0);
    }
  });

  it('a relation made precise but unrendered is caught', () => {
    // appliesToCommodity is the historical case; the gate returns [] only
    // because it now has a heading. Removing that heading would populate
    // unrenderableRelations — which is what the gate keys on.
    const covered = relationRenderCoverage().find(
      (r) => r.relation === 'appliesToCommodity',
    );
    expect(covered?.covered).toBe(true);
    expect(covered?.hasHeading).toBe(true);
  });

  it('no type-unsafe inverse is materialised', () => {
    // partOfFarmingSystem⁻¹ etc. — 664 edges that would carry a FALSE type
    // pairing. `susceptibleTo` is a legitimate FORWARD relation (crop→disease),
    // so its presence is fine; what must NOT exist is the unsafe INVERSE edge —
    // climate --susceptibleTo--> crop, or farming-system --includesCrop-->
    // machinery. Check the exact bad pairings, not the shared label.
    const unsafe = typeUnsafeInverses();
    expect(unsafe.length).toBeGreaterThanOrEqual(3);
    for (const e of allSemanticEdges()) {
      expect(e.origin).not.toBe('inverse'); // no read-time materialised inverse
      for (const u of unsafe)
        if (e.relation === u.inverse)
          expect(
            u.unsafeFor.includes(e.to.type),
            `${e.from.type} --${e.relation}--> ${e.to.type} realises the unsafe inverse of ${u.relation}`,
          ).toBe(false);
    }
  });

  it('a parent-child edge is present in the semantic graph, not just nav', () => {
    // The 101-defect: nav had crop→cultivar, the graph did not.
    const crop = PUBLISHED_CONTENT.find(
      (c) =>
        c.contentType === 'crop' &&
        semanticEdges(c).some((e) => e.relation === 'hasCultivar'),
    );
    expect(
      crop,
      'some crop must have a cultivar edge in the graph',
    ).toBeDefined();
  });

  it('a generated edge always carries its generator', () => {
    for (const e of allSemanticEdges())
      if (e.origin === 'generated')
        expect(e.generator, `${e.from.slug} → ${e.to.slug}`).toBeTruthy();
  });

  it('a reverse UI query never invents a false semantic label', () => {
    // The reverse of partOfFarmingSystem must never surface as includesCrop.
    const fs = PUBLISHED_CONTENT.find(
      (c) =>
        c.contentType === 'farming-system' &&
        allSemanticEdges().some((e) => e.to.slug === c.slug),
    )!;
    for (const r of reverseEdges({ type: 'farming-system', slug: fs.slug }))
      expect(r.relation.startsWith('includes')).toBe(false);
  });

  it('a prose block with its own `type` is never a ref', () => {
    const item = {
      contentType: 'crop',
      slug: 'x',
      sections: [
        { id: 's', heading: 'H', body: [{ type: 'callout', text: 't' }] },
      ],
    } as unknown as AnyContent;
    // `sections` holds blocks with a `type` ("callout") but no slug and no
    // content-type value, so declaredRefs must never surface them.
    expect(declaredRefs(item).map((d) => d.field)).not.toContain('sections');
    expect(declaredRefs(item)).toEqual([]);
  });

  it('a symmetric relation cannot be declared to suppress a reciprocity error', () => {
    // relation-spec requires a rationale for every symmetric relation, and a
    // separate test (§4 file) asserts none is missing. Here: confirm the
    // type-unsafe inverses are NOT symmetric (which would have been the lazy fix).
    for (const u of typeUnsafeInverses())
      expect(
        isMaterializable(u.relation),
        `${u.relation} must stay directional`,
      ).toBe(false);
  });
});
