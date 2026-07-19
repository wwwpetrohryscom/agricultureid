import { test, expect, type Page, type Request } from '@playwright/test';

/**
 * Browser-level proof that WebmasterID is never requested before an explicit
 * analytics opt-in, and is fully absent again after withdrawal.
 *
 * NOT part of the default CI gate (it needs a browser). Run locally with:
 *   npm i -D @playwright/test && npx playwright install chromium
 *   npm run test:e2e
 *
 * The tracker script and ingest endpoint are STUBBED (route.fulfill) so the test
 * never sends real analytics traffic to the vendor; we still observe the
 * *requests*, which is what proves the consent gate.
 */

const TRACKER_RE = /webmasterid\.com\/tracker\.iife\.min\.js/;
const INGEST_RE = /webmasterid-ingest-api\.vercel\.app/;

function watch(page: Page) {
  const tracker: string[] = [];
  const ingest: string[] = [];
  const onReq = (r: Request) => {
    const u = r.url();
    if (TRACKER_RE.test(u)) tracker.push(u);
    if (INGEST_RE.test(u)) ingest.push(u);
  };
  page.on('request', onReq);
  return { tracker, ingest };
}

test.beforeEach(async ({ page }) => {
  // Stub vendor endpoints so no real analytics traffic leaves the browser.
  await page.route(TRACKER_RE, (route) =>
    route.fulfill({ contentType: 'application/javascript', body: '' }),
  );
  await page.route(INGEST_RE, (route) =>
    route.fulfill({ status: 204, body: '' }),
  );
});

test('no tracker before consent; rejecting keeps it absent across navigation', async ({
  page,
}) => {
  const seen = watch(page);
  await page.goto('/');
  await expect(
    page.getByRole('button', { name: 'Reject analytics' }),
  ).toBeVisible();
  // Nothing requested yet.
  expect(seen.tracker, 'no tracker before a choice').toHaveLength(0);
  expect(seen.ingest, 'no ingest before a choice').toHaveLength(0);

  await page.getByRole('button', { name: 'Reject analytics' }).click();
  for (const path of ['/crops', '/tools', '/commodities']) {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
  }
  expect(seen.tracker, 'tracker stays absent after reject').toHaveLength(0);
  expect(seen.ingest, 'ingest stays absent after reject').toHaveLength(0);
});

test('accepting loads exactly one tracker; client-side navigation does not duplicate it', async ({
  page,
}) => {
  const seen = watch(page);
  await page.goto('/');
  await page.getByRole('button', { name: 'Accept analytics' }).click();
  await page.waitForLoadState('networkidle');
  expect(seen.tracker.length, 'one tracker request after accept').toBe(1);

  // Client-side (SPA) navigation via in-app links: the root layout — and the
  // injected tracker — persist, so the script must NOT be re-requested. (A full
  // page load legitimately re-injects once; that is a different path.)
  await page.getByRole('link', { name: 'Crops', exact: true }).first().click();
  await page.waitForURL('**/crops');
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Soils', exact: true }).first().click();
  await page.waitForURL('**/soils');
  await page.waitForLoadState('networkidle');

  expect(
    seen.tracker.length,
    'no duplicate tracker after client-side navigation',
  ).toBe(1);
  await expect(page.locator('#webmasterid-tracker')).toHaveCount(1);
});

test('withdrawing analytics removes the tracker and blocks further requests', async ({
  page,
}) => {
  const seen = watch(page);
  await page.goto('/');
  await page.getByRole('button', { name: 'Accept analytics' }).click();
  await page.waitForLoadState('networkidle');
  expect(seen.tracker.length).toBe(1);

  // Reopen settings from the footer, turn analytics off, save (triggers reload).
  await page.getByRole('button', { name: 'Privacy settings' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  const toggle = page.getByLabel('Analytics', { exact: true });
  await expect(toggle).toBeChecked(); // reflects the accepted state
  await toggle.uncheck();
  await expect(toggle).not.toBeChecked(); // wait for React to commit before saving
  const countBeforeSave = seen.tracker.length;
  await page.getByRole('button', { name: 'Save preferences' }).click();
  await page.waitForLoadState('networkidle');

  // After withdrawal + reload, the tracker must not be present or re-requested.
  await expect(page.locator('#webmasterid-tracker')).toHaveCount(0);
  for (const path of ['/soils', '/pests']) {
    await page.goto(path);
    await page.waitForLoadState('networkidle');
  }
  expect(seen.tracker.length, 'no new tracker requests after withdrawal').toBe(
    countBeforeSave,
  );
});
