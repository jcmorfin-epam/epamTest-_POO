const { browser } = require("protractor");

class HomePage {
  constructor() {
    this.url = "https://www.epam.com/";
    this.contactUsLink = element(by.linkText("CONTACT US"));
    this.acceptCookiesButton = element(by.css('.button__content'));
  };
  open() {
    return browser.get(this.url);
  };

  clickOnAcceptCookiesButton() {
    this.acceptCookiesButton.click();
  };

  clickOnContactUsLink() {
    this.contactUsLink.click();
  };
};

module.exports = HomePage;