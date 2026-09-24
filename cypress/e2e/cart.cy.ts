import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

describe('Shopping Cart', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
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
    productsPage.addProductToCart('Sauce Labs Bike Light');
    productsPage.openCart();
  });

  it('should display added products in the cart', () => {
    cartPage.getCartItems().should('have.length', 2);

    cartPage
      .getProductNames()
      .should('contain', 'Sauce Labs Backpack')
      .and('contain', 'Sauce Labs Bike Light');
  });

  it('should remove a product from the cart', () => {
    cartPage.removeProduct('Sauce Labs Backpack');

    cartPage.getCartItems().should('have.length', 1);

    cartPage
      .getProductNames()
      .should('not.contain', 'Sauce Labs Backpack');
  });

  it('should proceed to checkout', () => {
    cartPage.clickCheckout();

    cy.url().should('include', '/checkout-step-one.html');
    cy.get('.title').should('have.text', 'Checkout: Your Information');
  });
});