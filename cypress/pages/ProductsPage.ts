class ProductsPage {
  pageTitle = '.title';
  productItems = '.inventory_item';
  productNames = '.inventory_item_name';
  cartLink = '.shopping_cart_link';

  getPageTitle() {
    return cy.get(this.pageTitle);
  }

  getProducts() {
    return cy.get(this.productItems);
  }

  getProductNames() {
    return cy.get(this.productNames);
  }

  addProductToCart(productName: string) {
    cy.contains('.inventory_item', productName)
      .find('button')
      .click();
  }

  openCart() {
    cy.get(this.cartLink).click();
  }
}

export default ProductsPage;