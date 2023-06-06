import { User } from "../../../src/models";
import { isMobile } from "../../support/utils";
import UserHomePage from "../pages/UserHomePage";

const apiGraphQL = `${Cypress.env("apiUrl")}/graphql`;

describe("Bank Accounts", function () {
  const userHomePage = new UserHomePage()

  beforeEach("signin", () => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
    userHomePage.elements.bankAccountsNavLink().should('exist').and('have.attr', 'href', '/bankaccounts')
  })

  it("creates a new bank account", function () {
    
  });

  it("should display bank account form errors", function () {
    
  });

  it("soft deletes a bank account", function () {
    
  });

  // TODO: [enhancement] the onboarding modal assertion can be removed after adding "onboarded" flag to user profile
  it("renders an empty bank account list state with onboarding modal", function () {    
  });
});
