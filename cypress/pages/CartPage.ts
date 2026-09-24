class CartPage {
  cartItems = '.cart_item';
  productNames = '.inventory_item_name';
  checkoutButton = '[data-test="checkout"]';

  getCartItems() {
    return cy.get(this.cartItems);
  }

  getProductNames() {
    return cy.get(this.productNames);
  }

  removeProduct(productName) {
    cy.contains('.cart_item', productName)
      .find('button')
      .click();
  }

  clickCheckout() {
    cy.get(this.checkoutButton).click();
  }
}

export default CartPage;