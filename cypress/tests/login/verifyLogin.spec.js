import SignInPage from '../pages/SignInPage'
import UserHomePage from '../pages/UserHomePage'

const userHome = new UserHomePage()
describe.skip("Signin page", () => {
    beforeEach("Visit page", () => {
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.visit('/')
    })

    it("I should see notifications icon", () => {
        userHome.elements.notificationsBellIcon().should('be.visible')
    })

    it("I should see user full name in the Navbar", () => {
        userHome.elements.userFullNameInSideBar().invoke('text').should('be.equal', 'Edgar J')
    })

    it("I should be able to Navigate to Bank Accounts", () => {
        userHome.navigateToBankAccounts()
        cy.url().should('contain', '/bankaccounts')
    })

    it("I should be able to Navigate to My Accounts from side navbar", () => {
        userHome.navigateToMyAccount()
        cy.url().should('contain', '/user/settings')
    })

    it("I should be able to navigate to Notifications from sidebar", () => {
        userHome.navigateToNotifications()
        cy.url().should('contain', '/notifications')
    })

    it("I should be able to Navigate between the pages", () => {
        userHome.navigateToHome()
        userHome.navigateToMyAccount()
        userHome.navigateToBankAccounts()
        cy.go('back')
        cy.url().should('contain', '/user/settings')
        cy.go('forward')
        cy.url().should('contain', '/bankaccounts')
        cy.go(-2)
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/` )
    })

    it("I should be able to filter Bank accounts from the sidebar nav list", () => {
        userHome.elements.bankAccountsNavLink.click()
        cy.url().should('contain', '/bankaccounts')
    })
})