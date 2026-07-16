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
import { DIAGNOSIS_DISCLAIMER } from '@/types/post-harvest';

const TITLE = 'Post-Harvest Defects';
const PATH = '/post-harvest-defects';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'How harvested produce deteriorates and fails — mechanical, physiological, pathological, and insect defects, their causes, and the limits of visual diagnosis.',
  path: PATH,
});

export default function PostHarvestDefectsHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Post-harvest defects and deterioration, their causes, and diagnostic limits.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Defects"
        title="Post-harvest defects & deterioration"
        lead="Harvested produce is alive and it fails in characteristic ways — bruised, chilled, sprouted, rotted, or eaten. This section documents those failures, what conditions cause them, and — critically — why what you can see is not the same as what you know."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Appearance is a clue, not a diagnosis</h2>
        <p>{DIAGNOSIS_DISCLAIMER}</p>
        <p>
          This matters in both directions. Many disorders look alike: chilling
          injury, freezing injury, and simple senescence can present similarly;
          blue mould and grey mould are routinely confused; an insect exit hole
          and a mechanical puncture are not always distinguishable by eye. And
          some of the most consequential problems are invisible — a lot with no
          visible mould can still carry mycotoxins, and chilling injury often
          only appears once the produce is warmed again, long after the decision
          that caused it.
        </p>
        <p>
          Every entry therefore carries an explicit statement of what visual
          inspection cannot establish, and what confirmation actually requires.
        </p>

        <h2>How defects are grouped</h2>
        <ul>
          <li>
            <strong>Mechanical</strong> — impact, compression, abrasion during
            handling.
          </li>
          <li>
            <strong>Physiological</strong> — the produce&rsquo;s own metabolism
            going wrong (chilling injury, sprouting, scald).
          </li>
          <li>
            <strong>Pathological</strong> — fungal and bacterial decay.
          </li>
          <li>
            <strong>Entomological</strong> — insect feeding and contamination.
          </li>
          <li>
            <strong>Chemical / handling</strong> — heat damage, taint, and
            process-induced faults.
          </li>
        </ul>
        <p>
          See <Link href="/post-harvest">post-harvest operations</Link> for the
          processes that reduce these defects, and{' '}
          <Link href="/quality-attributes">quality attributes</Link> for what is
          measured.
        </p>
      </Prose>

      <EntryGrid
        type="post-harvest-defect"
        path={PATH}
        heading="Defects A–Z"
        intro="Each entry covers what the defect is, the conditions that cause it, the commodities affected, what it is confused with, the processes that reduce it, and the limits of visual diagnosis."
      />

      <SourceList
        references={[
          {
            sourceId: 'usda-ars',
            citedFor: 'Post-harvest disorders and storage research',
          },
          { sourceId: 'fao', citedFor: 'Post-harvest deterioration and loss' },
          { sourceId: 'efsa', citedFor: 'Mycotoxin and food-safety context' },
        ]}
      />
    </Container>
  );
}
