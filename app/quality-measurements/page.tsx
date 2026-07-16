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

const TITLE = 'Quality Measurements';
const PATH = '/quality-measurements';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Methods and instruments used to measure post-harvest quality — moisture meters, penetrometers, refractometers, NIR and more — and where each is unreliable.',
  path: PATH,
});

export default function QualityMeasurementsHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Post-harvest quality measurement methods and instruments, and their limitations.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Measurement"
        title="Quality measurement methods"
        lead="Every quality attribute has to be observed somehow, and every method has a range where it is trustworthy and a range where it is not. This section covers the instruments and methods, the principle each works on, and — the part that decides whether a number means anything — where each one misleads."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>A number is only as good as the method and the sample</h2>
        <p>
          Two things routinely invalidate a post-harvest measurement before the
          instrument is even at fault. The first is <strong>sampling</strong>: a
          reading describes the sample, and only describes the lot if the sample
          genuinely represents it. The second is <strong>calibration</strong>:
          many field instruments are indirect — they measure something
          correlated with the property of interest and convert it using a
          commodity-specific calibration. An electronic moisture meter does not
          weigh water; it responds to electrical properties and converts. Move
          to a different commodity, a different temperature, or an uneven lot,
          and the conversion degrades.
        </p>
        <p>
          That is why reference methods exist. Oven-drying is slow and
          destructive, but it is what fast meters are calibrated against — and
          knowing which of the two you are holding is the difference between a
          measurement and a guess.
        </p>

        <h2>What these pages do not give you</h2>
        <p>
          No thresholds, no pass/fail values, and no operating procedures.
          Acceptable values belong to the applicable{' '}
          <Link href="/commodity-grades">standard</Link> or contract, and
          procedures belong to the method&rsquo;s own documentation. See{' '}
          <Link href="/quality-attributes">quality attributes</Link> for what is
          being measured and why.
        </p>
      </Prose>

      <EntryGrid
        type="quality-measurement"
        path={PATH}
        heading="Measurement methods A–Z"
        intro="Each entry covers what the method measures, the principle it works on, sampling requirements, whether it is destructive, its reference method, and where it is unreliable."
      />

      <SourceList
        references={[
          {
            sourceId: 'usda-ars',
            citedFor: 'Measurement methods and reference procedures',
          },
          {
            sourceId: 'fao',
            citedFor: 'Post-harvest quality measurement guidance',
          },
          { sourceId: 'ahdb', citedFor: 'Grain sampling and testing context' },
        ]}
      />
    </Container>
  );
}
