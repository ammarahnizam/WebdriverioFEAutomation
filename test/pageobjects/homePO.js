class HomePage {
  get prodSearchTextBox() {
    return $('[data-testid="search-input"]');
  }

  //--------------------Methods----------------------------
  openApp() {
    browser.url("/");

  }
  enterSearchText() {
    this.prodSearchTextBox.setValue("mobel");
    browser.keys("Enter");
  }
}

module.exports = new HomePage();
