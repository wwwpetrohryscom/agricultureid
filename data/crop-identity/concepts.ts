/**
 * The declared scope of every published crop page that is not one plant.
 *
 * Each record was written by reading the identity note that already existed and
 * then checking it against the corpus. Three of the sixteen notes did not
 * survive that check, and the corrections are recorded here rather than in the
 * prose that got them wrong:
 *
 *   macadamia  said "Both species are verified separately". When Wave 33
 *              checked, the corpus held NEITHER. Wave 35 did the research the
 *              sentence presupposed: both were verified against WFO and POWO,
 *              which agree on both names and on Proteaceae, and both are now
 *              held as taxa. The sentence is true because the work was done,
 *              not because the claim was restored.
 *   pumpkin    said "All four are held separately with verified identities".
 *              Cucurbita pepo is held only as the Zucchini Group, a cultivar
 *              group, not as the species. It also omitted C. ficifolia, which
 *              the corpus does hold.
 *   yam        named "D. rotundata" as a constituent. Both authorities place
 *              white yam under yellow yam, and the corpus accordingly holds it
 *              as Dioscorea cayenensis subsp. rotundata — a subspecies, not a
 *              species. That is the same fact that makes white yam a P4
 *              promotion candidate rather than a P1 one.
 *
 * None of those was findable by reading the sentence. All three are findable by
 * checking the claim against the data, which is what this file is for.
 */
import type { CropConcept } from '@/types/crop-concepts';

