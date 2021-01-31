var loginData = require("../testdata/credentials");

class LoginWindow {
 /**
  * Locators
  */

  get loginWindow() {
    return $('[data-testid="popup-backdrop"]');
  }
  get loginLink() {
    return $('[data-testid="login_reg_switch_btn"]');
  }

  get emailField() {
    return $('[data-testid="long-register-email-field"]');
  }

  get passwordField() {
    return $('[data-testid="long-register-password-field"]');
  }

  get submitLoginButton() {
    return $('[data-testid="login_reg_submit_btn"]');
  }
  /**
  * Locators
  */

 

  //--------------------Methods----------------------------

  clickLoginLink() {

    browser.execute(function () {
      console.log("Click the login link", document.querySelector('[data-testid="login_reg_switch_btn"]'));
      document.querySelector('[data-testid="login_reg_switch_btn"]').click();

    });
  }

  performLogin() {
    browser.pause(2000);
    this.emailField.setValue(loginData.emailAddress);
    this.passwordField.setValue(loginData.password);
    browser.execute(function () {
      console.log("Login performed", document.querySelector('[data-testid="login_reg_submit_btn"]'));
      document.querySelector('[data-testid="login_reg_submit_btn"]').click();

    });
  }
  //--------------------Methods----------------------------



}

module.exports = new LoginWindow();
