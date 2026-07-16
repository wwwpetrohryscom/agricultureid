import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { CalculatorClient } from '@/components/tools/CalculatorClient';
import { FormulaPanel } from '@/components/tools/FormulaPanel';
import { ToolDisclaimer } from '@/components/tools/ToolDisclaimer';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata, absoluteUrl } from '@/lib/seo/metadata';
import { TOOLS, TOOL_BY_SLUG } from '@/lib/tools/tools';

type Params = { params: Promise<{ tool: string }> };

export function generateStaticParams() {
  return TOOLS.map((t) => ({ tool: t.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tool } = await params;
  const t = TOOL_BY_SLUG.get(tool);
  if (!t) return {};
  return buildMetadata({
    title: t.title,
    description: t.purpose.slice(0, 160),
    path: `/tools/${t.slug}`,
  });
}

export default async function ToolPage({ params }: Params) {
  const { tool } = await params;
  const t = TOOL_BY_SLUG.get(tool);
  if (!t) notFound();
  const path = `/tools/${t.slug}`;

  // A genuine interactive tool → WebApplication is appropriate (not HowTo).
  //
  // No `offers`. An Offer describes something for sale, and these calculators
  // are not a product being offered — emitting a zero-price Offer to satisfy a
  // rich-result checklist would describe the page as something it is not.
  // `isAccessibleForFree` already carries the only fact an Offer would have.
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t.title,
    description: t.purpose,
    url: absoluteUrl(path),
    applicationCategory: 'Agricultural calculator',
    operatingSystem: 'Any (web browser)',
    isAccessibleForFree: true,
  };

  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={[
          webPageSchema({ name: t.title, description: t.purpose, path }),
          appSchema,
        ]}
      />
      <Breadcrumbs
        items={[...pageBreadcrumbs('Tools', '/tools'), { name: t.title, path }]}
      />
      <header className="mt-6 border-b border-ink-100 pb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-olive-700">
          Calculator · {t.category}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold text-forest-950 sm:text-4xl">
          {t.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-ink-700">
          {t.purpose}
        </p>
      </header>

      <CalculatorClient slug={t.slug} />

      <FormulaPanel formulaIds={t.formulaIds} />

      {t.limitations && t.limitations.length > 0 && (
        <section className="mt-8" aria-labelledby="tool-lim-h">
          <h2
            id="tool-lim-h"
            className="font-serif text-lg font-bold text-ink-900"
          >
            About this tool
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-ink-700">
            {t.limitations.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </section>
      )}

      <ToolDisclaimer safetyDisclosure={t.safetyDisclosure} />
    </Container>
  );
}
