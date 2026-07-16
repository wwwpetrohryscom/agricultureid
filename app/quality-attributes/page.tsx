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

const TITLE = 'Quality Attributes';
const PATH = '/quality-attributes';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Measurable properties of a harvested lot — moisture, test weight, firmness, soluble solids and more — with what each one tells you and what it does not.',
  path: PATH,
});

export default function QualityAttributesHubPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Measurable post-harvest quality attributes and what each does and does not indicate.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Quality"
        title="Post-harvest quality attributes"
        lead="A quality attribute is one measurable property of a harvested lot. No single attribute is “quality” — each answers one question, and reading it as an answer to a different question is the most common and most costly post-harvest mistake."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>One attribute answers one question</h2>
        <p>
          Moisture content tells you whether a lot can be stored safely. It does
          not tell you whether the lot is safe to eat, what grade it will make,
          or how it will mill. Test weight is a grading factor with a long
          history; it is not a measure of protein, soundness, or value on its
          own. Every entry here therefore names the single question its
          attribute answers, and states explicitly what it must{' '}
          <strong>not</strong> be read as.
        </p>
        <p>These are the five questions, and they are genuinely different:</p>
        <dl>
          <dt>
            <strong>Quality measurement</strong>
          </dt>
          <dd>What is this property, physically?</dd>
          <dt>
            <strong>Commercial grading</strong>
          </dt>
          <dd>How will the lot be described and priced under a standard?</dd>
          <dt>
            <strong>Food and feed safety</strong>
          </dt>
          <dd>
            Is it safe to eat or feed? A regulatory question, not a quality one.
          </dd>
          <dt>
            <strong>Storage stability</strong>
          </dt>
          <dd>Will it keep, and for how long, under given conditions?</dd>
          <dt>
            <strong>Processing suitability</strong>
          </dt>
          <dd>Will it perform in a specific process or end use?</dd>
        </dl>

        <h2>No universal thresholds</h2>
        <p>
          Safe and acceptable values are specific to the commodity, the
          measurement basis, the intended storage duration, the climate, and the
          applicable standard or contract. AgricultureID publishes{' '}
          <strong>no universal thresholds</strong>: each entry names the units
          an attribute is expressed in and points to the{' '}
          <Link href="/commodity-grades">standard</Link> or national guidance
          that sets the limits.
        </p>
        <p>
          See <Link href="/quality-measurements">quality measurements</Link> for
          how each attribute is observed, and{' '}
          <Link href="/post-harvest-defects">post-harvest defects</Link> for how
          lots fail.
        </p>
      </Prose>

      <EntryGrid
        type="quality-attribute"
        path={PATH}
        heading="Quality attributes A–Z"
        intro="Each entry covers what the property is, the one question it answers, what it is not an indicator of, the units it is expressed in, and how it is measured."
      />

      <SourceList
        references={[
          { sourceId: 'fao', citedFor: 'Post-harvest quality concepts' },
          { sourceId: 'usda-ars', citedFor: 'Quality measurement research' },
          { sourceId: 'ahdb', citedFor: 'Grain quality and storage guidance' },
        ]}
      />
    </Container>
  );
}
