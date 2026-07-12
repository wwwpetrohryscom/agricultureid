import {
  CONTENT_TYPE_LABEL_PLURAL,
  CONTENT_TYPE_ROUTE,
  type ContentType,
} from '@/lib/site';

/** A single breadcrumb node. `path` is site-relative. */
export interface Crumb {
  name: string;
  path: string;
}

/** Breadcrumb trail for a structured content page. */
export function contentBreadcrumbs(
  type: ContentType,
  title: string,
  slug: string,
): Crumb[] {
  return [
    { name: 'Home', path: '/' },
    {
      name: CONTENT_TYPE_LABEL_PLURAL[type],
      path: `/${CONTENT_TYPE_ROUTE[type]}`,
    },
    { name: title, path: `/${CONTENT_TYPE_ROUTE[type]}/${slug}` },
  ];
}

/** Breadcrumb trail for a top-level hub or standalone page. */
export function pageBreadcrumbs(name: string, path: string): Crumb[] {
  return [
    { name: 'Home', path: '/' },
    { name, path },
  ];
}
