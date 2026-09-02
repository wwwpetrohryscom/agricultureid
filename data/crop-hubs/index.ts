/**
 * The hubs that were judged worth publishing, and the candidates that were not.
 *
 * 74 families, 213 genera and 16 crop groups were evaluated. Ten hubs exist.
 * The rest are recorded in HUB_REFUSALS with the reason, because a decision not
 * to create 287 pages is the substance of this wave and a decision nobody wrote
 * down cannot be told apart from an oversight.
 *
 * The standard every section here had to meet: it must say something true of
 * the GROUP. It is very easy to take a property of the largest member and write
 * it as a property of the family — "Poaceae crops generally…" when the sentence
 * is really about wheat — and a hub full of those is worse than no hub, because
 * it looks like knowledge.
 */
import type { CropHub, HubRefusal } from '@/types/crop-hubs';

export const CROP_HUBS: readonly CropHub[] = [
  /* ---- agricultural crop groups ------------------------------------------ */
  {
    slug: 'cereals',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Cereals',
    memberKey: 'cereals',
    definition:
      'Grasses grown for their starchy grain. An agricultural grouping rather than a taxon: every cereal here is a member of the grass family, but the family also contains sugarcane and the forage grasses, which are not cereals.',
    sections: [
      {
        heading: 'What the grain is',
        body: 'A cereal grain is a caryopsis — a one-seeded dry fruit in which the seed coat is fused to the fruit wall — so what is threshed out is botanically a fruit rather than a seed. That is why the whole grain carries bran, germ and endosperm as distinct fractions, and why milling is a separation problem rather than a grinding one.',
      },
      {
        heading: 'Hulled and free-threshing',
        body: 'The single most consequential division within the group is whether the glumes come away at threshing. Free-threshing cereals give clean grain from the combine; hulled cereals — spelt, emmer, einkorn, most of the small millets, and barley for some uses — need a dehulling step before milling, which is an extra machine and an extra loss. A hulled cereal and a free-threshing one are not interchangeable in a supply chain even when they are the same species.',
      },
      {
        heading: 'C3 and C4 within one group',
        body: 'The temperate cereals are C3 and the tropical ones — maize, sorghum, the millets — are C4. That divides the group by water-use efficiency and by response to temperature more sharply than any agronomic convention does, and it is why cereal advice rarely transfers between the two halves.',
      },
      {
        heading: 'Storage is where the crop is kept or lost',
        body: 'Grain is harvested alive and respiring, and the whole post-harvest system exists to bring it below the moisture at which moulds and insects can work. That is common to the group in a way that field agronomy is not: the same drying, aeration and hermetic principles apply from wheat to finger millet, and the differences are of scale rather than of kind.',
      },
      {
        heading: 'Quality is defined by the end use, not by the crop',
        body: 'Cereal quality is specified against a process. Wheat is bought on protein and gluten for baking, durum on vitreousness for semolina, barley on protein for malting or feed, rice on head-rice yield after milling. A grower is aiming at a specification before they are aiming at a yield, and missing it moves the crop into a different market rather than reducing its price.',
      },
    ],
    contrasts: [
      'Pseudocereals — buckwheat, quinoa, amaranth — are used like cereals and are not grasses. They are held separately because their seed structure, milling behaviour and protein composition differ.',
      'Forage grasses are the same family grown for vegetative biomass rather than grain, which inverts almost every management decision.',
    ],
    sourceIds: ['fao', 'faostat', 'cimmyt', 'irri'],
    limitations: [
      'The C3/C4 division describes photosynthetic pathway, not drought tolerance directly; individual crops vary widely within each half.',
      'Quality specifications are set by national grading systems and individual contracts and are not reproduced here.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'pulses',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Pulses and grain legumes',
    memberKey: 'pulses',
    definition:
      'Legumes harvested for their dry seed. The agricultural grouping is narrower than the botanical family and narrower than "legume": soybean and groundnut are legumes grown chiefly for oil, and FAO counts them separately from pulses for that reason.',
    sections: [
      {
        heading: 'The nitrogen is the point, and it is conditional',
        body: 'Pulses fix atmospheric nitrogen in symbiosis with rhizobia, meeting their own requirement and leaving a residue for the following crop. The symbiosis is specific: the rhizobia that nodulate one genus frequently will not nodulate another, which is why inoculant is sold by crop and why a first-time pulse on a field can fail nutritionally while looking agronomically fine.',
      },
      {
        heading: 'Applied nitrogen works against the crop',
        body: 'Nitrogen fertiliser suppresses fixation. A pulse given nitrogen grows on the fertiliser instead of nodulating, which costs money and removes the rotational benefit that was the reason for growing it. This is a group-level fact and one of the few places where the standard cereal instinct is actively wrong.',
      },
      {
        heading: 'A break crop before it is a cash crop',
        body: 'In cereal-dominated rotations pulses are grown as much for what they interrupt as for what they yield: they break cereal root-disease cycles, allow different herbicide chemistry, and spread workload. That is why pulse area often tracks cereal disease pressure rather than pulse price.',
      },
      {
        heading: 'Harvest is the group’s recurring difficulty',
        body: 'Many pulses set pods low, mature unevenly, and lodge once carrying seed, so cutting height and timing are tighter than for cereals and losses at harvest are a larger share of yield. Level, stone-free ground matters here in a way it does not for a crop harvested a metre off the ground.',
      },
      {
        heading: 'Antinutrients and processing',
        body: 'Several pulses carry compounds — lectins, protease inhibitors, glycosides — that make the raw seed unsuitable for food or feed, and traditional preparation methods exist because of them. Soaking, cooking, germination and fermentation are not culinary preferences in this group; they are the processing step that makes the seed usable.',
      },
    ],
    contrasts: [
      'Oilseeds include legumes grown for oil rather than for the dry seed. Soybean and groundnut sit there rather than here, following FAO practice.',
      'Forage legumes are the same family grown for herbage, and the nitrogen goes to a companion grass rather than to a following crop.',
    ],
    sourceIds: ['fao', 'faostat', 'cgiar', 'icar'],
    limitations: [
      'Rhizobial specificity is described in general terms; the appropriate inoculant is crop-specific and set by local recommendation.',
      'Nitrogen credits to a following crop vary with stand, management and how much residue is returned, and national guidance governs.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'oilseeds',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Oilseeds',
    memberKey: 'oilseeds',
    definition:
      'Crops grown for the oil stored in their seed. The grouping is defined by the end use and spans unrelated families — Brassicaceae, Asteraceae, Fabaceae, Pedaliaceae, Euphorbiaceae — which is why it explains nothing botanical and a great deal commercially.',
    sections: [
      {
        heading: 'Two products from one seed',
        body: 'Crushing an oilseed produces oil and meal, and both are sold. The meal is usually the larger fraction by weight and is a protein feed in its own right, so an oilseed crop is priced against two markets at once and a crusher’s margin sits between them. That is structurally different from a cereal, where there is one product.',
      },
      {
        heading: 'Fatty acid composition is the specification',
        body: 'What distinguishes one oilseed from another commercially is the fatty acid profile, not the oil percentage. High-oleic types are bred for frying stability, high-linolenic types for drying oils and paints, and castor for a hydroxy acid nothing else supplies. A buyer specifies composition, and a grower is contracted against it.',
      },
      {
        heading: 'Food and non-food are different crops in the same group',
        body: 'Several members are not food crops at all. Castor and jatropha are industrial feedstocks with toxic seed or meal, and treating them as edible oilseeds is a category error with a safety dimension. The grouping is about where the value is stored, not about what may be eaten.',
      },
      {
        heading: 'Small seeds, shallow sowing, uneven ripening',
        body: 'Most oilseeds are small-seeded relative to cereals and are sown shallow into a fine seedbed, and many are indeterminate enough that pods or capsules ripen in sequence. Shattering losses at harvest are consequently a defining problem of the group, and desiccation or swathing is common where the plant will not ripen evenly on its own.',
      },
      {
        heading: 'Oil is a store, and stores degrade',
        body: 'Seed oil oxidises, and the more unsaturated the profile the faster. Storage moisture and temperature therefore govern quality after harvest as much as the crop did before it, and free fatty acid rises in poorly stored seed long before anything is visible.',
      },
    ],
    contrasts: [
      'Pulses are legumes grown for the dry seed itself rather than for its oil, and their rotational value is nitrogen rather than a second product.',
      'Industrial crops overlap here: castor and jatropha appear in both because the grouping is by use and a crop can have two.',
    ],
    sourceIds: ['fao', 'faostat', 'usda-ars', 'cabi'],
    limitations: [
      'Fatty acid profiles vary with cultivar and growing environment; the distinctions here describe types, not consignments.',
      'Which oilseeds are counted as food or industrial differs by jurisdiction and by processing route.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'roots-and-tubers',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Roots and tubers',
    memberKey: 'roots-and-tubers',
    definition:
      'Crops grown for an underground storage organ. Botanically these are not one thing — potato is a stem tuber, cassava a storage root, taro a corm, yam a tuber of different origin again — and the grouping holds because of how they behave after harvest, not because of what they are.',
    sections: [
      {
        heading: 'Harvested alive, and still alive in store',
        body: 'A grain is dead and dry when it is harvested; a tuber is a living organ with a water content of two thirds or more, still respiring. Everything that distinguishes this group follows from that: it cannot be dried to safety, it loses weight continuously in store, and its storage life is measured in weeks or months rather than years.',
      },
      {
        heading: 'Curing is the step that decides losses',
        body: 'Lifting damages the surface, and the crop repairs it if given the conditions to. Curing — warm, humid, ventilated, for days — lays down suberised tissue over wounds and is the single highest-return post-harvest operation in the group. A crop that goes straight from field to store loses to rots that curing would have prevented.',
      },
      {
        heading: 'Propagated from the crop itself',
        body: 'Most of these crops are planted from tubers, setts or cuttings rather than from seed, so the planting material is part of the harvest and carries whatever diseases the last crop had. Seed degeneration — the progressive accumulation of virus through vegetative generations — is the group’s characteristic long-term problem, and formal seed systems exist to interrupt it.',
      },
      {
        heading: 'Bulk, water and distance',
        body: 'These crops move a lot of water per unit of food energy, which makes them expensive to transport and biases them towards local consumption or towards processing near the field. Cassava is the clearest case: the fresh root deteriorates within days of lifting, so processing is not a value-add decision but a necessity.',
      },
      {
        heading: 'Dormancy and sprouting',
        body: 'Storage organs have a dormant period and then sprout, and sprouting draws down the reserve the crop was stored for. Managing that is a temperature and, in some crops, a chemical question, and the length of natural dormancy varies enough between crops and cultivars to change how long a store can be held.',
      },
    ],
    contrasts: [
      'Cereals are stored dry and dead and keep for years; the two groups share almost no post-harvest practice.',
      'Sugar crops also store carbohydrate in bulk tissue, but are processed immediately rather than stored, which is the opposite arrangement.',
    ],
    sourceIds: ['fao', 'cgiar', 'cip', 'iita'],
    limitations: [
      'Curing conditions and dormancy periods are crop- and cultivar-specific; the group-level statements here describe the principle rather than a schedule.',
      'Storage life figures depend on cultivar, curing and store type and are not given.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'forage-and-pasture',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Forage and pasture crops',
    memberKey: 'forage-and-pasture',
    definition:
      'Crops grown to be eaten by livestock, either grazed in place or cut and conserved. The defining difference from every other group is that the harvest is repeated and partial: the crop is expected to regrow, and how it is harvested determines whether it does.',
    sections: [
      {
        heading: 'The yield is what the animal eats',
        body: 'Forage yield measured in the field is not the yield that matters. What reaches the animal is reduced by selection, trampling, field losses at cutting and losses in conservation, and a management change that raises standing biomass can lower utilised yield. This is the group’s central measurement problem and it has no counterpart in a crop sold by the tonne.',
      },
      {
        heading: 'Regrowth comes from somewhere specific',
        body: 'Every forage species regrows from a particular structure — tillers at the base in grasses, crown buds in alfalfa and red clover, stolons in white clover — and defoliation management is really management of that structure. Cutting or grazing below it removes the plant’s capacity to recover, which is why residual height matters more here than removal rate.',
      },
      {
        heading: 'Quality falls as the crop grows',
        body: 'Digestibility declines as a forage matures and stem replaces leaf, so yield and quality move in opposite directions and the harvest date is a choice between them. That trade-off is the group’s defining agronomic decision, and it is why forage is cut at a growth stage rather than at maturity.',
      },
      {
        heading: 'Grass and legume together',
        body: 'Sown swards commonly combine a grass and a legume, and the two interact: the legume fixes nitrogen the grass uses, while nitrogen fertiliser suppresses the legume both directly and by letting the grass shade it. The nitrogen decision and the legume decision are therefore a single decision.',
      },
      {
        heading: 'Conservation is a fermentation or a drying race',
        body: 'Forage kept for winter is either dried to hay or fermented as silage, and both are contests against the crop’s own biology. Silage needs sugar, exclusion of air and rapid consolidation; hay needs drying weather. Species differ in how well they suit each — a high-protein, low-sugar legume ferments poorly and a brittle-leaved one loses leaf in hay.',
      },
      {
        heading: 'Some hazards belong to the animal, not the plant',
        body: 'This is the only crop group where a plant compound is a management constraint because of what it does to the consumer: bloat on high-clover swards, ryegrass staggers from an endophyte, oestrogenic isoflavones in red clover, dicoumarol in spoiled sweet clover hay. None of these makes the crop unusable, and all of them change how it is fed.',
      },
    ],
    contrasts: [
      'Cover crops are grown for what they do to the soil and are usually not harvested at all; the same species appears in both groups when it is used both ways.',
      'Cereals cut whole for silage are being used as forage, which is a use rather than a change of group.',
    ],
    sourceIds: ['fao', 'ahdb', 'usda-ars', 'cabi'],
    limitations: [
      'Residual heights, cutting intervals and stocking rates are set by national guidance and by system; the principles here do not substitute for them.',
      'Livestock disorders associated with forages are described as categorical hazards, not as risks quantified for any system; veterinary guidance governs.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'fruit',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Fruit crops',
    memberKey: 'fruit',
    definition:
      'Crops grown for a fleshy edible fruit. Almost entirely perennial, almost entirely propagated vegetatively, and unified less by botany — the group spans a dozen families — than by the fact that the planting decision is made once and lived with for decades.',
    sections: [
      {
        heading: 'A planting is a long commitment',
        body: 'Most fruit crops take years to bear and then crop for decades, so cultivar, rootstock, spacing and training are settled before the first harvest and are expensive to change afterwards. A grower planting today is forecasting a market a long way out, and the mismatch between an orchard’s life and a market’s memory is the structural commercial risk of the whole group.',
      },
      {
        heading: 'Two plants in one: scion and rootstock',
        body: 'Grafting is the norm rather than the exception. The scion decides the fruit and the rootstock decides vigour, size, soil tolerance and often disease resistance, so a cultivar name describes only half the plant. Rootstock choice is frequently the more consequential decision and is the one made first, because it is constrained by the site.',
      },
      {
        heading: 'Pollination is an input',
        body: 'Many fruit crops are self-incompatible or set better with cross-pollination, so an orchard is planted with pollinisers and depends on insect activity during a short bloom. That makes weather at flowering, and the availability of pollinators, a yield determinant that no amount of subsequent management can recover.',
      },
      {
        heading: 'Ripening divides the group',
        body: 'Climacteric fruit continue to ripen after picking under the influence of ethylene; non-climacteric fruit do not, and must be harvested ripe. That single distinction determines whether a crop can be picked firm and shipped, whether controlled-atmosphere storage helps, and how far it can travel — and it cuts across families rather than following them.',
      },
      {
        heading: 'The crop is perishable from the moment it is picked',
        body: 'Fresh fruit is alive, respiring and losing water, and post-harvest life is measured in days for the softest members. Cooling promptly is the single highest-return operation, and most of the loss in this group happens between the field and the pack-house rather than in the field.',
      },
      {
        heading: 'Chilling, dormancy and where the crop can grow',
        body: 'Temperate fruit crops need a period of winter cold to break dormancy and flower evenly, and the requirement differs by species and cultivar. That is why a cultivar bred for one region fails in a warmer one without failing at anything a grower can see, and why chilling requirement rather than hardiness often sets the southern limit of a temperate fruit.',
      },
    ],
    contrasts: [
      'Nuts are also perennial tree crops but are harvested dry and stored for months, which puts them closer to a cereal than to fresh fruit in post-harvest terms.',
      'Fruiting vegetables — tomato, pepper, cucurbits — are botanically fruit and are grown as annuals, so almost none of this group’s agronomy applies to them.',
    ],
    sourceIds: ['fao', 'faostat', 'cabi', 'uc-ipm'],
    limitations: [
      'Chilling requirements are cultivar-specific and are measured by several incompatible models; no figure is given here.',
      'Whether a given crop is climacteric can vary between cultivars in a few species, and the classification is a guide rather than a rule.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'vegetables',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    title: 'Vegetables',
    memberKey: 'vegetables',
    definition:
      'Crops grown for an edible vegetative part or an immature fruit, harvested fresh. The grouping is culinary rather than botanical — it contains roots, leaves, stems, flower buds, immature fruits and swollen bulbs — and what unites them is a short cycle and a harvest that must reach the consumer alive.',
    sections: [
      {
        heading: 'The harvested organ decides everything',
        body: 'A vegetable crop is defined by which organ is taken, and that determines the growth stage at harvest, the storage behaviour and the failure mode. A leaf crop is harvested before it flowers, a flower-bud crop within days of the buds tightening, a root crop after bulking is complete. The same species harvested at a different stage becomes a different crop.',
      },
      {
        heading: 'Bolting is the group’s characteristic failure',
        body: 'Most vegetables are harvested vegetatively, so flowering ends the marketable crop. Bolting is triggered by day length, by cold, or by stress depending on species, and it is why sowing dates in this group are so tightly specified — a crop sown two weeks early can run to seed before it is saleable, having grown perfectly well.',
      },
      {
        heading: 'Transplanting and the short season',
        body: 'Many vegetables are raised in modules and transplanted, which buys a few weeks of season, evens out the stand and allows several crops from one field in a year. It also makes transplant quality a determinant of the finished crop: a checked or root-bound transplant produces a smaller head or a bolted one, weeks later, for a reason no longer visible.',
      },
      {
        heading: 'Water is not for yield alone',
        body: 'In vegetables, water supply governs quality as directly as it governs size. Irregular supply splits roots and fruit, causes tipburn in leafy crops and hollow heart in others, and produces the calcium-related disorders that appear as blossom-end rot. A crop can be adequately watered on average and still be unmarketable.',
      },
      {
        heading: 'Harvested at the point of maximum perishability',
        body: 'Unlike a grain or a tuber, a vegetable is taken at a moment when it is metabolically active and has no protective structure. Field heat removed within hours is worth more than anything done later, and much of the loss in this group occurs before the crop leaves the farm.',
      },
      {
        heading: 'Grown in tight rotations, and paying for it',
        body: 'Intensive vegetable systems return to the same field often, and the soil-borne diseases — clubroot, Sclerotinia, Verticillium, root-knot nematode — accumulate accordingly. Rotation in this group is planned around pathogen persistence rather than around nutrition, and the constraint is measured in years out of a crop family rather than in seasons.',
      },
    ],
    contrasts: [
      'Roots and tubers overlap here in the harvested organ and are held separately because their post-harvest behaviour — curing, dormancy, months of storage — is a different discipline.',
      'Spices and herbs are also harvested from vegetative parts, but are dried and traded as low-moisture products rather than sold fresh.',
    ],
    sourceIds: ['fao', 'faostat', 'cabi', 'ahdb'],
    limitations: [
      'Sowing windows and bolting risk are set by cultivar and by local day length and temperature; the group-level statement does not substitute for a local calendar.',
      'Physiological disorders are described by mechanism, not by threshold; local guidance governs.',
    ],
    reviewedAt: '2026-09-02',
  },
  /* ---- botanical families ------------------------------------------------- */
  {
    slug: 'poaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    title: 'Poaceae — the grass family',
    memberKey: 'Poaceae',
    definition:
      'The grass family. It supplies more human food energy than any other plant family, and it does so through crops as unlike each other as rice, sugarcane and perennial ryegrass — so the family explains structure and physiology rather than agronomy.',
    sections: [
      {
        heading: 'The growing point stays low',
        body: 'Grasses grow from intercalary meristems at the base of the leaf and at the nodes rather than from an apex held aloft. That is why grasses tolerate being grazed and mown when other plants do not, and it is the single structural fact that makes pasture, lawn and cereal straw all possible from one family.',
      },
      {
        heading: 'Tillering',
        body: 'A grass plant is a colony of tillers, each capable of producing its own roots and its own head. Plant population is therefore only loosely under the grower’s control: a thin stand compensates by tillering and a thick one self-thins, which is why grass crops are far more forgiving of establishment error than a crop that sets its final plant number at sowing.',
      },
      {
        heading: 'Wind pollination and its consequences',
        body: 'Most grasses are wind-pollinated, and many are strongly outcrossing. That makes isolation distance a real constraint in seed production, makes hybrid breeding attractive where sterility systems exist, and is why cross-pollination between a crop and a weedy relative is a live concern in this family more than in most.',
      },
      {
        heading: 'Both photosynthetic pathways',
        body: 'Poaceae contains both C3 and C4 crops, which is unusual for a single family and is why its members span such different climates. The C4 members — maize, sorghum, the millets, sugarcane — carry higher water-use efficiency and a higher temperature optimum, and the division cuts across the agricultural groupings rather than following them.',
      },
      {
        heading: 'The family’s shared pathogens',
        body: 'Rusts, smuts, ergot and the blotch diseases are grass pathogens rather than crop pathogens, and several move between cultivated and wild grasses. That is why a grass weed in or beside a cereal crop is a disease question as well as a competition question, and why rotation out of the family is a disease-management tool in its own right.',
      },
    ],
    contrasts: [
      'Cyperaceae — the sedges — look like grasses and are not; the corpus holds no sedge crops but the confusion matters for weed identification.',
      'The cereals group is a subset of this family defined by end use, and excludes the sugar and forage members.',
    ],
    sourceIds: ['fao', 'usda-plants', 'cabi', 'cimmyt'],
    limitations: [
      'Family-level statements describe tendencies with well-known exceptions; bamboo and several forage genera depart from them substantially.',
      'Pathogen host ranges are described in general terms and vary by pathotype and region.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'fabaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    title: 'Fabaceae — the legume family',
    memberKey: 'Fabaceae',
    definition:
      'The legume family, and the third largest family of flowering plants. Its agricultural significance rests on one biological capacity — symbiotic nitrogen fixation — expressed across crops as different as soybean, alfalfa and carob.',
    sections: [
      {
        heading: 'The nodule is a negotiated structure',
        body: 'Nitrogen fixation happens in root nodules that the plant builds in response to rhizobial signals, and the relationship is specific enough that the right bacterium for one legume genus will often not nodulate another. A legume in soil without its partner is a legume without nitrogen, which is why inoculant is sold by crop and why the first crop of a species on a field is the risky one.',
      },
      {
        heading: 'The pod',
        body: 'The family is defined by its fruit: a legume, a dry fruit splitting along two sutures. That structure is why so many members shatter at maturity, why harvest timing is tighter than for an indehiscent fruit, and why reduced dehiscence has been a selection target in every domesticated member.',
      },
      {
        heading: 'Chemical defence as a food-safety fact',
        body: 'Legume seeds are chemically defended to an extent that matters in the kitchen. Lectins, protease inhibitors, cyanogenic glycosides and alkaloids occur across the family, and traditional preparation — soaking, boiling, fermenting, debittering — exists because of them. A raw or undercooked legume is not merely less digestible in several members; it is unsafe.',
      },
      {
        heading: 'Three uses, one family',
        body: 'The family supplies pulses, oilseeds and forages, and the same species sometimes serves more than one — soybean is an oilseed and a forage, cowpea a pulse and a fodder, guar a vegetable and an industrial gum crop. Family membership therefore predicts biology well and end use hardly at all.',
      },
      {
        heading: 'Rotational value, and its limit',
        body: 'The residue a legume leaves is real and is the reason it appears in rotations, but it is a function of how much biomass stays on the field. A crop cut and carried away leaves far less than one grazed or incorporated, and a grain legume leaves less than a green manure — so "legumes fix nitrogen for the next crop" is true as a family statement and misleading as a planning figure.',
      },
    ],
    contrasts: [
      'The pulses group is the subset harvested for dry seed; legume oilseeds and forage legumes sit in other groups.',
      'Nitrogen fixation is not unique to this family, but no other family the corpus holds contributes it at scale.',
    ],
    sourceIds: ['fao', 'usda-plants', 'cabi', 'cgiar'],
    limitations: [
      'Not all Fabaceae nodulate; the capacity is widespread in the family and not universal.',
      'Antinutrient content varies enormously between species and cultivars, and processing requirements are crop-specific.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'solanaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    title: 'Solanaceae — the nightshade family',
    memberKey: 'Solanaceae',
    definition:
      'The nightshade family. It supplies potato, tomato, pepper, eggplant and tobacco — crops with almost nothing in common agronomically, which share a chemistry and a pathogen list that make them a genuine rotational unit.',
    sections: [
      {
        heading: 'Glycoalkaloids',
        body: 'The family characteristically produces steroidal glycoalkaloids, and their distribution within the plant is what makes these crops edible: they concentrate in leaves, stems and green tissue rather than in the ripe fruit or the mature tuber. Potato tubers greened by light exposure accumulate them, which is why storage in the dark is a food-safety practice and not a cosmetic one.',
      },
      {
        heading: 'One pathogen list, five crops',
        body: 'Late blight, bacterial wilt, Verticillium, root-knot nematode and several viruses move freely between the cultivated Solanaceae. That makes rotation within the family no rotation at all — following potato with tomato carries the inoculum forward — and it is the most practically useful thing the family tells a grower.',
      },
      {
        heading: 'Volunteers and weedy relatives',
        body: 'The family’s disease cycles persist outside the planted crop. Potato volunteers grow from tubers missed at harvest and carry late blight and viruses into the following season, and several weedy nightshades host the same pathogens on field margins and in the rotation crop itself. Controlling volunteers and related weeds is therefore part of the rotation rather than a tidiness measure, and a rotation that is nominally out of the family but full of volunteers is not a rotation at all.',
      },
      {
        heading: 'Warm-season crops in temperate systems',
        body: 'The cultivated members are frost-sensitive crops of tropical American origin grown far outside that range, which is why transplanting, protected cultivation and short-season cultivars feature so heavily in their agronomy. The family did not evolve for the seasons most of it is now grown in.',
      },
    ],
    contrasts: [
      'The vegetables group holds most of these crops, but potato sits in roots and tubers because its post-harvest behaviour is that of a storage organ.',
      'Peppers and eggplants are botanically berries and are handled as vegetables, which is a culinary convention rather than a botanical one.',
    ],
    sourceIds: ['fao', 'usda-plants', 'cabi', 'cip'],
    limitations: [
      'Glycoalkaloid content varies with cultivar, light exposure and storage; no threshold is given here and national limits govern.',
      'Pathogen host ranges vary by strain and region; the shared-inoculum point is a rotation principle, not a guarantee.',
    ],
    reviewedAt: '2026-09-02',
  },
  {
    slug: 'brassicaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    title: 'Brassicaceae — the cabbage family',
    memberKey: 'Brassicaceae',
    definition:
      'The cabbage family. It is the clearest case in the corpus of one species carrying many crops — cabbage, broccoli, cauliflower, kale, kohlrabi and Brussels sprouts are all Brassica oleracea — and of a family unified by a single class of compounds.',
    sections: [
      {
        heading: 'Glucosinolates and the mustard reaction',
        body: 'The family produces glucosinolates, which are inert until the tissue is damaged and an enzyme brings them together with their substrate. The pungency of mustard, horseradish, wasabi and rocket is that reaction, not a stored flavour — which is why these crops taste of nothing until cut, and why processing method changes the product more than cultivar does.',
      },
      {
        heading: 'One species, many vegetables',
        body: 'Brassica oleracea has been selected in different directions — terminal bud, flower head, stem, leaf, axillary buds — and each result is a cultivar group rather than a species. That is why they interbreed, why they share pests and diseases completely, and why rotating between them achieves nothing.',
      },
      {
        heading: 'Clubroot is the family’s rotational constraint',
        body: 'Clubroot persists in soil for many years as resting spores and infects across the family, so a field with a history of it constrains what can be grown for a long time. Raising soil pH suppresses it and does not eliminate it, and resistance is available but has been overcome by particular pathotypes — so the practical control is a long rotation out of the family.',
      },
      {
        heading: 'Biofumigation',
        body: 'The same glucosinolate chemistry is used deliberately: brassica cover crops are incorporated green so that the released isothiocyanates suppress soil organisms. The effect depends on macerating the tissue and incorporating it immediately, which is why biofumigation is a technique rather than simply a crop choice.',
      },
      {
        heading: 'Small seed, fast establishment, early bolting',
        body: 'The family’s seeds are small and germinate quickly, and many members bolt in response to cold followed by lengthening days. Vernalisation is therefore a risk in spring-sown crops and a requirement in biennial seed production, and it is the same mechanism in both cases.',
      },
    ],
    contrasts: [
      'Brassica napus appears as both oilseed rape and swede, and Brassica rapa as turnip, pak choi, Chinese cabbage and turnip rape — the family requires the cultivar-group model rather than the species one.',
      'The vegetables and oilseeds groups both draw heavily on this family, which is why neither grouping predicts what a brassica crop needs.',
    ],
    sourceIds: ['fao', 'usda-plants', 'cabi', 'ahdb'],
    limitations: [
      'Glucosinolate profiles differ markedly between species and cultivars and determine both flavour and biofumigation potential; none is quantified here.',
      'Clubroot resistance is pathotype-specific and its durability varies; local pathotype information governs.',
    ],
    reviewedAt: '2026-09-02',
  },
  /* ---- botanical genus ---------------------------------------------------- */
  {
    slug: 'brassica',
    kind: 'BOTANICAL_GENUS_HUB',
    title: 'Brassica — one genus, many crops',
    memberKey: 'Brassica',
    definition:
      'The genus in which a handful of species carry a disproportionate share of the world’s vegetables and one of its major oilseeds. It is published as a hub because the genus itself explains something: which crops can be crossed, which share pests, and why several unrelated-looking vegetables cannot be rotated against each other.',
    sections: [
      {
        heading: 'The triangle of U',
        body: 'The cultivated brassicas are related by a documented pattern: three diploid species — Brassica rapa, B. nigra and B. oleracea — and three amphidiploids formed by hybridisation between pairs of them, including B. napus and B. juncea. That relationship is why some crosses are possible and others are not, and why oilseed rape shares a genome with both turnip and cabbage.',
      },
      {
        heading: 'Why rotation between brassica vegetables does not work',
        body: 'Because so many of these crops are the same species or share a genome, they share their soil-borne pathogens completely. A rotation of cabbage, then cauliflower, then kale is a continuous brassica crop as far as clubroot is concerned, and the rotation that matters is the one out of the genus.',
      },
      {
        heading: 'The same species under different names',
        body: 'Brassica rapa is turnip, pak choi, Chinese cabbage and the turnip-rape oilseed; Brassica oleracea is six familiar vegetables; Brassica napus is oilseed rape and swede. A reader who knows only the common names has no way to see those relationships, and the practical consequences — shared disease, cross-pollination in seed crops, shared cultivar-group modelling — all follow from them.',
      },
      {
        heading: 'Seed production and isolation',
        body: 'Most cultivated brassicas are insect-pollinated and largely self-incompatible, so seed crops of different cultivars of the same species will cross freely. Isolation distances in this genus are consequently substantial, and a flowering brassica vegetable near a seed crop is a contamination source rather than a neighbour.',
      },
    ],
    contrasts: [
      'The Brassicaceae family hub covers the chemistry and the family-wide constraints; this hub covers what the genus specifically implies about crossing and rotation.',
      'Mustard is held in this corpus under a contested generic placement — one authority moves it to a nothogenus — which the identity layer records.',
    ],
    sourceIds: ['fao', 'usda-plants', 'cabi', 'ahdb'],
    limitations: [
      'Isolation distances are set by national seed regulation and certification schemes and are not given here.',
      'Generic circumscription in the Brassiceae is under active revision; the corpus records where the authorities differ.',
    ],
    reviewedAt: '2026-09-02',
  },
];

/**
 * Candidates evaluated and not published.
 *
 * 74 families and 213 genera were assessed. The great majority fall below the
 * membership floor: a family with one published crop is a page whose entire
 * content would be a link to that crop.
 */
export const HUB_REFUSALS: readonly HubRefusal[] = [
  {
    memberKey: 'Coffea',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'DUPLICATES_CONCEPT_PAGE',
    note: 'The coffee page is already a genus concept, declares its scope and lists its constituents. A Coffea genus hub would be the same page under a different URL.',
  },
  {
    memberKey: 'Citrus',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'DUPLICATES_CONCEPT_PAGE',
    note: 'Citrus hybrid ancestry is already carried by the concept layer, which resolves sweet orange, grapefruit and mandarin into Citrus × aurantium. A genus hub would restate it and risk contradicting it.',
  },
  {
    memberKey: 'Cucurbita',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'DUPLICATES_CONCEPT_PAGE',
    note: 'The pumpkin page is a declared genus concept covering five Cucurbita species.',
  },
  {
    memberKey: 'Dioscorea',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'DUPLICATES_CONCEPT_PAGE',
    note: 'The yam page is a declared species-complex concept over the cultivated Dioscorea.',
  },
  {
    memberKey: 'Prunus',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'A genuine candidate: five published crops, a shared rootstock and pest complex, and the stone-fruit replant story. Deferred rather than written, because the family and group hubs published here already carry the reader from crop to crop.',
  },
  {
    memberKey: 'Allium',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'Three published crops and four taxa, with real genus-level content in bulbing physiology and photoperiod response. Deferred.',
  },
  {
    memberKey: 'Vigna',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'Four published pulses and four taxa. The genus-level story — a set of warm-season pulses domesticated separately in Africa and Asia — is real but is largely told by the pulses group hub.',
  },
  {
    memberKey: 'Beta',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'NO_GROUP_LEVEL_CONTENT',
    note: 'Three published crops that are all Beta vulgaris cultivar groups. The relationship is already modelled at cultivar-group rank on the identities; a genus hub would have one species to describe.',
  },
  {
    memberKey: 'Solanum',
    kind: 'BOTANICAL_GENUS_HUB',
    reason: 'DUPLICATES_CONCEPT_PAGE',
    note: 'What a Solanum hub would say about shared pathogens and glycoalkaloids is what the Solanaceae family hub says, and the genus adds no further constraint the family does not.',
  },
  {
    memberKey: 'Rosaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'Eleven published crops across nine genera, and real family-level content — pome and stone fruit structure, grafting on rootstocks, the shared pest complex, fire blight across the pome genera. The strongest unwritten family candidate.',
  },
  {
    memberKey: 'Cucurbitaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'Five published crops and eleven taxa, with genuine family-level content in monoecy and pollination dependence, bitterness from cucurbitacins, and the shared virus and powdery mildew complex.',
  },
  {
    memberKey: 'Rutaceae',
    kind: 'BOTANICAL_FAMILY_HUB',
    reason: 'DUPLICATES_CONCEPT_PAGE',
    note: 'Every published member is a Citrus, and the family hub would be a citrus hub. The concept layer already carries citrus ancestry.',
  },
  {
    memberKey: 'sugar-crops',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    reason: 'BELOW_MEMBERSHIP_FLOOR',
    note: 'Two published crops and one taxon. Sugarcane and sugar beet share an end product and essentially no agronomy, so the group has little to say that the two crop pages do not.',
  },
  {
    memberKey: 'cover-crops',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'Two published crops but sixteen taxa, and real group-level content in termination timing, nitrogen scavenging versus fixing, and biofumigation. A good candidate whose members are mostly unwritten, which would make the hub a list of taxa.',
  },
  {
    memberKey: 'pseudocereals',
    kind: 'AGRICULTURAL_CROP_GROUP_HUB',
    reason: 'READY_BUT_DEFER_EDITORIAL',
    note: 'Three published crops and three taxa, which clears the floor, and there is real group-level content: seed structure, the absence of gluten-forming proteins, and a milling behaviour unlike a caryopsis. Deferred rather than refused — the first draft of this record said it was below the membership floor, which the validator disproved.',
  },
];
