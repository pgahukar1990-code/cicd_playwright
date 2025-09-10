const { test, expect } = require('@playwright/test');
test("Key Board Event Test", async ({ page }) => {
    await page.goto("https://www.google.co.in/");
    // await page.locator("[name='q']").fill("Prajot Gahukar")
    // await page.waitForTimeout(2000);
    // await page.keyboard.press("Control+A")
    // await page.waitForTimeout(2000);
    // await page.keyboard.press("Control+C")
    // await page.waitForTimeout(2000);
    // await page.locator("[name='q']").fill("")
    // await page.waitForTimeout(2000);
    // await page.keyboard.press("Control+V")
    // await page.keyboard.press("Enter")
    await page.locator("[name='q']").click();
    await page.waitForTimeout(2000);
    await page.locator("[name='q']").fill("Prajot Gahukar");
    await page.waitForTimeout(2000);

});