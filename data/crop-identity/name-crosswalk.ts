/**
 * Names that are not crop identities, and where the answer actually is.
 *
 * Waves 27–30 examined 432 candidates and refused 83 of them, each with a
 * stated reason, in a research ledger. The reasons were right. What the ledger
 * could not do is help anyone: "canola", "nectarine", "Pisum sativum" and
 * "Cavendish banana" are all things a reader types, none of them is a crop
 * identity here, and a refusal recorded in a JSON file answers nobody.
 *
 * This is the refusal turned into an answer. Every refused candidate resolves
 * to the page that holds what the reader was looking for — and where the honest
 * answer is that the corpus holds nothing, `resolvesTo` is null and says so.
 *
 * Twenty-three of these had no destination recorded at all. The ledger refused
 * the name and left the question of where to send someone unanswered; those
 * destinations were written here.
 *
 * The four deliberate nulls are worth stating plainly. Three are homonyms —
 * binomials that resolve, under a different author, to a different plant
 * entirely. Sending a reader who typed "Sorghum bicolor Kuntze" to the sorghum
 * page would confirm the mistake they arrived with. The fourth is Cannabis
 * indica, where the species question is genuinely contested and picking a side
 * would be asserting more than the authorities do.
 */
import type { NameCrosswalk } from '@/types/crop-concepts';

