const { browser } = require("protractor");

class ContactUsPage {
    constructor() {
      this.expectedTitle = 'Learn more about EPAM and Contact Us | EPAM';
      this.firstNameTextField = element(by.name('user_first_name'));
      this.lastNameTextField = element(by.name('user_last_name'));
      this.emailTextField = element(by.name('user_email'));
      this.userPhoneTextField = element(by.name('user_phone'));
      this.userCountryDropdown = element(by.name('user_country'));
      this.userCityDropDown = element(by.xpath('//select[@name="user_city"]//following-sibling::span[@dir="ltr"]'));
      this.commentsTextArea = element(by.name('user_comment'));
      this.consentToGDPR = element(by.css('label[for="new_form_gdprConsent"]'));
      this.submitButton = element(by.css('[type="submit"]'));

    };
    verifyPageTitleIsCorrect() {
      var currentTitle = browser.driver.getTitle();
      expect(currentTitle).toEqual(this.expectedTitle);
    };

    enterFirstName(firstName){
        this.firstNameTextField.sendKeys(firstName);
    };

    enterLastName(lastName){
        this.lastNameTextField.sendKeys(lastName);
    };

    enterEmailAddress(email){
        this.emailTextField.sendKeys(email);
    };

    enterPhoneNumber(phoneNumber){
        this.userPhoneTextField.sendKeys(phoneNumber);
    };

    async selectCountry(country){
        await this.userCountryDropdown.click();
        await element(by.css('input.select2-search__field')).sendKeys(country, protractor.Key.ENTER);

    };

    async selectCity(city){
        await this.userCityDropDown.click();
        await element(by.css('input.select2-search__field')).sendKeys(city, protractor.Key.ENTER);

    };

    enterComments(comment){
        this.commentsTextArea.sendKeys(comment);
    };

    consentToPrivacyPolicy(){
        this.consentToGDPR.click();
    };

    setHowYouHearAboutUsValue(){
        browser.driver.executeScript('document.querySelector(\'select[name="user_comment_how_hear_about"]\').value="Partner"');
    };

    submitForm(){
        this.submitButton.click();
    };

    waitTillFormIsLoaded(){
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(this.firstNameTextField), 10000);
    }
};

module.exports = ContactUsPage;