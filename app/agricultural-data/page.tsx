import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { SourceList } from '@/components/content/SourceList';
import { Container } from '@/components/ui/Container';
import { Prose } from '@/components/ui/Prose';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';

const TITLE = 'Agricultural Data';
const PATH = '/agricultural-data';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'A guide to authoritative agricultural statistics and datasets — FAOSTAT, USDA, and others — and how AgricultureID references primary data rather than republishing it.',
  path: PATH,
});

export default function AgriculturalDataPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'A guide to authoritative agricultural statistics and how AgricultureID references them.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Data"
        title="Agricultural data"
        lead="Agricultural statistics — on production, area, yield, trade, and more — are compiled by national and international bodies. This page explains the main sources and how AgricultureID uses them."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />

      <Prose>
        <h2>Where authoritative data comes from</h2>
        <p>
          Reliable agricultural statistics are produced by official statistical
          agencies and intergovernmental organizations, each with defined
          methods and update cycles.
        </p>
        <ul>
          <li>
            <strong>FAOSTAT</strong> — the FAO’s global database of production,
            trade, and food-balance statistics by country and commodity.
          </li>
          <li>
            <strong>USDA statistics</strong> — including the National
            Agricultural Statistics Service (NASS), the Economic Research
            Service (ERS), and the Foreign Agricultural Service (FAS).
          </li>
          <li>
            <strong>Regional bodies</strong> — such as the European Commission’s
            agricultural statistics for the EU.
          </li>
        </ul>

        <h2>How AgricultureID uses data</h2>
        <p>
          Agricultural figures change every season with weather, markets, and
          policy. Rather than republishing specific numbers that quickly become
          outdated — or presenting them without context — AgricultureID links to
          the primary datasets so readers can consult current, authoritative
          values directly. Where we describe scale (for example, that a crop is
          “widely grown”), we do so qualitatively and cite the source.
        </p>

        <h2>Using statistics carefully</h2>
        <p>
          Definitions, coverage, and methods differ between datasets, so figures
          are not always directly comparable across sources or years. Always
          check the notes and methodology that accompany a dataset. Our{' '}
          <Link href="/methodology">sources &amp; methodology</Link> page
          explains how we treat derived and quantitative claims.
        </p>
      </Prose>

      <SourceList
        references={[
          { sourceId: 'faostat', citedFor: 'Global agricultural statistics' },
          { sourceId: 'usda-nass', citedFor: 'U.S. agricultural statistics' },
          {
            sourceId: 'usda-ers',
            citedFor: 'Agricultural economic data and analysis',
          },
          { sourceId: 'ec-agri', citedFor: 'EU agricultural data context' },
        ]}
      />
    </Container>
  );
}
