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
      // A cultivar group of a hybrid species inherits the parent's mark:
      // "Citrus × aurantium Sweet Orange Group" is a selection FROM a hybrid,
      // not a new cross of its own.
      const inherited =
        c.taxonRank === 'cultivar-group' &&
        Boolean(c.parentSpecies?.includes('×'));
      expect(marked, `${c.slug} ${c.acceptedScientificName}`).toBe(
        hybrid || inherited,
      );
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

describe('crops — cultivated forms are groups, not species (Wave 28)', () => {
  it('gives every cultivar group a verified parent species', () => {
    const groups = CROP_IDENTITIES.filter(
      (c) => c.taxonRank === 'cultivar-group',
    );
    expect(groups.length).toBeGreaterThan(10);
    const known = new Set(
      CROP_IDENTITIES.map((c) => key(c.acceptedScientificName)),
    );
    for (const c of groups) {
      expect(c.parentSpecies, c.slug).toBeTruthy();
      expect(
        c.acceptedScientificName.startsWith(c.parentSpecies!),
        c.slug,
      ).toBe(true);
      // the parent is a real binomial, and an authority named it
      expect(
        c.parentSpecies!.split(/\s+/).filter((w) => w !== '×').length,
        c.slug,
      ).toBe(2);
      expect(
        c.authorities.some(
          (a) => key(a.acceptedName) === key(c.parentSpecies!),
        ),
        c.slug,
      ).toBe(true);
      void known;
    }
  });

  it('keeps the Brassica oleracea forms apart without inventing species', () => {
    const forms = [
      'broccoli',
      'cabbage',
      'cauliflower',
      'kale',
      'kohlrabi',
      'brussels-sprouts',
    ];
    for (const slug of forms) {
      const c = CROP_IDENTITIES.find((x) => x.slug === slug)!;
      expect(c, slug).toBeDefined();
      expect(c.taxonRank, slug).toBe('cultivar-group');
      expect(c.parentSpecies, slug).toBe('Brassica oleracea');
    }
    // six crops, six distinct group names, one species
    const names = new Set(
      forms.map(
        (s) =>
          CROP_IDENTITIES.find((x) => x.slug === s)!.acceptedScientificName,
      ),
    );
    expect(names.size).toBe(forms.length);
  });

  it('keeps sweet and chilli pepper as one species in two groups', () => {
    const sweet = CROP_IDENTITIES.find((c) => c.slug === 'sweet-pepper')!;
    const chilli = CROP_IDENTITIES.find((c) => c.slug === 'chili-pepper')!;
    expect(sweet.parentSpecies).toBe('Capsicum annuum');
    expect(chilli.parentSpecies).toBe('Capsicum annuum');
    expect(sweet.acceptedScientificName).not.toBe(
      chilli.acceptedScientificName,
    );
    // and the four genuinely separate Capsicum species are held as species
    for (const s of [
      'habanero-pepper',
      'tabasco-pepper',
      'aji-pepper',
      'rocoto-pepper',
    ])
      expect(CROP_IDENTITIES.find((c) => c.slug === s)?.taxonRank, s).toBe(
        'species',
      );
  });

  it('holds beet as one species in three groups, not three species', () => {
    for (const s of ['beetroot', 'swiss-chard', 'sugar-beet']) {
      const c = CROP_IDENTITIES.find((x) => x.slug === s)!;
      expect(c.taxonRank, s).toBe('cultivar-group');
      expect(c.parentSpecies, s).toBe('Beta vulgaris');
    }
  });

  it('holds pumpkin as a genus concept, not one arbitrary species', () => {
    const p = CROP_IDENTITIES.find((c) => c.slug === 'pumpkin')!;
    expect(p.taxonRank).toBe('genus');
    expect(p.genus).toBe('Cucurbita');
    expect(p.limitations?.length).toBeGreaterThan(0);
    // and the four cultivated Cucurbita species are held separately
    for (const s of [
      'winter-squash-maxima',
      'butternut-squash',
      'cushaw-squash',
      'fig-leaf-gourd',
    ])
      expect(
        CROP_IDENTITIES.some((c) => c.slug === s),
        s,
      ).toBe(true);
  });
});

describe('crops — hybrids and complexes keep their shape (Wave 29)', () => {
  it('never puts two citrus crops on one taxon', () => {
    const orange = CROP_IDENTITIES.find((c) => c.slug === 'orange')!;
    const grapefruit = CROP_IDENTITIES.find((c) => c.slug === 'grapefruit')!;
    // Both authorities resolve sweet orange AND grapefruit to Citrus ×
    // aurantium f. aurantium. Published at that rank they would be one plant.
    expect(orange.acceptedScientificName).not.toBe(
      grapefruit.acceptedScientificName,
    );
    expect(orange.taxonRank).toBe('cultivar-group');
    expect(orange.parentSpecies).toBe('Citrus × aurantium');
    expect(grapefruit.parentSpecies).toBe('Citrus × aurantium');
  });

  it('keeps the hybrid mark on a cultivar group of a hybrid species', () => {
    for (const c of CROP_IDENTITIES.filter(
      (x) => x.taxonRank === 'cultivar-group' && x.parentSpecies?.includes('×'),
    )) {
      expect(c.acceptedScientificName, c.slug).toContain('×');
    }
  });

  it('keeps lemon and lime as their own hybrids, not sunk into the complex', () => {
    const lemon = CROP_IDENTITIES.find((c) => c.slug === 'lemon')!;
    const lime = CROP_IDENTITIES.find((c) => c.slug === 'lime')!;
    expect(lemon.taxonRank).toBe('hybrid');
    expect(lemon.acceptedScientificName).toBe('Citrus × limon');
    expect(lime.acceptedScientificName).toBe('Citrus × aurantiifolia');
  });

  it('does not claim a wild species for commercial banana', () => {
    const b = CROP_IDENTITIES.find((c) => c.slug === 'banana')!;
    expect(b.taxonRank).toBe('genus');
    expect(b.limitations?.join(' ')).toMatch(/genome group|clone/i);
    // both parent species held separately
    for (const n of ['Musa acuminata', 'Musa balbisiana'])
      expect(
        CROP_IDENTITIES.some((c) => c.acceptedScientificName === n),
        n,
      ).toBe(true);
    // and plantain keeps the hybrid mark
    const p = CROP_IDENTITIES.find((c) => c.slug === 'plantain')!;
    expect(p.taxonRank).toBe('hybrid');
    expect(p.acceptedScientificName).toContain('×');
  });

  it('holds blackberry as a complex rather than an unsupported species', () => {
    const b = CROP_IDENTITIES.find((c) => c.slug === 'blackberry')!;
    expect(b.taxonRank).toBe('species-complex');
    expect(b.agreement).toBe('single-source');
    expect(b.limitations?.length).toBeGreaterThan(0);
  });

  it('corrects almond to the name both authorities accept', () => {
    const a = CROP_IDENTITIES.find((c) => c.slug === 'almond')!;
    expect(a.acceptedScientificName).toBe('Prunus amygdalus');
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
