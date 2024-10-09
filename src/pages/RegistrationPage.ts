import { BasePage } from './BasePage';
import { expect } from 'playwright/test';

export class RegistrationPage extends BasePage {  
    // Locators
    private readonly signUpButton = 'a[href="#/signup"]';
    private readonly firstNameInput = 'input[name="firstName"]';
    private readonly lastNameInput = 'input[name="lastName"]';
    private readonly emailInput = 'input[name="email"]';
    private readonly passwordInput = 'input[name="password"]';
    private readonly registerButton = "tcommon-button[type='submit']";
    private readonly headline = "//h1[text()='Enter Tracker ID']";
    private readonly validationMessageLocator = "//em[text()=' This field is required. ']";
    private readonly backButtonTrackerLocator = ".back-button__container";
    private readonly toastMessageRegistrationLocator = ".toast-message";
    private readonly invalidEmailValidationLocator = "//em[text()=' The email address is invalid. ']";
    

    async navigateToRegistrationPage() {
      await this.clickMethod(this.signUpButton);
    }

    async navigateToSignUpForm() {
        await this.clickMethod(this.signUpButton);
    }

    async register(firstName: string, lastName: string, email: string,  password: string) {
        await this.fill(this.firstNameInput, firstName);
        await this.fill(this.lastNameInput, lastName);
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
    }

    async clkRegisterButton() {
        await this.clickMethod(this.registerButton);
    }

    async verifyHomePage(expectedText: string) {
        const actualText = await this.getText(this.headline);
        expect(actualText).toBe(expectedText);
        
    }

    async verifyValdationMsg(expectedText: string) {
        await this.waitForElement(this.validationMessageLocator);
        const actualText = await this.getText(this.validationMessageLocator);
        expect(actualText).toBe(expectedText); 
    }

    async verifyToastMessageRegistrationFailed() {
        await expect(this.page.locator(this.toastMessageRegistrationLocator)).toBeVisible();
    }

    async clkBackButtonTracker() {
        await this.clickMethod(this.backButtonTrackerLocator);
      }

      async verifyUrl(expectedUrlRegistration: string) {
        const currentUrl = this.page.url();
        expect(currentUrl).toBe(expectedUrlRegistration);
    }

    async verifyWrongEmailValidation(expectedTextEmail: string) {
        await this.waitForElement(this.invalidEmailValidationLocator);
        const actualText = await this.getText(this.invalidEmailValidationLocator);
        expect(actualText).toBe(expectedTextEmail); 
    }
}
