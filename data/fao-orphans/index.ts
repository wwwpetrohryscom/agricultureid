/**
 * Wave 44 — every FAO Crop Calendar name the matcher does not resolve, answered.
 *
 * A hundred names. The queue was recomputed from the source file against the
 * live corpus rather than copied from Wave 42's list, and recomputing it is
 * what found that Wave 42 had never seen nine of the dataset's crop names at
 * all: every one of Jordan's rows carries an embedded newline in `aez_name`
 * and the first read of the CSV lost all 586 of them, taking nine crop names
 * with it.
 *
 * The classification is deliberately unglamorous. Thirty-five of the hundred
 * are spelling variants, French names or FAO's own inverted labels for crops
 * this corpus already publishes — "Tarmeric", "Cotonnier", "Cabbage, common".
 * Ten are not taxa at all but forms of a crop, and one of those, the Eritrean
 * hanfets, is not a crop either: it is barley and wheat sown together in one
 * field.
 *
 * Eighteen are TAXONOMY_UNCERTAIN for one reason: World Flora Online was
 * unreachable for the whole of this wave, its matching service returning an
 * empty reply after two minutes on every attempt. The identity rules require
 * two authorities and one was down, so no new identity was added. That is a
 * finding about a source on a set of days, not a finding about the crops or
 * about this layer, and the candidates are recorded so the next wave starts
 * from a name rather than from a label.
 */
import type { FaoOrphanResearch } from '@/types/fao-orphan';

