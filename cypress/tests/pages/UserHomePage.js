
export default class UserHomePage {
    elements = {
        newTransactionButton : () => cy.get('[data-test="nav-top-new-transaction"]'),
        notificationsBellIcon : () => cy.get('[data-test="nav-top-notifications-link"]'),
        userFullNameInSideBar: () => cy.get('[data-test="sidenav-user-full-name"]'),
        homeNavigationLink: () => cy.get('[data-test="sidenav-home"]'),
        myAccountNavigationLink: () => cy.get('[data-test="sidenav-user-settings"]'),
        bankAccountsNavigationLink: () => cy.get('[data-test="sidenav-bankaccounts"]'),
        bankAccountsNavLink: () => cy.get('[data-test="sidenav"] ul a').filter(':contains("Bank Accounts")'),
        notificationsNavigationLink: () => cy.get('[data-test="sidenav-notifications"]'),
        logoutButton: () => cy.get('[data-test="sidenav-signout"]'),
        userOnboardingTitle: () => cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
    }

    getUserFullName() {
        return this.elements.userFullNameInSideBar().invoke('text')
    }

    clickOnLogout() {
        this.elements.logoutButton().click()
    }

    navigateToHome() {
        this.elements.homeNavigationLink().click()
    }

    navigateToMyAccount() {
        this.elements.myAccountNavigationLink().click()
    }

    navigateToBankAccounts() {
        this.elements.bankAccountsNavigationLink().click()
    }

    navigateToNotifications() {
        this.elements.notificationsNavigationLink().click()
    }
}