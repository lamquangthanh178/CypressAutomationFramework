import {HomePage} from "../pageObject/HomePage";
import {AuthenticationPage} from "../pageObject/AuthenticationPage";

const testData = require("../fixtures/login.json");
describe('Automation Test Suite ', function() {

    it ('Verify wording of authentication error - Incorrect Email', ()=>{
        const homePage = new HomePage()
        const authenticationPage = new AuthenticationPage()

        homePage.navigateToHomePage()
        homePage.clickSignInButton()
        authenticationPage.inputEmail(testData.email)
        authenticationPage.inputPassword(testData.password)
        authenticationPage.submitLogIn()
        authenticationPage.verifyWordingErrorAuthenWithIncorrectEmail()
    })

    it ('Verify wording of authentication error - Blank Email', ()=>{
        const homePage = new HomePage()
        const authenticationPage = new AuthenticationPage()

        homePage.navigateToHomePage()
        homePage.clickSignInButton()
        authenticationPage.submitLogIn()
        authenticationPage.verifyWordingErrorAuthenWithBlankEmail()
    })

})