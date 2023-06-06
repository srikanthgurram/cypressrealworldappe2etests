import UserHomePage from "../pages/UserHomePage";

const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("Bank Accounts", function () {
  // tag: bankAccount
  const userHomePage = new UserHomePage()

  beforeEach("signin", () => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    userHomePage.elements.bankAccountsNavLink().should('exist').and('have.attr', 'href', '/bankaccounts')
  })

  it.skip("creates a new bank account", function () {
    
  });

  it.skip("should display bank account form errors", function () {
    
  });

  it.skip("soft deletes a bank account", function () {
    
  });

  // TODO: [enhancement] the onboarding modal assertion can be removed after adding "onboarded" flag to user profile
  it.skip("renders an empty bank account list state with onboarding modal", function () {    
  });
});
