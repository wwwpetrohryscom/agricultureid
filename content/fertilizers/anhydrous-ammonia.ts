import type { FertilizerContent } from '@/types/content';

export const anhydrousAmmonia: FertilizerContent = {
  id: 'fertilizer-anhydrous-ammonia',
  slug: 'anhydrous-ammonia',
  contentType: 'fertilizer',
  title: 'Anhydrous ammonia',
  alternativeNames: ['NH₃', 'Ammonia gas fertilizer'],
  category: 'Fertilizer',
  subcategory: 'Nitrogen fertilizer',
  fertilizerClass: 'mineral-nitrogen',
  typicalAnalysis: '82-0-0',
  summary:
    'Anhydrous ammonia is the highest-analysis nitrogen fertilizer in common use, applied as a pressurised liquefied gas injected below the soil surface, where it converts to ammonium; it is economical per unit of nitrogen but hazardous and requires specialised equipment, training, and safety precautions.',
  introduction: [
    {
      type: 'paragraph',
      text: 'Anhydrous ammonia (NH₃) contains about 82% nitrogen, making it the most concentrated nitrogen fertilizer widely used. It is stored and transported as a liquefied gas under pressure and is the base material from which most other synthetic nitrogen fertilizers are manufactured.',
    },
    {
      type: 'paragraph',
      text: 'When injected into moist soil, anhydrous ammonia reacts rapidly with soil water to form ammonium, which is retained on soil exchange sites near the injection band. Its very high nitrogen concentration gives it a low cost per unit of nitrogen, but its physical hazards mean it is handled only with dedicated equipment and trained operators.',
    },
  ],
  keyFacts: [
    { label: 'Fertilizer type', value: 'Straight nitrogen fertilizer (gas)' },
    { label: 'Typical analysis', value: '82-0-0 (N-P₂O₅-K₂O)' },
    { label: 'Nutrients supplied', value: 'Nitrogen' },
    {
      label: 'Common form',
      value: 'Liquefied gas stored under pressure; injected into soil',
    },
    {
      label: 'Key consideration',
      value:
        'Hazardous: caustic and corrosive to living tissue; requires specialised equipment and training',
    },
    {
      label: 'Application',
      value: 'Knife or shank injection below the surface',
    },
  ],
  sections: [
    {
      id: 'composition-and-analysis',
      heading: 'Composition and analysis',
      body: [
        {
          type: 'paragraph',
          text: 'Anhydrous ammonia is nitrogen and hydrogen with no added water, at about 82% nitrogen. It is produced industrially from atmospheric nitrogen and hydrogen and is the primary feedstock for urea, ammonium nitrate, ammonium sulfate, and other nitrogen fertilizers.',
        },
        {
          type: 'definitionList',
          items: [
            { term: 'Chemical formula', description: 'NH₃' },
            {
              term: 'Nitrogen content',
              description:
                'About 82% nitrogen, the highest of common fertilizers',
            },
            {
              term: 'Physical state',
              description:
                'Liquefied gas under pressure; a gas at ambient conditions',
            },
            {
              term: 'Reaction in soil',
              description:
                'Combines with soil water to form ammonium near the injection band',
            },
          ],
        },
      ],
    },
    {
      id: 'nutrients-supplied',
      heading: 'Nutrients supplied and behaviour in soil',
      body: [
        {
          type: 'paragraph',
          text: 'Anhydrous ammonia supplies nitrogen only. On injection it converts to ammonium, which is initially held near the band and then nitrifies to nitrate over time. The concentrated band of ammonia can temporarily raise pH and be toxic to microbes and seedlings in its immediate zone until it disperses.',
        },
        {
          type: 'list',
          items: [
            'Forms ammonium on contact with soil moisture, retained near the injection band',
            'Ammonium subsequently nitrifies to nitrate through soil microbial activity',
            'Supplies no phosphorus, potassium, or sulfur',
          ],
        },
      ],
    },
    {
      id: 'use-and-management',
      heading: 'Use and management',
      body: [
        {
          type: 'paragraph',
          text: 'Anhydrous ammonia is injected below the soil surface through knife or shank applicators into moist soil that can seal behind the injection slot to retain the gas. Adequate injection depth, soil moisture, and slot closure are central to limiting loss of ammonia to the air at application.',
        },
        {
          type: 'list',
          items: [
            'Requires injection below the surface into soil with adequate moisture and sealing',
            'Very low cost per unit of nitrogen where handling infrastructure exists',
            'Seed or seedling contact with the concentrated band must be avoided',
          ],
        },
        {
          type: 'callout',
          tone: 'important',
          title: 'Rates, timing, and placement are region-specific',
          text: 'The right nitrogen rate, timing, and injection practice depend on the crop, soil, moisture conditions, and local regulations. AgricultureID does not publish universal fertilizer rates; follow soil testing, safety requirements, and regional agronomic guidance.',
        },
      ],
    },
    {
      id: 'limitations-and-safety',
      heading: 'Safety and limitations',
      body: [
        {
          type: 'paragraph',
          text: 'Anhydrous ammonia is strongly attracted to water and will react with the moisture in eyes, skin, and the respiratory tract, causing severe caustic burns and, on rapid release, freezing injury. Handling, storage, and transport are governed by strict safety and regulatory requirements in most jurisdictions.',
        },
        {
          type: 'callout',
          tone: 'caution',
          title: 'Anhydrous ammonia is hazardous',
          text: 'Anhydrous ammonia is corrosive to living tissue and can cause serious or fatal injury through skin, eye, and respiratory exposure. It must be handled only by trained operators using dedicated pressure equipment, appropriate personal protective equipment, and an immediately accessible water supply for emergencies. It is a regulated hazardous substance; follow all safety, storage, security, and transport regulations and manufacturer instructions.',
        },
      ],
    },
  ],
  relatedTopics: [
    { type: 'fertilizer', slug: 'urea' },
    { type: 'fertilizer', slug: 'ammonium-nitrate' },
    { type: 'fertilizer', slug: 'ammonium-sulfate' },
  ],
  connections: [
    { type: 'nutrient', slug: 'nitrogen' },
    { type: 'crop', slug: 'maize' },
    { type: 'crop', slug: 'wheat' },
    { type: 'crop', slug: 'sorghum' },
    { type: 'soil-topic', slug: 'soil-ph' },
    { type: 'soil-topic', slug: 'soil-testing' },
  ],
  glossaryTerms: ['macronutrient'],
  geographicScope:
    'Used mainly in regions with the storage, transport, and application infrastructure for pressurised ammonia, notably parts of North America. Regulation is strict and varies by country.',
  climateContext:
    'Retention at injection depends on soil moisture and the ability of the slot to seal; dry or cloddy soils increase the risk of ammonia loss to the air at application.',
  limitations: [
    'This entry describes composition, behaviour, and hazards; it is not a nitrogen rate recommendation for any crop or region.',
    'Anhydrous ammonia requires specialised pressurised equipment and trained operators and is not suitable for general or manual handling.',
    'Storage, transport, and security are tightly regulated and requirements differ by jurisdiction.',
  ],
  claims: [
    {
      field: 'nutrient-analysis',
      statement:
        'Anhydrous ammonia contains about 82% nitrogen, the highest nitrogen concentration among fertilizers in common use.',
      quantitative: true,
      citations: [
        {
          sourceId: 'ifa',
          evidenceNote:
            'IFA documents anhydrous ammonia as the base nitrogen material and its nitrogen content.',
          retrievedDate: '2026-07-13',
        },
        {
          sourceId: 'usda-nrcs',
          evidenceNote:
            'USDA NRCS nutrient management guidance describes anhydrous ammonia nitrogen content and soil behaviour.',
          retrievedDate: '2026-07-13',
        },
      ],
    },
  ],
  sourceReferences: [
    { sourceId: 'ifa', citedFor: 'Anhydrous ammonia manufacture and analysis' },
    {
      sourceId: 'usda-nrcs',
      citedFor: 'Ammonia behaviour and injection in soil',
    },
    {
      sourceId: 'us-epa',
      citedFor:
        'Ammonia as a regulated hazardous substance and safe handling context',
    },
    { sourceId: 'fao', citedFor: 'Nitrogen fertilizer sources and global use' },
  ],
  reviewedAt: '2026-07-13',
  updatedAt: '2026-07-13',
  editorialStatus: 'published',
  seo: {
    title: 'Anhydrous Ammonia Fertilizer',
    description:
      'Anhydrous ammonia (82-0-0): the highest-analysis nitrogen fertilizer, injected below soil, its conversion to ammonium, and its serious safety hazards.',
    keywords: [
      'anhydrous ammonia',
      'anhydrous ammonia fertilizer',
      '82-0-0 nitrogen',
      'ammonia injection safety',
    ],
  },
  structuredData: { article: true },
};
