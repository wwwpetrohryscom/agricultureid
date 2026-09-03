/**
 * Wave 45 — every family of repeated crop-article text, classified.
 *
 * The configured floor is twenty words. Below that the corpus's own standing
 * language dominates and the brief is explicit that a wave should not be spent
 * rewriting benign twenty-word policy snippets.
 *
 * Two kinds of record live here. A record with `resolvedFrom` describes a
 * family this wave acted on and states what it measured before, which the
 * validator checks has fallen — a resolution that did not move a number is a
 * claim. A record without it describes a family that survives, and says why it
 * is allowed to.
 *
 * Fifteen of the surviving families are the same artefact: a registered
 * standing phrase sits between two short shared clauses, the detector strips
 * the registered text, and the halves become adjacent. Those are policy welds
 * rather than shared prose, and the validator recomputes that property rather
 * than believing the label.
 */
import type { ProseFamilyRecord } from '@/types/crop-prose-family';

export const PROSE_FAMILIES: readonly ProseFamilyRecord[] = [
  {
    id: 'production-statistics-caveat',
    text: '',
    classification: 'CORPUS_POLICY',
    heldAt: 'lib/crops/editorial-boilerplate.ts CROP_STATISTICS_CAVEAT',
    resolvedFrom: { runWords: 47, articles: 123 },
    rationale:
      "The largest family in the corpus and the reason the family map was built: a methodology caveat about where production and trade figures come from, in 123 of 257 crop articles, written in 90 distinct wordings across 156 sentences, and carrying the corpus's longest shared run at 47 words. It is case A of the brief's production-statistics audit — a true corpus-wide methodology disclaimer — so it was centralised rather than rewritten. The articles lost 156 sentences; the corpus gained one statement, rendered on every crop page including the 134 whose prose never mentioned it, which is where it was true all along.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'evapotranspiration-methodology',
    text: '',
    classification: 'CORPUS_POLICY',
    heldAt: 'lib/crops/editorial-boilerplate.ts CROP_ET_METHODOLOGY_CAVEAT',
    resolvedFrom: { runWords: 36, articles: 15 },
    rationale:
      'The same finding at smaller scale: how a crop water requirement is estimated is a statement about the quantity, not about any crop. Fifteen articles carried it in eight wordings, at a run of 36 words where two of them agreed. Centralised alongside the statistics caveat.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'orchard-irrigation-template',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 34, articles: 5 },
    rationale:
      "\"X is grown both rain-fed and under irrigation, with water demand highest during [organ]. Drip irrigation is widely used to apply water efficiently to the root zone.\" One sentence with the organ swapped, in apple, apricot, persimmon, hazelnut and walnut. Each of those crops has a different and more interesting irrigation problem — apple's cell division window, apricot's pit hardening, persimmon's late fruit drop, hazelnut's harvested orchard floor, walnut's Phytophthora risk — and each article now says its own.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'mediterranean-herb-drought',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 32, articles: 4 },
    rationale:
      "\"Tolerates drought well once established and requires only modest supplemental irrigation in most climates\" in lavender, rosemary, sage and thyme. True of all four and uninformative about any: rosemary's deep rooting, thyme's shallow rooting, sage's leaf hairs and lavender's oil-versus-biomass trade-off are the reasons behind the shared summary, and are what the four articles now carry.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'stone-fruit-frost',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 30, articles: 2 },
    rationale:
      'Peach and plum shared a spring-frost sentence word for word. Frost risk is real for both and is not the same story: peach is the crop most often caught in continental interiors and carries a coupled winter-cold risk, while for plum the exposure separates the Japanese and European species.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'cucurbit-rotation-bullet',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 30, articles: 2 },
    rationale:
      'Pumpkin and zucchini carried an identical rotation bullet. The rotation problem is not identical: a long-season storage pumpkin can hold a multi-year interval that a double-cropped summer squash routinely cannot.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'zingiber-identity-fact',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 30, articles: 2 },
    rationale:
      'Ginger and turmeric carried the same twenty-word growth-habit key fact. What distinguishes them agriculturally is that ginger is largely traded fresh while turmeric is boiled and dried before it becomes the spice, and that is what the two facts now say.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'rubus-market-list',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 29, articles: 2 },
    rationale:
      'Blackberry and raspberry shared a four-item market-outlet list verbatim. The outlets differ in ways that matter: the raspberry separates from its receptacle and the blackberry does not, which is why one travels better in a punnet and the other dominates the frozen trade.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'pulse-harvest-opener',
    text: '',
    classification: 'OVERGENERALIZED_PROSE',
    resolvedFrom: { runWords: 28, articles: 2 },
    rationale:
      '"X is harvested once pods and foliage have dried at maturity" opened both the chickpea and lentil harvest sections. Chickpea\'s real harvest issue is kabuli seed damage at threshing; lentil\'s is a crop that stands too low to cut standing.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'orchard-establishment-opener',
    text: '',
    classification: 'OVERGENERALIZED_PROSE',
    resolvedFrom: { runWords: 27, articles: 2 },
    rationale:
      '"Establishing a X orchard begins with selecting a rootstock and cultivar suited to the site" in pistachio and walnut, and "orchards are established from grafted trees combining a fruiting cultivar with a rootstock chosen for size control, anchorage, and site adaptation" in peach and plum. Both are true of every orchard crop in the corpus and therefore say nothing about these four. Replaced with what actually drives rootstock choice in each: salinity for pistachio, pollination layout for walnut, nematodes for peach, drainage for plum.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'nut-irrigation-scheduling',
    text: '',
    classification: 'COPIED_CROP_SPECIFIC_PROSE',
    resolvedFrom: { runWords: 25, articles: 2 },
    rationale:
      "Hazelnut and walnut shared an irrigation-scheduling sentence. The asymmetry is the point in hazelnut — a dry season costs kernel size, a wet one costs the planting — and it is not the same asymmetry as walnut's.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-cherry-plum-26',
    text: 'is now established across temperate regions on multiple continents trees require a period of winter chilling to break dormancy and flower normally the chilling requirement varies',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Both are Prunus stone fruit and both genuinely require winter chilling to break dormancy; the sentence says so in each article because it is true of each. Two crops that share a fact may state it, and rewriting one of them to differ would be distorting a fact to move a number.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-broccoli-potato-25',
    text: 'fertilizer rates timing and forms should follow local soil tests   has a relatively shallow root system and benefits from consistent soil moisture particularly during',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-cucumber-lettuce-25',
    text: 'requirements depend on soil or nutrient solution supply cultivar and production system fertilizer and nutrient solution programs should follow local soil tests water analysis  ',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-garlic-onion-25',
    text: 'depend on soil supply target yield and cultivar fertilizer rates timing and forms should follow local soil tests   because of its shallow root system',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two Allium bulb crops rotated away from other Alliums for the same soil-borne reasons and judged mature on the same signal. The shared run is that rotation clause plus the corpus control-measures qualifier. The measured run is welded: a registered standing phrase sits between the two shared clauses and the detector strips it, leaving the halves adjacent.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-blackberry-raspberry-24',
    text: 'increases the risk of root rot in the perennial root system raised beds or ridges are commonly used on heavier soils to improve drainage',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Rubus cane fruit share floricane and primocane management, drainage sensitivity and the nitrogen-versus-fruiting balance. Wave 45 rewrote the market-outlet list these two articles shared, which was copied; what is left is agronomy that is genuinely the same.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-common-bean-soybean-24',
    text: 'should be assessed with local soil survey data since both affect nodulation and disease risk in fields without a recent history of production seed',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two grain legumes whose nutrition programme depends on inoculation as well as on soil supply, grown both rain-fed and irrigated. The shared run is the inoculation clause plus the corpus fertiliser policy.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-garlic-onion-24',
    text: 'rotation away from other s field monitoring and where warranted locally authorized control measures applied according to their labels maturity is signaled by the',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two Allium bulb crops rotated away from other Alliums for the same soil-borne reasons and judged mature on the same signal. The shared run is that rotation clause plus the corpus control-measures qualifier.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-ginger-turmeric-24',
    text: 'any medicinal or health related claims associated with are outside the scope of this reference and are subject to separate regulatory requirements is grown',
    classification: 'CORPUS_POLICY',
    rationale:
      'The medicinal-claims disclaimer. It is the corpus stating what it does not cover and what falls under separate regulation, and it is shared because the policy is. Below the occurrence share that would make it a registered standing phrase, and identical in wording because a disclaimer that varies is a disclaimer that has been reasoned about twice.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-berseem-clover-sainfoin-23',
    text: 'applied nitrogen suppresses fixation and is not used on an established stand fertilizer rates timing and forms should follow local soil tests  ',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-cinnamon-clove-23',
    text: 'fertilizer rates timing and forms should follow local soil tests   is grown predominantly under rain fed conditions in consistently humid tropical regions',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-hazelnut-pistachio-23',
    text: 'anthracnose can affect leaves shoots and developing nuts under humid conditions root rot often linked to poorly drained or waterlogged sites can weaken',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two orchard nut crops with the same anthracnose and root-rot exposure and the same long-term nitrogen-and-potassium framing. Wave 45 rewrote the hazelnut irrigation sentence these shared with walnut; what is left is disease and nutrition that is genuinely common to both.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-hazelnut-pistachio-22',
    text: 'long term canopy and orchard floor management across many productive years nitrogen supports vegetative growth and nut development while potassium contributes to',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two orchard nut crops with the same anthracnose and root-rot exposure and the same long-term nitrogen-and-potassium framing. Wave 45 rewrote the hazelnut irrigation sentence these shared with walnut; what is left is disease and nutrition that is genuinely common to both.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-oats-wheat-22',
    text: 'pressure varies by region and season   varieties rotation monitoring and where justified locally authorized control products used according to their labels',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-cherry-peach-plum-21',
    text: 'regions on multiple continents trees require a period of winter chilling to break dormancy and flower normally the chilling requirement varies',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'The winter-chilling requirement across three Prunus stone fruits. It is true of all three and is the reason each is grown where it is; the cherry-plum pair carries the same statement and is recorded separately.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-barley-triticale-21',
    text: 'crop rotation to manage soil borne diseases and weeds seedbed preparation appropriate to the tillage system in use timely weed management',
    classification: 'OVERGENERALIZED_PROSE',
    rationale:
      '"Crop rotation to manage soil-borne diseases and weeds; seedbed preparation appropriate to the tillage system in use; timely weed management" is a list that would fit any small-grain cereal in this corpus. Left standing at twenty-one words rather than rewritten, and recorded so the next wave can find it.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-black-gram-mung-bean-21',
    text: 'root system taproot bearing nodules that host nitrogen fixing rhizobia is generally considered to have been domesticated in the indian subcontinent',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two Vigna pulses with the same rhizobial inoculation decision and the same whitefly-borne virus problem. The crops are closely related and managed together in the same systems; the shared statement is a consequence of that, not of copying.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-clove-nutmeg-21',
    text: 'is grown mainly by smallholder farmers in a small number of tropical producing regions often as part of diversified tree crop',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two tropical tree spices of the Moluccas grown by smallholders in diversified tree-crop plantings in a small number of producing regions. The production system is the same and the sentence describes it.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-cocoa-rubber-21',
    text: 'fertilizer rates timing and forms should follow local soil and leaf analysis   is grown predominantly under rain fed conditions in',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two tropical tree crops grown predominantly rain-fed by smallholders in diversified plantings, on leaf-and-soil analysis rather than a standard rate. The shared framing follows from the shared production system. The measured run is welded: a registered standing phrase sits between the two shared clauses and the detector strips it, leaving the halves adjacent.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-common-bean-soybean-21',
    text: 'and target yield fertilizer and inoculation programs should follow local soil tests   is grown both rain fed and under irrigation',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two grain legumes whose nutrition programme depends on inoculation as well as on soil supply, grown both rain-fed and irrigated. The shared run is the inoculation clause plus the corpus fertiliser policy. The measured run is welded: a registered standing phrase sits between the two shared clauses and the detector strips it, leaving the halves adjacent.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-faba-bean-lupin-21',
    text: 'is harvested by combine once pods and stems have dried and the seed has reached a moisture content suitable for storage',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Both are combined once pods and stems have dried to a storable seed moisture. The sentence is a harvest fact shared by grain legumes generally and stated in each article it applies to.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-lychee-persimmon-21',
    text: 'for its role in flowering and fruit set fertilizer rates timing and forms should follow local leaf and soil analysis  ',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-mustard-sweet-potato-21',
    text: 'yield fertilizer rates timing and forms should follow local soil tests   is grown both rain fed and under irrigation with',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-soybean-sunflower-21',
    text: 'dried to a moisture content suitable for combining and safe storage harvest timing balances yield and quality against the risk of',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Both are dried to a combining and storage moisture, and in both the harvest date trades yield against quality and shatter risk. The trade-off is the same because the physics is.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-cotton-mustard-sweet-potato-tobacco-triticale-20',
    text: 'fertilizer rates timing and forms should follow local soil tests   is grown both rain fed and under irrigation with',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-carrot-garlic-onion-spinach-20',
    text: 'requirements depend on soil supply target yield and cultivar fertilizer rates timing and forms should follow local soil tests  ',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-almond-walnut-20',
    text: 'long term orchard floor and canopy management across many productive years nitrogen supports vegetative growth and kernel development while potassium',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Nitrogen supporting vegetative growth and kernel development is the same statement about two nut crops managed on the same principle. It is short, it is true of both, and there is no version of it that is more specific without being less accurate.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-apple-pear-20',
    text: 'floor and canopy management across many productive years nitrogen influences vegetative vigor and must be balanced against excessive shoot growth',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Balancing nitrogen against excessive shoot growth is pome-fruit orchard management, shared because the two crops are managed alike in this respect and not because one article was copied from the other.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-apricot-hazelnut-20',
    text: 'performs best on deep well drained soils with good structure loams and sandy loams are generally favored the crop has',
    classification: 'OVERGENERALIZED_PROSE',
    rationale:
      '"Performs best on deep, well-drained soils with good structure; loams and sandy loams are generally favoured" is true of most of this corpus and tells a reader nothing about either crop. It is left standing at twenty words because rewriting it would be spending the wave on a sentence that costs nothing, and it is recorded so the next wave can find it.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-black-gram-mung-bean-20',
    text: 'rhizobial inoculation in fields where effective nodulation is uncertain effective nodulation supplies much of the crop s nitrogen requirement phosphorus',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two Vigna pulses with the same rhizobial inoculation decision and the same whitefly-borne virus problem. The crops are closely related and managed together in the same systems; the shared statement is a consequence of that, not of copying.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-black-gram-mung-bean-20-2',
    text: '  cultivars whitefly control to limit virus spread monitoring and where warranted locally authorized controls applied according to their labels',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two Vigna pulses with the same rhizobial inoculation decision and the same whitefly-borne virus problem. The crops are closely related and managed together in the same systems; the shared statement is a consequence of that, not of copying. The measured run is welded: a registered standing phrase sits between the two shared clauses and the detector strips it, leaving the halves adjacent.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-blackberry-raspberry-20',
    text: 'versus primocane types site drainage improvement where native soils are heavier or prone to waterlogging nitrogen supports cane growth but',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Rubus cane fruit share floricane and primocane management, drainage sensitivity and the nitrogen-versus-fruiting balance. Wave 45 rewrote the market-outlet list these two articles shared, which was copied; what is left is agronomy that is genuinely the same.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-blackberry-raspberry-20-2',
    text: 'to avoid excessive vegetative vigor at the expense of fruiting while potassium contributes to fruit size and quality across the',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Rubus cane fruit share floricane and primocane management, drainage sensitivity and the nitrogen-versus-fruiting balance. Wave 45 rewrote the market-outlet list these two articles shared, which was copied; what is left is agronomy that is genuinely the same.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-fonio-teff-20',
    text: 'and field sanitation with authorized controls used according to their labels where warranted is harvested once the grain has matured',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two very small-seeded African cereals harvested at grain maturity under the same field-sanitation approach. The shared run is mostly the corpus control-products qualifier plus a harvest clause true of both.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-lemon-lime-20',
    text: 'fertilizer rates timing and forms should follow local leaf and soil analysis   is grown both rain fed in humid',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      "The run is two short shared clauses with a registered standing phrase between them. The detector strips the registered text and the halves become adjacent, so a nine-word opener and an eight-word continuation measure as a twenty-five-word run. What is actually shared is the corpus's own fertiliser or control-product policy, plus the ordinary sentence each article uses to lead into it.",
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-oats-triticale-20',
    text: '  varieties rotation monitoring and where justified locally authorized control products used according to their labels grain is harvested by',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two small-grain cereals combined at maturity under the same integrated-management framing. The shared text is the corpus qualifier and a harvest clause. The measured run is welded: a registered standing phrase sits between the two shared clauses and the detector strips it, leaving the halves adjacent.',
    reviewedAt: '2026-09-03',
  },
  {
    id: 'family-oregano-sage-20',
    text: 'or dried and stripped from stems for storage fresh and dried leaves used widely as a culinary herb particularly in',
    classification: 'LEGITIMATE_SHARED_CAVEAT',
    rationale:
      'Two Lamiaceae culinary herbs cut, dried and stripped from the stem the same way, because that is how the leaf of both is prepared.',
    reviewedAt: '2026-09-03',
  },
];
