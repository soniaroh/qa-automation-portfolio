import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Products', () => {
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
    loginPage.login(
      users.validUser.username,
      users.validUser.password
    );
  });

  it('should display the Products page after login', () => {
    productsPage
      .getPageTitle()
      .should('be.visible')
      .and('have.text', 'Products');
  });

  it('should display products', () => {
    productsPage
      .getProducts()
      .should('have.length.greaterThan', 0);
  });

  it('should add a product to the cart', () => {
    productsPage.addProductToCart('Sauce Labs Backpack');

    productsPage.openCart();

    cy.get('.inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack');
  });
});