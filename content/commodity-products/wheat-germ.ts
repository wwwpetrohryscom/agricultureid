import type { CommodityProductContent } from '@/types/content';

export const wheatGerm: CommodityProductContent = {
  id: 'commodity-product-wheat-germ',
  slug: 'wheat-germ',
  contentType: 'commodity-product',
  title: 'Wheat Germ',
  alternativeNames: ['Wheat embryo', 'Milled wheat germ', 'Germ flakes'],
  category: 'Milling co-product',
  subcategory: 'Cereal germ',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'wheat-grain' },
  producedBy: [{ type: 'processing-method', slug: 'roller-milling' }],
  summary:
    'Wheat germ is the embryo of the wheat kernel, separated during roller milling. It is taken out not because it is unwanted but because its oil shortens the keeping quality of flour — and once separated it has its own food and feed market.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Wheat germ is the small embryo at the base of the wheat kernel: the living part from which a new plant would grow. It makes up only a modest share of the grain, but it carries a concentration of oil and nutrients quite unlike the starchy endosperm that surrounds it. Roller milling separates it as a stream in its own right.',
    },
    {
      type: 'paragraph',
      text: 'The reason it is separated is worth stating plainly, because it is often misread as the mill discarding something valuable. Germ oil is unsaturated and prone to going rancid, so flour that retains germ keeps far less well than flour that does not. Removing it is a shelf-life decision about the flour, not a judgement about the germ — which is then sold into food and feed on its own merits.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of wheat milling' },
    { label: 'Made from', value: 'Wheat grain (Triticum aestivum)' },
    { label: 'Fraction of the kernel', value: 'Germ (embryo)' },
    {
      label: 'Why it is separated',
      value: 'Its oil shortens the keeping quality of the flour',
    },
    {
      label: 'Composition',
      value: 'Richer in oil and nutrients than the rest of the kernel',
    },
    { label: 'Principal uses', value: 'Food ingredient and animal feed' },
    {
      label: 'Companion streams',
      value: 'Flour (primary product) and bran (co-product)',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What wheat germ is',
      body: [
        {
          type: 'paragraph',
          text: 'The wheat kernel has three functional parts: the starchy endosperm that becomes flour, the bran layers that enclose it, and the germ. The germ is the embryo, set at one end of the kernel, and it is provisioned quite differently from the starch reserve beside it — where the endosperm is a store of starch and protein, the germ carries the oil, the enzymes, and the concentrated nutrients an emerging seedling would need. It is a small part of the grain holding a disproportionate share of what is nutritionally interesting in it.',
        },
        {
          type: 'paragraph',
          text: 'Roller milling separates it by exploiting how differently it behaves. Correctly conditioned germ is tough and oily and flattens rather than shatters when it passes between rolls, while the endosperm around it breaks away as friable fragments. A flake of germ and a chip of endosperm are then different enough in size, shape, and density for sifting and purification to part them. The germ recovered this way is characteristically flaky, which is why it is sometimes sold and described as germ flakes.',
        },
      ],
    },
    {
      id: 'why-it-is-separated',
      heading: 'Why milling takes it out',
      body: [
        {
          type: 'paragraph',
          text: 'Flour with germ in it does not keep as long as flour without. The germ’s oil is vulnerable to going rancid, and the kernel carries lipase — an enzyme that acts on that oil — right alongside it. In the intact grain the two are held apart and the arrangement is stable, which is why wheat can be stored for a long time. Milling breaks the kernel open and ends that separation, so the oil and the enzyme that degrades it are mixed together in the product. The result is a flour with a shorter usable life than a miller or a baker wants.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'A shelf-life decision, not a nutrition one',
          text: 'Germ is removed to protect the flour, not because the germ is unwanted. This is worth stating plainly, because the removal is often read as a deliberate stripping of nutrients from flour. The nutrients go with the germ, but keeping quality is what drives the separation — and wholemeal flour, which retains the germ, accepts a shorter life in exchange for keeping it.',
        },
        {
          type: 'paragraph',
          text: 'This also explains why germ is a co-product rather than a by-product. It is separated deliberately and by design, it is recovered as a distinct stream rather than blended away into mill feed, and it earns a price that forms part of what a mill makes from a tonne of wheat. A mill that simply wanted the germ gone could allow it into the lower-value blended streams; recovering it cleanly as germ is a choice made because the stream is worth something.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'Uses',
      body: [
        {
          type: 'paragraph',
          text: 'Germ goes to food and to feed. Its food use rests on the same concentration of oil and nutrients that made it a problem in flour: it is sold as a food ingredient in its own right and added back into breads, cereals, and other foods where its nutritional contribution is the point. It is also a raw material for wheat germ oil, which is extracted and used in food and in cosmetic applications. Where a food outlet is not available or not economic, germ is a feed ingredient, and the meal remaining after oil extraction is fed as well.',
        },
        {
          type: 'list',
          items: [
            'Food — sold as an ingredient and added to breads, breakfast cereals, and other foods',
            'Oil — extracted as wheat germ oil for food and cosmetic use',
            'Feed — whole germ, and the meal left after oil is extracted',
          ],
        },
        {
          type: 'paragraph',
          text: 'Germ intended for food is usually stabilised — most commonly by heat treatment that deactivates the lipase — because untreated germ has the keeping problem that got it separated from the flour in the first place, only more so, concentrated. Stabilisation is what turns a stream that must be moved on quickly into an ingredient that can sit on a shelf.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality, handling, and storage',
      body: [
        {
          type: 'paragraph',
          text: 'Germ is bought on how cleanly it was separated and on the condition of its oil. Adhering endosperm and bran dilute the stream and lower its value, so purity is a commercial attribute rather than a cosmetic one. Free fatty acid content is the other central measure, and it is a moving target rather than a fixed property: once the kernel is opened, lipase and oil are in contact, and germ held warm and damp degrades. The interval between the mill and stabilisation or extraction is therefore itself a quality variable.',
        },
        {
          type: 'paragraph',
          text: 'The handling follows from that. Unstabilised germ is not a stream to hold — it is kept cool and dry and moved on promptly rather than stored, while stabilised germ keeps far better and is packed and traded as a food ingredient. Germ is light and flaky and free-flowing, so bulk handling is straightforward, but its oil makes residues in conveying equipment a housekeeping matter. As with any fraction concentrated out of the kernel, whatever the incoming grain carried follows the stream, so the soundness and cleanliness of the wheat and the mill’s cleaning bear directly on the germ.',
        },
      ],
    },
  ],
  primaryUses: ['food', 'feed'],
  secondaryUses: ['oil'],
  majorQualityAttributes: [
    'Purity (adhering endosperm and bran)',
    'Oil content',
    'Free fatty acid content',
    'Adequacy of stabilisation',
    'Moisture content',
  ],
  processContext:
    'Separated from the endosperm during roller milling of wheat grain: conditioned germ flattens rather than shatters between the rolls, so sifting and purification can part the flakes from friable endosperm fragments.',
  storageContext:
    'Unstabilised germ is not a holding stream — kept cool and dry and moved promptly to stabilisation or extraction, because lipase acts on its oil once the kernel is opened. Stabilised germ keeps considerably better.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1104.30',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Germ of cereals, whole, rolled, flaked or ground. The subheading covers cereal germ generally, not wheat germ alone.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'wheat' },
    { type: 'commodity', slug: 'wheat-grain' },
    { type: 'post-harvest', slug: 'stored-grain-insects' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'wheat-flour' },
    { type: 'commodity-product', slug: 'wheat-bran' },
    { type: 'commodity-product', slug: 'maize-germ' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Wheat milling fractions and the food uses of cereal germ',
    },
    {
      sourceId: 'usda',
      citedFor: 'Wheat germ composition relative to the rest of the kernel',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Lipase activity and lipid stability in milled wheat fractions',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Milling streams and flour keeping quality context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Food-ingredient naming, feed-ingredient naming, and permitted uses are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a milling specification, stabilisation process, feed formulation, or food-standards statement.',
    'No oil-content, nutrient, free-fatty-acid, or recovery figures are given here — they vary with the wheat, the mill, and the separation achieved, and are process- and contract-specific.',
    'Stabilisation methods and their adequacy are summarised qualitatively; treatments and acceptance criteria are process- and contract-specific.',
    'Wheat germ oil and wheat germ meal are real downstream products but are not modelled as products of this page, which describes the germ itself.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Wheat Germ: Why Milling Takes the Embryo Out',
    description:
      'Wheat germ as a milling co-product: the oil-rich embryo separated to protect the flour’s keeping quality, its food and feed outlets, and why it must move on.',
    keywords: [
      'wheat germ',
      'wheat embryo',
      'germ separation',
      'flour keeping quality',
      'milling co-product',
    ],
  },
  structuredData: { article: true },
};
