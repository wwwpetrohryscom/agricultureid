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
    resolvesTo: { type: 'crop', slug: 'hausa-potato' },
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
    resolvesTo: { type: 'crop', slug: 'barnyard-millet' },
    note: 'Both authorities accept Echinochloa colona subsp. edulis.',
  },
  {
    name: 'Triticum spelta',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'spelt' },
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
    resolvesTo: { type: 'crop', slug: 'chayote' },
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
    resolvesTo: { type: 'crop', slug: 'wasabi' },
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
    resolvesTo: { type: 'crop', slug: 'brussels-sprouts' },
    note: 'Gemmifera Group of Brassica oleracea.',
  },
  {
    name: 'Brassica rapa subsp. pekinensis',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'chinese-cabbage' },
    note: 'Pekinensis Group of Brassica rapa.',
  },
  {
    name: 'Brassica rapa subsp. chinensis',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'pak-choi' },
    note: 'Chinensis Group of Brassica rapa.',
  },
  {
    name: 'Brassica rapa subsp. rapa',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'turnip' },
    note: 'Rapifera Group of Brassica rapa.',
  },
  {
    name: 'Brassica napus var. napobrassica',
    kind: 'use',
    resolvesTo: { type: 'crop', slug: 'swede' },
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
    resolvesTo: { type: 'crop', slug: 'welsh-onion' },
    note: 'An ambiguous common name applied both to Allium fistulosum and to immature Allium cepa. Kept as an alternative name on Welsh onion, which Wave 44 published as a page.',
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
    resolvesTo: { type: 'crop', slug: 'mandarin' },
    note: 'Both authorities resolve mandarin and clementine to Citrus × aurantium f. deliciosa. Published as the Mandarin Group.',
  },
  {
    name: 'Citrus clementina',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'mandarin' },
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
    resolvesTo: { type: 'crop', slug: 'mandarin' },
    note: 'A market name within the mandarin group.',
  },
  {
    name: 'satsuma',
    kind: 'cultivar',
    resolvesTo: { type: 'crop', slug: 'mandarin' },
    note: 'A cultivar group within mandarin, which the corpus publishes inside the Citrus × aurantium complex. Pointed at the orange page from Wave 29 until Wave 43, because mandarin had no page and orange was the nearest citrus that did — the note said mandarin the whole time.',
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
    resolvesTo: { type: 'crop', slug: 'tall-fescue' },
    note: 'Neither authority resolves it. Both accept Lolium arundinaceum after the Festuca–Lolium transfer.',
  },
  {
    name: 'Schedonorus arundinaceus',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'tall-fescue' },
    note: 'Not resolved by either authority; Lolium arundinaceum is accepted.',
  },
  {
    name: 'Pennisetum purpureum',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'napier-grass' },
    note: 'Both authorities accept Cenchrus purpureus.',
  },
  {
    name: 'Brachiaria brizantha',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'signal-grass' },
    note: 'Both authorities accept Urochloa brizantha.',
  },
  {
    name: 'Panicum maximum',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'guinea-grass' },
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
    resolvesTo: { type: 'crop', slug: 'daikon' },
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
    resolvesTo: { type: 'crop', slug: 'camelina' },
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
  /* ---- Wave 41: names that two published crops now answer to ---------------
   *
   * Waves 39 and 40 published thirty-one crops whose common names collide with
   * something already in the corpus. A collision is not a defect — "cocoyam"
   * really does name two crops in two genera on two continents — but a reader
   * who types one of these needs to be told that, and until now nothing did.
   */
  {
    name: 'cocoyam',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'taro' },
    note: 'Two crops in two genera: taro, Colocasia esculenta, and tannia, Xanthosoma sagittifolium, distinguished in West Africa as old and new cocoyam. Resolved to taro as the older and larger crop; the tannia page opens by explaining the distinction.',
  },
  {
    name: 'African eggplant',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'scarlet-eggplant' },
    note: 'Names both Solanum aethiopicum and Solanum macrocarpon, which are separate African domesticates with separate pages. Resolved to scarlet eggplant, which the literature names among the five most important vegetables of Central and West Africa; gboma eggplant is the other.',
  },
  {
    name: 'garden egg',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'scarlet-eggplant' },
    note: 'Used in West Africa for scarlet eggplant, for gboma eggplant and in places for Solanum melongena. Resolved to scarlet eggplant; the name cannot be assigned to a species from the name alone.',
  },
  {
    name: 'ryegrass',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'perennial-ryegrass' },
    note: 'Names both Lolium perenne and Lolium multiflorum, which have separate pages. Resolved to perennial ryegrass as the crop the rest of the corpus points at most; a reader who meant the annual should read Italian ryegrass.',
  },
  {
    name: 'red bean',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'adzuki-bean' },
    note: 'Names adzuki bean in East Asia, rice bean in parts of South Asia, and red kidney beans of Phaseolus vulgaris in Western markets. Resolved to adzuki bean, which is what the East Asian confectionery trade means by it.',
  },
  {
    name: 'horse bean',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'faba-bean' },
    note: 'Names faba bean in Europe and jack bean in parts of the tropics. Resolved to faba bean; the two are different genera and different crops.',
  },
  {
    name: 'Ceylon spinach',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'waterleaf' },
    note: 'Applied both to Talinum fruticosum and to Basella alba, which are unrelated. Resolved to waterleaf; Basella alba is held as a taxon and is the other sense.',
  },
  {
    name: 'Chinese pearl barley',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'jobs-tears' },
    note: 'A trade name for Coix lacryma-jobi. The plant is not a barley and is not closely related to one; pearled barley is a milled product of Hordeum vulgare.',
  },
  {
    name: 'yam bean',
    kind: 'ambiguous-common-name',
    resolvesTo: { type: 'crop', slug: 'jicama' },
    note: 'Names three cultivated Pachyrhizus species and, in West Africa, the unrelated Sphenostylis stenocarpa. Resolved to jicama, Pachyrhizus erosus, which is the one in international trade.',
  },
  {
    name: 'mesta',
    kind: 'market-class',
    resolvesTo: { type: 'crop', slug: 'kenaf' },
    note: 'A South Asian fibre trade class covering kenaf and roselle together. Resolved to kenaf; production reported as mesta cannot be attributed to either species alone.',
  },
  {
    name: 'Hibiscus cannabinus',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'kenaf' },
    note: 'Both authorities now accept Sabdariffa cannabina. The fibre trade, the research literature and the statistical record all still use the Hibiscus name.',
  },
  {
    name: 'Talinum triangulare',
    kind: 'synonym',
    resolvesTo: { type: 'crop', slug: 'waterleaf' },
    note: 'A synonym of Talinum fruticosum still in wide use in West African agricultural literature.',
  },

  /* ---- Wave 44 — names the FAO calendar uses that name more than one crop --
   *
   * Seven labels in the FAO Crop Calendar denote more than one plant this
   * corpus publishes, and each one is registered here rather than resolved,
   * because the register is what the calendar matcher reads instead of forming
   * its own opinion. Refusing an FAO label as ambiguous without an entry here
   * would be a judgement rather than a reading, and the orphan validator says
   * so.
   */
  {
    name: 'Bean',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Names Phaseolus, Vigna and Vicia crops in different parts of the FAO country set. The dataset carries broad bean, lima bean and dry common bean as separate labels, which is the source distinguishing them from this one.',
  },
  {
    name: 'Beans, harvested green',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Green beans in this country set are Phaseolus vulgaris, Phaseolus coccineus and immature cowpea pods depending on where the row comes from. The harvest form does not narrow which plant.',
  },
  {
    name: 'Bitter eggplant',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Solanum aethiopicum and Solanum macrocarpon are both grown in Senegal, both are bitter and both are published here. The corpus already registers "African eggplant" for the same pair.',
  },
  {
    name: 'Clover',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Red, white and berseem clover are published here and crimson and sweet clover are held as taxa. The dataset names red and white clover separately elsewhere, so the bare label is not either of them.',
  },
  {
    name: 'Cress',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Garden cress and watercress are both sold as cress and are grown in entirely different systems, one in a seedbed and one in flowing water. This corpus holds the first as a taxon and publishes the second.',
  },
  {
    name: 'Malanga cubaine',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Malanga names Xanthosoma in some Caribbean and Central African usage and Colocasia in others. Both are published here and the corpus already registers the same confusion under "cocoyam".',
  },
  {
    name: 'Vetch',
    kind: 'ambiguous-common-name',
    resolvesTo: null,
    note: 'Common vetch, hairy vetch and bitter vetch are all traded as vetch and the corpus holds the first two as taxa. The dataset carries hairy vetch separately, so the bare label is the source distinguishing something from it.',
  },

  /* ---- Wave 43 — the shared parent taxa -----------------------------------
   *
   * Six taxa in this corpus are the parent of two or more crop pages, and a
   * reader typing one of them was being sent to whichever child happened to
   * score highest: "Citrus × aurantium" returned Mandarin, one of three
   * coequal cultivar groups of it. Each name is entered here against the owner
   * the scope-ownership layer names, and the entries are checked against that
   * layer rather than typed from memory.
   *
   * Four resolve nowhere. Their scope is owned by a record and not a page, so
   * there is no destination that is not a child overstating itself. Recording
   * the name with no destination is the corpus saying it knows what the name
   * is and has nowhere honest to send it — which is what the four `null`
   * entries above this block are for as well.
   */
  {
    name: 'Citrus \u00d7 aurantium',
    kind: 'parent-taxon',
    resolvesTo: { type: 'crop', slug: 'citrus' },
    note: 'The hybrid whose Sweet Orange, Grapefruit and Mandarin Groups are three separate crop pages here. The citrus page exists to carry what the three share, so it is the one destination that does not present a child as the taxon.',
  },
  {
    name: 'Triticum turgidum',
    kind: 'parent-taxon',
    resolvesTo: { type: 'crop', slug: 'wheat' },
    note: 'Durum wheat and emmer are both Triticum turgidum. The wheat page owns the scope the two share; sending the name to either child would make the other invisible.',
  },
  {
    name: 'Brassica oleracea',
    kind: 'parent-taxon',
    resolvesTo: null,
    note: 'Six published crops are cultivar groups of this species and no page is about the species itself. Cabbage currently answers the query on its own field scores; that is a ranking outcome, not a statement by this corpus that cabbage is Brassica oleracea in the sense the reader means.',
  },
  {
    name: 'Brassica rapa',
    kind: 'parent-taxon',
    resolvesTo: null,
    note: 'Chinese cabbage, pak choi and turnip are published forms of this species and turnip rape is held as a taxon. The infraspecific classification is contested, which is the reason there is no species page to send the name to.',
  },
  {
    name: 'Beta vulgaris',
    kind: 'parent-taxon',
    resolvesTo: null,
    note: 'Sugar beet, beetroot and chard are all Beta vulgaris. No page is about the species, and each of the three is a different crop with different agronomy, so none of them can hold the name.',
  },
  {
    name: 'Capsicum annuum',
    kind: 'parent-taxon',
    resolvesTo: null,
    note: 'Sweet pepper and chili pepper are both Capsicum annuum, separated by pungency rather than by taxon. Neither can carry the species name without absorbing the other.',
  },
];

export const CROSSWALK_BY_NAME = new Map(
  NAME_CROSSWALK.map((c) => [c.name.toLowerCase(), c]),
);
