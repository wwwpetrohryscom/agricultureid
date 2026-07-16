import type { PestContent } from '@/types/content';

export const khapraBeetle: PestContent = {
  id: 'pest-khapra-beetle',
  slug: 'khapra-beetle',
  contentType: 'pest',
  title: 'Khapra Beetle',
  scientificName: 'Trogoderma granarium (Coleoptera: Dermestidae)',
  alternativeNames: ['Trogoderma granarium', 'Cabinet beetle'],
  category: 'Insect pest',
  subcategory: 'Quarantine-significant stored-product beetle',
  pestGroup: 'Insect — Coleoptera (Dermestidae)',
  summary:
    'The khapra beetle is regarded as one of the most serious stored-product pests worldwide and is a regulated quarantine pest in many jurisdictions. Its larvae tolerate dry conditions and can persist in crevices for long periods without food.',
  introduction: [
    {
      type: 'paragraph',
      text: 'The khapra beetle is widely regarded as one of the most serious insect pests of stored products in the world, and it is a regulated quarantine pest in many jurisdictions. The damaging stage is the larva; adults are short-lived, feed little or not at all, and do not fly. That combination — destructive larvae and immobile adults — shapes both how the species spreads and why it is treated so seriously in trade.',
    },
    {
      type: 'paragraph',
      text: 'Two biological traits explain its reputation. It thrives in hot, dry conditions that suppress many other storage insects, so drying grain does not deter it in the way it deters others. And its larvae can enter a prolonged dormant state (diapause), surviving in cracks, crevices, sacking, and the fabric of stores and containers for extended periods without food, then resuming development when conditions improve. Together these make established infestations exceptionally persistent and difficult to eliminate, and they make the species easy to move undetected in cargo and containers.',
    },
  ],
  keyFacts: [
    {
      label: 'Group',
      value: 'Insects, order Coleoptera, family Dermestidae',
    },
    {
      label: 'Damaging stage',
      value: 'Larva; adults are short-lived, feed little or not at all',
    },
    {
      label: 'Regulatory status',
      value:
        'A regulated quarantine pest in many jurisdictions; notifiable in some. Requirements are country-specific.',
    },
    {
      label: 'Key traits',
      value:
        'Tolerates hot, dry conditions; larvae can enter prolonged diapause and persist without food',
    },
    {
      label: 'Dispersal',
      value:
        'Adults do not fly — spread is through movement of infested commodities, containers, packaging, and equipment',
    },
    {
      label: 'Distinguishing feature',
      value:
        'Densely hairy (setose) larvae with a tuft of long tail setae; small oval mottled brown adults',
    },
    {
      label: 'Sign',
      value:
        'Accumulated cast larval skins and hairs, damaged germ ends, larvae in crevices',
    },
  ],
  sections: [
    {
      id: 'identification-and-biology',
      heading: 'Identification and biology',
      body: [
        {
          type: 'paragraph',
          text: 'Adults are small, oval, brownish beetles, often mottled or indistinctly patterned, and are unremarkable to look at. The larvae are the more recognisable stage: densely covered in hairs (setae), yellowish-brown, and bearing a tuft of long setae at the tail end. Larvae are strongly attracted to crevices and are frequently found not in the commodity itself but in cracks, seams, sacking, dunnage, and the structure of stores and containers.',
        },
        {
          type: 'paragraph',
          text: 'Trogoderma granarium belongs to a genus containing many similar species, some of which are widespread and of no quarantine concern. Distinguishing khapra beetle from its relatives is genuinely difficult and is not achievable from a general description; identification is a task for a specialist, and confirmation of a suspected find should always rest with a qualified identifier or the responsible authority rather than on appearance alone.',
        },
        {
          type: 'paragraph',
          text: 'Larvae feed externally on the kernel, characteristically attacking the germ first and then the endosperm. They are not internal developers in the manner of the grain weevils: they do not complete their development sealed inside a single kernel. They can nonetheless damage sound grain as well as broken material, which sets them apart from the purely secondary feeders such as the flour beetles. Under adverse conditions larvae may enter diapause and persist for long periods, and this dormancy is central to why the species is so notoriously persistent.',
        },
      ],
    },
    {
      id: 'damage-to-stored-commodities',
      heading: 'How it damages stored commodities',
      body: [
        {
          type: 'paragraph',
          text: 'Larval feeding causes direct loss of weight and quality, and because the germ is attacked first, grain intended for seed can lose viability early in an infestation. Heavy infestations can reduce a commodity substantially, and damage is often concentrated near the surface and around the edges of a bulk, though larvae penetrate deeper as populations grow.',
        },
        {
          type: 'paragraph',
          text: 'Contamination is a distinct and important part of the damage. Larvae moult repeatedly, and the cast skins and shed hairs accumulate in the commodity. This material is a recognised contaminant and the hairs are associated with irritation, so heavily infested product can be unacceptable for food or feed use on contamination grounds independent of the weight actually consumed.',
        },
        {
          type: 'paragraph',
          text: 'As with other storage insects, activity in a bulk generates heat and moisture, and the resulting hot spots can then favour storage moulds, adding a mould and quality problem to the insect one. Stored wheat, barley, rice, and groundnuts are commodities on which this species is particularly noted, and maize, sorghum, oilseeds, and pulses can also be attacked.',
        },
      ],
    },
    {
      id: 'quarantine-significance',
      heading: 'Quarantine significance',
      body: [
        {
          type: 'paragraph',
          text: 'The khapra beetle is a regulated quarantine pest in many countries and is listed by regional plant protection organisations. Where it is regulated, its presence — or a suspicion of it — can carry consequences for a consignment, a facility, or a trade route, and jurisdictions that regulate it commonly treat suspected finds as notifiable, meaning there is an obligation to report them to the responsible authority.',
        },
        {
          type: 'paragraph',
          text: 'The reasons for this status follow from the biology described above. Adults do not fly, so the species does not spread naturally across distance; it moves with goods — in commodities, containers, packaging, dunnage, and used equipment — which is exactly what international trade does at scale. Its tolerance of dry conditions means routine drying does not exclude it, and diapausing larvae hidden in crevices can survive long journeys and long gaps between cargoes. Eradication from an infested facility is correspondingly difficult.',
        },
        {
          type: 'paragraph',
          text: 'The specific legal requirements — which countries regulate the species, what is notifiable, what actions follow a detection, and what import conditions apply — are country-specific, change over time, and are matters for the relevant national plant protection organisation and current official sources. This page describes the pest, not the law: anyone who suspects a find, or who needs to know the requirements applying to a consignment or premises, should contact the responsible authority and rely on official guidance rather than on this or any general reference.',
        },
      ],
    },
    {
      id: 'detection-and-monitoring',
      heading: 'Detection and monitoring',
      body: [
        {
          type: 'paragraph',
          text: 'Detection is hard, and honestly so. Larvae shelter in cracks and crevices rather than remaining in the commodity, adults do not fly and so are not readily caught in the way flying beetles are, and diapausing larvae may be present without any visible activity at all. A commodity sample can look clean while larvae persist in the structure around it. Inspection must therefore address the fabric of a store or container — seams, cracks, ledges, sacking, dunnage, and equipment — and not the grain alone.',
        },
        {
          type: 'paragraph',
          text: 'Accumulations of cast skins and shed hairs are often the most telling sign, and can persist as evidence of infestation. Traps using pheromone and food-based lures are available for Trogoderma and are used in surveillance programmes, but they have real limits here: catch depends on larval and adult activity, dormant larvae are not caught, and the genus contains similar species, so a trap catch establishes that a Trogoderma is present rather than which one. Any suspected khapra beetle requires specialist identification and, in jurisdictions where it is regulated, notification to the responsible authority.',
        },
      ],
    },
    {
      id: 'management-principles',
      heading: 'Management principles',
      body: [
        {
          type: 'paragraph',
          text: 'Prevention and exclusion carry more weight for this species than for almost any other storage pest, because established infestations are so persistent and because the ordinary levers — drying, and to a degree cooling — are less effective against an insect adapted to hot, dry conditions and capable of dormancy.',
        },
        {
          type: 'list',
          items: [
            'Rigorous sanitation of empty stores, containers, vehicles, and equipment: residues in cracks, seams, sacking, and dunnage are the principal reservoir, and the crevice-dwelling habit means cleaning must be thorough rather than superficial',
            'Reject or segregate infested or suspect incoming lots rather than admitting them to a clean store, and treat used packaging, containers, and equipment as a potential route of entry',
            'Do not rely on drying alone: unlike most storage insects, this species tolerates dry conditions, and dry grain is not protected grain',
            'Cool the bulk and use sealed or hermetic storage where appropriate, as part of a wider programme rather than as a single measure',
            'Monitor the structure as well as the commodity, looking for cast skins and hairs, and use surveillance trapping where it is part of an established programme',
            'Report suspected finds to the responsible authority where the species is regulated, and have identification confirmed by a specialist',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Regulated pest: follow official guidance, not this page',
          text: 'Where the khapra beetle is regulated, detections and responses are governed by national regulation and by the responsible plant protection authority. Fumigants used against stored-product insects are acutely hazardous and strictly regulated: their use requires appropriately licensed or certified operators and must follow the product label and the applicable national regulation. AgricultureID does not provide fumigant or insecticide names, doses, rates, exposure times, or procedures, and nothing here is legal or regulatory advice.',
        },
      ],
    },
  ],
  hostCrops: [
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'barley' },
    { type: 'crop', slug: 'rice' },
    { type: 'crop', slug: 'groundnut' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'sorghum' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'stored-grain-insects' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
    { type: 'post-harvest', slug: 'grain-storage' },
    { type: 'post-harvest', slug: 'hermetic-storage' },
    { type: 'post-harvest', slug: 'grain-cleaning' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
  ],
  relatedTopics: [
    { type: 'pest', slug: 'rice-weevil' },
    { type: 'pest', slug: 'lesser-grain-borer' },
    { type: 'pest', slug: 'red-flour-beetle' },
    { type: 'pest', slug: 'sawtoothed-grain-beetle' },
  ],
  glossaryTerms: ['integrated-pest-management'],
  geographicScope:
    'Native to and established in parts of southern Asia, the Near East, and Africa, with occurrences elsewhere; absent or regulated in many countries. Distribution and regulatory status change over time and must be checked against current official sources.',
  climateContext:
    'Unusually well adapted to hot, dry conditions that suppress many other storage insects, so drying does not exclude it; larvae can also persist in dormancy through unfavourable periods.',
  limitations: [
    'This is a general reference overview of the species, not storage guidance for a specific commodity, facility, or jurisdiction, and it is not legal or regulatory advice.',
    'No development times, temperature or moisture thresholds, or population figures are given here, because meaningful values depend on the commodity, climate, storage duration, and applicable standard.',
    'Regulatory status, notification duties, and import requirements are country-specific and change over time; no list of regulating countries is given here, and current official sources and the responsible national plant protection organisation must be consulted.',
    'Trogoderma granarium cannot be reliably separated from related species without specialist examination; a trap catch or visual impression does not confirm the species, and suspected finds require expert identification.',
  ],
  sourceReferences: [
    {
      sourceId: 'eppo',
      citedFor: 'Quarantine listing and regional regulatory context',
    },
    { sourceId: 'eppo-gd', citedFor: 'Nomenclature, distribution, and hosts' },
    {
      sourceId: 'cabi',
      citedFor: 'Biology, hosts, damage, distribution, and pest significance',
    },
    {
      sourceId: 'usda-aphis',
      citedFor: 'Quarantine significance and regulatory context',
    },
    {
      sourceId: 'fao',
      citedFor: 'Post-harvest loss and grain storage context',
    },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Khapra Beetle (Trogoderma granarium)',
    description:
      'Khapra beetle explained: a quarantine-regulated stored-product pest whose larvae tolerate dry conditions, persist in diapause, and defeat routine detection.',
    keywords: [
      'khapra beetle',
      'Trogoderma granarium',
      'quarantine pest',
      'stored product pest',
      'diapause',
    ],
  },
  structuredData: { article: true },
};
