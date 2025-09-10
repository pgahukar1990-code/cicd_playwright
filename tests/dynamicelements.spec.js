const { test, expect } = require('@playwright/test');

test("Dynamic Elements Test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@title='Search']").fill("Playwright");
    await page.waitForTimeout(2000)
    await page.waitForSelector("//li[@role='presentation']")
    const elements = await page.$$("//li[@role='presentation']")
    for (let i = 0; i < elements.length; i++) {
        const text = await elements[i].textContent()
        await page.waitForTimeout(2000)
        if (text.includes("python")) {
            await elements[i].click();
            break

        }
    }


});
