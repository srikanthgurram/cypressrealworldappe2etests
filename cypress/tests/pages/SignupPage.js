export default class SignUpPage {
    elements = {
        signUpPageHeader : () => cy.get('[data-test="signup-title"]').contains('Sign Up'),
        firstName : () => cy.get('#firstName'),
        firstNameHelperText: () => cy.get('#id="firstName-helper-text"'),
        lastName : () => cy.get('[data-test="signup-last-name"]').find('#lastName'),
        userName : () => cy.get('[data-test="signup-username"]').find('#username'),
        password : () => cy.get('[data-test="signup-password"]').find('#password'),
        confirmPassword : () => cy.get('[data-test="signup-confirmPassword"]').find('#confirmPassword'),
        signUpButton : () => cy.get('[data-test="signup-submit"]'),
        firstNameFieldHelperText : () => cy.get('#firstName-helper-text'),
        lastNameFieldHelperText : () => cy.get('#lastName-helper-text'),
        userNameFieldHelperText : () => cy.get('#username-helper-text'),
        passwordFieldHelperText : () => cy.get('#password-helper-text'),
        confirmPasswordHelperText : () => cy.get('#confirmPassword-helper-text')

    }
}