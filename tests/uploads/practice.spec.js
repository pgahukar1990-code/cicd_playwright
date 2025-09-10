const{test,expect}=require('playwright/test')
test("Dropdown Flow",async({page})=>{
await page.goto("https://freelance-learn-automation.vercel.app/signup");
await page.waitForTimeout(3000);
await page.locator("#state").selectOption("Maharashtra");
await page.waitForTimeout(3000);
const allStates=await page.locator("#state").textContent();
console.log("Total States: "+allStates);
await page.locator("#state").selectOption({label:"Manipur"});
await expect(allStates.includes("Manipur")).toBeTruthy();
await page.waitForTimeout(3000);



});

