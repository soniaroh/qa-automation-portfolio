# E-Commerce QA Automation Suite

End-to-end test automation project built with Cypress and TypeScript.

## Overview

This project demonstrates automated functional testing of the SauceDemo e-commerce application.

The test suite covers critical user flows including authentication, product browsing, shopping cart functionality, and checkout.

## Tech Stack

* Cypress 16
* TypeScript
* Node.js
* GitHub Actions
* Page Object Model

## Test Coverage

### Login

* Display login page
* Successful login with valid credentials
* Invalid login credentials
* Empty credentials validation

### Products

* Verify Products page
* Verify products are displayed
* Add a product to the cart

### Shopping Cart

* Verify added products
* Remove a product from the cart
* Proceed to checkout

### Checkout

* Verify checkout information page
* Required field validation
* Continue to checkout overview
* Complete a purchase

## Test Results

**14 automated tests passing**

The test suite can be run locally and is also configured to run automatically through GitHub Actions.

## Project Structure

```text
cypress/
├── e2e/
│   ├── login.cy.ts
│   ├── products.cy.ts
│   ├── cart.cy.ts
│   └── checkout.cy.ts
├── fixtures/
│   └── users.json
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
└── support/

.github/
└── workflows/
    └── cypress.yml
```

## Running Tests

Install dependencies:

```bash
npm install
```

Open Cypress interactively:

```bash
npm run cy:open
```

Run tests headlessly:

```bash
npm run cy:run
```

## Continuous Integration

GitHub Actions runs the Cypress test suite automatically when changes are pushed to the `main` branch or when a pull request is opened against `main`.

## QA Practices Demonstrated

* End-to-end testing
* Positive and negative test scenarios
* Page Object Model
* Test data fixtures
* Reusable page methods
* Functional validation of critical user flows
* Automated CI testing
