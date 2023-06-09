import BankAccountsPage from "../pages/BankAccountsPage"
import SignInPage from "../pages/SignInPage"
import SignUpPage from "../pages/SignupPage"
import UserHomePage from "../pages/UserHomePage"

describe("User Signup and Login", () => {
    const signInPage = new SignInPage()
    const signUpPage = new SignUpPage()
    const userHomePage = new UserHomePage()
    const bankAccountPage = new BankAccountsPage()

    const login = (username, password, remember=false) => {
        cy.visit('/')
        signInPage.enterUserName(username)
        signInPage.enterPassword(password)
        if(remember){
            signInPage.checkRemeberMeCheckbox()
        }
        signInPage.clickSignInButton()
    }

    beforeEach("Sign In", () => {
        cy.visit('/')
    })

    it("should redirect unauthenticated user to signin page", () => {
        cy.url().should('contains', '/signin')
    })

    it("should redirect to the home page after login", () => {
        login(Cypress.env('username'), Cypress.env('password'))
        cy.visit('/')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/` )
    })

    it("should remember a user for 30 days after login", () => {
        //tag: rememberme
        // Login with 'rememberme' option checked 
        login(Cypress.env('username'), Cypress.env('password'), true)        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/` )
        const cookes = cy.getCookie("connect.sid").should('have.property', 'expiry')
    })

    it("should allow a visitor to sign-up, login, and logout", () => {
        signInPage.clickOnSignUpLink()
        cy.url().should('contain', '/signup')

        // enter signup details
        signUpPage.elements.firstName().clear().type('Test User').invoke('val').should('equal', 'Test User')
        signUpPage.elements.lastName().clear().type('1234').invoke('val').should('equal', '1234')
        signUpPage.elements.userName().clear().type('testuser1234').invoke('val').should('equal', 'testuser1234')
        signUpPage.elements.password().clear().type('s3cret')
        signUpPage.elements.signUpButton().should('have.attr', 'disabled')
        signUpPage.elements.confirmPassword().clear().type('s3cret')
        signUpPage.elements.signUpButton().should('not.have.attr', 'disabled')
        signUpPage.elements.signUpButton().click()
        // page should be redirected to signinpage
        cy.url().should('contain', '/signin')
        login('testuser1234', 's3cret')
        // cy.url().should('be.equal', `${Cypress.config('baseUrl')}/` )
        userHomePage.elements.userOnboardingTitle().should('exist').and('have.text', 'Get Started with Real World App')

        // When I click on Next button it should take me to create new bank account page
        userHomePage.elements.userOnboardTitleNextButton().click()
        bankAccountPage.elements.createBankAccountTitle().should('exist').and('have.text', 'Create Bank Account')
        // error when the field is blank
        bankAccountPage.elements.bankNameField().clear().blur()
        bankAccountPage.elements.bankNameHelperText().should('exist').and('have.text', 'Enter a bank name')
        //enter less than 5 characters
        bankAccountPage.elements.bankNameField().clear().type('bank')
        bankAccountPage.elements.bankNameHelperText().should('exist').and('have.text', 'Must contain at least 5 characters')
        bankAccountPage.elements.bankNameField().clear().type('bank123')
        bankAccountPage.elements.bankNameHelperText().should('not.exist')

        // when routing number is empty
        bankAccountPage.elements.routingNumberField().clear().blur()
        bankAccountPage.elements.bankRoutingNumberHelperText().should('exist').and('have.text', 'Enter a valid bank routing number')
        bankAccountPage.elements.routingNumberField().clear().type('route')
        bankAccountPage.elements.bankRoutingNumberHelperText().should('exist').and('have.text', 'Must contain a valid routing number')
        bankAccountPage.elements.routingNumberField().clear().type('route1234')
        bankAccountPage.elements.bankRoutingNumberHelperText().should('not.exist')
        
        // verify bank account number field
        bankAccountPage.elements.accountNumberField().clear().blur()
        bankAccountPage.elements.bankNumberHelperText().should('exist').and('have.text', 'Enter a valid bank account number')
        bankAccountPage.elements.accountNumberField().type('981')
        bankAccountPage.elements.bankNumberHelperText().should('exist').and('have.text', 'Must contain at least 9 digits')
        bankAccountPage.elements.accountNumberField().type('981134567')
        bankAccountPage.elements.bankNumberHelperText().should('not.exist')
        // userHomePage.elements.logoutButton().click()
        // cy.url().should('contain', '/signin')

        // Enter a valid bank routing number 
        // Must contain a valid routing number
        //Enter a valid bank account number
        //Must contain at least 9 digits

    })

    it("should display login errors", () => {
        //leave the username field blank
        signInPage.elements.userNameField().focus().blur()
        signInPage.elements.userNameHelperText().should('contain', 'Username is required')
    })

    it("should display signup errors", () => {
        cy.url().should('contain', '/signin')
        signInPage.clickOnSignUpLink()
        cy.url().should('contain', '/signup')
        cy.wait(2000)
        // verify firstname errors
        signUpPage.elements.firstName().clear().blur()
        // signUpPage.elements.firstName().parent().should('have.class', 'Mui-error')
        signUpPage.elements.firstNameFieldHelperText().should('contain', 'First Name is required')

        // verify lastname errors
        signUpPage.elements.lastName().clear().blur()
        signUpPage.elements.lastNameFieldHelperText().should("be.visible").and('contain', 'Last Name is required')

        // verify username errors
        signUpPage.elements.userName().clear().blur()
        signUpPage.elements.userNameFieldHelperText().should("be.visible").and('contain', 'Username is required')

        // verify password errors        
        signUpPage.elements.password().clear().blur()
        signUpPage.elements.passwordFieldHelperText().should("be.visible").and('contain', 'Enter your password')
        // enter password of lenght <4
        signUpPage.elements.password().clear().type("123")
        signUpPage.elements.passwordFieldHelperText().should("be.visible").and('contain', "Password must contain at least 4 characters")
    
        // verify password length error
        // verify confirm password errors
        signUpPage.elements.confirmPassword().clear().blur()
        signUpPage.elements.confirmPasswordHelperText().should("be.visible").and('contain', 'Confirm your password')

        // enter a different password
        signUpPage.elements.password().clear().type('password')
        signUpPage.elements.confirmPassword().clear().type('differentpassword')
        signUpPage.elements.confirmPasswordHelperText().should("be.visible").and('contain', "Password does not match")

        // verify confirm password not matching error
        signUpPage.elements.signUpButton().should('have.attr', 'disabled')
    })

    it("should error for an invalid user", () => {
        login('test', 'password123')
        signInPage.elements.signInError().should('be.visible')
    })

    it("should error for an invalid password for existing user", () => {
        // Login with 'rememberme' option checked 
        login(Cypress.env('username'), 'password123')
        signInPage.elements.signInError().should('be.visible')
    })
})