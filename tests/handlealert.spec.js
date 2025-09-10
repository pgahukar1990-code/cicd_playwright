const { test, expect } = require('@playwright/test')
test("Handle Alert Test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //  await page.locator("//button[text()='Click for JS Alert']").click()
    // Set up dialog handler specifically for the "JS Confirm" dialog
    page.on("dialog", async (confirmdialog) => {
        await expect(confirmdialog.message()).toContain("I am a JS Confirm");
        await expect(confirmdialog.type()).toBe("confirm");

        await confirmdialog.dismiss();
    });
    await page.locator("//button[text()='Click for JS Confirm']").click()

});

test("Handle Alert Prompt Test", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //  await page.locator("//button[text()='Click for JS Alert']").click()
    // Set up dialog handler specifically for the "JS Confirm" dialog
    page.on("dialog", async (Prompt) => {
        await expect(Prompt.message()).toContain("I am a JS prompt");
        await expect(Prompt.type()).toBe("prompt");
        await Prompt.accept("King Prajot")

    });
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout(3000);

});