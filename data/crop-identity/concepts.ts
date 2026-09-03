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
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'Most of the specialty and filter trade. Tetraploid and self-fertile, grown at altitude.',
      },
      {
        scientificName: 'Coffea canephora',
        commonName: 'Robusta coffee',
        heldAs: 'own-identity',
        identitySlug: 'robusta-coffee',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'Most of the soluble trade. Diploid and self-incompatible, grown in the lowlands.',
      },
      {
        scientificName: 'Coffea liberica',
        commonName: 'Liberica coffee',
        heldAs: 'own-identity',
        identitySlug: 'liberica-coffee',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'A small third species, grown mainly in parts of Southeast Asia and West Africa.',
      },
    ],
    splitCriterion:
      'A species earns its own page when the agronomy, disease profile and trade of that species cannot be stated at genus level without being wrong about the others. Arabica and robusta met that in Wave 32; liberica did not, because the published record on it is thin.',
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'Green coffee and coffee cherries are keyed to this page, and both name the traded product of the concept rather than either species. Wave 38 established that green coffee is not arabica: arabica correctly shows no market series of its own, and that is the coverage NOT leaking rather than coverage missing.',
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'The large majority of world lint. Medium staple.',
      },
      {
        scientificName: 'Gossypium barbadense',
        commonName: 'Barbadense cotton',
        heldAs: 'own-identity',
        identitySlug: 'barbadense-cotton',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The extra-long staple trade, spun into fine-count yarns.',
      },
      {
        scientificName: 'Gossypium arboreum',
        commonName: 'Tree cotton',
        heldAs: 'own-identity',
        identitySlug: 'tree-cotton',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'An Old World diploid, still grown in parts of Asia.',
      },
      {
        scientificName: 'Gossypium herbaceum',
        commonName: 'Levant cotton',
        heldAs: 'own-identity',
        identitySlug: 'levant-cotton',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The other Old World diploid, grown in Asia and parts of Africa.',
      },
    ],
    splitCriterion:
      'The same standard as coffee. Upland cotton met it in Wave 32 because staple class, ginning and the Bt pest complex are species-level facts. The two diploids have not been reviewed for promotion.',
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'Cotton lint, cottonseed and seed cotton are keyed here and none of them distinguishes upland from the other three species. The trade measures fibre, not taxon, so the concept is the only honest place to hang the series.',
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Mediterranean origin; the highest-protein of the group.',
      },
      {
        scientificName: 'Lupinus angustifolius',
        commonName: 'Narrow-leafed lupin',
        heldAs: 'own-identity',
        identitySlug: 'narrow-leafed-lupin',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The main Australian crop; tolerant of acid sandy soils.',
      },
      {
        scientificName: 'Lupinus luteus',
        commonName: 'Yellow lupin',
        heldAs: 'own-identity',
        identitySlug: 'yellow-lupin',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Grown on the poorest sands; the most acid-tolerant.',
      },
      {
        scientificName: 'Lupinus mutabilis',
        commonName: 'Andean lupin',
        heldAs: 'own-identity',
        identitySlug: 'andean-lupin',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The Andean crop; high oil as well as protein, and requires debittering.',
      },
    ],
    splitCriterion:
      'None of the four has been reviewed for promotion. Alkaloid content and debittering practice differ enough between them that a species page would carry real content.',
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Lupin appears in trade data under feed and pulse aggregates that do not name it.',
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
        relationshipKind: 'cultivar-group',
        routeStatus: 'own-page',
        role: 'Carries the Halloween pumpkins, acorn squash, and — as the Zucchini Group the corpus does hold — courgettes.',
      },
      {
        scientificName: 'Cucurbita maxima',
        commonName: 'Winter squash',
        heldAs: 'own-identity',
        identitySlug: 'winter-squash-maxima',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The largest fruits and the best keepers; soft round stem.',
      },
      {
        scientificName: 'Cucurbita moschata',
        commonName: 'Butternut squash',
        heldAs: 'own-identity',
        identitySlug: 'butternut-squash',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The most heat- and disease-tolerant of the four; hard flared stem.',
      },
      {
        scientificName: 'Cucurbita argyrosperma',
        commonName: 'Cushaw squash',
        heldAs: 'own-identity',
        identitySlug: 'cushaw-squash',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Grown mainly in Mexico and Central America, often for seed.',
      },
      {
        scientificName: 'Cucurbita ficifolia',
        commonName: 'Fig-leaf gourd',
        heldAs: 'own-identity',
        identitySlug: 'fig-leaf-gourd',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'A highland species used for preserves and as cucurbit rootstock. Omitted from the original scope note.',
      },
    ],
    splitCriterion:
      'A species earns a page when its rind, storage behaviour and disease susceptibility make genus-level advice misleading. Cucurbita pepo would additionally require the species identity the corpus does not currently hold.',
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Pumpkins are reported inside squash and gourd aggregates that cross the species boundaries this concept describes.',
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The smooth-shelled species. The Hawaiian cultivars developed from it account for most of world production and are the founders of current breeding programmes.',
      },
      {
        scientificName: 'Macadamia tetraphylla',
        commonName: 'Rough-shell macadamia',
        heldAs: 'own-identity',
        identitySlug: 'rough-shell-macadamia',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The rough-shelled species. A few pure cultivars are grown commercially, mainly in South Africa; most of its commercial contribution is through hybrids with M. integrifolia.',
      },
    ],
    splitCriterion:
      'Both species were verified against both authorities in Wave 35 and are now held as taxa. Promotion is a separate question and the answer is currently no: most commercial material is interspecific hybrid, so a page for either species alone would describe a minority of the crop while the genus page describes the rest. That would have to change before a split made sense.',
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Macadamia appears in tree-nut aggregates that do not separate the two species.',
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Grown for leaf as silkworm feed; the basis of sericulture.',
      },
      {
        scientificName: 'Morus nigra',
        commonName: 'Black mulberry',
        heldAs: 'own-identity',
        identitySlug: 'black-mulberry',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Grown for its fruit, which is soft and highly perishable and so is picked for local sale or processing rather than long-distance trade.',
      },
    ],
    splitCriterion:
      'The two end uses are different enough that either species could carry a page. Neither has been reviewed for promotion.',
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      "No commodity series is keyed to this page, and the crop's largest use — leaves for silkworms — is not a food commodity at all.",
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The higher-yielding species, also grown as a leaf vegetable — which is why the corpus holds it under a leaf-vegetable name.',
      },
      {
        scientificName: 'Corchorus capsularis',
        commonName: 'White jute',
        heldAs: 'own-identity',
        identitySlug: 'white-jute',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The species tolerant of the flooded land where much jute is grown.',
      },
    ],
    splitCriterion:
      'Neither has been reviewed for promotion. Tossa jute is complicated by carrying two unrelated end uses on one taxon.',
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'Jute fibre covers both Corchorus species and the trade does not separate them; jute-mallow is also a leaf vegetable, which the fibre series does not measure at all.',
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        // The correction. Not D. rotundata: both authorities place it under
        // yellow yam, which is why it is an infraspecific taxon here.
        role: 'Most West African production. Both authorities place it as an infraspecific taxon under yellow yam rather than as a species of its own.',
      },
      {
        scientificName: 'Dioscorea alata',
        commonName: 'Water yam',
        heldAs: 'own-identity',
        identitySlug: 'water-yam',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The most widely distributed species, grown across Asia, the Pacific and the Caribbean.',
      },
      {
        scientificName: 'Dioscorea cayenensis',
        commonName: 'Yellow yam',
        heldAs: 'own-identity',
        identitySlug: 'yellow-yam',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'West African; the species under which white yam is placed.',
      },
      {
        scientificName: 'Dioscorea esculenta',
        commonName: 'Lesser yam',
        heldAs: 'own-identity',
        identitySlug: 'lesser-yam',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Smaller tubers, shorter season.',
      },
      {
        scientificName: 'Dioscorea bulbifera',
        commonName: 'Aerial yam',
        heldAs: 'own-identity',
        identitySlug: 'aerial-yam',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Bears aerial bulbils rather than a single underground tuber.',
      },
    ],
    splitCriterion:
      'White yam is the obvious candidate on production alone, and Wave 32 reviewed and refused it: because the authorities place it under yellow yam, promoting it alone would leave the concept incoherent while its own parent species stayed inside. Any split here has to take the cayenensis group as a whole.',
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'The yams series aggregates several Dioscorea species and does not distinguish them. Attributing it to any one constituent would state a species-level figure that no source publishes.',
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'no-route',
        role: 'An aggregate name, not a species. Plants of the World Online resolves it; World Flora Online returns no placement.',
      },
      {
        scientificName: 'Rubus ursinus',
        commonName: 'Californian blackberry',
        heldAs: 'not-held',
        relationshipKind: 'cultivated-species',
        routeStatus: 'no-route',
        role: 'One of the American parents behind the trailing cultivars.',
      },
    ],
    splitCriterion:
      'Nothing here can be split until the authorities agree on what the species are. This concept is waiting on taxonomy, not on editorial effort.',
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Berries are reported in aggregates that do not resolve the Rubus species complex.',
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
        relationshipKind: 'genome-donor',
        routeStatus: 'taxon-row-only',
        role: 'Contributes the A genome. Cavendish is AAA — three sets from this species.',
      },
      {
        scientificName: 'Musa balbisiana',
        commonName: 'Wild banana (B genome)',
        heldAs: 'own-identity',
        identitySlug: 'wild-banana-balbisiana',
        relationshipKind: 'genome-donor',
        routeStatus: 'taxon-row-only',
        role: 'Contributes the B genome, and with it much of the drought and disease tolerance of the cooking clones.',
      },
      {
        scientificName: 'Musa × paradisiaca',
        commonName: 'Plantain',
        heldAs: 'own-identity',
        identitySlug: 'plantain',
        relationshipKind: 'hybrid',
        routeStatus: 'own-page',
        role: 'The AAB cooking hybrid, held as its own taxon and published as its own page.',
      },
    ],
    splitCriterion:
      'A genome group is not a taxon, so nothing can be promoted out of this concept by splitting. What can be published separately is a hybrid the authorities accept as a taxon — which is why plantain has a page and Cavendish does not.',
    marketGranularity: 'BROADER_THAN_ENTITY',
    marketGranularityNote:
      "The bananas series measures the edible cultivar groups, which are hybrids of the two wild species this page holds as genome donors. The commodity is therefore wider than either constituent and does not correspond to the concept's taxa at all.",
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
        relationshipKind: 'cultivated-species',
        routeStatus: 'no-route',
        role: 'The hexaploid cross, from bread wheat and rye. Most commercial grain triticale is of this kind.',
      },
      {
        scientificName: '×Triticosecale neoblaringhemii',
        commonName: 'Tetraploid-derived triticale',
        heldAs: 'not-held',
        relationshipKind: 'cultivated-species',
        routeStatus: 'no-route',
        role: 'The cross from durum wheat and rye, giving the octoploid and secondary hexaploid lines used in forage breeding.',
      },
    ],
    splitCriterion:
      'Nothing splits out of a nothogenus concept while the corpus holds no nothospecies identity. The parent crops are published separately in their own right, and are linked from this page as parents rather than as constituents.',
    marketGranularity: 'EXACT_ENTITY',
    marketGranularityNote:
      'Triticale grain names this crop and nothing else. The page is a nothogenus concept for taxonomic reasons; commercially the name is unambiguous.',
    sourceIds: ['cimmyt', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },

  /* ---- Wave 41: umbrella pages that were covering more than they declared ---
   *
   * Nine published pages named more than one plant in their own scientificName
   * field and had no scope record at all. Waves 39 and 40 then published five
   * of the plants those pages were quietly covering — sour cherry, Asian pear,
   * lowbush blueberry, spelt, emmer, einkorn — and the parents went on
   * describing a corpus that no longer existed.
   *
   * None of these is a split. Every one of them is an umbrella that was already
   * true and was not written down, which is the case the brief warns is easy to
   * get backwards: a useful umbrella page is more truthful than several
   * misleading species pages, and the work is to declare the umbrella, not to
   * dismantle it.
   */
  {
    slug: 'wheat',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers wheat as a crop, which in practice means bread wheat: Triticum aestivum is what the world grows, trades and mills unless something says otherwise. Four other Triticum crops have their own pages — durum, spelt, emmer and einkorn — and the differences between them are agronomic, not nominal.',
    constituents: [
      {
        scientificName: 'Triticum turgidum subsp. durum',
        commonName: 'Durum wheat',
        heldAs: 'own-identity',
        identitySlug: 'durum-wheat',
        relationshipKind: 'infraspecific-taxon',
        routeStatus: 'own-page',
        role: 'The pasta and semolina wheat. Tetraploid, hard, grown on the dry margin of wheat country, and traded as its own commodity — durum wheat grain was keyed to this page until Wave 41 moved it to where it belongs.',
      },
      {
        scientificName: 'Triticum aestivum subsp. spelta',
        commonName: 'Spelt',
        heldAs: 'own-identity',
        identitySlug: 'spelt',
        relationshipKind: 'infraspecific-taxon',
        routeStatus: 'own-page',
        role: 'The same hexaploid genome as bread wheat, separated by an adhering glume that adds a dehulling step. A subspecies of the very species this page is keyed to, which is why the bare binomial belongs here and not there.',
      },
      {
        scientificName: 'Triticum turgidum subsp. dicoccum',
        commonName: 'Emmer',
        heldAs: 'own-identity',
        identitySlug: 'emmer',
        relationshipKind: 'infraspecific-taxon',
        routeStatus: 'own-page',
        role: 'A hulled tetraploid, the same species as durum and a different crop from it.',
      },
      {
        scientificName: 'Triticum monococcum',
        commonName: 'Einkorn',
        heldAs: 'own-identity',
        identitySlug: 'einkorn',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'The diploid wheat, and the only one of the group that is a separate species rather than an infraspecific taxon.',
      },
    ],
    splitCriterion:
      'All four were already split before this record existed, and each earned it the same way: a milling or dehulling behaviour that changes what the grain can be used for, and a production system that is not bread wheat with a different name. Nothing else in Triticum currently meets that.',
    excludes: [
      {
        scientificName: '×Triticosecale',
        commonName: 'Triticale',
        reason:
          'A wheat–rye intergeneric cross, not a wheat. It has its own page and its own nothogenus concept, and folding it in here would make this page a page about a genus it is not confined to.',
        resolvesTo: { type: 'crop', slug: 'triticale' },
      },
    ],
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'Wheat grain names the traded product of the concept and does not distinguish bread wheat from the hulled wheats, which are too small in volume to be reported separately. Durum is the exception and is reported separately, which is why its series now sits on the durum page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'millet',
    kind: 'agricultural-use-concept',
    scopeStatement:
      'This page covers millet as an agricultural category, not as a taxon. Millets are small-grained cereals from at least four genera that share a growing environment and nothing else; the page is keyed to pearl millet because that is the largest of them, and five others have their own pages.',
    constituents: [
      {
        scientificName: 'Eleusine coracana',
        commonName: 'Finger millet',
        heldAs: 'own-identity',
        identitySlug: 'finger-millet',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'The East African and South Indian millet, and the one whose grain stores longest.',
      },
      {
        scientificName: 'Setaria italica',
        commonName: 'Foxtail millet',
        heldAs: 'own-identity',
        identitySlug: 'foxtail-millet',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'A very short-season millet of China and India, sown when a season is already half gone.',
      },
      {
        scientificName: 'Panicum miliaceum',
        commonName: 'Proso millet',
        heldAs: 'own-identity',
        identitySlug: 'proso-millet',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'The lowest-water millet of the group, grown as a rotation crop on the semi-arid Great Plains as well as across dry Asia.',
      },
      {
        scientificName: 'Echinochloa colona subsp. edulis',
        commonName: 'Barnyard millet',
        heldAs: 'own-identity',
        identitySlug: 'barnyard-millet',
        relationshipKind: 'infraspecific-taxon',
        routeStatus: 'own-page',
        role: 'The fastest-maturing cereal in cultivation, and a hill-country staple in India and Nepal.',
      },
      {
        scientificName: 'Paspalum scrobiculatum',
        commonName: 'Kodo millet',
        heldAs: 'own-identity',
        identitySlug: 'kodo-millet',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'An Indian domesticate whose grain stores for years and whose harvest carries a documented poisoning hazard when infected in the ear.',
      },
    ],
    splitCriterion:
      'A millet earns its own page when its agronomy cannot be stated at group level without being wrong about the others — a maturity, a hazard, a water requirement or a storage behaviour that is its own. All five here met that. The group as a whole still needs a page, because "millet" is what markets, statistics and farmers say.',
    excludes: [
      {
        scientificName: 'Digitaria exilis',
        commonName: 'Fonio',
        reason:
          'Grouped with the millets in West African usage and in some statistics, and it is a different genus with a different domestication and a different market. It has its own page and this one does not cover it.',
        resolvesTo: { type: 'crop', slug: 'fonio' },
      },
      {
        scientificName: 'Eragrostis tef',
        commonName: 'Teff',
        reason:
          'Frequently listed among the millets and reported separately in trade data, with its own commodity series. Including it here would make the page cover a crop whose market the page does not describe.',
        resolvesTo: { type: 'crop', slug: 'teff' },
      },
      {
        scientificName: 'Sorghum bicolor',
        commonName: 'Sorghum',
        reason:
          'Grouped with millets in the phrase "sorghum and millets" throughout the statistical literature, and it is a large-grained cereal with its own agronomy, its own trade and its own page.',
        resolvesTo: { type: 'crop', slug: 'sorghum' },
      },
    ],
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'The millet grain series aggregates the millets and does not resolve them, which is exactly what the concept covers. Attributing it to any constituent would publish a species-level figure that no source measures, and teff — reported separately — is excluded from the page for the same reason.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cherry',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers sweet cherry, Prunus avium, which is what "cherry" means in a fresh fruit market. Sour cherry is a separate tetraploid species with its own page, its own self-fertility and its own harvest method, and the two are not interchangeable in any respect except the word.',
    constituents: [
      {
        scientificName: 'Prunus cerasus',
        commonName: 'Sour cherry',
        heldAs: 'own-identity',
        identitySlug: 'sour-cherry',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'Tetraploid, of hybrid origin, self-fertile, shake-harvested into water and processed rather than sold fresh. Published in Wave 39; this page listed its name as an alternative name until Wave 41 removed it.',
      },
    ],
    splitCriterion:
      'A second cherry earns its own page when self-fertility, harvest method and market all differ from sweet cherry, which is the case for Prunus cerasus and for nothing else the corpus holds in the group.',
    excludes: [
      {
        scientificName: 'Prunus mahaleb',
        commonName: 'Mahaleb cherry',
        reason:
          'A rootstock species and a spice, not a fruit crop. The corpus does not hold it and this page does not cover it.',
      },
    ],
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Cherries appear in stone fruit aggregates that do not separate sweet from sour, which is the reason the corpus does not attribute one to either page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'pear',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers European pear, Pyrus communis — the pear that is picked hard and ripened off the tree. Asian pear is a separate species that ripens on the tree and never softens, and it has its own page; the two share a name and almost no handling.',
    constituents: [
      {
        scientificName: 'Pyrus pyrifolia',
        commonName: 'Asian pear',
        heldAs: 'own-identity',
        identitySlug: 'asian-pear',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'Ripens on the tree, does not soften after picking, and is grown on Pyrus rather than quince rootstocks. Published in Wave 39; this page carried "Nashi pear" as an alternative name until Wave 41 removed it.',
      },
    ],
    splitCriterion:
      'A second pear earns its own page when its ripening behaviour changes the entire post-harvest chain, which is what separates Pyrus pyrifolia from Pyrus communis and what nothing else in the genus does.',
    excludes: [
      {
        scientificName: 'Cydonia oblonga',
        commonName: 'Quince',
        reason:
          'A different genus, and the dwarfing rootstock most European pear is grown on. Its relationship to this page is as roots, not as a kind of pear.',
        resolvesTo: { type: 'crop', slug: 'quince' },
      },
    ],
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Pears are reported in pome fruit aggregates that do not separate European from Asian types, so neither page carries a series.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'blueberry',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers highbush blueberry, Vaccinium corymbosum, the planted bush crop sold fresh. Lowbush blueberry is a different species and a different system entirely — a managed native stand on a two-year cycle — and has its own page.',
    constituents: [
      {
        scientificName: 'Vaccinium angustifolium',
        commonName: 'Lowbush blueberry',
        heldAs: 'own-identity',
        identitySlug: 'lowbush-blueberry',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'Not planted: commercial fields are native stands brought into management, cropped in alternate years and sold frozen. Published in Wave 39; this page listed its name as an alternative name until Wave 41 removed it.',
      },
      {
        scientificName: 'Vaccinium virgatum',
        commonName: 'Rabbiteye blueberry',
        heldAs: 'own-identity',
        identitySlug: 'rabbiteye-blueberry',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The southern planted blueberry, lower in chilling requirement and grown where highbush will not crop. Held as a taxon and deliberately not published: its agronomy is highbush agronomy with a different chilling figure.',
      },
    ],
    splitCriterion:
      'A second blueberry earns its own page when the production system, not the plant, is different. Lowbush met that — a managed wild stand is not an orchard. Rabbiteye does not: it is a planted bush crop managed like highbush.',
    excludes: [
      {
        scientificName: 'Vaccinium macrocarpon',
        commonName: 'Cranberry',
        reason:
          'The same genus and an entirely different crop, grown in flooded beds and harvested wet. It has its own page and is not a blueberry in any market.',
        resolvesTo: { type: 'crop', slug: 'cranberry' },
      },
      {
        scientificName: 'Vaccinium myrtillus',
        commonName: 'Bilberry',
        reason:
          'A wild-harvested European Vaccinium, held as a taxon and not published as a crop. Sold as blueberry in some European markets, which is a labelling question rather than a scope one.',
      },
    ],
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'The fresh blueberries series covers planted blueberry production and does not separate highbush from rabbiteye. It is keyed here and not to lowbush blueberry, whose crop is frozen and reported differently — which is the coverage correctly not leaking.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'chili-pepper',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers the pungent peppers, which in cultivation means the Longum Group of Capsicum annuum and, in trade and in kitchens, four other domesticated Capsicum species that are grown and sold the same way. Sweet pepper is a separate cultivar group of the same species and has its own page.',
    constituents: [
      {
        scientificName: 'Capsicum chinense',
        commonName: 'Habanero pepper',
        heldAs: 'own-identity',
        identitySlug: 'habanero-pepper',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The most pungent of the domesticated species, of the Yucatán and the Caribbean. Held as a taxon; its distinguishing material is pungency and cultivar branding rather than agronomy.',
      },
      {
        scientificName: 'Capsicum frutescens',
        commonName: 'Tabasco pepper',
        heldAs: 'own-identity',
        identitySlug: 'tabasco-pepper',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'A small-fruited domesticate grown for sauce, held as a taxon for the same reason.',
      },
      {
        scientificName: 'Capsicum baccatum',
        commonName: 'Ají pepper',
        heldAs: 'own-identity',
        identitySlug: 'aji-pepper',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The South American domesticate, distinguished in the field by the yellow-green spots in the corolla rather than by how it is grown.',
      },
      {
        scientificName: 'Capsicum pubescens',
        commonName: 'Rocoto pepper',
        heldAs: 'own-identity',
        identitySlug: 'rocoto-pepper',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'The one that is genuinely different: black seeds, cold tolerance, cropping at Andean altitudes where the other four do not, and no interfertility with them. Deferred rather than refused.',
      },
    ],
    splitCriterion:
      'A Capsicum species earns its own page when it is grown differently, not when it tastes different. Rocoto is the only one of the four that has an argument — altitude, cold tolerance and reproductive isolation — and Wave 40 deferred it on evidence rather than declining it. The other three would repeat this page with a pungency figure attached.',
    excludes: [
      {
        scientificName: 'Capsicum annuum Grossum Group',
        commonName: 'Sweet pepper',
        reason:
          'The same species and the opposite crop: non-pungent, sold as a vegetable by size and colour, with its own page and its own commodity series.',
        resolvesTo: { type: 'crop', slug: 'sweet-pepper' },
      },
    ],
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'The dried chillies series covers pungent peppers across all five species and resolves none of them, which is what this page covers. Sweet peppers are a separate series on a separate page, and that separation is by pungency and use rather than by taxon.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'plum',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers plum as a crop, and the crop is two species: European plum, Prunus domestica, and Japanese plum, Prunus salicina, which supplies most of the fresh plums in world trade. The page has always said so in its own scientific name field; Wave 41 is where that became a record something can check.',
    constituents: [
      {
        scientificName: 'Prunus salicina',
        commonName: 'Japanese plum',
        heldAs: 'own-identity',
        identitySlug: 'japanese-plum',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Diploid, earlier, larger-fruited and the source of most fresh plums traded internationally; European plum is hexaploid and supplies most prunes. Held as a taxon and covered by this page rather than published beside it, because publishing the larger crop under the qualified name would leave the smaller one holding the word "plum".',
      },
    ],
    splitCriterion:
      'Japanese plum would earn its own page if this page were rewritten to be about Prunus domestica alone. It is not: it covers both, and the honest resolution of Wave 39’s scope block is to say so here rather than to publish a second plum under a qualified name.',
    excludes: [
      {
        scientificName: 'Prunus spinosa',
        commonName: 'Blackthorn or sloe',
        reason:
          'A wild Prunus gathered rather than grown, and one of the parents of European plum. Not a crop this corpus publishes.',
      },
    ],
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Plums and prunes are reported in stone fruit and dried fruit aggregates that do not resolve the two species this page covers.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cinnamon',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers cinnamon as it is traded, which is bark from more than one Cinnamomum species. Cinnamomum verum is true or Ceylon cinnamon and is what the page is keyed to; Cinnamomum aromaticum, cassia, is the bulk of what is sold as cinnamon in much of the world and is covered here rather than beside it.',
    constituents: [
      {
        scientificName: 'Cinnamomum aromaticum',
        commonName: 'Cassia cinnamon',
        heldAs: 'own-identity',
        identitySlug: 'cassia-cinnamon',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Thicker, harder bark with a stronger, blunter flavour, grown mainly in China, Vietnam and Indonesia and sold as cinnamon in markets that do not distinguish it. Held as a taxon; Wave 39 stopped it because this page had not declared its scope, and this record is that declaration.',
      },
    ],
    splitCriterion:
      'Cassia would earn its own page if the coumarin question, the two countries’ production systems and the labelling rules that separate the two barks were assembled into an article that did not repeat this one. Wave 39 stopped it on scope; that block is now lifted and the remaining condition is editorial.',
    excludes: [
      {
        scientificName: 'Cinnamomum camphora',
        commonName: 'Camphor laurel',
        reason:
          'The same genus, grown for camphor rather than for bark spice, and an invasive tree in several regions. Not a spice crop and not covered here.',
      },
    ],
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Cinnamon and cassia are reported together in spice aggregates in most statistical systems, which is the same conflation the page exists to explain.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'mustard',
    kind: 'agricultural-use-concept',
    scopeStatement:
      'This page covers the mustards, which are several species in more than one genus grown for pungent seed. It is keyed to Brassica juncea, brown mustard, and it also covers black mustard, white mustard and — since both authorities moved it out of Brassica — Ethiopian mustard, which is now Mutarda carinata.',
    constituents: [
      {
        scientificName: 'Mutarda carinata',
        commonName: 'Ethiopian mustard',
        heldAs: 'own-identity',
        identitySlug: 'ethiopian-mustard',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'An Ethiopian oilseed and leaf vegetable that both authorities have moved out of Brassica into Mutarda. Wave 39 stopped it because this page was built around a genus the species had left; the page is about a use, not a genus, so the species stays inside it.',
      },
    ],
    splitCriterion:
      'A mustard earns its own page when its production system, not its genus, is separate. Ethiopian mustard has an argument — an Ethiopian oilseed with a leaf-vegetable use and its own agronomy — and Wave 39 recorded it as ready on evidence. Nothing else the corpus holds in the group does.',
    excludes: [
      {
        scientificName: 'Brassica napus',
        commonName: 'Oilseed rape',
        reason:
          'Grown for oil rather than for pungency, reported under its own commodity, and published separately. The two are neighbours in the same genus and different crops in every market.',
        resolvesTo: { type: 'crop', slug: 'oilseed-rape' },
      },
    ],
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page. Mustard seed is reported in spice and oilseed aggregates that do not separate the species, while rapeseed — a different crop — has its own series on its own page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'oilseed-rape',
    kind: 'genus-concept',
    scopeStatement:
      'This page covers the rapeseed crop, which is two species and not one. Brassica napus is the amphidiploid that most of the world grows and that this page is keyed to; Brassica rapa subsp. oleifera, turnip rape, is the diploid grown where the season is too short for napus, and the rapeseed trade does not separate them.',
    constituents: [
      {
        scientificName: 'Brassica rapa subsp. oleifera',
        commonName: 'Turnip rape',
        heldAs: 'own-identity',
        identitySlug: 'turnip-rape',
        relationshipKind: 'infraspecific-taxon',
        routeStatus: 'taxon-row-only',
        role: 'The short-season rapeseed, still grown in northern Europe and Canada where Brassica napus does not finish. Held as a taxon: the authorities also disagree about its rank, with one sinking the subspecies into the species, which is a second reason not to publish it separately.',
      },
    ],
    splitCriterion:
      'Turnip rape would earn its own page if its agronomy could be stated without repeating this one — and the difference is season length and ploidy, which are two facts rather than an article. It would also need the rank disagreement between the authorities resolved.',
    excludes: [
      {
        scientificName: 'Brassica juncea',
        commonName: 'Brown mustard',
        reason:
          'Grown as an oilseed in parts of South Asia and covered by the mustard page, which is about pungent seed rather than about vegetable oil. The two pages divide the genus by use, not by taxon.',
        resolvesTo: { type: 'crop', slug: 'mustard' },
      },
      {
        scientificName: 'Brassica napus Napobrassica Group',
        commonName: 'Swede',
        reason:
          'The same species grown for a root rather than for seed. No page in this corpus covers root brassicas, which is why swede remains unresolved rather than sitting here.',
      },
    ],
    marketGranularity: 'CONCEPT_LEVEL',
    marketGranularityNote:
      'The rapeseed series covers both species and does not distinguish them, which is what this page covers. Turnip rape carries no series of its own, so there is nothing for concept-level coverage to leak into.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },

  /* ---- Wave 43: the parent nobody owned ------------------------------------
   * Orange, grapefruit and mandarin are three cultivar groups of one hybrid
   * taxon, and until this record nothing in the corpus named that taxon. The
   * scope they share had nowhere to be stated, which is why mandarin sat
   * blocked for two waves: publishing it would have added a third page to a
   * group whose shared facts still lived in no page at all.
   */
  {
    slug: 'citrus',
    kind: 'species-complex',
    scopeStatement:
      'This page covers citrus as a crop group and the hybrid structure the group shares. Nearly all cultivated citrus descends from three ancestral species, and under the treatment followed here sweet orange, grapefruit and mandarin are cultivar groups of a single hybrid, Citrus × aurantium, rather than three species. Each citrus crop keeps its own page and its own evidence; what sits here is what none of them can say alone.',
    constituents: [
      {
        scientificName: 'Citrus × aurantium Sweet Orange Group',
        commonName: 'Orange',
        heldAs: 'own-identity',
        identitySlug: 'orange',
        relationshipKind: 'cultivar-group',
        routeStatus: 'own-page',
        role: 'The largest citrus crop by volume, and one of three cultivar groups of the hybrid this page exists to explain. Most of the world crop is juiced, which is why its market series measures a minority of it.',
      },
      {
        scientificName: 'Citrus × aurantium Grapefruit Group',
        commonName: 'Grapefruit',
        heldAs: 'own-identity',
        identitySlug: 'grapefruit',
        relationshipKind: 'cultivar-group',
        routeStatus: 'own-page',
        role: 'A pummelo back-cross that Plants of the World Online sinks into Citrus × aurantium. Published separately as Citrus × paradisi by many sources, which is a naming difference rather than a different plant.',
      },
      {
        scientificName: 'Citrus × aurantium Mandarin Group',
        commonName: 'Mandarin',
        heldAs: 'own-identity',
        identitySlug: 'mandarin',
        relationshipKind: 'cultivar-group',
        routeStatus: 'own-page',
        role: 'The easy-peeling citrus, covering clementine, satsuma and tangerine types. Blocked in Wave 39 and published in Wave 43 once this page existed to carry the shared scope.',
      },
      {
        scientificName: 'Citrus × limon',
        commonName: 'Lemon',
        heldAs: 'own-identity',
        identitySlug: 'lemon',
        relationshipKind: 'hybrid',
        routeStatus: 'own-page',
        role: 'A separate hybrid rather than a group within Citrus × aurantium — citron crossed into the sour orange line. Its separateness is the point: not every citrus collapses into the same taxon.',
      },
      {
        scientificName: 'Citrus × aurantiifolia',
        commonName: 'Lime',
        heldAs: 'own-identity',
        identitySlug: 'lime',
        relationshipKind: 'hybrid',
        routeStatus: 'own-page',
        role: 'Another distinct hybrid, and the name under which several unrelated limes are traded. The corpus publishes this one and resolves the others through the name register.',
      },
      {
        scientificName: 'Citrus maxima',
        commonName: 'Pomelo',
        heldAs: 'own-identity',
        identitySlug: 'pomelo',
        relationshipKind: 'genome-donor',
        routeStatus: 'own-page',
        role: 'One of the three ancestral species rather than a hybrid, and a crop in its own right. Grapefruit and the sweet oranges carry its genome.',
      },
      {
        scientificName: 'Citrus hystrix',
        commonName: 'Makrut lime',
        heldAs: 'own-identity',
        identitySlug: 'kaffir-lime',
        relationshipKind: 'cultivated-species',
        routeStatus: 'own-page',
        role: 'A species in its own right, grown for leaves rather than fruit. Blocked in Wave 40 for the same missing-parent reason as mandarin and published in Wave 43.',
      },
      {
        scientificName: 'Citrus medica',
        commonName: 'Citron',
        heldAs: 'own-identity',
        identitySlug: 'citron',
        relationshipKind: 'genome-donor',
        routeStatus: 'taxon-row-only',
        role: 'The second ancestral species, held as a taxon. It is grown at small scale for rind and for ritual use, and its agricultural literature is thin next to its genetic importance.',
      },
      {
        scientificName: 'Citrus japonica',
        commonName: 'Kumquat',
        heldAs: 'own-identity',
        identitySlug: 'kumquat',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'Held as a taxon. Long treated as Fortunella and returned to Citrus by both authorities, which is a placement change the name register carries.',
      },
      {
        scientificName: 'Citrus australasica',
        commonName: 'Finger lime',
        heldAs: 'own-identity',
        identitySlug: 'finger-lime',
        relationshipKind: 'cultivated-species',
        routeStatus: 'taxon-row-only',
        role: 'An Australian species with a recent and small commercial history, held as a taxon.',
      },
    ],
    splitCriterion:
      'A citrus taxon earns its own page when its production system is separate — a different harvested organ, a different market, a different orchard decision. Mandarin earned it on seedless orchard layout and makrut lime on being a leaf crop. Citron, kumquat and finger lime have not: their published agronomy is citrus agronomy at a smaller scale.',
    excludes: [
      {
        scientificName: 'Poncirus trifoliata',
        commonName: 'Trifoliate orange',
        reason:
          'A rootstock and a breeding parent rather than a fruit crop, and placed in a separate genus by the treatment followed here. It reaches citrus growers as roots, which is a different subject from a citrus crop.',
      },
      {
        scientificName: 'Citrus × sinensis',
        commonName: 'Sweet orange, as a species name',
        reason:
          'Not a taxon this page excludes but a name it resolves: both this and Citrus × paradisi are sunk into Citrus × aurantium under the treatment followed here, so records published under them reach the orange and grapefruit pages.',
        resolvesTo: { type: 'crop', slug: 'orange' },
      },
    ],
    marketGranularity: 'NO_MARKET_LINKAGE',
    marketGranularityNote:
      'No commodity series is keyed to this page, and that is correct rather than a gap: citrus is reported crop by crop — oranges, lemons and limes, grapefruit, tangerines — so a citrus-level series does not exist to attach. The separation in the trade data runs opposite to the taxonomy, where the boundaries collapse.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-03',
  },
];

export const CONCEPT_BY_SLUG = new Map(CROP_CONCEPTS.map((c) => [c.slug, c]));
