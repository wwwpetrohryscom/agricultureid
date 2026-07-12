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

const TITLE = 'Irrigation';
const PATH = '/irrigation';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'An overview of irrigation methods and water-management principles — surface, sprinkler, and micro-irrigation, scheduling, and efficiency considerations.',
  path: PATH,
});

export default function IrrigationPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'An overview of irrigation methods and water-management principles.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Water"
        title="Irrigation"
        lead="Irrigation supplies water to crops to supplement or replace rainfall. This overview introduces the main methods and the principles behind managing water well; specific volumes and schedules are always local."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Main irrigation methods</h2>
        <ul>
          <li>
            <strong>Surface irrigation</strong> — water flows across the field
            by gravity (for example furrow, border, or basin systems). Widely
            used and low-cost, but efficiency depends heavily on management and
            land levelling.
          </li>
          <li>
            <strong>Sprinkler irrigation</strong> — water is applied through
            pressurised sprinklers, including centre-pivot and lateral-move
            systems, giving more even application on many soils.
          </li>
          <li>
            <strong>Micro-irrigation</strong> — drip and micro-sprinkler systems
            deliver water slowly near the root zone, which can improve
            application efficiency and suit high-value crops.
          </li>
          <li>
            <strong>Subsurface systems</strong> — water is delivered below the
            surface, including subsurface drip, reducing evaporation losses.
          </li>
        </ul>

        <h2>Managing water well</h2>
        <p>
          Good irrigation management aims to meet crop water needs at sensitive
          growth stages while avoiding waste, waterlogging, and salinity. Crop
          water requirements are commonly estimated from{' '}
          <Link href="/glossary#evapotranspiration">evapotranspiration</Link>{' '}
          and local climate data, then matched to soil water-holding capacity
          and the chosen method.
        </p>
        <p>
          Because requirements depend on crop, soil, climate, water quality, and
          system, AgricultureID does not publish universal irrigation volumes.
          Reference methods and data are maintained by FAO and national
          services.
        </p>

        <h2>Related topics</h2>
        <p>
          Irrigation interacts closely with <Link href="/soils">soils</Link> and{' '}
          <Link href="/crops">crops</Link>. Soil texture governs how much water
          a soil holds and how quickly it drains, which shapes irrigation
          decisions.
        </p>
      </Prose>

      <EntryGrid
        type="irrigation-method"
        path={PATH}
        heading="Irrigation methods A–Z"
        intro="In-depth entries on individual irrigation methods and water-management approaches."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao-land-water',
            citedFor: 'Crop water requirements and irrigation methods',
          },
          { sourceId: 'fao', citedFor: 'Water management in agriculture' },
          {
            sourceId: 'usda-nrcs',
            citedFor: 'Irrigation and soil-water management',
          },
        ]}
      />
    </Container>
  );
}
