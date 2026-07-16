import type { CommodityProductContent } from '@/types/content';

export const scouredWool: CommodityProductContent = {
  id: 'commodity-product-scoured-wool',
  slug: 'scoured-wool',
  contentType: 'commodity-product',
  title: 'Scoured Wool',
  alternativeNames: ['Clean wool', 'Washed wool', 'Degreased wool'],
  category: 'Wool processing primary product',
  subcategory: 'Cleaned animal fibre',
  productClass: 'primary-product',
  derivedFrom: { type: 'commodity', slug: 'raw-wool' },
  physicalForm: 'fibre',
  summary:
    'Scoured wool is greasy wool that has been washed to remove wool grease, suint, and dirt. It is the primary product of raw wool: the clean fibre that every subsequent textile operation works with, and the form in which wool is actually measured, priced, and traded as fibre.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Scouring is the first thing that happens to wool after it leaves the farm, and it is the step that turns a livestock product into a textile material. Greasy wool arrives carrying wool grease, suint, dust, sand, and plant matter; scouring washes most of that away in a train of hot aqueous baths with detergent, leaving clean fibre that can be dried, baled, and processed. Nothing upstream of scouring can spin.',
    },
    {
      type: 'paragraph',
      text: 'Scoured wool is classed here as the primary product of raw wool because it is the intended output of the first processing step and the form the fibre exists in for the rest of its life. It is also the honest unit of the trade: greasy wool is bought on measured yield precisely because both parties are really transacting in the clean fibre that will come out of the scour.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Primary product of raw wool' },
    { label: 'Made from', value: 'Raw (greasy) wool' },
    {
      label: 'Produced by',
      value: 'Aqueous scouring — hot detergent baths, then drying',
    },
    {
      label: 'Removes',
      value: 'Wool grease, suint, dirt, and much loose vegetable matter',
    },
    { label: 'Recovered stream', value: 'Wool grease, refined into lanolin' },
    {
      label: 'Traded on',
      value: 'A defined moisture basis, since wool is hygroscopic',
    },
    {
      label: 'Principal use',
      value: 'Fibre — input to carding, combing, and spinning',
    },
  ],
  sections: [
    {
      id: 'what-it-is',
      heading: 'What scouring produces',
      body: [
        {
          type: 'paragraph',
          text: 'A scour line moves wool through a sequence of bowls, each washing and rinsing, with squeeze rollers between them and a dryer at the end. The wool grease and suint dissolve or emulsify away, and dirt and sand fall out. What emerges is loose clean fibre — visibly and functionally different material from what went in, dramatically lighter, and ready to be carded.',
        },
        {
          type: 'paragraph',
          text: 'The fibre itself is not transformed. Scouring is a cleaning operation, not a modification: mean fibre diameter, staple length, and the intrinsic character of the wool arrive at the scour already fixed by the animal and cannot be improved by washing. This is the essential point about the product — scouring reveals the fibre that was always there, and what it cannot do is make poor wool good.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Cleaning, not upgrading',
          text: 'Diameter, length, and strength are properties of the fibre as grown. Scouring removes what surrounds the fibre; it does not change what the fibre is. A tender or coarse wool scours into a clean tender or coarse wool.',
        },
      ],
    },
    {
      id: 'yield',
      heading: 'Yield: the link back to the greasy lot',
      body: [
        {
          type: 'paragraph',
          text: 'Yield is the proportion of a greasy lot recovered as clean fibre, and it is the number that connects the two commodities. Because it is measured on samples before the greasy wool is sold, the trade can price a bale of dirty fleece against the clean fibre it will actually deliver. Scouring then realises what the measurement predicted.',
        },
        {
          type: 'paragraph',
          text: 'Yield varies substantially with the environment the sheep were run in — dusty, dry country produces heavier, lower-yielding wool than clean pasture — which means two bales of identical greasy weight can be worth quite different amounts. That is not a market imperfection; it is the market correctly pricing what is in the bale.',
        },
      ],
    },
    {
      id: 'what-remains',
      heading: 'What scouring does not remove',
      body: [
        {
          type: 'paragraph',
          text: 'Scouring is aqueous, so it removes what water and detergent can take away. Vegetable matter is not one of those things. Burr, seed, and plant fragments largely survive the scour and must be dealt with afterwards — mechanically during carding and combing, or chemically by carbonising, which uses acid to char the plant material so it can be crushed out. Carbonising works but is aggressive, and it is a reason a high vegetable-matter lot is discounted at the point of sale rather than treated as a problem for later.',
        },
        {
          type: 'paragraph',
          text: 'Foreign fibre is the other survivor, and a worse one. Polypropylene from twine or packaging, and dark fibre from other animals, pass through scouring untouched and stay in the wool through spinning, appearing as visible faults once the fabric is dyed. Because no downstream step reliably removes them, contamination prevention is a farm-and-shed discipline that the rest of the chain depends on entirely.',
        },
      ],
    },
    {
      id: 'handling',
      heading: 'Handling, moisture, and trade',
      body: [
        {
          type: 'paragraph',
          text: 'Clean wool is strongly hygroscopic and its mass changes with the humidity around it, so trading it on as-is weight would mean trading water. The industry resolves this by transacting on a defined moisture basis, with conditioned weights established by testing authorities — an arrangement that is unusual among agricultural products and reflects how precisely the wool trade quantifies its material.',
        },
        {
          type: 'paragraph',
          text: 'Beyond that, scoured wool is a durable, storable product: baled, warehoused, and shipped without refrigeration or urgency, needing only to be kept dry and free of contamination. Scouring is also water- and energy-intensive and generates a heavily loaded effluent, from which wool grease is recovered and refined into lanolin — a genuine recovered stream, but one that belongs to the scouring process and is not modelled here as a pathway.',
        },
      ],
    },
  ],
  primaryUses: ['fibre'],
  secondaryUses: ['industrial'],
  majorQualityAttributes: [
    'Mean fibre diameter (carried unchanged from the greasy wool)',
    'Residual grease and ash content',
    'Residual vegetable matter',
    'Colour and brightness',
    'Fibre length after scouring',
    'Freedom from foreign fibre contamination',
  ],
  processContext:
    'Produced by washing greasy wool through hot aqueous detergent baths and drying it. Scouring removes grease, suint, and dirt; it does not alter fibre diameter, length, or strength, which are fixed before the wool is shorn.',
  storageContext:
    'Baled and warehoused without temperature control; durable if kept dry. Strongly hygroscopic, so it is traded on a defined moisture basis rather than as-received weight.',
  commodityCodes: [
    {
      system: 'HS',
      code: '5101',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Wool, not carded or combed, at 4-digit heading level; subheadings distinguish degreased and carbonised wool from greasy wool. Carded or combed wool falls under a different heading.',
    },
  ],
  connections: [
    { type: 'livestock', slug: 'sheep' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
  ],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Wool processing and the position of scouring in the fibre chain',
    },
    {
      sourceId: 'faostat',
      citedFor: 'Wool item coverage and clean-basis reporting context',
    },
    {
      sourceId: 'ahdb',
      citedFor: 'Wool clip preparation, contamination, and processing context',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Testing conventions, conditioned-weight rules, and moisture bases are set by national and international wool testing authorities.',
  limitations: [
    'A reference description of the product — not a scouring process specification or a testing procedure.',
    'No yield figures, moisture bases, residual grease limits, or diameter values are given: those are set by testing authorities, contracts, and the market.',
    'Yield and residual contamination depend on the greasy lot and its origin environment; no universal values apply.',
    'Lanolin recovery is real but is a stream of the scouring process and is not modelled as a pathway here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Scoured Wool: Clean Wool After Scouring',
    description:
      'Scoured wool, the primary product of greasy wool: what washing removes, why yield links the two, what survives the scour, and why moisture basis matters.',
    keywords: [
      'scoured wool',
      'clean wool',
      'wool scouring',
      'wool yield',
      'vegetable matter',
    ],
  },
  structuredData: { article: true },
};
