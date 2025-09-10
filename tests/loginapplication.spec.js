const{test,expect}=require('playwright/test')
const LoginPage=require('../pages/LoginPage');
const HomePage=require('../pages/HomePage');

test('Login to Application using POM',async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")           
    const loginPageObject=new LoginPage(page)
    await loginPageObject.loginToApplication("admin@email.com","admin@123")
    const homePageObject=new HomePage(page)
    await homePageObject.verifyManageOption()
    await homePageObject.logoutFromApplication()
    await loginPageObject.verifySignInButton()

});
