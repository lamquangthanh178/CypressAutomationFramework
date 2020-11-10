import helper from '../commonFunction/helper.js'
import command from '../support/commands.js'

const tb_email="//input[@id='email']";
const tb_password="//input[@id='passwd']";
const btn_submitLogin="//button[@id='SubmitLogin']"
const lb_errorAuthenWithIncorrectEmail="//*[contains(text(),'Authentication failed.')]"
const lb_errorAuthenWithBlankEmail="//*[contains(text(),'An email address required.')]"

export class AuthenticationPage{

    inputEmail(emailText){
        cy.xpath(tb_email, {timeout:3000}).type(emailText)
    }

    inputPassword(passwordText){
        cy.xpath(tb_password, {timeout:3000}).type(passwordText)
    }

    submitLogIn(){
       cy.xpath(btn_submitLogin).click()
    }

    verifyWordingErrorAuthenWithIncorrectEmail(){
        cy.xpath(lb_errorAuthenWithIncorrectEmail).should('be.visible')
    }

    verifyWordingErrorAuthenWithBlankEmail(){
        cy.xpath(lb_errorAuthenWithBlankEmail).should('be.visible')
    }

}