export const FAO_ORPHAN_RESEARCH: readonly FaoOrphanResearch[] = [
  {
    faoName: 'African black nightshade',
    cohort: 'vegetables',
    botanicalCandidates: ['Solanum scabrum Mill.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Plants of the World Online accepts Solanum scabrum Mill. and holds six further Solanum scabrum combinations under other authors, two of which — Jacq. and Zuccagni — resolve to Solanum aethiopicum, a crop this corpus publishes. A name that resolves to a published crop under two of its seven authors is exactly the case the identity rules require a second authority for, and World Flora Online was unreachable throughout this wave.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Amaranthus',
    cohort: 'vegetables',
    botanicalCandidates: ['Amaranthus'],
    outcome: 'MULTI_TAXON_CONCEPT',
    rationale:
      'The bare genus. This corpus publishes Amaranthus cruentus as amaranth and holds three further Amaranthus taxa as records, and the FAO item names none of them in particular. Sending a genus label to the one species that has a page would present a species calendar as a genus calendar.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Amaranthus tricolor',
    cohort: 'vegetables',
    botanicalCandidates: ['Amaranthus tricolor L.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'A leaf amaranth distinct from the grain amaranth this corpus publishes, and a plausible identity to hold. Adding it requires the dual-authority reading the identity rules demand, and World Flora Online did not answer during this wave.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Anis',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Pimpinella anisum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'anise' },
    rationale:
      'The French spelling of anise, carried by sixty-four rows against the twenty-six under the English label. Both denote Pimpinella anisum, which this wave published from an identity verified in Wave 29.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Anise',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Pimpinella anisum L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'anise' },
    rationale:
      'Ninety rows across the two spellings, in nine countries, for a taxon this corpus had verified and held without an article since Wave 29. Anise is a distinct field crop with its own sowing window, its own indeterminate ripening problem and a seed trade that is not the star anise trade, which this corpus already publishes separately.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Arrowroot',
    cohort: 'roots-and-tubers',
    botanicalCandidates: ['Maranta arundinacea L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'arrowroot' },
    rationale:
      "A starch crop held as a verified taxon since Wave 30 with no article. The rhizome starch is a distinct product with a distinct extraction problem, and the crop occupies a place in Caribbean and West African smallholder rotations that none of the corpus's other starch crops describes.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Barley two rows',
    cohort: 'cereals-and-millets',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'barley', form: 'two-row spike type' },
    rationale:
      'Two-row and six-row barley differ in how many spikelets of each triplet set grain. It is a spike-morphology distinction within Hordeum vulgare that decides malting suitability, not a taxon: the corpus holds one barley and this label names one of its forms.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bean',
    cohort: 'pulses',
    botanicalCandidates: [
      'Phaseolus vulgaris L.',
      'Vigna unguiculata (L.) Walp.',
      'Vicia faba L.',
    ],
    outcome: 'AMBIGUOUS',
    rationale:
      'The bare word names Phaseolus, Vigna and Vicia crops in different parts of the FAO country set, and this corpus publishes several of each. The dataset carries "Bean, broad", "Bean, Lima" and "Bean common, dry" separately, which is the source\'s own evidence that the bare label is not one of them.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bean common, dry',
    cohort: 'pulses',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'common-bean', form: 'dry grain' },
    rationale:
      'Phaseolus vulgaris harvested at grain maturity rather than green. The distinction is the harvest date and it moves the calendar, which is why the source records it separately from the green-harvested crop.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bean, Lima',
    cohort: 'pulses',
    botanicalCandidates: ['Phaseolus lunatus L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'lima-bean' },
    rationale:
      'The FAO inversion of lima bean. Phaseolus lunatus is published here under that name.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bean, broad',
    cohort: 'pulses',
    botanicalCandidates: ['Vicia faba L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'faba-bean' },
    rationale:
      'Broad bean and faba bean are the same plant under two trade names; this corpus publishes it under the second.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bean, broad green',
    cohort: 'pulses',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'faba-bean', form: 'harvested green' },
    rationale:
      'The largest orphan in the dataset at 292 rows. Vicia faba lifted green as a vegetable rather than dried as a pulse — the same crop on a shorter calendar.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Beans, harvested green',
    cohort: 'pulses',
    botanicalCandidates: [
      'Phaseolus vulgaris L.',
      'Phaseolus coccineus L.',
      'Vigna unguiculata (L.) Walp.',
    ],
    outcome: 'AMBIGUOUS',
    rationale:
      'Inherits the ambiguity of the bare "Bean" label and adds a harvest form to it. Green beans in this country set are Phaseolus vulgaris, Phaseolus coccineus and immature cowpea pods depending on where the row comes from, and the source does not say which.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Beet',
    cohort: 'vegetables',
    botanicalCandidates: [
      'Beta vulgaris Conditiva Group',
      'Beta vulgaris Altissima Group',
      'Beta vulgaris Cicla Group',
    ],
    outcome: 'MULTI_TAXON_CONCEPT',
    rationale:
      'Beta vulgaris covers beetroot, sugar beet, chard and fodder beet, three of which this corpus publishes as separate crops. Wave 43 gave the species a scope record rather than a page for that reason, and this label names the species.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Beet, sugar',
    cohort: 'vegetables',
    botanicalCandidates: ['Beta vulgaris Altissima Group'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'sugar-beet' },
    rationale:
      'The FAO inversion of sugar beet, which this corpus publishes as one of the Beta vulgaris forms.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bergamot',
    cohort: 'tropical-fruits',
    botanicalCandidates: [
      'Citrus bergamia Risso & Poit.',
      'Monarda didyma L.',
      'Mentha citrata Ehrh.',
    ],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Three unrelated plants are traded as bergamot: a citrus grown for peel oil, a North American Lamiaceae, and a lemon-scented mint. The eight rows are Rwandan and nothing in the source distinguishes them, so there is no single name to take to an authority — and World Flora Online, which would have to be read alongside Plants of the World Online for any of the three, was unreachable throughout this wave.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Berseem',
    cohort: 'forage',
    botanicalCandidates: ['Trifolium alexandrinum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'berseem-clover' },
    rationale:
      'Berseem is the Egyptian name for the clover this corpus publishes as berseem clover.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bitter eggplant',
    cohort: 'vegetables',
    botanicalCandidates: ['Solanum aethiopicum L.', 'Solanum macrocarpon L.'],
    outcome: 'AMBIGUOUS',
    rationale:
      'Both African eggplants are grown in Senegal, both are bitter, and this corpus publishes both. The corpus already registers "African eggplant" as naming more than one crop; a bitterness adjective does not resolve which.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bocate',
    cohort: 'pulses',
    botanicalCandidates: ['Vigna unguiculata (L.) Walp.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'cowpea' },
    rationale:
      'Bocate pea is the Myanmar trade name for cowpea; the national pulses and beans standard lists it as Vigna unguiculata.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Bottle gourd',
    cohort: 'vegetables',
    botanicalCandidates: ['Lagenaria siceraria (Molina) Standl.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'bottle-gourd' },
    rationale:
      'Eighty-two rows in eleven countries for a taxon verified in Wave 30 and held without an article. Bottle gourd is grown for a vegetable and for a container, is the standard rootstock for grafted watermelon, and none of that is said anywhere in this corpus.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Broad Leaf Mustard',
    cohort: 'vegetables',
    botanicalCandidates: ['Brassica juncea (L.) Czern.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'mustard' },
    rationale:
      'The Nepali leaf mustard, rayo, is a broad-leaved form of Brassica juncea. The mustard page carries that species and the group of crops grown from it.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Broom',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: [],
    outcome: 'DEFER_RESEARCH',
    rationale:
      'Four Chadian rows under a label that could name broomcorn sorghum, a broom millet or a shrub used for brooms. No source consulted attaches a plant to it and the country context does not narrow it.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Buck Wheat (Sweet)',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Fagopyrum esculentum Moench'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'buckwheat' },
    rationale:
      'Sweet buckwheat is common buckwheat, named to distinguish it from the bitter or Tartary buckwheat this corpus holds separately as a taxon.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cabbage, chinese',
    cohort: 'vegetables',
    botanicalCandidates: ['Brassica rapa Pekinensis Group'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'chinese-cabbage' },
    rationale:
      'The FAO inversion of Chinese cabbage, the heading Brassica rapa form. Nepal is the only country carrying the label and it names the same crop this corpus publishes under the uninverted name.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cabbage, common',
    cohort: 'vegetables',
    botanicalCandidates: ['Brassica oleracea Capitata Group'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'cabbage' },
    rationale:
      'The FAO inversion of cabbage, and the third largest orphan at 352 rows.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Candelnut',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Aleurites moluccanus (L.) Willd.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Candlenut, misspelt in the source. A plausible identity to hold for an oil and light crop of the Pacific and Timor, and adding it needs the second authority this wave could not read.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Canihua',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Chenopodium pallidicaule Aellen'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Plants of the World Online accepts Chenopodium pallidicaule Aellen, the Andean grain grown above the quinoa line. World Flora Online could not be read, so the identity is not added.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Caraway, carum',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Carum carvi L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'caraway' },
    rationale:
      "Twenty-four rows for a biennial spice held as a verified taxon since Wave 29. Caraway's two-year cycle and its shattering problem at harvest are agronomy the corpus's annual spice pages do not cover.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cardoon',
    cohort: 'vegetables',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'artichoke', form: 'leaf-stalk cardoon' },
    rationale:
      "Cardoon and globe artichoke are the same species, Cynara cardunculus, grown for different organs: the artichoke for its flower buds, the cardoon for its blanched leaf stalks. The corpus's artichoke identity is the species.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cashewnut',
    cohort: 'tropical-fruits',
    botanicalCandidates: ['Anacardium occidentale L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'cashew' },
    rationale:
      'Cashew nut with the space removed. Six rows from one country against the two the correctly spelled label carries, which is the pattern most of these variants follow: the misspelling is not rarer than the spelling.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cherry (all varieties)',
    cohort: 'tropical-fruits',
    botanicalCandidates: ['Prunus avium (L.) L.', 'Prunus cerasus L.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'cherry' },
    rationale:
      'The label says outright that it covers all varieties, and this corpus publishes sweet and sour cherry as separate crops under a cherry concept. The concept is what the item measures.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Chick-pea',
    cohort: 'pulses',
    botanicalCandidates: ['Cicer arietinum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'chickpea' },
    rationale:
      'Chickpea hyphenated, and the only label the dataset carries for Cicer arietinum. The unhyphenated spelling does not appear at all, so 136 rows turned on a punctuation mark.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Chilli, dry',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Capsicum annuum L.', 'Capsicum frutescens L.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'chili-pepper' },
    rationale:
      'Dried chilli in this country set comes from several Capsicum species and the source does not separate them, which is what the chili pepper concept exists to carry. The drying is a product form and does not change which plants are in the item.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Chives',
    cohort: 'vegetables',
    botanicalCandidates: ['Allium schoenoprasum L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'chives' },
    rationale:
      'A perennial Allium held as a verified taxon since Wave 29, cut repeatedly rather than lifted, which puts it in a different management class from every other Allium this corpus publishes.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cleome',
    cohort: 'vegetables',
    botanicalCandidates: ['Cleome gynandra L.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'The Zambian rows almost certainly mean the spider plant, Cleome gynandra, which Plants of the World Online accepts. The label is a bare genus of some two hundred species, and with only one authority readable the corpus will not turn a genus into a species.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Clover',
    cohort: 'forage',
    botanicalCandidates: [
      'Trifolium pratense L.',
      'Trifolium repens L.',
      'Trifolium alexandrinum L.',
    ],
    outcome: 'AMBIGUOUS',
    rationale:
      'This corpus publishes red, white and berseem clover and holds crimson and sweet clover as taxa. Two Jordanian rows under the bare genus name do not say which, and the dataset names red and white clover separately elsewhere.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Coleus dazo',
    cohort: 'roots-and-tubers',
    botanicalCandidates: ['Coleus esculentus (N.E.Br.) G.Taylor'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Coleus dazo is a synonym of Coleus esculentus, the Livingstone potato — NOT of Coleus rotundifolius, the Hausa potato this corpus publishes. Mapping the label to the crop the corpus happens to hold would attach a Chadian calendar to the wrong tuber. Plants of the World Online accepts the name; the second authority could not be read.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Colza(rapeseed)',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Brassica napus L.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'oilseed-rape' },
    rationale:
      "Colza is the French name for oilseed rape, and the source's own parenthesis says so.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Corn, sweet',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Zea mays Saccharata Group'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'sweetcorn' },
    rationale:
      'The second largest orphan at 378 rows. Sweet corn is published here as a cultivar group of maize, separately from the grain crop.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cotonnier',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Gossypium'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'cotton' },
    rationale:
      'The French for cotton plant. The corpus publishes cotton as a concept over four species because the trade name does not identify one.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cress',
    cohort: 'vegetables',
    botanicalCandidates: [
      'Lepidium sativum L.',
      'Nasturtium officinale W.T.Aiton',
    ],
    outcome: 'AMBIGUOUS',
    rationale:
      'Garden cress and watercress are both sold as cress, this corpus holds the first as a taxon and publishes the second, and they are grown in entirely different systems — one in a seedbed, one in flowing water.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Cucumber (Snake)',
    cohort: 'vegetables',
    botanicalCandidates: [
      'Cucumis melo Flexuosus Group',
      'Trichosanthes cucumerina L.',
    ],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Snake cucumber names the Armenian cucumber, a Cucumis melo group, and snake gourd, a Trichosanthes this corpus already holds. The Sudanese rows fit either and the label does not choose, so neither candidate could be taken to Plants of the World Online and World Flora Online as the name to verify.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Dolicos lablab',
    cohort: 'pulses',
    botanicalCandidates: ['Lablab purpureus (L.) Sweet'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'lablab' },
    rationale:
      'Dolichos lablab is the historical binomial for the crop this corpus publishes as lablab.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Egyptian Mallow',
    cohort: 'vegetables',
    botanicalCandidates: ['Corchorus olitorius L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'jute-mallow' },
    rationale:
      "Egyptian mallow, Jew's mallow, molokhia and Egyptian spinach are the same leaf crop, Corchorus olitorius, which this wave published.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Enset',
    cohort: 'roots-and-tubers',
    botanicalCandidates: ['Ensete ventricosum (Welw.) Cheesman'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'The Ethiopian false banana, a staple starch crop for millions and one Plants of the World Online accepts without qualification. It is the strongest identity candidate in this queue and it still needs the second authority the rules require.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Filbert (Hazelnut)',
    cohort: 'tropical-fruits',
    botanicalCandidates: ['Corylus avellana L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'hazelnut' },
    rationale:
      'The source puts both the English trade name and the common name in one label. Filbert and hazelnut are the same nut, Corylus avellana, which this corpus publishes under the second name.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Fonio milet',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Digitaria exilis (Kippist) Stapf'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'fonio' },
    rationale:
      'Fonio, misspelt as a millet. It is a Digitaria, not one of the millets this corpus groups under that concept, and it has its own page.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Hairy vetch',
    cohort: 'forage',
    botanicalCandidates: ['Vicia villosa Roth'],
    outcome: 'ADD_DATA_ONLY_IDENTITY',
    resolvesTo: { type: 'crop-taxon', slug: 'hairy-vetch' },
    rationale:
      'Held as a verified taxon since Wave 30 and not promoted here: six rows in one country is calendar evidence, and the cover-crop literature this crop would need is not agronomy this wave researched.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Hanfez',
    cohort: 'cereals-and-millets',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'barley', form: 'hanfets, a barley-and-wheat mixed stand' },
    rationale:
      "Hanfets is an Eritrean and Tigrayan practice of sowing barley and wheat together in one field and harvesting them together, on about a fifth of the country's barley area. It is a cropping system, not a plant: mapping it to either cereal would attribute a mixed stand's calendar to a sole crop, and the mixture is the point of it.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Impwa',
    cohort: 'vegetables',
    botanicalCandidates: ['Solanum aethiopicum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'scarlet-eggplant' },
    rationale:
      'Impwa is the Zambian name for Solanum aethiopicum specifically, unlike the English "African eggplant", which names two species. The vernacular is narrower than the trade name.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Indian spinach',
    cohort: 'vegetables',
    botanicalCandidates: ['Basella alba L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'malabar-spinach' },
    rationale:
      'Fifty-eight rows in eight countries for a climbing leaf vegetable held as a taxon since Wave 30. It is a hot-season spinach substitute grown on supports, which is a production system nothing else in this corpus describes.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Jackfrruit',
    cohort: 'tropical-fruits',
    botanicalCandidates: ['Artocarpus heterophyllus Lam.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'jackfruit' },
    rationale:
      'Jackfruit with a doubled r. Twelve rows in two countries reached nothing because of one keystroke, which is the clearest illustration in this queue of why a spelling variant needs an explicit mapping rather than a guess.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: "Jew's Mallow",
    cohort: 'vegetables',
    botanicalCandidates: ['Corchorus olitorius L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'jute-mallow' },
    rationale:
      'Sixty-eight rows across two labels and seven countries for the leaf crop Egypt eats as molokhia. The corpus already held the taxon — it is the same species as one of the two jutes — and had never said that the leaf crop and the fibre crop are one plant harvested two ways.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Kales',
    cohort: 'vegetables',
    botanicalCandidates: ['Brassica oleracea Acephala Group'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'kale' },
    rationale:
      'Kale in the plural, as East African usage has it: sukuma wiki is sold as kales. Thirty rows for the Brassica oleracea Acephala Group this corpus publishes as kale.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Knowkhol',
    cohort: 'vegetables',
    botanicalCandidates: ['Brassica oleracea Gongylodes Group'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'kohlrabi' },
    rationale:
      'Knol-khol is the South Asian name for kohlrabi, run together in the source.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Lathyrus',
    cohort: 'pulses',
    botanicalCandidates: ['Lathyrus sativus L.', 'Lathyrus oleraceus Lam.'],
    outcome: 'MULTI_TAXON_CONCEPT',
    rationale:
      'The genus holds both the grass pea and, under the treatment this corpus follows, the garden pea. Two of its species have pages here and the bare genus names neither.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Leaf mustard',
    cohort: 'vegetables',
    botanicalCandidates: ['Brassica juncea (L.) Czern.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'mustard' },
    rationale:
      'Leaf mustard is Brassica juncea grown for greens, which is one of the uses the mustard page covers.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Malanga cubaine',
    cohort: 'roots-and-tubers',
    botanicalCandidates: [
      'Xanthosoma sagittifolium (L.) Schott',
      'Colocasia esculenta (L.) Schott',
    ],
    outcome: 'AMBIGUOUS',
    rationale:
      'Malanga names Xanthosoma in some Caribbean and Central African usage and Colocasia in others. This corpus publishes both and already registers the same confusion under "cocoyam"; a Cuban qualifier does not settle it.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Melon (except watermelon)',
    cohort: 'vegetables',
    botanicalCandidates: ['Cucumis melo L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'melon' },
    rationale:
      'The exclusion in the label is the source separating Cucumis melo from Citrullus lanatus, which is exactly how this corpus separates them.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Mentha',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Mentha'],
    outcome: 'MULTI_TAXON_CONCEPT',
    rationale:
      'The bare genus. Peppermint, spearmint and the field mints are different species with different oils, and this corpus publishes one mint page against a genus label that names all of them.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Menthol',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Mentha canadensis L.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Menthol mint is grown as a distinct crop from the mint this corpus publishes, most often Mentha canadensis, and the label names the compound rather than the plant. One authority is not enough to add a species on that basis.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Mil africain',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Cenchrus americanus (L.) Morrone'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'millet' },
    rationale:
      'The French Sahelian name for pearl millet, which is the species the millet page holds. The item is that species, not the group of millets the page also carries.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Millet, foxtail',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Setaria italica (L.) P.Beauv.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'foxtail-millet' },
    rationale: 'The FAO inversion of foxtail millet, which has its own page.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Mustard, Ethiopian',
    cohort: 'vegetables',
    botanicalCandidates: ['Mutarda carinata (A.Braun) Al-Shehbaz & Mummenh.'],
    outcome: 'ADD_DATA_ONLY_IDENTITY',
    resolvesTo: { type: 'crop-taxon', slug: 'ethiopian-mustard' },
    rationale:
      "Held as a verified taxon since Wave 27. Eight rows in one country does not carry an article, and the crop's agronomy is largely the mustard agronomy the corpus already publishes.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'New Zealand spinach',
    cohort: 'vegetables',
    botanicalCandidates: ['Tetragonia tetragonioides (Pall.) Kuntze'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'A salt-tolerant leaf crop unrelated to spinach and a reasonable taxon to hold. Six rows from Cabo Verde, and the second authority unavailable.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Niger',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Guizotia abyssinica (L.f.) Cass.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'niger-seed' },
    rationale:
      'The oilseed, not the country. The dataset also carries "Niger seed", which this corpus already matches, and the two labels are the same crop.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Oil flax',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'flax', form: 'grown for seed oil' },
    rationale:
      'Linum usitatissimum grown for linseed oil rather than for fibre. The plant is the same and the crop is different: oil types are branched and short, fibre types are tall and unbranched, and they are sown and pulled on different calendars.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Palm trees',
    cohort: 'tropical-fruits',
    botanicalCandidates: [],
    outcome: 'OUT_OF_SCOPE',
    rationale:
      'A growth form, not a crop. Six Mauritian rows under a label that covers a family this corpus publishes four members of, and no calendar can be attributed from it.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Papaya (pawpaw)',
    cohort: 'tropical-fruits',
    botanicalCandidates: ['Carica papaya L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'papaya' },
    rationale:
      'The source gives both names in one label; pawpaw here is papaya and not the North American Asimina.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Pea, dry',
    cohort: 'pulses',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'pea', form: 'dry grain' },
    rationale:
      'Peas taken to grain maturity. One hundred and ninety-four rows, against twenty-two for the green form, on a calendar that runs several weeks longer.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Pea, green',
    cohort: 'pulses',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'pea', form: 'harvested green' },
    rationale:
      "The same plant picked at the immature-seed stage, which is a vegetable crop with a vegetable's harvest window.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Pepper, black',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Piper nigrum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'black-pepper' },
    rationale:
      'Piper nigrum, the vine, not a Capsicum. The corpus publishes it under its own name.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Pepper, cherry',
    cohort: 'vegetables',
    botanicalCandidates: ['Capsicum annuum L.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'chili-pepper' },
    rationale:
      'Cherry pepper is a fruit-shape type within Capsicum annuum and not the long-fruited group the chili pepper page holds as its identity, so the concept rather than the species is what the item reaches.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Pepper, chili',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Capsicum annuum L.', 'Capsicum frutescens L.'],
    outcome: 'MAP_TO_EXISTING_CONCEPT',
    resolvesTo: { type: 'crop', slug: 'chili-pepper' },
    rationale:
      'The FAO inversion of chili pepper, which this corpus publishes as a concept over the pungent Capsicum species.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Peyin',
    cohort: 'pulses',
    botanicalCandidates: ['Vigna umbellata (Thunb.) Ohwi & H.Ohashi'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'rice-bean' },
    rationale:
      'Pe yin is one of the Burmese names for rice bean, a crop this corpus published in Wave 40.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Piment date',
    cohort: 'spices-and-herbs',
    botanicalCandidates: [],
    outcome: 'DEFER_RESEARCH',
    rationale:
      'A Capsicum of some kind from six Chadian rows. "Piment" is the French for a hot pepper and "date" is unexplained by any source consulted; whether it narrows to a species, a fruit shape or a local cultivar is not established.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Pointed Gourd',
    cohort: 'vegetables',
    botanicalCandidates: ['Trichosanthes dioica Roxb.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Parwal, a dioecious perennial cucurbit propagated from cuttings rather than seed, and a different Trichosanthes from the snake gourd this corpus holds. Two Nepali rows and one readable authority.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Purslane',
    cohort: 'vegetables',
    botanicalCandidates: ['Portulaca oleracea L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'purslane' },
    rationale:
      'Twenty-four rows in six countries for a succulent leaf crop held as a taxon since Wave 30. Purslane is farmed and weeded in the same countries, which is a thing worth writing down, and it uses a photosynthetic pathway no other leaf vegetable in this corpus uses.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Radish yellow and black',
    cohort: 'vegetables',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'radish', form: 'winter storage radish' },
    rationale:
      'The yellow and black-skinned winter radishes are storage types of the same subspecies as the salad radish, sown late and lifted for keeping.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Rocket , Roquette',
    cohort: 'vegetables',
    botanicalCandidates: ['Eruca vesicaria (L.) Cav.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'rocket' },
    rationale:
      "The English and French names in one label, with the source's stray space.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Roselle ',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: [
      'Hibiscus sabdariffa L.',
      'Sabdariffa gossypiifolia (Mill.) M.M.Hanes & R.L.Barrett',
    ],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Plants of the World Online makes Hibiscus sabdariffa a synonym of Sabdariffa gossypiifolia, the same generic move it applies to the kenaf this corpus already holds as Sabdariffa cannabina. Which name the corpus should publish turns on what the second authority does with the genus, and it could not be read. The label also carries a trailing space in the source, recorded here exactly.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'S.S. Hybrid (Sadabahar)',
    cohort: 'forage',
    botanicalCandidates: [],
    outcome: 'AGRICULTURAL_FORM',
    formOf: { slug: 'sorghum', form: 'sorghum-sudangrass forage hybrid' },
    rationale:
      'Sadabahar is a Pakistani multi-cut forage hybrid of sorghum with sudangrass. It is a breeding product of one species rather than a taxon, and its calendar is a cutting schedule.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Sago palm',
    cohort: 'roots-and-tubers',
    botanicalCandidates: ['Metroxylon sagu Rottb.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'A palm harvested for trunk starch, felled once at the end of a fifteen-year life, which is a production system unlike anything in this corpus. Eight Timorese rows and one authority.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Smooth pigweed',
    cohort: 'vegetables',
    botanicalCandidates: ['Amaranthus hybridus L.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'A leaf amaranth grown as a vegetable in Central Africa and treated as a weed elsewhere. Distinct from the grain amaranth this corpus publishes, and unverifiable against both authorities this wave.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Sponge & Ridge Gourd',
    cohort: 'vegetables',
    botanicalCandidates: [
      'Luffa aegyptiaca Mill.',
      'Luffa acutangula (L.) Roxb.',
    ],
    outcome: 'MULTI_TAXON_CONCEPT',
    rationale:
      'The label names two Luffa species and the ampersand says so. This corpus holds the ridge gourd as a taxon and not the sponge gourd, so no single destination covers the item.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Squash, butternut',
    cohort: 'vegetables',
    botanicalCandidates: ['Cucurbita moschata Duchesne'],
    outcome: 'ADD_DATA_ONLY_IDENTITY',
    resolvesTo: { type: 'crop-taxon', slug: 'butternut-squash' },
    rationale:
      'Held as a verified taxon since Wave 30 under the pumpkin concept. Thirty-six rows is real evidence and the agronomy is the Cucurbita agronomy the pumpkin page already carries.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Squash, winter',
    cohort: 'vegetables',
    botanicalCandidates: [
      'Cucurbita maxima Duchesne',
      'Cucurbita moschata Duchesne',
      'Cucurbita pepo L.',
    ],
    outcome: 'MULTI_TAXON_CONCEPT',
    rationale:
      'Winter squash is a storage category spanning three Cucurbita species, all three of which this corpus holds. The pumpkin concept exists for exactly this label and it is a concept, not a species.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Squash, zapalito',
    cohort: 'vegetables',
    botanicalCandidates: ['Cucurbita maxima Zapallito Group'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'Zapallito is an Argentine round summer squash of Cucurbita maxima, and the twelve rows are Moroccan, which is far enough from its home range to want confirming. One authority readable.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Tabac',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Nicotiana tabacum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'tobacco' },
    rationale:
      'The French for tobacco, from a francophone country in a dataset that spells it Tobbaco elsewhere. Both labels are Nicotiana tabacum and both reached nothing.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Tarmeric',
    cohort: 'spices-and-herbs',
    botanicalCandidates: ['Curcuma longa L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'turmeric' },
    rationale:
      'Turmeric with the vowels transposed. Curcuma longa is published here, and the four rows under this spelling were unreachable by any exact route.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Tobbaco',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Nicotiana tabacum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'tobacco' },
    rationale:
      'Tobacco with a doubled letter; the same crop the source also labels "Tabac".',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Vetch',
    cohort: 'forage',
    botanicalCandidates: [
      'Vicia sativa L.',
      'Vicia villosa Roth',
      'Vicia ervilia (L.) Willd.',
    ],
    outcome: 'AMBIGUOUS',
    rationale:
      'The dataset carries "Hairy vetch" separately, so the bare label is the source distinguishing something from it without saying what. This corpus holds common and hairy vetch as taxa.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Vitellaria',
    cohort: 'fibre-and-industrial',
    botanicalCandidates: ['Vitellaria paradoxa C.F.Gaertn.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'The shea tree, given as a bare genus of one species. Shea is gathered from parkland trees rather than planted, which makes its calendar a collection calendar; adding the identity needs the second authority.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Wateconvolvulus',
    cohort: 'vegetables',
    botanicalCandidates: ['Ipomoea aquatica Forssk.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'water-spinach' },
    rationale:
      'Water convolvulus run together in the source. It is the crop this corpus publishes as water spinach.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Welsh onion',
    cohort: 'vegetables',
    botanicalCandidates: ['Allium fistulosum L.'],
    outcome: 'PROMOTE_FULL_PROFILE',
    resolvesTo: { type: 'crop', slug: 'welsh-onion' },
    rationale:
      "A bunching onion held as a taxon since Wave 29. It makes no bulb, is cut or pulled whole, and is perennial where the corpus's other onions are biennial — a different crop on the same genus.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Wheat, Emmer',
    cohort: 'cereals-and-millets',
    botanicalCandidates: [
      'Triticum turgidum subsp. dicoccum (Schrank ex Schübl.) Thell.',
    ],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'emmer' },
    rationale:
      'Emmer has its own page here, and Wave 43 gave its parent taxon an owner.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Wheat, bread',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Triticum aestivum L.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'wheat' },
    rationale:
      "Bread wheat is Triticum aestivum, which is the wheat page's own accepted species. The page also carries the wheat concept, so the item is exact for the species and the page's other rows are not.",
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Wheat, durum',
    cohort: 'cereals-and-millets',
    botanicalCandidates: ['Triticum turgidum subsp. durum (Desf.) Husn.'],
    outcome: 'MAP_TO_EXISTING_CROP',
    resolvesTo: { type: 'crop', slug: 'durum-wheat' },
    rationale:
      'The FAO inversion of durum wheat. One hundred and thirty-six rows for Triticum turgidum subsp. durum, which has its own page and whose parent taxon Wave 43 gave an owner.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'Yellow yam',
    cohort: 'roots-and-tubers',
    botanicalCandidates: ['Dioscorea cayenensis Lam.'],
    outcome: 'ADD_DATA_ONLY_IDENTITY',
    resolvesTo: { type: 'crop-taxon', slug: 'yellow-yam' },
    rationale:
      'Held as a verified taxon under the yam concept since Wave 28. Twelve rows in two countries, and the agronomy is the yam agronomy the concept page carries.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
  {
    faoName: 'colocynth, wild gourd',
    cohort: 'vegetables',
    botanicalCandidates: ['Citrullus colocynthis (L.) Schrad.'],
    outcome: 'TAXONOMY_UNCERTAIN',
    rationale:
      'A desert cucurbit grown for seed oil and for medicine, and a wild relative of watermelon. Twenty-four Egyptian rows; one authority readable.',
    sourceIds: ['fao-crop-calendar'],
    reviewedAt: '2026-09-03',
  },
];
