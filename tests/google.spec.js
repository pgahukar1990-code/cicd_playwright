const { expect,test } = require("@playwright/test")
test("My First Test",async ({page}) => {
   await page.goto("https://www.google.com");
  // await expect(page).toHaveTitle("Google");
  const url= await page.url();
  console.log("Title is :->"+url);
  const Title=await page.title();
  console.log("Title is :->"+Title);
  expect (Title).toBe("Yahoo");
});
