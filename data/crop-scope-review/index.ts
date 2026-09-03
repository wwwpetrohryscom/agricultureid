/**
 * Wave 41 — the current explicit state of every complex crop concept.
 *
 * Thirty-nine candidates: thirty-one that Wave 36 left classified as complex,
 * and eight that Waves 39 and 40 stopped or declined because a neighbouring
 * page had never declared its scope.
 *
 * The distribution is the finding. Twenty-four are kept under an umbrella that
 * was already correct and had never been written down, eight are held as taxa
 * under a concept this wave declared, and seven are genuinely unresolved. Not
 * one candidate was split. That is not caution: in every case the split that
 * would help a reader is either not the taxonomic one — the market names in
 * Cucurbita are cultivar groups, not species — or it would leave the umbrella
 * describing the minor members while the crop everyone means moved to a page
 * with a qualified name.
 *
 * The seven unresolved answers are worth more than the twenty-four confirmed
 * ones. Five of them come down to two missing pages: there is no citrus page
 * to carry a concept above the five citrus crops the corpus publishes, and no
 * page owns Brassica rapa above its cultivar groups. Two are authority
 * disagreements the corpus cannot settle. Naming those two structural gaps is
 * what this wave found; declaring the twenty-four is what it fixed.
 */
import type { CropScopeReview } from '@/types/crop-scope-review';

