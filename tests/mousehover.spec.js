const{test, expect}=require("@playwright/test")
test("Mouse Hover Test", async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").type("admin@email.com");
    await page .getByPlaceholder("Enter Password").type("admin@123");
    await page.getByRole("button",{"name":"Sign in"}).click()
    await page.waitForTimeout(2000);
    await page.locator("//span[normalize-space()='Manage']").hover();
   await page.waitForTimeout(2000);
    await page.locator("//a[normalize-space()='Manage Categories']").click();
    await page.waitForTimeout(2000);




});