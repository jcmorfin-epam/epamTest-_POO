const HomePage = require("../pages/home_page");
const ContactUsPage = require("../pages/contact_us_page");
const EC = protractor.ExpectedConditions;

describe("Contact Us Page Verification", function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        return browser.manage().window().maximize();
    });

    it("Verify Contact Us form", async function () {
        var homePage = new HomePage();
        await homePage.open();
        await browser.wait(EC.elementToBeClickable(homePage.acceptCookiesButton), 10000);
        await homePage.clickOnAcceptCookiesButton();
        await homePage.clickOnContactUsLink();

        var contactUsPage = new ContactUsPage();
        await browser.wait(EC.elementToBeClickable(contactUsPage.firstNameTextField), 10000);
        await contactUsPage.verifyPageTitleIsCorrect();
        await contactUsPage.enterFirstName("first name");
        await contactUsPage.enterLastName("last name");
        await contactUsPage.enterEmailAddress("test@email.com");
        await contactUsPage.enterPhoneNumber("3344556677");
        await contactUsPage.selectCountry("Mexico");
        await contactUsPage.selectCity("Guadalajara");
        await contactUsPage.enterComments("Comments");
        await contactUsPage.consentToPrivacyPolicy();
        
        await contactUsPage.setHowYouHearAboutUsValue();
        await contactUsPage.submitForm();

    });
});