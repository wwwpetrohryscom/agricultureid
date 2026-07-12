import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { SITE } from '@/lib/site';

const TITLE = 'About AgricultureID';
const PATH = '/about';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'AgricultureID is an independent, evidence-based reference platform for global agriculture — crops, soils, diseases, pests, livestock, and systems.',
  path: PATH,
});

export default function AboutPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'About AgricultureID, an independent evidence-based agriculture reference.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="About"
        title="About AgricultureID"
        lead="AgricultureID is a structured, evidence-based reference for global agriculture. Our aim is to make reliable agricultural knowledge easy to find, easy to trust, and clearly sourced."
        crumbs={pageBreadcrumbs('About', PATH)}
      />

      <Prose>
        <h2>What AgricultureID is</h2>
        <p>
          AgricultureID is an independent knowledge platform covering crops,
          soils, plant diseases, pests, livestock, and the systems that connect
          them. It is designed to feel like a professional agricultural
          reference and structured data resource rather than a general blog:
          every entry follows a consistent model, cites authoritative sources,
          and states its geographic scope and limitations.
        </p>
        <p>
          The platform positions itself as a “Global Agriculture Knowledge and
          Intelligence” resource. That is a description of our purpose and
          method — not a claim of completeness. AgricultureID is at an early
          stage, and our initial library is a deliberately focused launch set
          that we intend to expand carefully over time.
        </p>

        <h2>Who it is for</h2>
        <ul>
          <li>
            Farmers and growers looking for reliable background information
          </li>
          <li>Agronomists and advisers who need a consistent reference</li>
          <li>Researchers and students seeking sourced overviews</li>
          <li>Agricultural businesses and anyone learning about agriculture</li>
        </ul>

        <h2>How we work</h2>
        <p>
          Our content is built on published, authoritative sources — such as
          FAO, USDA and its agencies, the European Commission, official
          plant-protection and animal-health bodies, research institutes, and
          university extension services. We explain how sources are chosen in
          our <Link href="/methodology">sources &amp; methodology</Link>, and we
          publish an <Link href="/editorial-policy">editorial policy</Link> and
          a <Link href="/corrections">corrections process</Link>.
        </p>

        <h2>What we do not do</h2>
        <p>
          We do not exaggerate our authority, audience, or coverage; invent
          statistics, institutions, reviewers, or partnerships; or present
          region-specific advice as if it were universal. General educational
          information here is not a substitute for local, professional, or
          regulatory guidance — see our{' '}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, corrections, and feedback are welcome at{' '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>. See
          our <Link href="/contact">contact page</Link> for details.
        </p>
      </Prose>
    </Container>
  );
}
