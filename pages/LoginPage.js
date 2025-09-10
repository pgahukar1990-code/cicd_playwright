const { expect } = require("playwright/test")

class LoginPage{

    constructor(page){
        this.page=page
        this.username="#email1"
        this.password="//input[@id='password1']"
        this.signheader="//h2[normalize-space()='Sign In']"
        this.loginbutton="//button[text()='Sign in']"

    }
    async loginToApplication(user,pass){
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginbutton)
        await this.page.waitForTimeout(1000);
        //await this.page.pause()

    }
    async verifySignInButton(){
       expect(this.page.locator(this.signheader)).toBeVisible()
    }
}
module.exports=LoginPage;