import type { CommodityContent } from '@/types/content';

export const freshSweetcorn: CommodityContent = {
  id: 'commodity-fresh-sweetcorn',
  slug: 'fresh-sweetcorn',
  contentType: 'commodity',
  title: 'Fresh Sweetcorn',
  alternativeNames: ['Sweet corn', 'Green corn', 'Corn on the cob'],
  category: 'Fresh vegetable commodity',
  subcategory: 'Immature cereal ear',
  commodityClass: 'vegetable',
  physicalForm: 'fresh-produce',
  harvestedPart:
    'Ear — the immature cob of kernels, usually traded in the husk',
  sourceCrop: { type: 'crop', slug: 'sweetcorn' },
  summary:
    'Fresh sweetcorn is the immature ear of the sweetcorn plant, picked at milk stage while the kernels are still sugary and tender. Its sugars begin converting to starch as soon as the ear is snapped, which is why sweetcorn is cooled faster and more aggressively than almost anything else in the vegetable trade.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Fresh sweetcorn is the traded commodity of the sweetcorn crop: ears snapped from the stalk at an immature stage, cooled hard, and moved to market usually still wrapped in their own husks. It is a cereal grain sold as a fresh vegetable — the same species that yields field maize as a dry, storable, bulk-traded grain months later, harvested here at an entirely different moment and sold into an entirely different trade.',
    },
    {
      type: 'paragraph',
      text: 'That contrast makes the point of the commodity. Field maize is picked dry and hard and can sit in a silo for a year; sweetcorn is picked wet, sugary, and alive, and is one of the most time-critical items in the produce chain. The difference is not the plant but the moment of harvest and what the kernel is doing at that moment. This entry describes the harvested ear as traded; the growing of the crop is on the sweetcorn crop page.',
    },
  ],
  keyFacts: [
    { label: 'Commodity class', value: 'Vegetable (an immature cereal ear)' },
    { label: 'Parent crop', value: 'Sweetcorn (Zea mays convar. saccharata)' },
    { label: 'Harvested part', value: 'Immature ear, traded in husk' },
    {
      label: 'Harvest stage',
      value: 'Milk stage — kernels full, tender, and still sugary',
    },
    {
      label: 'Ripening behaviour',
      value:
        'Non-climacteric; the ear does not ripen after picking, its quality only declines',
    },
    {
      label: 'Defining constraint',
      value:
        'Sugars convert to starch after harvest — rapid precooling is decisive',
    },
    {
      label: 'Key quality attributes',
      value:
        'Kernel tenderness and fill, husk freshness, silk condition, tip fill',
    },
  ],
  sections: [
    {
      id: 'milk-stage',
      heading: 'Picked at milk stage',
      body: [
        {
          type: 'paragraph',
          text: 'Sweetcorn is harvested at what growers call the milk stage: the kernels have filled out and are plump and tender, and a punctured kernel releases a milky liquid rather than a clear one or a doughy paste. Before this the ear is watery and thin; after it, the kernels toughen, their skins get chewy, and the milky interior turns doughy as starch accumulates. The saleable window is a matter of days in the field, and it moves with the weather.',
        },
        {
          type: 'paragraph',
          text: 'What sweetcorn cultivars have in common is a genetic block on the normal maize programme of converting sugar to starch in the developing kernel — that block is what makes the kernel sweet at this stage, and cultivars differ in how strongly it holds and therefore how quickly the ear loses sweetness after picking. But no cultivar stops the process. The plant is making a cereal grain; sweetcorn intercepts it partway, and the kernel goes on trying to finish the job after it has been picked.',
        },
      ],
    },
    {
      id: 'sugar-conversion',
      heading: 'Why the ear is cooled so fast',
      body: [
        {
          type: 'paragraph',
          text: 'A snapped ear of sweetcorn is a living tissue cut off from the plant that was feeding it, and it keeps doing what a developing kernel does: converting its sugars into starch, and respiring away sugar for energy. Both processes are running from the moment of harvest, and both are spending the exact thing the ear is sold for. Sweetness is not a stable attribute of this commodity — it is a depleting stock, and the ear starts drawing it down immediately.',
        },
        {
          type: 'paragraph',
          text: 'Both processes are also strongly temperature-driven, and slow markedly as the tissue is chilled. This is why sweetcorn is precooled as fast and as hard as any commodity in the trade — commonly by hydrocooling or with package ice, and often within hours of picking, with fields cut to match cooling capacity rather than the other way round. Sweetcorn is not chilling-sensitive, so it can be taken close to freezing without injury, and the practice is to do exactly that. The old advice about putting the pot on before picking is folk wisdom about a real biochemical race; the trade wins it with refrigeration instead.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'No figures are given here',
          text: 'The rate of sugar loss, cooling targets, and holding conditions for sweetcorn vary with cultivar type and are set by sourced post-harvest guidance. No rate or target is quoted on this page; the USDA Agricultural Research Service handbook and national extension recommendations hold them.',
        },
      ],
    },
    {
      id: 'quality-and-defects',
      heading: 'Quality, grading, and defects',
      body: [
        {
          type: 'paragraph',
          text: 'Sweetcorn is graded largely on things the buyer can see without opening the ear — husk colour and freshness, silk condition, ear size and shape — plus what is found on inspection: kernel tenderness, fill, and tip fill, the condition of the tip being a standing grievance because a poorly filled tip is what a shopper notices first. The husk is central to grading twice over: it is the freshness signal a buyer reads, and it is genuine protection, keeping the kernels from drying and shielding them from damage, which is why sweetcorn is traded in husk despite the weight and volume it adds.',
        },
        {
          type: 'list',
          items: [
            'Loss of sweetness — the defining quality loss, invisible until the ear is eaten',
            'Toughened, starchy kernels from over-mature harvest or warm holding',
            'Husk yellowing, drying, and wilting',
            'Dry, discoloured silks',
            'Poor tip fill and missing or shrivelled kernels',
            'Earworm and insect damage at the ear tip',
            'Kernel denting and drying from water loss',
          ],
        },
        {
          type: 'paragraph',
          text: 'Note the gap this list exposes. The most important attribute of the commodity cannot be graded by looking at it: an ear that has been left warm loses its sweetness while its husk still looks perfectly fresh. Visual grade and eating quality can therefore come apart completely, and the only real safeguard is the cooling record rather than the appearance of the lot.',
        },
      ],
    },
    {
      id: 'trade-forms',
      heading: 'Trade forms and streams',
      body: [
        {
          type: 'paragraph',
          text: 'Fresh sweetcorn moves as whole ears in husk, iced or refrigerated, in crates and cartons; trimmed and husked ears packed on trays are a convenience product with a shorter life, since husking removes the ear’s protection. As with several vegetable commodities, a large share of the crop never touches the fresh chain: ears delivered for canning and freezing are cut from the cob and processed close to the field, which sidesteps the sugar-loss problem by stopping the clock within hours of harvest.',
        },
      ],
    },
  ],
  primaryUses: ['food'],
  majorQualityAttributes: [
    'Kernel tenderness',
    'Kernel fill and tip fill',
    'Husk freshness and colour',
    'Silk condition',
    'Ear size and uniformity',
    'Freedom from insect damage',
  ],
  commonDefects: [
    'Loss of sweetness from delayed cooling',
    'Toughened, starchy kernels',
    'Husk yellowing and wilting',
    'Dry, discoloured silks',
    'Poor tip fill',
    'Earworm and insect damage',
    'Kernel denting from water loss',
  ],
  moistureContext:
    'The immature kernel is high in moisture and dents and toughens as it dries, and the husk is the main thing slowing that loss. Unlike the dry maize grain from the same species, this commodity is never dried and is held humid throughout.',
  storageContext:
    'Short-term holding only, close to freezing and at high humidity; not chilling-sensitive, so deep cooling is used deliberately to slow the conversion of sugars to starch.',
  transportContext:
    'Moves refrigerated or iced in crates and cartons, in husk, as a priority load; the interval between picking and cooling largely determines eating quality on arrival.',
  majorProducingRegions: [
    'North America',
    'Europe',
    'East and Southeast Asia',
    'Latin America',
  ],
  majorTradingRegions: ['North America', 'Europe', 'East Asia'],
  storageSystems: [
    { type: 'post-harvest', slug: 'cold-storage' },
    { type: 'post-harvest', slug: 'cold-chain' },
  ],
  connections: [
    { type: 'post-harvest', slug: 'precooling' },
    { type: 'post-harvest', slug: 'packing-and-packaging' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'postharvest-food-loss' },
    { type: 'crop', slug: 'maize' },
  ],
  imageIdentity: 'unavailable',
  glossaryTerms: ['cultivar'],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Sweetcorn as a traded fresh vegetable commodity and cold-chain context',
    },
    {
      sourceId: 'usda-ars',
      citedFor:
        'Post-harvest sugar-to-starch conversion, precooling, and storage behaviour of sweetcorn',
    },
    {
      sourceId: 'usda',
      citedFor:
        'Sweetcorn grading attributes, husk and tip fill, and defect description',
    },
    {
      sourceId: 'cornell-cals',
      citedFor:
        'Sweetcorn harvest maturity at milk stage and cultivar sweetness retention',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Grade standards, pack specifications, and classification codes are jurisdiction-specific and versioned.',
  limitations: [
    'This entry describes the commodity in reference terms; it is not a grading determination, contract specification, or customs classification.',
    'No cooling target, storage temperature, sugar-loss rate, or market-life figure is given here — these are cultivar- and system-specific and belong to sourced post-harvest guidance.',
    'No HS classification code is given here because fresh sweetcorn falls within a residual vegetable subheading whose scope depends on the edition and jurisdiction; confirm with the applicable customs authority.',
    'Production and trade regions are indicative groupings, not ranked statistics.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Fresh Sweetcorn: The Time-Critical Ear Commodity',
    description:
      'Fresh sweetcorn as a commodity: harvest at milk stage, why sugars convert to starch after picking, rapid precooling and icing, husk quality, and grading.',
    keywords: [
      'fresh sweetcorn',
      'sweetcorn commodity',
      'sweetcorn precooling',
      'milk stage harvest',
      'sweetcorn grading',
    ],
  },
  structuredData: { article: true },
};
