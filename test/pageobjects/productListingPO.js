class ProductListingPage {
  /**
   * Locators
   */
  get searchkKeywordDisplay() {
    return $("//h1[@class='RegularTitle__StyledPageTitle-zjo017-0 gCzFWF']");
  }
  get numberofProducts() {
    return $$('[data-testid="generic-product"]');
  }
  /**
    * Locators
    */



  //--------------------Methods----------------------------
  openFirstProduct() {

    browser.execute(function () {
      console.log("Open the very first Product", document.querySelector('[data-testid="generic-product"] a'));
      document.querySelector('[data-testid="generic-product"] a').click();

    });
  }

  addToWishList() {

    browser.execute(function () {
      console.log("Add the Product to wishlist", document.querySelector('[data-testid="pdp-wishlish-icon"]'));
      document.querySelector('[data-testid="pdp-wishlish-icon"]').click();

    });

  }

  //--------------------Methods----------------------------

}




module.exports = new ProductListingPage();
