import SignInPage from "../tests/pages/SignInPage";
import UserHomePage from "../tests/pages/UserHomePage";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//


// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
    const signInPage = new SignInPage()
    const userHomePage = new UserHomePage()
    cy.session([username, password], () => {
        cy.visit('/')
        signInPage.enterUserName(username)
        signInPage.enterPassword(password)
        signInPage.clickSignInButton()
        userHomePage.elements.newTransactionButton().should('be.visible')
        userHomePage.elements.notificationsBellIcon().should('be.visible')
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })