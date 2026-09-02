import { describe, expect, it } from 'vitest';
import { CROP_CONCEPTS, CONCEPT_BY_SLUG } from '@/data/crop-identity/concepts';
import {
  TAXONOMY_DISAGREEMENTS,
  DISAGREEMENT_BY_SLUG,
} from '@/data/crop-identity/taxonomy-disagreements';
import {
  AMBIGUOUS_BINOMIALS,
  HOMONYM_RESOLUTIONS,
} from '@/data/crop-identity/homonyms';
import { NAME_CROSSWALK } from '@/data/crop-identity/name-crosswalk';
import { CONCEPT_REQUIRED_RANKS } from '@/types/crop-concepts';
import { CROP_IDENTITIES, IDENTITY_BY_SLUG } from '@/lib/crops/identity';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { benchmarkIndex } from '@/lib/search/benchmark';
import { search } from '@/lib/search/engine';

const norm = (s: string) =>
  s.toLowerCase().replace(/×/g, '').replace(/\s+/g, ' ').trim();
const crops = new Set(
  PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) => c.slug),
);

describe('concepts — a page that is not one plant says so', () => {
  it('declares a scope for every published multi-taxon page', () => {
    for (const c of CROP_IDENTITIES) {
      const needs =
        (CONCEPT_REQUIRED_RANKS as readonly string[]).includes(c.taxonRank) &&
        c.profileDepth === 'full-profile';
      expect(CONCEPT_BY_SLUG.has(c.slug), c.slug).toBe(needs);
    }
  });

  it('leaves a hybrid that names one taxon alone', () => {
    // lemon, lime, strawberry, plantain and mint are hybrids AND single taxa.
    // Declaring a scope for them would say the page covers several plants.
    for (const slug of ['lemon', 'lime', 'strawberry', 'plantain', 'mint']) {
      expect(IDENTITY_BY_SLUG.get(slug)?.taxonRank, slug).toBe('hybrid');
      expect(CONCEPT_BY_SLUG.has(slug), slug).toBe(false);
    }
  });

  it('never lets a concept contain itself', () => {
    for (const k of CROP_CONCEPTS)
      for (const t of k.constituents)
        expect(t.identitySlug, `${k.slug}`).not.toBe(k.slug);
  });

  it('re-derives every coverage claim from the corpus', () => {
    // The check the prose notes failed, in both directions.
    const byName = new Map(
      CROP_IDENTITIES.map((c) => [norm(c.acceptedScientificName), c]),
    );
    for (const k of CROP_CONCEPTS)
      for (const t of k.constituents) {
        const where = `${k.slug}/${t.scientificName}`;
        if (t.heldAs === 'not-held') {
          expect(t.identitySlug, where).toBeUndefined();
          expect(byName.has(norm(t.scientificName)), where).toBe(false);
        } else {
          const id = IDENTITY_BY_SLUG.get(t.identitySlug!);
          expect(id, where).toBeDefined();
          expect(
            id!.taxonRank === 'cultivar-group',
            `${where} heldAs=${t.heldAs}`,
          ).toBe(t.heldAs === 'cultivar-group-only');
        }
      }
  });

  it('records the three claims that were wrong', () => {
    // These are the audit's findings, pinned so a future edit cannot quietly
    // restore the overclaim.
    // Macadamia was the overclaim: the note said both species were verified
    // and the corpus held neither. Wave 35 did the research the sentence
    // presupposed, so both are held now — and the thing worth pinning is that
    // the claim and the data agree, whichever way round they were fixed.
    const mac = CONCEPT_BY_SLUG.get('macadamia')!;
    expect(mac.constituents.length).toBe(2);
    for (const t of mac.constituents) {
      expect(t.heldAs, t.scientificName).toBe('own-identity');
      expect(IDENTITY_BY_SLUG.has(t.identitySlug!), t.identitySlug).toBe(true);
      expect(
        IDENTITY_BY_SLUG.get(t.identitySlug!)!.acceptedScientificName,
      ).toBe(t.scientificName);
    }

    const pumpkin = CONCEPT_BY_SLUG.get('pumpkin')!;
    const pepo = pumpkin.constituents.find(
      (t) => t.scientificName === 'Cucurbita pepo',
    )!;
    expect(pepo.heldAs).toBe('cultivar-group-only');
    expect(
      pumpkin.constituents.some(
        (t) => t.scientificName === 'Cucurbita ficifolia',
      ),
    ).toBe(true);

    const yam = CONCEPT_BY_SLUG.get('yam')!;
    const white = yam.constituents.find((t) => t.commonName === 'White yam')!;
    expect(white.scientificName).toBe('Dioscorea cayenensis subsp. rotundata');
  });

  it('links every constituent that has its own page', () => {
    for (const k of CROP_CONCEPTS) {
      const page = PUBLISHED_CONTENT.find(
        (p) => p.contentType === 'crop' && p.slug === k.slug,
      ) as { relatedTopics?: { slug?: string }[] } | undefined;
      for (const t of k.constituents) {
        if (!t.identitySlug || !crops.has(t.identitySlug)) continue;
        expect(
          (page?.relatedTopics ?? []).some((r) => r.slug === t.identitySlug),
          `${k.slug} → ${t.identitySlug}`,
        ).toBe(true);
      }
    }
  });
});

