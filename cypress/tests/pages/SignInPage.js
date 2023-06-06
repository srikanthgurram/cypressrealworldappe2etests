const SignInPage = class  {
    elements = {
        pageHeader : () => cy.get('h1').and('have.text','Sign in'),
        userNameField : () => cy.get('input#username'),
        passwordField : () => cy.get('[data-test="signin-password"]').within(() => {
            cy.get('input[type="password"]')
        }),
        rememberMeCheckbox : () => cy.get('[data-test="signin-remember-me"]').find('input[type="checkbox"]'),
        signInSubmitButton : () => cy.get('[data-test="signin-submit"]'),
        signUpLink : () => cy.get('[data-test="signup"]'),
        signInError : () => cy.get('[data-test="signin-error"]').contains('Username or password is invalid'),
        userNameHelperText: () => cy.get('#username-helper-text')
    }

    enterUserName (username) {
        this.elements.userNameField().clear()
        this.elements.userNameField().type(username)
    }

    enterPassword (password) {
        this.elements.passwordField().clear()
        this.elements.passwordField().type(password)
    }

    checkRemeberMeCheckbox () {
        this.elements.rememberMeCheckbox().check()
    }
    
    clickSignInButton () {
        this.elements.signInSubmitButton().click()
    }

    clickOnSignUpLink () {
        this.elements.signUpLink().click()
    }
}

export default SignInPage