import LoginPage from '../pages/LoginPage';

describe('Login', () => {
  const loginPage = new LoginPage();
  let users;

  before(() => {
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  it('should display the login page', () => {
    loginPage.visit();

    cy.get(loginPage.usernameInput).should('be.visible');
    cy.get(loginPage.passwordInput).should('be.visible');
    cy.get(loginPage.loginButton).should('be.visible');
  });

  it('should login successfully with valid credentials', () => {
    loginPage.visit();

    loginPage.enterUsername(users.validUser.username);
    loginPage.enterPassword(users.validUser.password);
    loginPage.clickLogin();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should display an error for invalid credentials', () => {
    loginPage.visit();

    loginPage.enterUsername(users.invalidUser.username);
    loginPage.enterPassword(users.invalidUser.password);
    loginPage.clickLogin();

    loginPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });

  it('should display an error when credentials are empty', () => {
    loginPage.visit();

    loginPage.clickLogin();

    loginPage
      .getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username is required');
  });
});