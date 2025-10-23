import { test, expect } from '@playwright/test';

// Configure this test to run only on Chrome
test.use({ 
  browserName: 'chromium' // Chromium is the engine behind Chrome in Playwright
});

test.describe('Ford.com Accessibility Tests', () => {
  test('should navigate to Ford.com and verify it is accessible', async ({ page }) => {
    // Navigate to Ford website
    await page.goto('https://www.ford.com');

    // Wait for the page to load
    await page.waitForLoadState('networkidle');

    // Verify the page loaded successfully by checking the title
    await expect(page).toHaveTitle(/Ford/i);

    // Verify the page is accessible by checking if we can find the Ford logo or main content
    // This will fail if the site is not accessible
    const isPageLoaded = await page.locator('body').isVisible();
    expect(isPageLoaded).toBe(true);

    // Optional: Take a screenshot to verify visual loading
    await page.screenshot({ path: 'ford-homepage.png' });

    console.log('Ford.com is accessible and loaded successfully');
  });
});