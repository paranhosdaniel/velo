import { test, expect } from '@playwright/test';

test('The WebApp should be online', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page).toHaveTitle(/Velô by Papito/);
});
