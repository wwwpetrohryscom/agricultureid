import { absoluteUrl } from '@/lib/seo/metadata';
import type { Crumb } from '@/lib/seo/breadcrumbs';
import { SITE } from '@/lib/site';
import type { AnyContent, GlossaryTerm } from '@/types/content';

/**
 * schema.org JSON-LD builders.
 *
 * We only emit schema that the visible page genuinely supports:
 *  - Organization + WebSite (site identity, homepage)
 *  - WebPage + BreadcrumbList (every page)
 *  - Article (encyclopedic reference entries that opt in)
 *  - DefinedTerm (glossary entries)
 *  - ItemList (category index pages)
 *
 * No FAQPage, HowTo, Review, Product, Dataset, ratings, or fabricated authors.
 */

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    logo: absoluteUrl('/icon.svg'),
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'en',
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function webPageSchema(options: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
    inLanguage: 'en',
  };
}

/**
 * Article node for a content entry. Uses the organization as author and
 * publisher — we do not fabricate individual author credentials.
 */
export function articleSchema(item: AnyContent, path: string): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.summary,
    url: absoluteUrl(path),
    inLanguage: 'en',
    dateModified: item.updatedAt,
    ...(item.reviewedAt ? { datePublished: item.reviewedAt } : {}),
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/icon.svg'),
      },
    },
    isAccessibleForFree: true,
  };
}

export function definedTermSchema(term: GlossaryTerm): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: `${SITE.name} Glossary`,
      url: absoluteUrl('/glossary'),
    },
  };
}

export function itemListSchema(options: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: options.name,
    url: absoluteUrl(options.path),
    numberOfItems: options.items.length,
    itemListElement: options.items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      url: absoluteUrl(entry.path),
    })),
  };
}
