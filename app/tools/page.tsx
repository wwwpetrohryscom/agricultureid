import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/content/PageIntro';
import { Container } from '@/components/ui/Container';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema/jsonld';
import { pageBreadcrumbs } from '@/lib/seo/breadcrumbs';
import { buildMetadata } from '@/lib/seo/metadata';
import { TOOLS } from '@/lib/tools/tools';

const TITLE = 'Tools & calculators';
const PATH = '/tools';

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description:
    'Transparent agricultural calculators grounded in a versioned formula registry — fertilizer nutrients, seed rate, plant density, irrigation volume, growing degree-days, yield, and unit conversions. Every formula, assumption, and source is shown.',
  path: PATH,
});

const CATEGORY_LABEL: Record<string, string> = {
  nutrition: 'Nutrition',
  planting: 'Planting',
  water: 'Water',
  climate: 'Climate',
  conversion: 'Conversions',
  commodity: 'Commodity',
  'post-harvest': 'Post-harvest',
  storage: 'Storage',
  processing: 'Processing',
  trade: 'Trade',
};

/**
 * Categories are DERIVED from the tools, in first-appearance order, so the hub
 * cannot list fewer categories than exist. It previously hard-coded five; Phase
 * 5E added five more (11 tools), and the missing categories orphaned every one
 * of those tools — the /tools hub listed 7 of 18. A real HTML crawl found it. A
 * derived list has nothing to forget.
 */
const CATEGORIES: { key: string; label: string }[] = (() => {
  const seen: string[] = [];
  for (const t of TOOLS) if (!seen.includes(t.category)) seen.push(t.category);
  return seen.map((key) => ({ key, label: CATEGORY_LABEL[key] ?? key }));
})();

export default function ToolsPage() {
  return (
    <Container className="py-8 lg:py-10">
      <JsonLd
        data={webPageSchema({
          name: TITLE,
          description:
            'Transparent agricultural calculators grounded in a versioned formula registry.',
          path: PATH,
        })}
      />
      <PageIntro
        eyebrow="Tools"
        title={TITLE}
        lead="Educational calculators built on a versioned formula registry. Each tool shows its formula, assumptions, limitations, and sources, and produces sensible significant digits — never fake precision. Results are references, not prescriptions."
        crumbs={pageBreadcrumbs(TITLE, PATH)}
      />
      <div className="mt-8 space-y-8">
        {CATEGORIES.map((cat) => {
          const tools = TOOLS.filter((t) => t.category === cat.key);
          if (tools.length === 0) return null;
          return (
            <section key={cat.key} aria-labelledby={`c-${cat.key}`}>
              <h2
                id={`c-${cat.key}`}
                className="text-sm font-semibold uppercase tracking-wide text-olive-700"
              >
                {cat.label}
              </h2>
              <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {tools.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/tools/${t.slug}`}
                      className="block h-full rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
                    >
                      <span className="font-semibold text-forest-950">
                        {t.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-ink-600">
                        {t.purpose}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Container>
  );
}
