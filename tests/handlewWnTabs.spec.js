import { test, expect } from '@playwright/test';

test('Handle Tabs', async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//h2[text()='Connect with us']/following-sibling::div[@class='social-btns']/a[contains(@href,'facebook.com')]").click()
    ]);
    await newpage.waitForLoadState()

    await newpage.locator("//input[@type='text']").fill("King Prajot");

});