import type { CommodityProductContent } from '@/types/content';

export const molasses: CommodityProductContent = {
  id: 'commodity-product-molasses',
  slug: 'molasses',
  contentType: 'commodity-product',
  title: 'Molasses',
  alternativeNames: ['Cane molasses', 'Blackstrap molasses', 'Final molasses'],
  category: 'Manufacturing co-product',
  subcategory: 'Cane sugar mother liquor',
  productClass: 'co-product',
  derivedFrom: { type: 'commodity', slug: 'sugarcane' },
  producedBy: [
    { type: 'processing-method', slug: 'centrifugation' },
    { type: 'processing-method', slug: 'evaporation-and-crystallisation' },
  ],
  physicalForm: 'syrup',
  summary:
    'Molasses is the dark, viscous liquor left when a cane mill can crystallise no more sugar out of it economically. It still holds sugars, and its markets — feed, fermentation, and distilling — are built on exactly that.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Molasses is where cane sugar manufacture stops. Sugar is crystallised from the boiling syrup in successive stages, and each stage leaves a liquor a little poorer in sucrose and a little richer in everything else. At some point the remaining sugar is so entangled with non-sugars that recovering it costs more than it is worth, and the mill stops. What it draws off at that moment is final molasses.',
    },
    {
      type: 'paragraph',
      text: 'The word "left" should not be read as "wasted". Molasses is a deliberate, valuable, and planned output with established industries built on it: it feeds livestock, it ferments into alcohol, and it grows yeast. A mill knows before the season starts roughly how much molasses it will make and has usually sold it in advance. That is what makes it a co-product rather than a residue.',
    },
  ],
  keyFacts: [
    { label: 'Product class', value: 'Co-product of cane milling' },
    { label: 'Made from', value: 'Sugarcane (Saccharum spp. hybrids)' },
    {
      label: 'What it is',
      value: 'The mother liquor after economic sugar recovery ends',
    },
    {
      label: 'Form',
      value: 'Dark, viscous liquid, handled and shipped in bulk',
    },
    {
      label: 'Principal uses',
      value: 'Animal feed, fermentation, and distilling',
    },
    {
      label: 'Traded on',
      value: 'Total sugars content, with other analytical terms',
    },
    {
      label: 'Companion streams',
      value: 'Raw sugar (primary product) and bagasse',
    },
  ],
  sections: [
    {
      id: 'why-it-exists',
      heading: 'Why molasses exists',
      body: [
        {
          type: 'paragraph',
          text: 'Crystallisation works because sucrose leaving a solution builds an orderly lattice that excludes other substances. That same selectivity is what eventually defeats the process: as the liquor concentrates, the non-sugars it contains rise in proportion, and they hold the remaining sucrose in solution and interfere with the crystals forming. The mill can push further — more boiling, more time, more energy — but each additional stage returns less, and there is a point where it is not worth it.',
        },
        {
          type: 'paragraph',
          text: 'Molasses is therefore an economic boundary made visible. Where a mill draws the line is an operating choice, which is why the volume and the sugar content of a factory’s molasses are inversely related to how hard it drove its sugar recovery. The two streams are joined: less molasses generally means more sugar, and molasses richer in sugar generally means a mill that stopped earlier.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Which molasses?',
          text: 'The trade term normally means final or blackstrap molasses — the liquor after the last recovery stage. Intermediate syrups drawn earlier are different materials with different composition, and speciality molasses sold as food is not the bulk commodity described here.',
        },
      ],
    },
    {
      id: 'uses',
      heading: 'What molasses is used for',
      body: [
        {
          type: 'paragraph',
          text: 'Every major use of molasses exploits the sugars the mill could not crystallise. Fermentation is the largest: yeasts do not care whether their sugar arrived in a crystal lattice or a syrup, so molasses feeds ethanol production, potable distilling — rum is by definition a cane spirit, and much of it is fermented from molasses — baker’s yeast, and a range of industrial fermentations producing acids, amino acids, and other chemicals.',
        },
        {
          type: 'list',
          items: [
            'Fermentation — ethanol for fuel and industry',
            'Distilling — rum and other potable spirits',
            'Yeast production — baker’s and other yeasts',
            'Animal feed — as an energy source, a palatability enhancer, and a binder in compound feeds and blocks',
            'Industrial fermentations — organic acids, amino acids, and other products',
          ],
        },
        {
          type: 'paragraph',
          text: 'In feed, molasses does several jobs at once: it supplies fermentable energy, it makes an otherwise dull ration attractive, it binds dust in a mix, and it acts as a carrier for supplements. It is sprayed onto compound feeds, mixed into rations, and cast into licking blocks for grazing animals.',
        },
      ],
    },
    {
      id: 'quality-and-handling',
      heading: 'Quality and handling',
      body: [
        {
          type: 'paragraph',
          text: 'Molasses is bought analytically. Total sugars is the primary term, since that is what both feeders and fermenters are paying for; Brix describes the dissolved solids concentration, and ash, sulphated ash, and unfermentable content matter to particular users. Fermenters care about things feeders do not, notably anything inhibitory to yeast, and a molasses that is good for one market can be poor for the other.',
        },
        {
          type: 'paragraph',
          text: 'Handling is a liquid-logistics problem. Molasses is dense and extremely viscous, and its viscosity falls sharply with temperature, so tanks, lines, and road and ship tankers are designed and sometimes heated with that in mind — cold molasses simply will not move at a useful rate. It is stored in bulk tanks, and it is not inert in them: micro-organisms can act on the sugars, generating gas and heat, and stored molasses is monitored accordingly. Concentration is itself the main preservative, and molasses diluted by water ingress spoils far more readily than molasses kept at strength.',
        },
      ],
    },
  ],
  primaryUses: ['feed', 'industrial'],
  secondaryUses: ['energy', 'beverage'],
  majorQualityAttributes: [
    'Total sugars',
    'Brix (dissolved solids)',
    'Ash and sulphated ash',
    'Viscosity',
    'Fermentability and absence of inhibitors',
    'Freedom from dilution and contamination',
  ],
  processContext:
    'Drawn off at a cane mill when no further sugar can economically be crystallised from the liquor; the volume and sugar content reflect how far the mill pushed sugar recovery.',
  storageContext:
    'Held in bulk tanks; dense and viscous, with viscosity falling as temperature rises, and liable to microbial activity, gassing, and heating if it is diluted or left unmonitored.',
  commodityCodes: [
    {
      system: 'HS',
      code: '1703.10',
      version: 'HS 2022',
      sourceId: 'worldbank',
      note: 'Cane molasses, within heading 17.03 covering molasses resulting from the extraction or refining of sugar.',
    },
  ],
  connections: [
    { type: 'crop', slug: 'sugarcane' },
    { type: 'livestock', slug: 'cattle' },
  ],
  relatedTopics: [
    { type: 'commodity-product', slug: 'raw-sugar' },
    { type: 'commodity-product', slug: 'beet-molasses' },
  ],
  glossaryTerms: ['ruminant'],
  imageIdentity: 'unavailable',
  sourceReferences: [
    {
      sourceId: 'fao',
      citedFor:
        'Cane molasses as a sugar-industry co-product and its feed and fermentation uses',
    },
    {
      sourceId: 'usda-ers',
      citedFor: 'Sugar sector co-product streams and molasses markets',
    },
    {
      sourceId: 'embrapa',
      citedFor: 'Cane milling co-products and molasses fermentation to ethanol',
    },
  ],
  updatedAt: '2026-07-13',
  reviewedAt: '2026-07-13',
  geographicScope:
    'Global. Feed-ingredient naming, permitted uses, and fermentation regulation are jurisdiction-specific.',
  limitations: [
    'This is a reference description of the product, not a feed formulation, fermentation specification, or nutritional statement.',
    'No sugar contents, Brix values, ash levels, viscosities, or inclusion rates are given — composition varies with mill, season, and recovery practice.',
    'Feed use and labelling are governed by jurisdiction-specific feed regulations.',
    'Speciality and food molasses sold at retail are separate goods and are not described here.',
  ],
  editorialStatus: 'published',
  seo: {
    title: 'Molasses: Co-Product of Cane Sugar Milling',
    description:
      'Cane molasses as a co-product: the liquor left when sugar recovery stops paying, why it still holds sugars, and its feed, fermentation and yeast markets.',
    keywords: [
      'molasses',
      'blackstrap molasses',
      'cane molasses',
      'total sugars',
      'fermentation feedstock',
    ],
  },
  structuredData: { article: true },
};
