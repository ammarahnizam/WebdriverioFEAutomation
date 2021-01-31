class WishListPage {

  /**
  * Locators
  */

  get wishListBubble() {
    return $('[data-testid="wishlist-bubble"]');
  }

  get wishListCounter() {
    return $('[data-testid="wishlist-counter"]');
  }


  get textforEmptyWishList() {
    return $('p.wishlistNoProducts__text.wishlistNoProducts__text_bold');
  }

  /**
    * Locators
    */



  //--------------------Methods----------------------------
  deleteProdfromWishList() {

    browser.execute(function () {
      console.log("Delete from Wishlist", document.querySelector('.blockListProduct__delete'));
      document.querySelector('.blockListProduct__delete').click();

    });
  }
  //--------------------Methods----------------------------
}

module.exports = new WishListPage();
