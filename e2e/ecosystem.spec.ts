import { test, expect, type Page } from '@playwright/test';

/**
 * Real-browser QA for the HELPERG ecosystem bar.
 *
 * Covers what jsdom cannot: native <details>/<summary> activation, sticky
 * positioning under scroll, geometric overlap with the site header, and
 * horizontal overflow at the viewport widths named in the brief.
 */

const VIEWPORTS = [
  { name: '320', width: 320, height: 720 },
  { name: '375', width: 375, height: 812 },
  { name: '430', width: 430, height: 932 },
  { name: '768', width: 768, height: 1024 },
  { name: '1024', width: 1024, height: 768 },
  { name: '1440', width: 1440, height: 900 },
];

const bar = (page: Page) => page.locator('nav[data-ecosystem-bar]');
const header = (page: Page) => page.locator('header').first();

test.describe('ecosystem bar — responsive geometry', () => {
  for (const vp of VIEWPORTS) {
    test(`${vp.name}px: visible, sticky, no overlap, no horizontal overflow`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/crops/wheat');

      const b = bar(page);
      await expect(b).toBeVisible();

      // 1. The bar sits at the very top and the header directly beneath it.
      const barBox = (await b.boundingBox())!;
      const headerBox = (await header(page).boundingBox())!;
      expect(barBox.y).toBeLessThanOrEqual(1);
      expect(Math.round(headerBox.y)).toBeGreaterThanOrEqual(
        Math.round(barBox.y + barBox.height) - 1,
      );

      // 2. No horizontal overflow anywhere on the page.
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);

      // 3. Still pinned to the top after scrolling far down.
      //    `scroll-behavior: smooth` is set globally, so scroll with
      //    behaviour 'instant' and then wait for the position to settle —
      //    otherwise the measurement races the animation.
      await page.evaluate(() =>
        window.scrollTo({ top: 2000, behavior: 'instant' as ScrollBehavior }),
      );
      await page.waitForFunction(() => window.scrollY >= 1990);
      const scrolledBox = (await b.boundingBox())!;
      expect(scrolledBox.y).toBeLessThanOrEqual(1);
      await expect(b).toBeVisible();

      // 4. The bar never covers the main content's first heading.
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }),
      );
      await page.waitForFunction(() => window.scrollY === 0);
      const h1 = page.locator('main h1').first();
      if (await h1.count()) {
        const h1Box = (await h1.boundingBox())!;
        expect(h1Box.y).toBeGreaterThan(barBox.y + barBox.height - 1);
      }
    });
  }
});

test.describe('ecosystem bar — keyboard and disclosure', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
  });

  test('Enter opens the Projects panel; Escape closes it and restores focus', async ({
    page,
  }) => {
    const projects = page.locator('details[data-ecosystem-panel]').first();
    const summary = projects.locator('summary');

    await expect(projects).not.toHaveAttribute('open', /.*/);

    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(projects).toHaveAttribute('open', /.*/);
    await expect(page.locator('#ecosystem-projects-panel')).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(projects).not.toHaveAttribute('open', /.*/);
    await expect(summary).toBeFocused();
  });

  test('opening Apps closes Projects', async ({ page }) => {
    const [projects, apps] = [
      page.locator('details[data-ecosystem-panel]').nth(0),
      page.locator('details[data-ecosystem-panel]').nth(1),
    ];
    await projects.locator('summary').click();
    await expect(projects).toHaveAttribute('open', /.*/);

    await apps.locator('summary').click();
    await expect(apps).toHaveAttribute('open', /.*/);
    await expect(projects).not.toHaveAttribute('open', /.*/);
  });

  test('clicking outside closes the open panel', async ({ page }) => {
    const projects = page.locator('details[data-ecosystem-panel]').first();
    await projects.locator('summary').click();
    await expect(projects).toHaveAttribute('open', /.*/);

    await page.locator('main').click({ position: { x: 10, y: 10 } });
    await expect(projects).not.toHaveAttribute('open', /.*/);
  });

  test('the trigger is reachable by keyboard from the top of the page', async ({
    page,
  }) => {
    // Skip link is first; the ecosystem triggers must come before site nav.
    await page.keyboard.press('Tab'); // skip link
    await page.keyboard.press('Tab'); // Projects
    const focused = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      return { tag: el?.tagName, text: el?.textContent?.trim() };
    });
    expect(focused.tag).toBe('SUMMARY');
    expect(focused.text).toContain('Projects');
  });
});

test.describe('ecosystem bar — content and coexistence', () => {
  test('renders 18 project links and 14 store links, with AgricultureID current', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const projectLinks = page.locator('#ecosystem-projects-panel a');
    await expect(projectLinks).toHaveCount(18);

    const storeLinks = page.locator('#ecosystem-apps-panel a');
    await expect(storeLinks).toHaveCount(14);

    const self = page.locator(
      '#ecosystem-projects-panel a[href="https://agricultureid.com"]',
    );
    await expect(self).toHaveAttribute('aria-current', 'page');
    await expect(self).toContainText('Current');
  });

  test('coexists with the consent banner without covering it', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const banner = page.getByRole('region', {
      name: /consent|cookie|privacy/i,
    });
    const barBox = (await bar(page).boundingBox())!;
    if (await banner.count()) {
      const bannerBox = await banner.first().boundingBox();
      if (bannerBox) {
        // Banner is bottom-anchored; the top bar must not intersect it.
        expect(bannerBox.y).toBeGreaterThan(barBox.y + barBox.height);
      }
    }
    await expect(bar(page)).toBeVisible();
  });
});

test.describe('ecosystem bar — screenshots', () => {
  for (const vp of [VIEWPORTS[0], VIEWPORTS[5]]) {
    test(`capture ${vp!.name}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width: vp!.width, height: vp!.height });
      await page.goto('/');
      await page.waitForTimeout(300);
      await testInfo.attach(`closed-${vp!.name}`, {
        body: await page.screenshot(),
        contentType: 'image/png',
      });
      await page
        .locator('details[data-ecosystem-panel]')
        .first()
        .locator('summary')
        .click();
      await page.waitForTimeout(300);
      await testInfo.attach(`projects-open-${vp!.name}`, {
        body: await page.screenshot(),
        contentType: 'image/png',
      });
    });
  }
});
