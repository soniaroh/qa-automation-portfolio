import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername(users.validUser.username);
    loginPage.enterPassword(users.validUser.password);
    loginPage.clickLogin();

    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.openCart();

    cartPage.clickCheckout();
  });

  it('should display the checkout information page', () => {
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Checkout: Your Information');
  });

  it('should display an error when required information is missing', () => {
    checkoutPage.clickContinue();

    checkoutPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain', 'First Name is required');
  });

  it('should continue to checkout overview with valid information', () => {
    checkoutPage.enterFirstName('Sonia');
    checkoutPage.enterLastName('Rohani');
    checkoutPage.enterPostalCode('78613');
    checkoutPage.clickContinue();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title')
      .should('have.text', 'Checkout: Overview');
  });

  it('should complete the purchase', () => {
    checkoutPage.enterFirstName('Sonia');
    checkoutPage.enterLastName('Rohani');
    checkoutPage.enterPostalCode('78613');
    checkoutPage.clickContinue();

    checkoutPage.clickFinish();

    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header')
      .should('be.visible')
      .and('contain', 'Thank you for your order');
  });
});