/**
 * Wave 39 — the publication decision for every crop the research campaign left
 * ready to write.
 *
 * Wave 36 finished with 54 crops marked `READY_BUT_DEFER_EDITORIAL`. That was
 * an honest answer to the question it asked (is the evidence there?) and it
 * left a queue. This file is the queue being answered: one record per crop, no
 * crop untouched, and the decision recorded whether or not it was to publish.
 *
 * Forty-nine were written and published. Five were stopped, all five on the
 * same kind of problem and none of them on evidence: the name the page would
 * carry belongs to a scope question the corpus has not settled. Those five are
 * the reason `BLOCKED_SCOPE` exists as an outcome rather than being folded into
 * a deferral — a deferral says "later"; these say "not until a different
 * question is answered", and they name the question.
 *
 * Nothing here is trusted. `scripts/crops-publication-validate.ts` reconciles
 * every field against live corpus state: whether the page exists, whether the
 * differentiating claim is really in this article and really absent from the
 * neighbour it names, whether the declared granularity survives the identity's
 * taxonomic rank, and whether the recorded search expectations still hold when
 * the queries are actually run.
 */
import type { CropPublicationReview } from '@/types/crop-publication';

export const CROP_PUBLICATION_REVIEWS: readonly CropPublicationReview[] = [
  {
    slug: 'timothy',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'It is late-heading, stores its reserves in a swollen stem base rather than in a crown, and is cut rather than grazed — which is why it dominates the export hay trade and disappears under close stocking.',
      falseFor: 'perennial-ryegrass',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Phleum pratense exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'timothy', mustWin: 'Timothy' },
      { query: 'phleum pratense', mustWin: 'Timothy' },
    ],
    sourcesConsulted: ['fao', 'ahdb', 'usda-plants', 'cabi', 'usda-ars'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'tall-fescue',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Almost all of that persistence comes from a fungal endophyte living between its cells, and the same fungus makes the grass poisonous to the animals eating it.',
      falseFor: 'perennial-ryegrass',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Lolium arundinaceum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'tall fescue', mustWin: 'Tall Fescue' },
      { query: 'lolium arundinaceum', mustWin: 'Tall Fescue' },
    ],
    sourcesConsulted: ['fao', 'ahdb', 'usda-ars', 'usda-plants', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'sainfoin',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim: 'Sainfoin is a forage legume that does not cause bloat.',
      falseFor: 'alfalfa',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Onobrychis viciifolia exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'sainfoin', mustWin: 'Sainfoin' },
      { query: 'onobrychis viciifolia', mustWin: 'Sainfoin' },
    ],
    sourcesConsulted: ['fao', 'usda-ars', 'ahdb', 'usda-plants', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'birdsfoot-trefoil',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Like sainfoin it carries condensed tannins, so it is bloat-safe and delivers bypass protein.',
      falseFor: 'white-clover',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Lotus corniculatus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'birdsfoot trefoil', mustWin: 'Birdsfoot Trefoil' },
      { query: 'lotus corniculatus', mustWin: 'Birdsfoot Trefoil' },
    ],
    sourcesConsulted: ['fao', 'usda-ars', 'usda-plants', 'cabi', 'ahdb'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'cocksfoot',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'It grows in dense tussocks rather than a uniform sward, which is both why it survives dry summers and why it becomes unpalatable if left.',
      falseFor: 'perennial-ryegrass',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Dactylis glomerata exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'cocksfoot', mustWin: 'Cocksfoot' },
      { query: 'dactylis glomerata', mustWin: 'Cocksfoot' },
    ],
    sourcesConsulted: ['fao', 'ahdb', 'usda-plants', 'cabi', 'usda-ars'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'spelt',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Spelt is bread wheat’s hulled subspecies: the same hexaploid genome, wrapped in glumes that threshing will not remove.',
      falseFor: 'wheat',
    },
    scope: {
      granularity: 'NARROWER_THAN_ENTITY',
      statement:
        'Covers Triticum aestivum subsp. spelta, an infraspecific taxon of Triticum aestivum. That binomial is shared with 1 other crop record(s), so the page must not be read as covering the species.',
      collidesWith: ['wheat'],
    },
    searchReview: [
      { query: 'spelt', mustWin: 'Spelt' },
      { query: 'triticum aestivum subsp. spelta', mustWin: 'Spelt' },
      { query: 'triticum aestivum', mustNotWin: ['Spelt'] },
    ],
    sourcesConsulted: ['fao', 'cimmyt', 'usda-plants', 'cabi', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'emmer',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Emmer is the tetraploid hulled wheat: the same AABB genome as durum, wrapped in glumes that threshing will not release.',
      falseFor: 'durum-wheat',
    },
    scope: {
      granularity: 'NARROWER_THAN_ENTITY',
      statement:
        'Covers Triticum turgidum subsp. dicoccum, an infraspecific taxon of Triticum turgidum. That binomial is shared with 1 other crop record(s), so the page must not be read as covering the species.',
      collidesWith: ['durum-wheat'],
    },
    searchReview: [
      { query: 'emmer', mustWin: 'Emmer' },
      { query: 'triticum turgidum subsp. dicoccum', mustWin: 'Emmer' },
      { query: 'triticum turgidum', mustNotWin: ['Emmer'] },
    ],
    sourcesConsulted: ['fao', 'cimmyt', 'usda-plants', 'cabi', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'einkorn',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Einkorn is the only diploid wheat in cultivation — a single genome where bread wheat has three — and it is hulled, low-yielding and grown almost entirely because of what it is rather than what it produces.',
      falseFor: 'wheat',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Triticum monococcum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'einkorn', mustWin: 'Einkorn' },
      { query: 'triticum monococcum', mustWin: 'Einkorn' },
    ],
    sourcesConsulted: ['fao', 'cimmyt', 'usda-plants', 'cabi', 'gbif'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'foxtail-millet',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Foxtail millet is the fastest of the cultivated cereals to maturity, which makes it the crop sown when something else has failed and the season is already half gone.',
      falseFor: 'proso-millet',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Setaria italica exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'foxtail millet', mustWin: 'Foxtail Millet' },
      { query: 'setaria italica', mustWin: 'Foxtail Millet' },
    ],
    sourcesConsulted: ['fao', 'icar', 'cgiar', 'usda-plants', 'cabi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'proso-millet',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Proso millet uses less water to make a crop than any other grain in common cultivation, and finishes in a short season.',
      falseFor: 'foxtail-millet',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Panicum miliaceum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'proso millet', mustWin: 'Proso Millet' },
      { query: 'panicum miliaceum', mustWin: 'Proso Millet' },
    ],
    sourcesConsulted: ['fao', 'usda-nass', 'usda-plants', 'cabi', 'cgiar'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'italian-ryegrass',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'It also flowers in its establishment year, which perennial ryegrass does not, and that single difference governs both its productivity and its short life.',
      falseFor: 'perennial-ryegrass',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Lolium multiflorum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'italian ryegrass', mustWin: 'Italian Ryegrass' },
      { query: 'lolium multiflorum', mustWin: 'Italian Ryegrass' },
    ],
    sourcesConsulted: ['fao', 'ahdb', 'usda-plants', 'cabi', 'usda-ars'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'napier-grass',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'It is also the trap crop in push-pull, one of the most widely adopted smallholder pest-management systems in Africa, which gives it a second role entirely separate from feeding livestock.',
      falseFor: 'sorghum',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Cenchrus purpureus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'napier grass', mustWin: 'Napier Grass' },
      { query: 'cenchrus purpureus', mustWin: 'Napier Grass' },
    ],
    sourcesConsulted: ['fao', 'cgiar', 'usda-plants', 'cabi', 'iita'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'berseem-clover',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'It is an annual cut four or five times in a season, and in the Nile valley and the Indo-Gangetic plain it is the crop that carries dairy animals through winter.',
      falseFor: 'red-clover',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Trifolium alexandrinum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'berseem clover', mustWin: 'Berseem Clover' },
      { query: 'trifolium alexandrinum', mustWin: 'Berseem Clover' },
    ],
    sourcesConsulted: ['fao', 'icar', 'usda-plants', 'cabi', 'usda-ars'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'wild-rice',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'It belongs to Zizania, a separate genus in the same family, and it grows standing in shallow water in the lakes and slow rivers of the northern United States and Canada.',
      falseFor: 'rice',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Zizania palustris exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'wild rice', mustWin: 'Wild Rice' },
      { query: 'zizania palustris', mustWin: 'Wild Rice' },
    ],
    sourcesConsulted: [
      'fao',
      'usda-plants',
      'cabi',
      'umn-extension',
      'usda-nass',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'brussels-sprouts',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Brussels sprouts are axillary buds harvested from a standing stem.',
      falseFor: 'cabbage',
    },
    scope: {
      granularity: 'NARROWER_THAN_ENTITY',
      statement:
        'Covers Brassica oleracea Gemmifera Group, an infraspecific taxon of Brassica oleracea. That binomial is shared with 5 other crop record(s), so the page must not be read as covering the species.',
      collidesWith: ['kohlrabi', 'broccoli', 'cabbage', 'cauliflower', 'kale'],
    },
    searchReview: [
      { query: 'brussels sprouts', mustWin: 'Brussels Sprouts' },
      {
        query: 'brassica oleracea gemmifera group',
        mustWin: 'Brussels Sprouts',
      },
      { query: 'brassica oleracea', mustNotWin: ['Brussels Sprouts'] },
    ],
    sourcesConsulted: ['fao', 'ahdb', 'usda-plants', 'cabi', 'cornell-cals'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'chinese-cabbage',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Chinese cabbage is a Brassica rapa heading vegetable, not a relative of European cabbage in any close sense, and it is the raw material of kimchi — a use large enough to shape when and where it is grown.',
      falseFor: 'cabbage',
    },
    scope: {
      granularity: 'NARROWER_THAN_ENTITY',
      statement:
        'Covers Brassica rapa Pekinensis Group, an infraspecific taxon of Brassica rapa. That binomial is shared with 3 other crop record(s), so the page must not be read as covering the species.',
      collidesWith: ['turnip-rape', 'pak-choi', 'turnip'],
    },
    searchReview: [
      { query: 'chinese cabbage', mustWin: 'Chinese Cabbage' },
      { query: 'brassica rapa pekinensis group', mustWin: 'Chinese Cabbage' },
      { query: 'brassica rapa', mustNotWin: ['Chinese Cabbage'] },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cornell-cals', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'pak-choi',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Pak choi is the non-heading Brassica rapa: a rosette of thick white petioles and dark blades harvested whole, fast enough to crop several times a season and sold as a unit rather than by weight of leaf.',
      falseFor: 'chinese-cabbage',
    },
    scope: {
      granularity: 'NARROWER_THAN_ENTITY',
      statement:
        'Covers Brassica rapa Chinensis Group, an infraspecific taxon of Brassica rapa. That binomial is shared with 3 other crop record(s), so the page must not be read as covering the species.',
      collidesWith: ['turnip-rape', 'chinese-cabbage', 'turnip'],
    },
    searchReview: [
      { query: 'pak choi', mustWin: 'Pak Choi' },
      { query: 'brassica rapa chinensis group', mustWin: 'Pak Choi' },
      { query: 'brassica rapa', mustNotWin: ['Pak Choi'] },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cornell-cals', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'daikon',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Daikon is a long white radish grown as a major East Asian vegetable and, quite separately, as a cover crop chosen for the same root — one that drills through compacted subsoil and then rots, leaving a channel.',
      falseFor: 'radish',
    },
    scope: {
      granularity: 'NARROWER_THAN_ENTITY',
      statement:
        'Covers Raphanus raphanistrum subsp. sativus Longipinnatus Group, an infraspecific taxon of Raphanus raphanistrum. That binomial is shared with 1 other crop record(s), so the page must not be read as covering the species.',
      collidesWith: ['radish'],
    },
    searchReview: [
      { query: 'daikon', mustWin: 'Daikon' },
      { query: 'raphanus sativus longipinnatus group', mustWin: 'Daikon' },
      // The bare binomial Raphanus raphanistrum is WILD radish, which this
      // corpus does not publish, so an expectation about it would be an
      // expectation about an entity that is not here. The collision that
      // matters is with the crop beside it: publishing daikon must not take
      // the word "radish" from the radish page.
      { query: 'radish', mustNotWin: ['Daikon'] },
    ],
    sourcesConsulted: [
      'fao',
      'cabi',
      'usda-plants',
      'umn-extension',
      'cornell-cals',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'bitter-gourd',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Bitter gourd is grown for a fruit whose bitterness is the product rather than a defect, and every part of its management, from clipped seed to overhead trellis to picking every few days, follows from a fruit that must be sold immature.',
      falseFor: 'cucumber',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Momordica charantia exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'bitter gourd', mustWin: 'Bitter Gourd' },
      { query: 'momordica charantia', mustWin: 'Bitter Gourd' },
    ],
    sourcesConsulted: ['fao', 'icar', 'cabi', 'usda-plants', 'cgiar'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'chayote',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Chayote is a perennial cucurbit whose fruit contains a single large seed that germinates inside it, so the crop is planted by putting a whole fruit in the ground — and the roots are a second, separate harvest.',
      falseFor: 'pumpkin',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Sicyos edulis exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'chayote', mustWin: 'Chayote' },
      { query: 'sicyos edulis', mustWin: 'Chayote' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cgiar', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'tomatillo',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Tomatillo is self-incompatible, which is why a single plant sets nothing and why it is the one solanaceous fruit vegetable that cannot be grown alone.',
      falseFor: 'tomato',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Physalis philadelphica exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'tomatillo', mustWin: 'Tomatillo' },
      { query: 'physalis philadelphica', mustWin: 'Tomatillo' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cornell-cals', 'uc-ipm'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'water-spinach',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Water spinach is a fast leafy vegetable grown either floating in water or on land, cut repeatedly from the same planting — and a regulated noxious weed in parts of the United States for exactly the traits that make it productive.',
      falseFor: 'spinach',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Ipomoea aquatica exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'water spinach', mustWin: 'Water Spinach' },
      { query: 'ipomoea aquatica', mustWin: 'Water Spinach' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cgiar', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'camelina',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Camelina matures in roughly 85 to 100 days on as little as 280 mm of rainfall, which is why it is grown as a rotation and cover-crop oilseed in places where a full-season crop would not finish.',
      falseFor: 'oilseed-rape',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Camelina sativa exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'camelina', mustWin: 'Camelina' },
      { query: 'camelina sativa', mustWin: 'Camelina' },
    ],
    sourcesConsulted: ['usda-plants', 'usda-ars', 'cabi', 'fao', 'ahdb'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'niger-seed',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        "Niger seed supplies roughly half of Ethiopia's oilseed output from a strictly self-incompatible crop, so every seed set depends on an insect carrying pollen between different plants — and pollinator scarcity shows up directly as yield loss.",
      falseFor: 'sunflower',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Guizotia abyssinica exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'niger seed', mustWin: 'Niger Seed' },
      { query: 'guizotia abyssinica', mustWin: 'Niger Seed' },
    ],
    sourcesConsulted: ['cgiar', 'et-moa', 'icar', 'cabi', 'usda-plants'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'chia',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        "Until photoperiod-insensitive material appeared, the crop's commercial range was set by daylength rather than by heat, water or soil.",
      falseFor: 'sesame',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Salvia hispanica exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'chia', mustWin: 'Chia' },
      { query: 'salvia hispanica', mustWin: 'Chia' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cgiar', 'cl-minagri'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'perilla',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'crispa is grown for its leaf — and material selected for one is poor at the other.',
      falseFor: 'sesame',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Perilla frutescens exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'perilla', mustWin: 'Perilla' },
      { query: 'perilla frutescens', mustWin: 'Perilla' },
    ],
    sourcesConsulted: ['cabi', 'usda-plants', 'jp-maff', 'cn-mara', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jojoba',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Jojoba is the only plant known to store a liquid wax rather than a triglyceride oil in its seed, and it is dioecious and wind-pollinated, so roughly one plant in ten in a plantation is a male that will never bear a crop.',
      falseFor: 'castor-bean',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Simmondsia chinensis exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'jojoba', mustWin: 'Jojoba' },
      { query: 'simmondsia chinensis', mustWin: 'Jojoba' },
    ],
    sourcesConsulted: ['usda-plants', 'usda-ars', 'cabi', 'fao', 'gbif'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jatropha',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Jatropha carries toxic phorbol esters that make both the oil and the press cake unfit for food or feed, which is why a crop planted for biodiesel across three continents earns from one product where its competitors earn from two.',
      falseFor: 'castor-bean',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Jatropha curcas exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'jatropha', mustWin: 'Jatropha' },
      { query: 'jatropha curcas', mustWin: 'Jatropha' },
    ],
    sourcesConsulted: ['cabi', 'usda-plants', 'fao', 'cgiar', 'iita'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'asian-pear',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Asian pear is not: it is harvested ready to eat, stays crisp, and does not soften in storage.',
      falseFor: 'pear',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Pyrus pyrifolia exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'asian pear', mustWin: 'Asian Pear' },
      { query: 'pyrus pyrifolia', mustWin: 'Asian Pear' },
    ],
    sourcesConsulted: [
      'usda-plants',
      'jp-maff',
      'cabi',
      'cornell-cals',
      'eppo',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'durian',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Durian is harvested by letting the fruit fall, because a fruit cut from the tree does not develop properly — and a two-kilogram spined fruit dropping from twenty metres makes the orchard floor the most managed part of the crop.',
      falseFor: 'jackfruit',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Durio zibethinus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'durian', mustWin: 'Durian' },
      { query: 'durio zibethinus', mustWin: 'Durian' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'faostat', 'id-pertanian'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'lowbush-blueberry',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Commercial fields are native stands that were already there, managed on a two-year cycle in which the whole field is mown or burned to the ground and cropped only in alternate years.',
      falseFor: 'blueberry',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Vaccinium angustifolium exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'lowbush blueberry', mustWin: 'Lowbush Blueberry' },
      { query: 'vaccinium angustifolium', mustWin: 'Lowbush Blueberry' },
    ],
    sourcesConsulted: [
      'usda-plants',
      'umn-extension',
      'ca-ns-agri',
      'usda-nass',
      'cabi',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'sea-buckthorn',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        "Sea buckthorn berries cannot practically be picked: the standard commercial harvest is to cut the fruiting branch, freeze it, and shake the berries off — which destroys next season's wood on that shoot and turns pruning and harvest into the same operation.",
      falseFor: 'blackcurrant',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Hippophae rhamnoides exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'sea buckthorn', mustWin: 'Sea Buckthorn' },
      { query: 'hippophae rhamnoides', mustWin: 'Sea Buckthorn' },
    ],
    sourcesConsulted: ['cabi', 'usda-plants', 'fao', 'cn-mara', 'ca-sk-agr'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'quince',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Quince is grown for two unrelated purposes: a hard, aromatic fruit that is almost always cooked, and a dwarfing rootstock that shaped the design of European pear orchards.',
      falseFor: 'pear',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Cydonia oblonga exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'quince', mustWin: 'Quince' },
      { query: 'cydonia oblonga', mustWin: 'Quince' },
    ],
    sourcesConsulted: ['usda-plants', 'cabi', 'faostat', 'eppo', 'tr-tarim'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'pomelo',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Its thick albedo, which is peeled and discarded, means most of a very large fruit is not sold.',
      falseFor: 'grapefruit',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Citrus maxima exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'pomelo', mustWin: 'Pomelo' },
      { query: 'citrus maxima', mustWin: 'Pomelo' },
    ],
    sourcesConsulted: ['usda-plants', 'cabi', 'faostat', 'cn-mara', 'eppo'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'sour-cherry',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Sour cherry is a different species from sweet cherry, self-fertile where sweet cherry is not, and shake-harvested into water tanks because it is destined for processing rather than the fresh market.',
      falseFor: 'cherry',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Prunus cerasus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'sour cherry', mustWin: 'Sour Cherry' },
      { query: 'prunus cerasus', mustWin: 'Sour Cherry' },
    ],
    sourcesConsulted: [
      'usda-plants',
      'cabi',
      'faostat',
      'usda-nass',
      'pl-minrol',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'fenugreek',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'The characteristic smell of fenugreek, often described as maple or curry-like, comes largely from sotolone, and it is detectable at very low concentration.',
      falseFor: 'coriander',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Trigonella foenum-graecum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'fenugreek', mustWin: 'Fenugreek' },
      { query: 'trigonella foenum-graecum', mustWin: 'Fenugreek' },
    ],
    sourcesConsulted: ['icar', 'fao', 'cabi', 'usda-plants', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'star-anise',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Illicium anisatum, Japanese star anise, produces a very similar dried fruit that is neurotoxic, and confusion or deliberate adulteration between the two has caused documented poisoning incidents.',
      falseFor: 'clove',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Illicium verum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'star anise', mustWin: 'Star Anise' },
      { query: 'illicium verum', mustWin: 'Star Anise' },
    ],
    sourcesConsulted: ['cn-mara', 'cabi', 'usda-plants', 'efsa', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'wasabi',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Wasabi is grown in beds of continuously flowing cool spring water, takes around two years to reach harvest, and loses its pungency within minutes of grating — which is why most product sold as wasabi contains none of it.',
      falseFor: 'radish',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Eutrema japonicum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'wasabi', mustWin: 'Wasabi' },
      { query: 'eutrema japonicum', mustWin: 'Wasabi' },
    ],
    sourcesConsulted: ['jp-maff', 'cabi', 'usda-plants', 'nz-mpi', 'fao'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'adzuki-bean',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Adzuki bean is grown almost entirely to be made into sweet paste, so it is bred and graded for seed coat colour, uniform size and cooking behaviour rather than for protein or yield.',
      falseFor: 'mung-bean',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Vigna angularis exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'adzuki bean', mustWin: 'Adzuki Bean' },
      { query: 'vigna angularis', mustWin: 'Adzuki Bean' },
    ],
    sourcesConsulted: ['jp-maff', 'cabi', 'usda-plants', 'faostat', 'cgiar'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'lima-bean',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Lima bean seed contains cyanogenic glucosides, and the concentration differs enough between types that commercial cultivars are specifically selected for low levels while wild and coloured landraces can be dangerous raw.',
      falseFor: 'common-bean',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Phaseolus lunatus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'lima bean', mustWin: 'Lima Bean' },
      { query: 'phaseolus lunatus', mustWin: 'Lima Bean' },
    ],
    sourcesConsulted: ['usda-plants', 'cabi', 'cgiar', 'fao', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'winged-bean',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Winged bean is the rare crop where pod, seed, leaf, flower and tuberous root are all harvested and eaten, and its tuber carries a protein content far above that of other root crops.',
      falseFor: 'cowpea',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Psophocarpus tetragonolobus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'winged bean', mustWin: 'Winged Bean' },
      { query: 'psophocarpus tetragonolobus', mustWin: 'Winged Bean' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'cgiar', 'nap-nrc'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'jerusalem-artichoke',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Jerusalem artichoke stores inulin rather than starch, which is what makes it useful industrially and what makes it hard to eradicate: every tuber fragment left in the ground regrows the crop next season.',
      falseFor: 'sunflower',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Helianthus tuberosus exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'jerusalem artichoke', mustWin: 'Jerusalem Artichoke' },
      { query: 'helianthus tuberosus', mustWin: 'Jerusalem Artichoke' },
    ],
    sourcesConsulted: [
      'usda-plants',
      'cabi',
      'fr-agriculture-gouv',
      'fao',
      'faostat',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'abaca',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        "The fibre resists deterioration in salt water, which made Manila hemp the standard material for ships' rope before synthetics, and its strength and porosity now put it into specialty papers where no other plant fibre performs as well.",
      falseFor: 'banana',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Musa textilis exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'abaca', mustWin: 'Abaca' },
      { query: 'musa textilis', mustWin: 'Abaca' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'faostat', 'iita'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'sisal',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Sisal flowers once and dies, sets essentially no seed, and is propagated instead from bulbils that form on the flowering pole — while the fibre it is grown for is only around four per cent of the leaf it is cut from.',
      falseFor: 'jute',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Agave sisalana exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'sisal', mustWin: 'Sisal' },
      { query: 'agave sisalana', mustWin: 'Sisal' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'faostat', 'br-mapa'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'brazil-nut',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Brazil nut is the major internationally traded nut that has no plantations: repeated attempts to cultivate it have produced trees that grow but do not fruit, because the pollinator and its supporting forest cannot be planted with the tree.',
      falseFor: 'cashew',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Bertholletia excelsa exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'brazil nut', mustWin: 'Brazil Nut' },
      { query: 'bertholletia excelsa', mustWin: 'Brazil Nut' },
    ],
    sourcesConsulted: ['fao', 'cabi', 'usda-plants', 'faostat', 'br-mapa'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'oca',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Oca forms tubers only when the day is shorter than about twelve hours, so outside the tropics it grows all summer and only begins to bulk in autumn — leaving the crop racing an approaching frost.',
      falseFor: 'potato',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Oxalis tuberosa exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'oca', mustWin: 'Oca' },
      { query: 'oxalis tuberosa', mustWin: 'Oca' },
    ],
    sourcesConsulted: ['cgiar', 'cip', 'cabi', 'usda-plants', 'nz-mpi'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'stevia',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Stevia is harvested before it flowers, because flowering reduces the steviol glycoside content of the leaf that the entire crop exists to supply — and it is short-day, so the crop is racing its own flowering signal.',
      falseFor: 'chicory',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Stevia rebaudiana exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'stevia', mustWin: 'Stevia' },
      { query: 'stevia rebaudiana', mustWin: 'Stevia' },
    ],
    sourcesConsulted: ['cabi', 'usda-plants', 'efsa', 'fao', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'switchgrass',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'A biomass crop is cut after senescence, once the plant has translocated nitrogen, potassium and other minerals back into its rhizomes.',
      falseFor: 'napier-grass',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Panicum virgatum exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'switchgrass', mustWin: 'Switchgrass' },
      { query: 'panicum virgatum', mustWin: 'Switchgrass' },
    ],
    sourcesConsulted: [
      'usda-plants',
      'usda-ars',
      'usda-nrcs',
      'iastate-extension',
      'cabi',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'yerba-mate',
    wave: 'wave-39',
    outcome: 'PUBLISHED',
    differentiator: {
      claim:
        'Yerba mate leaf has to be flash-heated within about a day of cutting to stop it browning, so the first processing step sits in the field — and the finished product is then aged for months before it is sold.',
      falseFor: 'tea',
    },
    scope: {
      granularity: 'EXACT_ENTITY',
      statement:
        'Covers Ilex paraguariensis exactly. No other crop record in the corpus is keyed to that name.',
    },
    searchReview: [
      { query: 'yerba mate', mustWin: 'Yerba Mate' },
      { query: 'ilex paraguariensis', mustWin: 'Yerba Mate' },
    ],
    sourcesConsulted: ['cabi', 'usda-plants', 'ar-agri', 'br-mapa', 'faostat'],
    reviewedAt: '2026-09-02',
  },
  /* ---- Stopped, all five on scope --------------------------------------- */

  {
    slug: 'cassia-cinnamon',
    wave: 'wave-39',
    outcome: 'BLOCKED_SCOPE',
    scope: {
      granularity: 'UNRESOLVED',
      statement:
        'Cinnamomum aromaticum is a distinct species with its own agronomy, but the published Cinnamon page does not say whether it covers Cinnamomum verum alone or the group of barks traded as cinnamon. Until that page declares its scope, a cassia page and the cinnamon page would be two pages disputing one name, and whichever was written second would look like the correction of the first.',
      collidesWith: ['cinnamon'],
    },
    searchReview: [{ query: 'cinnamon', mustWin: 'Cinnamon' }],
    sourcesConsulted: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
    ],
    blockedReason:
      'The blocker is the scope of an existing page, not the evidence for this one. Wave 41 has to declare what Cinnamon covers before anything can be published beside it.',
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'ethiopian-mustard',
    wave: 'wave-39',
    outcome: 'BLOCKED_SCOPE',
    scope: {
      granularity: 'UNRESOLVED',
      statement:
        'Both authorities now accept Mutarda carinata, moving the species out of Brassica. The corpus holds a Mustard page whose scope is written around Brassica species, and it does not say what happens to a mustard that is no longer a Brassica. Publishing Ethiopian mustard would answer that question by accident rather than by decision.',
      collidesWith: ['mustard'],
    },
    searchReview: [{ query: 'mustard', mustWin: 'Mustard' }],
    sourcesConsulted: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
    ],
    blockedReason:
      'A recircumscription out of the genus the neighbouring page is built on. The Mustard page has to say whether it is about a genus or about a use before this one can sit beside it.',
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'japanese-plum',
    wave: 'wave-39',
    outcome: 'BLOCKED_SCOPE',
    scope: {
      granularity: 'UNRESOLVED',
      statement:
        "Prunus salicina is the species behind most of the fresh plums in world trade, and the corpus's Plum page is keyed to Prunus domestica without saying so to the reader. Publishing Japanese plum separately would leave the larger of the two crops on the page with the qualified name and the smaller on the page called Plum.",
      collidesWith: ['plum'],
    },
    searchReview: [{ query: 'plum', mustWin: 'Plum' }],
    sourcesConsulted: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
    ],
    blockedReason:
      'The scope problem is on the existing page. Plum must declare which species it covers before a second plum species is published.',
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'mandarin',
    wave: 'wave-39',
    outcome: 'BLOCKED_SCOPE',
    scope: {
      granularity: 'AMBIGUOUS',
      statement:
        'The identity resolves to Citrus × aurantium Mandarin Group. So do several other things the corpus publishes separately, because the citrus hybrid complex places orange, grapefruit and the mandarins inside overlapping circumscriptions of one hybrid name. The foreign key resolves; that is not the same as the relationship being exact, and mandarin is the case where the difference decides whether the page can be written at all.',
      collidesWith: ['orange', 'grapefruit', 'pomelo', 'lime', 'lemon'],
    },
    searchReview: [
      { query: 'orange', mustWin: 'Orange' },
      { query: 'pomelo', mustWin: 'Pomelo' },
    ],
    sourcesConsulted: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
    ],
    blockedReason:
      'Citrus scope is a concept problem across five published pages, not a decision about one crop. It belongs to Wave 41.',
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'miscanthus',
    wave: 'wave-39',
    outcome: 'BLOCKED_SCOPE',
    scope: {
      granularity: 'UNRESOLVED',
      statement:
        'The identity is keyed to a hybrid, Miscanthus × longiberbis, but the crop planted for biomass is Miscanthus × giganteus, and what growers and policy documents call "miscanthus" is a genus-level crop concept covering several sterile hybrids. The page that should exist is a concept page, and the corpus has no record for it yet.',
    },
    searchReview: [{ query: 'switchgrass', mustWin: 'Switchgrass' }],
    sourcesConsulted: [
      'wfo-world-flora-online',
      'powo-plants-of-the-world-online',
    ],
    blockedReason:
      'The right page is a genus concept, not this taxon. Creating the concept is Wave 41 work; publishing this taxon first would put the concept behind a hybrid name almost nobody uses.',
    reviewedAt: '2026-09-02',
  },
];

export const PUBLICATION_BY_SLUG = new Map(
  CROP_PUBLICATION_REVIEWS.map((r) => [r.slug, r]),
);
