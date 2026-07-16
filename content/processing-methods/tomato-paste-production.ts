import type { ProcessingMethodContent } from '@/types/content';

export const tomatoPasteProduction: ProcessingMethodContent = {
  id: 'processing-method-tomato-paste-production',
  slug: 'tomato-paste-production',
  contentType: 'processing-method',
  title: 'Tomato Paste Production',
  alternativeNames: [
    'Tomato concentrate production',
    'Tomato paste manufacture',
  ],
  category: 'Processing method',
  subcategory: 'Vegetable concentration',
  processingClass: 'concentration',
  processStage: 'primary-transformation',
  transformationBasis: 'combined',
  summary:
    'Tomato paste production breaks tomatoes down, separates skins and seeds from the pulp, and evaporates water until a stable concentrate remains. It runs on processing tomatoes — a distinct commercial channel from the fresh-market fruit sold whole.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Tomato paste is what remains when tomatoes are pulped, screened, and boiled down. The operation chains three distinct actions: heat the crushed fruit to control its enzymes, screen out the skins and seeds, then evaporate water from the remaining pulp until the concentrate is dense enough to be stable and to ship economically. The output is a global commodity that underpins most processed tomato foods.',
    },
    {
      type: 'paragraph',
      text: 'One point of honesty is needed at the outset. Paste is not made from the tomatoes sold whole in shops. It runs on processing tomatoes — cultivars bred for solids content, uniform ripening, and machine harvest, grown under contract to a factory and delivered in bulk. This dataset carries a single fresh-tomatoes commodity, so that distinction cannot be drawn in the data model; it is a real split in commercial channel, cultivar, and harvest method within the same harvested commodity, and it belongs in the prose rather than being quietly ignored.',
    },
  ],
  keyFacts: [
    {
      label: 'Class',
      value: 'Concentration — pulping, screening, and water removal',
    },
    { label: 'Stage', value: 'Primary transformation' },
    {
      label: 'Input',
      value: 'Fresh tomatoes, via the processing-tomato channel specifically',
    },
    { label: 'Primary output', value: 'Tomato paste' },
    {
      label: 'By-product',
      value:
        'Tomato pomace — the screened skins and seeds; a feed and oil material',
    },
    {
      label: 'Governing principle',
      value:
        'Heat sets enzyme activity and texture; screening removes solids; evaporation removes water',
    },
    {
      label: 'Defining constraint',
      value:
        'The crop arrives in a short season and is highly perishable, so the plant runs against the clock',
    },
  ],
  sections: [
    {
      id: 'objective-and-principle',
      heading: 'Objective and principle',
      body: [
        {
          type: 'paragraph',
          text: 'The objective is preservation and density together. Tomatoes are perishable, watery, and arrive in an intense, short harvest window that no fresh market could absorb. Concentrating them into paste converts a crop that would spoil within days into a material that can be stored between seasons, shipped worldwide, and diluted back into sauces, soups, and juices wherever they are made. Paste is, in effect, how a tomato harvest is made to last a year.',
        },
        {
          type: 'paragraph',
          text: 'Three principles operate in sequence. First, crushed tomatoes are heated, and this is not merely a warming step: it determines what the tomato’s own pectin-degrading enzymes are allowed to do. Heating quickly enough to arrest them preserves pectin and yields a thick, viscous product, while allowing them to act first gives a thinner one — the classic hot-break and cold-break distinction, chosen according to what the customer wants the paste to do. Second, the heated pulp is screened, so skins and seeds are separated from the fluid pulp on the basis of size. Third, the pulp is evaporated under reduced pressure, exploiting the fact that water is volatile while the sugars, acids, pigments, and solids are not.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hot break and cold break',
          text: 'Both regimes describe how enzyme activity is managed during the initial heating, and they produce pastes with genuinely different thickening behaviour. Which is used is a product decision driven by the end use, not a quality ranking of one over the other.',
        },
      ],
    },
    {
      id: 'what-comes-out',
      heading: 'What comes out',
      body: [
        {
          type: 'paragraph',
          text: 'Two streams leave the plant. The paste is the product the factory exists for. The pomace — the skins and seeds taken off at the screening stage — is a by-product with real outlets, and notably it is the only material stream here that is separated out rather than evaporated away.',
        },
        {
          type: 'definitionList',
          items: [
            {
              term: 'Tomato paste',
              description:
                'The primary product: concentrated tomato pulp, specified on soluble solids, colour, consistency, and acidity. Traded internationally in bulk and reconstituted into finished foods elsewhere.',
            },
            {
              term: 'Tomato pomace',
              description:
                'The skins and seeds removed during screening. A by-product with established uses: livestock feed, a source of oil pressed from the seeds, and a raw material for lycopene and fibre recovery.',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Tomato pomace is not waste',
          text: 'Pomace carries the seeds, most of the fruit’s fibre, and a concentrated share of its lycopene, since the pigment sits largely in the skin. It is fed to livestock, pressed for seed oil, and used as a feedstock for pigment and fibre recovery. Treating it as disposal misstates the material flow.',
        },
      ],
    },
    {
      id: 'quality-and-losses',
      heading: 'Quality effects and loss points',
      body: [
        {
          type: 'paragraph',
          text: 'The quality of paste is set long before the evaporator. Soluble solids, colour, and acidity arrive with the crop and reflect cultivar, growing conditions, and ripeness at harvest — and because concentration removes water rather than defects, everything that arrives in the fruit is concentrated along with the good. Under-ripe fruit, mould, and field debris do not disappear into the paste; they become more prominent in it. This is why processing-tomato contracts specify incoming fruit so tightly.',
        },
        {
          type: 'paragraph',
          text: 'What the process itself controls is thermal damage and separation efficiency. Prolonged heating darkens the paste through non-enzymatic browning and degrades the red pigment that buyers judge it on, while screening decides how much usable pulp leaves with the skins. There is also a distinctively seasonal loss point: the crop arrives faster than it can be processed, so fruit waiting to be run is fruit deteriorating, and delivery-to-processing delay is a genuine quality variable rather than a logistical detail.',
        },
        {
          type: 'list',
          items: [
            'Deterioration of harvested fruit waiting to be processed during the peak of a short season',
            'Non-enzymatic browning and pigment degradation from thermal exposure during evaporation',
            'Usable pulp carried out with the skins and seeds at screening',
            'Product retained in evaporator surfaces, pipework, and transfer lines',
            'Fouling of heating surfaces, which degrades heat transfer and can scorch product',
          ],
        },
      ],
    },
    {
      id: 'environment-and-safety',
      heading: 'Environmental context and safety',
      body: [
        {
          type: 'paragraph',
          text: 'Water and energy both matter here. Tomatoes arrive from the field carrying soil and are washed and flumed in volume, so wash-water and its organic load are the dominant water issue; evaporation then makes the plant energy-intensive for the same thermodynamic reason as any concentration duty, which is why energy recovery between evaporator effects is standard engineering. The pomace stream is substantially valorised into feed, seed oil, and pigment recovery. A further structural point is that the plant runs as a seasonal campaign, so its water, energy, and effluent loads are concentrated into a short annual window rather than spread across the year — which is what shapes the demands it places on local infrastructure.',
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Thermal, pressure, and food-safety context',
          text: 'The plant combines steam systems, hot surfaces, and vessels operating away from atmospheric pressure, all matters for qualified engineering under applicable pressure-equipment and occupational-safety regulation. Paste is a food material: its manufacture, and any thermal process applied to it or to products made from it, fall under the applicable food authority’s requirements. This entry describes what the process does; it is not an operating instruction, it gives no temperatures, times, or settings, and it makes no food-safety guarantee.',
        },
      ],
    },
  ],
  inputCommodities: [{ type: 'commodity', slug: 'fresh-tomatoes' }],
  primaryOutputs: [{ type: 'commodity-product', slug: 'tomato-paste' }],
  byProductOutputs: [{ type: 'commodity-product', slug: 'tomato-pomace' }],
  processObjective:
    'Convert a perishable, seasonal tomato crop into a dense, storable concentrate that can be held between seasons and shipped internationally, while separating skins and seeds as a by-product for feed, seed oil, and pigment recovery.',
  operatingPrinciple:
    'Crushed tomatoes are heated to manage their own pectin-degrading enzymes, which sets the consistency of the finished paste — the hot-break and cold-break distinction. The heated pulp is then screened to separate skins and seeds from the fluid pulp by size. The pulp is finally evaporated under reduced pressure, removing volatile water while the non-volatile sugars, acids, pigments, and solids remain and concentrate.',
  physicalOrBiochemicalBasis:
    'Combined. Thermal control of endogenous enzyme activity governs pectin integrity and therefore consistency; mechanical size-based screening separates the solid fraction; and a thermal phase change separates volatile water from non-volatile solutes. Non-enzymatic browning proceeds as an unintended thermal side reaction.',
  qualityEffects: [
    'Initial heating regime governs pectin integrity and therefore the paste’s consistency and thickening behaviour',
    'Concentrates the fruit’s existing sugars, acids, and pigments — and its defects along with them',
    'Thermal exposure darkens the paste and degrades red pigment',
    'Reduces available water, which is what gives the concentrate its storage stability',
    'Cannot improve the soluble solids, colour, or soundness of the incoming crop',
  ],
  measurableParameters: [
    'Soluble solids',
    'Colour',
    'Consistency',
    'Titratable acidity',
    'pH',
    'Water activity',
    'Mould count',
  ],
  lossPoints: [
    'Fruit deterioration while awaiting processing during the seasonal peak',
    'Usable pulp leaving with skins and seeds at screening',
    'Product retained in evaporator surfaces, pipework, and transfer lines',
    'Colour and pigment degraded by thermal exposure',
  ],
  environmentalContext:
    'Water demand and wastewater organic load dominate at the front of the plant, since field-run fruit is washed and flumed in volume; evaporation makes the plant energy-intensive, and energy recovery between evaporator effects is standard practice. Pomace is substantially valorised into livestock feed, seed oil, and lycopene and fibre recovery. Because the plant runs as a short seasonal campaign, its water, energy, and effluent loads fall within a narrow annual window rather than being spread across the year.',
  safetyLimitations: [
    'The plant combines steam systems, hot surfaces, and vessels operating away from atmospheric pressure; their design, protection, inspection, and operation are matters for qualified engineering under applicable pressure-equipment and occupational-safety regulation.',
    'Tomato paste is a food material and its manufacture is subject to the applicable food authority’s requirements; where paste or products made from it receive a thermal process, that process must be established by a qualified process authority and is outside the scope of this entry.',
    'Bulk aseptic storage and handling systems involve their own hygienic and mechanical hazards addressed by facility procedures and qualified engineering.',
    'This entry is an educational reference, not an operating instruction: it gives no temperatures, times, soluble-solids targets, or process parameters, and no food-safety guarantee.',
  ],
  jurisdictionalLimitations: [
    'Paste naming, compositional standards, and labelling — including how concentration is declared — are jurisdiction-specific and are set by the applicable food authority.',
    'The use of tomato pomace in animal feed is governed by feed-safety regulation that differs by jurisdiction.',
  ],
  relatedOperations: [
    { type: 'post-harvest', slug: 'washing-and-sanitising' },
    { type: 'post-harvest', slug: 'sorting-and-grading' },
    { type: 'post-harvest', slug: 'harvest-maturity-assessment' },
    { type: 'post-harvest', slug: 'field-heat-removal' },
  ],
  connections: [
    { type: 'crop', slug: 'tomato' },
    { type: 'quality-attribute', slug: 'soluble-solids-content' },
    { type: 'quality-attribute', slug: 'colour' },
    { type: 'quality-attribute', slug: 'titratable-acidity' },
    { type: 'quality-attribute', slug: 'dry-matter-content' },
  ],
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor: 'Tomato processing and concentrate product definitions',
    },
    {
      sourceId: 'usda-ars',
      citedFor: 'Processing tomato quality and paste manufacture research',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Processing tomato channel and market context',
    },
    {
      sourceId: 'nap-nrc',
      citedFor: 'Tomato pomace as a livestock feed material',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global, concentrated in regions with climates suited to contract-grown processing tomatoes. Break regimes, paste specifications, and pomace outlets vary with end use and jurisdiction.',
  limitations: [
    'A reference description of the process, not a manufacturing specification or operating instruction.',
    'No temperatures, times, soluble-solids figures, or process parameters are given — they are plant-, cultivar-, and contract-specific.',
    'Paste is made from processing tomatoes, a distinct commercial channel with its own cultivars, contracts, and harvest methods; this dataset carries a single fresh-tomatoes commodity and cannot represent that split in the data model.',
    'Plant configurations differ substantially; this describes the general break–screen–evaporate principle rather than any particular line.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Tomato Paste Production: Pulping to Concentrate',
    description:
      'How tomato paste is made from processing tomatoes: hot and cold break, screening out skins and seeds, evaporation, and why tomato pomace is a by-product.',
    keywords: [
      'tomato paste production',
      'processing tomatoes',
      'hot break',
      'tomato pomace',
      'tomato concentrate',
    ],
  },
  structuredData: { article: true },
};
