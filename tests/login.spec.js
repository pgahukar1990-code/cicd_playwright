const{test, expect}=require("playwright/test")
test("login",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Username").type("Admin",{delay:100});
    await page.getByPlaceholder("Password").fill("");
    await page.getByPlaceholder("Password").type("admin123",{delay:200});
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveURL(/dashboard/);
    await page.locator("//img[@class='oxd-userdropdown-img']").click();
    await page.locator("//a[normalize-space()='Logout']").click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/login/);




});