export const CROP_CONCEPTS: readonly CropConcept[] = [
  {
    slug: 'coffee',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers coffee as a crop. Commercial coffee is two species with different biology — arabica and robusta — and both have their own pages; a third, liberica, is grown in small quantities and is held as a taxon.',
    constituents: [
      {
        scientificName: 'Coffea arabica',
        commonName: 'Arabica coffee',
        heldAs: 'own-identity',
        identitySlug: 'arabica-coffee',
        role: 'Most of the specialty and filter trade. Tetraploid and self-fertile, grown at altitude.',
      },
      {
        scientificName: 'Coffea canephora',
        commonName: 'Robusta coffee',
        heldAs: 'own-identity',
        identitySlug: 'robusta-coffee',
        role: 'Most of the soluble trade. Diploid and self-incompatible, grown in the lowlands.',
      },
      {
        scientificName: 'Coffea liberica',
        commonName: 'Liberica coffee',
        heldAs: 'own-identity',
        identitySlug: 'liberica-coffee',
        role: 'A small third species, grown mainly in parts of Southeast Asia and West Africa.',
      },
    ],
    splitCriterion:
      'A species earns its own page when the agronomy, disease profile and trade of that species cannot be stated at genus level without being wrong about the others. Arabica and robusta met that in Wave 32; liberica did not, because the published record on it is thin.',
    sourceIds: ['ico', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cotton',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers cotton as a crop. Four Gossypium species are grown for fibre; Gossypium hirsutum, the large majority of world production, has its own page and the other three are held as taxa.',
    constituents: [
      {
        scientificName: 'Gossypium hirsutum',
        commonName: 'Upland cotton',
        heldAs: 'own-identity',
        identitySlug: 'upland-cotton',
        role: 'The large majority of world lint. Medium staple.',
      },
      {
        scientificName: 'Gossypium barbadense',
        commonName: 'Barbadense cotton',
        heldAs: 'own-identity',
        identitySlug: 'barbadense-cotton',
        role: 'The extra-long staple trade, spun into fine-count yarns.',
      },
      {
        scientificName: 'Gossypium arboreum',
        commonName: 'Tree cotton',
        heldAs: 'own-identity',
        identitySlug: 'tree-cotton',
        role: 'An Old World diploid, still grown in parts of Asia.',
      },
      {
        scientificName: 'Gossypium herbaceum',
        commonName: 'Levant cotton',
        heldAs: 'own-identity',
        identitySlug: 'levant-cotton',
        role: 'The other Old World diploid, grown in Asia and parts of Africa.',
      },
    ],
    splitCriterion:
      'The same standard as coffee. Upland cotton met it in Wave 32 because staple class, ginning and the Bt pest complex are species-level facts. The two diploids have not been reviewed for promotion.',
    sourceIds: ['fao', 'usda-ars', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'lupin',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers lupin as a crop. Four cultivated Lupinus species differ in alkaloid content, soil preference and end use, and each is held as a taxon.',
    constituents: [
      {
        scientificName: 'Lupinus albus',
        commonName: 'White lupin',
        heldAs: 'own-identity',
        identitySlug: 'white-lupin',
        role: 'Mediterranean origin; the highest-protein of the group.',
      },
      {
        scientificName: 'Lupinus angustifolius',
        commonName: 'Narrow-leafed lupin',
        heldAs: 'own-identity',
        identitySlug: 'narrow-leafed-lupin',
        role: 'The main Australian crop; tolerant of acid sandy soils.',
      },
      {
        scientificName: 'Lupinus luteus',
        commonName: 'Yellow lupin',
        heldAs: 'own-identity',
        identitySlug: 'yellow-lupin',
        role: 'Grown on the poorest sands; the most acid-tolerant.',
      },
      {
        scientificName: 'Lupinus mutabilis',
        commonName: 'Andean lupin',
        heldAs: 'own-identity',
        identitySlug: 'andean-lupin',
        role: 'The Andean crop; high oil as well as protein, and requires debittering.',
      },
    ],
    splitCriterion:
      'None of the four has been reviewed for promotion. Alkaloid content and debittering practice differ enough between them that a species page would carry real content.',
    sourceIds: ['fao', 'cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'pumpkin',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers pumpkins and winter squashes, which are grown from several Cucurbita species that differ in rind, keeping quality and stem form. No single species is "the" pumpkin.',
    constituents: [
      {
        scientificName: 'Cucurbita pepo',
        commonName: 'Field pumpkin',
        // The correction. The corpus holds the Zucchini Group, not the species.
        heldAs: 'cultivar-group-only',
        identitySlug: 'zucchini',
        role: 'Carries the Halloween pumpkins, acorn squash, and — as the Zucchini Group the corpus does hold — courgettes.',
      },
      {
        scientificName: 'Cucurbita maxima',
        commonName: 'Winter squash',
        heldAs: 'own-identity',
        identitySlug: 'winter-squash-maxima',
        role: 'The largest fruits and the best keepers; soft round stem.',
      },
      {
        scientificName: 'Cucurbita moschata',
        commonName: 'Butternut squash',
        heldAs: 'own-identity',
        identitySlug: 'butternut-squash',
        role: 'The most heat- and disease-tolerant of the four; hard flared stem.',
      },
      {
        scientificName: 'Cucurbita argyrosperma',
        commonName: 'Cushaw squash',
        heldAs: 'own-identity',
        identitySlug: 'cushaw-squash',
        role: 'Grown mainly in Mexico and Central America, often for seed.',
      },
      {
        scientificName: 'Cucurbita ficifolia',
        commonName: 'Fig-leaf gourd',
        heldAs: 'own-identity',
        identitySlug: 'fig-leaf-gourd',
        role: 'A highland species used for preserves and as cucurbit rootstock. Omitted from the original scope note.',
      },
    ],
    splitCriterion:
      'A species earns a page when its rind, storage behaviour and disease susceptibility make genus-level advice misleading. Cucurbita pepo would additionally require the species identity the corpus does not currently hold.',
    sourceIds: ['fao', 'cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'macadamia',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers macadamia as a crop. Only two of the genus are grown for nuts — Macadamia integrifolia and M. tetraphylla — together with hybrids between them, and a large share of commercial plantings are those hybrids rather than either species.',
    constituents: [
      {
        scientificName: 'Macadamia integrifolia',
        commonName: 'Smooth-shell macadamia',
        heldAs: 'own-identity',
        identitySlug: 'smooth-shell-macadamia',
        role: 'The smooth-shelled species. The Hawaiian cultivars developed from it account for most of world production and are the founders of current breeding programmes.',
      },
      {
        scientificName: 'Macadamia tetraphylla',
        commonName: 'Rough-shell macadamia',
        heldAs: 'own-identity',
        identitySlug: 'rough-shell-macadamia',
        role: 'The rough-shelled species. A few pure cultivars are grown commercially, mainly in South Africa; most of its commercial contribution is through hybrids with M. integrifolia.',
      },
    ],
    splitCriterion:
      'Both species were verified against both authorities in Wave 35 and are now held as taxa. Promotion is a separate question and the answer is currently no: most commercial material is interspecific hybrid, so a page for either species alone would describe a minority of the crop while the genus page describes the rest. That would have to change before a split made sense.',
    sourceIds: ['fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'mulberry',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers mulberry as a crop. Two species are grown for different purposes — white mulberry for silkworm leaf, black mulberry for fruit — and each is held as a taxon.',
    constituents: [
      {
        scientificName: 'Morus alba',
        commonName: 'White mulberry',
        heldAs: 'own-identity',
        identitySlug: 'white-mulberry',
        role: 'Grown for leaf as silkworm feed; the basis of sericulture.',
      },
      {
        scientificName: 'Morus nigra',
        commonName: 'Black mulberry',
        heldAs: 'own-identity',
        identitySlug: 'black-mulberry',
        role: 'Grown for its fruit, which is soft and highly perishable and so is picked for local sale or processing rather than long-distance trade.',
      },
    ],
    splitCriterion:
      'The two end uses are different enough that either species could carry a page. Neither has been reviewed for promotion.',
    sourceIds: ['fao', 'cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jute',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers jute as a fibre crop. Two Corchorus species are grown together across the same region and both are held as taxa.',
    constituents: [
      {
        scientificName: 'Corchorus olitorius',
        commonName: 'Tossa jute',
        heldAs: 'own-identity',
        identitySlug: 'jute-mallow',
        role: 'The higher-yielding species, also grown as a leaf vegetable — which is why the corpus holds it under a leaf-vegetable name.',
      },
      {
        scientificName: 'Corchorus capsularis',
        commonName: 'White jute',
        heldAs: 'own-identity',
        identitySlug: 'white-jute',
        role: 'The species tolerant of the flooded land where much jute is grown.',
      },
    ],
    splitCriterion:
      'Neither has been reviewed for promotion. Tossa jute is complicated by carrying two unrelated end uses on one taxon.',
    sourceIds: ['fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'yam',
    kind: 'species-complex',
    scopeStatement:
      'This page covers yam as a crop. Several cultivated Dioscorea species are traded as yam and they differ in region, season length and storage; publishing one of them as "yam" would invent a taxon the trade name does not have.',
    constituents: [
      {
        scientificName: 'Dioscorea cayenensis subsp. rotundata',
        commonName: 'White yam',
        heldAs: 'own-identity',
        identitySlug: 'white-yam',
        // The correction. Not D. rotundata: both authorities place it under
        // yellow yam, which is why it is an infraspecific taxon here.
        role: 'Most West African production. Both authorities place it as an infraspecific taxon under yellow yam rather than as a species of its own.',
      },
      {
        scientificName: 'Dioscorea alata',
        commonName: 'Water yam',
        heldAs: 'own-identity',
        identitySlug: 'water-yam',
        role: 'The most widely distributed species, grown across Asia, the Pacific and the Caribbean.',
      },
      {
        scientificName: 'Dioscorea cayenensis',
        commonName: 'Yellow yam',
        heldAs: 'own-identity',
        identitySlug: 'yellow-yam',
        role: 'West African; the species under which white yam is placed.',
      },
      {
        scientificName: 'Dioscorea esculenta',
        commonName: 'Lesser yam',
        heldAs: 'own-identity',
        identitySlug: 'lesser-yam',
        role: 'Smaller tubers, shorter season.',
      },
      {
        scientificName: 'Dioscorea bulbifera',
        commonName: 'Aerial yam',
        heldAs: 'own-identity',
        identitySlug: 'aerial-yam',
        role: 'Bears aerial bulbils rather than a single underground tuber.',
      },
    ],
    splitCriterion:
      'White yam is the obvious candidate on production alone, and Wave 32 reviewed and refused it: because the authorities place it under yellow yam, promoting it alone would leave the concept incoherent while its own parent species stayed inside. Any split here has to take the cayenensis group as a whole.',
    sourceIds: ['fao', 'iita', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'blackberry',
    kind: 'species-complex',
    scopeStatement:
      'This page covers cultivated blackberries, which are complex hybrids drawn from many Rubus microspecies. Rubus is apomictic and its species boundaries are contested by the authorities themselves, so no accepted binomial can carry the page and the corpus holds none of the underlying taxa as a verified identity.',
    constituents: [
      {
        scientificName: 'Rubus fruticosus agg.',
        commonName: 'Blackberry aggregate',
        heldAs: 'not-held',
        role: 'An aggregate name, not a species. Plants of the World Online resolves it; World Flora Online returns no placement.',
      },
      {
        scientificName: 'Rubus ursinus',
        commonName: 'Californian blackberry',
        heldAs: 'not-held',
        role: 'One of the American parents behind the trailing cultivars.',
      },
    ],
    splitCriterion:
      'Nothing here can be split until the authorities agree on what the species are. This concept is waiting on taxonomy, not on editorial effort.',
    sourceIds: ['cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'banana',
    kind: 'clone-group-concept',
    scopeStatement:
      'This page covers banana as a crop. Commercial bananas are not a wild species: they are sterile clones, usually triploid, derived from two wild species and described by genome group such as AAA or AAB.',
    constituents: [
      {
        scientificName: 'Musa acuminata',
        commonName: 'Wild banana (A genome)',
        heldAs: 'own-identity',
        identitySlug: 'wild-banana-acuminata',
        role: 'Contributes the A genome. Cavendish is AAA — three sets from this species.',
      },
      {
        scientificName: 'Musa balbisiana',
        commonName: 'Wild banana (B genome)',
        heldAs: 'own-identity',
        identitySlug: 'wild-banana-balbisiana',
        role: 'Contributes the B genome, and with it much of the drought and disease tolerance of the cooking clones.',
      },
      {
        scientificName: 'Musa × paradisiaca',
        commonName: 'Plantain',
        heldAs: 'own-identity',
        identitySlug: 'plantain',
        role: 'The AAB cooking hybrid, held as its own taxon and published as its own page.',
      },
    ],
    splitCriterion:
      'A genome group is not a taxon, so nothing can be promoted out of this concept by splitting. What can be published separately is a hybrid the authorities accept as a taxon — which is why plantain has a page and Cavendish does not.',
    sourceIds: ['fao', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'triticale',
    kind: 'nothogenus-concept',
    scopeStatement:
      'This page covers triticale, the wheat–rye cross. The crop is the cross itself: commercial triticale spans several nothospecies distinguished by which wheat was used as the female parent, and naming any one of them as "triticale" would be wrong about the rest.',
    constituents: [
      {
        scientificName: '×Triticosecale rimpaui',
        commonName: 'Hexaploid triticale',
        heldAs: 'not-held',
        role: 'The hexaploid cross, from bread wheat and rye. Most commercial grain triticale is of this kind.',
      },
      {
        scientificName: '×Triticosecale neoblaringhemii',
        commonName: 'Tetraploid-derived triticale',
        heldAs: 'not-held',
        role: 'The cross from durum wheat and rye, giving the octoploid and secondary hexaploid lines used in forage breeding.',
      },
    ],
    splitCriterion:
      'Nothing splits out of a nothogenus concept while the corpus holds no nothospecies identity. The parent crops are published separately in their own right, and are linked from this page as parents rather than as constituents.',
    sourceIds: ['cimmyt', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
];

export const CONCEPT_BY_SLUG = new Map(CROP_CONCEPTS.map((c) => [c.slug, c]));
