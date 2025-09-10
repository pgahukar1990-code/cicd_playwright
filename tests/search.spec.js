import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1756683470869&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.getByText('documentation', { exact: true }).click();
  await page.locator('iframe[name="a-sk7tg78qwhk"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-sk7tg78qwhk"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-sk7tg78qwhk"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-sk7tg78qwhk"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-sk7tg78qwhk"]').contentFrame().locator('div').filter({ hasText: /^Verify$/ }).nth(2).click();
  await page.locator('iframe[name="c-sk7tg78qwhk"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
});