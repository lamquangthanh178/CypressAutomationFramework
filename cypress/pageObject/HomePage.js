export class HomePage{

    navigateToHomePage()
    {
        cy.visit('http://automationpractice.com/index.php', {timeout:15000})
    }

    clickSignInButton()
    {
         cy.xpath('//a[@class="login"]').click()
    }
}