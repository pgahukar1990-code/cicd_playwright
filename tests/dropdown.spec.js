const { test, expect } = require('@playwright/test');
test("Dropdown Practice",async({page}) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");
  await page.locator("#state").selectOption({index:2});
  await page.waitForTimeout(3000);
  await page.locator("#state").selectOption({value:"Maharashtra"});
  await page.waitForTimeout(3000);
  await page.locator("#state").selectOption({label:"Tamil Nadu"});
  await page.waitForTimeout(3000);
  const allStates=await page.locator("#state").textContent();
  console.log("All States: "+allStates);
  await expect(allStates.includes("Maharashtra")).toBeTruthy();
  await expect(allStates.includes("Tamil Nadu")).toBeTruthy();

  await page.locator("#hobbies").selectOption(['Playing', 'Reading']);
  await page.waitForTimeout(3000);
  
});