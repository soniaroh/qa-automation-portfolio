class CheckoutPage {
  firstNameInput = '[data-test="firstName"]';
  lastNameInput = '[data-test="lastName"]';
  postalCodeInput = '[data-test="postalCode"]';
  continueButton = '[data-test="continue"]';
  finishButton = '[data-test="finish"]';
  errorMessage = '[data-test="error"]';

  enterFirstName(firstName: string) {
    cy.get(this.firstNameInput).type(firstName);
  }

  enterLastName(lastName: string) {
    cy.get(this.lastNameInput).type(lastName);
  }

  enterPostalCode(postalCode: string) {
    cy.get(this.postalCodeInput).type(postalCode);
  }

  clickContinue() {
    cy.get(this.continueButton).click();
  }

  clickFinish() {
    cy.get(this.finishButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}

export default CheckoutPage;