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

const TITLE = 'Farm Systems';
const PATH = '/farm-systems';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'An overview of agricultural production systems — conventional, organic, regenerative, integrated crop–livestock, protected cultivation, and hydroponics.',
  path: PATH,
});

export default function FarmSystemsPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'An overview of agricultural production systems and how they differ.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Systems"
        title="Farm systems"
        lead="Agriculture is organised into production systems that combine crops, livestock, soils, water, and management in different ways. This overview introduces the main systems; detailed entries will expand over time."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>What a “farm system” means</h2>
        <p>
          A farming system is the combination of enterprises, resources, and
          management practices a farm uses to produce food, fibre, or other
          outputs. Systems are shaped by climate, soils, markets, labour,
          policy, and the goals of the people running them, so no single system
          is universally “best” — each involves trade-offs.
        </p>

        <h2>Major production systems</h2>
        <p>
          The following are broad categories. In practice, most real farms
          combine elements of several.
        </p>
        <ul>
          <li>
            <strong>Conventional systems</strong> — the mainstream systems in
            most regions, using a mix of mechanisation, improved varieties, and
            purchased inputs, managed to local recommendations and regulations.
          </li>
          <li>
            <strong>Organic systems</strong> — production that follows defined
            organic standards, restricting synthetic inputs and emphasising soil
            biology, rotations, and biological management. Certification rules
            are set regionally.
          </li>
          <li>
            <strong>Regenerative approaches</strong> — a set of practices that
            aim to improve soil health, biodiversity, and water function, often
            through reduced tillage, cover cropping, and integrating livestock.
            Definitions vary and are evolving.
          </li>
          <li>
            <strong>Integrated crop–livestock systems</strong> — mixed farms
            where crops and animals interact, recycling nutrients through manure
            and using crop residues and forages as feed.
          </li>
          <li>
            <strong>Protected cultivation</strong> — growing under structures
            such as greenhouses and polytunnels to extend seasons and manage
            climate, common for high-value horticulture.
          </li>
          <li>
            <strong>Soilless systems</strong> — hydroponics and related methods
            that grow plants in nutrient solution or inert media, mainly in
            controlled environments.
          </li>
        </ul>

        <h2>How this connects to the rest of AgricultureID</h2>
        <p>
          Systems draw on the same fundamentals covered elsewhere on the
          platform. For the components of these systems, see{' '}
          <Link href="/crops">crops</Link>, <Link href="/soils">soils</Link>,{' '}
          <Link href="/livestock">livestock</Link>,{' '}
          <Link href="/irrigation">irrigation</Link>, and{' '}
          <Link href="/plant-nutrition">plant nutrition</Link>.
        </p>
      </Prose>

      <EntryGrid
        type="farming-system"
        path={PATH}
        heading="Farming systems A–Z"
        intro="In-depth entries on individual production systems and approaches."
      />

      <SourceList
        references={[
          {
            sourceId: 'fao',
            citedFor: 'Farming systems and sustainable production',
          },
          {
            sourceId: 'usda-nrcs',
            citedFor: 'Soil health and conservation systems',
          },
          {
            sourceId: 'ec-agri',
            citedFor: 'Organic and agricultural policy context',
          },
        ]}
      />
    </Container>
  );
}