export const NAME_CROSSWALK: readonly NameCrosswalk[] = [
  {
    name: 'Triticum durum',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'durum-wheat' },
    note: 'Both authorities treat Triticum durum Desf. as a synonym of Triticum turgidum subsp. durum. Published under the accepted name.',
  },
  {
    name: 'Pennisetum glaucum',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'millet' },
    note: 'Both authorities accept Cenchrus americanus. The existing "millet" crop is pearl millet and now carries the accepted name.',
  },
  {
    name: 'Pisum sativum',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'pea' },
    note: 'Both authorities accept Lathyrus oleraceus.',
  },
  {
    name: 'Lens culinaris',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'lentil' },
    note: 'Both authorities accept Vicia lens.',
  },
  {
    name: 'Plectranthus rotundifolius',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'hausa-potato' },
    note: 'Both authorities accept Coleus rotundifolius.',
  },
  {
    name: 'Brassica carinata',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'ethiopian-mustard' },
    note: 'Both authorities accept Mutarda carinata after the Brassiceae recircumscription.',
  },
  {
    name: 'Echinochloa frumentacea',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'barnyard-millet' },
    note: 'Both authorities accept Echinochloa colona subsp. edulis.',
  },
  {
    name: 'Triticum spelta',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'spelt' },
    note: 'Both authorities accept Triticum aestivum subsp. spelta.',
  },
  {
    name: 'canola',
    kind: 'market-class',
    resolvesTo: { type: 'crop', slug: 'oilseed-rape' },
    note: 'A low-erucic-acid, low-glucosinolate quality specification for oilseed rape and turnip rape, not a taxon. A reader looking for canola wants the oilseed rape page.',
  },
  {
    name: 'peanut',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'groundnut' },
    note: 'An alternative common name for groundnut, Arachis hypogaea.',
  },
  {
    name: 'linseed',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'flax' },
    note: 'The oilseed use of flax, Linum usitatissimum. A use, not a taxon.',
  },
  {
    name: 'rapeseed',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'oilseed-rape' },
    note: 'An alternative common name for oilseed rape.',
  },
  {
    name: 'starch potato',
    kind: 'market-class',
    resolvesTo: { type: 'crop', slug: 'potato' },
    note: 'An end-use class of Solanum tuberosum, not a separate crop.',
  },
  {
    name: 'industrial cassava',
    kind: 'market-class',
    resolvesTo: { type: 'crop', slug: 'cassava' },
    note: 'An end-use context for Manihot esculenta, not a separate crop.',
  },
  {
    name: 'Dioscorea spp.',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'yam' },
    note: 'Several cultivated Dioscorea species; held as a species complex with five constituents verified separately.',
  },
  {
    name: 'Lupinus spp.',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'lupin' },
    note: 'A genus-level concept; four cultivated species held separately.',
  },
  {
    name: 'Sorghum bicolor Kuntze',
    kind: 'homonym',
    resolvesTo: null,
    note: 'A homonym resolving to Hyparrhenia dichroa, a different grass that is not cultivated as a cereal. Deliberately resolves nowhere: sending a reader to the sorghum page would confirm the error they arrived with.',
  },
  {
    name: 'Solanum tuberosum Poepp. ex Walp.',
    kind: 'homonym',
    resolvesTo: null,
    note: 'A homonym resolving to Solanum maglia, a wild Chilean species. Deliberately resolves nowhere.',
  },
  {
    name: 'Solanum tuberosum Bertero ex Walp.',
    kind: 'homonym',
    resolvesTo: null,
    note: 'A homonym resolving to Solanum etuberosum, which does not even bear tubers. Deliberately resolves nowhere.',
  },
  {
    name: 'Sechium edule',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'chayote' },
    note: 'Both authorities accept Sicyos edulis.',
  },
  {
    name: 'Cyphomandra betacea',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'tamarillo' },
    note: 'Both authorities accept Solanum betaceum.',
  },
  {
    name: 'Wasabia japonica',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'wasabi' },
    note: 'Both authorities accept Eutrema japonicum.',
  },
  {
    name: 'Valerianella locusta',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'corn-salad' },
    note: 'Plants of the World Online accepts Valeriana locusta; World Flora Online did not resolve the name.',
  },
  {
    name: 'Brassica oleracea var. italica',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'broccoli' },
    note: 'A cultivated form of Brassica oleracea. Published as the Italica Group, not as a species.',
  },
  {
    name: 'Brassica oleracea var. capitata',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'cabbage' },
    note: 'Capitata Group of Brassica oleracea.',
  },
  {
    name: 'Brassica oleracea var. botrytis',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'cauliflower' },
    note: 'Botrytis Group of Brassica oleracea. POWO resolves the name to Brassica cretica subsp. cretica.',
  },
  {
    name: 'Brassica oleracea var. acephala',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'kale' },
    note: 'Acephala Group of Brassica oleracea.',
  },
  {
    name: 'Brassica oleracea var. gongylodes',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'kohlrabi' },
    note: 'Gongylodes Group of Brassica oleracea.',
  },
  {
    name: 'Brassica oleracea var. gemmifera',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'brussels-sprouts' },
    note: 'Gemmifera Group of Brassica oleracea.',
  },
  {
    name: 'Brassica rapa subsp. pekinensis',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'chinese-cabbage' },
    note: 'Pekinensis Group of Brassica rapa.',
  },
  {
    name: 'Brassica rapa subsp. chinensis',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'pak-choi' },
    note: 'Chinensis Group of Brassica rapa.',
  },
  {
    name: 'Brassica rapa subsp. rapa',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'turnip' },
    note: 'Rapifera Group of Brassica rapa.',
  },
  {
    name: 'Brassica napus var. napobrassica',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'swede' },
    note: 'Napobrassica Group of Brassica napus — the same species as oilseed rape.',
  },
  {
    name: 'Zea mays var. saccharata',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'sweetcorn' },
    note: 'Saccharata Group of Zea mays. POWO resolves the name to Zea mays subsp. mays.',
  },
  {
    name: 'Apium graveolens var. rapaceum',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'celeriac' },
    note: 'Rapaceum Group of Apium graveolens.',
  },
  {
    name: 'Capsicum annuum (sweet)',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'sweet-pepper' },
    note: 'Grossum Group. Sweet and chilli peppers are the same species.',
  },
  {
    name: 'Capsicum annuum (hot)',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'chili-pepper' },
    note: 'Longum Group of Capsicum annuum. Hot and sweet peppers are the same species; the difference is pungency, which is a cultivar trait.',
  },
  {
    name: 'Beta vulgaris (table)',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'beetroot' },
    note: 'Conditiva Group of Beta vulgaris. Table beet, sugar beet, chard and fodder beet are all the same species.',
  },
  {
    name: 'Beta vulgaris (leaf)',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'swiss-chard' },
    note: 'Cicla Group of Beta vulgaris — the leaf form, grown for its blades and midribs rather than a swollen root.',
  },
  {
    name: 'Cucurbita pepo (courgette)',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'zucchini' },
    note: 'Zucchini Group of Cucurbita pepo, the same species as many pumpkins.',
  },
  {
    name: 'pumpkin',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'pumpkin' },
    note: 'Four cultivated Cucurbita species. Held as a genus concept with all four verified separately.',
  },
  {
    name: 'greenhouse tomato',
    kind: 'market-class',
    resolvesTo: { type: 'crop', slug: 'tomato' },
    note: 'Protected cultivation is a production context, not a taxon.',
  },
  {
    name: 'cherry tomato',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'tomato' },
    note: 'A fruit-size class within Solanum lycopersicum.',
  },
  {
    name: 'romaine lettuce',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'lettuce' },
    note: 'A cultivar group of Lactuca sativa; not modelled as a crop.',
  },
  {
    name: 'spring onion',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'welsh-onion' },
    note: 'An ambiguous common name applied both to Allium fistulosum and to immature Allium cepa. Kept as an alternative name on Welsh onion only.',
  },
  {
    name: 'Prunus dulcis',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'almond' },
    note: 'Neither authority resolves Prunus dulcis; both accept Prunus amygdalus. The corpus name was corrected.',
  },
  {
    name: 'Malus pumila',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'apple' },
    note: 'Both authorities accept Malus domestica.',
  },
  {
    name: 'Fortunella japonica',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'kumquat' },
    note: 'Both authorities accept Citrus japonica; Fortunella is sunk into Citrus.',
  },
  {
    name: 'Actinidia deliciosa',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'kiwifruit' },
    note: 'Both authorities accept Actinidia chinensis var. deliciosa.',
  },
  {
    name: 'Citrus sinensis',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'orange' },
    note: 'Both authorities resolve sweet orange to Citrus × aurantium f. aurantium — the same name as grapefruit. Published as the Sweet Orange Group of the hybrid species.',
  },
  {
    name: 'Citrus paradisi',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'grapefruit' },
    note: 'Resolves to the same Citrus × aurantium f. aurantium as sweet orange. Published as the Grapefruit Group.',
  },
  {
    name: 'Citrus deliciosa',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'mandarin' },
    note: 'Both authorities resolve mandarin and clementine to Citrus × aurantium f. deliciosa. Published as the Mandarin Group.',
  },
  {
    name: 'Citrus clementina',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'mandarin' },
    note: 'Resolves to the same taxon as Citrus deliciosa; not a separate crop.',
  },
  {
    name: 'Citrus latifolia',
    kind: 'unresolved-taxon',
    resolvesTo: { type: 'crop', slug: 'lime' },
    note: 'Persian lime. Only Plants of the World Online resolved it; not published as a separate crop in this wave.',
  },
  {
    name: 'banana',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'banana' },
    note: 'Commercial bananas are sterile clones of Musa acuminata × M. balbisiana parentage described by genome group. Held as a genus concept with both parents verified separately.',
  },
  {
    name: 'macadamia',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'macadamia' },
    note: 'Two cultivated species and their hybrids. Held as a genus concept with both species verified.',
  },
  {
    name: 'Rubus fruticosus',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'blackberry' },
    note: 'An aggregate, not a species; Rubus is apomictic and its microspecies contested. Held as a complex on a single authority.',
  },
  {
    name: 'Morus spp.',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'mulberry' },
    note: 'Grown as several species with different end uses; held as a genus concept with M. alba and M. nigra verified separately.',
  },
  {
    name: 'nectarine',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'peach' },
    note: 'A glabrous-skinned form of Prunus persica, not a separate taxon. Held as an alternative name on peach.',
  },
  {
    name: 'tangerine',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'mandarin' },
    note: 'A market name within the mandarin group.',
  },
  {
    name: 'satsuma',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'orange' },
    note: 'A cultivar group within mandarin, which the corpus publishes inside the Citrus × aurantium complex.',
  },
  {
    name: 'Cavendish banana',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'banana' },
    note: 'An AAA genome-group clone, not a taxon. A genome group cannot be published as a species.',
  },
  {
    name: 'cashew nut',
    kind: 'commodity',
    resolvesTo: { type: 'crop', slug: 'cashew' },
    note: 'The traded kernel of Anacardium occidentale. The crop is the tree.',
  },
  {
    name: 'peanut (as a nut)',
    kind: 'commodity',
    resolvesTo: { type: 'crop', slug: 'groundnut' },
    note: 'Groundnut is a legume; its culinary classification as a nut is not a botanical identity.',
  },
  {
    name: 'Festuca arundinacea',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'tall-fescue' },
    note: 'Neither authority resolves it. Both accept Lolium arundinaceum after the Festuca–Lolium transfer.',
  },
  {
    name: 'Schedonorus arundinaceus',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'tall-fescue' },
    note: 'Not resolved by either authority; Lolium arundinaceum is accepted.',
  },
  {
    name: 'Pennisetum purpureum',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'napier-grass' },
    note: 'Both authorities accept Cenchrus purpureus.',
  },
  {
    name: 'Brachiaria brizantha',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'signal-grass' },
    note: 'Both authorities accept Urochloa brizantha.',
  },
  {
    name: 'Panicum maximum',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'guinea-grass' },
    note: 'Both authorities accept Megathyrsus maximus.',
  },
  {
    name: 'Cinnamomum cassia',
    kind: 'synonym',
    resolvesTo: { type: 'crop-taxon', slug: 'cassia-cinnamon' },
    note: 'Not resolved by either authority; both accept Cinnamomum aromaticum.',
  },
  {
    name: 'Pima cotton',
    kind: 'cultivar',
    resolvesTo: { type: 'crop-taxon', slug: 'barbadense-cotton' },
    note: '"Pima cotton" is a published CULTIVAR in this corpus. The gate refused a crop identity carrying a cultivar name; the species is Gossypium barbadense and Pima is a cultivar group within it.',
  },
  {
    name: 'coffee',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'coffee' },
    note: 'Two commercial species, arabica and robusta, differing in ploidy, caffeine, disease resistance and altitude. Held as a genus concept with three species verified.',
  },
  {
    name: 'cotton',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'cotton' },
    note: 'Four domesticated Gossypium species. Held as a genus concept with all four verified; the page previously named only G. hirsutum.',
  },
  {
    name: 'jute',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'jute' },
    note: 'Two cultivated Corchorus species, both verified.',
  },
  {
    name: 'forage maize',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'maize' },
    note: 'A use of Zea mays, not a taxon. Recorded as an agricultural use on maize.',
  },
  {
    name: 'forage sorghum',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'sorghum' },
    note: 'A use of Sorghum bicolor, not a taxon.',
  },
  {
    name: 'tillage radish',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'daikon' },
    note: 'A cover-crop use of daikon. One identity carrying both uses rather than two records for one plant.',
  },
  {
    name: 'buckwheat as a cover crop',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'buckwheat' },
    note: 'Fagopyrum esculentum is already held; the cover-crop use is a use, not a second entity.',
  },
  {
    name: 'camelina as a cover crop',
    kind: 'use',
    resolvesTo: { type: 'crop-taxon', slug: 'camelina' },
    note: 'Already held from Wave 27 with the cover-crop use recorded.',
  },
  {
    name: 'Cannabis indica',
    kind: 'unresolved-taxon',
    resolvesTo: null,
    note: 'Treatment as a species separate from Cannabis sativa is contested and is not settled by the consulted authorities. The corpus deliberately holds nothing under this name rather than pick a side.',
  },
  {
    name: 'CBD hemp',
    kind: 'market-class',
    resolvesTo: { type: 'crop', slug: 'hemp' },
    note: 'A regulatory and end-use class of Cannabis sativa defined by a THC threshold, not a taxon.',
  },
  {
    name: 'Arabica',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'arabica-coffee' },
    note: 'A species name used as a trade term. Promoted to its own page in Wave 32.',
  },
  {
    name: 'Robusta',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'robusta-coffee' },
    note: 'A trade term for Coffea canephora. Promoted to its own page in Wave 32.',
  },
];

export const CROSSWALK_BY_NAME = new Map(
  NAME_CROSSWALK.map((c) => [c.name.toLowerCase(), c]),
);
