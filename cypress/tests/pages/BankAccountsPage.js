export default class BankAccountsPage {
    elements = {
        createBankAccountTitle : () => cy.get('[data-test="user-onboarding-dialog-title"]').contains('Create Bank Account'),
        saveBankAccountDetailsButton : () => cy.get('[data-test="bankaccount-submit"]').contains('Save'),
        bankNameField : () => cy.get('#bankaccount-bankName-input'),
        routingNumberField : () => cy.get('#bankaccount-routingNumber-input'),
        accountNumberField : () => cy.get('#bankaccount-accountNumber-input'),
        bankNameHelperText : () => cy.get('#bankaccount-bankName-input-helper-text'), 
        bankRoutingNumberHelperText : () => cy.get('#bankaccount-routingNumber-input-helper-text'),
        bankNumberHelperText : () => cy.get('#bankaccount-accountNumber-input-helper-text'),

        //Enter a bank name 
        //Must contain at least 5 characters
        // Enter a valid bank routing number 
        // Must contain a valid routing number
        //Enter a valid bank account number
        //Must contain at least 9 digits
    }

    clickOnBankAccounts
}