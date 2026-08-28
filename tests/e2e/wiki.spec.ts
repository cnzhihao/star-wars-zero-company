import { expect, test } from '@playwright/test';

test.describe('Zero Company field manual', () => {
  test('renders the player-first home in template mode', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('header nav')).toBeVisible();
    await expect(page.locator('main h1')).toHaveText(/Command the next move/);
    await expect(page.locator('a[href="/wiki"]')).toHaveCount(3);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new URL('/', page.url()).toString()
    );
    await expect(page.locator('link[hreflang="zh-CN"]')).toHaveCount(0);
    await expect(page.locator('footer')).toBeVisible();
  });

  test('browses Wiki categories and a source-aware entry', async ({ page }) => {
    await page.goto('/wiki');
    await expect(page.locator('main h1')).toHaveText('Wiki');
    await expect(page.locator('h2#categories-heading')).toBeVisible();
    await expect(page.locator('a[href="/wiki/briefing"]')).toBeVisible();
    await page.locator('a[href="/wiki/briefing"]').first().click();
    await expect(page).toHaveURL(/\/wiki\/briefing$/);
    await expect(page.locator('main h1')).toHaveText('Briefing');
    await page.locator('a[href="/wiki/briefing/game-overview"]').click();
    await expect(page).toHaveURL(/\/wiki\/briefing\/game-overview$/);
    await expect(page.locator('main h1')).toHaveText(
      'Star Wars Zero Company: Game Overview'
    );
    await expect(page.getByText('Short answer', { exact: true })).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'What the game focuses on' })
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
  });

  test('uses a custom Guide path and keeps the old data path redirected', async ({
    page,
  }) => {
    await page.goto('/guides');
    await expect(page.locator('main h1')).toHaveText('Guides');
    await page.locator('a[href="/guides/beginner"]').click();
    await expect(page).toHaveURL(/\/guides\/beginner$/);
    await expect(page.locator('main h1')).toHaveText(
      'Star Wars Zero Company Beginner Guide'
    );

    const response = await page.goto('/wiki/briefing/beginner-guide');
    expect(response?.status()).toBe(200);
    await expect(page).toHaveURL(/\/guides\/beginner$/);
  });

  test('shows timestamped YouTube visual evidence on research guides', async ({
    page,
  }) => {
    await page.goto('/guides/beginner');
    const loadout = page.locator(
      'img[src="/assets/zero-company-official-loadout-01-00.png"]'
    );
    await expect(loadout).toBeVisible();
    await expect
      .poll(() =>
        loadout.evaluate((image) => (image as HTMLImageElement).naturalWidth)
      )
      .toBeGreaterThan(0);
    await expect(
      page.getByRole('link', {
        name: 'Open EA Star Wars official gameplay trailer at 01:00 ↗',
      })
    ).toBeVisible();

    await page.goto('/guides/map');
    const map = page.locator(
      'img[src="/assets/zero-company-community-galactic-map-34-54.png"]'
    );
    await expect(map).toBeVisible();
    await expect
      .poll(() =>
        map.evaluate((image) => (image as HTMLImageElement).naturalWidth)
      )
      .toBeGreaterThan(0);
    await expect(
      page.getByRole('link', {
        name: 'Open Dantics community guide at 34:54 ↗',
      })
    ).toBeVisible();
  });

  test('returns 404 for an unknown Wiki page', async ({ page }) => {
    const response = await page.goto('/wiki/missing/no-such-page');
    expect(response?.status()).toBe(404);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow'
    );
  });

  test('keeps template machine endpoints closed', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain('Disallow: /');

    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.ok()).toBe(true);
    const sitemapXml = await sitemap.text();
    expect(sitemapXml).toContain('<urlset');
    expect(sitemapXml).not.toContain('<loc>');

    const manifest = await request.get('/manifest.webmanifest');
    expect(manifest.ok()).toBe(true);
    expect(manifest.headers()['content-type']).toContain(
      'application/manifest+json'
    );
    const manifestJson = await manifest.json();
    expect(manifestJson.name).toBe('Star Wars Zero Company Wiki');
    expect(manifestJson.start_url).toBe('/');
  });

  test('switches and persists theme', async ({ page }) => {
    await page.goto('/');
    const theme = page.locator('[data-slot="theme-switcher-trigger"]');
    await theme.click();
    await page.locator('[data-theme-option="light"]').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await theme.click();
    await page.locator('[data-theme-option="dark"]').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('keeps the Wiki usable at a narrow mobile width', async ({ page }) => {
    test.skip(test.info().project.name !== 'mobile', 'mobile project only');
    await page.setViewportSize({ width: 320, height: 700 });
    await page.goto('/wiki');
    await expect
      .poll(() =>
        page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth
        )
      )
      .toBe(true);
    const menuButton = page.locator(
      'button[aria-controls="mobile-navigation"]'
    );
    await expect(menuButton).toBeVisible();
    await menuButton.click();
    await expect(page.locator('#mobile-navigation')).toBeVisible();
  });
});
