import type { ProcessingMethodContent } from '@/types/content';

export const fruitDrying: ProcessingMethodContent = {
  id: 'processing-method-fruit-drying',
  slug: 'fruit-drying',
  contentType: 'processing-method',
  title: 'Fruit Drying',
  alternativeNames: ['Fruit dehydration', 'Raisin production', 'Grape drying'],
  category: 'Processing method',
  subcategory: 'Fruit preservation',
  processingClass: 'drying',
  processStage: 'primary-transformation',
  transformationBasis: 'physical',
  summary:
    'Fruit drying removes water until the fruit becomes a different product with its own name, market, and shelf life. Drying grapes does not give dry grapes — it gives raisins, which is precisely why this is a transformation rather than a conditioning step.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fruit drying removes most of the water from fresh fruit so that what remains will not spoil. Grapes laid out to dry lose the water that made them plump and perishable, and what is left is dense, sweet, leathery, and stable for months without refrigeration. The technique is ancient and the principle has not changed: take the water away and the microorganisms that would otherwise consume the fruit cannot grow.',
    },
    {
      type: 'paragraph',
      text: 'It is worth being precise about why this counts as processing rather than post-harvest handling. Drying grain is conditioning — dried wheat is still wheat grain, sold as wheat grain, priced as wheat grain. Dried grapes are raisins: a distinct product, with a distinct name, sold into a distinct market at a distinct price, and never substitutable for the fresh fruit. The water removal crosses a threshold where identity itself changes, and that is the line this entry sits on.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Drying — removal of water to the point of identity change',
    },
    { label: 'Stage', value: 'Primary transformation' },
    { label: 'Input', value: 'Table grapes' },
    { label: 'Primary output', value: 'Raisins' },
    {
      label: 'Governing principle',
      value:
        'Removing water lowers water activity until microbial growth cannot proceed',
    },
    {
      label: 'Why it is a transformation',
      value:
        'Dried grapes are raisins — a different product, not conditioned grapes',
    },
    {
      label: 'Defining constraint',
      value:
        'The fruit’s waxy skin resists the very water loss the process depends on',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is stability without a cold chain. Fresh grapes are perishable and must be kept cold, moved quickly, and sold within a limited window. Raisins need none of that: they sit at ambient temperature in a warehouse, ship without refrigeration, and keep across seasons. Drying converts a crop with a narrow, cold-dependent marketing window into one that can be held and traded at will, which is a far more fundamental change than simply making the fruit smaller.',
        },
        {
          type: 'paragraph',
          text: 'The principle rests on water activity rather than water content, and the distinction matters. What limits microbial growth is not how much water is present but how much of it is available — free to participate in reactions and support growth. As fruit dries, the remaining water becomes increasingly bound to the concentrated sugars around it, so availability falls faster than mass does. Drying is therefore best understood as making water unavailable rather than merely removing it, and it is why a raisin can still contain water and remain stable.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'The skin resists the process',
          text: 'A grape’s waxy cuticle exists to stop it losing water — exactly what drying is trying to achieve. Producers therefore commonly pre-treat the fruit to make the skin more permeable, or accept a much longer drying time. The barrier that protects the fruit in the vineyard works against the processor.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Drying yields a single product stream. Nothing is separated out for a second market: the only other thing leaving is the water, as vapour, and it is not a product. This makes fruit drying structurally simpler than pressing or milling, where the point of the operation is to split one material into several.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Raisins',
              description:
                'The primary product: dried grapes, specified on moisture, colour, size, and freedom from defects and foreign matter. A storable, shelf-stable commodity traded internationally and sold both directly and as a food ingredient.',
            },
          ],
        },
        {
          type: 'paragraph',
          text: 'The character of the finished raisin depends heavily on how the drying was carried out and on the cultivar dried. Sun-dried fruit darkens markedly as it lies exposed; fruit dried under shade or in controlled air, or treated beforehand to inhibit browning, retains far more of its original colour. These are recognised distinct styles commanding distinct prices, not grades of success at the same task.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'Drying concentrates whatever it is given. Sugars, acids, and flavour intensify as water leaves — but so do defects, and any mould, damage, or contamination present in the fruit is concentrated rather than removed. The process has no mechanism for improving fruit, and a raisin cannot be better than the grape it came from.',
        },
        {
          type: 'paragraph',
          text: 'Browning is the characteristic change. It proceeds both enzymatically, where cut or damaged tissue meets air, and non-enzymatically between the concentrating sugars and amino acids, accelerated by heat and time. Neither reverses. The other characteristic risk runs the opposite way from spoilage-by-wetness: drying fruit that is not dried far enough, or that reabsorbs moisture in storage, remains capable of supporting mould. In a humid climate an incompletely dried lot can spoil in the warehouse, which is why drying and storage conditions are a single continuous problem rather than two.',
        },
        {
          type: 'list',
          items: [
            'Enzymatic and non-enzymatic browning, both irreversible, altering colour',
            'Mould growth on fruit that is dried too slowly or held before drying, particularly in humid conditions',
            'Moisture reabsorption during storage, restoring the conditions for spoilage',
            'Physical losses in open-air drying — to rain, birds, insects, and wind-blown soil',
            'Fruit shattering, sticking, and handling losses at collection and cleaning',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Drying is not sterilisation',
          text: 'Removing water stops microorganisms growing; it does not eliminate them, and moulds present on the fruit can persist in the dried product. If the water comes back — through incomplete drying or moisture pickup in storage — growth can resume. Mycotoxin risk in dried fruit is managed through the applicable food authority’s requirements and is outside the scope of this entry.',
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'The environmental profile depends almost entirely on the energy source, and the range is unusually wide. Open-air sun drying uses solar energy directly and needs little more than land and labour; mechanical dehydration burns fuel or electricity to supply the same latent heat that sunlight would otherwise provide. That difference is real, but it does not settle into a simple ranking: sun drying occupies land, depends on weather, and exposes the crop to contamination and loss, while mechanical drying gives control, speed, and a cleaner product for an energy cost. Which is appropriate is a function of climate, scale, and market, and neither can be called the better choice in general.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Hot surfaces, pre-treatments, and food hygiene',
          text: 'Mechanical dehydrators involve heated air, hot surfaces, and in enclosed designs the potential for confined-space entry — all matters for qualified engineering and facility procedures under applicable occupational-safety regulation. Chemical pre-treatments used to modify the skin or inhibit browning are regulated substances whose permitted use, handling, and residues are set by the applicable food authority; this entry names no treatment as a procedure. Sulphite treatments in particular carry allergen-declaration obligations. This entry is a reference description, not an operating instruction, and gives no settings.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'table-grapes' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'raisins' }],
  processObjective:
    'Remove water from fresh grapes until the remaining water is insufficiently available to support microbial growth, converting a perishable, cold-chain-dependent fruit into a shelf-stable product that can be stored and traded across seasons at ambient temperature.',
  operatingPrinciple:
    'Water moves from the fruit to the surrounding air, driven by the difference in vapour pressure between them, and is carried away by that air. As water leaves, the sugars remaining behind bind an increasing share of what is left, so the availability of water — its water activity — falls faster than its mass. Below the level microorganisms require, growth cannot proceed and the fruit becomes stable. The fruit’s waxy cuticle resists this loss, so it is commonly made more permeable beforehand.',
  physicalOrBiochemicalBasis:
    'Physical: vapour-pressure-driven mass transfer of water from fruit to air, with the reduction in water activity — not water content alone — providing the preservative effect. Enzymatic and non-enzymatic browning proceed concurrently as unintended chemical changes.',
  qualityEffects: [
    'Concentrates sugars, acids, and flavour — and any defects or contamination present in the fruit',
    'Reduces water activity, which is what confers shelf stability without refrigeration',
    'Causes irreversible enzymatic and non-enzymatic browning, the extent depending on drying method and exposure',
    'Alters texture irreversibly as tissue structure collapses with water loss',
    'Does not sterilise: it prevents microbial growth rather than eliminating microorganisms',
    'Cannot improve the soundness, sugar content, or cleanliness of the incoming fruit',
  ],
  measurableParameters: [
    'Moisture content',
    'Water activity',
    'Colour',
    'Size uniformity',
    'Foreign material',
    'Mould incidence',
  ],
  lossPoints: [
    'Physical losses to rain, birds, insects, and wind-blown soil in open-air drying',
    'Mould spoilage of fruit dried too slowly or held before drying',
    'Moisture reabsorption in storage, restoring spoilage conditions',
    'Shattering and handling losses at collection and cleaning',
  ],
  environmentalContext:
    'Energy demand depends almost entirely on the drying route: open-air sun drying uses solar energy directly and needs little beyond land and labour, while mechanical dehydration must supply the same latent heat from fuel or electricity. The trade-off is genuine but not one-sided — sun drying occupies land, depends on weather, and exposes the crop to contamination and physical loss, while mechanical drying buys control and product cleanliness with energy. Neither route is generally preferable; the choice follows climate, scale, and market.',
  safetyLimitations: [
    'Mechanical dehydrators involve heated air, hot surfaces, and in enclosed designs potential confined-space entry; their design and operation are matters for qualified engineering and facility procedures under applicable occupational-safety regulation.',
    'Chemical pre-treatments used to modify skin permeability or inhibit browning are regulated substances; their permitted use, handling, and residue limits are set by the applicable food authority and are not described here. Sulphite treatments carry allergen-declaration obligations in many jurisdictions.',
    'Drying prevents microbial growth but does not sterilise; mould and mycotoxin risk in dried fruit is managed under the applicable food authority’s requirements and no assurance is offered here.',
    'This entry is an educational reference, not an operating instruction: it gives no temperatures, drying times, moisture targets, or treatment concentrations.',
  ],
  jurisdictionalLimitations: [
    'Dried-fruit compositional standards, permitted pre-treatments, sulphite limits, and allergen labelling are jurisdiction-specific and are set by the applicable food authority.',
    'Mycotoxin limits in dried fruit differ by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'sun-drying' },
    { type: 'post-harvest', slug: 'shade-drying' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'moisture-content-and-equilibrium' },
    { type: 'post-harvest', slug: 'storage-moulds-and-mycotoxins' },
  ],
  connections: [
    { type: 'crop', slug: 'grape' },
    { type: 'quality-attribute', slug: 'moisture-content' },
    { type: 'quality-attribute', slug: 'water-activity' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'mould-incidence' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Fruit drying and dried-fruit product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Raisin production and dried-fruit quality research',
    },
    {
      sourceId: 'cabi',
      citedFor: 'Post-harvest drying and mould management context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, with open-air drying concentrated in regions whose harvest coincides with reliably dry weather. Drying route, permitted pre-treatments, and product standards vary with climate, cultivar, and jurisdiction.',
  limitations: [
    'A reference description of the process, not a drying specification or operating instruction.',
    'No temperatures, drying times, moisture figures, or treatment concentrations are given — they are climate-, cultivar-, and contract-specific.',
    'Modelled from table grapes to raisins; other dried fruits follow the same water-activity principle but differ in pre-treatment, handling, and product standards.',
    'Drying routes range from open-air field drying to enclosed mechanical dehydration; this describes the general water-activity principle rather than any particular route.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fruit Drying: How Grapes Become Raisins',
    description:
      'How fruit drying removes water to make raisins shelf-stable: water activity versus water content, browning, mould risk, and why drying is not sterilisation.',
    keywords: [
      'fruit drying',
      'raisin production',
      'water activity',
      'dried fruit',
      'grape drying',
    ],
  },
  structuredData: { article: true },
};
