export default class BankAccountsPage {
    elements = {
        createBankAccountTitle : () => cy.get('[data-test="user-onboarding-dialog-title"]').contains('Create Bank Account'),
        saveBankAccountDetailsButton : () => cy.get('[data-test="bankaccount-submit"]').contains('Save'),
        bankNameField : () => cy.get('[data-test="bankaccount-bankName-input"]').contains(''),
        routingNumberField : () => cy.get('[data-test="bankaccount-routingNumber-input"]'),
        accountNumberField : () => cy.get('[data-test="bankaccount-accountNumber-input"]')
    }

    clickOnBankAccounts
}