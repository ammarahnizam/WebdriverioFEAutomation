class HomePage {
  get prodSearchTextBox() {
    return $('[data-testid="search-input"]');
  }

   //--------------------Methods----------------------------
  openApp() {
    browser.url("/");
    browser.maximizeWindow();
    browser.deleteAllCookies();
  }
  enterSearchText() {
    this.prodSearchTextBox.setValue("mobel");
    browser.keys("Enter");
  }
}

module.exports = new HomePage();
