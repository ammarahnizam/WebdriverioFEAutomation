const homePage = require("../pageobjects/homePO");
const ProductListingPage = require("../pageobjects/productListingPO");
const loginPage = require("../pageobjects/loginPO");
const wishListPage = require("../pageobjects/wishListPO");
const tme = require("../lib/timeouts");




describe("Verify e2e flow -> Search Products -> Add first product to Wishlist -> Login ->Delete Product from wishlist ", function () {
    it("SHOULD open the URL and validate its correct", function () {
        homePage.openApp();
        expect(browser).toHaveUrlContaining("westwingnow.de");

    });

    it("SHOULD show search results corresponding to the entered keyword ", function () {
        homePage.enterSearchText();
        expect(browser).toHaveTitle('Möbel online kaufen | Möbel Online Shop | WestwingNow');
        expect(ProductListingPage.numberofProducts).toBePresent();

    });


    it("SHOULD show a login window upon adding a first product to wish list ", function () {

        browser.pause(tme.longtm);
        ProductListingPage.openFirstProduct();
        browser.pause(tme.longtm);
        ProductListingPage.addToWishList();
        browser.pause(tme.longtm);
        expect(loginPage.loginWindow).toBeVisible();

    });


    it("SHOULD show a count 1 in wishlist icon after successful login ", function () {
        browser.pause(tme.longtm);
        loginPage.clickLoginLink();
        browser.pause(tme.longtm);
        loginPage.performLogin();
        browser.pause(tme.longtm);
        expect(wishListPage.wishListCounter).toBeVisible();

    });

    it("SHOULD navigate to wishlist page and delete the product", function () {

        browser.url('https://www.westwingnow.de/customer/wishlist/index/');
        expect(browser).toHaveUrlContaining("wishlist/index");
        browser.pause(tme.shorttm);
        wishListPage.deleteProdfromWishList();
    });






});