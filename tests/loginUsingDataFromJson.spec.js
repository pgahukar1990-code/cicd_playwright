const { test, expect } = require('playwright/test')
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')))
const testdatalogin = JSON.parse(JSON.stringify(require('../testdatalogin.json')))

test.describe("Data Driven Login Test", () => {

    for (const data of testdatalogin) {

        test.describe(`Login with multipe data sets ${data.id}`, function () {

            test("Login to Application using data from JSON file", async ({ page }) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.locator("#email1").fill(data.username);
                await page.locator("//input[@id='password1']").fill(data.password);
                await page.locator("//button[text()='Sign in']").click();

            });

        });



    }

})

