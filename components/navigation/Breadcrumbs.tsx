import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema/jsonld';
import type { Crumb } from '@/lib/seo/breadcrumbs';

interface BreadcrumbsProps {
  items: Crumb[];
  /** Emit BreadcrumbList JSON-LD alongside the visual trail. */
  withSchema?: boolean;
}

/** Accessible breadcrumb trail with optional matching structured data. */
export function Breadcrumbs({ items, withSchema = true }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-ink-500">
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-x-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-ink-300">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-ink-700">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="rounded hover:text-forest-700 hover:underline"
                >
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      {withSchema && <JsonLd data={breadcrumbSchema(items)} />}
    </nav>
  );
}
