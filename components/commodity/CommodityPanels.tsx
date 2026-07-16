import Link from 'next/link';
import { contentUrlPath } from '@/lib/content/registry';
import {
  commoditiesForCrop,
  commoditiesForLivestock,
  productsForCommodity,
  gradesForCommodity,
} from '@/lib/commodity/registry';
import type { AnyContent, CommodityContent } from '@/types/content';

interface Entry {
  slug: string;
  title: string;
  summary: string;
  href: string;
}

function LinkCards({ items }: { items: Entry[] }) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map((c) => (
        <li key={c.href}>
          <Link
            href={c.href}
            className="block rounded-card border border-ink-100 bg-white p-4 transition hover:border-olive-300 hover:shadow-sm"
          >
            <span className="font-semibold text-forest-950">{c.title}</span>
            <span className="mt-0.5 block text-sm leading-6 text-ink-600">
              {c.summary}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Panel({
  id,
  heading,
  intro,
  items,
}: {
  id: string;
  heading: string;
  intro: string;
  items: Entry[];
}) {
  if (items.length === 0) return null;
  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="font-serif text-2xl font-bold text-ink-900"
      >
        {heading}
      </h2>
      <p className="mt-1 text-sm text-ink-500">{intro}</p>
      <LinkCards items={items} />
    </section>
  );
}

const toEntry = (c: AnyContent): Entry => ({
  slug: c.slug,
  title: c.title,
  summary: c.summary,
  href: contentUrlPath(c),
});

/**
 * "Harvested commodities" panel for a crop or livestock page. This is the
 * rendered bridge from the biological entity to the traded commodity — the crop
 * page never claims to produce products directly; it links the commodities, and
 * each commodity links its own products.
 */
export function HarvestedCommodities({ item }: { item: AnyContent }) {
  const commodities =
    item.contentType === 'crop'
      ? commoditiesForCrop(item.slug)
      : item.contentType === 'livestock'
        ? commoditiesForLivestock(item.slug)
        : [];
  return (
    <Panel
      id="harvested-commodities"
      heading="Harvested commodities"
      intro={
        item.contentType === 'crop'
          ? 'The traded commodities harvested from this crop. A commodity is the harvested lot, described by its own quality, grading, and storage evidence — not by the agronomy of the plant.'
          : 'The traded commodities obtained from this species, described by their own quality, grading, and handling evidence.'
      }
      items={commodities.map(toEntry)}
    />
  );
}

/**
 * Product / co-product / by-product and grading panels for a commodity page.
 * Each is omitted when empty — no shell headings.
 */
export function CommodityPathways({ item }: { item: CommodityContent }) {
  const primary = productsForCommodity(item.slug, 'primary-product');
  const co = productsForCommodity(item.slug, 'co-product');
  const by = productsForCommodity(item.slug, 'by-product');
  const grades = gradesForCommodity(item.slug);

  return (
    <>
      <Panel
        id="primary-products"
        heading="Primary products"
        intro="The main intended outputs of transforming this commodity."
        items={primary.map(toEntry)}
      />
      <Panel
        id="co-products"
        heading="Co-products"
        intro="Valuable outputs produced at the same time and inseparably from the primary product — not waste."
        items={co.map(toEntry)}
      />
      <Panel
        id="by-products"
        heading="By-products"
        intro="Residual outputs of lower value that the process is not run to produce, many of which still have feed, fibre, or energy uses."
        items={by.map(toEntry)}
      />
      <Panel
        id="grading-standards"
        heading="Grading standards"
        intro="Published standards under which this commodity is graded. Each summary names its issuing body, jurisdiction, and edition — AgricultureID does not grade or inspect."
        items={grades.map(toEntry)}
      />
    </>
  );
}
