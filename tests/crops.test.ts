import { describe, expect, it } from 'vitest';
import {
  CROP_IDENTITIES,
  contestedIdentities,
  dataOnlyIdentities,
  identityForCrop,
} from '@/lib/crops/identity';
import {
  AGRICULTURAL_USES,
  CROP_GROUPS,
  HARVESTED_PARTS,
  MULTI_TAXON_RANKS,
  TAXON_RANKS,
} from '@/types/crop-identity';
import { CROP_TAXA_PATH } from '@/lib/crops/paths';
import { PUBLISHED_CONTENT } from '@/lib/content/registry';
import { SOURCE_MAP } from '@/lib/sources/registry';
import { allRoutes } from '@/lib/seo/routes';
import { buildSearchDocuments } from '@/lib/search/documents';

const DOCS = buildSearchDocuments();
const paths = allRoutes().map((r) => r.path);

function key(n: string) {
  return n
    .toLowerCase()
    .replace(/×/g, '')
    .replace(/\b(subsp\.|var\.|f\.)\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

describe('crops — a name is not an identity', () => {
  it('rests every identity on at least one named authority', () => {
    for (const c of CROP_IDENTITIES) {
      expect(c.authorities.length, c.slug).toBeGreaterThan(0);
      for (const a of c.authorities)
        expect(SOURCE_MAP.has(a.sourceId)).toBe(true);
      expect(c.taxonomySourceIds.length, c.slug).toBeGreaterThan(0);
    }
  });

  it('never lets two identities claim the same taxon', () => {
    const seen = new Map<string, string>();
    for (const c of CROP_IDENTITIES) {
      const k = key(c.acceptedScientificName);
      expect(seen.has(k), `${c.slug} duplicates ${seen.get(k)}`).toBe(false);
      seen.set(k, c.slug);
    }
  });

  it('never publishes a synonym as another crop’s accepted name', () => {
    const accepted = new Map(
      CROP_IDENTITIES.map((c) => [key(c.acceptedScientificName), c.slug]),
    );
    for (const c of CROP_IDENTITIES)
      for (const s of c.synonyms ?? []) {
        const holder = accepted.get(key(s.name));
        expect(
          holder === undefined || holder === c.slug,
          `${c.slug}: ${s.name}`,
        ).toBe(true);
      }
  });

  it('keeps the hybrid mark and the hybrid rank in step', () => {
    for (const c of CROP_IDENTITIES) {
      const marked = /×/.test(c.acceptedScientificName);
      const hybrid = [
        'hybrid',
        'intergeneric-hybrid',
        'nothosubspecies',
      ].includes(c.taxonRank);
      expect(marked, `${c.slug} ${c.acceptedScientificName}`).toBe(hybrid);
    }
  });

  it('makes the genus the genus of the name it is on', () => {
    for (const c of CROP_IDENTITIES) {
      const first = c.acceptedScientificName.trim().split(/\s+/)[0]!;
      expect(key(first), c.slug).toBe(key(c.genus));
    }
  });
});

describe('crops — a crop is not a cultivar or a commodity', () => {
  it('shares no slug with a published cultivar', () => {
    const cultivars = new Set(
      PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map(
        (c) => c.slug,
      ),
    );
    for (const c of CROP_IDENTITIES)
      expect(cultivars.has(c.slug), c.slug).toBe(false);
  });

  it('names no identity after a published cultivar', () => {
    const titles = new Set(
      PUBLISHED_CONTENT.filter((c) => c.contentType === 'cultivar').map((c) =>
        c.title.toLowerCase(),
      ),
    );
    for (const c of CROP_IDENTITIES)
      expect(titles.has(c.primaryCommonName.toLowerCase()), c.slug).toBe(false);
  });
});

describe('crops — a concept that is not one taxon says so', () => {
  it('gives every multi-taxon concept a limitation and an explanation', () => {
    const multi = CROP_IDENTITIES.filter((c) =>
      MULTI_TAXON_RANKS.includes(c.taxonRank),
    );
    expect(multi.length).toBeGreaterThan(0);
    for (const c of multi) {
      expect(c.limitations?.length, c.slug).toBeGreaterThan(0);
      expect(c.agreementNote?.length, c.slug).toBeGreaterThan(40);
    }
  });

  it('holds yam as a complex, not as one species', () => {
    const yam = CROP_IDENTITIES.find((c) => c.slug === 'yam')!;
    expect(yam.taxonRank).toBe('species-complex');
    expect(yam.genus).toBe('Dioscorea');
    // and the constituent species are held separately
    for (const s of ['white-yam', 'water-yam', 'lesser-yam'])
      expect(
        CROP_IDENTITIES.some((c) => c.slug === s),
        s,
      ).toBe(true);
  });

  it('holds triticale as an intergeneric hybrid', () => {
    const t = CROP_IDENTITIES.find((c) => c.slug === 'triticale')!;
    expect(t.taxonRank).toBe('intergeneric-hybrid');
    expect(t.acceptedScientificName).toContain('×');
  });
});

describe('crops — disagreement is recorded, not resolved silently', () => {
  it('explains every case where the authorities did not simply agree', () => {
    for (const c of contestedIdentities()) {
      expect(c.agreementNote?.length, c.slug).toBeGreaterThan(60);
      expect(c.authorities.length, c.slug).toBeGreaterThan(0);
    }
  });

  it('keeps both readings on a disagreement', () => {
    for (const c of CROP_IDENTITIES.filter(
      (c) => c.agreement === 'disagreed',
    )) {
      const names = new Set(c.authorities.map((a) => key(a.acceptedName)));
      expect(names.size, c.slug).toBeGreaterThan(1);
    }
  });
});

describe('crops — data-only taxa get no page', () => {
  it('gives no data-only taxon a URL of its own', () => {
    for (const c of dataOnlyIdentities()) {
      expect(paths.includes(`/crops/${c.slug}`), c.slug).toBe(false);
      expect(c.cropPageSlug, c.slug).toBeUndefined();
    }
    expect(dataOnlyIdentities().length).toBeGreaterThan(0);
  });

  it('routes every data-only taxon to the one directory instead', () => {
    expect(paths).toContain(CROP_TAXA_PATH);
    const docs = DOCS.filter((d) => d.type === 'crop-taxon');
    for (const d of docs) expect(d.route.startsWith(CROP_TAXA_PATH)).toBe(true);
    // one hub document plus one per data-only taxon, and nothing per full profile
    expect(docs.length).toBe(dataOnlyIdentities().length + 1);
  });

  it('never lets a page-less taxon carry a crop’s own name at name weight', () => {
    // Spelt's accepted name contains wheat's binomial exactly. With the
    // scientific name at name weight the taxon outranked the article.
    const cropTitles = new Set(
      PUBLISHED_CONTENT.filter((c) => c.contentType === 'crop').map((c) =>
        c.title.toLowerCase(),
      ),
    );
    for (const d of DOCS.filter((d) => d.type === 'crop-taxon'))
      for (const n of d.names ?? [])
        expect(cropTitles.has(n.toLowerCase()), `${d.id}: ${n}`).toBe(false);
  });

  it('gives full-profile identities a published page and no taxon document', () => {
    const full = CROP_IDENTITIES.filter(
      (c) => c.profileDepth === 'full-profile',
    );
    expect(full.length).toBeGreaterThan(0);
    for (const c of full) {
      expect(c.cropPageSlug, c.slug).toBe(c.slug);
      expect(paths.includes(`/crops/${c.slug}`), c.slug).toBe(true);
      expect(identityForCrop(c.slug), c.slug).toBeDefined();
    }
  });
});

describe('crops — vocabularies are controlled and live', () => {
  it('uses only vocabulary values', () => {
    for (const c of CROP_IDENTITIES) {
      expect(TAXON_RANKS).toContain(c.taxonRank);
      for (const g of c.cropGroups) expect(CROP_GROUPS).toContain(g);
      for (const p of c.harvestedParts) expect(HARVESTED_PARTS).toContain(p);
      for (const u of c.agriculturalUses)
        expect(AGRICULTURAL_USES).toContain(u);
    }
  });

  it('records a bare family name, not a glossed one', () => {
    // The free-text field this replaces held "Amaranthaceae (formerly
    // Chenopodiaceae)" and "Anacardiaceae (cashew family)", so one family
    // looked like several.
    for (const c of CROP_IDENTITIES)
      expect(c.family, c.slug).toMatch(/^[A-Z][a-z]+$/);
  });
});