describe('disagreement — a coverage gap is not a dispute', () => {
  it('classifies every non-agreed identity exactly once', () => {
    for (const c of CROP_IDENTITIES)
      expect(DISAGREEMENT_BY_SLUG.has(c.slug), c.slug).toBe(
        c.agreement !== 'agreed',
      );
  });

  it('files a silent authority as coverage and nothing else', () => {
    const silent = /no placement|not resolve|\(none\)/i;
    for (const d of TAXONOMY_DISAGREEMENTS) {
      const oneSilent = silent.test(d.wfo) || silent.test(d.powo);
      expect(d.kind === 'coverage', d.identitySlug).toBe(oneSilent);
    }
  });

  it('never records the same reading for both authorities', () => {
    for (const d of TAXONOMY_DISAGREEMENTS)
      expect(d.wfo, d.identitySlug).not.toBe(d.powo);
  });

  it('separates a spelling from a dispute', () => {
    // white-yam was recorded as "disagreed". The authorities agree on the
    // plant and on its rank, and spell the epithet differently.
    expect(DISAGREEMENT_BY_SLUG.get('white-yam')?.kind).toBe('orthography');
    expect(DISAGREEMENT_BY_SLUG.get('mustard')?.kind).toBe('placement');
  });
});

describe('homonyms — the sense is pinned', () => {
  it('resolves every binomial listed as ambiguous', () => {
    for (const n of AMBIGUOUS_BINOMIALS)
      expect(
        HOMONYM_RESOLUTIONS.some((h) => h.name === n),
        n,
      ).toBe(true);
  });

  it('records at least two senses, or it is not a homonym', () => {
    for (const h of HOMONYM_RESOLUTIONS) {
      expect(h.senses.length, h.name).toBeGreaterThanOrEqual(2);
      expect(
        h.senses.some((s) => s.author === h.corpusTakes),
        h.name,
      ).toBe(true);
    }
  });

  it('covers every identity resting on an ambiguous name', () => {
    for (const c of CROP_IDENTITIES) {
      const amb = AMBIGUOUS_BINOMIALS.find(
        (n) => norm(n) === norm(c.acceptedScientificName),
      );
      if (!amb) continue;
      expect(
        HOMONYM_RESOLUTIONS.find((h) => h.name === amb)?.identitySlugs,
        c.slug,
      ).toContain(c.slug);
    }
  });
});

describe('crosswalk — a refusal that answers someone', () => {
  const idx = benchmarkIndex();
  const top = (q: string) => search(idx, q, { limit: 1 }).results[0]?.doc;

  it('resolves every refused name that has an answer', () => {
    expect(NAME_CROSSWALK.length).toBe(83);
    const resolved = NAME_CROSSWALK.filter((x) => x.resolvesTo);
    expect(resolved.length).toBe(79);
  });

  it('never sends a homonym to a plant it is not', () => {
    for (const x of NAME_CROSSWALK)
      if (x.kind === 'homonym') expect(x.resolvesTo, x.name).toBeNull();
  });

  it.each([
    ['canola', 'Oilseed rape'],
    ['nectarine', 'Peach'],
    ['pisum sativum', 'Pea'],
    ['cavendish banana', 'Banana'],
    ['cherry tomato', 'Tomato'],
    ['triticum durum', 'Durum Wheat'],
    ['forage maize', 'Maize'],
  ])('“%s” now reaches %s', (q, expected) => {
    expect(top(q)?.title).toBe(expected);
  });

  it('leaves the crops that own those queries alone', () => {
    // Attaching 79 names at name weight must not move an entity off its own
    // term.
    for (const [q, expected] of [
      ['wheat', 'Wheat'],
      ['maize', 'Maize'],
      ['potato', 'Potato'],
      ['tomato', 'Tomato'],
      ['banana', 'Banana'],
      ['peach', 'Peach'],
    ] as const)
      expect(top(q)?.title, q).toBe(expected);
  });
});
