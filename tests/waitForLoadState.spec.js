import { test, expect } from '@playwright/test';

test('Wait for Load State Example', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    //await page.waitForLoadState('networkidle');
    await page.getByText("New user? Signup").click();
    await page.waitForLoadState('networkidle');
    const count= await page.locator("//input[@type='checkbox']").count();
    expect(count).toBe(6);

});