export const CROP_SCOPE_REVIEWS: readonly CropScopeReview[] = [
  {
    slug: 'water-yam',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'yam',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Dioscorea alata is the most widely distributed cultivated yam and the one most often grown outside West Africa, and it is still sold, reported and eaten as yam. The yams commodity series aggregates it with the others and no source separates it, so a page for it would carry the species agronomy and none of the trade.',
    wouldChangeIf:
      'A source that reports Dioscorea alata production separately from the other yams, which would give the page something the umbrella cannot say.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'yellow-yam',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'yam',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'commodity-usage',
    ],
    finding:
      'Dioscorea cayenensis carries white yam as a subspecies under both authorities, which makes it the taxonomic parent of the most important yam in West African agriculture and an awkward page in its own right: writing it would mean writing about white yam under a name almost nobody uses. Only one authority resolves the name at all.',
    wouldChangeIf:
      'Both authorities resolving the name, and a decision about whether white yam is published under its own subspecific name.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'lesser-yam',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'yam',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'cultivar-groups',
      'search-intent',
    ],
    finding:
      'Dioscorea esculenta produces many small tubers rather than one large one, which is a real agronomic difference in harvesting and storage, and it is grown at a fraction of the area of the main yams. The difference is a paragraph on the umbrella rather than an article.',
    wouldChangeIf:
      'Enough species-specific agronomy on harvesting and storing a multi-tuber yam to carry an article that does not repeat the yam page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'aerial-yam',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'yam',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'species-members',
      'search-intent',
    ],
    finding:
      'Dioscorea bulbifera is harvested from bulbils on the stem rather than from the ground, which is the most distinctive thing any yam does, and it is also a listed invasive in Florida and elsewhere and is largely a famine and garden crop. The invasive literature is larger than the agronomic one.',
    wouldChangeIf:
      'Agronomic evidence on deliberate bulbil production at scale, rather than the invasion ecology that currently dominates the published record.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'white-lupin',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'lupin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'species-members',
      'market-terminology',
    ],
    finding:
      'Lupinus albus is the Mediterranean lupin, larger-seeded and more alkaloid-bitter in unimproved material than the Australian crop. The four cultivated lupins differ mainly in seed size, soil preference and alkaloid content, and none of those differences reaches article length on its own.',
    wouldChangeIf:
      'A species-level treatment of alkaloid management and debittering that the lupin page cannot carry for all four at once.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'narrow-leafed-lupin',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'lupin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
    ],
    finding:
      'Lupinus angustifolius is the lupin of Australian cropping and the bulk of world production, which is the strongest case among the four for its own page — and the lupin page is currently about it in all but name. Splitting would leave the umbrella describing three minor species.',
    wouldChangeIf:
      'Rewriting the lupin page as a genuine group treatment, at which point the Australian crop needs somewhere else to live.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'yellow-lupin',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'lupin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'species-members',
      'search-intent',
    ],
    finding:
      'Lupinus luteus is the sandy-soil lupin, grown on ground too poor and too acid for the other two European species and valued for higher seed protein. That is one agronomic fact and a soil preference.',
    wouldChangeIf:
      'Enough on its acid-sand adaptation and protein to separate it from a soil section on the umbrella page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'andean-lupin',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'lupin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'species-members',
      'official-source-terminology',
      'search-intent',
    ],
    finding:
      'Lupinus mutabilis is a different proposition from the other three: an Andean domesticate grown at altitude, high in both oil and protein, and traditionally debittered by running water. It has the clearest independent case of the four and the thinnest accessible agronomy.',
    wouldChangeIf:
      'Andean production and debittering evidence assembled to article depth, which the Peruvian and Bolivian research systems hold and which was not consulted in this wave.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'barbadense-cotton',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'cotton',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Gossypium barbadense is the extra-long-staple cotton — Pima, Egyptian, Sea Island — and its fibre is graded and priced separately in the trade. The commodity series the corpus holds are lint, seed and seed cotton, none of which separates it, so the market case for a page is weaker than the fibre case.',
    wouldChangeIf:
      'A staple-length commodity mapping that lets the page say something about extra-long-staple trade rather than only about the plant.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'tree-cotton',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'cotton',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'Gossypium arboreum is the diploid Asian cotton, still grown in India and Pakistan on land where the tetraploids struggle and valued for pest tolerance. Its area is small and falling and the published agronomy is largely comparative rather than about the crop itself.',
    wouldChangeIf:
      'Indian research on desi cotton read directly rather than through comparisons with upland cotton.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'levant-cotton',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'cotton',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'Gossypium herbaceum is the other diploid cotton and the rarest of the four in cultivation, grown on small areas in Africa and western Asia. It is held for the completeness of the species set rather than because a reader is likely to arrive at it.',
    wouldChangeIf:
      'Evidence that it is grown at a scale that would bring readers to a page, which the current record does not show.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'butternut-squash',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'pumpkin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'cultivar-groups',
      'agricultural-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Cucurbita moschata carries butternut, and butternut is a cultivar rather than the species: the same species also carries tropical pumpkins grown quite differently. A page titled for the cultivar would misdescribe the species and a page titled for the species would not be what anyone searched for.',
    wouldChangeIf:
      'A decision to publish cultivar-group pages, which this corpus does not do for cucurbits.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'winter-squash-maxima',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'pumpkin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'cultivar-groups',
      'agricultural-usage',
      'market-terminology',
    ],
    finding:
      'Cucurbita maxima carries the large keeping squashes — hubbard, kabocha, buttercup — and the giant show pumpkins. The species is real and the market names are cultivar groups, so the split that would help a reader is not the taxonomic one.',
    wouldChangeIf:
      'A treatment organised by keeping quality and rind rather than by species, which would be a different page from either option.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cushaw-squash',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'pumpkin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'Cucurbita argyrosperma is grown in Mexico and Central America, often for seed rather than flesh, and its area is small. Seed-pumpkin production is the one thing that would separate it and it is shared with hulless seed types of C. pepo.',
    wouldChangeIf:
      'Evidence on seed-purpose cucurbit production that distinguishes this species from the hulless pepo types it competes with.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'fig-leaf-gourd',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'pumpkin',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'Cucurbita ficifolia is grown at altitude in Latin America and is used worldwide as a rootstock for cucumber and melon under cold conditions — a use that has nothing to do with the pumpkin page it sits under. It is the one squash whose case rests on a non-food use.',
    wouldChangeIf:
      'Rootstock evidence assembled to article depth, at which point the page would belong beside the cucurbit crops it supports rather than under pumpkin.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'smooth-shell-macadamia',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'macadamia',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'cultivar-groups',
      'commodity-usage',
    ],
    finding:
      'Macadamia integrifolia is the smooth-shelled species and the basis of most commercial cultivars, but much of the industry is planted to integrifolia × tetraphylla hybrids that belong to neither page. Splitting would leave the hybrids homeless.',
    wouldChangeIf:
      'A treatment of the hybrid cultivars, which is where the industry actually is and which neither species page would own.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'rough-shell-macadamia',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'macadamia',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'cultivar-groups',
      'hybrid-members',
    ],
    finding:
      'Macadamia tetraphylla is the rough-shelled species, more cold-tolerant and used mainly as a hybrid parent rather than planted pure. A page about a parent species that is rarely grown alone would be a page about breeding.',
    wouldChangeIf:
      'Evidence of commercial pure-tetraphylla orchards at a scale that makes it a crop rather than a parent.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'white-mulberry',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'mulberry',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'species-members',
      'official-source-terminology',
    ],
    finding:
      'Morus alba is the silkworm mulberry and the reason the crop exists at scale, grown for leaves under a pruning regime that has nothing to do with fruit. That is a genuinely separate agronomy, and it is currently the substance of the mulberry page rather than an omission from it.',
    wouldChangeIf:
      'Rewriting the mulberry page around fruit, which would leave sericulture leaf production needing its own home.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'black-mulberry',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'mulberry',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'Morus nigra is the fruit mulberry, grown in small numbers for a soft berry that does not travel and is almost never traded. Its scale is domestic and its agronomy is a fruit-tree paragraph.',
    wouldChangeIf:
      'Evidence of commercial fruit mulberry production, which the record does not currently show anywhere at scale.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jute-mallow',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'jute',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Corchorus olitorius is two crops in one species: the better fibre of the two jutes, and molokhia, a mucilaginous leaf vegetable eaten across North Africa and the Middle East. The jute page covers the fibre and says nothing about the vegetable, which is the strongest split case in this whole review.',
    wouldChangeIf:
      'Nothing further — the split case is made. What is missing is the article, and the honest state is that the vegetable use was not researched in this wave.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'white-jute',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'jute',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'commodity-usage',
      'market-terminology',
    ],
    finding:
      'Corchorus capsularis is the whiter, coarser jute, grown on land that floods and blended with olitorius in the trade. The jute fibre series does not separate them and neither do the mills.',
    wouldChangeIf:
      'A grading system that distinguishes the two fibres commercially, which the trade does not currently apply.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'wild-banana-acuminata',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'banana',
    dimensionsInspected: [
      'accepted-taxonomy',
      'hybrid-members',
      'cultivar-groups',
      'agricultural-usage',
    ],
    finding:
      'Musa acuminata is a genome donor, not a crop. Every edible banana is a clone described by genome group — AAA, AAB, ABB — and none of them is this species. A page about it would be a page about ancestry.',
    wouldChangeIf:
      'Nothing agricultural. It would only change if the corpus decided to publish wild crop relatives as pages, which is a different editorial policy.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'wild-banana-balbisiana',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'banana',
    dimensionsInspected: [
      'accepted-taxonomy',
      'hybrid-members',
      'cultivar-groups',
      'agricultural-usage',
    ],
    finding:
      'Musa balbisiana is the second genome donor and contributes the B genome that carries drought and disease tolerance into the cooking bananas. Like acuminata it is an ancestor rather than a crop.',
    wouldChangeIf:
      'The same policy decision about wild relatives; the agronomy would not change the answer.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'liberica-coffee',
    wave: 'wave-41',
    priorState: 'AGRICULTURAL_CONCEPT_COMPLEX',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'coffee',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Coffea liberica is the third commercial coffee, grown in small quantities in the Philippines, Malaysia and West Africa and traded almost entirely regionally. Wave 32 promoted arabica and robusta and refused this one because the published record on it is thin, and it still is.',
    wouldChangeIf:
      'Substantive agronomy on liberica and excelsa production, most of which sits in Philippine and Malaysian sources not consulted here.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'rabbiteye-blueberry',
    wave: 'wave-41',
    priorState: 'TAXONOMY_COMPLEX',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'blueberry',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'agricultural-usage',
      'cultivar-groups',
    ],
    finding:
      'Vaccinium virgatum is where the authorities disagree: World Flora Online sinks it into V. corymbosum and Plants of the World Online keeps it separate. The corpus takes the separate reading and holds it as a taxon under the blueberry concept, which Wave 41 declared. Its agronomy is highbush agronomy with a lower chilling requirement.',
    wouldChangeIf:
      'The authorities agreeing, and a southern-production treatment that is more than a chilling figure.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'turnip-rape',
    wave: 'wave-41',
    priorState: 'TAXONOMY_COMPLEX',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'oilseed-rape',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
    ],
    finding:
      'Brassica rapa subsp. oleifera is the short-season rapeseed, and the authorities differ on its rank — one holds the subspecies and one sinks it into the species. Wave 41 moved it out of the mustard concept, where it did not belong, and into the rapeseed concept it shares a commodity with.',
    wouldChangeIf:
      'The rank disagreement resolving, and a treatment of short-season rapeseed that does not repeat the oilseed rape page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'habanero-pepper',
    wave: 'wave-41',
    priorState: 'DUPLICATES_EXISTING_CONCEPT',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'chili-pepper',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'market-terminology',
      'cultivar-groups',
      'search-intent',
    ],
    finding:
      'Capsicum chinense is a distinct domesticated species and that is precisely why holding it as a taxon is a decision rather than an oversight. What separates it commercially is pungency and cultivar branding, which is market rather than agronomy, and the chili pepper concept now declares it.',
    wouldChangeIf:
      'Agronomy specific to C. chinense production — not pungency figures — that the chili pepper page cannot state for the group.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'tabasco-pepper',
    wave: 'wave-41',
    priorState: 'DUPLICATES_EXISTING_CONCEPT',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'chili-pepper',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'market-terminology',
      'agricultural-usage',
    ],
    finding:
      'Capsicum frutescens is grown for sauce from small erect fruit and is closely related enough to C. annuum that some treatments merge them. Held as a taxon under the chili pepper concept.',
    wouldChangeIf:
      'Evidence that its production system differs from annuum chilli production in a way a reader would act on.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'aji-pepper',
    wave: 'wave-41',
    priorState: 'DUPLICATES_EXISTING_CONCEPT',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'chili-pepper',
    dimensionsInspected: [
      'accepted-taxonomy',
      'species-members',
      'search-intent',
      'agricultural-usage',
    ],
    finding:
      'Capsicum baccatum is the South American domesticate, recognisable by the yellow-green spots in its corolla and central to Peruvian and Bolivian cooking. Its distinguishing features are botanical and culinary rather than agronomic.',
    wouldChangeIf:
      'Andean production evidence for ají at a scale and depth that separates it from the chili pepper page.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'corn-salad',
    wave: 'wave-41',
    priorState: 'TAXONOMY_COMPLEX',
    outcome: 'DEFER_UNRESOLVED',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'search-intent',
      'official-source-terminology',
    ],
    finding:
      'Only one authority resolves the name at all: World Flora Online gives Valeriana locusta and Plants of the World Online returns nothing, so the corpus holds a single-source identity. Almost all horticultural literature uses Valerianella locusta, which neither authority currently accepts. Publishing a page would mean choosing a name the sources the page cites do not use.',
    wouldChangeIf:
      'Plants of the World Online resolving the name, or a documented statement from either authority about the Valerianella circumscription.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'phacelia',
    wave: 'wave-41',
    priorState: 'TAXONOMY_COMPLEX',
    outcome: 'DEFER_UNRESOLVED',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'search-intent',
      'official-source-terminology',
    ],
    finding:
      'The authorities place the plant in different genera: World Flora Online gives Ramosissimae tanacetifolia and Plants of the World Online gives Phacelia tanacetifolia. Every seed catalogue and cover-crop programme in Europe calls it phacelia, so the crop is unambiguous and its accepted name is not.',
    wouldChangeIf:
      'The placement disagreement resolving. The agricultural case for a cover-crop page is already strong and is not what is blocking it.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cassia-cinnamon',
    wave: 'wave-41',
    priorState: 'publication:BLOCKED_SCOPE',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'cinnamon',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Wave 39 stopped this crop because the cinnamon page had never declared whether it covered Cinnamomum verum alone or the barks traded as cinnamon. It covers both, and Wave 41 wrote that down. The block is lifted and what remains is editorial: the coumarin question, the two production systems and the labelling rules that separate the barks.',
    wouldChangeIf:
      'Nothing in scope. The next step is the article, and Wave 39 already recorded the evidence as sufficient.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'ethiopian-mustard',
    wave: 'wave-41',
    priorState: 'publication:BLOCKED_SCOPE',
    outcome: 'ADD_CHILD_DATA_ONLY_TAXA',
    conceptSlug: 'mustard',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'species-members',
      'official-source-terminology',
    ],
    finding:
      'Wave 39 stopped this crop because both authorities had moved it out of Brassica into Mutarda and the mustard page was built around a genus. The page is about a use, not a genus: it covers pungent-seed crops across Brassica and Sinapis already, and Mutarda changes nothing about that. The block was a category error in the earlier review and is now lifted.',
    wouldChangeIf:
      'Nothing in scope. The crop was recorded as ready on evidence and the remaining step is editorial.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'japanese-plum',
    wave: 'wave-41',
    priorState: 'publication:BLOCKED_SCOPE',
    outcome: 'KEEP_UMBRELLA_CONCEPT',
    conceptSlug: 'plum',
    dimensionsInspected: [
      'accepted-taxonomy',
      'agricultural-usage',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      'Wave 39 stopped this crop for fear of leaving the larger of the two plums under a qualified name while the smaller held the word "plum". The plum page already named both Prunus domestica and Prunus salicina in its own scientific-name field: it is an umbrella and always was. Keeping the umbrella and declaring it is the resolution, and publishing a second plum page is not.',
    wouldChangeIf:
      'Rewriting the plum page as Prunus domestica alone, which nothing currently argues for.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'mandarin',
    wave: 'wave-43',
    priorState: 'publication:BLOCKED_SCOPE',
    outcome: 'PROMOTE_CHILD_PROFILE',
    conceptSlug: 'citrus',
    dimensionsInspected: [
      'accepted-taxonomy',
      'hybrid-members',
      'commodity-usage',
      'market-terminology',
      'search-intent',
    ],
    finding:
      "Wave 39 stopped this crop because the identity resolves to Citrus × aurantium Mandarin Group and so do circumscriptions containing orange and grapefruit, with no citrus page to carry a concept. Wave 43 published that page and declared the hybrid's scope, so the block is gone and the crop is published: the trait that earns it a page is that seedlessness in mandarin is decided by orchard layout rather than by cultivar.",
    wouldChangeIf:
      'Nothing outstanding. The condition Wave 39 named — a citrus concept above the five published citrus crops — was built before the child was promoted, which is the order the ownership rule requires.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    slug: 'miscanthus',
    wave: 'wave-41',
    priorState: 'publication:BLOCKED_SCOPE',
    outcome: 'DEFER_UNRESOLVED',
    dimensionsInspected: [
      'accepted-taxonomy',
      'hybrid-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'The identity is keyed to Miscanthus × longiberbis while the biomass crop is Miscanthus × giganteus, and what growers and policy documents call miscanthus is a genus-level concept covering several sterile hybrids. A concept record requires a published page to attach to and there is none, so the honest state is unresolved rather than declared.',
    wouldChangeIf:
      'Publishing a miscanthus genus page, at which point the concept record has somewhere to live. The identity would also need re-keying to the hybrid actually grown.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'turnip',
    wave: 'wave-43',
    priorState: 'expansion:DECLINE_SCOPE_UNRESOLVED',
    outcome: 'PROMOTE_CHILD_PROFILE',
    dimensionsInspected: [
      'accepted-taxonomy',
      'cultivar-groups',
      'agricultural-usage',
      'market-terminology',
    ],
    finding:
      'Turnip is the Brassica rapa Rapifera Group and no page owned Brassica rapa. Wave 43 resolved that with a scope record rather than a species page, because the infraspecific classification of the species is contested between treatments while the agricultural forms are not — publishing a species page would have asserted one classification over the others. With the parent scope declared, turnip is published as a form beside chinese cabbage and pak choi, which is the arrangement the corpus already had for its siblings.',
    wouldChangeIf:
      'A decision to publish Brassica rapa as a species page would move the shared scope onto it and change what this page carries, though not whether it exists.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    slug: 'swede',
    wave: 'wave-43',
    priorState: 'expansion:DECLINE_SCOPE_UNRESOLVED',
    outcome: 'PROMOTE_CHILD_PROFILE',
    dimensionsInspected: [
      'accepted-taxonomy',
      'cultivar-groups',
      'agricultural-usage',
      'commodity-usage',
    ],
    finding:
      "Swede is the Brassica napus Napobrassica Group, and the rapeseed concept that owns Brassica napus explicitly excluded it — correctly, since a page about an oilseed cannot carry a fodder and vegetable root. That exclusion left swede with no owner at all, which was the block. Wave 43 published it as a root crop in its own right and the rapeseed concept's exclusion now points at a page rather than at nothing.",
    wouldChangeIf:
      'Nothing outstanding. The exclusion was the right call and the missing piece was the page it excluded to, which now exists.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-03',
  },
  {
    slug: 'kaffir-lime',
    wave: 'wave-43',
    priorState: 'expansion:DECLINE_SCOPE_UNRESOLVED',
    outcome: 'PROMOTE_CHILD_PROFILE',
    conceptSlug: 'citrus',
    dimensionsInspected: [
      'accepted-taxonomy',
      'hybrid-members',
      'agricultural-usage',
      'search-intent',
    ],
    finding:
      'Citrus hystrix was unambiguous as a taxon and blocked by the same missing citrus concept that blocked mandarin. Wave 43 built it, and the species-level case Wave 40 recorded as already sufficient — a citrus grown for leaves rather than fruit, with pruning height and shade managed for leaf yield — carried the article.',
    wouldChangeIf:
      'Nothing outstanding. The genus scope now exists and the species evidence was sufficient before it.',
    sourceIds: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
      'fao',
    ],
    reviewedAt: '2026-09-03',
  },
];

export const SCOPE_REVIEW_BY_SLUG = new Map(
  CROP_SCOPE_REVIEWS.map((r) => [r.slug, r]),
);
