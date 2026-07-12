import type { Metadata } from 'next';
import Link from 'next/link';
import { EntryGrid } from '@/components/content/EntryGrid';
import { PageIntro } from '@/components/content/PageIntro';
import { SourceList } from '@/components/content/SourceList';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Plant Nutrition';
const PATH = '/plant-nutrition';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'An overview of essential plant nutrients, fertilizer categories, and nutrient-management principles — with rates always dependent on soil tests and local guidance.',
  path: PATH,
});

export default function PlantNutritionPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'An overview of essential plant nutrients and nutrient-management principles.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Nutrition"
        title="Plant nutrition"
        lead="Plants require a set of essential nutrients to grow. This overview introduces those nutrients and the principles of managing them; specific fertilizer rates always depend on soil tests and local guidance."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Essential nutrients</h2>
        <p>
          Beyond carbon, hydrogen, and oxygen from air and water, plants require
          a number of mineral nutrients, conventionally divided by the amounts
          needed.
        </p>
        <ul>
          <li>
            <Link href="/glossary#macronutrient">Macronutrients</Link> — needed
            in larger amounts: nitrogen (N), phosphorus (P), potassium (K),
            calcium (Ca), magnesium (Mg), and sulfur (S).
          </li>
          <li>
            <Link href="/glossary#micronutrient">Micronutrients</Link> — needed
            in small amounts: iron, zinc, manganese, boron, copper, molybdenum,
            chlorine, and nickel.
          </li>
        </ul>
        <p>
          Nitrogen, phosphorus, and potassium are the nutrients most often
          managed through fertilization, but a deficiency in any essential
          nutrient can limit growth.
        </p>

        <h2>Fertilizer categories</h2>
        <ul>
          <li>
            <strong>Organic sources</strong> — such as manures, composts, and
            crop residues, which supply nutrients and organic matter as they
            break down.
          </li>
          <li>
            <strong>Mineral (inorganic) fertilizers</strong> — manufactured
            products supplying nutrients in defined, readily available forms.
          </li>
        </ul>

        <h2>Managing nutrients responsibly</h2>
        <p>
          Sound nutrient management matches supply to crop demand, drawing on
          soil testing and the nutrients already present in the soil and from
          previous crops. Applying the right source, at the right rate, time,
          and place helps crops while reducing losses to water and air.
        </p>
        <p>
          Because the correct rates depend on the crop, soil, yield goal, and
          local regulations, AgricultureID does not publish universal fertilizer
          recommendations. See individual <Link href="/crops">crop</Link> and{' '}
          <Link href="/soils">soil</Link> entries for context.
        </p>
      </Prose>

      <EntryGrid
        type="nutrient"
        path={PATH}
        heading="Essential nutrients A–Z"
        intro="In-depth entries for each essential plant nutrient — roles, deficiency and toxicity symptoms, interactions, and the fertilizers that supply them."
      />

      <SourceList
        references={[
          { sourceId: 'fao', citedFor: 'Plant nutrition and fertilizer use' },
          { sourceId: 'usda-nrcs', citedFor: 'Nutrient management principles' },
          {
            sourceId: 'ahdb',
            citedFor: 'Nutrient management guidance context',
          },
        ]}
      />
    </Container>
  );
}
