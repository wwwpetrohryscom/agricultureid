import type { PostHarvestContent } from '@/types/content';

export const woodenCrate: PostHarvestContent = {
  id: 'post-harvest-wooden-crate',
  slug: 'wooden-crate',
  contentType: 'post-harvest',
  title: 'Wooden Crate',
  postHarvestClass: 'handling',
  processStage: 'preparation',
  alternativeNames: [
    'Wooden box',
    'Field box',
    'Bushel box',
    'Wooden bin',
    'Timber crate',
  ],
  category: 'Post-harvest operation',
  subcategory: 'Packaging & handling systems',
  summary:
    'The wooden crate is strong, locally made from local material, and repairable with a hammer. It is also porous, splintery, and impossible to clean properly — which is why it persists at the field end of chains and has been pushed out of the retail end.',
  introduction: [
    {
      type: 'paragraph',
      text: 'A wooden crate is a box of sawn timber or thin veneer, nailed or stapled together, usually with gaps between the boards. It was the standard produce package for most of the history of organised produce trade and is still made in enormous numbers, particularly close to production. Its virtues are unusually well matched to that setting: timber is available almost everywhere, the crate can be built by a local workshop without industrial plant, it is stiff and strong for its cost, it does not care about humidity the way fibreboard does, and when it breaks it can be repaired with a nail rather than discarded.',
    },
    {
      type: 'paragraph',
      text: 'It has been displaced steadily at the market end of chains, and the reason is worth being precise about, because it is not that wood is weak. It is that wood is porous. A cellulose surface with an open grain absorbs juice and water, holds organic residue, and cannot be reliably cleaned or disinfected — so a crate that is reused, as wooden crates almost always are, accumulates a history it cannot be relieved of. In a trade that increasingly asks packaging to be either demonstrably clean or demonstrably new, that is a difficult position to defend.',
    },
  ],
  keyFacts: [
    {
      label: 'What it is',
      value:
        'A nailed or stapled box of sawn timber or veneer, usually with gapped boards',
    },
    {
      label: 'Main advantages',
      value:
        'Strong, humidity-indifferent, locally made, repairable, and low-cost near timber',
    },
    {
      label: 'Ventilation',
      value:
        'Excellent and free: the gaps between boards are open area at no cost in strength',
    },
    {
      label: 'Decisive weakness',
      value:
        'Porous grain absorbs juice and residue and cannot be reliably cleaned',
    },
    {
      label: 'Damage risk',
      value:
        'Splinters, protruding nails, and rough surfaces wound the produce',
    },
    {
      label: 'Cross-border constraint',
      value:
        'Solid-wood packaging in international trade faces plant-health treatment rules',
    },
    {
      label: 'Where it holds on',
      value:
        'Field bins, local markets, and heavy or robust commodities near the timber',
    },
  ],
  sections: [
    {
      id: 'ventilation-for-free',
      heading: 'The one thing it does better than anything else',
      body: [
        {
          type: 'paragraph',
          text: 'Every other package treats ventilation as a cost. A fibreboard carton has to sacrifice wall material to cut vents, weakening the structure that carries the stack; a plastic crate has vents designed into a mould, paid for in stiffness and in the crevices they create. A wooden crate is made of separate boards with gaps between them, so it is ventilated by construction. The open area comes free, it is distributed over the whole surface rather than concentrated in a few holes, and it costs nothing structurally because the strength lives in the frame and the corner posts, not in the panels.',
        },
        {
          type: 'paragraph',
          text: 'This is why wooden bins remain common for crops that respire hard and need air more than they need protection, and it is a genuine, permanent advantage rather than a legacy artefact. Timber is also stiff and dimensionally stable across the humidity range of a cold store — it takes up moisture, but it does not lose its structure the way board does, so a stack of wooden crates in a humid store behaves predictably in a way a stack of cartons does not.',
        },
      ],
    },
    {
      id: 'the-porosity-problem',
      heading: 'Porosity: the argument that ended the debate',
      body: [
        {
          type: 'paragraph',
          text: 'Wood is a porous, absorbent, organic material with an open grain, and it is used to carry produce that leaks. Juice from damaged fruit, soil, water, and plant sap all enter the surface rather than sitting on it, and once inside they are beyond the reach of a surface wash. The material cannot be disinfected with confidence, because the disinfectant sits on the outside of a substrate that has absorbed the contamination into its structure — and it cannot be heavily wetted for cleaning either, because saturated timber then has to be dried before reuse or it grows mould itself.',
        },
        {
          type: 'paragraph',
          text: 'Since wooden crates are almost always reused — that is their economic logic — this porosity is not a theoretical property but an accumulating one. A crate in its tenth season has held ten seasons of unknown loads. Rough and splintered surfaces, and the crevices around nails, add lodging sites that hold residue. The result is that wooden packaging is difficult to accommodate in a food-safety plan that asks for verified cleaning, and it is generally excluded where such plans govern.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Wood cannot be verified clean',
          text: "Porous, absorbent surfaces cannot be reliably cleaned or disinfected, and no inspection establishes that a reused wooden crate is free of contamination. Where food-hygiene regulation or a buyer's food-safety plan requires cleanable food-contact packaging, wooden crates generally do not satisfy it. This is a limitation of the material, not of the effort applied.",
        },
      ],
    },
    {
      id: 'the-produce-gets-hurt',
      heading: 'What the crate does to the produce',
      body: [
        {
          type: 'paragraph',
          text: "A wooden crate protects its contents well from the outside world and attacks them from the inside. Sawn timber has a rough surface, and rough surfaces abrade skin — a fruit vibrating against a board for a few hundred kilometres arrives scuffed. Splinters puncture. Nails and staples work loose over a crate's life and protrude, and a protruding fastener in a crate of soft fruit is a wound in every unit that touches it. These are the classic wooden-crate defects, and they are all wounds, which means they are all decay entry points as well as cosmetic downgrades.",
        },
        {
          type: 'paragraph',
          text: "The trade's answer has historically been to line the crate — paper, leaves, or film between the timber and the produce — which works, and which quietly concedes the point: the package needs a second package inside it to be fit to hold fruit. For robust commodities the abrasion is tolerable and the argument does not arise. For soft fruit it is decisive, and it is a large part of why soft produce moved to smoother packages.",
        },
        {
          type: 'paragraph',
          text: 'There is a weight cost too, and it compounds. A wooden crate is heavy relative to what it carries, so a greater share of the freight is spent moving the package. Where crates are returned empty, that weight is paid twice.',
        },
      ],
    },
    {
      id: 'the-border',
      heading: 'Wood carries pests, so borders treat it differently',
      body: [
        {
          type: 'paragraph',
          text: 'Solid-wood packaging occupies a special position in international trade that no other package shares, and it has nothing to do with the produce. Timber is a host material: bark beetles, wood-boring insects, and pathogens live in it, and wooden packaging has been a documented pathway for moving forest pests between continents. International plant-health arrangements therefore require solid-wood packaging used in international trade to be treated and marked, and consignments arriving without compliant packaging can be refused, treated at cost, or destroyed at the border regardless of the condition of the produce inside.',
        },
        {
          type: 'paragraph',
          text: "This is a real and underappreciated commercial exposure: a compliant load of fruit can be stopped because of the box. It also explains the geography of the wooden crate's survival. Domestically, where the plant-health rules do not bite, the crate remains sensible and cheap. Crossing a border, it acquires a compliance burden that fibreboard and plastic simply do not carry, and that alone pushes exporters towards other packaging. The specific treatment and marking requirements are set by the applicable international standard and by national plant-health authorities.",
        },
      ],
    },
  ],
  applicableCommodityClasses: ['fruit', 'vegetable', 'root-tuber'],
  applicableCommodities: [
    { type: 'commodity', slug: 'fresh-apples' },
    { type: 'commodity', slug: 'ware-potatoes' },
    { type: 'commodity', slug: 'head-cabbage' },
    { type: 'commodity', slug: 'fresh-oranges' },
    { type: 'commodity', slug: 'dry-bulb-onions' },
  ],
  measurableInputs: [
    'Timber type, board thickness, and fastener specification',
    'Internal surface roughness and the presence of protruding fasteners',
    'Whether the crate is lined, and with what',
    'Plant-health treatment and marking status, where the crate crosses a border',
    'Crate mass relative to the produce carried',
  ],
  measurableOutputs: [
    'Abrasion, puncture, and scuffing damage to the produce',
    'Ventilation open area achieved through the pack',
    'Crate service life and the number of repairs made',
    'Consignment rejections attributable to packaging plant-health compliance',
  ],
  qualityEffects: [
    'Ventilates the pack thoroughly by construction, without sacrificing structural material',
    'Holds shape and strength in humid cold storage, where fibreboard weakens',
    'Abrades and punctures produce on rough surfaces, splinters, and protruding fasteners',
    'Carries residues and contamination between uses in a surface that cannot be verified clean',
    'Adds substantial package weight relative to the produce, paid on both legs where returned',
  ],
  environmentalContext:
    'Timber is renewable, locally available in most producing regions, and biodegradable at end of life, and a crate that is repaired for many seasons has a low burden per trip. Against that, it is heavy to freight, its production may or may not draw on sustainably managed forests, and in international trade its plant-health treatment is an additional burden. Its greatest environmental strength is the one that is hardest to price: it is made near where it is used, from a material that grows there, by people who live there.',
  safetyLimitations: [
    "Porous wooden surfaces cannot be reliably cleaned or disinfected; where food-hygiene regulation or a buyer's food-safety plan requires cleanable food-contact packaging, wooden crates generally will not satisfy it.",
    'Solid-wood packaging in international trade is subject to plant-health treatment and marking requirements set by the applicable international standard and national plant-health authorities; non-compliant packaging can cause a consignment to be refused or destroyed.',
    "Splinters, protruding nails, and staples are a handling injury risk to workers as well as a source of produce damage; crate condition and withdrawal are matters for the operator's own risk assessment.",
    'No timber specification, treatment, marking, or cleaning method is given here; these are set by the applicable plant-health standard, food-contact regulation, and buyer requirement.',
  ],
  connections: [
    { type: 'crop', slug: 'apple' },
    { type: 'crop', slug: 'potato' },
    { type: 'crop', slug: 'cabbage' },
    { type: 'crop', slug: 'onion' },
  ],
  relatedTopics: [
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'post-harvest', slug: 'cold-storage' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Packaging containers in post-harvest handling, and plant-health treatment of wood packaging material',
    },
    {
      sourceId: 'eppo',
      citedFor: 'Wood packaging material as a pathway for plant pests',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Container-related mechanical damage in produce handling',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest container practice and pest pathway context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, and strongest close to production and to timber supply. Displaced from retail-facing and export chains by hygiene requirements and by plant-health rules on solid-wood packaging in international trade.',
  limitations: [
    'No timber specification, fastener, treatment, marking, or cleaning procedure is given here; these are set by plant-health standards, food-contact regulation, and buyer specification.',
    'Wooden crates cannot be verified clean. This is a property of porous material and is not remedied by more thorough washing.',
    'Plant-health requirements on solid-wood packaging apply to the packaging itself, independently of the produce, and can cause an otherwise compliant consignment to be refused.',
    'Suitability is strongly commodity-dependent: abrasion and puncture that are irrelevant for cabbage or potatoes are disqualifying for soft fruit.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wooden Crates: Free Ventilation, Porous Surfaces',
    description:
      'Why wooden crates ventilate better than any other package, and why porosity, splinters, and plant-health rules on wood packaging pushed them out of the trade.',
    keywords: [
      'wooden crate',
      'field box',
      'wood packaging plant health',
      'produce container hygiene',
      'crate abrasion',
    ],
  },
  structuredData: { article: true },
};
