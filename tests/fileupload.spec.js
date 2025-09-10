const{test,expect} =require("@playwright/test");
test("File Upload Test", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles("./tests/uploads/prajot.txt");
    await page.waitForTimeout(2000);
    await page.locator("#file-submit").click();
    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!");
});