/**
 * Wave 40 — the candidates considered, and what was decided about each.
 *
 * Selection started from a measured composition audit rather than from the
 * queue of taxa without articles. `COMPOSITION_GAPS` records what that audit
 * found, with counts the validator recomputes from the live corpus so the
 * finding cannot go stale or be asserted.
 *
 * Forty-one crops were reviewed and twenty-nine published. The twelve that were
 * not are recorded here with the same fields as the ones that were, because a
 * campaign that only records its successes cannot be checked: the useful part
 * of "we did not automatically elevate every data-only taxon" is the list of
 * the ones that were looked at and left.
 *
 * Every regional claim names a place, a system and a role, cites a source, and
 * names something the crop's own page also names. That last condition is the
 * one that does the work: it is what stops "important in Africa" being written
 * about a crop whose page cannot support it.
 */
import type {
  CompositionGap,
  CropExpansionCandidate,
} from '@/types/crop-expansion';

export const CROP_EXPANSION_CANDIDATES: readonly CropExpansionCandidate[] = [
  {
    slug: 'signal-grass',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'Introduced from East Africa to tropical America in the 1960s and now the dominant sown pasture grass of Brazil, reported in the order of fifty million hectares. Its significance is to the beef production system of the Cerrado rather than to any food market, and it rests on tolerance of acid low-phosphorus soils and of spittlebug.',
        corroboratedBy: 'Brazil',
        sourceIds: ['embrapa', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Both authorities accept Urochloa brizantha; the widely used Brachiaria brizantha is a synonym and the transfer is settled.',
    depthEvidence:
      'Apomictic reproduction, spittlebug resistance as the reason for its dominance, acid-soil adaptation, photosensitisation risk and pasture degradation each carry a section from published research.',
    searchReview: [
      { query: 'signal grass', mustWin: 'Signal Grass' },
      { query: 'urochloa brizantha', mustWin: 'Signal Grass' },
    ],
    sourceIds: ['embrapa', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'guinea-grass',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'Native to tropical Africa and sown across the tropics; its distinctive agricultural role is as the pasture grass that produces under a tree canopy, which places it under coconut and in silvopastoral systems where sun-demanding grasses thin out.',
        corroboratedBy: 'Africa',
        sourceIds: ['fao', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Megathyrsus maximus is accepted by both authorities; Panicum maximum and Urochloa maxima remain in use in the trade.',
    depthEvidence:
      'Shade tolerance, cultivar divergence, fertility demand relative to Urochloa, seed dormancy and invasive fire behaviour are each separately documented.',
    searchReview: [
      { query: 'guinea grass', mustWin: 'Guinea Grass' },
      { query: 'megathyrsus maximus', mustWin: 'Guinea Grass' },
    ],
    sourceIds: ['fao', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'rhodes-grass',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'north-africa-mediterranean',
        statement:
          'Grown under irrigation across the Middle East and North Africa on land and with water too saline for other forages, and baled for an international trade in forage into countries that import most of their livestock feed. Its significance is to irrigated forage systems rather than to rainfed pasture.',
        corroboratedBy: 'Middle East',
        sourceIds: ['fao', 'cabi', 'au-qld-dpi'],
      },
    ],
    conceptStability:
      'Chloris gayana is accepted by both authorities with no competing placement.',
    depthEvidence:
      'Salinity and alkalinity tolerance, stoloniferous habit, hay-not-silage use, light seed and cultivar ploidy each carry documented agronomic consequences.',
    searchReview: [
      { query: 'rhodes grass', mustWin: 'Rhodes Grass' },
      { query: 'chloris gayana', mustWin: 'Rhodes Grass' },
    ],
    sourceIds: ['fao', 'cabi', 'au-qld-dpi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'stylo',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'The legume most widely sown into acid-soil tropical pasture across tropical Latin America, Southeast Asia and Africa, where it supplies the nitrogen that grass pasture runs down. Its history is dominated by anthracnose, and the accession CIAT 184 became standard because its tolerance held everywhere except the tropical American savannas.',
        corroboratedBy: 'tropical Latin America',
        sourceIds: ['cgiar', 'fao', 'cabi'],
      },
    ],
    conceptStability:
      'Stylosanthes guianensis is accepted; the genus contains several agriculturally used species that must not be conflated.',
    depthEvidence:
      'Anthracnose as the defining constraint, acid-soil adaptation, persistence by seed rather than by plant, hard seed and grass-legume balance are each documented.',
    searchReview: [
      { query: 'stylo', mustWin: 'Stylo' },
      { query: 'stylosanthes guianensis', mustWin: 'Stylo' },
    ],
    sourceIds: ['cgiar', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'greenleaf-desmodium',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'The legume intercrop of push-pull in the East African highlands, adopted by large numbers of smallholders because it suppresses Striga hermonthica in maize as well as feeding stalled dairy animals. Its significance is to a cropping system rather than to a forage market.',
        corroboratedBy: 'East African',
        sourceIds: ['cgiar', 'iita', 'cabi'],
      },
    ],
    conceptStability:
      'Desmodium intortum is accepted; published push-pull results distinguish it from D. uncinatum and the two must not be merged.',
    depthEvidence:
      'The push-pull system, Striga suppression, the contested stemborer mechanism, establishment cost and species distinction each carry a section from published research.',
    searchReview: [
      { query: 'greenleaf desmodium', mustWin: 'Greenleaf Desmodium' },
      { query: 'desmodium intortum', mustWin: 'Greenleaf Desmodium' },
    ],
    sourceIds: ['cgiar', 'iita', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'scarlet-eggplant',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'Named in the literature as one of the five most important vegetables of Central and West Africa alongside tomato, onion, pepper and okra, with Nigeria, Benin, Cameroon and Ghana among the principal producers. Four cultivar groups split it into a fruit crop and a leaf crop.',
        corroboratedBy: 'Nigeria',
        sourceIds: ['iita', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Solanum aethiopicum is accepted and is a distinct African domesticate, not a form of S. melongena.',
    depthEvidence:
      'Cultivar-group structure, bitterness as a market trait, repeated leaf cutting, use as a resistance source in eggplant breeding and glycoalkaloid variation are documented.',
    searchReview: [
      { query: 'scarlet eggplant', mustWin: 'Scarlet Eggplant' },
      { query: 'solanum aethiopicum', mustWin: 'Scarlet Eggplant' },
    ],
    sourceIds: ['iita', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'gboma-eggplant',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'A West and Central African indigenous vegetable grown principally for leaves and young shoots, notably in Benin, Togo, Nigeria and Ghana, where it supplies greens through the rainy season from a standing shrub rather than from a bed.',
        corroboratedBy: 'Benin',
        sourceIds: ['iita', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Solanum macrocarpon is accepted and is a distinct species from S. aethiopicum despite sharing the English name African eggplant.',
    depthEvidence:
      'Leaf harvest from a shrub, the distinction from scarlet eggplant, glycoalkaloid composition, nightshade rotation and self-seeding persistence are documented.',
    searchReview: [
      { query: 'gboma eggplant', mustWin: 'Gboma Eggplant' },
      { query: 'solanum macrocarpon', mustWin: 'Gboma Eggplant' },
    ],
    sourceIds: ['iita', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'waterleaf',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'A staple leafy vegetable of southern Nigeria and humid West Africa, valued because it reaches first harvest in about five to six weeks and is then cut fortnightly for roughly a year, which no conventional vegetable matches.',
        corroboratedBy: 'Nigeria',
        sourceIds: ['iita', 'cabi', 'fao'],
      },
    ],
    conceptStability:
      'Talinum fruticosum is accepted; the synonym T. triangulare remains in wide use in African literature.',
    depthEvidence:
      'Harvest speed, propagation by cuttings, absence of shelf life, weed-or-crop ambiguity, oxalate and overlapping common names are documented.',
    searchReview: [
      { query: 'waterleaf', mustWin: 'Waterleaf' },
      { query: 'talinum fruticosum', mustWin: 'Waterleaf' },
    ],
    sourceIds: ['iita', 'cabi', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'tannia',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'An American aroid that became a staple across West and Central Africa, where Nigeria, Ghana and Cameroon lead African production. Its significance is as a shade-tolerant staple in humid forest-zone mixed cropping, and its central problem is Pythium root rot in clonal planting material.',
        corroboratedBy: 'Nigeria',
        sourceIds: ['iita', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Xanthosoma sagittifolium is accepted; the crop must not be merged with taro, which shares the name cocoyam.',
    depthEvidence:
      'Corm and cormel structure, root rot in vegetative material, absence of a seed system, calcium oxalate, shade tolerance and statistical aggregation with taro are documented.',
    searchReview: [
      { query: 'tannia', mustWin: 'Tannia' },
      { query: 'xanthosoma sagittifolium', mustWin: 'Tannia' },
    ],
    sourceIds: ['iita', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'hausa-potato',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'A savanna West African tuber crop grown in northern Nigeria, Ghana and Burkina Faso for small aromatic tubers, bought for flavour rather than for starch. It is one of the crops repeatedly named in reviews of neglected African species.',
        corroboratedBy: 'Nigeria',
        sourceIds: ['iita', 'cabi', 'nap-nrc'],
      },
    ],
    conceptStability:
      'Coleus rotundifolius is accepted; the species has been published under Coleus, Plectranthus and Solenostemon and all three remain in current literature.',
    depthEvidence:
      'A tuber crop in the mint family, three genus names, poor storage, planting-date sensitivity and harvest labour are documented, and the thinness of the evidence is stated rather than filled in.',
    searchReview: [
      { query: 'hausa potato', mustWin: 'Hausa Potato' },
      { query: 'coleus rotundifolius', mustWin: 'Hausa Potato' },
    ],
    sourceIds: ['iita', 'cabi', 'nap-nrc'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'barnyard-millet',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'south-asia',
        statement:
          'A hill-country staple in India and Nepal and the fastest-maturing cereal in cultivation, sown when the monsoon arrives late or a first sowing has failed. Its significance is to rainfed hill agriculture where no other cereal finishes in the time available.',
        corroboratedBy: 'India',
        sourceIds: ['icar', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Echinochloa frumentacea is accepted; the Japanese species E. esculenta shares the English name and must not be merged with it.',
    depthEvidence:
      'Maturity around 45 days, two cultivated species under one name, the weedy close relative, dual grain and fodder use and small-millet dehulling are documented.',
    searchReview: [
      { query: 'barnyard millet', mustWin: 'Barnyard Millet' },
      { query: 'echinochloa frumentacea', mustWin: 'Barnyard Millet' },
    ],
    sourceIds: ['icar', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'kodo-millet',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'south-asia',
        statement:
          'An Indian domesticate concentrated in Madhya Pradesh, Chhattisgarh and Karnataka, grown on the poorest land in those districts and historically valued as a famine reserve because the grain stores for years.',
        corroboratedBy: 'India',
        sourceIds: ['icar', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Paspalum scrobiculatum is accepted; the species occurs both as a cultivated cereal and as a wild grass, which any species-level record must account for.',
    depthEvidence:
      'The kodua poisoning hazard, harvest-weather dependence, hardiness on stony ground, long grain storage and dehulling are documented from Indian agricultural and medical literature.',
    searchReview: [
      { query: 'kodo millet', mustWin: 'Kodo Millet' },
      { query: 'paspalum scrobiculatum', mustWin: 'Kodo Millet' },
    ],
    sourceIds: ['icar', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'horse-gram',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'south-asia',
        statement:
          'A pulse of southern and central India, Nepal and Sri Lanka sown late onto residual soil moisture where chickpea and pigeon pea cannot set seed, and fed to livestock as much as eaten.',
        corroboratedBy: 'India',
        sourceIds: ['icar', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Macrotyloma uniflorum is accepted; the crop is frequently and wrongly listed among the Asian Vigna pulses.',
    depthEvidence:
      'Residual-moisture cropping, combined drought and salinity tolerance, the genus distinction, hard seed, green-manure use and the absence of a reference genome are documented.',
    searchReview: [
      { query: 'horse gram', mustWin: 'Horse Gram' },
      { query: 'macrotyloma uniflorum', mustWin: 'Horse Gram' },
    ],
    sourceIds: ['icar', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'moth-bean',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'south-asia',
        statement:
          'Concentrated in Rajasthan and the arid north-west of the Indian subcontinent, where it is the most drought-hardy and heat-tolerant of the Asian Vigna pulses and is grown as much for haulm fodder as for grain.',
        corroboratedBy: 'Rajasthan',
        sourceIds: ['icar', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Vigna aconitifolia is accepted by both authorities with no competing placement, and it is not confused with any other Asian Vigna at the name level.',
    depthEvidence:
      'Drought and heat hardiness within the Vigna group, the mat canopy that cools its own soil, sprout and fodder markets, orphan-crop research status and yellow mosaic virus are documented.',
    searchReview: [
      { query: 'moth bean', mustWin: 'Moth Bean' },
      { query: 'vigna aconitifolia', mustWin: 'Moth Bean' },
    ],
    sourceIds: ['icar', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jobs-tears',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'east-asia',
        statement:
          'Grown as a cereal across China, Korea, Japan and mainland Southeast Asia, where the soft-shelled variety is eaten and the hard-shelled forms supply a bead trade. Its significance is regional and it is largely absent from international cereal statistics.',
        corroboratedBy: 'China',
        sourceIds: ['cabi', 'cn-mara', 'fao'],
      },
    ],
    conceptStability:
      'Coix lacryma-jobi is accepted; the food crop is var. ma-yuen and the hard-shelled bead forms are botanical varieties of the same species.',
    depthEvidence:
      'The soft-shell and hard-shell division, threshing as the deciding constraint, the bead product, the pearl-barley naming trap and a recent genome are documented.',
    searchReview: [
      { query: "job's tears", mustWin: "Job's Tears" },
      { query: 'coix lacryma-jobi', mustWin: "Job's Tears" },
    ],
    sourceIds: ['cabi', 'cn-mara', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'kenaf',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'south-asia',
        statement:
          'Grown at scale in India, China and Bangladesh, where it is traded with jute as mesta, and increasingly valued for its core fibre as well as its bast. Its significance is to the South Asian bast fibre economy rather than to any single product.',
        corroboratedBy: 'India',
        sourceIds: ['fao', 'icar', 'cabi'],
      },
    ],
    conceptStability:
      'Both authorities accept Sabdariffa cannabina; the entire fibre trade and literature still uses Hibiscus cannabinus.',
    depthEvidence:
      'Two fibres from one stem, the genus transfer, mesta covering two species, retting, short-day growth and root-knot nematode susceptibility are documented.',
    searchReview: [
      { query: 'kenaf', mustWin: 'Kenaf' },
      { query: 'sabdariffa cannabina', mustWin: 'Kenaf' },
    ],
    sourceIds: ['fao', 'icar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'ramie',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'east-asia',
        statement:
          'China produces the large majority of world ramie and holds most of the germplasm and research. Its significance is as a fibre whose quality has never been the constraint: degumming cost is what has kept an exceptional bast fibre a minor crop.',
        corroboratedBy: 'China',
        sourceIds: ['fao', 'cn-mara', 'cabi'],
      },
    ],
    conceptStability:
      'Boehmeria nivea is accepted by both authorities with no competing placement; the crop must be kept apart from stinging nettle fibre, which is a different plant and trade.',
    depthEvidence:
      'The degumming constraint, perennial multi-cut habit, fibre properties, vegetative propagation and composite markets are documented.',
    searchReview: [
      { query: 'ramie', mustWin: 'Ramie' },
      { query: 'boehmeria nivea', mustWin: 'Ramie' },
    ],
    sourceIds: ['fao', 'cn-mara', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'kapok',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'southeast-asia',
        statement:
          'Commercially concentrated in Indonesia and Thailand, where the floss is harvested from large trees in smallholder plantations and farmed landscapes. Its significance rests on buoyancy and water repellency rather than on any textile property.',
        corroboratedBy: 'Indonesia',
        sourceIds: ['fao', 'cabi', 'id-pertanian'],
      },
    ],
    conceptStability:
      'Ceiba pentandra is accepted; the species occurs naturally in both tropical America and West Africa.',
    depthEvidence:
      'Pod-lining floss that cannot be spun, buoyancy as the product, seed oil as a second line, displacement by synthetics and handling difficulty are documented.',
    searchReview: [
      { query: 'kapok', mustWin: 'Kapok' },
      { query: 'ceiba pentandra', mustWin: 'Kapok' },
    ],
    sourceIds: ['fao', 'cabi', 'id-pertanian'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'ulluco',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'One of the principal Andean tubers after potato, grown from Colombia to northern Argentina and sold on colour in Andean markets. Its significance is to high-altitude Andean rotations, where it supplies a non-solanaceous partner for potato.',
        corroboratedBy: 'Colombia',
        sourceIds: ['cip', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Ullucus tuberosus is accepted by both authorities with no competing placement; the crop appears under four national common names, which is a records problem rather than an identity one.',
    depthEvidence:
      'Clonal propagation and virus accumulation, a tuber that stays crisp, unpeeled waxy skin, betalain colour, short-day tuberisation and rotational value are documented.',
    searchReview: [
      { query: 'ulluco', mustWin: 'Ulluco' },
      { query: 'ullucus tuberosus', mustWin: 'Ulluco' },
    ],
    sourceIds: ['cip', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'mashua',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'Grown across the Andes from Colombia to northern Argentina, the most vigorous and least demanding of the minor Andean tubers, and planted deliberately as a border and rotation crop for its deterrent effect on nematodes and insects.',
        corroboratedBy: 'Colombia',
        sourceIds: ['cip', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Tropaeolum tuberosum is accepted; it is a different species from the ornamental garden nasturtium.',
    depthEvidence:
      'Glucosinolate chemistry doing agricultural work, vigour on poor ground, a reported thirteen-hour daylength threshold, pungency limiting consumption and potyvirus in clones are documented.',
    searchReview: [
      { query: 'mashua', mustWin: 'Mashua' },
      { query: 'tropaeolum tuberosum', mustWin: 'Mashua' },
    ],
    sourceIds: ['cip', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'velvet-bean',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'Adopted by some three thousand farmers in southern Benin between 1988 and 1993, principally to suppress Imperata cylindrica, and used across the humid tropics as a relay cover crop with maize. Its significance is as a weed-control and fertility technology rather than as a harvested crop.',
        corroboratedBy: 'Benin',
        sourceIds: ['iita', 'cgiar', 'fao'],
      },
    ],
    conceptStability:
      'Mucuna pruriens is accepted; cultivated non-stinging forms are var. utilis and must be distinguished from wild material.',
    depthEvidence:
      'Imperata suppression, relay intercropping with maize, L-DOPA keeping the seed out of the food chain, stinging hairs and seed supply are documented.',
    searchReview: [
      { query: 'velvet bean', mustWin: 'Velvet Bean' },
      { query: 'mucuna pruriens', mustWin: 'Velvet Bean' },
    ],
    sourceIds: ['iita', 'cgiar', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jack-bean',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          'Grown across the tropics of Africa, Asia and the Americas as a cover crop chosen for what it does after the rains stop: it holds cover into the dry season where the trailing cover legumes collapse.',
        corroboratedBy: 'Africa',
        sourceIds: ['iita', 'cgiar', 'fao'],
      },
    ],
    conceptStability:
      'Canavalia ensiformis is accepted; the related sword bean, C. gladiata, is a vegetable crop and is frequently confused with it.',
    depthEvidence:
      'Dry-season cover, erect habit among trailing legumes, canavanine excluding it from food, nematode effects, large easily handled seed and slow-decomposing residue are documented.',
    searchReview: [
      { query: 'jack bean', mustWin: 'Jack Bean' },
      { query: 'canavalia ensiformis', mustWin: 'Jack Bean' },
    ],
    sourceIds: ['iita', 'cgiar', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'rice-bean',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'south-asia',
        statement:
          'Grown in the hill agriculture of Nepal, north-east India, Myanmar and southern China, where it tolerates the wet acid conditions that defeat the other Asian Vigna pulses and is almost always intercropped rather than sole-cropped.',
        corroboratedBy: 'Nepal',
        sourceIds: ['cgiar', 'icar', 'cabi'],
      },
    ],
    conceptStability:
      'Vigna umbellata is accepted by both authorities with no competing placement, though the English names rice bean and red bean both collide with other crops.',
    depthEvidence:
      'Adaptation to wet acid monsoon conditions, intercropping and its effect on statistics, dual grain and fodder use, hard seed, shattering and photoperiod sensitivity are documented.',
    searchReview: [
      { query: 'rice bean', mustWin: 'Rice Bean' },
      { query: 'vigna umbellata', mustWin: 'Rice Bean' },
    ],
    sourceIds: ['cgiar', 'icar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'yardlong-bean',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'southeast-asia',
        statement:
          'A principal wet-season vegetable across Southeast and East Asia, grown on trellises in China, Thailand, Vietnam, Indonesia and the Philippines and picked every day or two for a fresh market.',
        corroboratedBy: 'Thailand',
        sourceIds: ['cgiar', 'fao', 'cabi'],
      },
    ],
    conceptStability:
      'Vigna unguiculata subsp. sesquipedalis is accepted; it is a subspecies of cowpea and records keyed to the species cannot distinguish the two crops.',
    depthEvidence:
      'The vegetable subspecies distinction, pod length as a market trait, daily picking, wet-season productivity, nitrogen fixation in a vegetable rotation and pre-harvest interval pressure are documented.',
    searchReview: [
      { query: 'yardlong bean', mustWin: 'Yardlong Bean' },
      {
        query: 'vigna unguiculata subsp. sesquipedalis',
        mustWin: 'Yardlong Bean',
      },
    ],
    sourceIds: ['cgiar', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jicama',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'A substantial vegetable in Mexico and Central America and in Southeast Asia, exported into North American and Asian fresh markets. Its significance is unusual: it is a nitrogen-fixing legume grown for a storage root, which no other root crop is.',
        corroboratedBy: 'Mexico',
        sourceIds: ['cgiar', 'fao', 'cabi'],
      },
    ],
    conceptStability:
      'Pachyrhizus erosus is accepted; two other cultivated Pachyrhizus species and an unrelated African crop share the name yam bean.',
    depthEvidence:
      'Rotenone in everything above ground, flower removal as the decisive practice, nitrogen fixation in a root crop, one root per plant, chilling sensitivity and three species under one name are documented.',
    searchReview: [
      { query: 'jicama', mustWin: 'Jicama' },
      { query: 'pachyrhizus erosus', mustWin: 'Jicama' },
    ],
    sourceIds: ['cgiar', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'kola-nut',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'sub-saharan-africa',
        statement:
          "Described in the forest zone of West Africa as second in importance only to the oil palm among indigenous cash crops, grown in Nigeria, Ghana, Côte d'Ivoire and neighbouring countries and traded fresh north into the Sahel.",
        corroboratedBy: 'Nigeria',
        sourceIds: ['iita', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Cola nitida is accepted; C. acuminata is a separate traded species distinguished by cotyledon number, and Garcinia kola is a different genus again.',
    depthEvidence:
      'Recalcitrant seed governing the whole trade, the historic long-distance trade, the two-species distinction, caffeine composition, ceremonial demand and storage weevils are documented.',
    searchReview: [
      { query: 'kola nut', mustWin: 'Kola Nut' },
      { query: 'cola nitida', mustWin: 'Kola Nut' },
    ],
    sourceIds: ['iita', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'mangosteen',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'southeast-asia',
        statement:
          'A high-value export fruit of Thailand, Indonesia, Malaysia, Vietnam and the Philippines, shipped principally into China. Its significance to crop science is separate from its trade: it is an obligate apomict, so the world crop is close to a single clone.',
        corroboratedBy: 'Thailand',
        sourceIds: ['fao', 'cabi', 'id-pertanian'],
      },
    ],
    conceptStability:
      'Garcinia mangostana is accepted; its wild ancestry and origin remain actively argued and are not asserted here.',
    depthEvidence:
      'Obligate apomixis and a narrow genetic base, very slow bearing, recalcitrant seed, gamboge and translucent flesh disorders and water management as quality management are documented.',
    searchReview: [
      { query: 'mangosteen', mustWin: 'Mangosteen' },
      { query: 'garcinia mangostana', mustWin: 'Mangosteen' },
    ],
    sourceIds: ['fao', 'cabi', 'id-pertanian'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cape-gooseberry',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'Colombia and Peru dominate export production of a fruit grown to importing-market specifications rather than to a domestic standard, with the dry calyx doing the work of packaging.',
        corroboratedBy: 'Colombia',
        sourceIds: ['co-minagri', 'pe-midagri', 'cabi'],
      },
    ],
    conceptStability:
      'Physalis peruviana is accepted; it must not be conflated with P. philadelphica, the tomatillo, which is harvested green and acidic.',
    depthEvidence:
      'The husk as packaging and shelf life, the tomatillo distinction, drop harvest, trellising, fusarium wilt and volunteer persistence are documented.',
    searchReview: [
      { query: 'cape gooseberry', mustWin: 'Cape Gooseberry' },
      { query: 'physalis peruviana', mustWin: 'Cape Gooseberry' },
    ],
    sourceIds: ['co-minagri', 'pe-midagri', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'black-cumin',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'PUBLISH',
    significance: [
      {
        region: 'north-africa-mediterranean',
        statement:
          'Grown as a cool-season seed spice in Egypt, Turkey, Iran, Syria and across South Asia, and traded into the Middle East, South Asia and Europe. Its significance in a crop encyclopedia is partly negative: it is the seed spice that is not an Apiaceae.',
        corroboratedBy: 'Egypt',
        sourceIds: ['icar', 'fao', 'cabi'],
      },
    ],
    conceptStability:
      'Nigella sativa is accepted; several unrelated plants trade under the name black cumin, including Apiaceae species.',
    depthEvidence:
      'Family distinction from every other seed spice, three misleading names, capsule rather than umbel, cool-season growth, grading on colour and rotational value are documented.',
    searchReview: [
      { query: 'black cumin', mustWin: 'Black Cumin' },
      { query: 'nigella sativa', mustWin: 'Black Cumin' },
    ],
    sourceIds: ['icar', 'fao', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  /* ---- Reviewed and not published --------------------------------------- */

  {
    slug: 'turnip',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DECLINE_SCOPE_UNRESOLVED',
    significance: [
      {
        region: 'europe',
        statement:
          'A field and fodder crop of northern Europe with a long history in the Norfolk four-course rotation, and a vegetable across South and East Asia. The significance is real; the obstacle is not evidence.',
        corroboratedBy: 'Europe',
        sourceIds: ['fao', 'cabi', 'ahdb'],
      },
    ],
    conceptStability:
      'Turnip is the Brassica rapa Rapifera Group, and the corpus now publishes three other B. rapa cultivar groups — chinese cabbage, pak choi and daikon is Raphanus but the rapa set is real — without any page declaring what Brassica rapa covers. Publishing a fourth group before that scope exists would deepen a problem Wave 41 has to solve.',
    depthEvidence:
      'Sufficient. Root and fodder use, bolting behaviour, clubroot and the fodder-versus-vegetable split would all carry sections. The decision is not about evidence.',
    searchReview: [{ query: 'brassica rapa', mustNotWin: ['Turnip Rape'] }],
    sourceIds: ['fao', 'cabi', 'ahdb'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'swede',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DECLINE_SCOPE_UNRESOLVED',
    significance: [
      {
        region: 'europe',
        statement:
          'A significant fodder and vegetable root in northern Europe, particularly in Scotland, Scandinavia and Finland, where it produces bulk feed in a season too short for many alternatives.',
        corroboratedBy: 'Europe',
        sourceIds: ['fao', 'cabi', 'ahdb'],
      },
    ],
    conceptStability:
      'Swede is the Brassica napus Napobrassica Group, and the corpus publishes oilseed rape as B. napus without declaring what that page covers. The same scope question as turnip, on the other Brassica species.',
    depthEvidence:
      'Sufficient. The decision is about which page it sits beside, not about what could be written.',
    searchReview: [{ query: 'brassica napus', mustWin: 'Oilseed rape' }],
    sourceIds: ['fao', 'cabi', 'ahdb'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'rocoto-pepper',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_EDITORIAL',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'A distinct domesticated Capsicum of the Andean highlands, grown in Peru and Bolivia at altitudes where the other cultivated peppers do not crop, and unusual in the genus for its black seeds and cold tolerance.',
        corroboratedBy: 'Peru',
        sourceIds: ['cip', 'cabi', 'pe-midagri'],
      },
    ],
    conceptStability:
      'Capsicum pubescens is accepted and is genuinely a separate domesticated species, not a form of C. annuum. The identity is not the obstacle.',
    depthEvidence:
      'Promising but not yet assembled: cold tolerance, the black seed, altitude range and the absence of interfertility with the other cultivated peppers would each need sources read for this species rather than for the genus.',
    searchReview: [{ query: 'chili pepper', mustWin: 'Chili pepper' }],
    sourceIds: ['cip', 'cabi', 'pe-midagri'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'tepary-bean',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_EDITORIAL',
    significance: [
      {
        region: 'north-america',
        statement:
          'A desert-adapted Phaseolus of the Sonoran region of Mexico and the south-western United States, grown by farming peoples of that region and studied as a heat- and drought-tolerance source for common bean.',
        corroboratedBy: 'Mexico',
        sourceIds: ['usda-ars', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Phaseolus acutifolius is accepted and distinct from common bean. No scope obstacle.',
    depthEvidence:
      'Sufficient to write, and deferred deliberately: the wave prioritised regions where the corpus was thinner than North America.',
    searchReview: [{ query: 'common bean', mustWin: 'Common Bean' }],
    sourceIds: ['usda-ars', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'arrowroot',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_MORE_EVIDENCE',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'A Caribbean and northern South American rhizome crop grown for a fine starch, with St Vincent historically the principal source of the traded product.',
        corroboratedBy: 'Caribbean',
        sourceIds: ['fao', 'cabi', 'usda-plants'],
      },
    ],
    conceptStability:
      'Maranta arundinacea is accepted. The obstacle is not identity.',
    depthEvidence:
      'Thin for this species specifically. Most accessible material describes arrowroot starch as a product rather than the crop as an agronomic subject, and several unrelated plants are also sold as arrowroot, which contaminates what can be read across.',
    searchReview: [{ query: 'cassava', mustWin: 'Cassava' }],
    sourceIds: ['fao', 'cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'edible-canna',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_MORE_EVIDENCE',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'An Andean and Central American rhizome crop grown for starch, and used at larger scale in Vietnam and southern China for starch noodles than in its region of origin.',
        corroboratedBy: 'Andean',
        sourceIds: ['cip', 'cabi', 'fao'],
      },
    ],
    conceptStability:
      'Canna indica is accepted, but the cultivated starch canna is treated under several names in the horticultural and agricultural literature and the relationship between them is not resolved from the sources consulted.',
    depthEvidence:
      'Insufficient for this species as a crop. The starch-processing literature is substantial and the agronomic literature is not.',
    searchReview: [{ query: 'taro', mustWin: 'Taro' }],
    sourceIds: ['cip', 'cabi', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'kaffir-lime',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DECLINE_SCOPE_UNRESOLVED',
    significance: [
      {
        region: 'southeast-asia',
        statement:
          'A citrus grown across Thailand, Indonesia and Malaysia for its leaves rather than its fruit, which makes it a leaf crop within a fruit genus and a genuine gap in the corpus.',
        corroboratedBy: 'Thailand',
        sourceIds: ['fao', 'cabi', 'usda-plants'],
      },
    ],
    conceptStability:
      'The citrus hybrid complex is unresolved in this corpus, and Wave 39 already stopped mandarin for that reason. Adding another citrus before the complex has a declared scope would compound it.',
    depthEvidence:
      'Sufficient. Leaf harvest from a citrus, the rind chemistry and the distinct market would all carry sections. The obstacle is the genus, not the species.',
    searchReview: [{ query: 'lime', mustWin: 'Lime' }],
    sourceIds: ['fao', 'cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'habanero-pepper',
    wave: 'wave-40',
    priorOutcome: 'DUPLICATES_EXISTING_CONCEPT',
    recommendation: 'DECLINE_DUPLICATE_CONCEPT',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'A Capsicum chinense of the Yucatán and the Caribbean whose commercial identity is a pungency class rather than an agronomy distinct from the pepper concept the corpus already publishes.',
        corroboratedBy: 'Caribbean',
        sourceIds: ['cabi', 'usda-plants', 'fao'],
      },
    ],
    conceptStability:
      'Capsicum chinense is a distinct species, and that is precisely why declining is a decision rather than an oversight: a valid species is not automatically a page.',
    depthEvidence:
      'What could be written is largely what the chili pepper page already says. The differentiating material is pungency and cultivar branding, which is market rather than agronomic.',
    searchReview: [{ query: 'chili pepper', mustWin: 'Chili pepper' }],
    sourceIds: ['cabi', 'usda-plants', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'giant-reed',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DECLINE_LOW_SIGNIFICANCE',
    significance: [
      {
        region: 'north-africa-mediterranean',
        statement:
          'A Mediterranean grass used for reed instruments, fencing and windbreaks and trialled as a bioenergy feedstock, with almost no area planted deliberately as a crop.',
        corroboratedBy: 'Mediterranean',
        sourceIds: ['cabi', 'usda-plants', 'fao'],
      },
    ],
    conceptStability:
      'Arundo donax is accepted by both authorities with no competing placement. The identity is settled; what is not settled is whether it should be described as a crop at all.',
    depthEvidence:
      'The substantive literature is about the plant as one of the most damaging riparian invaders in several regions, not about growing it. Publishing it as a crop would misrepresent what is known about it.',
    searchReview: [{ query: 'switchgrass', mustWin: 'Switchgrass' }],
    sourceIds: ['cabi', 'usda-plants', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'celeriac',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_EDITORIAL',
    significance: [
      {
        region: 'europe',
        statement:
          'A field vegetable of northern and central Europe, notably the Netherlands, Germany and Poland, grown for a swollen hypocotyl over a long season.',
        corroboratedBy: 'Europe',
        sourceIds: ['fao', 'cabi', 'nl-lvvn'],
      },
    ],
    conceptStability:
      'Apium graveolens Rapaceum Group is accepted, and celery is published as the species. A cultivar-group page beside a species page is the same pattern Wave 41 has to settle for Brassica.',
    depthEvidence:
      'Sufficient. Deferred because the wave prioritised regions the corpus covers thinly, and temperate Europe is not one of them.',
    searchReview: [{ query: 'celery', mustWin: 'Celery' }],
    sourceIds: ['fao', 'cabi', 'nl-lvvn'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'malabar-spinach',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_EDITORIAL',
    significance: [
      {
        region: 'south-asia',
        statement:
          'A climbing leafy vegetable of South and Southeast Asia grown through the hot wet season when temperate greens fail, and one of the crops whose common name collides with waterleaf.',
        corroboratedBy: 'South',
        sourceIds: ['icar', 'cabi', 'fao'],
      },
    ],
    conceptStability:
      'Basella alba is accepted. The name collision with waterleaf is an editorial problem, not an identity one.',
    depthEvidence:
      'Sufficient. Deferred deliberately: waterleaf was published this wave and publishing both crops that answer to "Ceylon spinach" in one wave would have created the ambiguity and resolved nothing.',
    searchReview: [{ query: 'waterleaf', mustWin: 'Waterleaf' }],
    sourceIds: ['icar', 'cabi', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'forage-peanut',
    wave: 'wave-40',
    priorOutcome: 'DATA_ONLY_SUFFICIENT',
    recommendation: 'DEFER_EDITORIAL',
    significance: [
      {
        region: 'latin-america-caribbean',
        statement:
          'A stoloniferous perennial legume from Brazil used in tropical American pastures and plantation understoreys, persistent under heavy grazing because its growing points sit below the grazing height.',
        corroboratedBy: 'Brazil',
        sourceIds: ['embrapa', 'cgiar', 'cabi'],
      },
    ],
    conceptStability:
      'Arachis pintoi is accepted by both authorities with no competing placement and is clearly distinct from the groundnut, Arachis hypogaea, which the corpus publishes.',
    depthEvidence:
      'Sufficient. Deferred because five tropical forages were already published in this wave and a sixth would have added area without adding a distinct agronomic argument.',
    searchReview: [{ query: 'stylo', mustWin: 'Stylo' }],
    sourceIds: ['embrapa', 'cgiar', 'cabi'],
    reviewedAt: '2026-09-02',
  },
];

/**
 * What the composition audit found.
 *
 * Counts are recomputed by the validator from the live corpus. `publishedAfter`
 * is measured directly; `publishedBefore` is derived by subtracting the
 * candidates this wave published into the same bucket, which is also recomputed.
 * Neither number can be asserted, and neither can go stale.
 */
export const COMPOSITION_GAPS: readonly CompositionGap[] = [
  {
    dimension: 'crop-group',
    bucket: 'forage-and-pasture',
    publishedBefore: 16,
    publishedAfter: 24,
    bucketBefore: [
      'alfalfa',
      'berseem-clover',
      'birdsfoot-trefoil',
      'cocksfoot',
      'fenugreek',
      'italian-ryegrass',
      'kale',
      'lablab',
      'napier-grass',
      'perennial-ryegrass',
      'red-clover',
      'sainfoin',
      'switchgrass',
      'tall-fescue',
      'timothy',
      'white-clover',
    ],
    finding:
      'Sixteen forage articles for a land use that covers more of the earth than any crop, and the tropical pasture species among them was one: napier grass, a cut-and-carry fodder rather than a grazed sward. The grazed pasture systems of the humid tropics — the apomictic Urochloa and Megathyrsus grasses and the legumes sown into them — were absent entirely.',
  },
  {
    dimension: 'crop-group',
    bucket: 'roots-and-tubers',
    publishedBefore: 16,
    publishedAfter: 21,
    bucketBefore: [
      'beetroot',
      'breadfruit',
      'carrot',
      'cassava',
      'daikon',
      'ginger',
      'jerusalem-artichoke',
      'oca',
      'plantain',
      'potato',
      'radish',
      'sugar-beet',
      'sweet-potato',
      'taro',
      'turmeric',
      'yam',
    ],
    finding:
      'Sixteen root and tuber articles: the global staples, the temperate roots, taro, and oca. The Andean minor tubers were represented by one of four, the American aroid grown across West Africa by none, and the legume root crops by none — three distinct agricultural traditions with almost no presence.',
  },
  {
    dimension: 'crop-group',
    bucket: 'fibre-crops',
    publishedBefore: 7,
    publishedAfter: 10,
    bucketBefore: [
      'abaca',
      'cotton',
      'flax',
      'hemp',
      'jute',
      'sisal',
      'upland-cotton',
    ],
    finding:
      'Seven fibre articles, and the three added here are each a different kind of fibre: a two-fibre bast crop, a bast fibre that cannot be retted, and a floss that cannot be spun. The gap was in the range of what a fibre crop can be, not in the count.',
  },
  {
    dimension: 'crop-group',
    bucket: 'cover-crops',
    publishedBefore: 6,
    publishedAfter: 10,
    bucketBefore: [
      'berseem-clover',
      'camelina',
      'daikon',
      'italian-ryegrass',
      'red-clover',
      'white-clover',
    ],
    finding:
      'Six crops carried the cover-crop group, and every one of them is also grown for a harvest — clovers, ryegrass, camelina, daikon. Nothing was published that is grown for no harvest at all, which is where the distinctive agronomy of the practice lives: the crop that has to justify occupying land while producing nothing to sell.',
  },
  {
    dimension: 'crop-group',
    bucket: 'cereals',
    publishedBefore: 21,
    publishedAfter: 24,
    bucketBefore: [
      'african-rice',
      'barley',
      'durum-wheat',
      'einkorn',
      'emmer',
      'finger-millet',
      'fonio',
      'foxtail-millet',
      'maize',
      'millet',
      'oats',
      'proso-millet',
      'rice',
      'rye',
      'sorghum',
      'spelt',
      'sweetcorn',
      'teff',
      'triticale',
      'wheat',
      'wild-rice',
    ],
    finding:
      "Twenty-one cereal articles including the millet concept and five millet species. What was missing was the group's dry, marginal end: the fastest-maturing cereal in cultivation and the one whose grain carries a documented poisoning hazard were both absent, and both are staples on land in India that grows very little else.",
  },
  {
    dimension: 'agricultural-use',
    bucket: 'forage',
    publishedBefore: 27,
    publishedAfter: 37,
    bucketBefore: [
      'alfalfa',
      'berseem-clover',
      'birdsfoot-trefoil',
      'cocksfoot',
      'cowpea',
      'fenugreek',
      'foxtail-millet',
      'grass-pea',
      'italian-ryegrass',
      'kale',
      'lablab',
      'lupin',
      'millet',
      'napier-grass',
      'oats',
      'pea',
      'perennial-ryegrass',
      'red-clover',
      'rye',
      'sainfoin',
      'sorghum',
      'switchgrass',
      'tall-fescue',
      'teff',
      'timothy',
      'triticale',
      'white-clover',
    ],
    finding:
      'Twenty-seven crops recorded a forage use and the tropical pasture species among them were napier grass and switchgrass — one cut-and-carry, one a temperate-origin biomass grass. The additions are the grasses and legumes of grazed tropical pasture, which is a different agronomy: apomictic seed, acid soils, anthracnose, and persistence through seed rather than through the plant.',
  },
  {
    dimension: 'growth-habit',
    bucket: 'grass',
    publishedBefore: 29,
    publishedAfter: 35,
    bucketBefore: [
      'african-rice',
      'barley',
      'cocksfoot',
      'durum-wheat',
      'einkorn',
      'emmer',
      'finger-millet',
      'fonio',
      'foxtail-millet',
      'italian-ryegrass',
      'maize',
      'millet',
      'napier-grass',
      'oats',
      'perennial-ryegrass',
      'proso-millet',
      'rice',
      'rye',
      'sorghum',
      'spelt',
      'sugarcane',
      'sweetcorn',
      'switchgrass',
      'tall-fescue',
      'teff',
      'timothy',
      'triticale',
      'wheat',
      'wild-rice',
    ],
    finding:
      'Twenty-nine grasses, of which twenty were cereals or sugarcane and the pasture grasses were temperate apart from napier grass. Six grasses were added, four of them tropical pasture species and two tropical cereals, which is where the shortfall actually was.',
  },
];
