const { expect } = require("playwright/test")

class HomePage{
    constructor(page){
        this.page=page
        this.menu="//img[@alt='menu']"
        this.logout="//button[@class='nav-menu-item']"
        this.manage="//span[normalize-space()='Manage']"
    }
    
    async verifyManageOption(){
        expect(this.page.locator(this.manage)).toBeVisible()
    }

    async logoutFromApplication(){
        await this.page.click(this.menu)
        await this.page.click(this.logout)
    }
}

module.exports=HomePage;